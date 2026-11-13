// Dashboard strategy: `strategy: { type: custom:bambu-tools, language: el }` builds a dashboard for every
// ha-bambulab printer it finds: an overview plus one page per printer. `language` is optional
// (default: the Home Assistant language) and is passed on to the cards.
import { findPrinters } from './discovery.js';
import { t } from './i18n.js';

function cards(lng) {
  const L = lng ? { language: lng } : {};
  const status = (p) => ({ type: 'custom:bambu-status-card', printer: p.prefix, title: p.name, ...L, grid_options: { columns: 'full' } });
  const camera = (p, hass) => (hass.states[`camera.${p.prefix}_camera`] || hass.states[`switch.${p.prefix}_camera`]
    ? [{
      type: 'conditional',
      conditions: [{ condition: 'state', entity: `switch.${p.prefix}_camera`, state_not: 'off' }],
      card: { type: 'picture-entity', entity: `camera.${p.prefix}_camera`, camera_view: 'live', show_name: false, show_state: false },
      grid_options: { columns: 'full' },
    }] : []);
  const layers = (p, rows, height) => ({ type: 'custom:bambu-layer-card', printer: p.prefix, title: 'Layers', height, ...L, grid_options: { columns: 'full', rows } });
  return { status, camera, layers };
}

// Tab icon: Ⓐ / Ⓗ … from the printer's name, like the hand-made dashboard.
const letterIcon = (name) => {
  const ch = (name || '').trim().charAt(0).toLowerCase();
  return /[a-z]/.test(ch) ? `mdi:alpha-${ch}-box` : 'mdi:printer-3d';
};

// Detail tiles, like the first hand-made dashboard: the useful ha-bambulab entities of the printer in three
// groups that open and close (bambu-collapse-card, closed at first, remembered per browser). Only entities that
// exist are shown, so every model gets its own set (e.g. chamber and door on the H2S, active filament on the A1).
// "!" = full-width tile. The last list is the short summary shown next to the group's title.
const DETAILS = [
  ['print', 'd_print', 'mdi:progress-clock', ['sensor:print_status', 'sensor:current_stage', 'sensor:print_progress', 'sensor:current_layer',
    'sensor:total_layer_count', 'sensor:remaining_time', 'sensor:start_time', 'sensor:end_time', 'sensor:print_weight',
    'sensor:print_length', 'sensor:print_bed_type', 'sensor:speed_profile', 'sensor:task_name!'],
  ['sensor:print_status', 'sensor:print_progress']],
  ['temps', 'd_temps', 'mdi:thermometer', ['sensor:nozzle_temperature', 'sensor:nozzle_target_temperature', 'sensor:bed_temperature',
    'sensor:bed_target_temperature', 'sensor:chamber_temperature', 'sensor:chamber_target_temperature', 'binary_sensor:door'],
  ['sensor:nozzle_temperature', 'sensor:bed_temperature', 'sensor:chamber_temperature']],
  ['printer', 'd_printer', 'mdi:printer-3d-nozzle', ['sensor:active_tray!', 'binary_sensor:extruder_filament', 'sensor:nozzle_type',
    'sensor:nozzle_size', 'sensor:cooling_fan_speed', 'sensor:heatbreak_fan_speed', 'sensor:aux_fan_speed', 'sensor:chamber_fan_speed',
    'sensor:airduct_mode', 'binary_sensor:timelapse', 'sensor:wi_fi_signal', 'sensor:total_usage'],
  ['sensor:active_tray', 'sensor:nozzle_size']],
];
const entityOf = (p, spec) => { const [domain, key] = spec.replace('!', '').split(':'); return { key, entity: `${domain}.${p.prefix}_${key}` }; };
function detailSections(p, hass, lng) {
  return DETAILS.map(([id, title, icon, list, summary]) => {
    const tiles = list.map((spec) => {
      const { key, entity } = entityOf(p, spec);
      if (!hass.states[entity]) return null;
      return { type: 'tile', entity, name: t(lng, `e_${key}`), ...(spec.endsWith('!') ? { full: true } : {}) };
    }).filter(Boolean);
    if (!tiles.length) return null;
    return {
      type: 'grid',
      cards: [{
        type: 'custom:bambu-collapse-card', key: `${p.prefix}:${id}`, title: t(lng, title), icon,
        summary: summary.map((s) => entityOf(p, s).entity).filter((e) => hass.states[e]), cards: tiles,
      }],
    };
  }).filter(Boolean);
}

