#!/usr/bin/env python3
"""Bambu Tools service: runs for as long as the app runs.

- Print history: follows the print status of every ha-bambulab printer, keeps the finished jobs in
  /data/history.json (history.py) and publishes them as sensor.bambu_tools_history_<printer>
  (state = number of prints; attributes = recent jobs, monthly and total figures).
  The first time it also imports the jobs still in Home Assistant's recorder (default: last 10 days).
- App status: publishes sensor.bambu_tools (app version, ha-bambulab installed/latest/managed by, slicer),
  which the Settings page reads.

Entities set through the REST API disappear when Home Assistant restarts; they are published again as soon
as the service reconnects. Only the Python standard library is used.
"""
import json
import os
import platform
import time
import urllib.request
from datetime import datetime, timedelta, timezone
from pathlib import Path

import install
from history import History, iso, number, parse_time

HISTORY_FILE = Path("/data/history.json")
STATUS_ENTITY = "sensor.bambu_tools"
IDLE_PING = 60          # seconds without messages before a ping
REDISCOVER = 3600       # look for new printers / ha-bambulab releases every hour
BACKFILL_DAYS = 30


class Reload(Exception):
    """The set of printers changed: start a new session."""


def log(msg):
    install.log(f"service: {msg}")


def set_state(entity_id, state, attributes):
    req = urllib.request.Request(
        f"http://supervisor/core/api/states/{entity_id}", method="POST",
        data=json.dumps({"state": state, "attributes": attributes}).encode(),
        headers={"Authorization": f"Bearer {os.environ['SUPERVISOR_TOKEN']}", "Content-Type": "application/json"})
    urllib.request.urlopen(req, timeout=20).read()


def discover(ws):
    """{prefix: {"status": entity_id, "name": device name}} for every ha-bambulab printer."""
    devices = {d["id"]: d for d in ws.call(type="config/device_registry/list")}
    printers = {}
    for e in ws.call(type="config/entity_registry/list"):
        eid = e.get("entity_id", "")
        if e.get("platform") != "bambu_lab" or not eid.startswith("sensor.") or e.get("disabled_by"):
            continue
        if e.get("translation_key") == "print_status" or eid.endswith("_print_status"):
            prefix = eid[len("sensor."):].removesuffix("_print_status")
            dev = devices.get(e.get("device_id")) or {}
            printers[prefix] = {"status": eid, "name": dev.get("name_by_user") or dev.get("name") or prefix}
    return printers


def snapshot(states, prefix):
    def g(key):
        return (states.get(f"sensor.{prefix}_{key}") or {}).get("state")
    task = g("task_name")
    cur, tot = number(g("current_layer")), number(g("total_layer_count"))
    return {
        "task": "" if task in (None, "", "unknown", "unavailable") else task,
        "grams": number(g("print_weight")),
        "meters": number(g("print_length")),
        "layers": f"{int(cur)}/{int(tot)}" if cur is not None and tot else None,
        "start_time": parse_time(g("start_time")),
        "end_time": parse_time(g("end_time")),
    }


def get_states(ws):
    return {s["entity_id"]: s for s in ws.call(type="get_states")}


# ---------------- importing what the recorder still has ----------------
def backfill(ws, hist, printers):
    done = set(hist.data.get("backfilled") or [])
    now = datetime.now(timezone.utc)
    for prefix, info in printers.items():
        if prefix in done:
            continue
        keys = ("task_name", "print_weight", "print_length", "total_layer_count", "current_layer", "start_time")
        ids = [info["status"]] + [f"sensor.{prefix}_{k}" for k in keys]
        try:
            res = ws.call(type="history/history_during_period", start_time=iso(now - timedelta(days=BACKFILL_DAYS)),
                          end_time=iso(now), entity_ids=ids, include_start_time_state=True,
                          significant_changes_only=False, minimal_response=False, no_attributes=True)
        except Exception as e:
            log(f"could not read the recorder for {prefix}: {e}")
            continue

        def series(eid):
            rows = []
            for r in res.get(eid) or []:
                t = r.get("lc") or r.get("lu")
                if t is not None:
                    rows.append((datetime.fromtimestamp(float(t), timezone.utc), r.get("s")))
            return sorted(rows, key=lambda x: x[0])

        other = {k: series(f"sensor.{prefix}_{k}") for k in keys}

        def values_at(t):
            def at(k):
                v = None
                for ts, s in other[k]:
                    if ts > t + timedelta(seconds=5):
                        break
                    v = s
                return v
            fake = {f"sensor.{prefix}_{k}": {"state": at(k)} for k in keys}
            return snapshot(fake, prefix)

        n = hist.import_timeline(prefix, series(info["status"]), values_at, info["name"])
        done.add(prefix)
        log(f"imported {n} earlier print(s) of {info['name']} from the recorder")
    hist.data["backfilled"] = sorted(done)
    hist.save()


