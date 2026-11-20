#!/usr/bin/env python3
"""Bambu Tools service: runs for as long as the app runs.

- Print history: follows the print status of every ha-bambulab printer, keeps the finished jobs in
  /data/history.json (history.py) and publishes them as sensor.bambu_tools_history_<printer>
  (state = number of prints; attributes = recent jobs, this week / last week / months, totals).
  The first time it also imports the jobs still in Home Assistant's recorder (default: last 10 days).
- Photos: a camera picture after the first layer and at the end of every print, in
  /media/bambu_tools/<printer>/ (Home Assistant's media folder). A camera that is turned off in Home
  Assistant is turned on for the picture and off again.
- history.csv in the same folder (all prints, for Excel).
- Cost of every print (settings.py): filament price per material and an electricity estimate, set on the
  Settings page. The page fires the event `bambu_tools_command`; commands are accepted from administrators
  only and answered by republishing sensor.bambu_tools with the new settings and their revision.
- App status: publishes sensor.bambu_tools (app version, ha-bambulab installed/latest/managed by, slicer,
  weekly figures, settings), which the Settings page and the weekly report read.

Entities set through the REST API disappear when Home Assistant restarts; they are published again as soon
as the service reconnects. Only the Python standard library is used.
"""
import csv
import io
import json
import os
import platform
import re
import time
import urllib.request
from datetime import datetime, timedelta, timezone
from pathlib import Path

import install
from history import ACTIVE, ENDED, History, iso, number, parse_time
from settings import Settings

try:
    from zoneinfo import ZoneInfo
except ImportError:  # pragma: no cover
    ZoneInfo = None

HISTORY_FILE = Path("/data/history.json")
SETTINGS_FILE = Path("/data/settings.json")
COMMAND_EVENT = "bambu_tools_command"
SPOOLS_ENTITY = "sensor.bambu_tools_spools"
MEDIA = Path("/media/bambu_tools")
MEDIA_ID = "media-source://media_source/local/bambu_tools"
STATUS_ENTITY = "sensor.bambu_tools"
IDLE_PING = 60          # seconds without messages before a ping
REDISCOVER = 3600       # look for new printers / ha-bambulab releases every hour
BACKFILL_DAYS = 30
PHOTO_DELAY = 20        # seconds after the first layer / the end before the picture
KEEP_PHOTOS = 400       # newest pictures kept (all printers)
STD_ATTRS = {"device_class", "friendly_name", "state_class", "unit_of_measurement", "icon"}


class Reload(Exception):
    """The set of printers changed: start a new session."""


def log(msg):
    install.log(f"service: {msg}")


