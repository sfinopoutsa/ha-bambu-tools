# Bambu Tools for Home Assistant

One Home Assistant **app** for Bambu Lab printers:

- **ha-bambulab** installed for you – connect your printers with a Bambu Cloud login or on the LAN.
- **Live layer view** – the job's G-code in 3D, coloured like Bambu Studio's preview, advancing layer by layer
  with the print. Collapsible layer info (Z, layer height, line types).
- **Status card** – status, progress, layer, time left and finish time, temperatures, active filament,
  HMS/print errors, and buttons for the camera stream and the chamber light.
- **Automatic "Bambu" dashboard** – finds every ha-bambulab printer (overview + one page per printer).
- **Phone notifications** blueprint – finished, failed, paused, HMS, with the camera image.
- **Bambu Studio in the browser** – the full slicer, on your home network (x86-64 machines only).
- **Settings page** – a setup wizard with every setting in one place (printers, notifications, dashboard, slicer),
  plus a Settings part on every printer's page (its controls, checks and notifications).
- **Detail tiles** on every printer's page – print, temperatures, nozzle, fans, Wi-Fi … – in groups that open and close.

Greek and English UI (follows the Home Assistant language).

> Unofficial project. Not affiliated with or endorsed by Bambu Lab. Home Assistant OS / Supervised.
> **amd64** (mini PC, NUC, …): everything. **aarch64** (Raspberry Pi 4/5, …): everything except the slicer –
> Bambu Lab publishes Bambu Studio for Linux only for x86-64.

## Install

1. Add this repository to the app store:

   [![Add repository](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Fsfinopoutsa%2Fha-bambu-tools)

   or **Settings → Apps → App store → ⋮ → Repositories** → `https://github.com/sfinopoutsa/ha-bambu-tools`.
2. Install **Bambu Tools**, set a slicer password in **Configuration** (not needed on a Raspberry Pi), **Start**.
3. Restart Home Assistant when the notification asks for it, then add the **Bambu Lab** integration.
4. Open **Bambu** in the sidebar – the **Settings** tab (⚙) walks you through the rest.

Full instructions, options and security notes: [bambu_tools/DOCS.md](bambu_tools/DOCS.md).

## Notification blueprint

Installed by the app. To import it on its own:

[![Import blueprint](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https%3A%2F%2Fgithub.com%2Fsfinopoutsa%2Fha-bambu-tools%2Fblob%2Fmain%2Fbambu_tools%2Frootfs%2Fopt%2Fbambu-tools%2Fblueprints%2Fbambu_print_notifications.yaml)

## Cards

```yaml
type: custom:bambu-status-card
printer: a1        # entity prefix, e.g. sensor.a1_print_status -> a1
---
type: custom:bambu-layer-card
printer: a1
height: 420        # px (outside sections views)
color_mode: feature  # or filament
```

Dashboard strategy (what the "Bambu" dashboard uses): `strategy: { type: custom:bambu-tools }`.

## How the live layer view works

ha-bambulab downloads the job's 3MF from the printer and extracts the plate G-code into
`/config/www/media/ha-bambulab/<serial>/prints/cache/`. The card loads it, parses it in a Web Worker
(layers from Bambu Studio's `M73 L…` markers, so they match the printer's *current layer* exactly; G2/G3
arcs supported) and draws every extrusion as an instanced 3D bead with three.js. It shows the layers up to
`sensor.<printer>_current_layer` and follows it live.

## Development

```bash
cd frontend
npm install
npm run build        # -> bambu_tools/rootfs/opt/bambu-tools/www/bambu-tools.js
npm test -- file.gcode
```

`frontend/test/harness.html` replays a G-code file without a printer (`python -m http.server` in `frontend/`).

## Credits & licences

MIT licence for this repository. See [NOTICE.md](NOTICE.md) for third-party software
(ha-bambulab, three.js, linuxserver/bambustudio, Bambu Studio, Selkies).

---

### Ελληνικά

Ένα app του Home Assistant για τους εκτυπωτές Bambu Lab: εγκαθιστά το ha-bambulab, δίνει live 3D προβολή
του G-code που ακολουθεί την εκτύπωση, συμπαγή κάρτα κατάστασης, αυτόματο dashboard, ειδοποιήσεις στο
κινητό και τον Bambu Studio στον browser. Οδηγίες στο [bambu_tools/DOCS.md](bambu_tools/DOCS.md).
