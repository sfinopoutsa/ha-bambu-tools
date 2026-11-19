# Bambu Studio 02.09.01.70 in the browser (linuxserver/bambustudio, Selkies), plus the Bambu Tools installer.
ARG BUILD_FROM=lscr.io/linuxserver/bambustudio:v02.09.01.70-ls179
FROM ${BUILD_FROM}

# The app version (passed by the Supervisor), shown on the Settings page.
ARG BUILD_VERSION=dev
ENV BAMBU_TOOLS_VERSION=${BUILD_VERSION}

# Inside a Home Assistant app, bubblewrap cannot build its sandbox (mounts are denied), but it fails
# in a way glycin (GTK's image loader) does not recognise, so every icon load fails and GTK aborts
# Bambu Studio at start-up (black screen). This stub fails with the message glycin treats as
# "sandbox blocked", so images load without that inner sandbox, inside the app container.
RUN if [ -e /usr/bin/bwrap ]; then mv /usr/bin/bwrap /usr/bin/bwrap.real; fi && \
    printf '#!/bin/sh\necho "bwrap: No permissions to create a new namespace (sandbox disabled in the Home Assistant app)" >&2\nexit 1\n' > /usr/bin/bwrap && \
    chmod 755 /usr/bin/bwrap

# ha-entry.sh, the installer, the frontend bundle, the blueprint, the slicer autostart.
COPY rootfs/ /
RUN chmod 755 /ha-entry.sh /opt/bambu-tools/install.py /custom-cont-init.d/10-bambu-tools-perms

ENTRYPOINT ["/ha-entry.sh"]
