---
name: keynote-explainer
description: This skill should be used when the user asks for a "keynote-style motion video", "Apple/Google/Silicon Valley product reveal", "cinematic Remotion explainer", "world-class launch video", "premium product motion graphics", or wants to "build a video like an Apple keynote". Produces a Remotion-rendered MP4 through a 5-stage pipeline (brief → concept → storyboard → build → world-class review) with curiosity-loop neuromarketing, AIDA structure, and controlled imperfection as the signature. Do NOT use for short-form vertical social clips, screencasts, or generic corporate videos.
---

# Keynote Explainer

A pipeline for building motion video explainers in the visual language of Apple keynotes, Google I/O launches, and the highest-end Silicon Valley product reveals. The output is a Remotion-rendered MP4, but the discipline is editorial — the same taste that makes a 90-second product film feel inevitable.

This is not a templating skill. There is no "default 30-second explainer". Every video is built against a real brief, a real audience, and a real single outcome. The skill exists to enforce taste at every stage so the output does not look like an LLM made it.

## Aesthetic DNA — three reference worlds, never blended

Every video picks **one** primary reference and applies it cleanly. Mixing them is how videos start to look like templates.

- **Apple** (hero-shot minimalism) — single subject, cinematic slow reveals, perfect typography, premium materials (glass, aluminum, soft shadow), emotional score, dead silence between beats. The hero is the product. WWDC, iPhone launches, the "Shot on iPhone" series.
- **Google I/O** (data-precise optimism) — modular feature reveals, technical accuracy, generous typography, friendly/accessible, bright color blocks, generous whitespace. The hero is the user's empowerment. Pixel launches, Workspace updates, AI feature reveals.
- **Silicon Valley editorial** (cinematic dark mode) — gradient meshes, glassmorphism, subtle particles, 3D abstract elements, monospace accents, slight film grain, warm blacks. The hero is the future. Stripe Sessions, Linear's product films, Vercel's launch videos.

If the brief is ambiguous, default to **Silicon Valley editorial** — it is the most forgiving of varied content and the most aligned with the "premium but contemporary" expectation.

## The neuromarketing spine — curiosity loops + pattern interrupts

Every scene must be tagged with one of these six drivers. No driver = the scene is cut.

1. **Open loop (Zeigarnik effect)** — Plant a question in the first 3 seconds. Do not resolve until the climax. The viewer's incomplete-information anxiety keeps them watching.
2. **Pattern interrupt** — A change in motion, color, scale, perspective, or audio that resets attention. Required every 5–7 seconds. Static is death; the brain literally stops processing.
3. **Mystery gap (Schwartz)** — Hint at something deeper than what is shown. The viewer's imagination does the heavy lifting. Show a door; do not open it.
4. **Specificity over abstraction** — "12 minutes 34 seconds" beats "fast". "300,000 neurons firing" beats "advanced AI". Concrete > clever.
5. **Contrast (delta)** — Before/after, expected/unexpected, simple/complex, silent/loud. The brain responds to deltas, not absolutes. Make the cut feel like a snap.
6. **Endowed progress** — Make the viewer feel they have already started. "Three things changed today" > "Three things will change". The closer the finish line appears, the harder they lean in.

The pipeline requires the concept document to declare which driver is primary, and each scene to declare which driver it serves. This is non-negotiable. The single most common reason motion videos fail is that the scenes have no clear intent — they are pretty, but they are not doing anything to the viewer's nervous system.

## The 5-stage pipeline

The pipeline is sequential. Each stage has a gate; the next stage does not start until the previous passes its gate.

### Stage 1 — Brief intake

Ask the user 5–8 questions to lock the brief. Use the template in `references/brief-template.md`. The required answers before moving on:

1. **Product / topic** — what is the thing?
2. **Audience** — who is watching, and what do they currently believe?
3. **Single outcome** — what should the viewer DO or FEEL after 30 seconds? One sentence. If it is two sentences, it is two outcomes and the video is already too long.
4. **Length** — 15s, 30s, 60s, 90s, 120s. Default: 30s for product explainers, 60–90s for launches, 120s only for true product films.
5. **Frame** — 16:9 (YouTube / web), 9:16 (vertical / Reels), 1:1 (social square), 4:5 (IG feed). Default: 16:9.
6. **Reference world** — Apple / Google I/O / Silicon Valley editorial / other (describe).
7. **Tone** — heroic, intimate, urgent, playful, mysterious, calm, defiant.
8. **Hard constraints** — must-include elements, brand guidelines, legal copy, fonts, colors, talent releases, music licensing.

If the brief is vague, push back before proceeding. A vague brief produces a vague video. Two rounds of questions is normal; five rounds means the user is not ready and the video will fail.

### Stage 2 — Concept (hook + arc + closer)

Write a one-paragraph concept in this exact structure:

1. **Open loop** — the question the viewer needs answered (planted in the first 3 seconds).
2. **Reframe** — the surprising shift that makes the old belief obsolete (lands at 20–30% mark).
3. **Build** — three to four escalating beats that compound the reveal.
4. **Climax** — the moment everything clicks (lands at 70–80% mark).
5. **Closer** — what the viewer should do, framed as inevitable (last 3 seconds).

