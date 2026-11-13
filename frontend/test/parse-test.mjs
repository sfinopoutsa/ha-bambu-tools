import { readFileSync } from 'node:fs';
import { parseGcode, FEATURES } from '../src/parser.js';
const f = process.argv[2];
const t0 = performance.now();
const text = readFileSync(f, 'utf8');
const t1 = performance.now();
const r = parseGcode(text);
const t2 = performance.now();
console.log({ file: f.split(/[\/]/).pop(), mb: (text.length/1e6).toFixed(1), readMs: Math.round(t1-t0), parseMs: Math.round(t2-t1), segments: r.segments, layers: r.layers, bounds: r.bounds, meta: r.meta });
const counts = {}; for (const id of r.feature) counts[FEATURES[id]] = (counts[FEATURES[id]]||0)+1; console.log(counts);
const tools = {}; for (const t of r.tool) tools[t]=(tools[t]||0)+1; console.log('tools', tools);
const ls = r.layerStart; console.log('layer1..3 segs', ls[2]-ls[1], ls[3]-ls[2], ls[4]-ls[3], 'last', ls[r.layers+1]-ls[r.layers], 'empty layers', [...Array(r.layers).keys()].map(i=>i+1).filter(L=>ls[L+1]===ls[L]).slice(0,10));
// z per layer sanity: first seg z of some layers
for (const L of [1,2,3,100,r.layers]) { const i = ls[L]; console.log('L',L,'z',r.p0[i*3+2], 'h', r.size[i*2+1], 'w', r.size[i*2]); }
console.log('GPU MB (36B/inst):', (r.segments*36/1e6).toFixed(1));
