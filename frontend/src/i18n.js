// Tiny i18n: Greek when Home Assistant runs in Greek, English otherwise.
const STR = {
  en: {
    'status.running': 'Printing', 'status.prepare': 'Preparing', 'status.slicing': 'Slicing', 'status.pause': 'Paused',
    'status.finish': 'Finished', 'status.failed': 'Failed', 'status.idle': 'Idle', 'status.offline': 'Offline',
    'status.unavailable': 'Unavailable',
    'cfg.printer': 'Set `printer:` (e.g. a1)',
    'gcode.notfound': 'G-code file not found in Home Assistant (HTTP {s})',
    'live.title': 'Follow the printer\'s current layer',
    'info.title': 'Layer info',
    'reset.title': 'Reset view',
    'mode.feature': 'Colour: line type (click for filament colour)',
    'mode.filament': 'Colour: filament (click for line type)',
    'info.z': 'Z height', 'info.lh': 'Layer height', 'info.len': 'Line length', 'info.share': 'Of object height',
    'info.types': 'Line types in this layer', 'info.fils': 'Filaments in this layer', 'info.fil': 'Filament {n}',
    'info.rest': 'Rest of the print', 'info.notyet': 'The first layer has not started yet.',
    'head.printer': 'printer: {n}',
    'nofile.print': 'No G-code for this print.',
    'nofile.hint': 'ha-bambulab downloads the G-code from the printer. H2D/H2S/H2C need a USB drive or SD card and "Store Sent Files on External Storage".',
    'nofile.idle': 'No print with G-code yet.',
    'load': 'Loading G-code…', 'parse': 'Parsing G-code ({mb} MB)…', 'error': 'Error: {e}',
    'webgl': 'WebGL could not start. Reload the page.',
    'card.layer.desc': 'Live 3D G-code view that follows the printer\'s current layer (ha-bambulab).',
    'card.status.name': 'Bambu printer status',
    'card.status.desc': 'Compact card: status, progress, layer, time, temperatures, filament, camera and light buttons (ha-bambulab).',
    't.nozzle': 'Nozzle', 't.bed': 'Bed', 't.chamber': 'Chamber',
    'left': '<b>{t}</b> left', 'ends': 'ends <b>{c}</b>', 'tomorrow': 'tomorrow ', 'h': 'h', 'm': 'min',
    'light': 'Chamber light', 'cam.off': 'Turn the camera off', 'cam.on': 'Turn the camera on',
    'hms': 'HMS messages: {n}', 'perr': 'Print error', 'details': 'tap for details',
    'fil': 'Filament: <b>{n}</b>', 'fil.none': 'No active filament',
    'overview': 'Overview',
  },
  el: {
    'status.running': 'Τυπώνει', 'status.prepare': 'Προετοιμασία', 'status.slicing': 'Slicing', 'status.pause': 'Σε παύση',
    'status.finish': 'Τελείωσε', 'status.failed': 'Απέτυχε', 'status.idle': 'Αδρανής', 'status.offline': 'Εκτός σύνδεσης',
    'status.unavailable': 'Μη διαθέσιμος',
    'cfg.printer': 'Όρισε `printer:` (π.χ. a1)',
    'gcode.notfound': 'Το αρχείο G-code δεν βρέθηκε στο HA (HTTP {s})',
    'live.title': 'Ακολουθεί το layer του εκτυπωτή',
    'info.title': 'Πληροφορίες layer',
    'reset.title': 'Επαναφορά προβολής',
    'mode.feature': 'Χρώμα: τύπος γραμμής (πάτα για χρώμα νήματος)',
    'mode.filament': 'Χρώμα: νήμα (πάτα για τύπο γραμμής)',
    'info.z': 'Ύψος Z', 'info.lh': 'Πάχος layer', 'info.len': 'Μήκος γραμμών', 'info.share': 'Ύψος αντικειμένου',
    'info.types': 'Τύποι γραμμής σε αυτό το layer', 'info.fils': 'Νήματα σε αυτό το layer', 'info.fil': 'Νήμα {n}',
    'info.rest': 'Υπόλοιπη εκτύπωση', 'info.notyet': 'Δεν έχει ξεκινήσει ακόμα το 1ο layer.',
    'head.printer': 'εκτυπωτής: {n}',
    'nofile.print': 'Δεν υπάρχει G-code για αυτή την εκτύπωση.',
    'nofile.hint': 'Το ha-bambulab κατεβάζει το G-code από τον εκτυπωτή. Οι H2D/H2S/H2C θέλουν USB stick ή κάρτα και τη ρύθμιση «Store Sent Files on External Storage».',
    'nofile.idle': 'Δεν υπάρχει εκτύπωση με G-code ακόμα.',
    'load': 'Φόρτωση G-code…', 'parse': 'Ανάλυση G-code ({mb} MB)…', 'error': 'Σφάλμα: {e}',
    'webgl': 'Δεν άνοιξε το WebGL. Ανανέωσε τη σελίδα.',
    'card.layer.desc': 'Ζωντανή 3D προβολή του G-code που ακολουθεί το layer του εκτυπωτή (ha-bambulab).',
    'card.status.name': 'Bambu κατάσταση εκτυπωτή',
    'card.status.desc': 'Συμπαγής κάρτα: κατάσταση, πρόοδος, layer, χρόνος, θερμοκρασίες, νήμα, κουμπιά κάμερας και φωτός (ha-bambulab).',
    't.nozzle': 'Ακροφύσιο', 't.bed': 'Πλατφόρμα', 't.chamber': 'Θάλαμος',
    'left': 'απομένουν <b>{t}</b>', 'ends': 'τέλος <b>{c}</b>', 'tomorrow': 'αύριο ', 'h': 'ώ', 'm': 'λ',
    'light': 'Φως θαλάμου', 'cam.off': 'Κλείσε την κάμερα', 'cam.on': 'Άνοιξε την κάμερα',
    'hms': 'Μηνύματα HMS: {n}', 'perr': 'Σφάλμα εκτύπωσης', 'details': 'πάτα για λεπτομέρειες',
    'fil': 'Νήμα: <b>{n}</b>', 'fil.none': 'Κανένα ενεργό νήμα',
    'overview': 'Επισκόπηση',
  },
};

// `hass` may also be a language code string ("el"/"en"), e.g. from a card's `language:` option.
export function lang(hass) {
  const l = (typeof hass === 'string' ? hass
    : (hass?.locale?.language || hass?.language || navigator.language || 'en')).toLowerCase();
  return l.startsWith('el') ? 'el' : 'en';
}

export function t(hass, key, vars) {
  const s = (STR[lang(hass)] || STR.en)[key] ?? STR.en[key] ?? key;
  return vars ? s.replace(/\{(\w+)\}/g, (_, k) => (vars[k] ?? '')) : s;
}
