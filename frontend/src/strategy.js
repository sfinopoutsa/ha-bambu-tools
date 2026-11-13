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
