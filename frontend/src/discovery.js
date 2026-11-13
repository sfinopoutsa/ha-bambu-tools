// Find ha-bambulab printers and their AMS / external-spool sub-devices in the frontend registries.
// Works on hass.entities (entity registry display entries) and hass.devices.

const byName = (a, b) => a.entity_id.localeCompare(b.entity_id, undefined, { numeric: true });

/** All ha-bambulab printers: [{ prefix, name, deviceId, statusEntity, trays, amsDevices, spoolDevices }] */
export function findPrinters(hass) {
  const entities = Object.values(hass?.entities || {});
  const devices = hass?.devices || {};
  const statusEntities = entities.filter((e) => e.platform === 'bambu_lab' && e.entity_id.startsWith('sensor.')
    && (e.translation_key === 'print_status' || e.entity_id.endsWith('_print_status')) && e.device_id);
  return statusEntities.map((e) => {
    const dev = devices[e.device_id] || {};
    const children = Object.values(devices).filter((d) => d.via_device_id === e.device_id);
    const amsDevices = children.filter((d) => /ams/i.test(`${d.model || ''} ${d.name || ''}`));
    const spoolDevices = children.filter((d) => /spool/i.test(`${d.model || ''} ${d.name || ''}`));
    const childIds = new Set(children.map((d) => d.id));
    const trays = entities
      .filter((x) => childIds.has(x.device_id) && x.entity_id.startsWith('sensor.')
        && (/_tray_\d+$/.test(x.entity_id) || /external_spool(_\d+)?$/.test(x.entity_id)))
      .sort((a, b) => {
        const ea = /external/.test(a.entity_id), eb = /external/.test(b.entity_id);
        return ea === eb ? byName(a, b) : (ea ? 1 : -1);
      })
      .map((x) => x.entity_id);
    return {
      prefix: e.entity_id.slice('sensor.'.length).replace(/_print_status$/, ''),
      name: dev.name_by_user || dev.name || e.entity_id,
      deviceId: e.device_id,
      statusEntity: e.entity_id,
      trays,
      amsDevices: amsDevices.map((d) => ({ id: d.id, name: d.name_by_user || d.model || d.name || 'AMS' })),
      spoolDevices: spoolDevices.map((d) => ({ id: d.id, name: d.name_by_user || d.name || '' })),
    };
  }).sort((a, b) => a.name.localeCompare(b.name));
}

/** The printer whose entities start with `prefix` (e.g. "a1"). */
export function findPrinter(hass, prefix) {
  return findPrinters(hass).find((p) => p.prefix === prefix);
}
