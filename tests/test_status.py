"""publish_status / publish_history / handle_command of the service, with Home Assistant replaced by fakes.
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

PRINTERS = {"a1": {"status": "sensor.a1_print_status", "name": "My A1", "trays": []},
            "h2s": {"status": "sensor.h2s_print_status", "name": "My H2S", "trays": []}}


class FakeWS:
    def __init__(self, users):
        self.users = users

    def call(self, **cmd):
        assert cmd["type"] == "config/auth/list"
        return self.users


class StatusTest(unittest.TestCase):
    def setUp(self):
        self.published = {}
        self._orig = (service.set_state, service.MEDIA, service.Ctx.settings, service.install.bambulab_installed_version,
                      service.install.bambulab_managed_by, service._latest.copy())
        service.set_state = lambda eid, state, attrs: self.published.__setitem__(eid, (state, attrs))
        self.tmp = tempfile.TemporaryDirectory()
        service.MEDIA = Path(self.tmp.name)
        service.Ctx.settings = Settings()
        service.Ctx.currency = "EUR"
        service.Ctx.tz = timezone.utc
        service.install.bambulab_installed_version = lambda: "2.4.1"
        service.install.bambulab_managed_by = lambda: "marketplace"
        service._latest.update(tag="v2.4.1", at=1e18)
        service._admins.clear()
        self.hist = History()
        t0 = datetime.now(timezone.utc) - timedelta(hours=5)
        fil = {"tray": "sensor.t3", "name": "eSUN PLA+", "type": "PLA", "color": "#FFFFFF"}
        self.hist.update("a1", "running", t0, {"task": "part", "filament": fil}, name="My A1")
        self.hist.update("a1", "finish", t0 + timedelta(hours=2), {"task": "part", "grams": 100.0})
        self.hist.update("h2s", "running", t0, {"task": "active job", "filament": None}, name="My H2S")  # still printing

    def tearDown(self):
        (service.set_state, service.MEDIA, service.Ctx.settings, service.install.bambulab_installed_version,
         service.install.bambulab_managed_by, latest) = self._orig
        service._latest.clear()
        service._latest.update(latest)
        service.Ctx.settings_error = None
        self.tmp.cleanup()

    def test_publish_without_prices(self):
        service.publish_all(self.hist, PRINTERS)
        state, attrs = self.published["sensor.bambu_tools"]
        self.assertEqual(attrs["materials_seen"], ["PLA"])
        self.assertIsNone(attrs["this_week"]["cost"])
        self.assertEqual(attrs["currency"], "EUR")
        _, a1 = self.published["sensor.bambu_tools_history_a1"]
        self.assertEqual(a1["jobs"][0]["cost"], {"filament": None, "energy": None, "total": None})
        self.assertTrue((service.MEDIA / "history.csv").exists())

    def test_admin_command_sets_prices(self):
        ws = FakeWS([{"id": "u1", "group_ids": ["system-admin"]}, {"id": "u2", "group_ids": ["system-users"]}])
        event = {"data": {"cmd": "set_costs", "materials": {"PLA": 20}, "price_kwh": 0.2, "watts": {"a1": 100}, "rev": 42},
                 "context": {"user_id": "u1"}}
        service.handle_command(ws, self.hist, PRINTERS, event)
        _, attrs = self.published["sensor.bambu_tools"]
        self.assertEqual(attrs["settings_rev"], 42)
        self.assertIsNone(attrs["settings_error"])
        self.assertEqual(attrs["settings"]["materials"], {"PLA": 20.0})
        _, a1 = self.published["sensor.bambu_tools_history_a1"]
        self.assertEqual(a1["jobs"][0]["cost"], {"filament": 2.0, "energy": 0.04, "total": 2.04})
        self.assertEqual(attrs["this_week"]["cost"], 2.04)

    def test_non_admin_and_bad_command(self):
        ws = FakeWS([{"id": "u1", "group_ids": ["system-admin"]}, {"id": "u2", "group_ids": ["system-users"]}])
        service.handle_command(ws, self.hist, PRINTERS, {"data": {"cmd": "set_costs", "materials": {"PLA": 20}, "rev": 5},
                                                         "context": {"user_id": "u2"}})
        _, attrs = self.published["sensor.bambu_tools"]
        self.assertEqual(attrs["settings_error"]["rev"], 5)
        self.assertEqual(attrs["settings"]["materials"], {})
        service.handle_command(ws, self.hist, PRINTERS, {"data": {"cmd": "set_costs", "materials": {"PLA": "x"}, "rev": 6},
                                                         "context": {"user_id": "u1"}})
        _, attrs = self.published["sensor.bambu_tools"]
        self.assertEqual(attrs["settings_error"]["rev"], 6)
        self.assertIn("not a number", attrs["settings_error"]["error"])


if __name__ == "__main__":
    unittest.main()
