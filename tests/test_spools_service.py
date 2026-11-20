"""Spools in the service: tray matching, tagging a print, warnings, the spools entity (Home Assistant faked).
Run: python -m unittest discover -s tests"""
import sys
import tempfile
import unittest
from datetime import datetime, timedelta, timezone
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "bambu_tools" / "rootfs" / "opt" / "bambu-tools"))
import service  # noqa: E402
from history import History  # noqa: E402
from settings import Settings  # noqa: E402

A1_TRAYS = ["sensor.my_ams_lite_tray_1", "sensor.my_ams_lite_tray_2", "sensor.my_ams_lite_tray_3",
            "sensor.my_ams_lite_tray_4", "sensor.my_externalspool_external_spool"]
H2S_TRAYS = ["sensor.my_externalspool_external_spool_2"]
PRINTERS = {"a1": {"status": "sensor.a1_print_status", "name": "My A1", "trays": A1_TRAYS},
            "h2s": {"status": "sensor.h2s_print_status", "name": "My H2S", "trays": H2S_TRAYS}}


def tray_state(eid, name, typ, color, active=False):
    return {"entity_id": eid, "state": "1", "attributes": {"name": name, "type": typ, "color": color + "FF", "active": active,
                                                           "friendly_name": eid.split(".")[1]}}


STATES = {
    "sensor.my_ams_lite_tray_3": tray_state("sensor.my_ams_lite_tray_3", "eSUN PLA+", "PLA", "#FFFFFF", True),
    "sensor.my_ams_lite_tray_1": tray_state("sensor.my_ams_lite_tray_1", "Generic PLA", "PLA", "#F72323"),
    "sensor.my_externalspool_external_spool_2": tray_state("sensor.my_externalspool_external_spool_2", "eSUN ASA +", "ASA", "#000000", True),
}