The concept must fit in 3–4 sentences. If it does not, the video is too long or the outcome is not single.

**Concept gate** — the concept must contain at least one open loop opened in the first 3 seconds and closed in the last 3. Multiple loops are fine if they do not crowd. The reframe must be a true reframe — not a feature list. "Faster, cheaper, better" is not a reframe; "The reason you have been thinking about this wrong" is.

### Stage 3 — Storyboard (scene-by-scene direction)

Use the template in `assets/storyboard-template.md`. For each scene, write:

- **Frame range** (e.g. 0–45)
- **Duration** (seconds)
- **Dominant element** — what is the single visual the eye lands on first?
- **Motion** — using the vocabulary in `references/motion-vocabulary.md` (one of 20 verbs)
- **On-screen text** — kept ruthlessly short. Apple/Google rarely show more than 6 words at a time. If the text needs to be longer, the scene needs to be split.
- **Voiceover / music cue** — kept minimal
- **Neuromarketing driver** — which of the 6 from the spine
- **Pattern interrupt** — what changes to reset attention at the scene boundary

**Scene count rule** — 30s video: 5–7 scenes. 60s video: 8–12. 90s video: 12–16. 120s video: 16–22. Fewer scenes = slower, more cinematic, more Apple. More scenes = more dynamic, more Google I/O.

**Storyboard gate** — the storyboard must:
- Pass the squint test — squint at the scene list, can you still tell what the video is about?
- Have at least two pattern interrupts in the first 15 seconds
- Close the open loop
- Have a single dominant element per scene
- Include at least one scene that is purely emotional (no text, no features — just music and a single image)

### Stage 4 — Build (Remotion scaffolding)

The build follows the patterns in `references/remotion-patterns.md`:

- Frame-driven animation only — `useCurrentFrame` + `interpolate` + `spring`. No `setState`, no `requestAnimationFrame`, no `Date.now()`, no `Math.random()`. Use `random(seed)` from Remotion for any stable per-frame randomness.
- Schedule with `<Sequence>` and `<Series>` — never with manual `from + durationInFrames` arithmetic across scenes.
- Audio sync — beats detected offline (with `web-audio-beat-detector` or aubio), baked into props as `BEATS_SEC: number[]`. Never analyze audio at render time; the headless renderer has no realtime audio clock.
- zod-typed schema on the `<Composition>` so every prop is editable in the Studio sidebar and type-safe in code.
- `staticFile()` for fonts and assets, with `delayRender()` / `continueRender()` for async loads — otherwise fonts pop in mid-render.
- TypeScript everywhere. Each scene is a strictly-typed component from the same schema.
- Render stills first (frame 0, mid, last) → inspect → only then encode the MP4. The verify loop is the difference between a video that ships and a video that does not.

**Build the scenes, not the page.** Each scene is a self-contained Remotion component that takes props and renders frame-driven motion. The Composition is a series of `<Sequence>` or `<Series.Sequence>` blocks. No scene is a one-off hack.

**Type system** — one zod schema for the whole video. Per-scene schemas are derived. The same schema feeds the Studio sidebar and the CLI props flag.

**Fonts** — self-host via `staticFile`. At most two families: one display + one mono (or one display + one text). Banned as primary display: Inter, Roboto, Open Sans, Lato — too generic for the keynote aesthetic. Use Satoshi, Cabinet Grotesk, General Sans, Geist, Söhne, Tiempos, or Editorial New depending on tone. Pairings live in `references/typography-stack.md`.

**Color** — pick one primary palette from `references/color-palettes.md`. Most keynotes are 1–2 dominant colors + black/white. Resist the urge to use 5 colors. The palette reinforces the tone: dark + single accent = cinematic, light + multi = friendly, dark + warm = intimate.

**Music** — at least one of: original score, licensed track with cleared rights, royalty-free with attribution. The music is 50% of the video. Cheap stock music is the fastest way to make a video look cheap. The build should be timed to the music, not the other way around.

**Voiceover** — optional but powerful when used. If present, match `durSec` to actual TTS audio length + ~0.3s tail for soft out-fade. Voiceover is the only case where a scene's `from` is derived from audio length, not vice versa.

### Stage 5 — World-class review (refiner pass)

This is the most important stage and the one most often skipped. The skill's role here is to be a ruthless creative director with impeccable taste. Run the video through these passes in order, fixing between each. A world-class review pass usually takes as long as the build.

