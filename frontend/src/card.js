// bambu-layer-card: live 3D G-code layer view for ha-bambulab printers.
// Loads the current job's G-code that ha-bambulab extracts into its file cache,
// renders it like Bambu Studio's preview and follows the printer's current layer.
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import workerSrc from '../build/worker.wjs';
import { parseGcode, FEATURES } from './parser.js';
import { t, lang } from './i18n.js';

const VERSION = '1.2.0';

// Bambu Studio "Line type" palette (approximate).
const FEATURE_COLORS = {
  'Other': '#e6b3b3', 'Outer wall': '#ff7d38', 'Inner wall': '#ffe64d', 'Overhang wall': '#3a3aff',
  'Sparse infill': '#b03029', 'Internal solid infill': '#9654cc', 'Top surface': '#f04040',
  'Bottom surface': '#665cc7', 'Bridge': '#4d80ba', 'Gap infill': '#f2f2f2', 'Skirt': '#00876e',
  'Brim': '#2f6f9f', 'Support': '#3fd13f', 'Support interface': '#1f8f1f', 'Support transition': '#205020',
  'Prime tower': '#b3e3ab', 'Custom': '#5ed194', 'Ironing': '#ff8c69', 'Floating vertical shell': '#e8a35a',
};

const statusText = (hass, s) => (s && s !== 'unknown' ? t(hass, `status.${s}`) : '—');

const BAD = new Set(['', 'unknown', 'unavailable', 'none', 'None', 'ERROR', 'error']);

// ---------- G-code loading (shared between cards) ----------
const parseCache = new Map(); // url -> Promise<parsed>
let worker = null;
let workerSeq = 0;
const workerWaiters = new Map();

function getWorker() {
  if (worker) return worker;
  try {
    const url = URL.createObjectURL(new Blob([workerSrc], { type: 'text/javascript' }));
    worker = new Worker(url);
    worker.onmessage = (ev) => {
      const w = workerWaiters.get(ev.data.id);
      if (!w) return;
      workerWaiters.delete(ev.data.id);
      if (ev.data.ok) w.resolve(ev.data.r); else w.reject(new Error(ev.data.error));
    };
    worker.onerror = (e) => { console.warn('bambu-layer-card worker error', e); };
  } catch (e) {
    console.warn('bambu-layer-card: worker unavailable, parsing on main thread', e);
    worker = null;
  }
  return worker;
}

function parseBuffer(buffer) {
  const w = getWorker();
  if (!w) return Promise.resolve(parseGcode(new TextDecoder().decode(buffer)));
  const id = ++workerSeq;
  return new Promise((resolve, reject) => {
    workerWaiters.set(id, { resolve, reject });
    w.postMessage({ id, buffer }, [buffer]);
  });
}

async function fetchBuffer(hass, serial, name, onProgress) {
  const enc = encodeURIComponent(name);
  const tries = [
    { url: `/api/bambu_lab/file_cache/${serial}/prints/cache/${enc}`, auth: true },
    { url: `/api/bambu_lab/file_cache/${serial}/prints/${enc}`, auth: true },
    { url: `/local/media/ha-bambulab/${serial}/prints/cache/${enc}`, auth: false },
    { url: `/local/media/ha-bambulab/${serial}/prints/${enc}`, auth: false },
  ];
  let lastStatus = 0;
  for (const t of tries) {
    let res;
    try {
      res = t.auth && hass.fetchWithAuth ? await hass.fetchWithAuth(t.url) : await fetch(t.url, { cache: 'no-cache' });
    } catch (e) { continue; }
    lastStatus = res.status;
    if (!res.ok) continue;
    const total = +res.headers.get('content-length') || 0;
    if (!res.body || !res.body.getReader) return res.arrayBuffer();
    const reader = res.body.getReader();
    const chunks = [];
    let got = 0;
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
      got += value.length;
      onProgress && onProgress(got, total);
    }
    const out = new Uint8Array(got);
    let o = 0;
    for (const c of chunks) { out.set(c, o); o += c.length; }
    return out.buffer;
  }
  throw new Error(t(hass, 'gcode.notfound', { s: lastStatus || '—' }));
}

function loadGcode(hass, serial, name, onProgress) {
  const key = `${serial}/${name}`;
  if (parseCache.has(key)) return parseCache.get(key);
  const p = (async () => {
    const buf = await fetchBuffer(hass, serial, name, onProgress);
    onProgress && onProgress(-1, buf.byteLength);
    return parseBuffer(buf);
  })();
  parseCache.set(key, p);
  p.catch(() => parseCache.delete(key));
  while (parseCache.size > 3) parseCache.delete(parseCache.keys().next().value);
  return p;
}

