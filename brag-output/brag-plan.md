# Brag Plan: AIESEC India Hub

## What is this app?
The central knowledge and resource hub for AIESEC in India (term 26.27) — one place where 19 Local Committees and 2,000+ members find every portfolio's resources, a national search, functional hubs, and a live Rewards & Recognition leaderboard.

## The angle
This isn't a startup joke — it's the real thing a nationwide youth org actually needed: one clean home for scattered decks, trackers, and standards. The video plays it straight and premium, like an internal-tool launch that finally organised the chaos. Show the *product working* — search, feature cards, the portfolio grid, the national leaderboard — not a marketing list. Specific to AIESEC: the exact blue-and-navy identity, the real portfolio accent colors, the real LC names on the leaderboard.

## Hook (first 2-3 seconds)
The deep navy→blue AIESEC hero gradient fills the screen; "AIESEC in India Hub" snaps in crisp and confident, and the three real stats count up — **19** Local Committees · **2000+** Members · **26.27**. Instantly grounds it as a live, national platform.

## Key moments (the middle)
- The hero **search bar** — a cursor types a real query ("iGV matching guide") and suggestions drop in. The product *doing* its core job.
- **Feature cards slide in one by one** — AIESEC in India, Functional Hub, Rewards & Recognition — each with its real colored accent bar.
- **Portfolio hub chips pop in** in their true brand colors — iGV, oGV, iGTae, MKT, BD, PM, FnL — "Every portfolio. One place."
- The **national RnR leaderboard** — real LC rows (Manipal, Delhi-IIT, Pune…) with rank and tier badge.

## Outro / punchline
The walking-figure mark + "AIESEC India Hub · Term 26.27", tagline "Everything your LC needs, in one place." and the URL **aiesechub.in**. Music resolves under the logo.

## User flow worth showing
Entry (hero + search) → key action (type a query, browse feature cards / portfolio hubs) → result (find resources, see the national leaderboard standing). The centerpiece scenes recreate the working app: the search field, the feature-card grid, the portfolio chips, and the leaderboard table — all pulled from `app/page.js`, `lib/data.js`, and the RnR dashboard.

## Tone
- Preset: app-store
- Creative direction: the internal tool that finally organised a nationwide youth org
- Interpretation: clean feature-card reveals, title-case labels, medium weight, confident slides — no chaos, no irony. Motion is smooth and consistent; each moment reads as a real product feature.

## Format: landscape — 1920x1080
## Duration: 21 seconds

## Visual identity (from the project)
- Background: `#f8fafc` (light surface for product scenes), hero gradient `linear-gradient(140deg,#0a2540 0%,#032160 40%,#013d9e 70%,#0263d1 100%)`
- Accent: `#037ef3` (AIESEC blue / primary)
- Text: `#0f172a`
- Display font: Inter (800)
- Body font: Inter (400–600)
- Portfolio accents (real): iGV/oGV `#f85a40`, iGTae/oGTae `#0CB9C1`, MKT `#037ef3`, BD `#f59e0b`, PM `#7552CC`, FnL `#00c16e`
- Strongest visual element: the navy→blue hero with the pill search bar and the count-up stat bar; the colored feature cards; the leaderboard table with tier badges.

## Share copy (draft)
AIESEC India Hub is live — every portfolio's resources, national search, and the RnR leaderboard for all 19 LCs, in one place. aiesechub.in

## Audio direction
- Role: warm, clean corporate bed (app-store) with a light, consistent SFX layer
- Music: `happy-beats-business-moves-vol-1-by-ende-dot-app.mp3` (most energetic, app-store fit)
- Music treatment: start at 0.0, volume ~0.32, gentle fade-out over the last ~1.2s under the logo
- Music cue guidance: bundled preset read (`.../cues/happy-beats-business-moves-vol-1...json`). Tempo ~120 BPM. Strong cues in window at **17.02, 17.52, 18.52, 20.02s** — target the logo/outro landing near **18.52s**. Beat grid every ~0.5s from 3.02s — use every-other-beat (~1.0s spacing) for the sequential feature cards and portfolio chips so labels stay readable.
- Audio-reactive treatment: subtle; use music RMS/bass to let the hero gradient glow and the product cards' presence breathe. No waveform/equalizer visuals.
- SFX posture: moderate, motion-matched, app-store restraint — soft drops/clicks per card, keypress ticks for the typed query, one warm bell on the outro. All 0.55–0.75 volume.
- Audio-coupled moments: typed search query (key ticks), feature cards (card/drop per arrival), portfolio chips (light pops), leaderboard rows (soft ticks), logo (single warm bell).
- Restraint rule: no aggressive impacts, no glitch/error sounds, nothing that undercuts a premium product feel; SFX support motion, never distract.

