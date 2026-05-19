# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Commands

```bash
npm run dev      # Start dev server on localhost:3000
npm run build    # Production build
npm run lint     # ESLint via next lint
npm run start    # Serve production build
```

No test suite exists yet. No environment variables are required — this is a fully static frontend with no backend.

---

## Design System

- **Always read `docs/brand-palette.md` before any UI work.** It contains all color tokens, typography, spacing, shadow scales, component patterns, and a running changelog of design decisions.
- After making new brand or design decisions, update `docs/brand-palette.md` to reflect them.
- Never introduce colors, fonts, or spacing values not already in the palette without asking first.

---

## Architecture

### Stack
- **Next.js 14 App Router** — no Pages Router, no `getServerSideProps`, no `getStaticProps`
- **Bootstrap 5.3** loaded via CDN in `app/layout.js` (`<head>` CSS + `<body>` JS bundle). No `npm install bootstrap`.
- **Custom CSS design tokens** in `app/globals.css` — all spacing, colour, radius, shadow, and animation values are CSS custom properties on `:root`. Dark mode via `[data-theme='dark']` toggled in `localStorage`.
- **`@/` path alias** maps to the repo root (configured in `jsconfig.json`).

### Server vs Client Components
The project follows a strict split:

| Pattern | When to use |
|---|---|
| Server Component (default) | Pages with `export const metadata`, static content, no interactivity |
| `'use client'` | Anything with `useState`, `useEffect`, event handlers, or `usePathname` |

**Critical rule:** Server Components cannot contain `onMouseEnter`, `onClick`, or any other event handler props. If a section within a server-rendered page needs hover effects, use a CSS class in `globals.css` rather than inline JS handlers.

The standard page pattern is a server wrapper that exports metadata + renders a client component:
```
app/rnr/page.js          ← Server: exports metadata, renders <RnRPage />
app/rnr/RnRPage.js       ← Client: 'use client', all interactivity lives here
```

### Data Layer

**`lib/data.js`** — All content for functional hub pages (`HUBS` array) and static pages (`STATIC_PAGES` object). Each hub entry has `slug`, `name`, `fullName`, `accent` (hex), `emoji`, `description`, and `resources[]`. The `getHub(slug)` helper is used in the dynamic route.

**`lib/rnr-data.js`** — All RnR (Rewards & Recognition) data. Key exports:
- `TIERS_BY_PORTFOLIO` — source of truth: maps `{ portfolioKey → { tierLabel → [LC names] } }`
- `LC_PORTFOLIO_TIERS` — **computed reverse lookup** at module load: `{ lcName → { portfolioKey → tier } }`. Use this for O(1) per-LC, per-portfolio tier access in the dashboard.
- `ENTITY_TIERS` — computed from `TIERS_BY_PORTFOLIO.Entity`; used for the overall standing column.
- `PORTFOLIO_ORDER`, `RECOGNITION_PORTFOLIOS`, `TIER_PORTFOLIOS` — ordered arrays controlling global display order across all RnR sections: Entity → iGV → oGV → iGTa → iGTe → oGTa → MKT → BD → PM → FnL → Expansions.
- `RNR_METRICS` — per-portfolio parameter tables with weights and descriptions.

Never hand-code `ENTITY_TIERS` or `LC_PORTFOLIO_TIERS` — they are auto-derived. Add LC data only to `TIERS_BY_PORTFOLIO`.

### Routing

| Route | File |
|---|---|
| `/` | `app/page.js` |
| `/functional-hub` | `app/functional-hub/page.js` |
| `/functional-hub/[slug]` | `app/functional-hub/[slug]/page.js` — statically pre-rendered via `generateStaticParams()` from `HUBS` |
| `/aiesec-way` | `app/aiesec-way/page.js` |
| `/global-academies` | `app/global-academies/page.js` |
| `/conference-output` | `app/conference-output/page.js` |
| `/rnr` | `app/rnr/page.js` → `app/rnr/RnRPage.js` |
| `/aiesec-2025` | `app/aiesec-2025/page.js` — **removed from nav and homepage**; route still exists |

### Shared Components

- **`Navbar.js`** (`'use client'`) — sticky frosted-glass bar; left-aligned brand with inline SVG AIESEC walking figure; right-aligned nav via `ms-auto`. Add new top-level pages to `NAV_LINKS` here.
- **`Footer.js`** — static server component.
- **`PageHero.js`** — reusable interior page hero (light gradient bg, left text + right image layout). Accepts `title`, `subtitle`, `accent`, `eyebrow`, `image`.
- **`HubCard.js`** — compact portfolio card used on the home page and `/functional-hub`.
- **`ResourceCard.js`** — document/resource card with file-type badge. Badge variants: `drive`, `slides`, `doc`, `pdf`, `link`, `other`.

### Images
External images are allowed only from `picsum.photos` and `placehold.co` (configured in `next.config.js`). Use `/* eslint-disable-next-line @next/next/no-img-element */` before `<img>` tags — `next/image` is not used. Static assets go in `/public`.

### Adding a New Page
1. Create `app/[route]/page.js` as a server component with `export const metadata`.
2. If the page needs interactivity, create `app/[route]/PageNamePage.js` as `'use client'` and render it from `page.js`.
3. Add the route to `NAV_LINKS` in `components/Navbar.js`.
4. Optionally add a feature card to the `FEATURED` array in `app/page.js`.
5. If the page needs content data, add it to `lib/data.js` under `STATIC_PAGES`.
