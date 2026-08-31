# Personalization Guide

This skill ships **generic** so anyone can use it. Before you run the skill, replace the placeholders with your own details. Takes 5 minutes.

## The 7 placeholders to replace

Open each file in the order below. Find every occurrence of the placeholder. Replace with your value.

### 1. `{{USER_NAME}}`
Your full name as it should appear in posts and JSON-LD author blocks.

**Used in:** `SKILL.md`, `references/case-study-template.md`, `references/aeo-checklist.md`, `references/portfolio-monetization.md`, `scripts/emit-schema-ld.mjs`

**Example:** `Mohammad Abir` or `Jane Smith` or `Your Real Name`

### 2. `{{USER_SHORT_NAME}}`
What your friends/colleagues call you. Used in the author bio paragraph.

**Used in:** `references/case-study-template.md`, `references/portfolio-monetization.md`

**Example:** `Abir` or `Jane` or `JD`

### 3. `{{MEDIUM_URL}}`
Your full Medium profile URL. Used as the canonical cross-post target and in the JSON-LD `sameAs` array.

**Used in:** `SKILL.md`, `references/case-study-template.md`, `references/aeo-checklist.md`, `references/platforms.md`, `references/portfolio-monetization.md`, `scripts/emit-schema-ld.mjs`

**Example:** `https://medium.com/@yourhandle` (NOT `medium.com/@yourhandle` — note the protocol)

### 4. `{{PORTFOLIO_URL}}`
Your portfolio site. The "storefront" every Medium post links back to.

**Used in:** `SKILL.md`, `references/case-study-template.md`, `references/aeo-checklist.md`, `references/platforms.md`, `references/portfolio-monetization.md`, `scripts/emit-schema-ld.mjs`

**Example:** `https://yoursite.com` or `https://yourname.dev`

### 5. `{{GITHUB_URL}}`
Your GitHub profile URL. Goes in the JSON-LD author block.

**Used in:** `references/aeo-checklist.md`, `scripts/emit-schema-ld.mjs`

**Example:** `https://github.com/yourhandle`

### 6. `{{PROJECT_NAME}}`
The main project you write case studies about. Goes in the JSON-LD `worksFor` block.

**Used in:** `scripts/emit-schema-ld.mjs`, optionally `references/case-study-template.md`

**Example:** `AbaYa-Track` or `My SaaS App` or `Open-Source Project Name`

### 7. `{{CALENDLY_URL}}` (optional)
Your Calendly or Cal.com booking link. Goes in the portfolio about-page template.

**Used in:** `references/portfolio-monetization.md`

**Example:** `https://calendly.com/yourhandle/30min`

## Three ways to do the replacement

### Option A: Find and replace in your editor (5 minutes)

Open the skill folder in VS Code (or any editor). Use Find & Replace across all files:

| Find | Replace with |
|---|---|
| `{{USER_NAME}}` | Your full name |
| `{{USER_SHORT_NAME}}` | Your short name |
| `{{MEDIUM_URL}}` | Your full Medium URL |
| `{{PORTFOLIO_URL}}` | Your portfolio URL |
| `{{GITHUB_URL}}` | Your GitHub URL |
| `{{PROJECT_NAME}}` | Your main project name |
| `{{CALENDLY_URL}}` | Your booking link |

Most editors let you "Replace All" across a folder. Do it 7 times, save all files, done.

### Option B: PowerShell one-liner (Windows)

```powershell
$root = "path\to\case-study-publisher"
Get-ChildItem $root -Recurse -Include *.md,*.mjs,*.json | ForEach-Object {
  (Get-Content $_.FullName) `
    -replace '{{USER_NAME}}', 'Your Full Name' `
    -replace '{{USER_SHORT_NAME}}', 'YourShort' `
    -replace '{{MEDIUM_URL}}', 'https://medium.com/@yourhandle' `
    -replace '{{PORTFOLIO_URL}}', 'https://yoursite.com' `
    -replace '{{GITHUB_URL}}', 'https://github.com/yourhandle' `
    -replace '{{PROJECT_NAME}}', 'YourProject' `
    -replace '{{CALENDLY_URL}}', 'https://calendly.com/yourhandle/30min' |
  Set-Content $_.FullName
}
```

Adjust the paths and values. Run once. Done.

### Option C: sed one-liner (macOS / Linux / Git Bash)

```bash
find . -type f \( -name "*.md" -o -name "*.mjs" -o -name "*.json" \) -exec sed -i \
  -e 's|{{USER_NAME}}|Your Full Name|g' \
  -e 's|{{USER_SHORT_NAME}}|YourShort|g' \
  -e 's|{{MEDIUM_URL}}|https://medium.com/@yourhandle|g' \
  -e 's|{{PORTFOLIO_URL}}|https://yoursite.com|g' \
  -e 's|{{GITHUB_URL}}|https://github.com/yourhandle|g' \
  -e 's|{{PROJECT_NAME}}|YourProject|g' \
  -e 's|{{CALENDLY_URL}}|https://calendly.com/yourhandle/30min|g' {} +
```

## Verify the replacement

After replacing, sanity-check:

1. **Grep for leftover placeholders:**
   ```bash
   grep -r "{{" .   # should return nothing in the public files
   ```
   Or in PowerShell:
   ```powershell
   Get-ChildItem $root -Recurse -Include *.md,*.mjs | Select-String '{{' 
   # should return nothing
   ```

2. **Run the JSON-LD script with your values and check the output:**
   ```bash
   node scripts/emit-schema-ld.mjs \
     --title "Test post" \
     --date 2026-08-31 \
     --tags test,smoke \
     --author-name "Your Full Name" \
     --author-url "https://yoursite.com"
   ```
   The output should have your name in the `author` block, not `{{USER_NAME}}`.

3. **Run the slop detector on a sample draft** (if you have one) to make sure nothing else broke:
   ```bash
   node scripts/flag-slop.mjs path/to/your-draft.md
   ```

## Customizing beyond the placeholders

The 7 placeholders are the minimum. Once you're comfortable, you can also:

- **Edit `references/aeo-checklist.md`** to add industry-specific schema types (e.g. `SoftwareSourceCode` for OSS projects, `Recipe` for food blogs)
- **Edit `references/style-guide.md`** to add niche-specific banned words (e.g. "AI-powered" if you're a no-AI purist, "synergy" if you're a corporate escapee)
- **Edit `references/portfolio-monetization.md`** to swap the example day rates for your local market
- **Edit the AUTHOR block in `scripts/emit-schema-ld.mjs`** to add `alumniOf`, `award`, or other Schema.org fields relevant to you

## Keeping the placeholders generic

If you fork this repo for your own version, keep the upstream repo's placeholders generic. Submit your customizations as PRs to your own fork, not upstream — the upstream is meant to work for everyone.

## Personalization checklist (print this out)

- [ ] `{{USER_NAME}}` replaced in all files
- [ ] `{{USER_SHORT_NAME}}` replaced
- [ ] `{{MEDIUM_URL}}` replaced
- [ ] `{{PORTFOLIO_URL}}` replaced
- [ ] `{{GITHUB_URL}}` replaced
- [ ] `{{PROJECT_NAME}}` replaced
- [ ] `{{CALENDLY_URL}}` replaced (optional)
- [ ] `grep -r "{{"` returns zero hits
- [ ] `node scripts/emit-schema-ld.mjs --title "Test" --tags test --author-name "Your Name"` produces correct JSON-LD
- [ ] Ran the skill on a real fix — draft passes the slop audit on first run
