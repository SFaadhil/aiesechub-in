# AIESEC India Hub — Brand Palette & Design System

> **Term 26.27** · Next.js 14 App Router · Bootstrap 5.3 + custom CSS design tokens
> Last updated: 2026-04-30

---

## 1. Color Tokens

All tokens are CSS custom properties declared on `:root` in `app/globals.css`.

### Primary (AIESEC Blue)

| Token | Hex | Usage |
|---|---|---|
| `--primary` | `#037ef3` | CTAs, active nav links, focus rings, eyebrow text |
| `--primary-light` | `#e8f3fe` | Hover backgrounds on nav items, info note bg |
| `--primary-dark` | `#025ec2` | Hover state of primary buttons |

### Backgrounds & Surfaces

| Token | Light mode | Dark mode | Usage |
|---|---|---|---|
| `--bg` | `#f8fafc` | `#0a0f1e` | Page background |
| `--bg-alt` | `#f1f5f9` | `#0f1629` | Alternate section background (values grid, etc.) |
| `--surface` | `#ffffff` | `#141d35` | Cards, navbar, dropdowns, modals |
| `--surface-2` | `#f8fafc` | `#1a2440` | Nested surfaces |

### Text

| Token | Light mode | Dark mode | Usage |
|---|---|---|---|
| `--text` | `#0f172a` | `#f0f6ff` | Primary body copy, headings |
| `--text-2` | `#475569` | `#94a3b8` | Secondary copy, descriptions |
| `--text-3` | `#94a3b8` | `#4b5e78` | Placeholders, metadata, muted labels |

### Borders

| Token | Light mode | Dark mode |
|---|---|---|
| `--border` | `rgba(0,0,0,0.07)` | `rgba(255,255,255,0.06)` |
| `--border-strong` | `rgba(0,0,0,0.12)` | `rgba(255,255,255,0.10)` |

---

## 2. Portfolio Accent Colors

Used for hub cards, resource card top-bar accents, RnR badges, and section theming.

| Portfolio | CSS var | Hex | Portfolios grouped |
|---|---|---|---|
| iGV | `--igv` | `#f85a40` | Incoming Global Volunteer |
| oGV | `--ogv` | `#f85a40` | Outgoing Global Volunteer |
| iGTae | `--igtae` | `#0CB9C1` | Incoming Global Talent  |
| oGTae | `--ogtae` | `#0CB9C1` | Outgoing Global Talent |
| PM | `--pm` | `#7552CC` | People Management |
| FnL | `--fnl` | `#00c16e` | Finance & Legality |
| BD | `--bd` | `#f59e0b` | Business Development |
| MKT | `--mkt` | `#037ef3` | Marketing (same as primary) |
| IM / OD / General | `--im`, `--od`, `--general` | `#8b9ab0` | Support functions |

### Full Portfolio Color Reference (from `lib/rnr-data.js`)

| key | Hex |
|---|---|
| `iGV` | `#f85a40` |
| `oGV` | `#f85a40` |
| `iGTa` | `#0CB9C1` |
| `iGTe` | `#0CB9C1` |
| `oGTa` | `#0CB9C1` |
| `MKT` | `#037ef3` |
| `BD` | `#f59e0b` |
| `PM` | `#7552CC` |
| `FnL` | `#00c16e` |
| `EXP` | `#8b9ab0` |
| `Entity` | `#0f172a` |

---

## 3. RnR Tier Colors

Defined in `lib/rnr-data.js` as `TIER_META`. Used for tier badges, card backgrounds, and leaderboard left-borders.

| Tier | Label | Color | Background |
|---|---|---|---|
| Tier 1 | National Titans | `#f59e0b` (gold) | `#fef9ee` |
| Tier 2 | Rising Stars | `#94a3b8` (silver) | `#f8fafc` |
| Tier 3 | Challengers | `#cd7f32` (bronze) | `#fdf6ee` |
| Tier 4 | Builders | `#7552CC` (purple) | `#f5f3ff` |
| Tier 5 | Explorers | `#0CB9C1` (teal) | `#f0fafb` |
| Tier X | Below Minimum | `#8b9ab0` (grey) | `#f8fafc` |

