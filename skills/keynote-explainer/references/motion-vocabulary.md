# Motion Vocabulary

The 20 motion verbs to use in storyboards. Pick one per scene. Do not invent new ones — the vocabulary exists so the storyboard is unambiguous and the build is fast.

## The 20 verbs

### Scale
1. **Spring in** — element arrives with overshoot, then settles. Damping 14, stiffness 100. The default entrance for hero elements.
2. **Scale up from center** — element grows from 0.5 → 1.0 over 30–45 frames. Calm, cinematic. Use for product reveals.
3. **Scale down to detail** — element shrinks from 1.0 → 0.7 to make room for a callout. The "zoom into the detail" move.
4. **Breathe** — element scales 1.0 → 1.02 → 1.0 in a 60-frame loop. The "alive" indicator. Use sparingly on one element per scene.

### Translate
5. **Glide** — element slides in from off-screen at constant velocity. Smooth ease-out at the end. The default for secondary elements.
6. **Drift** — slow horizontal/vertical drift across a static frame. The "atmospheric" move. Use for backgrounds.
7. **Snap** — element jumps to position in 1–2 frames. Hard cut disguised as motion. Use for pattern interrupts.
8. **Track** — camera pans to follow a moving element. Subtle, 0.05–0.1 normalized pan. Use for hero moments.

### Rotate
9. **Tilt in** — 3D rotation from y-axis: 15° → 0°. The "card arrives" move. Use for product mockups.
10. **Counter-rotate** — two elements rotating in opposite directions. The "system at work" move. Buck-style.
11. **Spin reveal** — element rotates 360° while scaling 0 → 1. The "logo moment". Use once per video, max.

### Opacity
12. **Fade up** — opacity 0 → 1 + translateY 12px → 0. The default for text. Almost always the right choice.
13. **Fade through black** — element fades to 0, then new element fades in. The "memory" transition. Use for time skips.
14. **Wipe reveal** — element revealed by a moving gradient/line. The "elegant" transition. Use for product shots.

### Distort
15. **Blur to focus** — element starts at 40px blur, snaps to 0 in 8 frames. The "wake up" move. Use for pattern interrupts.
16. **Glitch** — element offsets RGB channels for 2–3 frames, then resolves. The "tech" move. Use sparingly; overused = cheap.

### Sequence
17. **Stagger** — group of elements arrive in sequence with 2–4 frame offsets. The "list" move. Use for feature lists.
18. **Cascade** — staggered arrival with decreasing offset (12, 8, 4, 0). The "buildup" move. Use for climaxes.

### Audio-driven
19. **Beat pulse** — element scales 1.0 → 1.06 on detected beats. The "music video" move. Use for transitions.
20. **Beat fade** — element opacity dips on beat, snaps back. The "subtle sync" move. Use for ambient elements.

## Combinations

The 20 verbs combine into patterns. The most common winning patterns:

- **Hero reveal**: Scale up from center + Tilt in + Fade up (on the label)
- **Feature beat**: Glide + Stagger + Beat pulse
- **Climax**: Cascade + Counter-rotate + Beat pulse
- **Pattern interrupt**: Snap + Blur to focus
- **Outro**: Fade up + Counter-rotate (logo + wordmark)

## Anti-verbs (do not use these)

- **Bounce** (the iOS icon default — too 2014)
- **Flip in** (the Material default — too 2018)
- **Rotate in** (the Lottie default — too 2020)
- **Pulse** (the loading-spinner default — too 2016)
- **Wobble** (the notification default — too 2019)

If the storyboard says "fade in", that is a description of what happens when nothing happens. Use one of the 20 verbs. If none fits, the scene is broken.

## Easing

All non-snap verbs use one of:
- **Ease-out cubic** (`[0.215, 0.61, 0.355, 1]`) — the default. Smooth, premium.
- **Spring** (`{damping: 14, mass: 1, stiffness: 100}`) — for elements that need to feel alive. Hero entrances.
- **Ease-in-out cubic** (`[0.645, 0.045, 0.355, 1]`) — for elements leaving the frame. Smoother than ease-in.

**Linear is banned.** It is the visual fingerprint of "this was made by code with no taste". Even a 2-frame transition uses an ease curve.