def _api(path, method="GET", body=None, timeout=20):
    req = urllib.request.Request(
        f"http://supervisor/core/api/{path}", method=method,
        data=None if body is None else json.dumps(body).encode(),
        headers={"Authorization": f"Bearer {os.environ['SUPERVISOR_TOKEN']}", "Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read()


def set_state(entity_id, state, attributes):
    _api(f"states/{entity_id}", "POST", {"state": state, "attributes": attributes})


# ---------------- printers and their trays ----------------
TRAY_RE = re.compile(r"_tray_(\d+)$")
EXT_RE = re.compile(r"external_spool(_\d+)?$")


def discover(ws):
    """{prefix: {"status", "name", "device", "trays": [entity ids of its AMS trays / external spools]}}."""
    devices = {d["id"]: d for d in ws.call(type="config/device_registry/list")}
    entities = ws.call(type="config/entity_registry/list")
    printers = {}
    for e in entities:
        eid = e.get("entity_id", "")
        if e.get("platform") != "bambu_lab" or not eid.startswith("sensor.") or e.get("disabled_by"):
            continue
        if e.get("translation_key") == "print_status" or eid.endswith("_print_status"):
            prefix = eid[len("sensor."):].removesuffix("_print_status")
            dev = devices.get(e.get("device_id")) or {}
            printers[prefix] = {"status": eid, "name": dev.get("name_by_user") or dev.get("name") or prefix,
                                "device": e.get("device_id"), "trays": []}
    for info in printers.values():
        children = {d_id for d_id, d in devices.items() if d.get("via_device_id") == info["device"]}
        info["trays"] = sorted(e["entity_id"] for e in entities
                               if e.get("device_id") in children and e.get("entity_id", "").startswith("sensor.")
                               and (TRAY_RE.search(e["entity_id"]) or EXT_RE.search(e["entity_id"])))
    return printers


def tray_keys(trays, states):
    """{ha-bambulab tray key ("AMS 1 Tray 3", "External Spool"): tray entity} where the match is certain:
    the only external spool of the printer; the trays of its only AMS by number; with several AMS units only
    the active tray (its ams_index / tray_index attributes)."""
    keys = {}
    ext = [t for t in trays if EXT_RE.search(t)]
    if len(ext) == 1:
        keys["External Spool"] = ext[0]
    units = {}
    for t in trays:
        m = TRAY_RE.search(t)
        if m:
            units.setdefault(t[:m.start()], {})[int(m.group(1))] = t
    if len(units) == 1:
        for n, t in next(iter(units.values())).items():
            keys[f"AMS 1 Tray {n}"] = t
    else:
        for unit in units.values():
            for t in unit.values():
                a = (states.get(t) or {}).get("attributes") or {}
                if a.get("active") and isinstance(a.get("ams_index"), int) and isinstance(a.get("tray_index"), int):
                    keys[f"AMS {a['ams_index'] + 1} Tray {a['tray_index'] + 1}"] = t
    return keys


def tray_info(state):
    """The filament in a tray: name, type, colour (#rrggbb)."""
    a = state.get("attributes") or {}
    color = str(a.get("color") or "")[:7] or None
    return {"tray": state["entity_id"], "name": a.get("name") or str(state.get("state") or ""),
            "type": a.get("type") or None, "color": color}


def snapshot(states, prefix, trays=()):
    def st(key):
        return states.get(f"sensor.{prefix}_{key}") or {}

    def g(key):
        return st(key).get("state")
    task = g("task_name")
    cur, tot = number(g("current_layer")), number(g("total_layer_count"))
    # ha-bambulab lists the sliced weight per tray as attributes of print_weight ("AMS 1 Tray 3": 157.68)
    per_tray = {k: float(v) for k, v in (st("print_weight").get("attributes") or {}).items()
                if k not in STD_ATTRS and isinstance(v, (int, float))}
    active = [states[t] for t in trays if (states.get(t) or {}).get("attributes", {}).get("active")]
    return {
        "task": "" if task in (None, "", "unknown", "unavailable") else task,
        "grams": number(g("print_weight")),
        "meters": number(g("print_length")),
        "layers": f"{int(cur)}/{int(tot)}" if cur is not None and tot else None,
        "layer": int(cur) if cur is not None else None,
        "progress": number(g("print_progress")),
        "start_time": parse_time(g("start_time")),
        "end_time": parse_time(g("end_time")),
        "filament": tray_info(active[0]) if active else None,
        "trays": per_tray or None,
    }


def get_states(ws):
    return {s["entity_id"]: s for s in ws.call(type="get_states")}


# ---------------- importing what the recorder still has ----------------
def _series(res, eid):
    rows = []
    for r in res.get(eid) or []:
        t = r.get("lc") or r.get("lu")
        if t is not None:
            rows.append((datetime.fromtimestamp(float(t), timezone.utc), r.get("s")))
    return sorted(rows, key=lambda x: x[0])


def _value_at(series, t):
    v = None
    for ts, s in series:
        if ts > t + timedelta(seconds=5):
            break
        v = s
    return v


def backfill(ws, hist, printers):
    done = set(hist.data.get("backfilled") or [])
    now = datetime.now(timezone.utc)
    keys = ("task_name", "print_weight", "print_length", "total_layer_count", "current_layer", "start_time",
            "print_progress")
    for prefix, info in printers.items():
        if prefix in done:
            continue
        ids = [info["status"]] + [f"sensor.{prefix}_{k}" for k in keys]
        try:
            res = ws.call(type="history/history_during_period", start_time=iso(now - timedelta(days=BACKFILL_DAYS)),
                          end_time=iso(now), entity_ids=ids, include_start_time_state=True,
                          significant_changes_only=False, minimal_response=False, no_attributes=True)
        except Exception as e:
            log(f"could not read the recorder for {prefix}: {e}")
            continue
        other = {k: _series(res, f"sensor.{prefix}_{k}") for k in keys}

        def values_at(t):
            snap = snapshot({f"sensor.{prefix}_{k}": {"state": _value_at(other[k], t)} for k in keys}, prefix)
            # the progress is reset to 0 a few seconds after the end: take the value just before it
            snap["progress"] = number(_value_at(other["print_progress"], t - timedelta(seconds=6)))
            return snap

        n = hist.import_timeline(prefix, _series(res, info["status"]), values_at, info["name"])
        done.add(prefix)
        log(f"imported {n} earlier print(s) of {info['name']} from the recorder")
    hist.data["backfilled"] = sorted(done)
    hist.save()


def repair_progress(ws, hist, printers):
    """Failed / stopped jobs recorded before 1.6 have no progress: read it from the recorder if still there."""
    for prefix in printers:
        for job in hist.needs_progress(prefix):
            end = parse_time(job["end"])
            try:
                res = ws.call(type="history/history_during_period", start_time=iso(end - timedelta(minutes=10)),
                              end_time=iso(end + timedelta(seconds=30)), entity_ids=[f"sensor.{prefix}_print_progress"],
                              include_start_time_state=True, significant_changes_only=False,
                              minimal_response=False, no_attributes=True)
            except Exception:
                continue
            values = [number(s) for _, s in _series(res, f"sensor.{prefix}_print_progress")]
            values = [v for v in values if v is not None]
            if values:
                hist.set_progress(job, max(values))  # the printer resets it to 0 just after the end
                log(f"{prefix}: progress {job['progress']:.0f}% for the {job['result']} print {job['file']}")
            else:
                job["progress"] = None
                job["progress_unknown"] = True  # do not ask the recorder again
    hist.save()


# ---------------- photos ----------------
def fetch_picture(entity):
    try:
        data = _api(f"camera_proxy/{entity}", timeout=15)
        return data if len(data) > 1000 else None
    except Exception:
        return None


def take_photo(ws, prefix, kind, job_start):
    """Save a camera picture of the printer; returns the media path (relative to MEDIA) or None."""
    cam, sw = f"camera.{prefix}_camera", f"switch.{prefix}_camera"
    states = get_states(ws)
    if cam not in states:
        return None
    borrowed = (states.get(sw) or {}).get("state") == "off"
    if borrowed:
        ws.call(type="call_service", domain="switch", service="turn_on", service_data={"entity_id": sw})
    data = None
    try:
        for _ in range(12):
            time.sleep(1)
            data = fetch_picture(cam)
            if data:
                break
    finally:
        if borrowed and (get_states(ws).get(sw) or {}).get("state") == "on":
            ws.call(type="call_service", domain="switch", service="turn_off", service_data={"entity_id": sw})
    if not data:
        log(f"{prefix}: no picture from {cam}")
        return None
    stamp = parse_time(job_start).strftime("%Y%m%dT%H%M%S") if parse_time(job_start) else time.strftime("%Y%m%dT%H%M%S")
    rel = f"{prefix}/{stamp}_{kind}.jpg"
    path = MEDIA / rel
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_bytes(data)
    prune_photos()
    return rel


def prune_photos():
    pics = sorted(MEDIA.glob("*/*.jpg"), key=lambda p: p.stat().st_mtime)
    for p in pics[:-KEEP_PHOTOS]:
        p.unlink(missing_ok=True)


# ---------------- CSV ----------------
def write_csv(hist, decimal=",", settings=None):
    """All prints of all printers, for Excel: UTF-8 with BOM, ';' between columns."""
    def num(v, digits=2):
        if v is None:
            return ""
        s = f"{v:.{digits}f}"
        if "." in s:
            s = s.rstrip("0").rstrip(".")
        return s.replace(".", decimal)

    out = io.StringIO()
    w = csv.writer(out, delimiter=";", lineterminator="\r\n")
    w.writerow(["printer", "file", "start", "end", "minutes", "result", "progress_%", "grams", "meters",
                "grams_planned", "filament", "material", "color", "cost_filament", "cost_energy", "cost_total",
                "photo_end"])
    for prefix, name, j in hist.all_jobs():
        f = j.get("filament") or {}
        c = settings.job_cost(prefix, j) if settings else {}
        start, end = parse_time(j["start"]), parse_time(j["end"])
        w.writerow([name, j["file"], start.astimezone(Ctx.tz).strftime("%Y-%m-%d %H:%M"), end.astimezone(Ctx.tz).strftime("%Y-%m-%d %H:%M"),
                    round(j["duration_s"] / 60), j["result"], num(j.get("progress"), 0), num(j.get("grams")),
                    num(j.get("meters")), num(j.get("grams_planned")), f.get("name") or "", f.get("type") or "",
                    f.get("color") or "", num(c.get("filament")), num(c.get("energy")), num(c.get("total")),
                    (j.get("photos") or {}).get("end") or ""])
    MEDIA.mkdir(parents=True, exist_ok=True)
    tmp = MEDIA / "history.csv.tmp"
    tmp.write_text("﻿" + out.getvalue(), encoding="utf-8", newline="")
    tmp.replace(MEDIA / "history.csv")


# ---------------- publishing ----------------
class Ctx:
    tz = None
    decimal = ","
    currency = None
    settings = Settings(SETTINGS_FILE)
    settings_error = None   # (rev, message) of the last rejected command


def publish_history(hist, prefix, name):
    attrs = hist.attributes(prefix, tz=Ctx.tz, cost=lambda j: Ctx.settings.job_cost(prefix, j))
    attrs.update({"friendly_name": f"{name} print history", "icon": "mdi:history", "unit_of_measurement": "prints",
                  "media": MEDIA_ID, "csv": f"{MEDIA_ID}/history.csv", "currency": Ctx.currency})
    set_state(f"sensor.bambu_tools_history_{prefix}", str(attrs["total_prints"]), attrs)


_latest = {"tag": None, "at": 0.0}


def publish_status(hist, printers):
    if time.time() - _latest["at"] > 6 * 3600:
        try:
            _latest["tag"] = install.bambulab_latest_release()[0]
        except Exception as e:
            log(f"could not check the latest ha-bambulab release: {e}")
        _latest["at"] = time.time()
    slicer = os.environ.get("BT_SLICER", "off")
    version = os.environ.get("BAMBU_TOOLS_VERSION") or "dev"
    weeks = {}
    for key in ("this_week", "last_week"):
        per = {printers[p]["name"]: hist.attributes(p, tz=Ctx.tz, cost=lambda j, p=p: Ctx.settings.job_cost(p, j))[key]
               for p in printers}
        tot = {k: round(sum(v[k] for v in per.values()), 1) for k in ("prints", "finished", "failed", "hours", "grams")}
        costs = [v["cost"] for v in per.values() if v.get("cost") is not None]
        tot["cost"] = round(sum(costs), 2) if costs else None
        weeks[key] = {"from": next(iter(per.values()))["from"] if per else None, **tot, "printers": per}
    # materials seen in the history and in the trays now, for the price form
    seen = {(j.get("filament") or {}).get("type") for _, _, j in hist.all_jobs()}
    seen |= {((p.get("active") or {}).get("filament") or {}).get("type") for p in hist.data["printers"].values()}
    set_state(STATUS_ENTITY, version, {
        "friendly_name": "Bambu Tools", "icon": "mdi:printer-3d",
        "app_version": version,
        "ha_bambulab_installed": install.bambulab_installed_version(),
        "ha_bambulab_latest": (_latest["tag"] or "").lstrip("v") or None,
        "ha_bambulab_managed_by": install.bambulab_managed_by(),
        "slicer": slicer,
        "arch": platform.machine(),
        "printers": sorted(printers),
        "csv": f"{MEDIA_ID}/history.csv",
        "currency": Ctx.currency,
        "settings": Ctx.settings.public(),
        "settings_rev": Ctx.settings.data.get("rev"),
        "settings_error": Ctx.settings_error,
        "materials_seen": sorted(m for m in seen if m),
        "printer_names": {p: printers[p]["name"] for p in printers},
        **weeks,
    })


def fire(event_type, data):
    try:
        _api(f"events/{event_type}", "POST", data)
    except Exception as e:
        log(f"could not fire {event_type}: {e}")


def all_jobs(hist):
    return [j for _, _, j in hist.all_jobs()]


def tag_spools(hist, prefix, printers, states):
    """When a print is running and its per-tray weights are known: remember which spool is in each of its trays
    and warn when one of them does not hold enough filament for it. Once per print."""
    active = hist.printer(prefix).get("active")
    if not active or active.get("spools_tagged") or not active.get("trays"):
        return
    keys = tray_keys(printers[prefix]["trays"], states)
    tags = {}
    for key, planned in active["trays"].items():
        sp = Ctx.settings.spool_in(keys.get(key)) if keys.get(key) else None
        if sp:
            tags[key] = sp["id"]
            left = Ctx.settings.remaining(sp, all_jobs(hist))
            if planned and left < planned:
                log(f"{printers[prefix]['name']}: {sp['name']} has {left:.0f} g, the print needs {planned:.0f} g")
                fire("bambu_tools_filament_short", {"printer": prefix, "printer_name": printers[prefix]["name"],
                                                    "spool": sp["name"], "tray": key, "remaining": round(left),
                                                    "needed": round(planned)})
    active["spools"], active["spools_tagged"] = tags, True


def check_low(hist, prefix, printers, job):
    for key, sid in (job.get("spools") or {}).items():
        sp = Ctx.settings.spool(sid)
        if not sp:
            continue
        left = Ctx.settings.remaining(sp, all_jobs(hist))
        if left < Ctx.settings.data.get("low_grams", 100):
            fire("bambu_tools_spool_low", {"printer": prefix, "printer_name": printers[prefix]["name"],
                                           "spool": sp["name"], "tray": key, "remaining": round(max(left, 0))})


def publish_spools(hist, printers, states=None):
    """sensor.bambu_tools_spools: the spools with what is left, and the printers' trays (for the Filament page)."""
    if states is not None:
        trays = {}
        for prefix, info in printers.items():
            keys = {ent: key for key, ent in tray_keys(info["trays"], states).items()}
            rows = []
            for ent in info["trays"]:
                st = states.get(ent) or {}
                a = st.get("attributes") or {}
                sp = Ctx.settings.spool_in(ent)
                rows.append({"tray": ent, "key": keys.get(ent), "label": a.get("friendly_name") or ent,
                             "name": a.get("name") or "", "type": a.get("type"), "color": str(a.get("color") or "")[:7] or None,
                             "empty": bool(a.get("empty")), "spool": sp["id"] if sp else None})
            trays[prefix] = {"name": info["name"], "trays": rows}
        Ctx.trays = trays
    view = Ctx.settings.spools_view(all_jobs(hist))
    active = [v for v in view if not v.get("archived")]
    set_state(SPOOLS_ENTITY, str(len(active)), {
        "friendly_name": "Bambu Tools spools", "icon": "mdi:printer-3d-nozzle-outline", "unit_of_measurement": "spools",
        "spools": active, "archived": [v for v in view if v.get("archived")][-20:],
        "printers": getattr(Ctx, "trays", {}), "low_grams": Ctx.settings.data.get("low_grams", 100),
        "currency": Ctx.currency, "settings_rev": Ctx.settings.data.get("rev"), "settings_error": Ctx.settings_error,
    })


def publish_all(hist, printers):
    for prefix, info in printers.items():
        publish_history(hist, prefix, info["name"])
    publish_status(hist, printers)
    try:
        write_csv(hist, Ctx.decimal, Ctx.settings)
    except Exception as e:
        log(f"could not write history.csv: {e}")
    try:
        publish_spools(hist, printers)
    except Exception as e:
        log(f"could not publish the spools: {e}")


def setup_locale(ws):
    try:
        cfg = ws.call(type="get_config")
    except Exception:
        return
    tzname = cfg.get("time_zone")
    Ctx.currency = cfg.get("currency") or None
    try:
        Ctx.tz = ZoneInfo(tzname) if ZoneInfo and tzname else None
    except Exception:
        log(f"time zone {tzname} not available here; using the container's local time")
        Ctx.tz = None
    # Excel in English locales expects a decimal point; most others a comma
    lang = str(cfg.get("language") or "en")
    Ctx.decimal = "." if lang.startswith("en") and cfg.get("country") in (None, "US", "GB", "IE", "AU", "CA", "NZ") else ","


# ---------------- commands from the Settings page ----------------
_admins = {}


def is_admin(ws, user_id):
    """Is this Home Assistant user an administrator? (the user list is read again for an unknown id)"""
    if not user_id:
        return False
    if user_id not in _admins:
        try:
            for u in ws.call(type="config/auth/list"):
                _admins[u["id"]] = bool(u.get("is_owner")) or "system-admin" in (u.get("group_ids") or [])
        except Exception as e:
            log(f"could not read the users: {e}")
            return False
    return _admins.get(user_id, False)


def handle_command(ws, hist, printers, event):
    data = event.get("data") or {}
    user = (event.get("context") or {}).get("user_id")
    rev = data.get("rev")
    if not is_admin(ws, user):
        log("ignored a settings command from a non-administrator")
        Ctx.settings_error = {"rev": rev, "error": "administrator rights are needed"}
    else:
        try:
            Ctx.settings.apply(data)
            Ctx.settings.save()
            Ctx.settings_error = None
            log(f"settings changed ({data.get('cmd')})")
        except ValueError as e:
            Ctx.settings_error = {"rev": rev, "error": str(e)}
            log(f"settings command rejected: {e}")
    publish_all(hist, printers)
    try:
        publish_spools(hist, printers, get_states(ws))
    except Exception as e:
        log(f"could not publish the spools: {e}")


# ---------------- the session ----------------
def session(ws, hist):
    ws.s.settimeout(None)
    setup_locale(ws)
    printers = discover(ws)
    log(f"printers: {', '.join(i['name'] for i in printers.values()) or 'none yet'}")
    if printers:
        backfill(ws, hist, printers)
        repair_progress(ws, hist, printers)
        states = get_states(ws)
        now = datetime.now(timezone.utc)
        for prefix, info in printers.items():
            status = (states.get(info["status"]) or {}).get("state")
            job = hist.reconcile(prefix, status, now, snapshot(states, prefix, info["trays"]), info["name"])
            if job:
                log(f"{info['name']}: recorded a print that ended while the app was not running: {job['file']}")
            if status == "running":
                tag_spools(hist, prefix, printers, states)
        hist.save()
        publish_all(hist, printers)
        publish_spools(hist, printers, states)
    else:
        publish_all(hist, printers)

    by_status = {info["status"]: prefix for prefix, info in printers.items()}
    by_layer = {f"sensor.{prefix}_current_layer": prefix for prefix in printers}
    sub_id = None
    if by_status:
        ws.call(type="subscribe_trigger", trigger={"trigger": "state", "entity_id": sorted(by_status) + sorted(by_layer)})
        sub_id = ws.n
    ws.call(type="subscribe_events", event_type=COMMAND_EVENT)
    cmd_id = ws.n
    pending = []   # [(when, prefix, kind, job start)] pictures to take
    first_done = set()  # job starts whose first-layer picture was scheduled
    last_rx, ping_at, last_check = time.time(), None, time.time()
    while True:
        now_s = time.time()
        due = [x for x in pending if x[0] <= now_s]
        for item in due:
            pending.remove(item)
            _, prefix, kind, start = item
            rel = take_photo(ws, prefix, kind, start)
            job = hist.find_job(prefix, start) if rel else None
            if job is not None:
                job.setdefault("photos", {})[kind] = rel
                hist.save()
                publish_history(hist, prefix, printers[prefix]["name"])
                log(f"{printers[prefix]['name']}: {kind} picture saved ({rel})")
        wait = min([IDLE_PING] + [max(0.0, x[0] - time.time()) for x in pending])
        if ws.readable(wait):
            m = ws.next_message()
            last_rx = time.time()
            if m.get("type") == "pong":
                ping_at = None
            elif m.get("type") == "event" and m.get("id") == cmd_id:
                handle_command(ws, hist, printers, m.get("event") or {})
            elif m.get("type") == "event" and m.get("id") == sub_id:
                trig = ((m.get("event") or {}).get("variables") or {}).get("trigger") or {}
                to = trig.get("to_state") or {}
                eid = to.get("entity_id") or trig.get("entity_id")
                if eid in by_layer:
                    prefix = by_layer[eid]
                    active = hist.printer(prefix).get("active")
                    layer = number(to.get("state"))
                    if active and layer is not None and 2 <= layer <= 3 and active["start"] not in first_done:
                        first_done.add(active["start"])
                        pending.append((time.time() + PHOTO_DELAY, prefix, "first", active["start"]))
                elif eid in by_status:
                    prefix = by_status[eid]
                    states = get_states(ws)
                    before = hist.printer(prefix).get("active")
                    job = hist.update(prefix, to.get("state"), datetime.now(timezone.utc),
                                      snapshot(states, prefix, printers[prefix]["trays"]), printers[prefix]["name"])
                    hist.save()
                    if to.get("state") == "running":
                        tag_spools(hist, prefix, printers, states)
                        hist.save()
                    if job:
                        log(f"{printers[prefix]['name']}: {job['result']} after {job['duration_s'] // 60} min: {job['file']}")
                        pending.append((time.time() + PHOTO_DELAY, prefix, "end", job["start"]))
                        check_low(hist, prefix, printers, job)
                    elif before is None and to.get("state") in ACTIVE:
                        log(f"{printers[prefix]['name']}: print started: {hist.printer(prefix)['active'].get('file')}")
                    if job or to.get("state") in ENDED or before is None:
                        publish_all(hist, printers)
                        publish_spools(hist, printers, states)
                    else:
                        publish_history(hist, prefix, printers[prefix]["name"])
            continue
        # quiet: check the connection, now and then look for new printers
        if ping_at is not None and time.time() - ping_at > IDLE_PING:
            raise ConnectionError("no answer to ping")
        if ping_at is None and time.time() - last_rx >= IDLE_PING:
            ws.n += 1
            ws.send({"id": ws.n, "type": "ping"})
            ping_at = time.time()
        if time.time() - last_check > REDISCOVER:
            last_check = time.time()
            if set(discover(ws)) != set(printers):
                raise Reload()
            publish_status(hist, printers)


def main():
    hist = History(HISTORY_FILE)
    while True:
        try:
            ws = install.connect_core(retries=1, delay=0)
        except PermissionError as e:
            log(f"Home Assistant refused the app's token: {e}")
            time.sleep(300)
            continue
        except Exception:
            time.sleep(15)  # Core is starting or restarting
            continue
        try:
            session(ws, hist)
        except Reload:
            log("printers changed; starting over")
        except Exception as e:
            log(f"connection lost ({e}); reconnecting")
        finally:
            ws.close()
        time.sleep(5)


if __name__ == "__main__":
    main()
