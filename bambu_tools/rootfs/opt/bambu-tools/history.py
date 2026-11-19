"""Print history: turns the print status of each printer into finished jobs.

Pure logic (no network), so it can be tested on its own. The service feeds it the printer's state when the
print status changes and publishes `attributes()` as a Home Assistant entity per printer.

A job starts when the status enters one of ACTIVE and ends when it becomes finish / failed (result = that
state) or idle (result "stopped", e.g. the printer was restarted). "offline"/"unavailable" in between
do not end a job.
"""
import json
import re
from datetime import datetime, timedelta, timezone
from pathlib import Path

ACTIVE = {"running", "pause", "prepare", "slicing"}
ENDED = {"finish", "failed"}
KEEP_JOBS = 1000   # kept in the file
SHOW_JOBS = 20     # shown in the entity
SHOW_MONTHS = 12


def parse_time(value):
    """ISO time from a timestamp sensor (or an ISO string) -> aware datetime; None when not a time."""
    if not value or value in ("unknown", "unavailable"):
        return None
    try:
        t = datetime.fromisoformat(str(value).replace("Z", "+00:00"))
    except ValueError:
        return None
    return t if t.tzinfo else t.replace(tzinfo=timezone.utc)


def number(value):
    try:
        v = float(value)
    except (TypeError, ValueError):
        return None
    return v if v == v else None  # NaN


def iso(t):
    return t.astimezone(timezone.utc).isoformat(timespec="seconds")


def is_calibration(file):
    """The printer's own calibration jobs (e.g. auto_filament_cali.gcode): ha-bambulab keeps showing the weight
    of the previous print during them, so that weight must not be counted."""
    return bool(re.search(r"cali", file or "", re.I)) and str(file).lower().endswith(".gcode")


def _filament(job):
    if is_calibration(job["file"]):
        job["grams"] = job["meters"] = None
    return job


class History:
    def __init__(self, path=None):
        self.path = Path(path) if path else None
        self.data = {"version": 1, "printers": {}, "backfilled": []}
        if self.path and self.path.exists():
            try:
                self.data.update(json.loads(self.path.read_text(encoding="utf-8")))
            except Exception:
                pass
        for p in self.data["printers"].values():  # rules added later apply to jobs already stored
            for job in p.get("jobs", []):
                _filament(job)

    def save(self):
        if not self.path:
            return
        tmp = self.path.with_suffix(".tmp")
        tmp.write_text(json.dumps(self.data, ensure_ascii=False), encoding="utf-8")
        tmp.replace(self.path)

    def printer(self, prefix, name=None):
        p = self.data["printers"].setdefault(prefix, {"name": name or prefix, "jobs": [], "active": None})
        if name:
            p["name"] = name
        return p

    # ---------------- events ----------------
    def update(self, prefix, status, now, snap, name=None):
        """Feed the current print status. Returns the job that just ended, or None."""
        p = self.printer(prefix, name)
        active = p.get("active")
        if status in ACTIVE:
            if not active:
                start = snap.get("start_time") if self._plausible_start(snap.get("start_time"), now) else now
                p["active"] = {"start": iso(start), "file": snap.get("task") or ""}
            elif snap.get("task") and not active.get("file"):
                active["file"] = snap["task"]
            return None
        if status in ENDED or status == "idle":
            result = status if status in ENDED else "stopped"
            if active:
                return self._close(p, active, result, now, snap)
            return None
        return None  # offline / unavailable / unknown: wait

    def reconcile(self, prefix, status, now, snap, name=None):
        """After (re)connecting: catch up with what happened while the app was not watching."""
        p = self.printer(prefix, name)
        active = p.get("active")
        if status in ACTIVE:
            return self.update(prefix, status, now, snap, name)
        if active and (status in ENDED or status == "idle"):
            end = snap.get("end_time")
            start = parse_time(active["start"])
            if not (end and start and start < end <= now):
                end = now
            return self._close(p, active, status if status in ENDED else "stopped", end, snap)
        return None

    @staticmethod
    def _plausible_start(t, now):
        return bool(t) and now - timedelta(days=4) <= t <= now + timedelta(minutes=5)

    def _close(self, p, active, result, end, snap):
        start = parse_time(active["start"]) or end
        job = {
            "file": active.get("file") or snap.get("task") or "",
            "start": iso(start),
            "end": iso(end),
            "duration_s": max(0, int((end - start).total_seconds())),
            "result": result,
            "grams": snap.get("grams"),
            "meters": snap.get("meters"),
            "layers": snap.get("layers"),
        }
        _filament(job)
        p["active"] = None
        last = p["jobs"][-1] if p["jobs"] else None
        if last and last["file"] == job["file"] and abs(
                (parse_time(last["start"]) - start).total_seconds()) < 180:
            return None  # the same job again (e.g. reconnect right after the end)
        p["jobs"].append(job)
        del p["jobs"][:-KEEP_JOBS]
        return job

    # ---------------- history import ----------------
    def import_timeline(self, prefix, timeline, values_at, name=None):
        """Add the jobs found in a recorded status timeline [(datetime, status), …] (oldest first).
        values_at(t) -> snap with task/grams/meters/layers/start_time at time t. Jobs already known are skipped."""
        p = self.printer(prefix, name)
        known = {(j["file"], j["start"][:16]) for j in p["jobs"]}
        found, start = [], None
        for t, status in timeline:
            if status in ACTIVE and start is None:
                start = t
            elif start is not None and (status in ENDED or status == "idle"):
                snap = values_at(t)
                st = snap.get("start_time")
                if not (st and start - timedelta(hours=2) <= st <= t):
                    st = start
                job = {
                    "file": snap.get("task") or "", "start": iso(st), "end": iso(t),
                    "duration_s": max(0, int((t - st).total_seconds())),
                    "result": status if status in ENDED else "stopped",
                    "grams": snap.get("grams"), "meters": snap.get("meters"), "layers": snap.get("layers"),
                }
                if (job["file"], job["start"][:16]) not in known:
                    found.append(_filament(job))
                start = None
        if found:
            p["jobs"] = sorted(p["jobs"] + found, key=lambda j: j["end"])[-KEEP_JOBS:]
        return len(found)

    # ---------------- what the card shows ----------------
    def attributes(self, prefix, tz=None):
        p = self.printer(prefix)
        jobs = p["jobs"]
        months = {}
        for j in jobs:
            end = parse_time(j["end"])
            key = (end.astimezone(tz) if tz else end.astimezone()).strftime("%Y-%m")
            m = months.setdefault(key, {"month": key, "prints": 0, "finished": 0, "failed": 0, "hours": 0.0, "grams": 0.0})
            m["prints"] += 1
            m["finished" if j["result"] == "finish" else "failed"] += 1
            m["hours"] += j["duration_s"] / 3600
            m["grams"] += j.get("grams") or 0
        for m in months.values():
            m["hours"] = round(m["hours"], 1)
            m["grams"] = round(m["grams"])
        total_h = sum(j["duration_s"] for j in jobs) / 3600
        total_g = sum((j.get("grams") or 0) for j in jobs)
        return {
            "printer": prefix,
            "jobs": list(reversed(jobs[-SHOW_JOBS:])),
            "months": sorted(months.values(), key=lambda m: m["month"], reverse=True)[:SHOW_MONTHS],
            "total_prints": len(jobs),
            "total_finished": sum(1 for j in jobs if j["result"] == "finish"),
            "total_hours": round(total_h, 1),
            "total_grams": round(total_g),
            "active": p.get("active"),
        }
