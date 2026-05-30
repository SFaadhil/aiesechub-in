// ─────────────────────────────────────────────────────────────────────────────
// Page Status — single source of truth for what is visible on the site.
//
// Set any entry to false to completely remove that page/hub from:
//   • Navbar links & dropdown
//   • Footer links
//   • Home page cards, hub grid, and CTA pills
//   • Functional Hub index cards
//   • Direct URL access (returns 404)
// ─────────────────────────────────────────────────────────────────────────────

// Top-level pages
export const PAGE_LIVE_STATUS = {
  '/aiesec-india':      true,
  '/aiesec-way':        true,
  '/functional-hub':    true,
  '/conference-output': true,
  '/global-academies':  false,
  '/rnr':               true,
  '/aiesec-2025':       false,
};

// Functional hub sub-pages (by slug)
export const HUB_LIVE_STATUS = {
  igv:        true,
  ogv:        true,
  igtae:      true,
  ogtae:      true,
  mkt:        true,
  bd:         true,
  pm:         true,
  fnl:        true,
  im:         false,
  od:         true,
  expansions: true,
};

export const isPageLive = (path) => PAGE_LIVE_STATUS[path] ?? true;
export const isHubLive  = (slug) => HUB_LIVE_STATUS[slug]  ?? true;
