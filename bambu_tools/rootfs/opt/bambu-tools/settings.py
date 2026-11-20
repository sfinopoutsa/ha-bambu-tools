"""Bambu Tools settings kept by the service (/data/settings.json) and the cost of a print.

Pure logic (no network), tested in tests/. The Settings page changes them by firing the Home Assistant
event `bambu_tools_command` (see service.py); the service applies the command here and republishes.

Cost of a print = filament + electricity, each only when its price is known (an unknown part is None,
never 0):
- filament: grams used (history.py: scaled by the progress for failed prints) × the price per kg of the
  print's material (the type of the active tray, e.g. PLA, ASA, PA6-CF).
- electricity: an estimate from the printer's average power typed in by the user × the elapsed time
  (including pauses) × the price per kWh.
"""
import json
import math
from pathlib import Path

MAX_MATERIALS = 50


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
        self.data = {"materials": {}, "price_kwh": None, "watts": {}, "rev": 0}
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
        if kind != "set_costs":
            raise ValueError(f"unknown command {kind!r}")
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
        self.data.update(materials=materials, watts=watts, price_kwh=price_kwh)
        self.data["rev"] = cmd.get("rev") if isinstance(cmd.get("rev"), (int, float)) else self.data.get("rev", 0) + 1
        return True

    # ---------------- cost ----------------
    def material_price(self, material):
        return self.data["materials"].get(material_key(material)) if material else None

    def job_cost(self, prefix, job):
        """{"filament", "energy", "total"} in the currency of Home Assistant; None for unknown parts."""
        filament = None
        price = self.material_price((job.get("filament") or {}).get("type"))
        if price is not None and job.get("grams") is not None:
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
                "watts": dict(self.data["watts"])}
