# Remotion Scaffold

The minimum viable Remotion project layout for this skill. Use this as the starting point for every build. Customize per project, but the structure stays.

## Bootstrapping

```bash
# Create a new Remotion project
npx create-video@latest my-promo --template blank
cd my-promo

# Install the deps this skill assumes
npm i zod @remotion/zod-types
# Optional: for batch rendering in CI
npm i @remotion/renderer
```

## Directory layout

```
my-promo/
├── package.json
├── remotion.config.ts
├── tsconfig.json
├── public/
│   ├── fonts/
│   │   ├── Geist-Sans.woff2          # Display
│   │   └── Geist-Mono.woff2          # Mono
│   ├── audio/
│   │   ├── track.mp3                 # Music
│   │   └── vo.mp3                    # Voiceover (optional)
│   └── images/
│       └── product.png               # Product shots
├── src/
│   ├── Root.tsx                      # <Composition> registry
│   ├── Promo.tsx                     # The composition
│   ├── schema.ts                     # zod schema for props
│   ├── scenes/
│   │   ├── Hero.tsx
│   │   ├── Feature1.tsx
│   │   ├── Feature2.tsx
│   │   ├── Climax.tsx
│   │   └── Outro.tsx
│   ├── components/
│   │   ├── Headline.tsx              # Display text primitive
│   │   ├── MonoCaption.tsx           # Mono text primitive
│   │   ├── Card.tsx                  # Card primitive (with imperfection)
│   │   └── Grain.tsx                 # 3-5% film grain overlay
│   └── lib/
│       ├── motion.ts                 # Spring + easing presets
│       ├── colors.ts                 # Palette tokens
│       └── beats.ts                  # BEATS_SEC array (detected offline)
```

## src/Root.tsx

```tsx
import { Composition } from 'remotion';
import { Promo, PromoSchema } from './Promo';

export const RemotionRoot = () => (
  <>
    <Composition
      id="Promo"
      component={Promo}
      durationInFrames={90}  // 3s at 30fps; override per project
      fps={30}
      width={1920}
      height={1080}
      schema={PromoSchema}
      defaultProps={{
        productName: 'Acme',
        accentColor: '#635BFF',
        audioPath: 'audio/track.mp3',
        voPath: undefined,
      }}
    />
  </>
);
```

## src/Promo.tsx

```tsx
import { AbsoluteFill, Sequence, Audio, staticFile } from 'remotion';
import { z } from 'zod';
import { Hero } from './scenes/Hero';
import { Feature1 } from './scenes/Feature1';
import { Feature2 } from './scenes/Feature2';
import { Climax } from './scenes/Climax';
import { Outro } from './scenes/Outro';
import { Grain } from './components/Grain';
import { BEATS_SEC } from './lib/beats';

export const PromoSchema = z.object({
  productName: z.string(),
  accentColor: z.string().default('#635BFF'),
  audioPath: z.string().optional(),
  voPath: z.string().optional(),
});

export type PromoProps = z.infer<typeof PromoSchema>;

export const Promo: React.FC<PromoProps> = ({ audioPath, voPath }) => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#0A2540' }}>
      {audioPath && <Audio src={staticFile(audioPath)} volume={0.6} />}
      {voPath && <Audio src={staticFile(voPath)} volume={1} />}

      <Sequence from={0} durationInFrames={45}><Hero /></Sequence>
      <Sequence from={45} durationInFrames={60}><Feature1 /></Sequence>
      <Sequence from={105} durationInFrames={60}><Feature2 /></Sequence>
      <Sequence from={165} durationInFrames={75}><Climax /></Sequence>
      <Sequence from={240} durationInFrames={45}><Outro /></Sequence>

      <Grain opacity={0.04} />
    </AbsoluteFill>
  );
};
```

## src/lib/motion.ts

```ts
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

export const scaleIn = (frame: number, fps: number, config = SPRING_HERO) =>
  spring({ frame, fps, config });
```

## src/lib/colors.ts

