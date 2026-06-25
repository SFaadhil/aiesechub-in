// ─── Google Sheets Configuration ────────────────────────────────────────────
//
// SETUP STEPS:
//
//  1. Create a Google Sheet (one sheet per hub — use the tab names below).
//     Columns (row 1 must be these exact headers):
//       title | description | type | url
//
//     'type' accepted values: drive, slides, doc, pdf, link, other
//
//  2. Make the sheet public:
//     File → Share → Publish to web → select "Entire Document" → CSV → Publish
//
//  3. Copy the Sheet ID from the URL:
//     https://docs.google.com/spreadsheets/d/SHEET_ID/edit
//                                            ^^^^^^^^^^
//  4. Paste it into SHEET_ID below.
//
// Once set, the website auto-updates within ~60 seconds of any sheet change.
// ─────────────────────────────────────────────────────────────────────────────

export const SHEET_ID = '1BK-5gUWkLRZI103t932uSjg7deWcFQgskDuaDXRrKno';

// Tabs for static/non-hub pages.
// Each key maps to a tab name in the same spreadsheet.
//
// Standard resource tabs (title | description | type | url):
//   conference-output, global-academies, aiesec-way
//
// Compendium tab (letter | name | url | main):
//   compendium
export const PAGE_SHEET_TABS = {
  'conference-output': 'conference-output',
  'global-academies':  'global-academies',
  'aiesec-way':        'aiesec-way',
  'compendium':        'compendium',
};

// Each hub slug maps to a tab name in your spreadsheet.
// Name your sheet tabs to match these values exactly.
export const HUB_SHEET_TABS = {
  igv:        'igv',
  ogv:        'ogv',
  igtae:      'igtae',
  ogtae:      'ogtae',
  mkt:        'mkt',
  bd:         'bd',
  pm:         'pm',
  fnl:        'fnl',
  im:         'im',
  expansions: 'expansions',
};
