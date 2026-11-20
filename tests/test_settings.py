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
        self.assertEqual(s.public(), {"materials": {}, "price_kwh": None, "watts": {}, "low_grams": 100})

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


class SpoolTest(unittest.TestCase):
    def setUp(self):
        self.s = Settings()
        self.s.apply({"cmd": "add_spool", "spool": {"name": "eSUN PLA+ white", "material": "pla", "color": "#FFFFFF",
                                                    "weight": 1000, "price": 18, "tray": "sensor.ams_tray_3"}})
        self.s.apply({"cmd": "add_spool", "spool": {"name": "Polymaker PA6-CF20", "material": "PA6-CF", "weight": 500,
                                                    "used_before": 120}})
        self.white, self.pa = self.s.data["spools"]

    def test_add_and_tray(self):
        self.assertEqual(self.white["material"], "PLA")
        self.assertEqual(self.white["color"], "#ffffff")
        self.assertEqual(self.s.spool_in("sensor.ams_tray_3")["id"], self.white["id"])
        # one spool per tray: putting the PA6 in tray 3 takes the white one out
        self.s.apply({"cmd": "assign_spool", "id": self.pa["id"], "tray": "sensor.ams_tray_3"})
        self.assertIsNone(self.white["tray"])
        self.assertEqual(self.s.spool_in("sensor.ams_tray_3")["id"], self.pa["id"])

    def test_remaining_is_derived_from_prints(self):
        jobs = [
            {"grams": 157.68, "trays": {"AMS 1 Tray 3": 157.68}, "spools": {"AMS 1 Tray 3": self.white["id"]}},
            {"grams": 28.69, "trays": {"AMS 1 Tray 3": 28.69}, "spools": {"AMS 1 Tray 3": self.white["id"]}},  # failed at 26%
            {"grams": 50, "trays": {"AMS 1 Tray 1": 50}, "spools": {}},  # another tray, no spool
            {"grams": 10},  # an old print without tags
        ]
        view = {v["id"]: v for v in self.s.spools_view(jobs)}
        self.assertEqual(view[self.white["id"]]["remaining"], 813.6)
        self.assertEqual(view[self.white["id"]]["percent"], 81)
        self.assertEqual(view[self.pa["id"]]["remaining"], 380.0)  # 500 - 120 used before
        self.assertFalse(view[self.pa["id"]]["low"])
        # if a print is corrected later (e.g. its progress), the spool follows
        jobs[0]["trays"]["AMS 1 Tray 3"] = 100.0
        self.assertEqual(self.s.remaining(self.white, jobs), 871.3)

    def test_low(self):
        jobs = [{"grams": 950, "trays": {"External Spool": 950}, "spools": {"External Spool": self.white["id"]}}]  # 50 g left
        self.assertTrue({v["id"]: v for v in self.s.spools_view(jobs)}[self.white["id"]]["low"])

    def test_cost_uses_spool_price_then_material(self):
        self.s.apply({"cmd": "set_costs", "materials": {"PA6-CF": 60, "PETG": 22}})
        job = {"grams": 150.0, "duration_s": 3600, "trays": {"AMS 1 Tray 3": 100.0, "External Spool": 50.0},
               "spools": {"AMS 1 Tray 3": self.white["id"], "External Spool": self.pa["id"]}, "filament": {"type": "PETG"}}
        # 100 g at the spool's 18 €/kg + 50 g of PA6-CF at the material's 60 €/kg = 1.80 + 3.00
        self.assertEqual(self.s.job_cost("a1", job)["filament"], 4.8)
        # a tray without spool and no price for the print's material: no filament cost at all
        job2 = {"grams": 20.0, "duration_s": 60, "trays": {"AMS 1 Tray 1": 20.0}, "spools": {}, "filament": {"type": "ASA"}}
        self.assertIsNone(self.s.job_cost("a1", job2)["filament"])

    def test_bad_spools(self):
        for bad in ({"cmd": "add_spool", "spool": {"name": ""}},
                    {"cmd": "add_spool", "spool": {"name": "x", "weight": 0}},
                    {"cmd": "add_spool", "spool": {"name": "x", "color": "red"}},
                    {"cmd": "add_spool", "spool": {"name": "x", "tray": "light.kitchen"}},
                    {"cmd": "assign_spool", "id": "nope", "tray": "sensor.t"},
                    {"cmd": "assign_spool", "id": self.white["id"], "tray": "light.kitchen"}):
            with self.assertRaises(ValueError):
                self.s.apply(bad)
        self.assertEqual(len(self.s.data["spools"]), 2)

    def test_archive(self):
        self.s.apply({"cmd": "archive_spool", "id": self.white["id"]})
        self.assertTrue(self.white["archived"])
        self.assertIsNone(self.s.spool_in("sensor.ams_tray_3"))
        self.s.apply({"cmd": "update_spool", "id": self.pa["id"], "spool": {"price": 55}})
        self.assertEqual(self.pa["price"], 55.0)
        self.assertEqual(self.pa["name"], "Polymaker PA6-CF20")


if __name__ == "__main__":
    unittest.main()