# ---------------- publishing ----------------
def publish_history(hist, prefix, name):
    attrs = hist.attributes(prefix)
    attrs.update({"friendly_name": f"{name} print history", "icon": "mdi:history", "unit_of_measurement": "prints"})
    set_state(f"sensor.bambu_tools_history_{prefix}", str(attrs["total_prints"]), attrs)


_latest = {"tag": None, "at": 0.0}


def publish_status(printers):
    if time.time() - _latest["at"] > 6 * 3600:
        try:
            _latest["tag"] = install.bambulab_latest_release()[0]
        except Exception as e:
            log(f"could not check the latest ha-bambulab release: {e}")
        _latest["at"] = time.time()
    slicer = os.environ.get("BT_SLICER", "off")
    version = os.environ.get("BAMBU_TOOLS_VERSION") or "dev"
    set_state(STATUS_ENTITY, version, {
        "friendly_name": "Bambu Tools", "icon": "mdi:printer-3d",
        "app_version": version,
        "ha_bambulab_installed": install.bambulab_installed_version(),
        "ha_bambulab_latest": (_latest["tag"] or "").lstrip("v") or None,
        "ha_bambulab_managed_by": install.bambulab_managed_by(),
        "slicer": slicer,
        "arch": platform.machine(),
        "printers": sorted(printers),
    })


# ---------------- the session ----------------
def session(ws, hist):
    ws.s.settimeout(None)
    printers = discover(ws)
    log(f"printers: {', '.join(i['name'] for i in printers.values()) or 'none yet'}")
    if printers:
        backfill(ws, hist, printers)
        states = get_states(ws)
        now = datetime.now(timezone.utc)
        for prefix, info in printers.items():
            status = (states.get(info["status"]) or {}).get("state")
            job = hist.reconcile(prefix, status, now, snapshot(states, prefix), info["name"])
            if job:
                log(f"{info['name']}: recorded a print that ended while the app was not running: {job['file']}")
        hist.save()
        for prefix, info in printers.items():
            publish_history(hist, prefix, info["name"])
    publish_status(printers)

    by_status = {info["status"]: prefix for prefix, info in printers.items()}
    sub_id = None
    if by_status:
        ws.call(type="subscribe_trigger", trigger={"trigger": "state", "entity_id": sorted(by_status)})
        sub_id = ws.n
    waiting_pong, last_check = False, time.time()
    while True:
        if ws.readable(IDLE_PING):
            m = ws.next_message()
            if m.get("type") == "pong":
                waiting_pong = False
            elif m.get("type") == "event" and m.get("id") == sub_id:
                trig = ((m.get("event") or {}).get("variables") or {}).get("trigger") or {}
                to = trig.get("to_state") or {}
                prefix = by_status.get(to.get("entity_id") or trig.get("entity_id"))
                if prefix:
                    states = get_states(ws)
                    job = hist.update(prefix, to.get("state"), datetime.now(timezone.utc),
                                      snapshot(states, prefix), printers[prefix]["name"])
                    hist.save()
                    if job:
                        log(f"{printers[prefix]['name']}: {job['result']} after {job['duration_s'] // 60} min: {job['file']}")
                    publish_history(hist, prefix, printers[prefix]["name"])
            continue
        # quiet: check the connection, now and then look for new printers
        if waiting_pong:
            raise ConnectionError("no answer to ping")
        ws.n += 1
        ws.send({"id": ws.n, "type": "ping"})
        waiting_pong = True
        if time.time() - last_check > REDISCOVER:
            last_check = time.time()
            if set(discover(ws)) != set(printers):
                raise Reload()
            publish_status(printers)


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
