# keynote-explainer

Build motion video explainers in the visual language of Apple keynotes, Google I/O launches, and the highest-end Silicon Valley product reveals. The output is a Remotion-rendered MP4. The discipline is editorial.

> **Before using this skill, read [`PERSONALIZATION.md`](./PERSONALIZATION.md).** It walks you through setting the 9 defaults (palette, fonts, tone, frame, length, brand) so the agent does not ask the same questions every run.

## What it does

When you ask for a keynote-style motion video, the skill runs a 5-stage pipeline:

1. **Brief** — 8 questions to lock the product, audience, single outcome, length, frame, reference world, tone, and constraints.
2. **Concept** — a 3-4 sentence hook + arc + closer, with at least one curiosity loop opened in the first 3 seconds and closed in the last 3.
3. **Storyboard** — scene-by-scene direction with motion verbs, on-screen text, music cues, neuromarketing driver per scene, pattern interrupt per boundary.
4. **Build** — a Remotion project with frame-driven motion, beat-synced audio, zod-typed props, and a 5-stage verify loop (stills first, MP4 only after).
5. **Review** — 9 passes of world-class review with imperfection-as-signature baked in.

The skill is opinionated. It bans Inter, Roboto, and Open Sans as display fonts. It bans linear easing. It bans 6+ words on screen. It bans generic gradient-mesh backgrounds. It bans the AI slop that makes a video look like an LLM made it.

## When to use it

Use it when:
- You ask for a *"keynote-style motion video"*, *"Apple/Google/Silicon Valley product reveal"*, *"cinematic Remotion explainer"*, *"world-class launch video"*, or *"premium product motion graphics"*
- You want to *"build a video like an Apple keynote"*

Do not use it for:
- Short-form vertical social clips (TikTok, Reels, Shorts — use a different motion skill)
- Screencasts, UI walkthroughs, or talking-head recordings
- Generic corporate videos or template-driven marketing

## What's in the box

```
keynote-explainer/
â”œâ”€â”€ SKILL.md                           # entry point (read first)
â”œâ”€â”€ PERSONALIZATION.md                 # 5-minute setup (read second)
â”œâ”€â”€ README.md                          # this file
â”œâ”€â”€ CHANGELOG.md                       # version history
â”œâ”€â”€ references/
â”‚   â”œâ”€â”€ brief-template.md             # 8-question intake
â”‚   â”œâ”€â”€ motion-vocabulary.md          # 20 motion verbs + anti-verbs
â”‚   â”œâ”€â”€ typography-stack.md           # font pairings per tone
â”‚   â”œâ”€â”€ color-palettes.md             # 12 ready palettes
â”‚   â”œâ”€â”€ curiosity-loop-mechanics.md   # 6 neuromarketing drivers
â”‚   â”œâ”€â”€ imperfection-playbook.md      # 20 controlled-imperfection moves
â”‚   â””â”€â”€ remotion-patterns.md          # the canonical Remotion techniques
â””â”€â”€ assets/
    â”œâ”€â”€ storyboard-template.md         # per-scene detail + gates
    â”œâ”€â”€ review-checklist.md            # 9-pass world-class review
    â””â”€â”€ remotion-scaffold.md           # minimum viable project layout
```

## Quick start

1. **Personalize** â€” open `PERSONALIZATION.md` and set the 9 defaults.
2. **Install** â€” drop the `keynote-explainer/` folder into your AI agent's skills directory.
3. **Trigger** â€” say one of:
   - *"build me a 30s product reveal like an Apple keynote for X"*
   - *"make a Google I/O launch video for Y"*
   - *"cinematic explainer in Remotion for Z"*
   - *"world-class motion video for W"*
4. **Brief** â€” the skill asks 8 questions. Answer them.
5. **Concept + storyboard** â€” the skill drafts both. You approve.
6. **Build** â€” the skill scaffolds a Remotion project and renders stills first.
7. **Review** â€” 9 passes with world-class taste. Imperfection as signature.

## The three reference worlds

The skill channels three reference points. Pick one per video. Never blend.

- **Apple** (hero-shot minimalism) — single subject, cinematic slow reveals, perfect typography, premium materials, emotional score. WWDC, iPhone launches.
- **Google I/O** (data-precise optimism) — modular feature reveals, technical accuracy, generous typography, friendly/accessible. Pixel launches, Workspace updates.
- **Silicon Valley editorial** (cinematic dark) — gradient meshes, glassmorphism, subtle particles, monospace accents, slight film grain. Stripe Sessions, Linear, Vercel.

## The neuromarketing spine

The skill leads with six curiosity-loop drivers. Every scene is tagged with at least one.

1. **Open loop** (Zeigarnik) — plant a question in the first 3 seconds; do not resolve until the climax.
2. **Pattern interrupt** — a change in motion, color, scale, or audio that resets attention every 5-7 seconds.
3. **Mystery gap** (Schwartz) — hint at something deeper than what is shown; the viewer's imagination does the work.
4. **Specificity** — "12 minutes 34 seconds" beats "fast". Concrete > clever.
5. **Contrast** — before/after, expected/unexpected, silent/loud. The brain responds to deltas.
6. **Endowed progress** — frame the viewer as already in motion. "Three things changed" > "Three things to change".

## The anti-pattern list

Banned across all stages because they are the visual fingerprint of an LLM-made video:

- Inter, Roboto, Open Sans, Lato as display font
- Linear easing on anything that moves
- "AI-generated gradient mesh" as a hero background
- Floating stock-photo backgrounds behind a product
- Meta-labels like "INTRO" / "CHAPTER 1" / "FEATURES" on screen
- 6+ word headlines on screen
- Static scenes over 4 seconds
- Lottie-style rebounds, flips, rotate-ins
- Emoji in UI mockups or titles
- Generic openers ("In this video, we'll explore...")
- Background music louder than the voiceover

## Imperfection as signature

The bold pass in the review stage. The skill deliberately introduces 1-3 controlled imperfections to signal "this was made by a person with taste, not by a template engine." Examples:

- A hand-drawn underline beneath a key word
- 1-2% off-center composition
- Slight warm color cast (off-white at `#F5F5F7`, not pure `#FFFFFF`)
- 3-5% film grain overlay on dark scenes
- A monospace timestamp in the corner at 11px, 60% opacity
- A 1px misalignment in a UI mockup
- A 1-second dead silence beat before the climax

The rule: imperfection must be intentional and subtle. If the viewer notices it as an error, it failed. If it makes them feel "this was made by a person with taste," it worked.

## License

MIT â€” see [`../../LICENSE`](../../LICENSE). Use it, fork it, sell services around it. Just keep the copyright notice.
