"""Tests for the service helpers that need no Home Assistant (bambu_tools/rootfs/opt/bambu-tools/service.py).
Run: python -m unittest discover -s tests"""
import sys
import tempfile
import unittest
from datetime import datetime, timedelta, timezone
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "bambu_tools" / "rootfs" / "opt" / "bambu-tools"))
import service  # noqa: E402
from history import History  # noqa: E402

# shapes as ha-bambulab 2.4 reports them
STATES = {
    "sensor.a1_print_weight": {"entity_id": "sensor.a1_print_weight", "state": "157.68",
                               "attributes": {"AMS 1 Tray 3": 157.68, "device_class": "weight", "unit_of_measurement": "g",
                                              "friendly_name": "A1 Print weight", "state_class": "measurement"}},
    "sensor.a1_print_length": {"entity_id": "sensor.a1_print_length", "state": "52.44", "attributes": {"AMS 1 Tray 3": 52.44}},
    "sensor.a1_print_progress": {"entity_id": "sensor.a1_print_progress", "state": "9", "attributes": {}},
    "sensor.a1_task_name": {"entity_id": "sensor.a1_task_name", "state": "dash test B", "attributes": {}},
    "sensor.a1_current_layer": {"entity_id": "sensor.a1_current_layer", "state": "15", "attributes": {}},
    "sensor.a1_total_layer_count": {"entity_id": "sensor.a1_total_layer_count", "state": "500", "attributes": {}},
    "sensor.a1_start_time": {"entity_id": "sensor.a1_start_time", "state": "2026-11-20T11:06:48+00:00", "attributes": {}},
    "sensor.ams_tray_1": {"entity_id": "sensor.ams_tray_1", "state": "3",
                          "attributes": {"active": False, "name": "Generic PLA", "type": "PLA", "color": "#F72323FF"}},
    "sensor.ams_tray_3": {"entity_id": "sensor.ams_tray_3", "state": "1",
                          "attributes": {"active": True, "name": "eSUN PLA+", "type": "PLA", "color": "#FFFFFFFF"}},
}


class ServiceTest(unittest.TestCase):
    def test_snapshot(self):
        s = service.snapshot(STATES, "a1", ["sensor.ams_tray_1", "sensor.ams_tray_3"])
        self.assertEqual(s["grams"], 157.68)
        self.assertEqual(s["trays"], {"AMS 1 Tray 3": 157.68})
        self.assertEqual(s["progress"], 9)
        self.assertEqual(s["layers"], "15/500")
        self.assertEqual(s["filament"], {"tray": "sensor.ams_tray_3", "name": "eSUN PLA+", "type": "PLA", "color": "#FFFFFF"})
        self.assertEqual(s["start_time"], datetime(2026, 11, 20, 11, 6, 48, tzinfo=timezone.utc))

    def test_failed_job_scales_trays(self):
        h = History()
        t0 = datetime(2026, 11, 20, 11, 0, tzinfo=timezone.utc)
        s = service.snapshot(STATES, "a1", ["sensor.ams_tray_3"])
        h.update("a1", "running", t0, s)
        job = h.update("a1", "failed", t0 + timedelta(minutes=30), {**s, "progress": 50})
        self.assertEqual(job["trays_planned"], {"AMS 1 Tray 3": 157.68})
        self.assertEqual(job["trays"], {"AMS 1 Tray 3": 78.84})
        self.assertEqual(job["grams"], 78.84)

    def test_csv(self):
        h = History()
        t0 = datetime(2026, 11, 20, 11, 0, tzinfo=timezone.utc)
        s = {**service.snapshot(STATES, "a1", ["sensor.ams_tray_3"]), "task": "Λευκά βυσματάκια.3mf"}
        h.update("a1", "running", t0, s, name="My A1")
        h.update("a1", "finish", t0 + timedelta(minutes=95), s)
        with tempfile.TemporaryDirectory() as d:
            old = service.MEDIA
            service.MEDIA = Path(d)
            try:
                service.Ctx.tz = timezone(timedelta(hours=2))
                service.write_csv(h, ",")
                raw = (Path(d) / "history.csv").read_bytes()
            finally:
                service.MEDIA = old
                service.Ctx.tz = None
        self.assertTrue(raw.startswith(b"\xef\xbb\xbf"), "UTF-8 BOM for Excel")
        lines = raw.decode("utf-8-sig").splitlines()
        self.assertTrue(lines[0].startswith("printer;file;start;end;minutes;result"))
        self.assertEqual(lines[1].split(";")[:8],
                         ["My A1", "Λευκά βυσματάκια.3mf", "2026-11-20 13:00", "2026-11-20 14:35", "95", "finish", "100", "157,68"])


if __name__ == "__main__":
    unittest.main()