// "Settings" part of a printer's page: the printer's own controls that ha-bambulab offers (few in cloud mode,
// many with LAN Only + Developer Mode) and the setup card limited to this printer (checks, notifications,
// links). Like the Settings page it follows the Home Assistant language.
const CONTROL = /^(light|switch|select|number|button|fan)\./;
function settingsCards(p, hass) {
  const controls = Object.values(hass.entities || {})
    .filter((e) => e.device_id === p.deviceId && CONTROL.test(e.entity_id) && !e.hidden
      && hass.states[e.entity_id] && hass.states[e.entity_id].state !== 'unavailable')
    .map((e) => e.entity_id)
    .sort();
  return [{
    type: 'custom:bambu-collapse-card', key: `${p.prefix}:settings`, title: t(hass, 'setup'), icon: 'mdi:cog',
    cards: [
      ...(controls.length ? [{ type: 'entities', title: t(hass, 'controls'), entities: controls, state_color: true, show_header_toggle: false, full: true }] : []),
      { type: 'custom:bambu-setup-card', printer: p.prefix, full: true },
    ],
  }];
}

function printerView(p, hass, c, lng) {
  const side = [
    c.status(p),
    { type: 'picture-entity', entity: `image.${p.prefix}_cover_image`, name: 'Plate', show_state: false, grid_options: { columns: 'full', rows: 4 } },
  ];
  // ha-bambulab ships these cards and registers them itself (they may still be loading right now).
  for (const ams of p.amsDevices) {
    side.push({ type: 'heading', heading: ams.name, heading_style: 'subtitle', icon: 'mdi:tray-full' });
    side.push({ type: 'custom:ha-bambulab-ams-card', ams: ams.id, grid_options: { columns: 'full' } });
  }
  for (const spool of p.spoolDevices) {
    side.push({ type: 'heading', heading: t(lng, 'spool'), heading_style: 'subtitle', icon: 'mdi:printer-3d-nozzle-outline' });
    side.push({ type: 'custom:ha-bambulab-spool-card', spool: spool.id, grid_options: { columns: 6, rows: 3 } });
  }
  return {
    title: p.name,
    path: p.prefix.replace(/_/g, '-'),
    icon: letterIcon(p.name),
    type: 'sections',
    max_columns: 3,
    sections: [
      { type: 'grid', column_span: 2, cards: [...c.camera(p, hass), c.layers(p, 10, 560)] },
      { type: 'grid', cards: side },
      ...detailSections(p, hass, lng),
      // last, full width: on a phone it comes after the status card, not before it
      { type: 'grid', column_span: 3, cards: settingsCards(p, hass) },
    ],
  };
}

class BambuToolsDashboardStrategy {
  static async generate(config, hass) {
    const printers = findPrinters(hass);
    const lng = config.language || hass;
    // "Settings" page: the setup wizard (also the only page until a printer is connected).
    // The wizard always follows the Home Assistant language, not the dashboard's `language` option.
    const setup = {
      title: t(hass, 'setup'), path: 'setup', icon: 'mdi:cog', type: 'panel',
      cards: [{ type: 'custom:bambu-setup-card' }],
    };
    if (!printers.length) return { title: config.title || 'Bambu', views: [{ ...setup, path: 'overview' }] };
    const c = cards(config.language);
    return {
      title: config.title || 'Bambu',
      views: [
        {
          title: t(lng, 'overview'), path: 'overview', icon: 'mdi:view-dashboard', type: 'sections',
          max_columns: Math.min(printers.length, 3),
          sections: printers.map((p) => ({ type: 'grid', cards: [c.status(p), ...c.camera(p, hass), c.layers(p, 7, 400)] })),
        },
        ...printers.map((p) => printerView(p, hass, c, lng)),
        setup,
      ],
    };
  }
}

if (!customElements.get('ll-strategy-dashboard-bambu-tools')) {
  customElements.define('ll-strategy-dashboard-bambu-tools', BambuToolsDashboardStrategy);
}
