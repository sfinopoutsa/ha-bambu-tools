// bambu-history-card: the print history of one printer, as recorded by the Bambu Tools app
// (entity sensor.bambu_tools_history_<printer>, see bambu_tools/rootfs/opt/bambu-tools/service.py).
//
//   type: custom:bambu-history-card
//   printer: a1          # entity prefix of the printer
//   limit: 10            # prints listed (default 10)
//   language: el         # optional, default: the Home Assistant language
import { t, lang } from './i18n.js';

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

class BambuHistoryCard extends HTMLElement {
  setConfig(config) {
    if (!config || !config.printer) throw new Error('bambu-history-card: "printer" is required');
    this._config = config;
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' });
    this._state = undefined;
    if (this._hass) this._render();
  }

  set hass(hass) {
    this._hass = hass;
    const st = hass.states[`sensor.bambu_tools_history_${this._config.printer}`];
    if (st === this._state && this.shadowRoot.childElementCount) return; // nothing new
    this._state = st;
    this._render();
  }

  getCardSize() { return 5; }

  getGridOptions() { return { columns: 'full' }; }

  _tl() { return this._config?.language || this._hass; }

  _t(key, vars) { return t(this._tl(), key, vars); }

  _locale() { return lang(this._tl()) === 'el' ? 'el-GR' : 'en-GB'; }

  _dur(sec) {
    const m = Math.round((sec || 0) / 60);
    const h = Math.floor(m / 60);
    return h ? this._t('h_hm', { h, m: String(m % 60).padStart(2, '0') }) : this._t('h_m', { m });
  }

  _grams(g) {
    if (g === null || g === undefined) return '';
    return g >= 1000 ? `${(g / 1000).toLocaleString(this._locale(), { maximumFractionDigits: 2 })} kg` : `${Math.round(g)} g`;
  }

