# Hyperframes Composition Brief: AIESEC India Hub

## Objective
Create a short, clean, app-store-style launch/brag video for the AIESEC India Hub — the central knowledge & resource platform for AIESEC in India, term 26.27.

## Output
- Composition directory: `brag-output/composition/`
- Rendered video: `brag-output/brag.mp4`
- Format: landscape — 1920x1080
- Duration: 21 seconds

## Source Material
- Project root: `C:\Users\faadh\OneDrive\Desktop\IXP DSP\aiesechub.in`
- Primary files read: `app/page.js`, `lib/data.js`, `lib/rnr-data.js`, `docs/brand-palette.md`, `components/Navbar.js`
- Product name: **AIESEC India Hub** (Term 26.27)
- Tagline / strongest claim: "Your Central Hub for AIESEC in India — World's Largest Youth-Run Organisation."
- Key UI to recreate: navy→blue hero with pill search bar + count-up stat bar; the colored feature-card grid; the portfolio hub chips in brand colors; the RnR national leaderboard table with tier badges.
- Copy that must appear verbatim:
  - "AIESEC in India Hub" / "Term 26.27"
  - "19 · Local Committees", "2000+ · Active Members", "26.27 · Current Term"
  - Feature card titles: "AIESEC in India", "Functional Hub", "Rewards & Recognition"
  - Real LC names: "AIESEC in Manipal", "AIESEC in Delhi-IIT", "AIESEC in Pune", "AIESEC in Mumbai"
  - "Everything your LC needs, in one place."
  - "aiesechub.in"

## Creative Direction
- Tone preset: app-store
- Creative direction: the internal tool that finally organised a nationwide youth org
- Interpretation: clean feature-card reveals, title-case labels, medium/heavy Inter weights, confident smooth slides (0.35–0.45s). No irony, no chaos. Each moment reads as a real product feature.
- Angle: Play it straight and premium — a real national platform launch. Show the product *working* (search, cards, portfolio grid, leaderboard), not a marketing bullet list. Ground every scene in AIESEC's real identity: the blue/navy palette, the true portfolio accent colors, and real LC names.
- Hook: navy→blue gradient fills; "AIESEC in India Hub" snaps in; three real stats count up (19 / 2000+ / 26.27).
- Outro / punchline: walking-figure mark + "AIESEC India Hub · Term 26.27", tagline "Everything your LC needs, in one place.", URL "aiesechub.in".
- Avoid:
  - Generic SaaS language ("streamline your workflow")
  - Abstract filler visuals / color washes
  - Any redesign that departs from the AIESEC blue identity

## Visual Identity
- Background (product scenes): `#f8fafc`; alt `#f1f5f9`; surface/cards `#ffffff`
- Hero/outro gradient: `linear-gradient(140deg,#0a2540 0%,#032160 40%,#013d9e 70%,#0263d1 100%)`
- Text: `#0f172a` (primary), `#475569` (secondary), on dark use `#f0f6ff` / `rgba(255,255,255,0.65)`
- Accent: `#037ef3` (AIESEC blue / primary); primary-dark `#025ec2`
- Portfolio accents (real, use exactly): iGV/oGV `#f85a40`, iGTae/oGTae `#0CB9C1`, MKT `#037ef3`, BD `#f59e0b`, PM `#7552CC`, FnL `#00c16e`
- RnR tier/rank: gold `#f59e0b`, silver `#94a3b8`, bronze `#cd7f32`
- Display font: Inter, weight 800 (Google Fonts; system-ui fallback)
- Body font: Inter, weights 400–600
- Radius: cards 16px, chips/badges 8–12px, search bar/pills 50px
- Shadows: card `0 8px 24px rgba(0,0,0,0.08)`; hover blue-tinted `0 12px 32px rgba(3,126,243,0.14)`
- Visual references: dot-grid + soft radial blob overlays on the hero; 36×4px colored accent bar on feature cards; wave divider SVG; frosted navbar with inline AIESEC walking figure.

