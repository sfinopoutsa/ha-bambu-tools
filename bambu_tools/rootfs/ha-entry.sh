#!/bin/bash
# Bambu Tools app entrypoint.
# 1. Runs the installer (cards, dashboard, blueprint, ha-bambulab) and then the service (print history,
#    app status for the Settings page) for as long as the app runs.
# 2. Starts the browser slicer (linuxserver/bambustudio, Selkies) when it is turned on and available.
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

# BT_SLICER tells the service (and so the Settings page) what happened to the slicer.
export BT_SLICER=off
if [ "${BT_START_SLICER}" = "true" ]; then
  if [ ! -x /opt/bambustudio/AppRun ]; then
    # The slicer only exists in the amd64 image (Bambu Studio for Linux is x86-64 only).
    echo "[bambu-tools] No slicer on this CPU ($(uname -m)): Bambu Studio for Linux exists only for x86-64."
    echo "[bambu-tools] Δεν υπάρχει slicer σε αυτόν τον επεξεργαστή: ο Bambu Studio για Linux βγαίνει μόνο για x86-64."
    export BT_SLICER=unavailable
  elif [ -z "${PASSWORD}" ]; then
    echo "[bambu-tools] The slicer needs a password: set one in Configuration (or in Bambu → Settings). Running without it."
    echo "[bambu-tools] Ο slicer θέλει κωδικό: βάλε έναν στο Configuration (ή στο Bambu → Ρυθμίσεις). Συνεχίζω χωρίς αυτόν."
    export BT_SLICER=needs_password
  else
    export BT_SLICER=on
  fi
fi

# Installer once, then the service; the service is restarted if it ever stops.
run_tools() {
  python3 /opt/bambu-tools/install.py
  while true; do
    python3 /opt/bambu-tools/service.py
    echo "[bambu-tools] service stopped; restarting in 30 s"
    sleep 30
  done
}

if [ "${BT_SLICER}" != "on" ]; then
  [ "${BT_SLICER}" = "off" ] && echo "[bambu-tools] Slicer turned off: Home Assistant parts and print history only."
  trap 'trap - TERM INT; kill 0; exit 0' TERM INT
  run_tools &
  wait
  exit 0
fi

run_tools &
echo "[bambu-tools] Slicer user '${CUSTOM_USER}'. Open https://<home-assistant-ip>:3001"
exec /init "$@"