Leaderboard rank borders: gold `#f59e0b` · silver `#94a3b8` · bronze `#cd7f32` (applied via `.rank-gold`, `.rank-silver`, `.rank-bronze`).

---

## 4. Hero & CTA Gradients

| Location | Gradient |
|---|---|
| Homepage hero | `linear-gradient(140deg, #0a2540 0%, #032160 40%, #013d9e 70%, #0263d1 100%)` |
| CTA banner | `linear-gradient(135deg, #032160 0%, #037ef3 60%, #0CB9C1 100%)` |
| Blob overlays | `radial-gradient` at 70% 20% (primary/35% opacity) and 20% 80% (blue/30%) |

---

## 5. Shadow Scale

| Token | Value | Usage |
|---|---|---|
| `--shadow-xs` | `0 1px 3px rgba(0,0,0,0.06)` | Very subtle lift |
| `--shadow-sm` | `0 4px 12px rgba(0,0,0,0.06)` | Navbar on scroll |
| `--shadow-md` | `0 8px 24px rgba(0,0,0,0.08)` | Card hover states |
| `--shadow-lg` | `0 16px 48px rgba(0,0,0,0.10)` | Dropdowns, modals |
| `--shadow-hover` | `0 12px 32px rgba(3,126,243,0.14)` | Feature card hover (blue-tinted) |

Dark mode shadows multiply opacity: sm `0.3`, md `0.4`, lg `0.5`.

---

## 6. Typography

### Font Family

```css
font-family: 'Inter', system-ui, -apple-system, sans-serif;
```

Loaded from Google Fonts: weights `300 400 500 600 700 800`.

### Type Scale

| Element | Size | Weight | Letter-spacing | Notes |
|---|---|---|---|---|
| Hero title | `clamp(2.2rem, 5vw, 3.5rem)` | 800 | `−1.5px` | `.hero-title` |
| Section title | `clamp(1.5rem, 3vw, 2rem)` | 800 | `−0.5px` | `.section-title` |
| Page hero title | `clamp(1.8rem, 4vw, 2.8rem)` | 800 | `−1px` | `.page-hero-title` |
| Feature card title | `17px` | 700 | `−0.2px` | |
| Nav brand | `13.5px` | 800 | `−0.2px` | |
| Nav brand sub | `10.5px` | 600 | `+0.4px` | "Term 26.27" |
| Nav link | `14px` | 500 | — | |
| Body copy | `16px` | 400 | — | `line-height: 1.6` |
| Section body | `16px` | 400 | — | `line-height: 1.7` |
| Hero subtitle | `1.1rem` | 400 | — | `line-height: 1.7` |
| Section eyebrow | `11.5px` | 700 | `+1.2px` | Uppercase |
| Resource title | `14px` | 700 | — | 2-line clamp |
| Resource desc | `12.5px` | 400 | — | 2-line clamp |
| Footer brand | `1rem` | 800 | `−0.3px` | |
| Footer col heading | `11px` | 700 | `+1px` | Uppercase |
| Footer link | `13.5px` | 400 | — | |

---

## 7. Spacing & Radius Scale

### Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `8px` | Buttons, nav links, icon buttons, dropdown items |
| `--radius-md` | `12px` | Hub cards, resource cards, dropdowns |
| `--radius-lg` | `16px` | Feature cards, leaderboard, podium cards |
| `--radius-xl` | `24px` | CTA banner, page hero images |
| `50px` (hardcoded) | — | Hero search bar, hero badge (pill shape) |

### Section Spacing

| Class | Value | Breakpoint |
|---|---|---|
| `.section-py` | `88px` top + bottom | ≥769px |
| `.section-py` | `60px` top + bottom | ≤768px |
| `.hero-section` | `120px 0 100px` | ≥769px |
| `.hero-section` | `80px 0 72px` | ≤768px |
| `.page-hero` | `80px 0 64px` | ≥769px |
| `.page-hero` | `56px 0 48px` | ≤768px |

