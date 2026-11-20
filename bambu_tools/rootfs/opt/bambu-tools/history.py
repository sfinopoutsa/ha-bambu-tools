"""Print history: turns the print status of each printer into finished jobs.

Pure logic (no network), so it can be tested on its own. The service feeds it the printer's state when the
print status changes and publishes `attributes()` as a Home Assistant entity per printer.

A job starts when the status enters one of ACTIVE and ends when it becomes finish / failed (result = that
state) or idle (result "stopped", e.g. the printer was restarted). "offline"/"unavailable" in between
do not end a job.

A job: file, start, end, duration_s, result, progress (% reached), grams / meters (filament actually used:
for failed and stopped prints the sliced amount scaled by the progress; the sliced amount is kept in
grams_planned), trays (grams used per AMS tray / external spool, from ha-bambulab's per-tray weights; the
sliced split in trays_planned), layers, filament (the active tray: tray entity, name, type, colour) and photos
(media paths of the first-layer and end pictures, filled in by the service).
"""
import json
import re
from datetime import datetime, timedelta, timezone
from pathlib import Path

VERSION = 3
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
    """Filament actually used: none for calibration jobs; for failed / stopped prints the sliced amount
    scaled by the progress reached (when known). Safe to run again on a stored job."""
    if is_calibration(job["file"]):
        job["grams"] = job["meters"] = job["grams_planned"] = None
        job["trays"] = job["trays_planned"] = None
        return job
    if "grams_planned" not in job:
        job["grams_planned"], job["meters_planned"] = job.get("grams"), job.get("meters")
    if "trays_planned" not in job:
        job["trays_planned"] = job.get("trays")
    prog = job.get("progress")
    share = 1.0 if job["result"] == "finish" or prog is None else max(0.0, min(100.0, prog)) / 100
    for used, planned in (("grams", "grams_planned"), ("meters", "meters_planned")):
        job[used] = None if job.get(planned) is None else round(job[planned] * share, 2)
    planned = job.get("trays_planned")
    job["trays"] = {k: round(v * share, 2) for k, v in planned.items()} if planned else None
    return job


