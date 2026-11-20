"""Tests for settings.py (prices, cost of a print). Run: python -m unittest discover -s tests"""
import sys
import tempfile
import unittest
from datetime import datetime, timedelta, timezone
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "bambu_tools" / "rootfs" / "opt" / "bambu-tools"))
from history import History  # noqa: E402
from settings import Settings  # noqa: E402

JOB = {"file": "x.3mf", "duration_s": 3 * 3600, "result": "finish", "grams": 150.0,
       "filament": {"tray": "sensor.t3", "name": "eSUN PLA+", "type": "PLA", "color": "#FFFFFF"}}


class SettingsTest(unittest.TestCase):
    def test_no_prices_no_cost(self):
        self.assertEqual(Settings().job_cost("a1", JOB), {"filament": None, "energy": None, "total": None})

    def test_filament_and_energy(self):
        s = Settings()
        s.apply({"cmd": "set_costs", "materials": {"pla": "20", "ASA": 28.5}, "price_kwh": 0.2, "watts": {"a1": 100}, "rev": 7})
        self.assertEqual(s.data["materials"], {"PLA": 20.0, "ASA": 28.5})
        self.assertEqual(s.data["rev"], 7)
        # 150 g of PLA at 20 €/kg = 3.00; 100 W for 3 h = 0.3 kWh at 0.20 = 0.06
        self.assertEqual(s.job_cost("a1", JOB), {"filament": 3.0, "energy": 0.06, "total": 3.06})
        # another printer without a power figure: filament only
        self.assertEqual(s.job_cost("h2s", JOB), {"filament": 3.0, "energy": None, "total": 3.0})

    def test_unknown_material_and_old_jobs(self):
        s = Settings()
        s.apply({"cmd": "set_costs", "materials": {"PLA": 20}})
        self.assertIsNone(s.job_cost("a1", {**JOB, "filament": {"type": "PETG"}})["filament"])
        self.assertIsNone(s.job_cost("a1", {**JOB, "filament": None})["total"])  # imported without filament

    def test_bad_commands_change_nothing(self):
        s = Settings()
        s.apply({"cmd": "set_costs", "materials": {"PLA": 20}})
        for bad in ({"cmd": "set_costs", "materials": {"PLA": "abc"}},
                    {"cmd": "set_costs", "price_kwh": -1},
                    {"cmd": "set_costs", "watts": {"a1": float("nan")}},
                    {"cmd": "delete_everything"}):
            with self.assertRaises(ValueError):
                s.apply(bad)
        self.assertEqual(s.data["materials"], {"PLA": 20.0})

    def test_empty_clears(self):
        s = Settings()
        s.apply({"cmd": "set_costs", "materials": {"PLA": 20}, "price_kwh": 0.2, "watts": {"a1": 90}})
        s.apply({"cmd": "set_costs", "materials": {"PLA": ""}, "price_kwh": "", "watts": {"a1": None}})
        self.assertEqual(s.public(), {"materials": {}, "price_kwh": None, "watts": {}})

    def test_save_and_load(self):
        with tempfile.TemporaryDirectory() as d:
            s = Settings(Path(d) / "settings.json")
            s.apply({"cmd": "set_costs", "materials": {"PLA": 20}, "rev": 3})
            s.save()
            self.assertEqual(Settings(Path(d) / "settings.json").public()["materials"], {"PLA": 20.0})

    def test_cost_in_history_attributes(self):
        s = Settings()
        s.apply({"cmd": "set_costs", "materials": {"PLA": 20}, "price_kwh": 0.25, "watts": {"a1": 100}})
        h = History()
        t0 = datetime(2026, 11, 20, 8, 0, tzinfo=timezone.utc)
        h.update("a1", "running", t0, {"task": "a", "filament": JOB["filament"]})
        h.update("a1", "finish", t0 + timedelta(hours=2), {"task": "a", "grams": 100.0})
        h.update("a1", "running", t0 + timedelta(hours=3), {"task": "b"})  # no filament known
        h.update("a1", "finish", t0 + timedelta(hours=4), {"task": "b", "grams": 50.0})
        a = h.attributes("a1", tz=timezone.utc, now=t0 + timedelta(hours=5), cost=lambda j: s.job_cost("a1", j))
        self.assertEqual(a["jobs"][1]["cost"], {"filament": 2.0, "energy": 0.05, "total": 2.05})
        self.assertEqual(a["jobs"][0]["cost"], {"filament": None, "energy": 0.03, "total": 0.03})
        self.assertEqual(a["total_cost"], 2.08)
        self.assertEqual(a["this_month"]["cost"], 2.08)


if __name__ == "__main__":
    unittest.main()
