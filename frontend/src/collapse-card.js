// bambu-collapse-card: a card whose header opens and closes a group of other cards (tiles, entities, …).
//
//   type: custom:bambu-collapse-card
//   title: Print            # header text
//   icon: mdi:progress-clock
//   key: a1_rocket:print    # remembers open/closed in this browser (default: the title)
//   open: false             # first-time state
//   flat: false             # true = child cards without their own frame
//   summary: [sensor.a1_rocket_print_status, sensor.a1_rocket_print_progress]  # shown next to the title
//   cards: [ { type: tile, entity: … }, { type: tile, entity: …, full: true } ]  # full = whole width
//
// Child cards are created only when the group is opened for the first time.
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

class BambuCollapseCard extends HTMLElement {
  setConfig(config) {
    if (!config || !Array.isArray(config.cards)) throw new Error('bambu-collapse-card: "cards" is required');
    this._config = config;
    this._open = this._loadOpen();
    this._children = null;
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' });
    this._render();
  }

  set hass(hass) {
    this._hass = hass;
    if (this._children) for (const c of this._children) c.hass = hass;
    this._updateSummary();
  }

  getCardSize() { return this._open ? 1 + Math.ceil(this._config.cards.length / 2) : 1; }

  getGridOptions() { return { columns: 'full' }; } // height follows the content

  _key() { return `bambu-tools:open:${this._config.key || this._config.title || ''}`; }

  _loadOpen() {
    try {
      const v = localStorage.getItem(this._key());
      if (v !== null) return v === '1';
    } catch (e) { /* private window */ }
    return !!this._config.open;
  }

  _saveOpen() {
    try { localStorage.setItem(this._key(), this._open ? '1' : '0'); } catch (e) { /* ignore */ }
  }

  _render() {
    const c = this._config;
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; }
        ha-card { overflow: hidden; }
        .head { display: flex; align-items: center; gap: 10px; padding: 12px 16px; cursor: pointer; user-select: none;
          color: var(--primary-text-color); outline: none; }
        .head:focus-visible { background: color-mix(in srgb, var(--primary-color) 12%, transparent); }
        .head ha-icon { --mdc-icon-size: 22px; color: var(--secondary-text-color); flex: none; }
        .title { font-size: 16px; font-weight: 500; flex: none; }
        .sum { flex: 1; min-width: 0; color: var(--secondary-text-color); font-size: 13.5px; white-space: nowrap;
          overflow: hidden; text-overflow: ellipsis; text-align: right; }
        .chev { transition: transform .2s; }
        :host([open]) .chev { transform: rotate(180deg); }
        .body { padding: 0 12px 12px; }
        .body[hidden] { display: none; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(165px, 1fr)); gap: 8px; }
        .grid > .full { grid-column: 1 / -1; }
        :host([flat]) .grid { --ha-card-border-width: 0; --ha-card-box-shadow: none; --ha-card-background: transparent; gap: 0; }
      </style>
      <ha-card>
        <div class="head" role="button" tabindex="0" aria-expanded="${this._open}">
          ${c.icon ? `<ha-icon icon="${esc(c.icon)}"></ha-icon>` : ''}
          <span class="title">${esc(c.title || '')}</span>
          <span class="sum"></span>
          <ha-icon class="chev" icon="mdi:chevron-down"></ha-icon>
        </div>
        <div class="body"${this._open ? '' : ' hidden'}><div class="grid"></div></div>
      </ha-card>`;
    this.toggleAttribute('open', this._open);
    this.toggleAttribute('flat', !!c.flat);
    const head = this.shadowRoot.querySelector('.head');
    head.addEventListener('click', () => this._toggle());
    head.addEventListener('keydown', (ev) => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); this._toggle(); } });
    if (this._open) this._build();
    this._updateSummary();
  }

  _toggle() {
    this._open = !this._open;
    this._saveOpen();
    this.toggleAttribute('open', this._open);
    this.shadowRoot.querySelector('.head').setAttribute('aria-expanded', String(this._open));
    this.shadowRoot.querySelector('.body').hidden = !this._open;
    if (this._open && !this._children) this._build();
    // let a sections view re-measure the card
    this.dispatchEvent(new Event('iron-resize', { bubbles: true, composed: true }));
  }

  async _build() {
    const grid = this.shadowRoot.querySelector('.grid');
    this._children = [];
    const helpers = window.loadCardHelpers ? await window.loadCardHelpers() : null;
    for (const raw of this._config.cards) {
      const { full, grid_options: go, ...cfg } = raw;
      let el;
      if (helpers) el = helpers.createCardElement(cfg);
      else {
        el = document.createElement(cfg.type.startsWith('custom:') ? cfg.type.slice(7) : `hui-${cfg.type}-card`);
        el.setConfig?.(cfg);
      }
      if (full || go?.columns === 'full') el.classList.add('full');
      // a custom card that was not defined yet asks to be rebuilt once it is
      el.addEventListener('ll-rebuild', (ev) => {
        ev.stopPropagation();
        const fresh = helpers ? helpers.createCardElement(cfg) : el;
        fresh.className = el.className;
        fresh.hass = this._hass;
        el.replaceWith(fresh);
        this._children[this._children.indexOf(el)] = fresh;
      }, { once: true });
      if (this._hass) el.hass = this._hass;
      this._children.push(el);
      grid.appendChild(el);
    }
  }

  _updateSummary() {
    const box = this.shadowRoot?.querySelector('.sum');
    const h = this._hass;
    if (!box || !h) return;
    const parts = (this._config.summary || []).map((id) => {
      const s = h.states[id];
      if (!s || ['unknown', 'unavailable', ''].includes(s.state)) return null;
      return h.formatEntityState ? h.formatEntityState(s) : s.state;
    }).filter(Boolean);
    const text = parts.join(' · ');
    if (box.textContent !== text) box.textContent = text;
  }
}

if (!customElements.get('bambu-collapse-card')) {
  customElements.define('bambu-collapse-card', BambuCollapseCard);
  window.customCards = window.customCards || [];
  window.customCards.push({ type: 'bambu-collapse-card', name: 'Bambu collapse card', description: 'A group of cards that opens and closes.' });
}
