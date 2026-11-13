// Bambu Studio G-code parser for the live layer card.
// Self-contained (no imports) so it can run inside a Web Worker or in Node for tests.
//
// Output: every extrusion move as one segment (start xyz, end xyz, width, height,
// feature id, filament id), sorted by print order, plus layerStart[] so that
// layer L (the value of `M73 L<n>`, i.e. the printer's "current layer") is
// segments [layerStart[L], layerStart[L+1]).

export const FEATURES = [
  'Other', 'Outer wall', 'Inner wall', 'Overhang wall', 'Sparse infill',
  'Internal solid infill', 'Top surface', 'Bottom surface', 'Bridge', 'Gap infill',
  'Skirt', 'Brim', 'Support', 'Support interface', 'Support transition',
  'Prime tower', 'Custom', 'Ironing', 'Floating vertical shell',
];
const FEATURE_INDEX = new Map(FEATURES.map((n, i) => [n.toLowerCase(), i]));
const featureId = (name) => {
  const k = name.trim().toLowerCase();
  if (FEATURE_INDEX.has(k)) return FEATURE_INDEX.get(k);
  if (k.includes('tower')) return FEATURE_INDEX.get('prime tower');
  if (k.includes('support')) return FEATURE_INDEX.get('support');
  if (k.includes('bridge')) return FEATURE_INDEX.get('bridge');
  if (k.includes('ironing')) return FEATURE_INDEX.get('ironing');
  return 0;
};

class F32 {
  constructor(n) { this.a = new Float32Array(n); this.n = 0; }
  push3(x, y, z) {
    if (this.n + 3 > this.a.length) this.grow();
    const a = this.a; a[this.n++] = x; a[this.n++] = y; a[this.n++] = z;
  }
  push2(x, y) {
    if (this.n + 2 > this.a.length) this.grow();
    const a = this.a; a[this.n++] = x; a[this.n++] = y;
  }
  grow() { const b = new Float32Array(this.a.length * 2); b.set(this.a); this.a = b; }
  done() { return this.a.slice(0, this.n); }
}
class U8 {
  constructor(n) { this.a = new Uint8Array(n); this.n = 0; }
  push(v) {
    if (this.n >= this.a.length) { const b = new Uint8Array(this.a.length * 2); b.set(this.a); this.a = b; }
    this.a[this.n++] = v;
  }
  done() { return this.a.slice(0, this.n); }
}

// Parse "X1.5 Y-2 E.3 F1200" style words after the command into the out object.
function parseWords(line, from, out) {
  out.X = out.Y = out.Z = out.E = out.I = out.J = undefined;
  const n = line.length;
  let i = from;
  while (i < n) {
    const c = line.charCodeAt(i);
    if (c === 59) break; // ';' comment
    if (c === 32 || c === 9) { i++; continue; }
    const letter = line[i];
    i++;
    let j = i;
    while (j < n) {
      const d = line.charCodeAt(j);
      if (d === 32 || d === 9 || d === 59) break;
      j++;
    }
    if (j > i) {
      const v = +line.slice(i, j);
      if (!Number.isNaN(v)) {
        switch (letter) {
          case 'X': case 'x': out.X = v; break;
          case 'Y': case 'y': out.Y = v; break;
          case 'Z': case 'z': out.Z = v; break;
          case 'E': case 'e': out.E = v; break;
          case 'I': case 'i': out.I = v; break;
          case 'J': case 'j': out.J = v; break;
          default: break;
        }
      }
    }
    i = j;
  }
  return out;
}