1. **Story fidelity** — does the video actually answer the brief? Is the open loop closed? Is the CTA clear? Cut anything that does not serve the single outcome.
2. **Timing and rhythm** — is each scene the right length? Are pattern interrupts landing? Does the climax land at 70–80%? Is the outro too long? A common failure: the closer is the same length as the open. The closer should be shorter.
3. **Typography** — right scale? Does it breathe? Line lengths under 60 characters? More than 6 words on screen at once? Is the hierarchy obvious in 0.5s? Can you read the type in the first frame you see it?
4. **Color and contrast** — clear focal point? Sufficient contrast? Any muddy mid-tones? Does the palette reinforce the tone? The biggest failure here is a 5-color palette that fights itself.
5. **Motion quality** — easing right? (Apple/Google favor smooth ease-out, never linear.) Any micro-stutters? Springs tuned (damping 14–20, stiffness 80–200)? Anything feel mechanical? If a transition snaps instead of eases, it is wrong.
6. **Imperfection as signature (the bold pass)** — see below.
7. **The squint test** — squint at the rendered video. Dominant element obvious? Visual noise competing with the message? Anything outside the safe area? This test never lies.
8. **Audio + VO** — music supports visuals? VO clean? Clipping or ducking issues? Frame-accurate lip sync if VO is present?
9. **Final polish** — one pass for the things you missed. Add grain if needed. Subtle particles if needed. Final color pass. The difference between "good" and "world-class" usually lives in this pass.

#### Imperfection as signature (the bold pass)

This is where the video stops being competent and starts being tasteful. Deliberately introduce 1–3 elements of controlled imperfection that signal "this was made by a person with taste, not by a template engine." Examples:

- A hand-drawn underline beneath a key word (rough SVG path, not a CSS border)
- Slightly off-center composition (1–2% off the perfect grid)
- A 1-frame intentional "fumble" on a key transition (a hand almost catches the element)
- Grain texture overlay (3–5% opacity)
- A 1px misalignment in a UI mockup that the eye reads as "real"
- A slightly warm color cast — off-white at `#FAFAF7` not `#FFFFFF`
- Hand-cursor-style motion — slight easing variance, not perfectly mechanical
- A monospace timestamp in the corner, set in Geist Mono at 11px, opacity 60%
- A subtle paper texture on a card that should be a card
- A single imperfection in an otherwise perfect grid (the "broken window" that proves the rest is intentional)

**The rule** — imperfection must be intentional and subtle. If the viewer notices it as an error, it failed. If it makes them feel "this was made by a person with taste", it worked. Apple does this in product shots (slight color cast, controlled highlights). Buck does it in identity work (hand-drawn elements on a clean grid). Wabi-sabi. The wabi-sabi is the point — it is what separates a video that 10,000 people can make from a video that one person with taste can make.

## Anti-patterns (forbidden across all stages)

These patterns are banned because they are the visual fingerprint of "an LLM made this":

- "AI-generated gradient mesh" as a hero background — too generic, too 2023
- Floating stock-photo backgrounds behind a product mockup
- Meta-labels like "INTRO" / "CHAPTER 1" / "FEATURES" / "01" on screen
- 6+ word headlines on screen at once
- Inter, Roboto, Open Sans, or Lato as the primary display font
- Linear easing on anything that moves
- Static scenes over 4 seconds
- Voiceover that opens with "In this video, we'll explore..."
- Generic Lottie-style animations (rebound, flip, rotate in)
- Emoji in any UI mockup, title, or screen
- The 🚀 or ✨ in any title slide
- Templates that look like Notion or Pitch templates
- A "Subscribe" / "Like" CTA on a brand video
- Background music that is louder than the voiceover
- The "transition library" effect — every cut uses a different transition; choose one and own it

## Resources

### references/
- `brief-template.md` — the 8-question intake
- `motion-vocabulary.md` — the 20 motion verbs to use in storyboards
- `typography-stack.md` — display + mono pairings per tone
- `color-palettes.md` — 12 ready palettes (Apple Silver, Google Primary, Stripe Night, etc.)
- `curiosity-loop-mechanics.md` — the 6 neuromarketing drivers in detail
- `imperfection-playbook.md` — the controlled-imperfection vocabulary
- `remotion-patterns.md` — the canonical Remotion techniques for this build

### assets/
- `storyboard-template.md` — the blank storyboard
- `review-checklist.md` — the 9-pass review checklist
- `remotion-scaffold.md` — the minimum viable Remotion project layout

## Gotchas

- **Frame 0 is the cold open.** Apple/Google almost never start at "the beginning". They start at the peak. Skip the setup; start at the hook. The first 3 seconds decide whether the viewer stays.
- **The product is the hero.** If the product is not visually on screen for at least 60% of the runtime, the video is about the wrong thing.
- **The closer is shorter than the open.** The first beat (5s) sets the question. The closer (3s) answers it. Imbalance is intentional.
- **The squint test never lies.** If it does not work squinted, it does not work.
- **Render stills before MP4.** 10× faster iteration. Encode only after the frames are right.
- **The first scene's motion direction sets the entire video's tempo.** Choose it deliberately. A slow scale-in sets a cinematic tone; a quick wipe sets an urgent tone; a hard cut sets a defiant tone. There is no neutral choice.
- **The pattern interrupt count is a feature, not a bug.** A 30-second video with 5 pattern interrupts is a video that holds attention. A 30-second video with 2 is a video that loses half the audience by second 12.
- **Imperfection is a feature, not a bug.** A perfectly clean video is forgettable. The 1px misalignment is what makes the rest look intentional.
- **The single outcome is the only thing that matters.** Every cut, every transition, every word on screen is in service of the single outcome. If a scene does not serve it, it is cut. This is the only rule that is never negotiable.
