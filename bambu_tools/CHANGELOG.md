# Changelog

## 1.5.0

- **Print history** on every printer's page (group "History"): this month and all-time prints, hours and
  filament, the print running now, the last prints (result, date, time, grams) and a monthly table. The app
  records it while it runs (new option on the Settings page: *Start with Home Assistant*) and, the first
  time, imports the prints Home Assistant still remembers. Entity: `sensor.bambu_tools_history_<printer>`.
- **New notifications**: *first layer done* (with the camera picture, to check that it sticks) and *a few
  minutes before the end* (minutes configurable). New notification set-ups get the first one by default.
- **ha-bambulab updates**: the Settings page shows the installed and the latest version and updates it –
  through the store when Home Assistant's marketplace or HACS manages it, otherwise through the app. A copy the app installed is kept up to date
  automatically; a hand-made copy only after you allow it (option `update_ha_bambulab`). The previous copy
  is kept as a backup.
- **Bambu Studio 02.09.01.70** (was 02.08.04.57 beta). The slicer settings are copied from the beta folder
  (`.config/BambuStudioBeta`) to the one the release uses (`.config/BambuStudio`) the first time.
- When the slicer is on but has no password, the app no longer stops: it runs without the slicer and the
  Settings page says why.
- The "ready" notification appears only after the first install, not after every update.
- Status entity `sensor.bambu_tools` (app version, ha-bambulab versions, slicer state).
- Tests and CI: G-code parser and print-history tests; every push builds the amd64 and the Raspberry Pi
  (aarch64) image and starts the Pi one once.

## 1.4.0

- **Raspberry Pi (aarch64)** support: everything except the slicer – ha-bambulab install, cards, "Bambu"
  dashboard, Settings page, notification blueprint. Bambu Lab publishes Bambu Studio for Linux only for
  x86-64, so the slicer stays amd64-only. The Pi build uses Home Assistant's own Python base image
  (`Dockerfile.aarch64`); on amd64 nothing changes.
- On a Pi the app ignores `start_slicer` and the Settings page hides the slicer options, with a short note why.

## 1.3.0

- **Detail tiles are back** on every printer's page, like the first hand-made dashboard, in three groups:
  *Print* (status, stage, progress, layers, remaining, start/end, weight, filament length, plate, speed, file),
  *Temperatures* (nozzle, bed, chamber with targets, door) and *Printer & filament* (active filament, nozzle,
  fans, air duct, timelapse, Wi-Fi, total usage). Only the entities a printer really has are shown.
- The groups and the printer's Settings **open and close**; closed they show a short summary
  (e.g. "Running · 89%"). Each browser remembers what was left open.
- New card `bambu-collapse-card` (a group of cards that opens and closes) for your own dashboards.

## 1.2.0

- **Settings on every printer's page** of the "Bambu" dashboard (at the bottom, full width):
  - the printer's own controls from ha-bambulab (lights and camera in cloud mode; more with LAN Only +
    Developer Mode),
  - the checks and the phone notifications for that printer,
  - links to the printer's device page ("All printer settings") and to the full Settings page.
- `bambu-setup-card` has a new `printer:` option that shows only one printer.

## 1.1.1

- Settings page: after "Turn on notifications" the card waits until Home Assistant has loaded the new
  automation, so it shows "On" right away also when the card is on a hand-made dashboard.
- Settings page: a card that Home Assistant replaced while it was working (the "Bambu" dashboard is rebuilt
  when automations are added or removed) stops at once instead of waiting.

## 1.1.0

- **Settings page** in the "Bambu" dashboard: a 5-step setup wizard with every setting in one place –
  printer connection, per-printer checks (camera, G-code storage, Developer Mode, firmware), phone
  notifications (one click, warns about duplicate notification automations), dashboard language and the
  app's own options (slicer on/off, user, password, …).
- The wizard follows the Home Assistant language.
- Saving app options only changes the fields edited on the page, so changes made elsewhere are kept.

## 1.0.1

- The "Bambu" dashboard now matches the hand-made layout: letter tab icons (Ⓐ, Ⓗ…), AMS heading with the
  AMS model name, "External spool" heading.

## 1.0.0

- First release: one app with ha-bambulab installer, live layer view card, status card, automatic "Bambu"
  dashboard (strategy), notification blueprint and Bambu Studio 02.08.04.57 in the browser (Selkies).