### Card Padding

| Card type | Padding |
|---|---|
| Feature card body | `22px` |
| Resource card | `20px` |
| Hub card body | `14px 16px 16px` |
| A2030 card | `20px 18px` |
| CTA banner | `64px 40px` |

---

## 8. Transition Scale

| Token | Value | Usage |
|---|---|---|
| `--transition-fast` | `150ms cubic-bezier(0.4,0,0.2,1)` | Hover micro-interactions (nav links, icon buttons) |
| `--transition` | `250ms cubic-bezier(0.4,0,0.2,1)` | Card hovers, toggles |
| `--transition-slow` | `400ms cubic-bezier(0.4,0,0.2,1)` | Page theme switch, entrance animations |

---

## 9. Animation Classes

| Class | Keyframe | Effect |
|---|---|---|
| `.animate-fade-up` | `fadeUp` | Fade in + slide up 28px |
| `.animate-fade-in` | `fadeIn` | Fade in only |
| `.animate-scale-in` | `scaleIn` | Fade in + scale from 96% |
| `.delay-1` through `.delay-6` | — | `0.08s` increments (0.08 → 0.48s) |

Background effects: `floatBlob` (12s / 16s, alternate direction) on blob pseudo-elements, `gradientShift` (hero gradient), `shimmer` (loading states).

---

## 10. Component Patterns

### Navbar (`components/Navbar.js`)
- Sticky, frosted glass: `rgba(255,255,255,0.80)` + `backdrop-filter: blur(16px) saturate(180%)`
- Dark: `rgba(10,15,30,0.85)`
- Left: AIESEC walking-figure inline SVG + brand text ("AIESEC in India Hub" / "Term 26.27")
- Right (`ms-auto`): Home · Functional Hub (dropdown) · The AIESEC Way · Global Academies · Conference Output · RnR · 🔍 · 🌙
- Icon buttons: `34×34px`, `--radius-sm`, border `--border-strong`
- Dropdown: `dropdown-menu-end`, `--radius-md`, `--shadow-lg`, `scaleIn` animation

### Feature Cards (Homepage, `app/page.js`)
- `--radius-lg` container, 180px cover image, 22px body padding
- Coloured 36×4px accent bar per card
- Hover: `translateY(-4px)` + `--shadow-hover` (blue-tinted)
- CTA arrow gap animates 4px → 8px on hover

### Hub Cards (`components/HubCard.js`)
- `--radius-md`, 130px image with `scale(1.06)` on hover
- 3px top accent bar (portfolio color)
- Dark gradient overlay on image

### Resource Cards (`components/ResourceCard.js`)
- `--radius-md`, 3px top accent bar (portfolio color) fades in on hover
- File-type badges: `.badge-drive` (green) · `.badge-slides` (amber) · `.badge-doc` (blue) · `.badge-pdf` (red) · `.badge-link` (primary)

### A2030 Card (`app/aiesec-way/page.js`)
- External link, opens in new tab
- Pure CSS hover via `.a2030-card-inner` class (`translateY(-2px)` + `--shadow-md`)
- External-link SVG icon beside label

### RnR Dashboard (`app/rnr/RnRPage.js`)
- Three sub-columns per portfolio: **Tier badge · Rank · Points**
- Tier badge abbreviated (T1–T5, TX) with tier color from `TIER_META`
- `LC_PORTFOLIO_TIERS` reverse lookup for O(1) per-LC, per-portfolio tier access
- Sticky first two columns (Rank + LC name) on horizontal scroll
- Leaderboard table: dark header (`--text` bg, `--bg` text), 14px body cells
- Filter bar: search input + tier toggle buttons + portfolio column toggles

### Page Hero (`components/PageHero.js`)
- Light gradient bg (`--bg` → `--bg-alt`), coloured blob pseudo-elements
- Left: eyebrow + title + subtitle; Right: cover image (`--radius-xl`, `--shadow-lg`, 280px)