// ---------- Geometry: one instanced hexagonal prism per extrusion segment ----------
function buildPrism() {
  // Cross-section (across, vertical); top of bead at z=0, bottom at z=-1.
  const prof = [[-0.5, -0.5], [-0.3, 0], [0.3, 0], [0.5, -0.5], [0.3, -1], [-0.3, -1]];
  const pos = [], nor = [], idx = [];
  let v = 0;
  for (let i = 0; i < prof.length; i++) {
    const a = prof[i], b = prof[(i + 1) % prof.length];
    // outward normal of edge a->b in (y,z) plane; profile is clockwise seen from +x
    const ey = b[0] - a[0], ez = b[1] - a[1];
    let ny = ez, nz = -ey;
    const cy = (a[0] + b[0]) / 2, cz = (a[1] + b[1]) / 2 + 0.5;
    if (ny * cy + nz * cz < 0) { ny = -ny; nz = -nz; }
    const l = Math.hypot(ny, nz); ny /= l; nz /= l;
    for (const [x, p] of [[0, a], [1, a], [1, b], [0, b]]) { pos.push(x, p[0], p[1]); nor.push(0, ny, nz); }
    idx.push(v, v + 1, v + 2, v, v + 2, v + 3);
    v += 4;
  }
  for (const [x, nx] of [[0, -1], [1, 1]]) {
    const base = v;
    for (const p of prof) { pos.push(x, p[0], p[1]); nor.push(nx, 0, 0); v++; }
    for (let i = 1; i < prof.length - 1; i++) {
      if (nx > 0) idx.push(base, base + i, base + i + 1); else idx.push(base, base + i + 1, base + i);
    }
  }
  const g = new THREE.InstancedBufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setIndex(idx);
  return g;
}

const VERT = /* glsl */`
attribute vec3 iStart;
attribute vec3 iEnd;
attribute vec2 iSize;
attribute vec3 iColor;
uniform float uHiStart;
uniform float uDim;
varying vec3 vColor;
varying vec3 vNormal;
varying vec3 vWorld;
void main() {
  vec3 d = iEnd - iStart;
  float L = length(d.xy);
  vec2 dir = L > 1e-6 ? d.xy / L : vec2(1.0, 0.0);
  vec3 fwd = vec3(dir, 0.0);
  vec3 side = vec3(-dir.y, dir.x, 0.0);
  vec3 up = vec3(0.0, 0.0, 1.0);
  float w = iSize.x;
  float h = max(iSize.y, 0.05);
  float ext = 0.5 * w;
  float span = L + 2.0 * ext;
  vec3 p = iStart + fwd * (-ext + position.x * span) + side * (position.y * w) + up * (position.z * h);
  vNormal = normalize(fwd * (normal.x / span) + side * (normal.y / w) + up * (normal.z / h));
  vec3 c = iColor;
  if (float(gl_InstanceID) < uHiStart) c *= uDim;
  vColor = c;
  vec4 wp = modelMatrix * vec4(p, 1.0);
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}`;

const FRAG = /* glsl */`
varying vec3 vColor;
varying vec3 vNormal;
varying vec3 vWorld;
void main() {
  vec3 n = normalize(vNormal);
  vec3 v = normalize(cameraPosition - vWorld);
  if (dot(n, v) < 0.0) n = -n;
  vec3 top = normalize(vec3(-0.3, -0.5, 1.0));
  float lit = 0.45 + 0.42 * max(dot(n, v), 0.0) + 0.25 * max(dot(n, top), 0.0);
  float spec = pow(max(dot(reflect(-top, n), v), 0.0), 24.0) * 0.12;
  gl_FragColor = vec4(vColor * lit + spec, 1.0);
}`;

function hexToRgb(hex) {
  const c = new THREE.Color();
  try { c.set(hex); } catch (e) { c.set('#cccccc'); }
  return [Math.round(c.r * 255), Math.round(c.g * 255), Math.round(c.b * 255)];
}

