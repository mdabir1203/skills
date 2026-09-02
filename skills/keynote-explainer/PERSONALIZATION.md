# Personalization Guide

This skill ships generic. Before you run it on a real brief, set the defaults so the agent does not ask you the same six questions every time. Takes 5 minutes.

## The 9 placeholders to set

Open each file. Find the placeholder. Replace with your value. If a placeholder does not apply, delete the line.

### 1. `{{DEFAULT_PALETTE}}`
The color palette to use when the brief does not pick one. From `references/color-palettes.md`.

**Default to set in:** `SKILL.md` (Stage 1 question 6, fallback line) and `assets/remotion-scaffold.md` (`src/lib/colors.ts`).

**Example:** `Stripe Night` (cinematic dark) or `Apple Silver` (premium minimal) or `Linear` (precise minimal).

### 2. `{{DEFAULT_DISPLAY_FONT}}`
The display font. Self-host the `.woff2` in `public/fonts/`. See `references/typography-stack.md` for pairings.

**Default to set in:** `assets/remotion-scaffold.md` (`src/Root.tsx` and the scene skeletons).

**Example:** `Geist Sans` (free, premium feel) or `Söhne` (paid, Apple-adjacent).

### 3. `{{DEFAULT_MONO_FONT}}`
The mono font. For data, numbers, code, captions, timestamps.

**Default to set in:** same as above.

**Example:** `Geist Mono` or `JetBrains Mono`.

### 4. `{{DEFAULT_TONE}}`
The default tone. One word from this set: **heroic, intimate, urgent, playful, mysterious, calm, defiant**.

**Default to set in:** `SKILL.md` (Stage 1 question 7, fallback line).

**Example:** `intimate` (most B2B) or `heroic` (most consumer launches) or `urgent` (most growth).

### 5. `{{DEFAULT_FRAME}}`
The default frame. `16:9` (1920×1080) for YouTube/web, `9:16` (1080×1920) for vertical, `1:1` (1080×1080) for square, `4:5` (1080×1350) for IG feed.

**Default to set in:** `assets/remotion-scaffold.md` (`width` and `height` in `src/Root.tsx`).

**Example:** `16:9`.

### 6. `{{DEFAULT_LENGTH}}`
The default length in seconds. `30` for product explainers, `60` or `90` for launches, `120` for product films.

**Default to set in:** `assets/remotion-scaffold.md` (`durationInFrames` in `src/Root.tsx`).

**Example:** `30`.

### 7. `{{BRAND_NAME}}`
Your product or company name. Used in the default `productName` prop.

**Default to set in:** `assets/remotion-scaffold.md` (`defaultProps` in `src/Root.tsx`).

**Example:** `Acme` or `My Product` or your real brand.

### 8. `{{BRAND_TAGLINE}}`
Your one-line tagline. Goes in the open-loop scene of the storyboard.

**Default to set in:** the Hero scene in `assets/remotion-scaffold.md` and any storyboard template you use.

**Example:** `Your one-line value prop here.`

### 9. `{{MUSIC_SOURCE}}`
Where your licensed music lives. Either a folder path inside `public/audio/` or a service you use (Artlist, Epidemic Sound, custom).

**Default to set in:** `assets/remotion-scaffold.md` (the `audioPath` prop default).

**Example:** `audio/track.mp3` (folder) or `Artlist subscription, ID: 12345` (service).

## Quick replace (PowerShell)

```powershell
$root = "path\to\keynote-explainer"
Get-ChildItem $root -Recurse -Include *.md,*.tsx,*.ts | ForEach-Object {
  (Get-Content $_.FullName) `
    -replace '{{DEFAULT_PALETTE}}', 'Stripe Night' `
    -replace '{{DEFAULT_DISPLAY_FONT}}', 'Geist Sans' `
    -replace '{{DEFAULT_MONO_FONT}}', 'Geist Mono' `
    -replace '{{DEFAULT_TONE}}', 'intimate' `
    -replace '{{DEFAULT_FRAME}}', '16:9' `
    -replace '{{DEFAULT_LENGTH}}', '30' `
    -replace '{{BRAND_NAME}}', 'Your Product' `
    -replace '{{BRAND_TAGLINE}}', 'Your one-line value prop.' `
    -replace '{{MUSIC_SOURCE}}', 'audio/track.mp3' |
  Set-Content $_.FullName
}
```

## Quick replace (sed, macOS / Linux / Git Bash)

```bash
find . -type f \( -name "*.md" -o -name "*.tsx" -o -name "*.ts" \) -exec sed -i \
  -e 's|{{DEFAULT_PALETTE}}|Stripe Night|g' \
  -e 's|{{DEFAULT_DISPLAY_FONT}}|Geist Sans|g' \
  -e 's|{{DEFAULT_MONO_FONT}}|Geist Mono|g' \
  -e 's|{{DEFAULT_TONE}}|intimate|g' \
  -e 's|{{DEFAULT_FRAME}}|16:9|g' \
  -e 's|{{DEFAULT_LENGTH}}|30|g' \
  -e 's|{{BRAND_NAME}}|Your Product|g' \
  -e 's|{{BRAND_TAGLINE}}|Your one-line value prop.|g' \
  -e 's|{{MUSIC_SOURCE}}|audio/track.mp3|g' {} +
```

## Verify

After replacing, sanity-check:

```powershell
Get-ChildItem $root -Recurse -Include *.md,*.tsx,*.ts | Select-String '{{'
# should return nothing
```

## Personalization checklist

- [ ] All 9 placeholders set (or removed if not applicable)
- [ ] `Select-String '{{'` returns zero hits
- [ ] The scaffold renders with your default palette and fonts
- [ ] A 30s test render with your brand name looks right