### Buttons

| Class | Style |
|---|---|
| `.btn-primary-brand` | Solid `--primary`, hover: `--primary-dark` + `translateY(-1px)` + blue glow |
| `.btn-outline-brand` | Outline `--primary`, hover: fills to solid |
| `.btn-ghost` | Translucent white, for use on dark/hero backgrounds |

### CTA Banner
- Full-width rounded card with 3-stop gradient (dark navy → primary blue → teal)
- `--radius-xl`, radial glow pseudo-elements top-right and bottom-left

### Search Overlay
- Fixed, full-screen, `backdrop-filter: blur(6px)`, `z-index: 3000`
- Slides in via `fadeUp` animation, dismissed by Escape or backdrop click

---

## 11. Changelog — UI Decisions

| Date | Decision |
|---|---|
| Term start | Base stack chosen: Next.js 14 App Router + Bootstrap 5.3 (CDN) + custom CSS tokens |
| Term start | Font: Inter (Google Fonts, weights 300–800); system-ui fallback |
| Term start | Primary blue `#037ef3` established as AIESEC India brand color |
| Term start | Dark mode implemented via `data-theme="dark"` on `<html>`, persisted to localStorage |
| Term start | Portfolio accent colors mapped: GV red, GTae teal, PM purple, FnL green, BD amber, MKT blue |
| Term start | Navbar: frosted-glass sticky with hamburger collapse on mobile |
| Term start | Hero: deep navy-to-blue gradient with radial blob overlays and wave divider SVG |
| RnR page | RnR page built with 4 sections: Hero · National Dashboard · Monthly Recognition · Tier Structure · Points Framework |
| RnR page | `LC_PORTFOLIO_TIERS` computed as reverse map from `TIERS_BY_PORTFOLIO` for O(1) tier lookups |
| RnR page | Entity tier added as a tab/column alongside portfolio tiers; oGTe removed entirely (no data) |
| RnR page | Dashboard shows 3 sub-columns per portfolio (Tier badge, Rank, Points) with per-LC per-portfolio tier |
| RnR page | Tier color system: gold T1, silver T2, bronze T3, purple T4, teal T5, grey TX |
| RnR page | Portfolio order standardised globally: Entity → iGV → oGV → iGTa → iGTe → oGTa → MKT → BD → PM → FnL → Expansions |
| RnR page | iGV, iGTa, iGTe added to Metrics section (were missing from first build) |
| Navbar redesign | Replaced gradient "AI" square logo with inline SVG AIESEC walking figure (blue, `#037ef3`) |
| Navbar redesign | Brand renamed from "AIESEC India · Hub · 26.27" to "AIESEC in India Hub / Term 26.27" |
| Navbar redesign | AIESEC 2025 removed from nav links |
| Navbar redesign | Functional Hub dropdown switched to `dropdown-menu-end` to prevent viewport overflow |
| Homepage | AIESEC 2025 removed from FEATURED cards (5 cards remain) |
| AIESEC Way | A2030 external card added to Resources section, links to `https://a2030.aiesec.org/` |
| AIESEC Way | A2030 card uses CSS class `.a2030-card-inner` for hover (Server Component — no JS event handlers) |

---

## 12. Key File Map

| File | Purpose |
|---|---|
| `app/globals.css` | All design tokens, component classes, animations |
| `lib/rnr-data.js` | RnR data: portfolios, tiers, metrics, LC standings |
| `components/Navbar.js` | Global nav (client component) |
| `components/PageHero.js` | Reusable interior page hero |
| `components/HubCard.js` | Portfolio hub card |
| `components/ResourceCard.js` | Resource/document card with badge |
| `app/page.js` | Homepage |
| `app/rnr/RnRPage.js` | Full RnR dashboard (client component) |
| `app/aiesec-way/page.js` | AIESEC Way page with values + resources |
| `lib/data.js` | Static page content, hub definitions |