```ts
export const StripeNight = {
  bg: '#0A2540',
  text: '#FFFFFF',
  accent: '#635BFF',
  secondary: '#425466',
} as const;

export const AppleSilver = {
  bg: '#F5F5F7',
  text: '#1D1D1F',
  accent: '#0A84FF',
  secondary: '#86868B',
} as const;

// Pick one palette per project. Never mix.
```

## src/lib/beats.ts

```ts
// Beats detected OFFLINE with web-audio-beat-detector or aubio.
// NEVER analyze audio at render time.
export const BEATS_SEC: number[] = [
  0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0,
  // ... up to the music length
];

export const isOnBeat = (t: number, threshold = 0.033) =>
  BEATS_SEC.some((b) => Math.abs(t - b) < threshold);
```

## src/components/Grain.tsx

The signature imperfection. A 60-frame loop of Perlin noise, multiply-blended at 3–5% opacity.

```tsx
import { AbsoluteFill, useCurrentFrame, useVideoConfig, random } from 'remotion';

export const Grain: React.FC<{ opacity?: number }> = ({ opacity = 0.04 }) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  // Stable per-frame noise
  const cells = [];
  for (let y = 0; y < height; y += 4) {
    for (let x = 0; x < width; x += 4) {
      const v = random(`grain-${frame}-${x}-${y}`);
      cells.push({ x, y, opacity: v * 0.5 + 0.25 });
    }
  }
  return (
    <AbsoluteFill style={{ mixBlendMode: 'multiply', opacity, pointerEvents: 'none' }}>
      {cells.map((c, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: c.x,
            top: c.y,
            width: 4,
            height: 4,
            backgroundColor: `rgba(255,255,255,${c.opacity})`,
          }}
        />
      ))}
    </AbsoluteFill>
  );
};
```

Note: the cell loop is a placeholder; a production version would use a pre-rendered grain PNG looped with `useCurrentFrame() % LOOP_LENGTH` and rendered via `<Img>`. See `references/remotion-patterns.md` for the canonical grain implementation.

## src/scenes/Hero.tsx (skeleton)

```tsx
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate } from 'remotion';
import { SPRING_HERO, EASE_OUT } from '../lib/motion';
import { Headline } from '../components/Headline';

export const Hero: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width } = useVideoConfig();

  const scale = spring({ frame, fps, config: SPRING_HERO });
  const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' });
  const x = interpolate(frame, [0, 45], [width * 0.15, width * 0.3], {
    extrapolateRight: 'clamp',
    easing: EASE_OUT,
  });

  return (
    <AbsoluteFill style={{ backgroundColor: '#0A2540' }}>
      <div style={{ transform: `translate(${x}px, 0) scale(${scale})`, opacity }}>
        <Headline>What if your inbox could reply itself?</Headline>
      </div>
    </AbsoluteFill>
  );
};
```

## Build, preview, render

```bash
# Preview in the browser-based Studio
npx remotion studio

# Render stills first (the verify loop)
npx remotion still Promo out/f-start.png --frame=0
npx remotion still Promo out/f-mid.png --frame=120
npx remotion still Promo out/f-end.png --frame=284  # durationInFrames - 1

# Inspect the stills. Only after they pass:

# Encode the full video
npx remotion render Promo out/promo.mp4

# Pass props (e.g. different product name)
npx remotion render Promo out/acme.mp4 --props='{"productName":"Acme"}'

# (Optional) Render a GIF for the README
npx remotion render Promo out/demo.gif --codec=gif
```

## Customization per project

For every new project:
1. Update `src/Root.tsx` — change `durationInFrames`, `width`, `height`, `defaultProps`.
2. Update `src/Promo.tsx` — change the `<Sequence>` blocks to match the storyboard.
3. Add new scenes in `src/scenes/`. Each scene is a self-contained component.
4. Update `src/lib/beats.ts` — paste the new `BEATS_SEC` array from the offline beat detector.
5. Update `src/lib/colors.ts` — pick the palette from `references/color-palettes.md`.
6. Add the audio file to `public/audio/`.
7. Run the verify loop (stills first, then MP4).

The structure stays. The story changes.
