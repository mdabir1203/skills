# Typography Stack

Display + mono (or display + text) pairings per tone. Self-host all fonts via `staticFile()`. Use at most two families per video.

## Banned as primary display

- **Inter** — the LLM default. Banned.
- **Roboto** — the Android default. Banned for keynote work.
- **Open Sans** — the corporate default. Banned.
- **Lato** — the slide-template default. Banned.
- **Montserrat** — the Behance default. Banned.
- **Poppins** — the Medium default. Banned.

## Heroic / Apple-style (cinematic minimalism)

| Display | Mono / text | Vibe |
|---|---|---|
| **Söhne** | Söhne Mono | Premium product film. The Apple aesthetic. Expensive licensing. |
| **Söhne Breit** | Söhne Mono | When the headline needs weight. Half-width variant of Söhne. |
| **Tiempos Headline** | Söhne Mono | Editorial feel. The "we are not a tech company, we are a publication" move. |
| **Editorial New** | ABC Diatype Mono | Pentagram, Bloomberg Businessweek. Magazine-grade. |
| **GT Sectra** | Söhne Mono | When you need a serif with cinematic weight. |

For free alternatives: **General Sans** (display) + **JetBrains Mono** or **Geist Mono**.

## Optimistic / Google I/O-style (friendly precision)

| Display | Mono / text | Vibe |
|---|---|---|
| **Geist Sans** | Geist Mono | Vercel. The "developer but make it premium" move. Free, well-designed. |
| **Cabinet Grotesk** | JetBrains Mono | Indian Type Foundry. Friendly with sharp edges. The "modern productivity" move. |
| **Satoshi** | JetBrains Mono | Indian Type Foundry. Geometric, slightly playful. The "B2B but fun" move. |
| **Outfit** | Space Mono | When you need a free Google Font that does not look like a Google Font. |
| **General Sans** | Geist Mono | Free, Fontshare. Best free display + mono pair. |

## Cinematic dark / Silicon Valley editorial

| Display | Mono / text | Vibe |
|---|---|---|
| **Söhne** | Söhne Mono | Same as Apple but with a dark palette and grain. The Stripe Sessions aesthetic. |
| **Geist Sans** | Geist Mono | The Linear / Vercel / Railway default. The "default that does not look default" move. |
| **Satoshi** | JetBrains Mono | The "indie but premium" move. Pitch.com, certain Substack brands. |
| **Neue Haas Grotesk** | Berkeley Mono | When you want Helvetica's authority but newer. |
| **Tobias** | JetBrains Mono | The "fintech confident" move. Used by a few well-funded YC companies. |

## Pairing rules

1. **One display, one mono.** Never two displays. Never two monos.
2. **The mono is for data, numbers, code, captions, timestamps.** Not for body copy.
3. **The display carries the emotional weight.** Big sizes, generous tracking, tight line height.
4. **Display weights: 400, 500, 600.** Skip 700+ unless it is a single-word climax. Black weights look cheap on screen.
5. **Letter-spacing**: -2% to -0.5% on display headlines (tighter at larger sizes). 0% on body. +1% on small mono captions.
6. **Line height**: 0.95–1.05 on display headlines. 1.4–1.5 on body. 1.2 on mono captions.
7. **The display font is on screen for at most 50% of runtime.** Apple keynotes show very little type. The product fills the space.

## Loading

In Remotion, load fonts via `staticFile()` and `delayRender()` to avoid the font pop-in:

```ts
import { staticFile } from 'remotion';
import { delayRender, continueRender } from 'remotion';

const fontReady = delayRender();
// wait for FontFace to load, then:
continueRender(fontReady);
```

Self-host the `.woff2` files in `public/fonts/`. Use the variable font where available — it gives access to all weights in one file.

## Scale

The hero display is set in `clamp()` so it works at any aspect ratio. Common ranges:

- **Hero (1 word)**: `clamp(8rem, 14vw, 18rem)` — Apple scale
- **Hero (3–6 words)**: `clamp(4rem, 7vw, 9rem)` — Google scale
- **Section header**: `clamp(2rem, 3vw, 3.5rem)`
- **Body / label**: `clamp(0.875rem, 1.1vw, 1.125rem)`
- **Mono caption**: `0.6875rem` (11px) fixed, opacity 60%
