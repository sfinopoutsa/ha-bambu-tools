// bambu-spools-card: the spools kept by the Bambu Tools app (entity sensor.bambu_tools_spools) – what is left on
// each, where it sits (AMS tray / external spool) – and forms to add, edit, move and archive spools.
// Changes go to the app's service as the Home Assistant event `bambu_tools_command` (administrators only);
// the service answers by republishing the entity with the command's revision.
//
//   type: custom:bambu-spools-card
//   language: el        # optional, default: the Home Assistant language
import { t, lang } from './i18n.js';

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const ENTITY = 'sensor.bambu_tools_spools';

class BambuSpoolsCard extends HTMLElement {
  setConfig(config) {
    this._config = config || {};
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' });
    this._edit = null;   // spool being edited ('new' or an id)
    this._msg = '';
    if (this._hass) this._render();
  }

  set hass(hass) {
    this._hass = hass;
    const st = hass.states[ENTITY];
    if (st === this._state && this.shadowRoot.childElementCount) return;
    this._state = st;
    if (!this.shadowRoot.activeElement) this._render();  // never while typing in a form
  }

  getCardSize() { return 6; }

  getGridOptions() { return { columns: 'full' }; }

  _t(key, vars) { return t(this._config?.language || this._hass, key, vars); }

  _locale() { return lang(this._config?.language || this._hass) === 'el' ? 'el-GR' : 'en-GB'; }

  _g(v) { return v == null ? '' : `${Math.round(v).toLocaleString(this._locale())} g`; }

  _admin() { return !!this._hass?.user?.is_admin; }

  async _send(cmd) {
    const rev = Date.now();
    this._msg = this._t('sp_saving');
    this._render();
    try {
      await this._hass.callWS({ type: 'fire_event', event_type: 'bambu_tools_command', event_data: { ...cmd, rev } });
    } catch (e) {
      this._msg = this._t('sp_err', { e: e.message || e.code || 'error' });
      this._render();
      return false;
    }
    for (let i = 0; i < 40; i++) {
      const a = this._hass.states[ENTITY]?.attributes || {};
      if (a.settings_rev === rev) { this._msg = this._t('sp_saved'); this._render(); return true; }
      if (a.settings_error?.rev === rev) { this._msg = this._t('sp_err', { e: a.settings_error.error }); this._render(); return false; }
      await new Promise((r) => setTimeout(r, 250));
    }
    this._msg = this._t('sp_err', { e: 'no answer from the app' });
    this._render();
    return false;
  }

  _trayLabel(a, tray) {
    for (const p of Object.values(a.printers || {})) {
      const row = (p.trays || []).find((r) => r.tray === tray);
      if (row) return `${p.name} · ${row.key || row.label}`;
    }
    return tray || '';
  }

  _trayOptions(a, selected) {
    const opts = [`<option value="">${esc(this._t('sp_shelf'))}</option>`];
    for (const p of Object.values(a.printers || {})) {
      for (const row of p.trays || []) {
        opts.push(`<option value="${esc(row.tray)}"${row.tray === selected ? ' selected' : ''}>${esc(`${p.name} · ${row.key || row.label}${row.name ? ` (${row.name})` : ''}`)}</option>`);
      }
    }
    return opts.join('');
  }

  _form(a, sp) {
    const v = sp || { name: '', material: '', color: '#ffffff', weight: 1000, price: '', used_before: 0, tray: '' };
    return `<form class="edit" data-id="${esc(sp ? sp.id : 'new')}">
      <label>${esc(this._t('sp_name'))}<input name="name" required maxlength="60" value="${esc(v.name)}" placeholder="eSUN PLA+ white"></label>
      <label>${esc(this._t('sp_material'))}<input name="material" maxlength="40" value="${esc(v.material || '')}" placeholder="PLA"></label>
      <label>${esc(this._t('sp_color'))}<input name="color" type="color" value="${esc(v.color || '#ffffff')}"></label>
      <label>${esc(this._t('sp_weight'))}<input name="weight" type="number" min="1" max="20000" step="1" value="${esc(v.weight)}"></label>
      <label>${esc(this._t('sp_used'))}<input name="used_before" type="number" min="0" step="1" value="${esc(v.used_before || 0)}"></label>
      <label>${esc(this._t('sp_price', { c: a.currency || '€' }))}<input name="price" type="number" min="0" step="0.01" value="${esc(v.price ?? '')}"></label>
      ${sp ? '' : `<label>${esc(this._t('sp_where'))}<select name="tray">${this._trayOptions(a, v.tray)}</select></label>`}
      <div class="btns"><button class="p" type="submit">${esc(this._t('sp_save'))}</button>
        <button class="s" type="button" data-act="cancel">${esc(this._t('sp_cancel'))}</button></div>
    </form>`;
  }

