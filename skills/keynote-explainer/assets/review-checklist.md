# Review Checklist — 9-Pass World-Class Review

The 9 passes that turn a competent video into a world-class video. Run them in order, fixing between each pass. A world-class review pass usually takes as long as the build.

## Pass 1 — Story fidelity

The single most important pass. If the story is wrong, nothing else matters.

- [ ] Does the video actually answer the brief?
- [ ] Is the open loop closed (in the last 3 seconds)?
- [ ] Is the CTA / single outcome clear and inevitable?
- [ ] Is the product on screen for at least 60% of the runtime?
- [ ] Does the climax land at 70–80% of the runtime?
- [ ] Is the closer shorter than the open?
- [ ] Does the video make the viewer FEEL the single outcome, or just KNOW it?

**Cut anything that does not serve the single outcome. This is non-negotiable.**

## Pass 2 — Timing and rhythm

- [ ] Is each scene the right length? (Within the target scene count for the video length.)
- [ ] Are pattern interrupts landing? (Every 5–7 seconds.)
- [ ] Does the climax land at the right beat? (70–80% mark, on a music beat.)
- [ ] Is the outro too long? (Should be ≤ 3 seconds for a 30s video, ≤ 5 seconds for a 60s video.)
- [ ] Is the first scene setting the tempo correctly? (A slow scale-in sets a cinematic tone; a quick wipe sets an urgent tone; a hard cut sets a defiant tone.)
- [ ] Does the music drive the timing, or do arbitrary cuts fight the music?
- [ ] Are there any "dead" seconds where nothing is happening? (No dead seconds in a 30s video; max 1 dead second in a 60s video, used as the "dead silence beat".)

## Pass 3 — Typography

- [ ] Is the type the right scale? (Use `clamp()` to verify it works at any aspect ratio.)
- [ ] Does the type breathe? (Generous letter-spacing on display, tight on body.)
- [ ] Are line lengths under 60 characters?
- [ ] Is there ever more than 6 words on screen at once?
- [ ] Is the hierarchy obvious in 0.5 seconds?
- [ ] Can you read the type in the first frame you see it?
- [ ] Are the weights correct? (Display 400/500/600, never 700+ unless climax.)
- [ ] Are letter-spacing values right? (-2% to -0.5% on display, 0% on body, +1% on small mono.)
- [ ] Is the mono used for data/numbers/code/captions only, not body copy?
- [ ] Are any anti-typography patterns present? (Inter / Roboto / Open Sans / Lato as display.)

## Pass 4 — Color and contrast

- [ ] Does every scene have a clear focal point?
- [ ] Is the contrast sufficient? (WCAG AA: 4.5:1 normal text, 3:1 large text, 3:1 UI.)
- [ ] Are there any muddy mid-tones?
- [ ] Does the palette reinforce the tone?
- [ ] Are there more than 2 dominant colors anywhere?
- [ ] Is the accent used as an accent (≤ 30% of screen at any moment)?
- [ ] Does the video work in grayscale? (If not, the palette is doing too much work.)
- [ ] Are off-white and warm dark used instead of pure white and pure black where appropriate?
- [ ] Is the grain texture present and at the right opacity (3–5% on dark scenes)?

## Pass 5 — Motion quality

- [ ] Is the easing right? (Apple/Google favor smooth ease-out, never linear.)
- [ ] Are any transitions snapping instead of easing? (If yes, fix.)
- [ ] Are springs tuned? (Damping 14–20, stiffness 80–200 for hero; damping 20+, stiffness 80 for ambient.)
- [ ] Is there any micro-stutter? (Render a few stills at consecutive frames to check.)
- [ ] Does anything feel mechanical? (Add 1–2% easing variance if so.)
- [ ] Is every motion from `motion-vocabulary.md`? (No invented verbs, no anti-verbs.)
- [ ] Do all transitions land on a music beat?
- [ ] Are pattern interrupts visually distinct enough to reset attention?

## Pass 6 — Imperfection as signature (the bold pass)

This pass introduces 1–3 controlled imperfections from `imperfection-playbook.md`.

- [ ] Is there at least one micro-imperfection? (Off-center composition, warm color cast, grain, mono timestamp, etc.)
- [ ] Is there at most one bold imperfection? (Dead silence beat, intentional glitch, signature, etc.)
- [ ] Is each imperfection documented in the storyboard with a justification?
- [ ] Does each imperfection pass the "remove it" test? (Removing it should change the feeling.)
- [ ] Does each imperfection pass the wabi-sabi test? (It should not work in a different video.)
- [ ] Are the imperfections consistent with the tone?
- [ ] Is the rest of the video still impeccable? (Imperfection only works on a flawless base.)

## Pass 7 — The squint test

- [ ] Squint at the rendered video. Is the dominant element obvious in each scene?
- [ ] Is there visual noise competing with the message?
- [ ] Is anything outside the safe area? (10% inset on all sides for 16:9; 15% for 9:16.)
- [ ] Does the dominant element change in a way that supports the story? (Not random.)
- [ ] If you squint harder, does the video still tell a story? (This is the deepest test of composition.)

## Pass 8 — Audio + VO

- [ ] Does the music support the visuals? (Or is it fighting?)
- [ ] Is the VO clean? (No clipping, no room noise, no plosives.)
- [ ] Are the music and VO mixed correctly? (Music at -6 to -10 dB when VO is present; VO is always intelligible.)
- [ ] Are there any clipping or ducking issues?
- [ ] Is the lip sync frame-accurate? (If VO is present.)
- [ ] Is the music appropriately licensed?
- [ ] Are there any silent frames that should not be silent?
- [ ] Is the music tempo consistent with the video tempo? (A 120 BPM track for a calm video feels wrong.)

## Pass 9 — Final polish

The difference between "good" and "world-class" usually lives in this pass.

- [ ] Add grain if needed (3–5% on dark scenes, 0% on light).
- [ ] Add subtle particles if needed (very subtle — 0.5% opacity max).
- [ ] Final color pass (slight warm push on cinematic, slight cool on tech).
- [ ] One more pass for things missed.
- [ ] Render final stills at frame 0, mid, last — re-check.
- [ ] Render final MP4 with the same props that will ship (not just defaultProps).
- [ ] (Optional) Render final GIF for the README.
- [ ] Verify the deliverable contract: the project + the rendered MP4.

## Sign-off

- [ ] All 9 passes complete
- [ ] All anti-patterns absent
- [ ] Final stills verified
- [ ] Final MP4 encoded and plays
- [ ] (Optional) Final GIF rendered
- [ ] Hand-off to delivery

**Shipped by / date**:
