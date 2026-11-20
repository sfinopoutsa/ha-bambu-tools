"""Bambu Tools settings kept by the service (/data/settings.json) and the cost of a print.

Pure logic (no network), tested in tests/. The Settings page changes them by firing the Home Assistant
event `bambu_tools_command` (see service.py); the service applies the command here and republishes.

Cost of a print = filament + electricity, each only when its price is known (an unknown part is None,
never 0):
- filament: grams used (history.py: scaled by the progress for failed prints) × the price per kg of the
  print's material (the type of the active tray, e.g. PLA, ASA, PA6-CF).
- electricity: an estimate from the printer's average power typed in by the user × the elapsed time
  (including pauses) × the price per kWh.

Spools: name, material, colour, net weight, optional price per kg and the tray (AMS tray / external spool
entity) it sits in. When a print starts the service tags the print's trays with the spools in them
(job["spools"] = {"AMS 1 Tray 3": spool id}); what is left on a spool is always derived from the prints:
net weight − the filament those prints used from it. A price comes from the spool, else from its material,
else there is none.
"""
import json
import math
import re
import secrets
from datetime import datetime, timezone
from pathlib import Path

MAX_MATERIALS = 50
MAX_SPOOLS = 200
LOW_GRAMS = 100     # a spool below this is "almost empty"
COLOR_RE = re.compile(r"^#[0-9a-fA-F]{6}$")


def _price(v, what):
    """A price / power: a number >= 0, or None to clear it."""
    if v is None or v == "":
        return None
    try:
        f = float(v)
    except (TypeError, ValueError):
        raise ValueError(f"{what}: not a number") from None
    if not math.isfinite(f) or f < 0 or f > 1_000_000:
        raise ValueError(f"{what}: out of range")
    return f


def material_key(name):
    return str(name or "").strip().upper()[:40]


class Settings:
    def __init__(self, path=None):
        self.path = Path(path) if path else None
        self.data = {"materials": {}, "price_kwh": None, "watts": {}, "spools": [], "low_grams": LOW_GRAMS, "rev": 0}
        if self.path and self.path.exists():
            try:
                self.data.update(json.loads(self.path.read_text(encoding="utf-8")))
            except Exception:
                pass

    def save(self):
        if not self.path:
            return
        tmp = self.path.with_suffix(".tmp")
        tmp.write_text(json.dumps(self.data, ensure_ascii=False), encoding="utf-8")
        tmp.replace(self.path)

    # ---------------- commands from the Settings page ----------------
    def apply(self, cmd):
        """Apply a command (dict). Raises ValueError for a bad one; nothing is changed then."""
        kind = cmd.get("cmd")
        handler = {"set_costs": self._set_costs, "add_spool": self._add_spool, "update_spool": self._update_spool,
                   "archive_spool": self._archive_spool, "assign_spool": self._assign_spool}.get(kind)
        if not handler:
            raise ValueError(f"unknown command {kind!r}")
        handler(cmd)
        self.data["rev"] = cmd.get("rev") if isinstance(cmd.get("rev"), (int, float)) else self.data.get("rev", 0) + 1
        return True

    def _set_costs(self, cmd):
        materials = {}
        for name, price in (cmd.get("materials") or {}).items():
            key = material_key(name)
            p = _price(price, f"price of {key}")
            if key and p is not None:
                materials[key] = p
        if len(materials) > MAX_MATERIALS:
            raise ValueError("too many materials")
        watts = {}
        for prefix, w in (cmd.get("watts") or {}).items():
            p = _price(w, f"power of {prefix}")
            if p is not None:
                watts[str(prefix)[:80]] = p
        price_kwh = _price(cmd.get("price_kwh"), "price per kWh")
        low = cmd.get("low_grams", self.data.get("low_grams", LOW_GRAMS))
        low = _price(low, "almost-empty limit")
        self.data.update(materials=materials, watts=watts, price_kwh=price_kwh, low_grams=LOW_GRAMS if low is None else low)

    # ---------------- spools ----------------
    @staticmethod
    def _spool_fields(raw, partial=False):
        """Validated spool fields from a command; partial = only the fields given."""
        raw = raw or {}
        out = {}
        if "name" in raw or not partial:
            name = str(raw.get("name") or "").strip()[:60]
            if not name:
                raise ValueError("a spool needs a name")
            out["name"] = name
        if "material" in raw or not partial:
            out["material"] = material_key(raw.get("material")) or None
        if "color" in raw or not partial:
            color = str(raw.get("color") or "").strip()
            if color and not COLOR_RE.match(color):
                raise ValueError("colour: use #rrggbb")
            out["color"] = color.lower() or None
        if "weight" in raw or not partial:
            w = _price(raw.get("weight", 1000), "net weight")
            if w is None or w <= 0 or w > 20000:
                raise ValueError("net weight: 1 to 20000 g")
            out["weight"] = w
        if "price" in raw or not partial:
            out["price"] = _price(raw.get("price"), "spool price")
        if "used_before" in raw or not partial:
            # filament already used before the spool was added here (a half-used spool)
            used = _price(raw.get("used_before", 0), "already used")
            out["used_before"] = used or 0.0
        return out

    def spool(self, sid):
        return next((sp for sp in self.data["spools"] if sp["id"] == sid), None)

    def _add_spool(self, cmd):
        if len([sp for sp in self.data["spools"] if not sp.get("archived")]) >= MAX_SPOOLS:
            raise ValueError("too many spools")
        fields = self._spool_fields(cmd.get("spool"))
        tray = self._check_tray((cmd.get("spool") or {}).get("tray") or None)  # before anything is changed
        sp = {"id": secrets.token_hex(4), **fields, "tray": None, "archived": False,
              "added": datetime.now(timezone.utc).isoformat(timespec="seconds")}
        self.data["spools"].append(sp)
        if tray:
            self._put_in_tray(sp, tray)

    def _update_spool(self, cmd):
        sp = self.spool(cmd.get("id"))
        if not sp:
            raise ValueError("no such spool")
        sp.update(self._spool_fields(cmd.get("spool"), partial=True))

    def _archive_spool(self, cmd):
        sp = self.spool(cmd.get("id"))
        if not sp:
            raise ValueError("no such spool")
        sp["archived"], sp["tray"] = bool(cmd.get("archived", True)), None

    def _assign_spool(self, cmd):
        sp = self.spool(cmd.get("id"))
        if not sp or sp.get("archived"):
            raise ValueError("no such spool")
        self._put_in_tray(sp, cmd.get("tray") or None)

    @staticmethod
    def _check_tray(tray):
        if tray is None:
            return None
        tray = str(tray)
        if not tray.startswith("sensor.") or len(tray) > 120:
            raise ValueError("tray: a sensor entity")
        return tray

    def _put_in_tray(self, sp, tray):
        tray = self._check_tray(tray)
        if tray is not None:
            for other in self.data["spools"]:  # one spool per tray
                if other.get("tray") == tray:
                    other["tray"] = None
        sp["tray"] = tray

    def spool_in(self, tray):
        return next((sp for sp in self.data["spools"] if sp.get("tray") == tray and not sp.get("archived")), None)

    @staticmethod
    def used_from(jobs, sid):
        """Filament the given prints used from a spool (they carry job["spools"] = {tray key: spool id})."""
        used = 0.0
        for job in jobs:
            keys = [k for k, v in (job.get("spools") or {}).items() if v == sid]
            if not keys:
                continue
            trays = job.get("trays") or {}
            if trays:
                used += sum(trays.get(k) or 0 for k in keys)
            elif job.get("grams") and len(job.get("spools") or {}) == 1:
                used += job["grams"]
        return used

    def remaining(self, sp, jobs):
        return round(sp["weight"] - (sp.get("used_before") or 0) - self.used_from(jobs, sp["id"]), 1)

    def spools_view(self, jobs):
        """Spools with what is left (for the entity and the Filament page)."""
        out = []
        for sp in self.data["spools"]:
            left = self.remaining(sp, jobs)
            out.append({**sp, "remaining": left, "percent": max(0, round(100 * left / sp["weight"])) if sp["weight"] else None,
                        "low": left < self.data.get("low_grams", LOW_GRAMS)})
        return out

    # ---------------- cost ----------------
    def material_price(self, material):
        return self.data["materials"].get(material_key(material)) if material else None

    def _price_per_kg(self, sid, material):
        sp = self.spool(sid) if sid else None
        if sp and sp.get("price") is not None:
            return sp["price"]
        return self.material_price((sp or {}).get("material") or material)

    def job_cost(self, prefix, job):
        """{"filament", "energy", "total"} in the currency of Home Assistant; None for unknown parts."""
        filament = None
        spools = job.get("spools") or {}
        material = (job.get("filament") or {}).get("type")
        trays = job.get("trays") or {}
        if trays and job.get("grams") is not None:
            # per tray: the spool in it (its price, else its material's), else the print's material
            parts = [(g, self._price_per_kg(spools.get(k), material)) for k, g in trays.items() if g]
            if parts and all(price is not None for _, price in parts):
                filament = round(sum(g / 1000 * price for g, price in parts), 2)
        elif job.get("grams") is not None:
            price = self._price_per_kg(next(iter(spools.values()), None) if len(spools) == 1 else None, material)
            if price is not None:
                filament = round(job["grams"] / 1000 * price, 2)
        energy = None
        watts, kwh_price = self.data["watts"].get(prefix), self.data.get("price_kwh")
        if watts is not None and kwh_price is not None and job.get("duration_s") is not None:
            energy = round(watts * job["duration_s"] / 3600 / 1000 * kwh_price, 2)
        parts = [v for v in (filament, energy) if v is not None]
        return {"filament": filament, "energy": energy, "total": round(sum(parts), 2) if parts else None}

    def public(self):
        """What the Settings page shows."""
        return {"materials": dict(self.data["materials"]), "price_kwh": self.data.get("price_kwh"),
                "watts": dict(self.data["watts"]), "low_grams": self.data.get("low_grams", LOW_GRAMS)}
