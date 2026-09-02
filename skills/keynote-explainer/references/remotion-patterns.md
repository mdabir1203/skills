# Remotion Patterns

The canonical Remotion techniques for this build. Use these patterns as the default. Deviate only with a reason. The build should feel like one voice, not a collection of techniques.

This file assumes familiarity with Remotion. If you are new to Remotion, read the iart-ai `remotion-video` skill first — it is the canonical reference for the framework itself.

## Project structure

```
project/
├── package.json
├── remotion.config.ts
├── tsconfig.json
├── public/
│   ├── fonts/             # Self-hosted .woff2
│   ├── audio/             # Music + VO mp3
│   └── images/            # Product shots, abstract backgrounds
├── src/
│   ├── Root.tsx           # <Composition> registry
│   ├── Promo.tsx          # The composition (Series of scenes)
│   ├── schema.ts          # zod schema for props
│   ├── scenes/
│   │   ├── Hero.tsx
│   │   ├── Feature1.tsx
│   │   ├── ...
│   │   └── Outro.tsx
│   ├── components/        # Reusable: Card, Button, Headline, Grain
│   └── lib/
│       ├── motion.ts      # spring config presets, easing curves
│       └── colors.ts      # Palette tokens
```

The composition is a flat list of `<Sequence>` blocks. Each scene is a self-contained component. Shared atoms (`<Headline>`, `<Card>`, `<Grain>`) live in `components/`. The build reads top-to-bottom like a script.

## Frame-driven motion (the only motion)

Every motion is derived from `useCurrentFrame()`. Never from `setState`, `requestAnimationFrame`, `Date.now()`, or `Math.random()`. For stable per-frame randomness, use `random(seed)` from Remotion.

```tsx
import { useCurrentFrame, useVideoConfig, interpolate, spring, random } from 'remotion';

export const Hero = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Spring entrance
  const scale = spring({ frame, fps, config: { damping: 14, mass: 1, stiffness: 100 } });

  // Fade up over first 30 frames, then stay
  const opacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: 'clamp' });

  // Drift across the screen
  const x = interpolate(frame, [0, 90], [width * 0.1, width * 0.5], {
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.215, 0.61, 0.355, 1),
  });

  // Stable per-frame noise
  const noise = random('hero') * 0.02;

  return (
    <AbsoluteFill style={{ backgroundColor: '#0A2540' }}>
      <div style={{ transform: `translate(${x}px, 0) scale(${scale + noise})`, opacity }} />
    </AbsoluteFill>
  );
};
```

`interpolate` always clamps unless overshoot is intentional. Default extrapolation is linear, which produces opacity > 1 or negative values. Always clamp.

## Scheduling (Sequence + Series)

`<Sequence>` shifts time: children see `frame` reset to 0 at the sequence's `from`. `<Series>` lays out back-to-back without manual offset arithmetic.

```tsx
import { Sequence, Series, AbsoluteFill } from 'remotion';

export const Promo = () => (
  <AbsoluteFill style={{ backgroundColor: '#000' }}>
    <Sequence from={0} durationInFrames={45}><Hero /></Sequence>
    <Sequence from={45} durationInFrames={60}><Feature1 /></Sequence>
    <Sequence from={105} durationInFrames={60}><Feature2 /></Sequence>
    {/* ... */}
    <Sequence from={duration - 45} durationInFrames={45}><Outro /></Sequence>
  </AbsoluteFill>
);
```

For overlapping scenes (crossfades), use `<Series>` with negative `offset`:

```tsx
<Series>
  <Series.Sequence durationInFrames={60}><ShotA /></Series.Sequence>
  <Series.Sequence durationInFrames={60} offset={-15}><ShotB /></Series.Sequence>
</Series>
```

The `-15` means ShotB starts 15 frames before ShotA ends, creating a 15-frame crossfade.

## Composition + zod schema

Every composition has a zod schema. The schema drives the Studio sidebar, the CLI `--props` flag, and the TypeScript types.

```tsx
import { Composition, calculateMetadata } from 'remotion';
import { z } from 'zod';

export const schema = z.object({
  productName: z.string(),
  accentColor: z.string().default('#635BFF'),
  audioPath: z.string().optional(),
  duration: z.enum(['30s', '60s', '90s']).default('30s'),
});

export const Root = () => (
  <Composition
    id="Promo"
    component={Promo}
    durationInFrames={90} // 3 seconds at 30fps
    fps={30}
    width={1920}
    height={1080}
    schema={schema}
    defaultProps={{ productName: 'Acme', accentColor: '#635BFF' }}
  />
);
```

For data-driven duration (e.g. one frame per CSV row), use `calculateMetadata`:

```tsx
export const calculateMetadata: CalculateMetadataFunction<z.infer<typeof schema>> = async ({ props }) => {
  const durationInFrames = props.rows.length * 60; // 60 frames per row
  return { durationInFrames };
};
```

## Audio + beat sync

Beats are detected OFFLINE (with `web-audio-beat-detector` or aubio) and baked into props as a `BEATS_SEC: number[]` array. Never analyze audio at render time — the headless renderer has no realtime audio clock.

```tsx
import { Audio, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';

const BEATS_SEC = [0.5, 1.0, 1.5, 2.0, 2.5];

export const Music = ({ children }: { children: React.ReactNode }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = frame / fps;
  const onBeat = BEATS_SEC.some((b) => Math.abs(t - b) < 1 / fps);

  return (
    <>
      <Audio src={staticFile('audio/track.mp3')} volume={0.6} />
      <div style={{ transform: `scale(${onBeat ? 1.04 : 1})` }}>{children}</div>
    </>
  );
};
```

For music that drives the entire video, the storyboard's scene timing should be derived from the beat array, not arbitrary frame counts. Every transition should land on a beat.

## Fonts + assets (staticFile + delayRender)

Fonts and images load asynchronously. Use `staticFile()` for paths inside `public/`, and `delayRender()` / `continueRender()` to wait for async loads. Otherwise fonts pop in mid-render.

```tsx
import { useEffect, useState } from 'react';
import { staticFile, delayRender, continueRender } from 'remotion';

const [ready, setReady] = useState(false);
const [handle] = useState(() => delayRender());

useEffect(() => {
  const font = new FontFace('Geist', `url(${staticFile('fonts/Geist-Sans.woff2')})`);
  font.load().then(() => {
    document.fonts.add(font);
    continueRender(handle);
    setReady(true);
  });
}, [handle]);
```

For images, use `<Img src={staticFile('images/product.png')} />` from Remotion, which handles the async load internally.

## Spring + interpolate presets (motion.ts)

Centralize the motion vocabulary. Every scene imports from `motion.ts`, never invents its own curves.

```ts
// lib/motion.ts
import { spring, interpolate, Easing } from 'remotion';
import type { SpringConfig } from 'remotion';

export const SPRING_HERO: SpringConfig = { damping: 14, mass: 1, stiffness: 100 };
export const SPRING_GENTLE: SpringConfig = { damping: 20, mass: 1, stiffness: 80 };
export const SPRING_SNAPPY: SpringConfig = { damping: 12, mass: 0.8, stiffness: 200 };

export const EASE_OUT = Easing.bezier(0.215, 0.61, 0.355, 1);
export const EASE_IN_OUT = Easing.bezier(0.645, 0.045, 0.355, 1);

export const fadeUp = (frame: number, start = 0, duration = 30) => ({
  opacity: interpolate(frame, [start, start + duration], [0, 1], { extrapolateRight: 'clamp' }),
  translateY: interpolate(frame, [start, start + duration], [12, 0], { extrapolateRight: 'clamp', easing: EASE_OUT }),
});
```

Use these presets in every scene. The build reads as one voice.

## The verify loop (the most important pattern)

Render stills first. Inspect them. Only then encode the MP4. This is the difference between a video that ships and a video that does not.

```bash
# 1. Frame-exact stills at start, mid, end
npx remotion still Promo out/f-start.png --frame=0
npx remotion still Promo out/f-mid.png --frame=45
npx remotion still Promo out/f-end.png --frame=89

# 2. Inspect each PNG:
#    - Fidelity: matches brief, numbers/text correct
#    - Artifacts: text overflow, off-canvas, clipped safe area, missing font, wrong data binding

# 3. Only after stills pass, encode the full video
npx remotion render Promo out/promo.mp4 --props='{"productName":"Acme"}'

# Optional: render a GIF for the README/social
npx remotion render Promo out/demo.gif --codec=gif
```

Use `npx remotion compositions` to read each composition's `durationInFrames` and pick the end frame.

For data-driven / batch: verify ONE representative props set via stills before batch-rendering all rows. Catch a layout bug once, not N times.

## Gotchas (the canonical list)

- **Never `Math.random()`, `Date.now()`, timers.** They break determinism. CI re-renders produce different output.
- **Load fonts via `staticFile()` and `delayRender()`/`continueRender()`.** Otherwise fonts pop in mid-render.
- **Default `interpolate` extrapolates — clamp it.** Or you get opacity > 1 and negative values.
- **`useCurrentFrame` inside a `<Sequence>` is local** (starts at 0). Use `useVideoConfig().durationInFrames` for absolute timing.
- **Inline `<defs>` in SVGs are scoped to the SVG element.** Don't share `<defs>` between multiple inline SVGs in the same frame.
- **No backticks in `// comments`** if the file is processed by esbuild's printer — esbuild can mis-parse them as template literals and produce cryptic `Expected ";" but found "r"` build errors.
- **`delayRender` returns a handle.** Always store it in state and pass the same handle to `continueRender`. Calling `delayRender` twice without continuing the first is a leak.
- **`<Img>` from Remotion, not `<img>`.** `<Img>` ensures the image is loaded before the frame renders; `<img>` does not.
- **The `fps` prop drives all timing math.** Spring configs assume 30fps by default. At 60fps, divide by 2 or use a `fps`-relative spring config.

## Deliverable contract

- A Remotion project with the composition registered (`<Composition>` + zod `schema` + `defaultProps`)
- All motion frame-driven (no timers, no `Date.now()`, no `Math.random()`)
- Deliverable = the rendered `out/*.mp4` (plus the project so the user can re-render with new props/data)
- Duration data-dependent? Compute in `calculateMetadata`, not by hand.
- The full verify loop has been run: stills checked at frame 0, mid, last; MP4 encoded; (optional) GIF rendered for the README.