## Storyboard
Use the storyboard in `brag-output/brag-plan.md` as the creative contract. Scene summary:
1. Hero + stats — 4.0s — gradient hero, "AIESEC in India Hub", three stats count up (19 / 2000+ / 26.27)
2. Search in action — 3.5s — pill search bar; type "iGV matching guide"; 3 real suggestions drop in
3. Feature cards — 4.5s — 3 real cards slide in one by one with colored accent bars
4. Portfolio hubs — 3.5s — brand-colored portfolio chips pop into a grid; "Every portfolio. One place."
5. National leaderboard — 3.5s — RnR table, real LC rows slide in with rank borders + tier badges
6. Logo outro — 2.0s — walking-figure mark + "AIESEC India Hub · Term 26.27", tagline, "aiesechub.in"

## Audio
- Audio role: warm, clean corporate bed (app-store) with a light, consistent motion-matched SFX layer
- Audio arc: bed opens on the hero, stays steady through search/cards, lifts through the portfolio grid and leaderboard, then a warm bell lands the logo and the music fades out.
- Music: `happy-beats-business-moves-vol-1-by-ende-dot-app.mp3`
- Music treatment: start 0.0, volume ~0.32 (bed), gentle fade-out over the last ~1.2s under the logo. Never above 0.4.
- Music cue guidance: bundled preset — copy `~/.claude/skills/brag/assets/music/cues/happy-beats-business-moves-vol-1-by-ende-dot-app.music-cues.json` into `assets/music/cues/`. Tempo ~120 BPM. Strong cues: 17.02, 17.52, 18.52, 20.02s. Lock the **logo landing (Scene 6) near 18.52s** (within ±0.15s). Beat grid ~0.5s spacing from 3.02s — for sequential feature cards and portfolio chips use **every-other-beat (~1.0s)** so text stays readable. Use only 1–2 strong-cue locks total.
- Audio-reactive treatment: subtle — use music RMS/bass to let the hero gradient glow and the product cards' presence breathe. No waveform/equalizer/particle visuals.
- Audio-coupled moments:
  - Scene 1 stats — soft tick as each stat settles
  - Scene 2 typing — randomized `keyboard/keypress-*.wav` per character; soft `interface/drop_*` when dropdown opens
  - Scene 3 feature cards — `casino/card-place-*` or `interface/drop_*` per card arrival
  - Scene 4 portfolio chips — light `ui/click*` / `interface/drop_*` pops, accent first + last of the stagger only
  - Scene 5 leaderboard rows — soft `interface/drop_*` tick per row
  - Scene 6 logo — one `impact/impactBell_heavy_000` warm bell, beat-locked ~18.52s
- SFX selection guidance: match the gesture; keep everything soft and premium (app-store). No glitch/error/aggressive impacts. Read `sfx-analysis.md` and prefer low high-frequency-risk files for the repeated card/row/chip sounds.
- SFX analysis guidance: `~/.claude/skills/brag/assets/sfx/sfx-analysis.md`
- Exact SFX choice: Hyperframes chooses filenames, timestamps, density, and volume based on the implemented animation. SFX volume 0.55–0.75; music 0.32.
- Audio files: copy the chosen music and any selected SFX into `brag-output/composition/assets/` (music under `assets/music/`, SFX under `assets/sfx/<family>/`).

## Hyperframes Instructions
Use the current `hyperframes` skill and CLI workflow (hyperframes-core contract, hyperframes-animation, hyperframes-creative). Prefer native Hyperframes conventions over anything in `/brag`.

Requirements:
- Show at least one real UI/copy/visual element from the project (this brief lists several — recreate the search bar, feature cards, portfolio chips, and leaderboard faithfully in the AIESEC blue identity).
- Keep all text readable in the final render; each label holds ≥0.8s settled, sentences ≥1.2s.
- Keep total duration 15–25s (target 21s).
- Include the music + SFX layer; wire music on a low track, each overlapping SFX on its own ascending track-index.
- Treat audio notes as guidance; choose exact SFX after the animation exists.
- Beat-lock only the logo landing to the 18.52s strong cue; snap sequential cards/chips/rows to every-other-beat of the grid for readability.
- Add a subtle audio-reactive treatment (hero glow / card presence) per the hyperframes audio-reactive workflow; if extraction is unavailable, document it and skip — do not block the render.
- Use local assets; no absolute paths in the composition HTML.
- Run `hyperframes lint`, `validate`, and `inspect` before render; fix all errors.
