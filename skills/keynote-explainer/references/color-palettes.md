# Color Palettes

Twelve ready palettes, four per reference world. Pick one. The palette reinforces the tone — do not mix palettes across a single video.

## Apple (hero-shot minimalism)

### Apple Silver
- **Background**: `#F5F5F7` (warm off-white)
- **Primary text**: `#1D1D1F` (warm near-black)
- **Accent**: `#0A84FF` (Apple system blue)
- **Secondary**: `#86868B` (mid gray)
- **Use**: The classic Apple keynote. Product shots on warm off-white. Subtle, premium, calm.

### Apple Midnight
- **Background**: `#000000` (true black)
- **Primary text**: `#F5F5F7` (warm off-white)
- **Accent**: `#0A84FF` (Apple system blue)
- **Secondary**: `#1D1D1F` (warm dark)
- **Use**: The "Shot on iPhone" night aesthetic. Cinematic product reveals. Emotional.

### Apple Pro
- **Background**: `#1B1B1D` (warm dark)
- **Primary text**: `#F5F5F7`
- **Accent**: `#BF5AF2` (Apple system purple)
- **Secondary**: `#48484A`
- **Use**: Mac Pro, Pro Display. The "tool for serious people" move. Confident without being loud.

### Apple Gold
- **Background**: `#FAF7F2` (warm cream)
- **Primary text**: `#1D1D1F`
- **Accent**: `#A88B5C` (muted gold)
- **Secondary**: `#D4C5A9` (warm beige)
- **Use**: Apple Watch Edition. The "luxury but not ostentatious" move. Warm, intimate.

## Google I/O (data-precise optimism)

### Google Primary
- **Background**: `#FFFFFF` (pure white)
- **Primary text**: `#202124` (Google gray)
- **Accents**: `#4285F4` (blue), `#EA4335` (red), `#FBBC04` (yellow), `#34A853` (green)
- **Use**: The classic Google. Pick ONE accent per scene, not all four. The four-color rainbow is for branding, not UI.

### Google Workspace
- **Background**: `#F8F9FA` (Google surface)
- **Primary text**: `#202124`
- **Accent**: `#1A73E8` (Workspace blue)
- **Secondary**: `#5F6368` (mid gray)
- **Use**: Productivity feel. Clean, friendly, accessible. Default for B2B.

### Google Material You
- **Background**: `#FFFBFE` (Material You base)
- **Primary text**: `#1C1B1F`
- **Accent**: `#6750A4` (Material You purple)
- **Secondary**: `#79747E`
- **Use**: Android 12+. The "personal but professional" move. Warm, modern.

### Google AI
- **Background**: `#0E1116` (Google AI dark)
- **Primary text**: `#E8EAED`
- **Accent**: `#8AB4F8` (Google AI blue)
- **Secondary**: `#3C4043`
- **Use**: Google AI / Bard / Gemini. The "intelligence, but make it accessible" move. Cinematic dark.

## Silicon Valley editorial (cinematic dark)

### Stripe Night
- **Background**: `#0A2540` (Stripe deep blue)
- **Primary text**: `#FFFFFF`
- **Accent**: `#635BFF` (Stripe purple)
- **Secondary**: `#425466` (mid blue)
- **Use**: The Stripe Sessions aesthetic. Premium fintech. The "default" for cinematic dark.

### Linear
- **Background**: `#08090A` (Linear near-black)
- **Primary text**: `#F7F8F8` (warm white)
- **Accent**: `#5E6AD2` (Linear indigo)
- **Secondary**: `#62666E` (mid gray)
- **Use**: The Linear product film aesthetic. Precise, minimal, opinionated.

### Vercel
- **Background**: `#000000` (true black)
- **Primary text**: `#FFFFFF`
- **Accent**: `#FFFFFF` (mono — Vercel often uses just white on black)
- **Secondary**: `#666666` (mid gray)
- **Use**: Maximum minimalism. When the product is the only color. Confident.

### Railway
- **Background**: `#1B1B1B` (warm dark)
- **Primary text**: `#FFFFFF`
- **Accent**: `#BCDF38` (Railway purple-pink — actually a magenta)
- **Secondary**: `#3A3A3A`
- **Use**: Railway's product films. Warm dark with a single pop. Developer-friendly, opinionated.

## Rules

1. **Pick one palette per video.** Mixing palettes is a recipe for "looks like a template".
2. **Use 1–2 dominant colors + black/white.** The 5-color Google rainbow is for branding, not UI.
3. **The accent is the rare color.** If it appears on more than 30% of the screen at any moment, it is no longer an accent — it is the background.
4. **Test in grayscale.** If the video does not work in grayscale, the palette is doing too much work. The composition should be readable without color.
5. **Off-white is warmer than white.** Use `#F5F5F7` or `#FAF7F2` instead of `#FFFFFF` for the "premium" feel. Pure white reads as "screen", warm off-white reads as "paper".
6. **Dark backgrounds are warm.** Use `#0A2540` not `#000033`. Use `#08090A` not `#000000` for the "premium dark" feel. Pure black is fine for product reveals; warm dark for atmosphere.

## Adding grain

Every dark palette benefits from a 3–5% film grain overlay. This is one of the imperfection-as-signature moves that signals "made by a person with taste". Generate the grain with a 60-frame loop of Perlin noise, multiply-blended at 5% opacity.

## Color accessibility

Check contrast for all text. WCAG AA minimum:
- Normal text: 4.5:1 contrast
- Large text (18pt+ or 14pt+ bold): 3:1 contrast
- UI components: 3:1 contrast

The Apple Silver palette passes. The Linear palette passes. The Google AI palette passes. If the palette does not pass, change the text color, not the palette.