class History:
    def __init__(self, path=None):
        self.path = Path(path) if path else None
        self.data = {"version": VERSION, "printers": {}, "backfilled": []}
        if self.path and self.path.exists():
            try:
                self.data.update(json.loads(self.path.read_text(encoding="utf-8")))
            except Exception:
                pass
        old = self.data.get("version", 1)
        for p in self.data["printers"].values():  # rules added later apply to jobs already stored
            for job in p.get("jobs", []):
                if old < 3 and job["result"] != "finish" and job.get("progress") == 0:
                    # 1.6.0 read the progress after the printer had reset it to 0: ask the recorder again
                    job["progress"] = None
                    job.pop("progress_unknown", None)
                if job["result"] == "finish" and job.get("progress") is None:
                    job["progress"] = 100  # stored before the progress was recorded
                _filament(job)
        self.data["version"] = VERSION

    def find_job(self, prefix, start):
        """The active or finished job that started at `start` (ISO), or None."""
        p = self.printer(prefix)
        if p.get("active") and p["active"].get("start") == start:
            return p["active"]
        return next((j for j in reversed(p["jobs"]) if j["start"] == start), None)

    def all_jobs(self):
        """[(prefix, printer name, job)] of every printer, oldest first."""
        rows = [(prefix, p.get("name") or prefix, j) for prefix, p in self.data["printers"].items() for j in p["jobs"]]
        return sorted(rows, key=lambda r: r[2]["end"])

    def needs_progress(self, prefix):
        """Failed / stopped jobs stored before the progress was recorded (filled in from the recorder)."""
        return [j for j in self.printer(prefix)["jobs"]
                if j["result"] != "finish" and j.get("progress") is None and not j.get("progress_unknown")]

    def set_progress(self, job, progress):
        job["progress"] = progress
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
    def update(self, prefix, status, now, snap, name=None, max_age=timedelta(minutes=15)):
        """Feed the current print status. Returns the job that just ended, or None.

        The printer's start_time sensor is used only when it fits: not older than max_age (live: the status
        and start_time change in the same MQTT message, status first, so at "prepare" the sensor can still
        hold the previous print's start) and after the end of the previous job."""
        p = self.printer(prefix, name)
        active = p.get("active")
        st = snap.get("start_time")
        if status in ACTIVE:
            if not active:
                start = st if self._plausible_start(p, st, now, max_age) else now
                p["active"] = active = {"start": iso(start), "file": snap.get("task") or ""}
            else:
                if snap.get("task") and not active.get("file"):
                    active["file"] = snap["task"]
                # the real start arrives a moment later (e.g. at "running"): take it when it is close
                cur = parse_time(active["start"])
                if st and cur and st != cur and abs((st - cur).total_seconds()) <= 1800 \
                        and self._plausible_start(p, st, now, max_age + timedelta(minutes=30)):
                    active["start"] = iso(st)
            # filament: at "prepare" the AMS may still be switching trays, so "running" wins
            if snap.get("filament") and (status == "running" or not active.get("filament")):
                active["filament"] = snap["filament"]
            if snap.get("progress") is not None and status != "prepare":
                active["progress"] = snap["progress"]
            if snap.get("trays") and status != "prepare":  # sliced split per tray, updated after "prepare"
                active["trays"] = snap["trays"]
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
            # the app (re)started in the middle of a print: the printer's start may be hours ago
            return self.update(prefix, status, now, snap, name, max_age=timedelta(days=4))
        if active and (status in ENDED or status == "idle"):
            end = snap.get("end_time")
            start = parse_time(active["start"])
            if not (end and start and start < end <= now):
                end = now
            return self._close(p, active, status if status in ENDED else "stopped", end, snap)
        return None

    @staticmethod
    def _plausible_start(p, t, now, max_age):
        if not t or not (now - max_age <= t <= now + timedelta(minutes=5)):
            return False
        last = p["jobs"][-1] if p["jobs"] else None
        return not last or t >= parse_time(last["end"])

    def _close(self, p, active, result, end, snap):
        start = parse_time(active["start"]) or end
        job = {
            "file": active.get("file") or snap.get("task") or "",
            "start": iso(start),
            "end": iso(end),
            "duration_s": max(0, int((end - start).total_seconds())),
            "result": result,
            "progress": self._end_progress(active, result, snap),
            "grams": snap.get("grams"),
            "meters": snap.get("meters"),
            "layers": snap.get("layers"),
            "filament": active.get("filament") or snap.get("filament"),
            "trays": snap.get("trays") or active.get("trays"),
            "photos": dict(active.get("photos") or {}),
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

    @staticmethod
    def _end_progress(active, result, snap):
        if result == "finish":
            return 100
        # the printer resets the progress to 0 a few seconds after a failure (and after a restart):
        # the furthest value seen counts
        values = [v for v in (snap.get("progress"), active.get("progress")) if v is not None]
        return max(values) if values else None

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
                result = status if status in ENDED else "stopped"
                job = {
                    "file": snap.get("task") or "", "start": iso(st), "end": iso(t),
                    "duration_s": max(0, int((t - st).total_seconds())),
                    "result": result, "progress": 100 if result == "finish" else snap.get("progress"),
                    "grams": snap.get("grams"), "meters": snap.get("meters"), "layers": snap.get("layers"),
                    "filament": snap.get("filament"), "trays": snap.get("trays"),
                }
                if (job["file"], job["start"][:16]) not in known:
                    found.append(_filament(job))
                start = None
        if found:
            p["jobs"] = sorted(p["jobs"] + found, key=lambda j: j["end"])[-KEEP_JOBS:]
        return len(found)

    # ---------------- what the card shows ----------------
    @staticmethod
    def summarize(jobs, cost=None):
        """prints / finished / failed / hours / grams (and cost, when a cost function is given)."""
        out = {"prints": len(jobs), "finished": sum(1 for j in jobs if j["result"] == "finish"),
               "hours": round(sum(j["duration_s"] for j in jobs) / 3600, 1),
               "grams": round(sum((j.get("grams") or 0) for j in jobs))}
        out["failed"] = out["prints"] - out["finished"]
        if cost:
            # a cost function returns a number or {"total": …}; prints without a known cost are left out
            values = [c.get("total") if isinstance(c, dict) else c for c in (cost(j) for j in jobs)]
            known = [v for v in values if v is not None]
            out["cost"] = round(sum(known), 2) if known else None
        return out

    def attributes(self, prefix, tz=None, now=None, cost=None):
        """What the history card shows. Months and weeks are counted in `tz` (Home Assistant's zone)."""
        p = self.printer(prefix)
        jobs = p["jobs"]
        now = (now or datetime.now(timezone.utc)).astimezone(tz) if tz else (now or datetime.now()).astimezone()
        local = lambda j: parse_time(j["end"]).astimezone(tz) if tz else parse_time(j["end"]).astimezone()  # noqa: E731
        by_month = {}
        for j in jobs:
            by_month.setdefault(local(j).strftime("%Y-%m"), []).append(j)
        months = [{"month": k, **self.summarize(v, cost)} for k, v in sorted(by_month.items(), reverse=True)][:SHOW_MONTHS]
        week_start = (now - timedelta(days=now.weekday())).replace(hour=0, minute=0, second=0, microsecond=0)
        this_week = [j for j in jobs if local(j) >= week_start]
        last_week = [j for j in jobs if week_start - timedelta(days=7) <= local(j) < week_start]
        shown = list(reversed(jobs[-SHOW_JOBS:]))
        if cost:
            shown = [{**j, "cost": cost(j)} for j in shown]
        total = self.summarize(jobs, cost)
        return {
            "printer": prefix,
            "jobs": shown,
            "months": months,
            "this_month": {"month": now.strftime("%Y-%m"), **self.summarize(by_month.get(now.strftime("%Y-%m"), []), cost)},
            "this_week": {"from": week_start.date().isoformat(), **self.summarize(this_week, cost)},
            "last_week": {"from": (week_start - timedelta(days=7)).date().isoformat(), **self.summarize(last_week, cost)},
            "total_prints": total["prints"],
            "total_finished": total["finished"],
            "total_hours": total["hours"],
            "total_grams": total["grams"],
            **({"total_cost": total["cost"]} if cost else {}),
            "active": p.get("active"),
        }
