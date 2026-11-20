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


def snap(task="part.3mf", grams=12.5, meters=4.2, layers="50/50", start=None, end=None, progress=None, filament=None):
    return {"task": task, "grams": grams, "meters": meters, "layers": layers, "start_time": start, "end_time": end,
            "progress": progress, "filament": filament}


PLA = {"tray": "sensor.ams_tray_2", "name": "eSUN PLA+", "type": "PLA", "color": "#101410"}
PETG = {"tray": "sensor.ams_tray_1", "name": "Bambu PETG", "type": "PETG", "color": "#d1d5db"}


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
        h.reconcile("h2s", "running", at(40), snap(start=at(10)))  # app started late; printer knows the start
        job = h.update("h2s", "failed", at(70), snap())
        self.assertEqual(job["result"], "failed")
        self.assertEqual(job["duration_s"], 60 * 60)

    def test_live_start_ignores_previous_prints_start(self):
        # at "prepare" the start_time sensor still holds the previous print's start (same MQTT message,
        # status changed first); the real start arrives with "running"
        h = History()
        h.update("a1", "running", at(-600), snap(start=at(-600)))
        h.update("a1", "finish", at(-480), snap())
        h.update("a1", "prepare", at(0), snap(start=at(-600)))
        self.assertEqual(h.printer("a1")["active"]["start"], "2026-11-10T08:00:00+00:00")
        h.update("a1", "running", at(1), snap(start=T0 - timedelta(seconds=5)))
        self.assertEqual(h.printer("a1")["active"]["start"], "2026-11-10T07:59:55+00:00")
        job = h.update("a1", "finish", at(60), snap())
        self.assertEqual(job["duration_s"], 60 * 60 + 5)

    def test_live_start_too_old_is_ignored(self):
        h = History()
        h.update("h2s", "running", at(40), snap(start=at(10)))  # 30 min old: not trusted live
        job = h.update("h2s", "finish", at(70), snap())
        self.assertEqual(job["duration_s"], 30 * 60)

    def test_implausible_start_time_is_ignored(self):
        h = History()
        h.reconcile("h2s", "running", at(0), snap(start=at(-60 * 24 * 10)))  # 10 days old: a previous job
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

    def test_failed_print_counts_only_the_filament_used(self):
        h = History()
        h.update("h2s", "running", at(0), snap(grams=110.34, meters=36.0, progress=5))
        job = h.update("h2s", "failed", at(83), snap(grams=110.34, meters=36.0, progress=25))
        self.assertEqual(job["progress"], 25)
        self.assertEqual(job["grams_planned"], 110.34)
        self.assertAlmostEqual(job["grams"], 27.59, places=2)
        self.assertAlmostEqual(job["meters"], 9.0, places=2)

    def test_finished_print_counts_everything(self):
        h = History()
        h.update("a1", "running", at(0), snap(progress=10))
        job = h.update("a1", "finish", at(30), snap(grams=20, progress=100))
        self.assertEqual((job["progress"], job["grams"], job["grams_planned"]), (100, 20, 20))

    def test_stopped_after_restart_keeps_last_progress(self):
        h = History()
        h.update("a1", "running", at(0), snap(progress=60))
        h.update("a1", "unavailable", at(10), snap(progress=60))
        job = h.update("a1", "idle", at(20), snap(grams=50, progress=0))  # printer restarted: 0 %
        self.assertEqual(job["progress"], 60)
        self.assertEqual(job["grams"], 30)

    def test_filament_from_running_wins_over_prepare(self):
        h = History()
        h.update("a1", "prepare", at(0), snap(filament=PETG))  # the AMS is still on the previous tray
        h.update("a1", "running", at(2), snap(filament=PLA))
        h.update("a1", "pause", at(5), snap(filament=None))
        job = h.update("a1", "finish", at(30), snap())
        self.assertEqual(job["filament"], PLA)

    def test_failed_progress_survives_reset_to_zero(self):
        h = History()
        h.update("h2s", "running", at(0), snap(progress=20))
        h.update("h2s", "pause", at(80), snap(progress=26))
        job = h.update("h2s", "failed", at(83), snap(grams=110.34, progress=0))  # reset already arrived
        self.assertEqual(job["progress"], 26)
        self.assertAlmostEqual(job["grams"], 28.69, places=2)

    def test_version_2_zero_progress_is_asked_again(self):
        with tempfile.TemporaryDirectory() as d:
            path = Path(d) / "history.json"
            path.write_text('{"version": 2, "backfilled": [], "printers": {"h2s": {"name": "H2S", "active": null, "jobs": ['
                            '{"file": "x", "start": "2026-11-18T08:15:40+00:00", "end": "2026-11-18T09:38:16+00:00",'
                            ' "duration_s": 4956, "result": "failed", "progress": 0, "grams": 0, "grams_planned": 110.34,'
                            ' "meters": 0, "meters_planned": 36, "layers": null}]}}}', encoding="utf-8")
            h = History(path)
            job = h.printer("h2s")["jobs"][0]
            self.assertIsNone(job["progress"])
            self.assertEqual(h.needs_progress("h2s"), [job])
            h.set_progress(job, 26)
            self.assertAlmostEqual(job["grams"], 28.69, places=2)

    def test_old_jobs_get_progress_later(self):
        h = History()
        h.update("h2s", "running", at(0), snap())
        job = h.update("h2s", "failed", at(83), snap(grams=110.34))  # no progress known (version 1 data)
        self.assertEqual(job["grams"], 110.34)
        self.assertEqual(h.needs_progress("h2s"), [job])
        h.set_progress(job, 25)
        self.assertAlmostEqual(job["grams"], 27.59, places=2)
        self.assertEqual(h.needs_progress("h2s"), [])

    def test_version_1_file_is_migrated(self):
        with tempfile.TemporaryDirectory() as d:
            path = Path(d) / "history.json"
            path.write_text('{"version": 1, "backfilled": ["a1"], "printers": {"a1": {"name": "A1", "active": null, "jobs": ['
                            '{"file": "x.3mf", "start": "2026-11-10T08:00:00+00:00", "end": "2026-11-10T09:00:00+00:00",'
                            ' "duration_s": 3600, "result": "finish", "grams": 10, "meters": 3, "layers": null}]}}}', encoding="utf-8")
            h = History(path)
            self.assertEqual(h.data["version"], 3)
            job = h.printer("a1")["jobs"][0]
            self.assertEqual((job["grams"], job["grams_planned"]), (10, 10))

    def test_weeks_and_month_in_local_time(self):
        athens = timezone(timedelta(hours=2))
        h = History()
        # Monday 2026-11-16 00:30 in Athens is still Sunday 22:30 UTC: it belongs to the new week there
        for end, g in ((datetime(2026, 11, 15, 22, 30, tzinfo=timezone.utc), 5),
                       (datetime(2026, 11, 15, 20, 0, tzinfo=timezone.utc), 7),
                       (datetime(2026, 11, 10, 12, 0, tzinfo=timezone.utc), 11)):
            h.update("a1", "running", end - timedelta(minutes=30), snap())
            h.update("a1", "finish", end, snap(grams=g))
        now = datetime(2026, 11, 18, 12, 0, tzinfo=timezone.utc)
        a = h.attributes("a1", tz=athens, now=now)
        self.assertEqual(a["this_week"]["from"], "2026-11-16")
        self.assertEqual((a["this_week"]["prints"], a["this_week"]["grams"]), (1, 5))
        self.assertEqual((a["last_week"]["prints"], a["last_week"]["grams"]), (2, 18))
        self.assertEqual((a["this_month"]["month"], a["this_month"]["prints"]), ("2026-11", 3))

    def test_cost_function(self):
        h = History()
        h.update("a1", "running", at(0), snap())
        h.update("a1", "finish", at(60), snap(grams=100))
        a = h.attributes("a1", tz=timezone.utc, now=at(120), cost=lambda j: round((j["grams"] or 0) * 0.02, 2))
        self.assertEqual(a["jobs"][0]["cost"], 2.0)
        self.assertEqual(a["total_cost"], 2.0)
        self.assertEqual(a["this_month"]["cost"], 2.0)

    def test_parse_time(self):
        self.assertEqual(parse_time("2026-11-13T08:59:24+00:00"), datetime(2026, 11, 13, 8, 59, 24, tzinfo=timezone.utc))
        self.assertIsNone(parse_time("unknown"))
        self.assertIsNone(parse_time("not a time"))


if __name__ == "__main__":
    unittest.main()