  _when(iso) {
    const d = new Date(iso);
    return Number.isNaN(d.getTime()) ? '' : d.toLocaleString(this._locale(), { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit', hour12: false });
  }

  _money(v) {
    if (v == null) return '';
    try { return new Intl.NumberFormat(this._locale(), { style: 'currency', currency: this._cur || 'EUR' }).format(v); } catch (e) { return `${v.toFixed(2)}`; }
  }

  _costTip(c) {
    return [c.filament != null ? `${this._t('h_c_fil')} ${this._money(c.filament)}` : '', c.energy != null ? `${this._t('h_c_kwh')} ${this._money(c.energy)}` : '']
      .filter(Boolean).join(' · ');
  }

  // filament of a print: colour dot + name (material)
  _fil(f) {
    if (!f || !f.name) return '';
    const type = f.type && !String(f.name).includes(f.type) ? ` (${f.type})` : '';
    return `<span class="fil"><span class="sw" style="background:${esc(f.color || '#888')}"></span>${esc(f.name + type)}</span>`;
  }

  // picture of a print (in Home Assistant's media folder): signed URL, resolved once per path
  _thumb(media, path) {
    if (!media || !path) return '<span class="ph"></span>';
    const id = `${media}/${path}`;
    this._urls = this._urls || {};
    const url = this._urls[id];
    if (url === undefined) {
      this._urls[id] = null;
      this._hass.callWS({ type: 'media_source/resolve_media', media_content_id: id, expires: 86400 })
        .then((r) => { this._urls[id] = r.url; this._render(); })
        .catch(() => { this._urls[id] = ''; });
    }
    return url ? `<a class="ph" href="${esc(url)}" target="_blank" rel="noopener"><img src="${esc(url)}" loading="lazy" alt=""></a>` : '<span class="ph"></span>';
  }

  _month(key) {
    const [y, m] = key.split('-').map(Number);
    return new Date(y, m - 1, 1).toLocaleString(this._locale(), { month: 'long', year: 'numeric' });
  }

  _render() {
    const st = this._state;
    let body;
    if (!st) {
      body = `<div class="hint">${esc(this._t('h_missing'))}</div>`;
    } else {
      const a = st.attributes || {};
      const jobs = (a.jobs || []).slice(0, this._config.limit || 10);
      const months = a.months || [];
      const thisMonth = new Date().toISOString().slice(0, 7);
      const cur = a.this_month || months.find((m) => m.month === thisMonth) || { prints: 0, hours: 0, grams: 0 };
      this._cur = a.currency;
      const stat = (label, m) => `<div class="stat"><div class="lbl">${esc(label)}</div>
        <div class="val">${esc(this._t('h_prints', { n: m.prints }))}</div>
        <div class="sub">${esc(this._dur((m.hours || 0) * 3600))} · ${esc(this._grams(m.grams || 0))}${m.cost != null ? ` · ${esc(this._money(m.cost))}` : ''}</div></div>`;
      const active = a.active ? `<div class="now"><span class="dot"></span>${esc(this._t('h_now'))}: <b>${esc(a.active.file || '—')}</b>
        ${this._fil(a.active.filament)}
        <span class="muted">${esc(this._t('h_since', { t: this._when(a.active.start) }))}</span>
        ${this._thumb(a.media, a.active.photos?.first)}</div>` : '';
      const icon = { finish: ['mdi:check-circle', 'ok'], failed: ['mdi:close-circle', 'bad'], stopped: ['mdi:stop-circle', 'mid'] };
      const rows = jobs.map((j) => {
        const [ic, cls] = icon[j.result] || icon.stopped;
        const at = j.result !== 'finish' && j.progress != null ? ` ${this._t('h_at', { p: Math.round(j.progress) })}` : '';
        return `<div class="job" title="${esc(this._t(`h_${j.result}`) + at)}${j.layers ? ` · layer ${esc(j.layers)}` : ''}">
          <ha-icon class="${cls}" icon="${ic}"></ha-icon>
          ${this._thumb(a.media, j.photos?.end || j.photos?.first)}
          <span class="file">${esc(j.file || '—')}<span class="sub2">${this._fil(j.filament)}${at ? `<span class="${cls}">${esc(this._t(`h_${j.result}`) + at)}</span>` : ''}</span></span>
          <span class="muted when">${esc(this._when(j.end))}</span>
          <span class="dur">${esc(this._dur(j.duration_s))}</span>
          <span class="g">${esc(this._grams(j.grams))}${j.cost?.total != null
            ? `<span class="money" title="${esc(this._costTip(j.cost))}">${esc(this._money(j.cost.total))}</span>` : ''}</span></div>`;
      }).join('');
      const monthRows = months.slice(0, 6).map((m) => `<tr><td>${esc(this._month(m.month))}</td><td>${m.prints}</td>
        <td>${m.finished}/${m.prints}</td><td>${esc(this._dur(m.hours * 3600))}</td><td>${esc(this._grams(m.grams))}</td></tr>`).join('');
      body = `
        <div class="stats">${stat(this._t('h_month'), cur)}${stat(this._t('h_total'), { prints: a.total_prints || 0, hours: a.total_hours || 0, grams: a.total_grams || 0, cost: a.total_cost })}</div>
        ${active}
        ${rows ? `<div class="jobs">${rows}</div>` : `<div class="hint">${esc(this._t('h_empty'))}</div>`}
        ${monthRows ? `<details><summary>${esc(this._t('h_months'))}</summary><table>
          <tr><th></th><th>${esc(this._t('h_col_prints'))}</th><th>${esc(this._t('h_col_ok'))}</th><th>${esc(this._t('h_col_time'))}</th><th>${esc(this._t('h_col_g'))}</th></tr>
          ${monthRows}</table></details>` : ''}`;
    }
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; }
        ha-card { padding: 12px 14px; }
        .hint, .muted { color: var(--secondary-text-color); }
        .hint { font-size: 13.5px; }
        .stats { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 10px; }
        .stat { border-radius: 10px; padding: 8px 10px; background: color-mix(in srgb, var(--primary-text-color) 6%, transparent); }
        .stat .lbl { font-size: 12px; color: var(--secondary-text-color); }
        .stat .val { font-size: 17px; font-weight: 500; color: var(--primary-text-color); }
        .stat .sub { font-size: 12.5px; color: var(--secondary-text-color); }
        .now { font-size: 13.5px; margin: 0 0 8px; display: flex; gap: 6px; align-items: center; flex-wrap: wrap; color: var(--primary-text-color); }
        .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--info-color, #039be5); }
        .jobs { display: flex; flex-direction: column; }
        .job { display: grid; grid-template-columns: 22px 44px minmax(0, 1fr) auto auto auto; gap: 8px; align-items: center;
          padding: 5px 0; border-top: 1px solid var(--divider-color, #8883); font-size: 13.5px; color: var(--primary-text-color); }
        .job:first-child { border-top: none; }
        .job ha-icon { --mdc-icon-size: 18px; }
        .ok { color: var(--success-color, #43a047); }
        .bad { color: var(--error-color, #db4437); }
        .mid { color: var(--disabled-text-color, #999); }
        .file { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: flex; flex-direction: column; min-width: 0; }
        .sub2 { font-size: 12px; color: var(--secondary-text-color); display: flex; gap: 8px; overflow: hidden; text-overflow: ellipsis; }
        .fil { display: inline-flex; align-items: center; gap: 4px; font-size: 12px; color: var(--secondary-text-color); }
        .sw { width: 9px; height: 9px; border-radius: 50%; border: 1px solid #8886; flex: none; }
        .ph { width: 44px; height: 33px; border-radius: 4px; overflow: hidden; display: block;
          background: color-mix(in srgb, var(--primary-text-color) 6%, transparent); }
        .ph img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .now .ph { margin-left: auto; }
        .when, .dur, .g { white-space: nowrap; font-size: 12.5px; }
        .g { min-width: 48px; text-align: right; display: flex; flex-direction: column; align-items: flex-end; }
        .money { font-size: 11.5px; color: var(--secondary-text-color); }
        @media (max-width: 480px) { .job { grid-template-columns: 22px 44px minmax(0, 1fr) auto auto; } .when { display: none; } }
        details { margin-top: 10px; font-size: 13px; color: var(--primary-text-color); }
        summary { cursor: pointer; color: var(--secondary-text-color); }
        table { width: 100%; border-collapse: collapse; margin-top: 6px; }
        th, td { text-align: right; padding: 3px 4px; white-space: nowrap; }
        th:first-child, td:first-child { text-align: left; }
        th { font-weight: 500; color: var(--secondary-text-color); font-size: 12px; }
      </style>
      <ha-card>${body}</ha-card>`;
  }
}

if (!customElements.get('bambu-history-card')) {
  customElements.define('bambu-history-card', BambuHistoryCard);
  window.customCards = window.customCards || [];
  window.customCards.push({ type: 'bambu-history-card', name: 'Bambu print history', description: 'Print history recorded by the Bambu Tools app.' });
}