  _render() {
    const st = this._state;
    let body;
    if (!st) {
      body = `<div class="hint">${esc(this._t('sp_missing'))}</div>`;
    } else {
      const a = st.attributes || {};
      const admin = this._admin();
      const spools = a.spools || [];
      const byId = Object.fromEntries(spools.map((s) => [s.id, s]));
      // printers and their trays
      const printers = Object.values(a.printers || {}).map((p) => `<div class="printer"><div class="pname">${esc(p.name)}</div>
        ${(p.trays || []).map((r) => {
          const sp = r.spool ? byId[r.spool] : null;
          const sw = `<span class="sw" style="background:${esc(r.color || '#888')}"></span>`;
          const select = admin ? `<select data-assign="${esc(r.tray)}">${['<option value="">—</option>',
            ...spools.map((s) => `<option value="${esc(s.id)}"${r.spool === s.id ? ' selected' : ''}>${esc(s.name)}</option>`)].join('')}</select>` : '';
          return `<div class="tray">${sw}<span class="tk">${esc(r.key || r.label)}</span>
            <span class="tn">${esc(r.empty ? this._t('sp_empty') : (r.name || '—'))}${r.type ? ` · ${esc(r.type)}` : ''}</span>
            <span class="ts">${sp ? `${esc(sp.name)} · <b class="${sp.low ? 'low' : ''}">${esc(this._g(sp.remaining))}</b>` : `<i>${esc(this._t('sp_none'))}</i>`}</span>
            ${select}</div>`;
        }).join('')}</div>`).join('');
      // spools
      const rows = spools.map((s) => {
        if (this._edit === s.id) return this._form(a, s);
        return `<div class="spool">
          <span class="sw big" style="background:${esc(s.color || '#888')}"></span>
          <div class="sinfo"><div class="sname">${esc(s.name)}${s.material ? ` <span class="muted">${esc(s.material)}</span>` : ''}</div>
            <div class="bar"><div class="${s.low ? 'low' : ''}" style="width:${Math.max(0, Math.min(100, s.percent ?? 0))}%"></div></div>
            <div class="muted small">${esc(this._g(s.remaining))} / ${esc(this._g(s.weight))}${s.tray ? ` · ${esc(this._trayLabel(a, s.tray))}` : ` · ${esc(this._t('sp_shelf'))}`}</div></div>
          ${admin ? `<div class="sbtn"><button class="s" data-act="edit" data-id="${esc(s.id)}">${esc(this._t('sp_edit'))}</button>
            <button class="s" data-act="archive" data-id="${esc(s.id)}" title="${esc(this._t('sp_archive_hint'))}">${esc(this._t('sp_archive'))}</button></div>` : ''}
        </div>`;
      }).join('');
      body = `
        <div class="head"><h2>${esc(this._t('sp_trays'))}</h2></div>
        ${printers || `<div class="hint">${esc(this._t('sp_noprinters'))}</div>`}
        <div class="head"><h2>${esc(this._t('sp_spools'))}</h2>
          ${admin && this._edit !== 'new' ? `<button class="p" data-act="new">${esc(this._t('sp_add'))}</button>` : ''}</div>
        ${this._edit === 'new' ? this._form(a, null) : ''}
        ${rows || `<div class="hint">${esc(this._t('sp_nospools'))}</div>`}
        ${this._msg ? `<div class="msg">${esc(this._msg)}</div>` : ''}
        <div class="hint small">${esc(this._t('sp_how', { g: a.low_grams ?? 100 }))}</div>`;
    }
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; }
        ha-card { padding: 12px 14px; }
        h2 { font-size: 15px; font-weight: 500; margin: 10px 0 6px; flex: 1; color: var(--primary-text-color); }
        .head { display: flex; align-items: center; gap: 8px; }
        .hint, .muted { color: var(--secondary-text-color); }
        .hint { font-size: 13px; margin: 6px 0; }
        .small { font-size: 12px; }
        .printer { border: 1px solid var(--divider-color, #8883); border-radius: 10px; padding: 6px 10px; margin-bottom: 8px; }
        .pname { font-weight: 500; margin-bottom: 2px; color: var(--primary-text-color); }
        .tray { display: grid; grid-template-columns: 14px 100px minmax(0, 1fr) minmax(0, 1.2fr) auto; gap: 8px; align-items: center;
          padding: 4px 0; font-size: 13px; color: var(--primary-text-color); border-top: 1px solid var(--divider-color, #8882); }
        .tray:nth-child(2) { border-top: none; }
        .tk { font-weight: 500; }
        .tn, .ts { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .ts i { color: var(--secondary-text-color); }
        .sw { width: 12px; height: 12px; border-radius: 50%; border: 1px solid #8886; display: inline-block; }
        .sw.big { width: 26px; height: 26px; flex: none; }
        .spool { display: flex; align-items: center; gap: 10px; padding: 8px 0; border-top: 1px solid var(--divider-color, #8882); }
        .sinfo { flex: 1; min-width: 0; }
        .sname { font-weight: 500; color: var(--primary-text-color); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .bar { height: 6px; border-radius: 3px; background: color-mix(in srgb, var(--primary-text-color) 10%, transparent); margin: 4px 0; overflow: hidden; }
        .bar div { height: 100%; background: var(--success-color, #43a047); }
        .bar div.low, b.low { color: var(--error-color, #db4437); }
        .bar div.low { background: var(--error-color, #db4437); }
        .sbtn { display: flex; gap: 6px; flex-wrap: wrap; }
        form.edit { display: grid; grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)); gap: 8px 12px; padding: 10px;
          margin: 6px 0; border-radius: 10px; background: color-mix(in srgb, var(--primary-text-color) 5%, transparent); }
        form.edit label { display: flex; flex-direction: column; gap: 3px; font-size: 12.5px; color: var(--secondary-text-color); }
        input, select { font: inherit; font-size: 13.5px; padding: 5px 8px; border-radius: 6px; border: 1px solid var(--divider-color, #8885);
          background: var(--card-background-color); color: var(--primary-text-color); min-width: 0; }
        input[type=color] { padding: 0; height: 30px; }
        .btns { display: flex; gap: 8px; align-items: end; }
        button { font: inherit; font-size: 13px; border-radius: 16px; padding: 5px 12px; cursor: pointer; }
        button.s { border: 1px solid var(--divider-color, #8885); background: none; color: var(--primary-text-color); }
        button.p { border: none; background: var(--primary-color); color: var(--text-primary-color, #fff); }
        .msg { font-size: 13px; color: var(--secondary-text-color); margin-top: 6px; }
        @media (max-width: 560px) { .tray { grid-template-columns: 14px 80px minmax(0, 1fr); } .ts, .tray select { grid-column: 2 / -1; } }
      </style>
      <ha-card>${body}</ha-card>`;
    this._wire();
  }

  _wire() {
    const root = this.shadowRoot;
    root.querySelectorAll('button[data-act]').forEach((b) => b.addEventListener('click', (ev) => this._click(ev, b)));
    root.querySelectorAll('select[data-assign]').forEach((sel) => sel.addEventListener('change', () => {
      const tray = sel.dataset.assign;
      const a = this._state?.attributes || {};
      const current = Object.values(a.printers || {}).flatMap((p) => p.trays || []).find((r) => r.tray === tray)?.spool;
      if (sel.value) this._send({ cmd: 'assign_spool', id: sel.value, tray });
      else if (current) this._send({ cmd: 'assign_spool', id: current, tray: null });
    }));
    root.querySelectorAll('form.edit').forEach((f) => f.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const fd = Object.fromEntries(new FormData(f).entries());
      const spool = { name: fd.name, material: fd.material, color: fd.color, weight: fd.weight, used_before: fd.used_before, price: fd.price };
      const ok = f.dataset.id === 'new'
        ? await this._send({ cmd: 'add_spool', spool: { ...spool, tray: fd.tray || null } })
        : await this._send({ cmd: 'update_spool', id: f.dataset.id, spool });
      if (ok) { this._edit = null; this._render(); }
    }));
  }

  async _click(ev, b) {
    const act = b.dataset.act;
    if (act === 'new') { this._edit = 'new'; this._msg = ''; this._render(); }
    else if (act === 'edit') { this._edit = b.dataset.id; this._msg = ''; this._render(); }
    else if (act === 'cancel') { this._edit = null; this._render(); }
    else if (act === 'archive') {
      if (window.confirm(this._t('sp_archive_q'))) await this._send({ cmd: 'archive_spool', id: b.dataset.id });
    }
  }
}

if (!customElements.get('bambu-spools-card')) {
  customElements.define('bambu-spools-card', BambuSpoolsCard);
  window.customCards = window.customCards || [];
  window.customCards.push({ type: 'bambu-spools-card', name: 'Bambu spools', description: 'Spools and what is left on them (Bambu Tools app).' });
}
