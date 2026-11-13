# Third-party software

| Software | Licence | How it is used |
|---|---|---|
| [ha-bambulab](https://github.com/greghesp/ha-bambulab) | MIT | Not included. The app downloads the official release (`bambu_lab.zip`) from GitHub into `custom_components/bambu_lab` when it is missing. Its bundled cards (AMS, spool) are used on the dashboard when present. |
| [three.js](https://github.com/mrdoob/three.js) | MIT | Bundled in `bambu-tools.js` (licence text at the end of the file). |
| [linuxserver/docker-bambustudio](https://github.com/linuxserver/docker-bambustudio) | GPL-3.0 | Base image `lscr.io/linuxserver/bambustudio`, pulled and built locally by the Home Assistant Supervisor. Not redistributed here. |
| [Bambu Studio](https://github.com/bambulab/BambuStudio) | AGPL-3.0 | Part of the linuxserver image. |
| [Selkies](https://github.com/selkies-project/selkies) | MPL-2.0 | Part of the linuxserver image (browser streaming). |
| [esbuild](https://github.com/evanw/esbuild) | MIT | Build tool only. |

"Bambu Lab", "Bambu Studio" and printer model names are trademarks of their owners. This project is not
affiliated with or endorsed by Bambu Lab.