class SpoolServiceTest(unittest.TestCase):
    def setUp(self):
        self.published, self.events = {}, []
        self._orig = (service.set_state, service.fire, service.MEDIA, service.Ctx.settings)
        service.set_state = lambda eid, state, attrs: self.published.__setitem__(eid, (state, attrs))
        service.fire = lambda kind, data: self.events.append((kind, data))
        self.tmp = tempfile.TemporaryDirectory()
        service.MEDIA = Path(self.tmp.name)
        service.Ctx.settings = Settings()
        service.Ctx.tz = timezone.utc
        service.Ctx.currency = "EUR"
        s = service.Ctx.settings
        s.apply({"cmd": "add_spool", "spool": {"name": "White PLA", "material": "PLA", "weight": 1000, "used_before": 900,
                                               "tray": "sensor.my_ams_lite_tray_3"}})
        s.apply({"cmd": "add_spool", "spool": {"name": "Black ASA", "material": "ASA", "weight": 1000,
                                               "tray": "sensor.my_externalspool_external_spool_2"}})
        self.white, self.asa = s.data["spools"]

    def tearDown(self):
        service.set_state, service.fire, service.MEDIA, service.Ctx.settings = self._orig
        self.tmp.cleanup()

    def test_tray_keys(self):
        self.assertEqual(service.tray_keys(A1_TRAYS, STATES), {
            "External Spool": "sensor.my_externalspool_external_spool",
            "AMS 1 Tray 1": "sensor.my_ams_lite_tray_1", "AMS 1 Tray 2": "sensor.my_ams_lite_tray_2",
            "AMS 1 Tray 3": "sensor.my_ams_lite_tray_3", "AMS 1 Tray 4": "sensor.my_ams_lite_tray_4"})
        self.assertEqual(service.tray_keys(H2S_TRAYS, STATES), {"External Spool": "sensor.my_externalspool_external_spool_2"})
        # two AMS units: only the active tray, from its own indexes
        two = ["sensor.ams_a_tray_1", "sensor.ams_a_tray_2", "sensor.ams_b_tray_1"]
        st = {"sensor.ams_b_tray_1": {"attributes": {"active": True, "ams_index": 1, "tray_index": 0}}}
        self.assertEqual(service.tray_keys(two, st), {"AMS 2 Tray 1": "sensor.ams_b_tray_1"})

    def run_print(self, prefix, key, planned, used_progress=100, result="finish"):
        h = self.hist
        t0 = datetime.now(timezone.utc) - timedelta(hours=1)
        snap = {"task": "part", "grams": planned, "trays": {key: planned}, "progress": 10}
        h.update(prefix, "prepare", t0, {"task": "part"}, name=PRINTERS[prefix]["name"])
        h.update(prefix, "running", t0 + timedelta(seconds=15), snap)
        service.tag_spools(h, prefix, PRINTERS, STATES)
        job = h.update(prefix, result, t0 + timedelta(minutes=50), {**snap, "progress": used_progress})
        service.check_low(h, prefix, PRINTERS, job)
        return job

    def test_print_is_tagged_and_warns(self):
        self.hist = History()
        # the white spool has 100 g left; the print needs 157.68 g -> "not enough", then "almost empty" after it
        job = self.run_print("a1", "AMS 1 Tray 3", 157.68)
        self.assertEqual(job["spools"], {"AMS 1 Tray 3": self.white["id"]})
        kinds = [k for k, _ in self.events]
        self.assertEqual(kinds, ["bambu_tools_filament_short", "bambu_tools_spool_low"])
        short = self.events[0][1]
        self.assertEqual((short["printer"], short["spool"], short["remaining"], short["needed"]), ("a1", "White PLA", 100, 158))
        self.assertEqual(self.events[1][1]["remaining"], 0)  # never shown below 0

    def test_failed_print_counts_its_share(self):
        self.hist = History()
        job = self.run_print("h2s", "External Spool", 110.34, used_progress=26, result="failed")
        self.assertEqual(job["spools"], {"External Spool": self.asa["id"]})
        self.assertEqual(self.events, [])  # plenty left
        self.assertEqual(service.Ctx.settings.remaining(self.asa, service.all_jobs(self.hist)), 971.3)

    def test_spool_added_during_a_print(self):
        self.hist = History()
        service.Ctx.settings.apply({"cmd": "assign_spool", "id": self.white["id"], "tray": None})  # tray 3 empty at start
        h = self.hist
        t0 = datetime.now(timezone.utc) - timedelta(hours=1)
        snap = {"task": "part", "grams": 40.0, "trays": {"AMS 1 Tray 3": 40.0}, "progress": 10}
        h.update("a1", "running", t0, snap, name="My A1")
        service.tag_spools(h, "a1", PRINTERS, STATES)
        self.assertEqual(h.printer("a1")["active"]["spools"], {})
        # the spool is set for tray 3 while printing; at the end the print takes it
        service.Ctx.settings.apply({"cmd": "assign_spool", "id": self.white["id"], "tray": "sensor.my_ams_lite_tray_3"})
        job = h.update("a1", "finish", t0 + timedelta(minutes=30), {**snap, "progress": 100})
        service.tag_late("a1", PRINTERS, STATES, job)
        self.assertEqual(job["spools"], {"AMS 1 Tray 3": self.white["id"]})
        self.assertEqual(service.Ctx.settings.remaining(self.white, service.all_jobs(h)), 60.0)

    def test_spools_entity(self):
        self.hist = History()
        self.run_print("a1", "AMS 1 Tray 3", 50)
        service.publish_spools(self.hist, PRINTERS, STATES)
        state, attrs = self.published["sensor.bambu_tools_spools"]
        self.assertEqual(state, "2")
        white = next(s for s in attrs["spools"] if s["name"] == "White PLA")
        self.assertEqual((white["remaining"], white["low"]), (50.0, True))
        tray3 = next(t for t in attrs["printers"]["a1"]["trays"] if t["tray"] == "sensor.my_ams_lite_tray_3")
        self.assertEqual((tray3["key"], tray3["name"], tray3["color"], tray3["spool"]), ("AMS 1 Tray 3", "eSUN PLA+", "#FFFFFF", self.white["id"]))


if __name__ == "__main__":
    unittest.main()
