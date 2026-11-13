#!/bin/bash
# Bambu Tools app entrypoint.
# 1. Runs the installer (cards, dashboard, blueprint, ha-bambulab) in the background.
# 2. Starts the browser slicer (linuxserver/bambustudio, Selkies) unless it is turned off.
OPTS=/data/options.json
if [ -f "$OPTS" ]; then
  eval "$(python3 - "$OPTS" <<'PY'
import json, shlex, sys
o = json.load(open(sys.argv[1]))
print("export CUSTOM_USER=%s" % shlex.quote(str(o.get("username") or "bambu")))
print("export PASSWORD=%s" % shlex.quote(str(o.get("password") or "")))
print("export DARK_MODE=%s" % ("true" if o.get("dark_mode", True) else "false"))
print("export BT_START_SLICER=%s" % ("true" if o.get("start_slicer", True) else "false"))
PY
)"
fi

if [ "${BT_START_SLICER}" != "true" ]; then
  echo "[bambu-tools] Slicer turned off: only installing/updating the Home Assistant parts."
  python3 /opt/bambu-tools/install.py
  echo "[bambu-tools] Nothing else to do. Stop the app or turn the slicer on in Configuration."
  exec sleep infinity
fi

if [ -z "${PASSWORD}" ]; then
  echo "[bambu-tools] Set a password in the app Configuration tab to use the slicer (or turn start_slicer off)."
  echo "[bambu-tools] Βάλε κωδικό στην καρτέλα Configuration για τον slicer (ή κλείσε το start_slicer)."
  python3 /opt/bambu-tools/install.py
  exit 1
fi

python3 /opt/bambu-tools/install.py &
echo "[bambu-tools] Slicer user '${CUSTOM_USER}'. Open https://<home-assistant-ip>:3001"
exec /init "$@"