// ---------- The card ----------
class BambuLayerCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._live = true;
    this._shownLayer = 0;
    this._data = null;
    this._fileKey = '';
    this._colorMode = 'feature';
    this._raf = 0;
  }

  static getStubConfig(hass) {
    const id = Object.keys(hass?.states || {}).find((e) => e.startsWith('sensor.') && e.endsWith('_current_layer'));
    return { printer: id ? id.slice(7, -14) : 'my_printer' };
  }

  setConfig(config) {
    if (!config || (!config.printer && !config.entities)) throw new Error(t(this._tl(), 'cfg.printer'));
    this._config = { height: 420, color_mode: 'feature', dim_below: 0.8, ...config };
    this._colorMode = this._config.color_mode === 'filament' ? 'filament' : 'feature';
    const p = this._config.printer;
    const e = this._config.entities || {};
    this._ent = {
      layer: e.current_layer || `sensor.${p}_current_layer`,
      total: e.total_layers || `sensor.${p}_total_layer_count`,
      file: e.gcode_file || `sensor.${p}_gcode_file_downloaded`,
      serial: e.serial || `sensor.${p}_serial_number`,
      status: e.print_status || `sensor.${p}_print_status`,
      progress: e.progress || `sensor.${p}_print_progress`,
      remaining: e.remaining_time || `sensor.${p}_remaining_time`,
      task: e.task_name || `sensor.${p}_task_name`,
      cover: e.cover_image || `image.${p}_cover_image`,
    };
    this._renderShell();
  }

  getCardSize() { return Math.ceil((this._config?.height || 420) / 50) + 1; }

  getGridOptions() { return { columns: 12, rows: 8, min_rows: 5, min_columns: 6 }; }

  // Text language: the card's `language:` option, else the Home Assistant language.
  _tl() { return this._config?.language || this._hass; }

  set hass(hass) {
    this._hass = hass;
    if (!this._config) return;
    if (this._lang !== lang(this._tl())) { this._applyI18n(); this._snap = ''; }
    const st = (id) => hass.states[id]?.state;
    const file = st(this._ent.file);
    const serial = this._config.serial || st(this._ent.serial);
    const layer = parseInt(st(this._ent.layer), 10) || 0;
    const status = st(this._ent.status) || 'unknown';
    const snap = [file, serial, layer, status, st(this._ent.progress), st(this._ent.remaining), st(this._ent.task),
      hass.states[this._ent.cover]?.attributes?.entity_picture].join('|');
    if (snap === this._snap) return;
    this._snap = snap;
    this._state = { file, serial, layer, status };
    this._updateInfo();

    if (!BAD.has(file || '') && serial && !BAD.has(serial)) {
      const key = `${serial}/${file}`;
      if (key !== this._fileKey) {
        this._fileKey = key;
        this._loadFile(serial, file);
      }
    } else if (this._fileKey) {
      this._fileKey = '';
      this._data = null;
      this._clearMesh();
    }
    if (!this._data) this._showNoFile();
    this._applyLayer();
  }

  connectedCallback() {
    clearTimeout(this._disposeTimer);
    if (!this._config) return;
    if (!this._renderer) this._initThree();
    else {
      // HA re-attaches cards when switching views: keep the GL context, just resume.
      this._ro?.observe(this._el.wrap);
      this._resize();
    }
  }

  disconnectedCallback() {
    this._ro?.disconnect();
    clearTimeout(this._disposeTimer);
    // Free the GPU only if the card stays detached (view really closed).
    this._disposeTimer = setTimeout(() => this._disposeThree(), 60000);
  }

  // ----- DOM -----
  _renderShell() {
    const h = this._config.height;
    this._infoOpen = this._loadPref('info', false);
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; height: 100%; }
        ha-card { height: 100%; overflow: hidden; display: flex; flex-direction: column; }
        .head { display: flex; align-items: center; gap: 8px; padding: 10px 10px 6px 14px; min-height: 36px; }
        .ttl { flex: 1; min-width: 0; display: flex; align-items: baseline; gap: 10px; }
        .title { font-weight: 500; font-size: 15px; color: var(--primary-text-color); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; flex: 0 1 auto; }
        .lyr { font-size: 13px; color: var(--secondary-text-color); white-space: nowrap; font-variant-numeric: tabular-nums; }
        .lyr b { color: var(--primary-text-color); font-weight: 600; }
        .btns { display: flex; align-items: center; gap: 2px; flex: none; }
        .ib { border: none; background: none; color: var(--secondary-text-color); cursor: pointer; padding: 6px; border-radius: 50%; line-height: 0; }
        .ib:hover { background: color-mix(in srgb, var(--primary-text-color) 8%, transparent); }
        .ib.on { color: var(--primary-color); }
        .ib ha-icon { --mdc-icon-size: 20px; }
        .live { border: 1px solid var(--divider-color, #8885); background: none; color: var(--secondary-text-color); border-radius: 12px;
          padding: 3px 9px 3px 7px; font: inherit; font-size: 11px; font-weight: 600; letter-spacing: .06em; cursor: pointer; display: inline-flex; align-items: center; gap: 5px; margin-right: 4px; }
        .live .dot { width: 7px; height: 7px; border-radius: 50%; background: currentColor; opacity: .6; }
        .live.on { color: #fff; background: var(--error-color, #db4437); border-color: transparent; }
        .live.on .dot { background: #fff; opacity: 1; animation: pulse 1.6s infinite; }
        @keyframes pulse { 50% { opacity: .35; } }
        .wrap { position: relative; flex: 1; min-height: ${Math.max(160, h - 84)}px; }
        :host([grid]) .wrap { min-height: 0; }
        canvas { position: absolute; inset: 0; width: 100%; height: 100%; display: block; touch-action: none; outline: none; }
        .foot { display: flex; align-items: center; gap: 10px; padding: 4px 14px 10px; }
        input[type=range] { flex: 1; accent-color: var(--primary-color); margin: 0; }
        .lnum { font-size: 12px; color: var(--secondary-text-color); font-variant-numeric: tabular-nums; min-width: 64px; text-align: right; }
        .msg { position: absolute; inset: 8px 16px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: 10px; color: var(--secondary-text-color); font-size: 14px; pointer-events: none; }
        .msg img { max-width: 70%; max-height: 60%; object-fit: contain; border-radius: 8px; }
        .msg .hint { font-size: 12px; opacity: .85; max-width: 420px; }
        .panel { position: absolute; top: 6px; right: 8px; width: 210px; max-width: calc(100% - 16px); max-height: calc(100% - 12px); overflow: auto;
          box-sizing: border-box; padding: 8px 10px; border-radius: 10px; font-size: 12px; color: var(--primary-text-color);
          background: color-mix(in srgb, var(--card-background-color, #1c1c1c) 88%, transparent); backdrop-filter: blur(6px);
          border: 1px solid color-mix(in srgb, var(--primary-text-color) 10%, transparent); }
        .ph { display: flex; justify-content: space-between; align-items: center; font-weight: 600; font-size: 12.5px; margin-bottom: 6px; cursor: pointer; }
        .ph ha-icon { --mdc-icon-size: 16px; color: var(--secondary-text-color); }
        .row { display: flex; justify-content: space-between; gap: 8px; margin: 2px 0; color: var(--secondary-text-color); font-variant-numeric: tabular-nums; }
        .row b { color: var(--primary-text-color); font-weight: 500; }
        .zbar { height: 5px; border-radius: 3px; margin: 5px 0 8px; background: color-mix(in srgb, var(--primary-text-color) 12%, transparent); overflow: hidden; }
        .zbar div { height: 100%; background: var(--primary-color); border-radius: 3px; }
        .sec { margin: 8px 0 3px; color: var(--secondary-text-color); font-size: 11px; text-transform: uppercase; letter-spacing: .05em; }
        .li { display: flex; align-items: center; gap: 6px; margin: 3px 0; white-space: nowrap; }
        .li .n { flex: 1; overflow: hidden; text-overflow: ellipsis; }
        .li .pct { color: var(--secondary-text-color); font-variant-numeric: tabular-nums; }
        .li.dim { opacity: .45; }
        .sw { width: 10px; height: 10px; border-radius: 2px; flex: none; }
        .hidden { display: none !important; }
      </style>
      <ha-card>
        <div class="head">
          <div class="ttl"><span class="title" id="title"></span><span class="lyr" id="big"></span></div>
          <div class="btns">
            <button class="live on" id="live"><span class="dot"></span>LIVE</button>
            <button class="ib" id="info"><ha-icon icon="mdi:information-outline"></ha-icon></button>
            <button class="ib" id="mode"><ha-icon icon="mdi:palette-outline"></ha-icon></button>
            <button class="ib" id="reset"><ha-icon icon="mdi:fit-to-screen-outline"></ha-icon></button>
          </div>
        </div>
        <div class="wrap">
          <canvas tabindex="0"></canvas>
          <div class="msg hidden" id="msg"></div>
          <div class="panel hidden" id="panel"></div>
        </div>
        <div class="foot">
          <input type="range" id="slider" min="0" max="1" value="0" step="1" disabled aria-label="Layer">
          <span class="lnum" id="lnum"></span>
        </div>
      </ha-card>`;
    const $ = (id) => this.shadowRoot.getElementById(id);
    this._el = {
      canvas: this.shadowRoot.querySelector('canvas'), wrap: this.shadowRoot.querySelector('.wrap'),
      title: $('title'), big: $('big'), live: $('live'), info: $('info'), mode: $('mode'), reset: $('reset'),
      msg: $('msg'), slider: $('slider'), lnum: $('lnum'), panel: $('panel'),
    };
    const modeTitle = () => t(this._tl(), this._colorMode === 'feature' ? 'mode.feature' : 'mode.filament');
    this._applyI18n();
    this._el.live.addEventListener('click', () => { this._live = !this._live; this._applyLayer(); });
    this._el.info.addEventListener('click', () => this._toggleInfo());
    this._el.panel.addEventListener('click', (ev) => { if (ev.composedPath().some((el) => el.classList?.contains('ph'))) this._toggleInfo(); });
    this._el.mode.addEventListener('click', () => {
      this._colorMode = this._colorMode === 'feature' ? 'filament' : 'feature';
      this._el.mode.title = modeTitle();
      this._applyColors();
    });
    this._modeTitle = modeTitle;
    this._el.reset.addEventListener('click', () => this._fitCamera());
    this._el.slider.addEventListener('input', () => {
      this._live = false;
      this._applyLayer(+this._el.slider.value);
    });
    this._el.title.textContent = this._config.title || '';
    this._syncInfoUi();
    if (this.isConnected) this._initThree();
  }

  // Button tooltips in the HA language (called again when hass arrives or its language changes).
  _applyI18n() {
    if (!this._el) return;
    const h = this._hass;
    this._lang = lang(this._tl());
    this._el.live.title = t(this._tl(), 'live.title');
    this._el.info.title = t(this._tl(), 'info.title');
    this._el.reset.title = t(this._tl(), 'reset.title');
    this._el.mode.title = t(this._tl(), this._colorMode === 'feature' ? 'mode.feature' : 'mode.filament');
  }

  _loadPref(key, def) {
    try {
      const v = localStorage.getItem(`bambu-layer-card:${this._config.printer}:${key}`);
      return v === null ? def : v === '1';
    } catch (e) { return def; }
  }

  _savePref(key, val) {
    try { localStorage.setItem(`bambu-layer-card:${this._config.printer}:${key}`, val ? '1' : '0'); } catch (e) { /* ignore */ }
  }

  _toggleInfo() {
    this._infoOpen = !this._infoOpen;
    this._savePref('info', this._infoOpen);
    this._syncInfoUi();
  }

  _syncInfoUi() {
    if (!this._el) return;
    this._el.info.classList.toggle('on', this._infoOpen);
    this._el.panel.classList.toggle('hidden', !this._infoOpen || !this._data);
    if (this._infoOpen) this._updateLayerInfo();
  }

  // Collapsible panel: where the shown layer is (Z, height share) and what it is made of.
  _updateLayerInfo() {
    const d = this._data, el = this._el;
    if (!el || !this._infoOpen) return;
    if (!d) { el.panel.classList.add('hidden'); return; }
    el.panel.classList.remove('hidden');
    const L = this._shownLayer;
    const ls = d.layerStart;
    const total = d.layers;
    let rows = `<div class="ph"><span>Layer ${L} / ${total}</span><ha-icon icon="mdi:chevron-up"></ha-icon></div>`;
    if (L >= 1 && ls[L + 1] > ls[L]) {
      const a = ls[L], b = ls[L + 1];
      const z = d.p0[a * 3 + 2], lh = d.size[a * 2 + 1];
      const zMax = d.bounds ? d.bounds.max[2] : z;
      const byKey = new Map();
      let sum = 0;
      for (let i = a; i < b; i++) {
        const dx = d.p1[i * 3] - d.p0[i * 3], dy = d.p1[i * 3 + 1] - d.p0[i * 3 + 1];
        const len = Math.hypot(dx, dy);
        const key = this._colorMode === 'feature' ? d.feature[i] : d.tool[i];
        byKey.set(key, (byKey.get(key) || 0) + len);
        sum += len;
      }
      const h = this._hass;
      rows += `<div class="row"><span>${t(this._tl(), 'info.z')}</span><b>${z.toFixed(2)} mm</b></div>
        <div class="row"><span>${t(this._tl(), 'info.lh')}</span><b>${lh.toFixed(2)} mm</b></div>
        <div class="row"><span>${t(this._tl(), 'info.len')}</span><b>${sum >= 1000 ? `${(sum / 1000).toFixed(2)} m` : `${Math.round(sum)} mm`}</b></div>
        <div class="row"><span>${t(this._tl(), 'info.share')}</span><b>${zMax ? Math.round((100 * z) / zMax) : 0}%</b></div>
        <div class="zbar"><div style="width:${zMax ? Math.min(100, (100 * z) / zMax) : 0}%"></div></div>
        <div class="sec">${t(this._tl(), this._colorMode === 'feature' ? 'info.types' : 'info.fils')}</div>`;
      const entries = [...byKey.entries()].sort((x, y) => y[1] - x[1]);
      for (const [k, len] of entries) {
        const name = this._colorMode === 'feature' ? FEATURES[k] : t(this._tl(), 'info.fil', { n: k + 1 });
        const col = this._colorMode === 'feature' ? (FEATURE_COLORS[name] || '#ccc') : (d.meta.filamentColors[k] || '#ccc');
        rows += `<div class="li"><span class="sw" style="background:${col}"></span><span class="n">${name}</span><span class="pct">${Math.round((100 * len) / sum)}%</span></div>`;
      }
      // the rest of the legend (types present elsewhere in the print), dimmed
      if (this._colorMode === 'feature') {
        const others = [...new Set(d.feature)].filter((k) => !byKey.has(k)).sort((x, y) => x - y);
        if (others.length) {
          rows += `<div class="sec">${t(this._tl(), 'info.rest')}</div>`;
          for (const k of others) {
            const n = FEATURES[k];
            rows += `<div class="li dim"><span class="sw" style="background:${FEATURE_COLORS[n] || '#ccc'}"></span><span class="n">${n}</span></div>`;
          }
        }
      }
    } else {
      rows += `<div class="row"><span>${t(this._tl(), 'info.notyet')}</span></div>`;
    }
    el.panel.innerHTML = rows;
  }

  set layout(v) { this._layout = v; if (v === 'grid') this.setAttribute('grid', ''); else this.removeAttribute('grid'); }
  get layout() { return this._layout; }

  _updateInfo() {
    const hass = this._hass, st = (id) => hass.states[id];
    const s = this._state;
    const task = st(this._ent.task)?.state;
    if (!this._config.title) {
      const dev = st(this._ent.status)?.attributes?.friendly_name || '';
      this._el.title.textContent = dev.replace(/\s*Print status$/i, '') || this._config.printer;
    }
    const parts = [statusText(this._tl(), s.status)];
    if (task && !BAD.has(task)) parts.push(task);
    this._el.title.title = parts.join(' · ');
    this._updateHeadLayer();
  }

  // Header: the layer being shown (and the printer's layer when you scrub away from it).
  _updateHeadLayer() {
    const d = this._data, s = this._state || {};
    const total = d?.layers || parseInt(this._hass?.states[this._ent.total]?.state, 10) || 0;
    if (!total) { this._el.big.textContent = ''; return; }
    const L = d ? this._shownLayer : s.layer;
    let html = `Layer <b>${L}</b> / ${total}`;
    if (d && L >= 1 && d.layerStart[L + 1] > d.layerStart[L]) html += ` · Z ${d.p0[d.layerStart[L] * 3 + 2].toFixed(2)} mm`;
    if (d && !this._live && s.layer && s.layer !== L) html += ` · ${t(this._tl(), 'head.printer', { n: s.layer })}`;
    this._el.big.innerHTML = html;
  }

  _showMsg(html) {
    this._el.msg.innerHTML = html;
    this._el.msg.classList.toggle('hidden', !html);
  }

  _showNoFile() {
    const hass = this._hass;
    const pic = hass.states[this._ent.cover]?.attributes?.entity_picture;
    const s = this._state || {};
    if (this._loading) return;
    let html = '';
    if (s.status === 'running' || s.status === 'pause' || s.status === 'prepare') {
      html = `<div>${t(this._tl(), 'nofile.print')}</div><div class="hint">${t(this._tl(), 'nofile.hint')}</div>`;
    } else {
      html = `<div>${t(this._tl(), 'nofile.idle')}</div>`;
    }
    if (pic) html = `<img src="${pic}" alt="">` + html;
    this._showMsg(html);
    this._el.slider.disabled = true;
    this._el.lnum.textContent = '';
    this._el.panel.classList.add('hidden');
  }

  async _loadFile(serial, file) {
    const key = `${serial}/${file}`;
    this._loading = true;
    this._data = null;
    this._clearMesh();
    this._showMsg(`<div>${t(this._tl(), 'load')}</div>`);
    try {
      const data = await loadGcode(this._hass, serial, file, (got, total) => {
        if (this._fileKey !== key) return;
        if (got < 0) this._showMsg(`<div>${t(this._tl(), 'parse', { mb: (total / 1e6).toFixed(1) })}</div>`);
        else this._showMsg(`<div>${t(this._tl(), 'load')} ${(got / 1e6).toFixed(1)}${total ? ` / ${(total / 1e6).toFixed(1)}` : ''} MB</div>`);
      });
      if (this._fileKey !== key) return;
      this._loading = false;
      this._data = data;
      this._showMsg('');
      this._buildMesh();
      this._fitCamera();
      this._applyLayer();
      this._updateInfo();
      this._syncInfoUi();
    } catch (e) {
      if (this._fileKey !== key) return;
      this._loading = false;
      this._showMsg(`<div>${t(this._tl(), 'error', { e: String(e.message || e).replace(/</g, '&lt;') })}</div>`);
    }
  }

  // ----- three.js -----
  _initThree() {
    if (this._renderer || !this._el) return;
    let renderer;
    for (let attempt = 0; attempt < 2 && !renderer; attempt++) {
      try {
        renderer = new THREE.WebGLRenderer({ canvas: this._el.canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
      } catch (e) {
        console.warn('bambu-layer-card: WebGL init failed', e);
        this._freshCanvas();
      }
    }
    if (!renderer) {
      this._showMsg(`<div>${t(this._tl(), 'webgl')}</div>`);
      return;
    }
    const canvas = this._el.canvas;
    canvas.addEventListener('webglcontextlost', (ev) => { ev.preventDefault(); });
    canvas.addEventListener('webglcontextrestored', () => this._requestRender());
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    this._renderer = renderer;
    const scene = new THREE.Scene();
    this._scene = scene;
    const camera = new THREE.PerspectiveCamera(35, 1, 0.5, 5000);
    camera.up.set(0, 0, 1);
    this._camera = camera;
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = false;
    controls.screenSpacePanning = true;
    controls.addEventListener('change', () => this._requestRender());
    this._controls = controls;
    this._material = new THREE.ShaderMaterial({
      vertexShader: VERT, fragmentShader: FRAG, side: THREE.DoubleSide,
      uniforms: { uHiStart: { value: 0 }, uDim: { value: this._config.dim_below } },
    });
    this._ro = new ResizeObserver(() => this._resize());
    this._ro.observe(this._el.wrap);
    this._resize();
    if (this._data) { this._buildMesh(); this._fitCamera(); this._applyLayer(); }
  }

  _disposeThree() {
    if (!this._renderer) return;
    cancelAnimationFrame(this._raf); this._raf = 0;
    this._ro?.disconnect();
    this._controls?.dispose();
    this._clearMesh();
    this._clearBed();
    this._material?.dispose();
    this._renderer.dispose();
    this._renderer.forceContextLoss?.();
    this._renderer = this._scene = this._camera = this._controls = this._material = null;
    // A canvas whose context was lost can never get a new one: swap in a fresh canvas.
    this._freshCanvas();
  }

  _freshCanvas() {
    const old = this._el?.canvas;
    if (!old) return;
    const c = document.createElement('canvas');
    c.tabIndex = 0;
    old.replaceWith(c);
    this._el.canvas = c;
  }

  _resize() {
    if (!this._renderer) return;
    const r = this._el.wrap.getBoundingClientRect();
    const w = Math.max(1, Math.round(r.width)), h = Math.max(1, Math.round(r.height));
    this._renderer.setSize(w, h, false);
    this._camera.aspect = w / h;
    this._camera.updateProjectionMatrix();
    this._requestRender();
  }

  _requestRender() {
    if (!this._renderer || this._raf) return;
    this._raf = requestAnimationFrame(() => {
      this._raf = 0;
      if (this._renderer) this._renderer.render(this._scene, this._camera);
    });
  }

  _clearMesh() {
    if (this._mesh) {
      this._scene?.remove(this._mesh);
      this._mesh.geometry.dispose();
      this._mesh = null;
    }
    this._requestRender();
  }

  _clearBed() {
    if (this._bed) {
      this._scene?.remove(this._bed);
      this._bed.traverse((o) => { o.geometry?.dispose(); o.material?.dispose(); });
      this._bed = null;
    }
  }

  _buildBed() {
    this._clearBed();
    const d = this._data;
    let area = d?.meta?.printableArea;
    if (!area) area = [[0, 0], [256, 0], [256, 256], [0, 256]];
    const xs = area.map((p) => p[0]), ys = area.map((p) => p[1]);
    const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
    const g = new THREE.Group();
    const dark = this._isDark();
    const plate = new THREE.Mesh(
      new THREE.PlaneGeometry(x1 - x0, y1 - y0),
      new THREE.MeshBasicMaterial({ color: dark ? 0x2a2d31 : 0xd9dce0, transparent: true, opacity: 0.9, depthWrite: false }),
    );
    plate.position.set((x0 + x1) / 2, (y0 + y1) / 2, -0.05);
    g.add(plate);
    const pts = [];
    for (let x = Math.ceil(x0 / 10) * 10; x <= x1; x += 10) pts.push(x, y0, 0, x, y1, 0);
    for (let y = Math.ceil(y0 / 10) * 10; y <= y1; y += 10) pts.push(x0, y, 0, x1, y, 0);
    const grid = new THREE.LineSegments(
      new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(pts, 3)),
      new THREE.LineBasicMaterial({ color: dark ? 0x44484e : 0xb8bcc2, transparent: true, opacity: 0.8 }),
    );
    g.add(grid);
    const border = new THREE.LineLoop(
      new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(area.flatMap((p) => [p[0], p[1], 0]), 3)),
      new THREE.LineBasicMaterial({ color: dark ? 0x7a7f87 : 0x808690 }),
    );
    g.add(border);
    this._bed = g;
    this._scene.add(g);
  }

  _isDark() {
    if (this._hass?.themes?.darkMode !== undefined) return !!this._hass.themes.darkMode;
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  }

  _buildMesh() {
    if (!this._renderer || !this._data) return;
    this._clearMesh();
    this._buildBed();
    const d = this._data;
    const g = buildPrism();
    g.setAttribute('iStart', new THREE.InstancedBufferAttribute(d.p0, 3));
    g.setAttribute('iEnd', new THREE.InstancedBufferAttribute(d.p1, 3));
    g.setAttribute('iSize', new THREE.InstancedBufferAttribute(d.size, 2));
    g.setAttribute('iColor', new THREE.InstancedBufferAttribute(new Uint8Array(d.segments * 3), 3, true));
    g.instanceCount = 0;
    const mesh = new THREE.Mesh(g, this._material);
    mesh.frustumCulled = false;
    this._mesh = mesh;
    this._scene.add(mesh);
    this._applyColors();
    const s = this._el.slider;
    s.min = '1'; s.max = String(Math.max(1, d.layers)); s.disabled = d.layers < 1;
  }

  _applyColors() {
    if (!this._mesh || !this._data) return;
    const d = this._data;
    const attr = this._mesh.geometry.getAttribute('iColor');
    const arr = attr.array;
    if (this._colorMode === 'feature') {
      const lut = FEATURES.map((n) => hexToRgb(FEATURE_COLORS[n] || '#cccccc'));
      for (let i = 0, n = d.segments; i < n; i++) { const c = lut[d.feature[i]] || lut[0]; arr[i * 3] = c[0]; arr[i * 3 + 1] = c[1]; arr[i * 3 + 2] = c[2]; }
    } else {
      const cols = d.meta.filamentColors.length ? d.meta.filamentColors : ['#cccccc'];
      const lut = cols.map((c) => {
        const rgb = hexToRgb(c);
        // keep very dark filaments visible
        const lum = 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
        return lum < 40 ? rgb.map((v) => v + 45) : rgb;
      });
      for (let i = 0, n = d.segments; i < n; i++) { const c = lut[d.tool[i]] || lut[0]; arr[i * 3] = c[0]; arr[i * 3 + 1] = c[1]; arr[i * 3 + 2] = c[2]; }
    }
    attr.needsUpdate = true;
    this._updateLayerInfo();
    this._requestRender();
  }

  _targetLayer() {
    const d = this._data, s = this._state || {};
    if (!d) return 0;
    if (s.status === 'finish') return d.layers;
    if (s.status === 'idle' && !s.layer) return d.layers;
    return Math.min(Math.max(0, s.layer || 0), d.layers);
  }

  _applyLayer(manual) {
    if (!this._el) return;
    this._el.live.classList.toggle('on', this._live);
    const d = this._data;
    if (!d) return;
    let L;
    if (manual !== undefined) L = manual;
    else if (this._live) L = this._targetLayer();
    else L = this._shownLayer;
    L = Math.min(Math.max(0, L), d.layers);
    const changed = L !== this._shownLayer;
    this._shownLayer = L;
    this._el.slider.value = String(Math.max(1, L));
    this._el.lnum.textContent = `${L} / ${d.layers}`;
    this._updateHeadLayer();
    if (changed || !this._el.panel.innerHTML) this._updateLayerInfo();
    if (this._mesh) {
      const end = d.layerStart[Math.min(L + 1, d.layerStart.length - 1)];
      const hiStart = L >= 1 ? d.layerStart[L] : 0;
      this._mesh.geometry.instanceCount = L >= 1 ? end : 0;
      this._material.uniforms.uHiStart.value = hiStart;
      this._requestRender();
    }
  }

  // Frame the whole object: bounding sphere fitted to the smaller of the two fields of view.
  _fitCamera() {
    if (!this._camera || !this._data?.bounds) return;
    const b = this._data.bounds;
    const cx = (b.min[0] + b.max[0]) / 2, cy = (b.min[1] + b.max[1]) / 2;
    const hz = Math.max(b.max[2], 1);
    const r = Math.max(Math.hypot(b.max[0] - b.min[0], b.max[1] - b.min[1], hz) / 2, 15);
    const vFov = THREE.MathUtils.degToRad(this._camera.fov);
    const hFov = 2 * Math.atan(Math.tan(vFov / 2) * Math.max(0.2, this._camera.aspect || 1));
    const dist = (r / Math.sin(Math.min(vFov, hFov) / 2)) * 1.08;
    const target = new THREE.Vector3(cx, cy, hz / 2);
    const dir = new THREE.Vector3(0.35, -0.85, 0.6).normalize();
    this._camera.position.copy(target).addScaledVector(dir, dist);
    this._camera.near = Math.max(0.5, dist / 100);
    this._camera.far = dist * 20;
    this._camera.updateProjectionMatrix();
    this._controls.target.copy(target);
    this._controls.update();
    this._requestRender();
  }
}

if (!customElements.get('bambu-layer-card')) {
  customElements.define('bambu-layer-card', BambuLayerCard);
  window.customCards = window.customCards || [];
  window.customCards.push({
    type: 'bambu-layer-card',
    name: 'Bambu live layer view',
    description: t(undefined, 'card.layer.desc'),
    preview: false,
  });
  console.info(`%c BAMBU-LAYER-CARD %c v${VERSION} `, 'background:#00ae42;color:#fff', 'background:#333;color:#fff');
}
