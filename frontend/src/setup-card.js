// bambu-setup-card: one page with every Bambu Tools setting, as a 5-step checklist/wizard.
// 1 printers connection (ha-bambulab) · 2 per-printer checks · 3 phone notifications (blueprint)
// · 4 dashboard language · 5 the app (slicer) options. Needs an administrator (uses Supervisor API).
import { findPrinters } from './discovery.js';
import { lang } from './i18n.js';

const BLUEPRINT = 'bambu_tools/bambu_print_notifications.yaml';
const DASH = 'bambu-tools';
const EVENTS = ['finish', 'failed', 'pause', 'hms'];

const S = {
  en: {
    title: 'Bambu Tools – setup', progress: '{d} of {n} steps ready', refresh: 'Refresh', admin: 'Administrator rights are needed for this page.',
    s1: 'Connect your printers (ha-bambulab)', s1_missing: 'The Bambu Lab integration (ha-bambulab) is not loaded. If the Bambu Tools app just installed it, restart Home Assistant.',
    s1_none: 'ha-bambulab is installed but no printer is connected yet.', s1_ok: '{n} printer connection(s):', add: 'Add a printer', restart_ha: 'Restart Home Assistant',
    restart_q: 'Restart Home Assistant now?',
    s2: 'Check each printer', online: 'Online', offline: 'Offline', camera: 'Camera', cam_ok: 'streaming', cam_off: 'turned off in Home Assistant', turn_on: 'Turn on',
    cam_h2: 'unavailable – on the printer turn on LAN Only Liveview (does not switch the printer to LAN-only)',
    gcode: 'G-code for the live layer view', gcode_ok: 'available', gcode_wait: 'appears when the next print starts',
    gcode_h2: 'needs a USB drive and "Store Sent Files on External Storage" on the printer', gcode_sd: 'needs the SD card in the printer',
    control: 'Pause/stop buttons', control_ok: 'available (Developer Mode)', control_ro: 'read-only – needs LAN Only + Developer Mode (optional)',
    fw: 'Firmware', fw_up: 'update available', fw_ok: 'up to date', no_printers: 'No printers yet – finish step 1.',
    s3: 'Phone notifications', phone: 'Phone', events: 'Notify on', ev_finish: 'finished', ev_failed: 'failed', ev_pause: 'paused', ev_hms: 'HMS message',
    enable: 'Turn on notifications', enabled: 'On', disabled: 'Off', edit: 'Edit', no_phone: 'No phone with the Home Assistant app found. Install the Companion app and log in.',
    legacy: 'Automation "{n}" also sends print notifications – you may get them twice.', disable: 'Turn it off',
    s4: 'Dashboard', dash_ok: 'The "Bambu" dashboard exists.', dash_missing: 'The "Bambu" dashboard does not exist.', create: 'Create it', open: 'Open',
    language: 'Language', auto: 'Same as Home Assistant', saved: 'Saved',
    s5: 'Slicer – the Bambu Tools app', app_missing: 'The Bambu Tools app was not found (Settings → Apps).', state: 'State', started: 'running', stopped: 'stopped',
    start: 'Start', stop: 'Stop', restart: 'Restart', update: 'Update to {v}', open_slicer: 'Open the slicer', version: 'Version',
    o_start_slicer: 'Run the slicer (≈1 GB RAM)', o_username: 'Slicer user name', o_password: 'Slicer password', o_password_ph: 'unchanged',
    o_dark_mode: 'Dark mode', o_install_ha_bambulab: 'Install ha-bambulab when missing', o_create_dashboard: 'Create the "Bambu" dashboard',
    save: 'Save settings', saved_restart: 'Saved. Restart the app to apply.', working: 'Working…', error: 'Error: {e}',
  },
  el: {
    title: 'Bambu Tools – ρυθμίσεις', progress: '{d} από {n} βήματα έτοιμα', refresh: 'Ανανέωση', admin: 'Η σελίδα θέλει δικαιώματα διαχειριστή.',
    s1: 'Σύνδεση εκτυπωτών (ha-bambulab)', s1_missing: 'Η integration Bambu Lab (ha-bambulab) δεν έχει φορτωθεί. Αν μόλις την εγκατέστησε το app Bambu Tools, κάνε restart στο Home Assistant.',
    s1_none: 'Το ha-bambulab υπάρχει, αλλά δεν έχει συνδεθεί ακόμα εκτυπωτής.', s1_ok: '{n} σύνδεση(εις) εκτυπωτή:', add: 'Πρόσθεσε εκτυπωτή', restart_ha: 'Restart Home Assistant',
    restart_q: 'Να γίνει restart στο Home Assistant τώρα;',
    s2: 'Έλεγχος κάθε εκτυπωτή', online: 'Σε σύνδεση', offline: 'Εκτός σύνδεσης', camera: 'Κάμερα', cam_ok: 'δουλεύει', cam_off: 'κλειστή από το Home Assistant', turn_on: 'Άνοιξέ την',
    cam_h2: 'μη διαθέσιμη – στον εκτυπωτή άνοιξε το LAN Only Liveview (δεν τον βάζει σε LAN only)',
    gcode: 'G-code για το live layer view', gcode_ok: 'υπάρχει', gcode_wait: 'θα εμφανιστεί με την επόμενη εκτύπωση',
    gcode_h2: 'θέλει USB stick και τη ρύθμιση «Store Sent Files on External Storage» στον εκτυπωτή', gcode_sd: 'θέλει την κάρτα SD στον εκτυπωτή',
    control: 'Κουμπιά pause/stop', control_ok: 'διαθέσιμα (Developer Mode)', control_ro: 'μόνο ανάγνωση – θέλει LAN Only + Developer Mode (προαιρετικό)',
    fw: 'Firmware', fw_up: 'υπάρχει ενημέρωση', fw_ok: 'ενημερωμένο', no_printers: 'Δεν υπάρχουν ακόμα εκτυπωτές – ολοκλήρωσε το βήμα 1.',
    s3: 'Ειδοποιήσεις στο κινητό', phone: 'Κινητό', events: 'Ειδοποίηση για', ev_finish: 'τέλος', ev_failed: 'αποτυχία', ev_pause: 'παύση', ev_hms: 'μήνυμα HMS',
    enable: 'Ενεργοποίηση ειδοποιήσεων', enabled: 'Ενεργές', disabled: 'Ανενεργές', edit: 'Επεξεργασία', no_phone: 'Δεν βρέθηκε κινητό με την εφαρμογή Home Assistant. Εγκατάστησε την εφαρμογή και συνδέσου.',
    legacy: 'Το automation «{n}» στέλνει κι αυτό ειδοποιήσεις εκτυπώσεων – μπορεί να τις παίρνεις διπλές.', disable: 'Απενεργοποίησέ το',
    s4: 'Dashboard', dash_ok: 'Το dashboard «Bambu» υπάρχει.', dash_missing: 'Το dashboard «Bambu» δεν υπάρχει.', create: 'Φτιάξ’ το', open: 'Άνοιγμα',
    language: 'Γλώσσα', auto: 'Όπως το Home Assistant', saved: 'Αποθηκεύτηκε',
    s5: 'Slicer – το app Bambu Tools', app_missing: 'Δεν βρέθηκε το app Bambu Tools (Settings → Apps).', state: 'Κατάσταση', started: 'τρέχει', stopped: 'σταματημένο',
    start: 'Start', stop: 'Stop', restart: 'Restart', update: 'Ενημέρωση σε {v}', open_slicer: 'Άνοιγμα slicer', version: 'Έκδοση',
    o_start_slicer: 'Να τρέχει ο slicer (≈1 GB RAM)', o_username: 'Όνομα χρήστη slicer', o_password: 'Κωδικός slicer', o_password_ph: 'αμετάβλητος',
    o_dark_mode: 'Σκούρο θέμα', o_install_ha_bambulab: 'Εγκατάσταση ha-bambulab αν λείπει', o_create_dashboard: 'Δημιουργία dashboard «Bambu»',
    save: 'Αποθήκευση ρυθμίσεων', saved_restart: 'Αποθηκεύτηκε. Κάνε Restart στο app για να ισχύσει.', working: 'Περίμενε…', error: 'Σφάλμα: {e}',
  },
};

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

class BambuSetupCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._form = {};
    this._dirty = new Set(); // app options changed on this page, not yet saved
    this._msg = {};
    this.shadowRoot.addEventListener('click', (ev) => this._onClick(ev));
    this.shadowRoot.addEventListener('input', (ev) => this._onInput(ev));
    this.shadowRoot.addEventListener('change', (ev) => this._onInput(ev));
  }

  setConfig(config) { this._config = config || {}; }

  // Put back on the page (e.g. after switching views): show fresh data and enabled buttons.
  connectedCallback() { if (this._data) this._load(); }

  getCardSize() { return 12; }

  getGridOptions() { return { columns: 'full' }; }

  _t(key, vars) {
    const l = lang(this._config?.language || this._hass);
    const s = (S[l] || S.en)[key] ?? S.en[key] ?? key;
    return vars ? s.replace(/\{(\w+)\}/g, (_, k) => (vars[k] ?? '')) : s;
  }

  set hass(hass) {
    const first = !this._hass;
    this._hass = hass;
    if (first) { this._load(); return; }
    // live printer checks: re-render now and then, but never while the user is typing
    const now = Date.now();
    if (this._data && now - (this._lastRender || 0) > 5000 && !this.shadowRoot.activeElement) this._render();
  }

  async _ws(msg) { return this._hass.callWS(msg); }

  async _sv(endpoint, method = 'get', data) {
    return this._hass.callWS({ type: 'supervisor/api', endpoint, method, ...(data ? { data } : {}), timeout: null });
  }

  async _load() {
    const h = this._hass;
    const d = { admin: !!h.user?.is_admin };
    if (!d.admin) { this._data = d; this._render(); return; }
    try {
      d.loaded = h.config.components.includes('bambu_lab');
      d.entries = d.loaded ? await this._ws({ type: 'config_entries/get', domain: 'bambu_lab' }).catch(() => []) : [];
      const devices = await this._ws({ type: 'config/device_registry/list' }).catch(() => []);
      d.phones = devices.filter((x) => (x.identifiers || []).some((i) => i[0] === 'mobile_app'))
        .map((x) => ({ id: x.id, name: x.name_by_user || x.name }));
      // automations: ours (from the blueprint) and others that look like print notifications
      const autos = Object.values(h.states).filter((s) => s.entity_id.startsWith('automation.') && s.attributes.id);
      const cfgs = await Promise.all(autos.map((s) => h.callApi('GET', `config/automation/config/${s.attributes.id}`)
        .then((c) => ({ entity: s.entity_id, state: s.state, id: s.attributes.id, name: s.attributes.friendly_name, cfg: c })).catch(() => null)));
      d.ours = {};
      d.legacy = [];
      for (const a of cfgs.filter(Boolean)) {
        const ub = a.cfg.use_blueprint;
        if (ub && String(ub.path).endsWith('bambu_print_notifications.yaml')) d.ours[ub.input?.print_status] = a;
        else if (!ub && JSON.stringify(a.cfg).includes('_print_status') && /notify/.test(JSON.stringify(a.cfg.actions || a.cfg.action || ''))) d.legacy.push(a);
      }
      const dashes = await this._ws({ type: 'lovelace/dashboards/list' }).catch(() => []);
      d.dash = dashes.find((x) => x.url_path === DASH) || null;
      if (d.dash) {
        const c = await this._ws({ type: 'lovelace/config', url_path: DASH }).catch(() => null);
        d.dashLang = c?.strategy?.language || '';
        d.dashStrategy = !!c?.strategy;
      }
      const apps = await this._sv('/addons').catch(() => null);
      const app = (apps?.addons || []).find((x) => /(^|_)bambu_tools$/.test(x.slug));
      if (app) d.app = await this._sv(`/addons/${app.slug}/info`).catch(() => null);
      d.error = null;
    } catch (e) {
      d.error = String(e.message || e);
    }
    this._data = d;
    if (d.app) {
      // show the app's real current values, except fields the user is editing here right now
      for (const k of ['start_slicer', 'username', 'dark_mode', 'install_ha_bambulab', 'create_dashboard']) {
        if (!this._dirty.has(k)) this._form[k] = d.app.options?.[k];
      }
    }
    this._render();
  }

  // ---------- rendering ----------
  _badge(ok, warn) {
    return ok ? '<span class="b ok">✓</span>' : `<span class="b ${warn ? 'warn' : 'no'}">${warn ? '!' : '•'}</span>`;
  }

  _row(ok, label, text, extra = '', warn = !ok) {
    return `<div class="row">${this._badge(ok, warn)}<span class="lbl">${esc(label)}</span><span class="txt">${text}</span>${extra}</div>`;
  }

  _printerChecks(p) {
    const st = (id) => this._hass.states[id];
    const isH2 = /(^|_)(h2|x1)/i.test(p.prefix) || /H2|X1/i.test(this._hass.devices?.[p.deviceId]?.model || '');
    const online = st(`binary_sensor.${p.prefix}_online`)?.state === 'on';
    const cam = st(`camera.${p.prefix}_camera`);
    const camSw = st(`switch.${p.prefix}_camera`);
    let camOk = cam && !['unavailable', 'unknown'].includes(cam.state);
    let camText = camOk ? this._t('cam_ok') : '';
    let camExtra = '';
    if (camSw?.state === 'off') {
      camOk = false; camText = this._t('cam_off');
      camExtra = `<button class="s" data-act="toggle" data-id="switch.${p.prefix}_camera">${this._t('turn_on')}</button>`;
    } else if (!camOk) camText = isH2 ? this._t('cam_h2') : 'unavailable';
    const gfile = st(`sensor.${p.prefix}_gcode_file_downloaded`)?.state;
    const sd = st(`sensor.${p.prefix}_sd_card_status`)?.state;
    const gOk = gfile && !['unknown', 'unavailable', '', 'ERROR'].includes(gfile);
    let gText = this._t('gcode_ok');
    if (!gOk) gText = sd === 'missing' || sd === 'abnormal' ? this._t(isH2 ? 'gcode_h2' : 'gcode_sd') : this._t('gcode_wait');
    const dev = st(`binary_sensor.${p.prefix}_developer_lan_mode`)?.state === 'on';
    const fw = st(`binary_sensor.${p.prefix}_firmware`)?.state === 'on';
    return `<div class="printer"><div class="pname">${esc(p.name)}</div>
      ${this._row(online, this._t(online ? 'online' : 'offline'), '')}
      ${this._row(camOk, this._t('camera'), esc(camText), camExtra)}
      ${this._row(gOk, this._t('gcode'), esc(gText), '', !gOk && (sd === 'missing' || sd === 'abnormal'))}
      ${this._row(dev, this._t('control'), esc(this._t(dev ? 'control_ok' : 'control_ro')), '', false)}
      ${this._row(!fw, this._t('fw'), esc(this._t(fw ? 'fw_up' : 'fw_ok')), '', fw)}
    </div>`;
  }

  _notifyBlock(p, d) {
    const a = d.ours[p.statusEntity];
    if (a) {
      const on = a.state === 'on';
      const input = a.cfg.use_blueprint.input || {};
      const phone = d.phones.find((x) => x.id === input.notify_device)?.name || '';
      const evs = (input.notify_on || EVENTS).map((e) => this._t(`ev_${e}`)).join(', ');
      return `<div class="printer"><div class="pname">${esc(p.name)}</div>
        ${this._row(on, this._t(on ? 'enabled' : 'disabled'), esc(`${phone} · ${evs}`),
          `<button class="s" data-act="toggle" data-id="${esc(a.entity)}">${this._t(on ? 'disable' : 'turn_on')}</button>
           <button class="s" data-act="nav" data-path="/config/automation/edit/${esc(a.id)}">${this._t('edit')}</button>`, false)}
      </div>`;
    }
    if (!d.phones.length) return `<div class="printer"><div class="pname">${esc(p.name)}</div><div class="hint">${this._t('no_phone')}</div></div>`;
    const f = this._form[`n_${p.prefix}`] || (this._form[`n_${p.prefix}`] = { phone: d.phones[0].id, events: [...EVENTS] });
    const opts = d.phones.map((x) => `<option value="${esc(x.id)}"${x.id === f.phone ? ' selected' : ''}>${esc(x.name)}</option>`).join('');
    const checks = EVENTS.map((e) => `<label class="chk"><input type="checkbox" data-n="${esc(p.prefix)}" data-ev="${e}"${f.events.includes(e) ? ' checked' : ''}>${this._t(`ev_${e}`)}</label>`).join('');
    return `<div class="printer"><div class="pname">${esc(p.name)}</div>
      <div class="form"><label>${this._t('phone')} <select data-n="${esc(p.prefix)}" data-field="phone">${opts}</select></label>
      <div class="evs"><span>${this._t('events')}:</span> ${checks}</div>
      <button class="p" data-act="notify" data-prefix="${esc(p.prefix)}">${this._t('enable')}</button></div></div>`;
  }

  _appBlock(d) {
    const a = d.app;
    if (!a) return `<div class="hint">${this._t('app_missing')}</div>`;
    const running = a.state === 'started';
    const f = this._form;
    const host = location.hostname;
    const chk = (k) => `<label class="chk"><input type="checkbox" data-opt="${k}"${f[k] ? ' checked' : ''}>${this._t(`o_${k}`)}</label>`;
    return `
      ${this._row(running, this._t('state'), `${this._t(running ? 'started' : 'stopped')} · ${this._t('version')} ${esc(a.version)}`,
        `<button class="s" data-act="app" data-op="${running ? 'stop' : 'start'}">${this._t(running ? 'stop' : 'start')}</button>
         ${running ? `<button class="s" data-act="app" data-op="restart">${this._t('restart')}</button>` : ''}
         ${a.update_available ? `<button class="p" data-act="app-update">${this._t('update', { v: esc(a.version_latest) })}</button>` : ''}
         ${running && f.start_slicer ? `<a class="s" href="https://${esc(host)}:3001" target="_blank" rel="noopener">${this._t('open_slicer')}</a>` : ''}`, !running)}
      <div class="form grid">
        ${chk('start_slicer')}
        <label>${this._t('o_username')} <input type="text" data-opt="username" value="${esc(f.username ?? '')}" autocomplete="off"></label>
        <label>${this._t('o_password')} <input type="password" data-opt="password" placeholder="${this._t('o_password_ph')}" autocomplete="new-password"></label>
        ${chk('dark_mode')}${chk('install_ha_bambulab')}${chk('create_dashboard')}
        <div><button class="p" data-act="save-app">${this._t('save')}</button> <span class="msg">${esc(this._msg.app || '')}</span></div>
      </div>`;
  }

  _render() {
    const d = this._data;
    if (!d) return;
    this._lastRender = Date.now();
    const h = this._hass;
    if (!d.admin) { this._html(`<div class="hint">${this._t('admin')}</div>`); return; }
    const printers = findPrinters(h);
    const s1 = d.loaded && (d.entries || []).length > 0;
    const s2 = s1 && printers.length > 0 && printers.every((p) => h.states[`binary_sensor.${p.prefix}_online`]?.state === 'on');
    const s3 = printers.length > 0 && printers.every((p) => d.ours[p.statusEntity]);
    const s4 = !!d.dash;
    const s5 = !!d.app && d.app.state === 'started';
    const done = [s1, s2, s3, s4, s5].filter(Boolean).length;

    const step = (n, ok, title, body) => `<section class="${ok ? 'done' : ''}"><h2><span class="num">${ok ? '✓' : n}</span>${esc(title)}</h2><div class="body">${body}</div></section>`;

    let b1;
    if (!d.loaded) b1 = `<div class="hint">${this._t('s1_missing')}</div><button class="p" data-act="restart-ha">${this._t('restart_ha')}</button>`;
    else if (!d.entries.length) b1 = `<div class="hint">${this._t('s1_none')}</div><button class="p" data-act="add-printer">${this._t('add')}</button>`;
    else b1 = `<div>${this._t('s1_ok', { n: d.entries.length })} ${d.entries.map((e) => `<span class="tag">${esc(e.title)}</span>`).join(' ')}</div>
      <button class="s" data-act="add-printer">${this._t('add')}</button>`;

    const b2 = printers.length ? printers.map((p) => this._printerChecks(p)).join('') : `<div class="hint">${this._t('no_printers')}</div>`;
    const legacy = d.legacy.filter((a) => a.state === 'on').map((a) => `<div class="warnbox">${this._t('legacy', { n: esc(a.name) })}
      <button class="s" data-act="toggle" data-id="${esc(a.entity)}">${this._t('disable')}</button></div>`).join('');
    const b3 = printers.length ? legacy + printers.map((p) => this._notifyBlock(p, d)).join('') : `<div class="hint">${this._t('no_printers')}</div>`;
    const langSel = ['', 'el', 'en'].map((v) => `<option value="${v}"${(d.dashLang || '') === v ? ' selected' : ''}>${v === '' ? this._t('auto') : v === 'el' ? 'Ελληνικά' : 'English'}</option>`).join('');
    const b4 = d.dash
      ? `<div>${this._t('dash_ok')} <button class="s" data-act="nav" data-path="/${DASH}/overview">${this._t('open')}</button></div>
         <div class="form"><label>${this._t('language')} <select data-act-change="dash-lang">${langSel}</select></label> <span class="msg">${esc(this._msg.dash || '')}</span></div>`
      : `<div class="hint">${this._t('dash_missing')}</div><button class="p" data-act="dash-create">${this._t('create')}</button>`;

    this._html(`
      <div class="head"><h1>${this._t('title')}</h1><span class="prog">${this._t('progress', { d: done, n: 5 })}</span>
        <button class="s" data-act="refresh">${this._t('refresh')}</button></div>
      <div class="bar"><div style="width:${(done / 5) * 100}%"></div></div>
      ${d.error ? `<div class="warnbox">${this._t('error', { e: esc(d.error) })}</div>` : ''}
      ${this._msg.global ? `<div class="info">${esc(this._msg.global)}</div>` : ''}
      ${step(1, s1, this._t('s1'), b1)}
      ${step(2, s2, this._t('s2'), b2)}
      ${step(3, s3, this._t('s3'), b3)}
      ${step(4, s4, this._t('s4'), b4)}
      ${step(5, s5, this._t('s5'), this._appBlock(d))}`);
  }

  _html(body) {
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; }
        ha-card { padding: 16px 18px 18px; max-width: 900px; margin: 0 auto; }
        .head { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
        h1 { font-size: 20px; font-weight: 500; margin: 0; flex: 1; color: var(--primary-text-color); }
        .prog { color: var(--secondary-text-color); font-size: 13px; }
        .bar { height: 6px; border-radius: 3px; margin: 10px 0 6px; background: color-mix(in srgb, var(--primary-text-color) 12%, transparent); overflow: hidden; }
        .bar div { height: 100%; background: var(--success-color, #43a047); }
        section { border-top: 1px solid var(--divider-color, #8883); padding: 12px 0 4px; }
        h2 { font-size: 16px; font-weight: 500; margin: 0 0 8px; display: flex; align-items: center; gap: 10px; color: var(--primary-text-color); }
        .num { width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 13px;
          background: color-mix(in srgb, var(--primary-color) 20%, transparent); color: var(--primary-color); flex: none; }
        section.done .num { background: var(--success-color, #43a047); color: #fff; }
        .body { padding-left: 34px; font-size: 14px; color: var(--primary-text-color); display: flex; flex-direction: column; gap: 8px; }
        .printer { border: 1px solid var(--divider-color, #8883); border-radius: 10px; padding: 8px 12px; }
        .pname { font-weight: 500; margin-bottom: 4px; }
        .row { display: flex; align-items: center; gap: 8px; margin: 3px 0; flex-wrap: wrap; font-size: 13.5px; }
        .lbl { font-weight: 500; }
        .txt { color: var(--secondary-text-color); flex: 1; min-width: 160px; }
        .b { width: 18px; height: 18px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; flex: none; color: #fff; }
        .b.ok { background: var(--success-color, #43a047); }
        .b.warn { background: var(--warning-color, #ff9800); }
        .b.no { background: var(--disabled-text-color, #999); }
        .hint { color: var(--secondary-text-color); }
        .tag { display: inline-block; padding: 1px 8px; border-radius: 10px; background: color-mix(in srgb, var(--primary-text-color) 8%, transparent); font-size: 12.5px; }
        .warnbox { padding: 8px 10px; border-radius: 8px; background: color-mix(in srgb, var(--warning-color, #ff9800) 15%, transparent); display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
        .info { padding: 8px 10px; border-radius: 8px; background: color-mix(in srgb, var(--info-color, #039be5) 15%, transparent); margin: 6px 0; }
        .form { display: flex; flex-wrap: wrap; gap: 8px 14px; align-items: center; margin-top: 4px; }
        .form.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); }
        .form label { display: flex; align-items: center; gap: 6px; font-size: 13.5px; }
        .evs { display: flex; gap: 10px; flex-wrap: wrap; align-items: center; font-size: 13.5px; }
        input[type=text], input[type=password], select { font: inherit; font-size: 13.5px; padding: 5px 8px; border-radius: 6px;
          border: 1px solid var(--divider-color, #8885); background: var(--card-background-color); color: var(--primary-text-color); min-width: 140px; }
        .chk { gap: 6px; }
        button, a.s { font: inherit; font-size: 13px; border-radius: 16px; padding: 5px 12px; cursor: pointer; text-decoration: none; display: inline-block; }
        button.s, a.s { border: 1px solid var(--divider-color, #8885); background: none; color: var(--primary-text-color); }
        button.p { border: none; background: var(--primary-color); color: var(--text-primary-color, #fff); }
        button:disabled { opacity: .5; cursor: progress; }
        .msg { color: var(--secondary-text-color); font-size: 13px; }
      </style>
      <ha-card>${body}</ha-card>`;
  }

  // ---------- actions ----------
  _onInput(ev) {
    const el = ev.composedPath()[0];
    if (!el || !el.dataset) return;
    if (el.dataset.opt) {
      this._form[el.dataset.opt] = el.type === 'checkbox' ? el.checked : el.value;
      this._dirty.add(el.dataset.opt);
    } else if (el.dataset.n) {
      const f = this._form[`n_${el.dataset.n}`];
      if (!f) return;
      if (el.dataset.field === 'phone') f.phone = el.value;
      if (el.dataset.ev) f.events = el.checked ? [...new Set([...f.events, el.dataset.ev])] : f.events.filter((x) => x !== el.dataset.ev);
    } else if (el.dataset.actChange === 'dash-lang' && ev.type === 'change') {
      this._run(() => this._saveDashLang(el.value));
    }
  }

  _onClick(ev) {
    const el = ev.composedPath().find((x) => x.dataset && x.dataset.act);
    if (!el || el.tagName === 'A') return;
    const a = el.dataset.act;
    const h = this._hass;
    if (a === 'refresh') return this._run(() => null);
    if (a === 'nav') { history.pushState(null, '', el.dataset.path); window.dispatchEvent(new CustomEvent('location-changed')); return null; }
    if (a === 'add-printer') { history.pushState(null, '', '/config/integrations/dashboard/add?domain=bambu_lab'); window.dispatchEvent(new CustomEvent('location-changed')); return null; }
    if (a === 'restart-ha') { if (window.confirm(this._t('restart_q'))) h.callService('homeassistant', 'restart'); return null; }
    if (a === 'toggle') return this._run(() => h.callService(el.dataset.id.split('.')[0], 'toggle', { entity_id: el.dataset.id }));
    if (a === 'notify') return this._run(() => this._createNotify(el.dataset.prefix));
    if (a === 'dash-create') return this._run(() => this._createDash());
    if (a === 'app') return this._run(() => this._sv(`/addons/${this._data.app.slug}/${el.dataset.op}`, 'post'));
    if (a === 'app-update') return this._run(() => this._sv(`/store/addons/${this._data.app.slug}/update`, 'post'));
    if (a === 'save-app') return this._run(() => this._saveApp());
    return null;
  }

  async _run(fn) {
    this.shadowRoot.querySelectorAll('button').forEach((b) => { b.disabled = true; });
    try {
      await fn();
    } catch (e) {
      this._msg.global = this._t('error', { e: e.message || JSON.stringify(e) });
    }
    await new Promise((r) => setTimeout(r, 600));
    if (this.isConnected) await this._load(); // a replaced card has nothing left to show
  }

  async _createNotify(prefix) {
    const p = findPrinters(this._hass).find((x) => x.prefix === prefix);
    const f = this._form[`n_${prefix}`];
    if (!p || !f) return;
    const id = `bambu_tools_notify_${prefix}`;
    await this._hass.callApi('POST', `config/automation/config/${id}`, {
      alias: `Bambu Tools – ${p.name}`,
      description: 'Created by the Bambu Tools setup page.',
      use_blueprint: {
        path: BLUEPRINT,
        input: { print_status: p.statusEntity, notify_device: f.phone, notify_on: f.events, dashboard_path: `/${DASH}/overview` },
      },
    });
    // Home Assistant reloads automations after the save; a new one shows up in hass.states a moment later.
    // Wait for it (max 10 s), otherwise the card would still show "Turn on notifications".
    // On the auto-generated "Bambu" dashboard the new entity makes HA rebuild the dashboard and this card
    // is replaced by a fresh one, so stop waiting as soon as this one is no longer on the page.
    const exists = () => Object.values(this._hass.states)
      .some((s) => s.entity_id.startsWith('automation.') && s.attributes.id === id);
    for (let i = 0; i < 40 && this.isConnected && !exists(); i++) await new Promise((r) => setTimeout(r, 250));
    this._msg.global = '';
  }

  async _saveDashLang(language) {
    const config = { strategy: { type: 'custom:bambu-tools', ...(language ? { language } : {}) } };
    await this._ws({ type: 'lovelace/config/save', url_path: DASH, config });
    this._msg.dash = this._t('saved');
  }

  async _createDash() {
    await this._ws({ type: 'lovelace/dashboards/create', url_path: DASH, title: 'Bambu', icon: 'mdi:printer-3d', show_in_sidebar: true, require_admin: false, mode: 'storage' });
    await this._saveDashLang(this._config?.language || '');
  }

  // Re-read the app's options right before saving and change only the fields edited on this page,
  // so a change made meanwhile elsewhere (e.g. the app's own Configuration tab) is not overwritten.
  async _saveApp() {
    const slug = this._data.app.slug;
    const fresh = await this._sv(`/addons/${slug}/info`);
    const f = this._form;
    const options = { ...fresh.options };
    for (const k of this._dirty) {
      if (k === 'password') { if (f.password) options.password = f.password; continue; }
      if (k === 'username') { if (String(f.username || '').trim()) options.username = String(f.username).trim(); continue; }
      options[k] = !!f[k];
    }
    if (this._dirty.size) await this._sv(`/addons/${slug}/options`, 'post', { options });
    this._dirty.clear();
    delete f.password;
    this._msg.app = this._t('saved_restart');
  }
}

if (!customElements.get('bambu-setup-card')) {
  customElements.define('bambu-setup-card', BambuSetupCard);
  window.customCards = window.customCards || [];
  window.customCards.push({ type: 'bambu-setup-card', name: 'Bambu Tools setup', description: 'All Bambu Tools settings on one page.', preview: false });
}