## Storyboard

### Scene 1 — Hero + stats — 4.0s
Navy→blue AIESEC gradient fills the frame with faint dot grid + soft blobs. "AIESEC in India Hub" (Inter 800) snaps up crisp; subtitle "World's Largest Youth-Run Organisation" fades under it. The three stats count up: **19** Local Committees · **2000+** Members · **26.27** Current Term.
Sequential/interaction: yes — three stat values count up left-to-right, ~0.15s apart.
Audio intent: confident, warm establishment; the bed opens.
Audio-coupled idea: soft tick per stat as it settles.
Music: energetic clean bed begins.
Transition mood: clean slide → Scene 2

### Scene 2 — Search in action — 3.5s
Cut to the pill search bar on light `#f8fafc`. A cursor types "iGV matching guide" character-by-character; a dropdown of real suggestions slides in (iGV Matching Guide, iGV Standards & Processes, EP Journey Framework).
Sequential/interaction: yes — simulated typing, then 3 suggestion rows drop in.
Audio intent: crisp, tactile, "the product responds".
Audio-coupled idea: randomized keypress ticks while typing; a soft drop as the dropdown opens.
Music: bed continues, steady.
Transition mood: smooth wipe → Scene 3

### Scene 3 — Feature cards — 4.5s
Three real feature cards slide in one by one on light bg, each with its colored accent bar and title: **AIESEC in India** (blue), **Functional Hub** (blue), **Rewards & Recognition** (amber). Section eyebrow "Quick Access" sits above.
Sequential/interaction: yes — 3 cards arrive one by one (~1.0s apart, every-other-beat), each holding readably; full set holds ~1s after the last.
Audio intent: satisfying, orderly product reveal.
Audio-coupled idea: soft card/drop sound per card arrival.
Music: bed, building slightly.
Transition mood: clean slide → Scene 4

### Scene 4 — Portfolio hubs — 3.5s
Portfolio hub chips pop into a tidy grid in their true brand colors: iGV, oGV, iGTae, MKT, BD, PM, FnL. Label above: "Every portfolio. One place."
Sequential/interaction: yes — chips pop in quickly in a stagger, then the whole grid holds; the headline reads the full time.
Audio intent: momentum — breadth of the platform.
Audio-coupled idea: light pops on the chip stagger (accent the first/last, not every one).
Music: bed, lifting toward the payoff.
Transition mood: smooth wipe → Scene 5

### Scene 5 — National leaderboard — 3.5s
The RnR national leaderboard: dark-header table, real LC rows slide in — 1 AIESEC in Manipal, 2 Delhi-IIT, 3 Pune, 4 Mumbai — each with rank border (gold/silver/bronze) and a tier badge. Label: "National recognition, ranked."
Sequential/interaction: yes — top rows slide in top-to-bottom; hold the full board.
Audio intent: prestige, standing, payoff approaching.
Audio-coupled idea: soft tick per row.
Music: bed peaks toward the outro strong cue.
Transition mood: clean slide → Scene 6

### Scene 6 — Logo outro — 2.0s
Back to the navy gradient. The AIESEC walking-figure mark + "AIESEC India Hub" and "Term 26.27" land together; tagline "Everything your LC needs, in one place." and URL **aiesechub.in** settle beneath. Music fades under the logo.
Sequential/interaction: none — single confident landing.
Audio intent: warm resolution.
Audio-coupled idea: one soft warm bell as the logo lands (beat-locked near 18.52s).
Music: final swell then fade-out.
Transition mood: soft settle → end

**Music mood for this video:** upbeat, clean, corporate-adjacent (app-store)
**Audio summary:** A warm, energetic Inter-clean bed runs the full 21s, a light tactile SFX layer marks each product action (typing, cards, chips, rows), and a single warm bell lands the logo near an 18.5s strong cue before the music fades out.
