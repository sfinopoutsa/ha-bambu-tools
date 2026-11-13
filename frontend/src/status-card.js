// bambu-status-card: one compact card per printer (ha-bambulab entities).
// Status chip, progress, layer, remaining time + finish clock time, temperatures (current/target),
// active filament (AMS / external spool, found automatically), errors, camera and light buttons.
import { t, lang } from './i18n.js';
import { findPrinter } from './discovery.js';

const BAD = new Set(['', 'unknown', 'unavailable', 'none', 'None']);
const STATUS = {
  running: { color: 'var(--info-color, #039be5)', icon: 'mdi:printer-3d-nozzle' },
  prepare: { color: 'var(--info-color, #039be5)', icon: 'mdi:progress-clock' },
  slicing: { color: 'var(--info-color, #039be5)', icon: 'mdi:progress-clock' },
  pause: { color: 'var(--warning-color, #ff9800)', icon: 'mdi:pause-circle' },
  finish: { color: 'var(--success-color, #43a047)', icon: 'mdi:check-circle' },
  failed: { color: 'var(--error-color, #db4437)', icon: 'mdi:alert-circle' },
  idle: { color: 'var(--disabled-text-color, #888)', icon: 'mdi:sleep' },
  offline: { color: 'var(--disabled-text-color, #888)', icon: 'mdi:lan-disconnect' },
  unavailable: { color: 'var(--disabled-text-color, #888)', icon: 'mdi:lan-disconnect' },
};
const ACTIVE = new Set(['running', 'prepare', 'slicing', 'pause']);

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

class BambuStatusCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.addEventListener('click', (ev) => this._onClick(ev));
  }

  static getStubConfig(hass) {
    const id = Object.keys(hass?.states || {}).find((e) => e.startsWith('sensor.') && e.endsWith('_print_status'));
    return { printer: id ? id.slice(7, -13) : 'my_printer' };
  }

  setConfig(config) {
    if (!config || !config.printer) throw new Error(t(undefined, 'cfg.printer'));
    const p = config.printer;
    this._config = config;
    this._ent = {
      status: `sensor.${p}_print_status`, stage: `sensor.${p}_current_stage`, progress: `sensor.${p}_print_progress`,
      layer: `sensor.${p}_current_layer`, total: `sensor.${p}_total_layer_count`, remaining: `sensor.${p}_remaining_time`,
      task: `sensor.${p}_task_name`, nozzle: `sensor.${p}_nozzle_temperature`, nozzleT: `sensor.${p}_nozzle_target_temperature`,
      bed: `sensor.${p}_bed_temperature`, bedT: `sensor.${p}_bed_target_temperature`,
      chamber: `sensor.${p}_chamber_temperature`, chamberT: `sensor.${p}_chamber_target_temperature`,
      online: `binary_sensor.${p}_online`, error: `binary_sensor.${p}_print_error`, hms: `binary_sensor.${p}_hms_errors`,
      camera: config.camera_switch || `switch.${p}_camera`, light: config.light || `light.${p}_chamber_light`,
      ...(config.entities || {}),
    };
    this._trays = config.trays || null; // null = find them automatically
    this._snap = '';
  }

  getCardSize() { return 4; }

  getGridOptions() { return { columns: 12, min_columns: 6 }; }

  // Text language: the card's `language:` option, else the Home Assistant language.
  _tl() { return this._config?.language || this._hass; }

  set hass(hass) {
    this._hass = hass;
    if (!this._config) return;
    if (!this._trays || this._autoTrays) {
      const found = findPrinter(hass, this._config.printer)?.trays;
      if (found && found.length) { this._trays = found; this._autoTrays = true; }
    }
    const trays = this._trays || [];
    const ids = [...Object.values(this._ent), ...trays];
    const snap = ids.map((id) => { const s = hass.states[id]; return s ? s.state + (s.attributes.active ? '*' : '') : '-'; }).join('|')
      + `|${Math.floor(Date.now() / 60000)}|${lang(this._tl())}`;
    if (snap === this._snap) return;
    this._snap = snap;
    this._render();
  }

  _st(id) { return this._hass.states[id]; }

  _num(id) {
    const v = parseFloat(this._st(id)?.state);
    return Number.isFinite(v) ? v : null;
  }

  _fmt(id) {
    const s = this._st(id);
    if (!s) return '';
    try { return this._hass.formatEntityState ? this._hass.formatEntityState(s) : s.state; } catch (e) { return s.state; }
  }

  _temp(label, icon, cur, tgt) {
    if (cur === null) return '';
    const heating = tgt !== null && tgt > 0 && tgt - cur > 3;
    const tg = tgt !== null && tgt > 0 ? `<span class="tgt">/ ${Math.round(tgt)}°</span>` : '';
    return `<div class="temp${heating ? ' heating' : ''}" title="${esc(label)}"><ha-icon icon="${icon}"></ha-icon>
      <span class="lbl">${esc(label)}</span><span class="val">${Math.round(cur)}°</span>${tg}</div>`;
  }

  _render() {
    const h = this._hass, E = this._ent;
    const statusRaw = this._st(E.status)?.state || 'unknown';
    const online = this._st(E.online)?.state;
    const status = online === 'off' ? 'offline' : statusRaw;
    const S = STATUS[status] || { color: 'var(--disabled-text-color, #888)', icon: 'mdi:printer-3d' };
    const label = STATUS[status] ? t(this._tl(), `status.${status}`) : status;
    const active = ACTIVE.has(status);
    const name = this._config.title || (this._st(E.status)?.attributes?.friendly_name || this._config.printer).replace(/\s*Print status$/i, '');
    const task = this._st(E.task)?.state;
    const prog = this._num(E.progress);
    const layer = this._num(E.layer), total = this._num(E.total);
    const rem = this._num(E.remaining);
    const stage = active ? this._fmt(E.stage) : '';

    let eta = '';
    if (active && rem !== null && rem > 0) {
      const hh = Math.floor(rem), mm = Math.round((rem - hh) * 60);
      const end = new Date(Date.now() + rem * 3600e3);
      const sameDay = end.toDateString() === new Date().toDateString();
      const loc = lang(this._tl()) === 'el' ? 'el-GR' : (h.locale?.language || undefined);
      const clock = end.toLocaleTimeString(loc, { hour: '2-digit', minute: '2-digit', hour12: false });
      const dur = `${hh ? `${hh} ${t(this._tl(), 'h')} ` : ''}${mm} ${t(this._tl(), 'm')}`;
      eta = `${t(this._tl(), 'left', { t: dur })} · ${t(this._tl(), 'ends', { c: (sameDay ? '' : t(this._tl(), 'tomorrow')) + clock })}`;
    }

    const camSw = this._st(E.camera);
    const light = this._st(E.light);
    const btn = (id, on, iconOn, iconOff, title) => (id && this._st(id)
      ? `<button class="ib${on ? ' on' : ''}" data-toggle="${esc(id)}" title="${esc(title)}"><ha-icon icon="${on ? iconOn : iconOff}"></ha-icon></button>` : '');

    const trays = (this._trays || []).map((id) => this._st(id)).filter(Boolean);
    const act = trays.find((x) => x.attributes.active);
    const sw = (x) => {
      const c = (x.attributes.color || '#888888').slice(0, 7);
      const empty = x.attributes.empty || BAD.has(x.state);
      return `<span class="sw${x.attributes.active ? ' act' : ''}${empty ? ' empty' : ''}" style="--c:${esc(c)}" data-more="${esc(x.entity_id)}" title="${esc(x.attributes.friendly_name || '')}: ${esc(x.state)}"></span>`;
    };

    const err = this._st(E.error)?.state === 'on';
    const hms = this._st(E.hms);
    const hmsOn = hms?.state === 'on';

    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; }
        ha-card { padding: 12px 14px 12px; display: flex; flex-direction: column; gap: 8px; }
        .top { display: flex; align-items: center; gap: 8px; }
        .name { font-size: 16px; font-weight: 500; color: var(--primary-text-color); cursor: pointer; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .chip { display: inline-flex; align-items: center; gap: 4px; padding: 2px 9px 2px 6px; border-radius: 12px; font-size: 12px; font-weight: 500; color: #fff; background: ${S.color}; white-space: nowrap; cursor: pointer; }
        .chip ha-icon { --mdc-icon-size: 15px; }
        .grow { flex: 1; min-width: 0; }
        .ib { border: none; background: none; color: var(--secondary-text-color); cursor: pointer; padding: 5px; border-radius: 50%; line-height: 0; }
        .ib:hover { background: color-mix(in srgb, var(--primary-text-color) 8%, transparent); }
        .ib.on { color: var(--state-active-color, var(--amber-color, #ffc107)); }
        .ib ha-icon { --mdc-icon-size: 22px; }
        .task { font-size: 13px; color: var(--secondary-text-color); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .task b { color: var(--primary-text-color); font-weight: 500; }
        .bar { height: 8px; border-radius: 4px; background: color-mix(in srgb, var(--primary-text-color) 12%, transparent); overflow: hidden; }
        .bar > div { height: 100%; background: ${S.color}; border-radius: 4px; transition: width .6s; }
        .meta { display: flex; flex-wrap: wrap; gap: 4px 14px; font-size: 13px; color: var(--secondary-text-color); font-variant-numeric: tabular-nums; }
        .meta b { color: var(--primary-text-color); font-weight: 500; }
        .big { font-size: 20px; font-weight: 600; color: var(--primary-text-color); }
        .temps { display: flex; flex-wrap: wrap; gap: 6px; }
        .temp { display: inline-flex; align-items: center; gap: 4px; padding: 3px 9px 3px 6px; border-radius: 10px; font-size: 12.5px;
          background: color-mix(in srgb, var(--primary-text-color) 6%, transparent); color: var(--secondary-text-color); font-variant-numeric: tabular-nums; }
        .temp ha-icon { --mdc-icon-size: 16px; }
        .temp .val { color: var(--primary-text-color); font-weight: 500; }
        .temp.heating ha-icon, .temp.heating .val { color: var(--warning-color, #ff9800); }
        .fil { display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--secondary-text-color); }
        .fil b { color: var(--primary-text-color); font-weight: 500; }
        .sws { display: inline-flex; gap: 4px; }
        .sw { width: 14px; height: 14px; border-radius: 50%; background: var(--c); border: 1px solid color-mix(in srgb, var(--primary-text-color) 30%, transparent); cursor: pointer; box-sizing: border-box; }
        .sw.act { outline: 2px solid var(--primary-color); outline-offset: 1px; }
        .sw.empty { background: repeating-linear-gradient(45deg, transparent 0 3px, color-mix(in srgb, var(--primary-text-color) 25%, transparent) 3px 5px); }
        .alert { display: flex; align-items: center; gap: 6px; padding: 6px 10px; border-radius: 8px; font-size: 13px;
          background: color-mix(in srgb, var(--error-color, #db4437) 15%, transparent); color: var(--error-color, #db4437); cursor: pointer; }
        .alert ha-icon { --mdc-icon-size: 18px; }
      </style>
      <ha-card>
        <div class="top">
          <span class="name" data-more="${esc(E.status)}">${esc(name)}</span>
          <span class="chip" data-more="${esc(E.status)}"><ha-icon icon="${S.icon}"></ha-icon>${esc(label)}</span>
          <span class="grow"></span>
          ${btn(E.light, light?.state === 'on', 'mdi:lightbulb-on', 'mdi:lightbulb-outline', t(this._tl(), 'light'))}
          ${btn(E.camera, camSw?.state === 'on', 'mdi:video', 'mdi:video-off-outline', t(this._tl(), camSw?.state === 'on' ? 'cam.off' : 'cam.on'))}
        </div>
        ${task && !BAD.has(task) ? `<div class="task" title="${esc(task)}"><b>${esc(task)}</b>${stage ? ` · ${esc(stage)}` : ''}</div>` : ''}
        ${(err || hmsOn) ? `<div class="alert" data-more="${esc(hmsOn ? E.hms : E.error)}"><ha-icon icon="mdi:alert"></ha-icon>
          ${hmsOn ? t(this._tl(), 'hms', { n: esc(hms.attributes.Count ?? '') }) : t(this._tl(), 'perr')} — ${t(this._tl(), 'details')}</div>` : ''}
        ${prog !== null && (active || status === 'finish') ? `
          <div class="meta"><span class="big">${Math.round(prog)}%</span>
            ${total ? `<span style="align-self:center">Layer <b>${layer ?? 0}</b> / ${total}</span>` : ''}
            ${eta ? `<span style="align-self:center">${eta}</span>` : ''}</div>
          <div class="bar"><div style="width:${Math.max(0, Math.min(100, prog))}%"></div></div>` : ''}
        <div class="temps">
          ${this._temp(t(this._tl(), 't.nozzle'), 'mdi:printer-3d-nozzle-heat', this._num(E.nozzle), this._num(E.nozzleT))}
          ${this._temp(t(this._tl(), 't.bed'), 'mdi:radiator', this._num(E.bed), this._num(E.bedT))}
          ${this._temp(t(this._tl(), 't.chamber'), 'mdi:thermometer', this._num(E.chamber), this._num(E.chamberT))}
        </div>
        ${trays.length ? `<div class="fil"><span class="sws">${trays.map(sw).join('')}</span>
          ${act ? `<span>${t(this._tl(), 'fil', { n: esc(act.state) })} ${act.attributes.type ? `(${esc(act.attributes.type)})` : ''}</span>` : `<span>${t(this._tl(), 'fil.none')}</span>`}</div>` : ''}
      </ha-card>`;
  }

  _onClick(ev) {
    const path = ev.composedPath();
    const tog = path.find((el) => el.dataset && el.dataset.toggle);
    if (tog) {
      ev.stopPropagation();
      const id = tog.dataset.toggle;
      this._hass.callService(id.split('.')[0], 'toggle', { entity_id: id });
      return;
    }
    const more = path.find((el) => el.dataset && el.dataset.more);
    if (more) {
      this.dispatchEvent(new CustomEvent('hass-more-info', { detail: { entityId: more.dataset.more }, bubbles: true, composed: true }));
    }
  }
}

if (!customElements.get('bambu-status-card')) {
  customElements.define('bambu-status-card', BambuStatusCard);
  window.customCards = window.customCards || [];
  window.customCards.push({
    type: 'bambu-status-card',
    name: t(undefined, 'card.status.name'),
    description: t(undefined, 'card.status.desc'),
    preview: false,
  });
}
