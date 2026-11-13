# Bambu Tools

Everything for Bambu Lab printers in Home Assistant, in one app:

| What | Where it ends up |
|---|---|
| **ha-bambulab** (printer connection: Bambu Cloud login or LAN) | `custom_components/bambu_lab`, installed if missing |
| **Live layer view** – 3D G-code that follows the printer layer by layer | card `custom:bambu-layer-card` |
| **Status card** – status, progress, finish time, temperatures, filament, camera/light buttons | card `custom:bambu-status-card` |
| **Dashboard "Bambu"** – finds your printers by itself | sidebar → *Bambu* |
| **Phone notifications** – finished / failed / paused / HMS, with camera | blueprint *Bambu Tools: print notifications* |
| **Bambu Studio in the browser** | *Open Web UI* (port 3001) |

> Unofficial project. Not affiliated with or endorsed by Bambu Lab.

## Raspberry Pi

On a Raspberry Pi (or any 64-bit ARM machine) the app installs everything **except the slicer**: Bambu Lab
publishes Bambu Studio for Linux only for x86-64. ha-bambulab, the cards, the *Bambu* dashboard, the Settings
page and the notifications work the same. You don't need a slicer password there; `start_slicer` is ignored.

## First start

1. **Configuration** → set a **password** for the slicer (or turn **start_slicer** off if you only want the
   Home Assistant parts) → **Save** → **Start**.
2. The app installs everything and leaves a notification. If it installed ha-bambulab (or created the
   `www` folder), **restart Home Assistant** once (Settings → System → Restart).
3. **Settings → Devices & services → Add integration → Bambu Lab** and connect your printers
   (Bambu Cloud login, or LAN with IP + serial + access code).
4. Open **Bambu** in the sidebar → **Settings** tab (⚙): it checks every printer and turns on phone
   notifications with one click.
5. Slicer: **Open Web UI** → accept the self-signed certificate → log in with the user name and password.

The app only needs to run once to install or update the Home Assistant parts. Start it again when you want
the slicer, and stop it afterwards on small machines.

## Settings page

The **Bambu** dashboard has a **Settings** tab (⚙) with everything in one place, in the Home Assistant
language: connect printers, check each printer (camera, G-code storage, Developer Mode, firmware), turn on
phone notifications with one click, pick the dashboard language, and change the app options – including the
slicer password – without opening the app page. Needs an administrator.

Each printer's page also has three groups of **detail tiles** (*Print*, *Temperatures*, *Printer & filament*)
that open and close; closed they show a short summary. Each browser remembers which groups were left open.

Each printer's page has a **Settings** part at the bottom (it opens and closes too): the printer's own controls (in cloud mode only the
lights and the camera; with LAN Only + Developer Mode ha-bambulab adds many more), the checks and phone
notifications for that printer, and buttons to the printer's device page and to the full Settings page.
On a dashboard of your own: `type: custom:bambu-setup-card` with `printer: <entity prefix>`.

## Options

| Option | Default | Meaning |
|---|---|---|
| `start_slicer` | `true` | Run Bambu Studio (≈1 GB RAM, x86-64 only). Off = only install/update, then idle. |
| `username` / `password` | `bambu` / – | Login for the slicer page. A password is required when the slicer is on. |
| `dark_mode` | `true` | Dark theme in Bambu Studio. |
| `install_ha_bambulab` | `true` | Install the latest ha-bambulab release if it is missing. An existing install (e.g. from HACS) is never touched. |
| `create_dashboard` | `true` | Create the *Bambu* dashboard if it does not exist. Edit it freely afterwards – it is never overwritten. |

## Printer notes

- **Live layer view** needs the job's G-code, which ha-bambulab downloads from the printer. On H2D / H2S / H2C
  insert a USB drive and turn on **Store Sent Files on External Storage**. A1 / P1 need their SD card.
- **Camera on H2-series / X1**: turn on **LAN Only Liveview** on the printer (it does *not* switch the printer to
  LAN-only mode; cloud and Bambu Handy keep working).
- **Buttons such as pause/stop** need LAN Only + Developer Mode on current firmware (a ha-bambulab limitation).

## Security – please read

- The app has **write access to your Home Assistant configuration** (to install ha-bambulab, the cards and the
  blueprint) and uses the Home Assistant API (resources, dashboard, notifications).
- The slicer page is **for your local network only**. It is protected by the password you set and uses a
  self-signed certificate. Do not forward port 3001 on your router; use Tailscale/VPN for remote access.
- Inside the app, Bambu Studio runs **without its inner bubblewrap sandbox** (GTK image loader and WebKit),
  because an app container cannot create it. Bambu Studio still runs inside the app's own container, without
  extra privileges. Only open files you trust in the slicer.
- The slicer image is built locally from `lscr.io/linuxserver/bambustudio` (GPL-3.0); Bambu Studio is AGPL-3.0.

## Files

- Slicer files: put STL/3MF into the **share** folder (Samba: `\\<ha>\share`) – it is `/share` inside Bambu Studio –
  or drag them onto the slicer page (they land in *Desktop*).
- Slicer settings and presets: the app's config folder (Samba: `\\<ha>\app_configs\<app>`).
- Slicer output log: `bambu-studio.log` in the same folder. Bambu Studio restarts by itself if it closes.

---

## Ελληνικά (σύντομα)

Ένα app για όλα: εγκαθιστά το **ha-bambulab** (σύνδεση με Bambu Cloud ή LAN), τα cards **live layer view** και
**κατάσταση**, φτιάχνει το dashboard **Bambu** που βρίσκει μόνο του τους εκτυπωτές, βάζει το blueprint
**ειδοποιήσεων** για το κινητό και τρέχει τον **Bambu Studio στον browser**.

1. Configuration → **κωδικός** για τον slicer → Save → Start.
2. Αν σου το ζητήσει, **restart** του Home Assistant.
3. Settings → Devices & services → **Bambu Lab** → σύνδεση εκτυπωτών.
4. Sidebar → **Bambu** → καρτέλα **Ρυθμίσεις** (⚙): έλεγχος εκτυπωτών, ειδοποιήσεις με ένα κλικ, όλες οι επιλογές.
   Κάθε εκτυπωτής έχει και δικές του ρυθμίσεις στο κάτω μέρος της σελίδας του, και ομάδες με όλες τις πληροφορίες
   (Εκτύπωση, Θερμοκρασίες, Εκτυπωτής & νήμα) που ανοιγοκλείνουν.
5. Slicer: **Open Web UI** (αποδοχή πιστοποιητικού, σύνδεση).

**Raspberry Pi:** όλα εκτός από τον slicer (ο Bambu Studio για Linux βγαίνει μόνο για x86-64). Δεν χρειάζεται
κωδικός για τον slicer εκεί.

Στους H2D/H2S/H2C: USB stick + «Store Sent Files on External Storage» για το live layer view, και «LAN Only
Liveview» για την κάμερα (δεν βάζει τον εκτυπωτή σε LAN only). Ο slicer είναι μόνο για το τοπικό δίκτυο.
