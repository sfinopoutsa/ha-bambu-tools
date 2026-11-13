# Changelog

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
