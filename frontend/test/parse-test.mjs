// Parser tests.
//   npm test                      -> checks the small sample in test/sample-gcode.txt (used by CI)
//   node test/parse-test.mjs FILE -> prints statistics for a real G-code file (speed, layers, features)
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { parseGcode, FEATURES } from '../src/parser.js';

const file = process.argv[2];

if (!file) {
  const text = readFileSync(fileURLToPath(new URL('./sample-gcode.txt', import.meta.url)), 'utf8');
  const r = parseGcode(text);
  const seg = (i) => ({
    a: [...r.p0.slice(i * 3, i * 3 + 3)], b: [...r.p1.slice(i * 3, i * 3 + 3)],
    w: r.size[i * 2], h: r.size[i * 2 + 1], feature: FEATURES[r.feature[i]], tool: r.tool[i],
  });
  const near = (a, b, msg) => assert.ok(Math.abs(a - b) < 1e-4, `${msg}: ${a} != ${b}`);
  const layer = (L) => [...Array(r.layerStart[L + 1] - r.layerStart[L]).keys()].map((k) => seg(r.layerStart[L] + k));

  // header
  assert.equal(r.meta.totalLayers, 3);
  assert.deepEqual(r.meta.filamentColors, ['#FF0000', '#00FF00']);
  assert.equal(r.meta.printerModel, 'Bambu Lab A1');
  assert.equal(r.meta.nozzle, 0.4);
  assert.ok(r.meta.slicer.startsWith('BambuStudio'));
  assert.equal(r.meta.printableArea.length, 4);
  assert.equal(r.meta.printableHeight, 256);
  assert.equal(r.layers, 3);

  // layer 1: start G-code and travel moves are skipped; features and line widths follow the comments
  const l1 = layer(1);
  assert.deepEqual(l1.map((s) => s.feature), ['Outer wall', 'Outer wall', 'Sparse infill']);
  assert.deepEqual(l1.map((s) => +s.w.toFixed(2)), [0.42, 0.42, 0.45]);
  l1.forEach((s) => near(s.a[2], 0.2, 'layer 1 z'));
  assert.deepEqual(l1[0].a.slice(0, 2), [10, 10]);
  assert.deepEqual(l1[0].b.slice(0, 2), [20, 10]);

  // layer 2: tool change, then a G3 arc split into short chords on a circle of radius 10 around (10,20)
  const l2 = layer(2);
  assert.equal(l2[0].tool, 1);
  assert.equal(l2[0].feature, 'Inner wall');
  near(l2[0].a[2], 0.4, 'layer 2 z');
  const arc = l2.slice(1);
  assert.ok(arc.length >= 8, `arc has only ${arc.length} chords`);
  for (const s of arc) near(Math.hypot(s.b[0] - 10, s.b[1] - 20), 10, 'arc radius');
  assert.ok(arc.some((s) => s.b[0] > 19), 'G3 goes counter-clockwise through x=20');
  assert.deepEqual(arc[arc.length - 1].b.slice(0, 2).map((v) => +v.toFixed(4)), [10, 30]);

  // layer 3: the retraction (negative E) is not drawn, the next extrusion is
  const l3 = layer(3);
  assert.equal(l3.length, 1);
  assert.equal(l3[0].feature, 'Top surface');
  near(l3[0].a[2], 0.6, 'layer 3 z');
  near(r.bounds.max[2], 0.6, 'bounds max z');

  console.log(`parser OK: ${r.layers} layers, ${r.segments} segments (${arc.length} arc chords)`);
} else {
  const t0 = performance.now();
  const text = readFileSync(file, 'utf8');
  const t1 = performance.now();
  const r = parseGcode(text);
  const t2 = performance.now();
  console.log({ file: file.split(/[\\/]/).pop(), mb: (text.length / 1e6).toFixed(1), readMs: Math.round(t1 - t0), parseMs: Math.round(t2 - t1), segments: r.segments, layers: r.layers, bounds: r.bounds, meta: r.meta });
  const counts = {}; for (const id of r.feature) counts[FEATURES[id]] = (counts[FEATURES[id]] || 0) + 1; console.log(counts);
  const tools = {}; for (const t of r.tool) tools[t] = (tools[t] || 0) + 1; console.log('tools', tools);
  console.log('GPU MB (36B/inst):', (r.segments * 36 / 1e6).toFixed(1));
}