export function parseGcode(text, opts = {}) {
  const arcTol = opts.arcTolerance ?? 0.05; // mm chord deviation
  const est = Math.max(1024, Math.floor(text.length / 40));
  const P0 = new F32(est * 3), P1 = new F32(est * 3), SZ = new F32(est * 2);
  const FT = new U8(est), TL = new U8(est);
  const layerStart = [0];

  const meta = {
    filamentColors: [], totalLayers: 0, maxZ: 0, printableArea: null,
    printableHeight: 0, printerModel: '', nozzle: 0.4, slicer: '',
  };

  let x = 0, y = 0, z = 0;
  let absXYZ = true, absE = false;
  let layer = 0, feature = 0, tool = 0, pendingTool = -1;
  let width = 0.42, height = 0.2;
  let nSeg = 0;
  const w = {};
  let bminX = Infinity, bminY = Infinity, bminZ = Infinity, bmaxX = -Infinity, bmaxY = -Infinity, bmaxZ = -Infinity;

  const addSeg = (ax, ay, az, bx, by, bz) => {
    P0.push3(ax, ay, az); P1.push3(bx, by, bz); SZ.push2(width, height);
    FT.push(feature); TL.push(tool); nSeg++;
    if (bx < bminX) bminX = bx; if (bx > bmaxX) bmaxX = bx;
    if (by < bminY) bminY = by; if (by > bmaxY) bmaxY = by;
    if (bz < bminZ) bminZ = bz; if (bz > bmaxZ) bmaxZ = bz;
  };

  let pos = 0;
  const len = text.length;
  while (pos < len) {
    let end = text.indexOf('\n', pos);
    if (end < 0) end = len;
    let line = text.slice(pos, end);
    pos = end + 1;
    if (line.length === 0) continue;
    if (line.charCodeAt(line.length - 1) === 13) line = line.slice(0, -1);
    const c0 = line.charCodeAt(0);

    if (c0 === 59) { // ';' comment
      if (line.startsWith('; FEATURE: ')) feature = featureId(line.slice(11));
      else if (line.startsWith('; LINE_WIDTH: ')) { const v = +line.slice(14); if (v > 0) width = v; }
      else if (line.startsWith('; LAYER_HEIGHT: ')) { const v = +line.slice(16); if (v > 0) height = v; }
      else if (line.startsWith('; filament_colour = ')) meta.filamentColors = line.slice(20).split(';').map((s) => s.trim());
      else if (line.startsWith('; total layer number: ')) meta.totalLayers = parseInt(line.slice(22), 10) || 0;
      else if (line.startsWith('; max_z_height: ')) meta.maxZ = +line.slice(16) || 0;
      else if (line.startsWith('; printable_area = ')) {
        const pts = line.slice(19).split(',').map((p) => p.split('x').map(Number));
        if (pts.length >= 3 && pts.every((p) => p.length === 2 && p.every(Number.isFinite))) meta.printableArea = pts;
      }
      else if (line.startsWith('; printable_height = ')) meta.printableHeight = +line.slice(21) || 0;
      else if (line.startsWith('; printer_model = ')) meta.printerModel = line.slice(18).trim();
      else if (line.startsWith('; nozzle_diameter = ')) meta.nozzle = parseFloat(line.slice(20)) || 0.4;
      else if (line.startsWith('; BambuStudio') || line.startsWith('; OrcaSlicer')) meta.slicer = line.slice(2).trim();
      continue;
    }

    if (c0 === 71 || c0 === 103) { // 'G'
      // command number
      let k = 1, num = 0;
      while (k < line.length) { const d = line.charCodeAt(k); if (d < 48 || d > 57) break; num = num * 10 + (d - 48); k++; }
      if (k < line.length && line.charCodeAt(k) === 46) continue; // G29.1 etc.
      if (num === 0 || num === 1) {
        parseWords(line, k, w);
        let nx = x, ny = y, nz = z;
        if (absXYZ) { if (w.X !== undefined) nx = w.X; if (w.Y !== undefined) ny = w.Y; if (w.Z !== undefined) nz = w.Z; }
        else { if (w.X !== undefined) nx += w.X; if (w.Y !== undefined) ny += w.Y; if (w.Z !== undefined) nz += w.Z; }
        const e = w.E === undefined ? 0 : (absE ? 0 : w.E);
        if (layer > 0 && e > 0 && (nx !== x || ny !== y)) addSeg(x, y, nz, nx, ny, nz);
        x = nx; y = ny; z = nz;
      } else if (num === 2 || num === 3) {
        parseWords(line, k, w);
        let nx = x, ny = y, nz = z;
        if (absXYZ) { if (w.X !== undefined) nx = w.X; if (w.Y !== undefined) ny = w.Y; if (w.Z !== undefined) nz = w.Z; }
        else { if (w.X !== undefined) nx += w.X; if (w.Y !== undefined) ny += w.Y; if (w.Z !== undefined) nz += w.Z; }
        const e = w.E === undefined ? 0 : (absE ? 0 : w.E);
        if (layer > 0 && e > 0 && (w.I !== undefined || w.J !== undefined)) {
          const cx = x + (w.I || 0), cy = y + (w.J || 0);
          const r = Math.hypot(x - cx, y - cy);
          const a0 = Math.atan2(y - cy, x - cx);
          const a1 = Math.atan2(ny - cy, nx - cx);
          let sweep = a1 - a0;
          if (num === 2) { if (sweep >= -1e-9) sweep -= 2 * Math.PI; }
          else if (sweep <= 1e-9) sweep += 2 * Math.PI;
          let step = r > arcTol ? 2 * Math.acos(1 - arcTol / r) : Math.PI / 4;
          step = Math.min(step, Math.PI / 8);
          const n = Math.min(128, Math.max(1, Math.ceil(Math.abs(sweep) / step)));
          let px = x, py = y;
          for (let s = 1; s <= n; s++) {
            let qx, qy;
            if (s === n) { qx = nx; qy = ny; }
            else { const a = a0 + (sweep * s) / n; qx = cx + r * Math.cos(a); qy = cy + r * Math.sin(a); }
            addSeg(px, py, nz, qx, qy, nz);
            px = qx; py = qy;
          }
        } else if (layer > 0 && e > 0 && (nx !== x || ny !== y)) {
          addSeg(x, y, nz, nx, ny, nz);
        }
        x = nx; y = ny; z = nz;
      } else if (num === 90) absXYZ = true;
      else if (num === 91) absXYZ = false;
      else if (num === 92) { parseWords(line, k, w); if (w.X !== undefined) x = w.X; if (w.Y !== undefined) y = w.Y; if (w.Z !== undefined) z = w.Z; }
      continue;
    }

    if (c0 === 77 || c0 === 109) { // 'M'
      if (line.startsWith('M73 L')) {
        const L = parseInt(line.slice(5), 10);
        if (L > 0) {
          while (layerStart.length <= L) layerStart.push(nSeg);
          layer = L;
        }
      } else if (line.startsWith('M82')) absE = true;
      else if (line.startsWith('M83')) absE = false;
      else if (line.startsWith('M620 S')) {
        const t = parseInt(line.slice(6), 10);
        if (t >= 0 && t < 64) pendingTool = t;
      }
      continue;
    }

    if (c0 === 84) { // 'T'
      const t = parseInt(line.slice(1), 10);
      if (t >= 0 && t < 64) tool = t;
      else if (pendingTool >= 0 && t !== 255 && t !== 1000) tool = pendingTool;
      continue;
    }
  }
  layerStart.push(nSeg); // sentinel: end of last layer
  const layers = layerStart.length - 2;

  return {
    p0: P0.done(), p1: P1.done(), size: SZ.done(), feature: FT.done(), tool: TL.done(),
    layerStart: Uint32Array.from(layerStart), layers, segments: nSeg,
    bounds: nSeg ? { min: [bminX, bminY, bminZ], max: [bmaxX, bmaxY, bmaxZ] } : null,
    meta,
  };
}
