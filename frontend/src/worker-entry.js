// Web Worker: decode + parse the G-code off the main thread.
import { parseGcode } from './parser.js';

self.onmessage = (ev) => {
  const { id, buffer } = ev.data;
  try {
    const text = new TextDecoder('utf-8').decode(buffer);
    const r = parseGcode(text);
    self.postMessage({ id, ok: true, r }, [
      r.p0.buffer, r.p1.buffer, r.size.buffer, r.feature.buffer, r.tool.buffer, r.layerStart.buffer,
    ]);
  } catch (e) {
    self.postMessage({ id, ok: false, error: String((e && e.message) || e) });
  }
};
