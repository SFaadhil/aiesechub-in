# Hyperframes Composition Brief: AIESEC India Hub — Portrait Apple-keynote cut

## Objective
Fast, loud, sharp **portrait** launch film for the AIESEC India Hub, styled after an Apple product keynote: black stage, giant type slamming in one line per cut, hard/flash/zoom transitions, driving beat.

## Output
- Composition directory: `brag-output-2026-07-03-165141/composition/`
- Rendered video: `brag-output-2026-07-03-165141/brag.mp4`
- Format: portrait — 1080x1920
- Duration: 19 seconds

## Source Material
- Project root: `C:\Users\faadh\OneDrive\Desktop\IXP DSP\aiesechub.in`
- Product name: **AIESEC India Hub** (Term 26.27)
- Copy that must appear verbatim: "AIESEC in India Hub" / "Term 26.27"; "19 Local Committees"; "2000+ Members"; "iGV matching guide"; "AIESEC in Manipal", "AIESEC in Delhi-IIT", "AIESEC in Pune"; "Everything your LC needs."; "aiesechub.in"
- Real UI to recreate: pill search bar + suggestion rows; portfolio color chips; RnR leaderboard rows with tier badges; the walking-figure brand mark (`assets/img/aiesec-human-white.png`).

## Creative Direction
- Tone: chaotic pacing (8 rapid scenes, several <2s) + cinematic/keynote production values.
- Direction: Apple keynote — black stage, giant bold Inter type, blue "product glow", hard cuts, white-flash cuts, zoom-punch entrances.
- Hook: black → "EVERYTHING." slams in → hard cut "IN ONE PLACE."
- Outro: walking-figure mark glows up + "AIESEC India Hub" / "Term 26.27" / tagline / "aiesechub.in" on a big bell.
- Loud but legible: each key word/number holds ~0.8s even when the cut lands on a beat.
- Avoid: generic SaaS language, glitch/error sfx, abstract filler, muddy stacked audio.

## Visual Identity
- Background: near-black `#05070d`–`#0a0f1e`; white-flash frames on some hard cuts.
- Accent/glow: `#037ef3` (blue), secondary `#0CB9C1`.
- Text: `#ffffff`, muted `rgba(255,255,255,0.6)`.
- Portfolio accents (exact): iGV/oGV `#f85a40`, iGTae `#0CB9C1`, MKT `#037ef3`, BD `#f59e0b`, PM `#7552CC`, FnL `#00c16e`. Tiers: gold `#f59e0b`, silver `#94a3b8`, bronze `#cd7f32`.
- Fonts: Inter 800 display / 500–600 body.

## Storyboard
Use `brag-plan.md` as the contract. Portrait scene summary:
1. Hook — 2.0s — "EVERYTHING." → "IN ONE PLACE." (two word-slams)
2. Title tease — 1.8s — "AIESEC in India Hub" + "TERM 26.27"
3. Big-number slams — 3.0s — 19 LCs / 2000+ MEMBERS / 1 HUB
4. Search — 2.5s — type "iGV matching guide", 3 suggestions flash in
5. Every portfolio — 2.3s — 7 brand-colored chips snap in
6. Ranked nationally — 2.3s — leaderboard rows snap in (Manipal/Delhi-IIT/Pune)
7. Three-word rhythm — 2.1s — SEARCH. / RESOURCES. / RECOGNITION.
8. Logo lock-in — 2.9s — mark + name + "aiesechub.in" on a bell

## Audio
- Role: driving loud bed + dense sharp SFX; final bell.
- Music: `happy-beats-business-moves-vol-1-by-ende-dot-app.mp3`, volume ~0.4, hard stop / quick fade on the final impact (~19.0s).
- Music cue guidance: bundled preset — copy `.../cues/happy-beats-business-moves-vol-1-by-ende-dot-app.music-cues.json` into `assets/music/cues/`. ~120 BPM, beat grid ~0.5s from 3.02s. Strong cues 17.02/17.52/18.52/20.02s → **lock the logo lock-in (Scene 8) near 18.52s**. Snap the fast word/number cuts onto the beat grid; hold each word ~0.8s.
- Audio-reactive: subtle-to-expressive — blue glow pulses with bass on the big slams; no waveform/equalizer.
- Audio-coupled moments: every word/number slam (impact on land), search typing (keypresses), portfolio chips (whoosh + drops, accent first/last), leaderboard rows (snaps), logo (bell, beat-locked 18.52s).
- SFX guidance: hard impacts (`impact/impactPunch_medium_*`, `impactSoft_medium_*`, `impactPlate_medium_*`) for slams; `casino/card-slide-*` for whoosh cuts; `keyboard/keypress-*` for search; `interface/drop_*` for chip/row snaps; `impact/impactBell_heavy_000` for the outro. One clean impact per slam — do not stack 3 on one frame. SFX 0.6–0.85; music 0.4. Read `sfx-analysis.md`.
- Audio files: copy chosen music + SFX into `composition/assets/`.

## Hyperframes Instructions
Follow hyperframes-core + hyperframes-animation. Portrait 1080x1920 root. Show real UI (search bar, portfolio chips, leaderboard). Keep every key word legible (~0.8s hold) despite the fast pace. Beat-lock the logo to 18.52s; snap cuts to the beat grid. Music on a low track; each overlapping SFX on its own ascending track-index. Add a subtle bass-driven glow (audio-reactive per the hyperframes workflow; if extraction unavailable, use deterministic pulsing and document it). Local assets only, no absolute paths. Run lint + validate + inspect; fix all errors before render.
