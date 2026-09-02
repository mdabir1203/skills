# Storyboard Template

Use this for every video. Fill every cell. If a cell is empty, the scene is not ready.

## Project header

- **Project**:
- **Length** (seconds / total frames @ fps):
- **Frame** (16:9 / 9:16 / 1:1 / 4:5):
- **Reference world** (Apple / Google I/O / Silicon Valley editorial / other):
- **Tone** (heroic / intimate / urgent / playful / mysterious / calm / defiant):
- **Palette** (from `references/color-palettes.md`):
- **Typography** (display + mono, from `references/typography-stack.md`):
- **Music** (track + detected beats per second):
- **Single outcome** (one sentence):
- **Open loop** (the question planted in the first 3 seconds):
- **Primary neuromarketing driver** (from the 6):
- **Date / version**:

## Concept paragraph

> Write the concept in 3–4 sentences using the hook + arc + closer structure. This is the test that the storyboard serves the brief.

_(your concept here)_

## Scene list

| # | Frames | Dur (s) | Dominant element | Motion (verb) | On-screen text | VO / music | Neuro driver | Pattern interrupt | Notes |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 0–30 | 1.0 | (e.g. backlit product silhouette) | (e.g. Spring in) | (e.g. "What if...") | (e.g. music kicks at 0.5s) | (e.g. Open loop) | (e.g. scale 0 → 1 on beat 1) | (e.g. mystery gap — silhouette only) |
| 2 | 30–75 | 1.5 | | | | | | | |
| 3 | 75–135 | 2.0 | | | | | | | |
| _ | ... | | | | | | | | |

**Scene count target**:
- 15s video: 3–5 scenes
- 30s video: 5–7 scenes
- 60s video: 8–12 scenes
- 90s video: 12–16 scenes
- 120s video: 16–22 scenes

## Per-scene detail

For each scene, expand the row above with:

### Scene N (frames X–Y, duration Zs)

- **Concept** (what is happening in this scene, in plain language)
- **Composition** (where the dominant element sits, in normalized coords 0–1)
- **Visual treatment** (lighting, depth of field, color, texture)
- **Motion** (the exact verb from `motion-vocabulary.md`, with start/end frame and easing)
- **Type** (the text, in display or mono, with size, weight, color, position)
- **Audio** (music: which beat, which segment; VO: what is said; SFX: what hits)
- **Neuro driver** (which of the 6)
- **Pattern interrupt** (what changes at the scene boundary to reset attention)
- **Imperfection** (any controlled-imperfection element in this scene, from `imperfection-playbook.md`)
- **Build notes** (Remotion specifics — which components, which props, any gotchas)

## Storyboard gates (before moving to build)

The storyboard is ready for build when ALL of the following are true:

- [ ] Concept paragraph is 3–4 sentences and serves the single outcome
- [ ] Open loop is planted in the first 3 seconds and closes in the last 3
- [ ] At least 2 pattern interrupts in the first 15 seconds
- [ ] At least one purely emotional scene (no text, no features — just music and image)
- [ ] Every scene has a dominant element and a single neuromarketing driver
- [ ] Scene count is within the target range for the video length
- [ ] Squint test passes — squinting at the scene list, you can still tell what the video is about
- [ ] Every transition lands on a music beat
- [ ] No scene is longer than 4 seconds without a pattern interrupt
- [ ] The climax lands at 70–80% of the runtime
- [ ] The closer is shorter than the open (typically 3s vs 5s)
- [ ] At least 3 of the 6 neuromarketing drivers are used across the video
- [ ] At least one bold imperfection is documented in the notes
- [ ] No anti-pattern from the SKILL.md anti-pattern list appears in any scene

## Anti-pattern self-check

Before locking the storyboard, scan for these. Any hit is a rewrite.

- [ ] No "AI-generated gradient mesh" as a hero background
- [ ] No floating stock-photo backgrounds behind a product mockup
- [ ] No meta-labels (INTRO, CHAPTER 1, FEATURES, 01) on screen
- [ ] No 6+ word headlines on screen at once
- [ ] No Inter / Roboto / Open Sans / Lato as the primary display
- [ ] No linear easing on any motion
- [ ] No static scene over 4 seconds
- [ ] No "In this video, we'll explore" opening
- [ ] No generic Lottie-style animations
- [ ] No emoji in UI mockups or titles
- [ ] No "Subscribe" / "Like" CTA on a brand video
- [ ] No "transition library" effect — every cut uses the same transition style

## Music timing map

If the video is music-driven, add a beat map:

| Beat # | Time (s) | Frame @ 30fps | Scene it lands in | What happens on the beat |
|---|---|---|---|---|
| 1 | 0.5 | 15 | Scene 1 | Music kick + product reveal |
| 2 | 1.0 | 30 | Scene 1 → 2 boundary | Cut |
| 3 | 1.5 | 45 | Scene 2 | Element pulse |
| ... | | | | |

Every transition should land on a beat. If a transition does not land on a beat, either move the transition or move the beat (edit the music cue).

## Sign-off

- [ ] Brief intake complete (all 8 questions answered)
- [ ] Concept paragraph approved
- [ ] Storyboard passes all gates
- [ ] Anti-pattern self-check clean
- [ ] Music timing map complete
- [ ] Hand-off to build stage

**Approved by / date**:
