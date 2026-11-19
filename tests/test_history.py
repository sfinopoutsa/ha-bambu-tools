"""Tests for the print history logic (bambu_tools/rootfs/opt/bambu-tools/history.py).
Run: python -m unittest discover -s tests"""
import sys
import tempfile
import unittest
from datetime import datetime, timedelta, timezone
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "bambu_tools" / "rootfs" / "opt" / "bambu-tools"))
from history import History, parse_time  # noqa: E402

T0 = datetime(2026, 11, 10, 8, 0, tzinfo=timezone.utc)


def at(minutes):
    return T0 + timedelta(minutes=minutes)


def snap(task="part.3mf", grams=12.5, meters=4.2, layers="50/50", start=None, end=None):
    return {"task": task, "grams": grams, "meters": meters, "layers": layers, "start_time": start, "end_time": end}


class HistoryTest(unittest.TestCase):
    def test_normal_print_with_pause(self):
        h = History()
        self.assertIsNone(h.update("a1", "prepare", at(0), snap()))
        self.assertIsNone(h.update("a1", "running", at(2), snap()))
        self.assertIsNone(h.update("a1", "pause", at(30), snap()))
        self.assertIsNone(h.update("a1", "running", at(35), snap()))
        job = h.update("a1", "finish", at(90), snap(grams=20))
        self.assertEqual(job["result"], "finish")
        self.assertEqual(job["duration_s"], 90 * 60)
        self.assertEqual(job["grams"], 20)
        self.assertEqual(job["file"], "part.3mf")
        self.assertIsNone(h.printer("a1")["active"])
        # the printer stays in "finish" and reports it again: no second job
        self.assertIsNone(h.update("a1", "finish", at(95), snap()))
        self.assertEqual(len(h.printer("a1")["jobs"]), 1)

    def test_start_time_sensor_is_used(self):
        h = History()
        h.update("h2s", "running", at(40), snap(start=at(10)))  # app started late; printer knows the start
        job = h.update("h2s", "failed", at(70), snap())
        self.assertEqual(job["result"], "failed")
        self.assertEqual(job["duration_s"], 60 * 60)

    def test_implausible_start_time_is_ignored(self):
        h = History()
        h.update("h2s", "running", at(0), snap(start=at(-60 * 24 * 10)))  # 10 days old: a previous job
        job = h.update("h2s", "finish", at(30), snap())
        self.assertEqual(job["duration_s"], 30 * 60)

    def test_offline_keeps_job_and_idle_means_stopped(self):
        h = History()
        h.update("a1", "running", at(0), snap())
        self.assertIsNone(h.update("a1", "unavailable", at(10), snap()))
        self.assertIsNotNone(h.printer("a1")["active"])
        job = h.update("a1", "idle", at(20), snap())
        self.assertEqual(job["result"], "stopped")

    def test_reconcile_after_missed_end(self):
        h = History()
        h.update("a1", "running", at(0), snap())
        # the app was stopped; when it comes back the printer is finished since a while
        job = h.reconcile("a1", "finish", at(300), snap(end=at(120)))
        self.assertEqual(job["end"], "2026-11-10T10:00:00+00:00")
        self.assertEqual(job["duration_s"], 120 * 60)
        # reconnecting again does not add it twice
        self.assertIsNone(h.reconcile("a1", "finish", at(301), snap(end=at(120))))

    def test_reconcile_while_printing_starts_a_job(self):
        h = History()
        h.reconcile("a1", "running", at(50), snap(start=at(20)))
        self.assertEqual(h.printer("a1")["active"]["start"], "2026-11-10T08:20:00+00:00")

    def test_save_and_load(self):
        with tempfile.TemporaryDirectory() as d:
            path = Path(d) / "history.json"
            h = History(path)
            h.update("a1", "running", at(0), snap(), name="A1")
            h.update("a1", "finish", at(60), snap())
            h.save()
            h2 = History(path)
            self.assertEqual(len(h2.printer("a1")["jobs"]), 1)
            self.assertEqual(h2.printer("a1")["name"], "A1")

    def test_import_timeline(self):
        h = History()
        timeline = [(at(0), "idle"), (at(10), "prepare"), (at(12), "running"), (at(70), "finish"),
                    (at(200), "running"), (at(230), "failed"), (at(300), "running")]  # last one still printing
        n = h.import_timeline("a1", timeline, lambda t: snap(task=f"job-{t.minute}", start=None))
        self.assertEqual(n, 2)
        jobs = h.printer("a1")["jobs"]
        self.assertEqual([j["result"] for j in jobs], ["finish", "failed"])
        self.assertEqual(jobs[0]["duration_s"], 60 * 60)
        # importing the same timeline again adds nothing
        self.assertEqual(h.import_timeline("a1", timeline, lambda t: snap(task=f"job-{t.minute}")), 0)

    def test_attributes(self):
        h = History()
        h.update("a1", "running", at(0), snap())
        h.update("a1", "finish", at(60), snap(grams=10))
        h.update("a1", "running", at(100), snap(task="b.3mf"))
        h.update("a1", "failed", at(130), snap(task="b.3mf", grams=None))
        a = h.attributes("a1", tz=timezone.utc)
        self.assertEqual(a["total_prints"], 2)
        self.assertEqual(a["total_finished"], 1)
        self.assertEqual(a["total_grams"], 10)
        self.assertEqual(a["total_hours"], 1.5)
        self.assertEqual(a["jobs"][0]["file"], "b.3mf")  # newest first
        self.assertEqual(a["months"], [{"month": "2026-11", "prints": 2, "finished": 1, "failed": 1, "hours": 1.5, "grams": 10}])

    def test_calibration_has_no_filament(self):
        h = History()
        h.update("a1", "running", at(0), snap(task="auto_filament_cali.gcode", grams=125.8))
        job = h.update("a1", "finish", at(3), snap(task="auto_filament_cali.gcode", grams=125.8))
        self.assertIsNone(job["grams"])
        self.assertIsNone(job["meters"])
        n = History().import_timeline("a1", [(at(0), "running"), (at(3), "finish")],
                                      lambda t: snap(task="auto_filament_cali.gcode", grams=125.8))
        self.assertEqual(n, 1)

    def test_parse_time(self):
        self.assertEqual(parse_time("2026-11-13T08:59:24+00:00"), datetime(2026, 11, 13, 8, 59, 24, tzinfo=timezone.utc))
        self.assertIsNone(parse_time("unknown"))
        self.assertIsNone(parse_time("not a time"))


if __name__ == "__main__":
    unittest.main()
