# case-study-publisher

Turn every meaningful fix in your projects into a publishable, AEO-optimized engineering case study. Direct response style. Zero AI slop. Cross-posted to four platforms.

> **Before using this skill, read [`PERSONALIZATION.md`](./PERSONALIZATION.md).** It walks you through replacing the placeholders (`{{USER_NAME}}`, `{{MEDIUM_URL}}`, etc.) with your own details.

## What it does

When you trigger this skill after a code fix, it:

1. Reads the actual diff, files, and commit
2. Pulls context from your memory of prior fixes in the same area
3. Drafts a case study following the Ogilvy + Kern 2026 voice (no fluff, no metaphor soup, specifics over adjectives)
4. Optimizes for AEO (TL;DR, question-form H2s, FAQ, Schema.org JSON-LD)
5. Runs an automated AI-slop audit — fails the draft if it has banned words, sentences over 28 words, or generic openers
6. Hands you publish-ready markdown for Medium (canonical), Dev.to, Hashnode, HackerNoon
7. Logs the published URL to `references/published-posts.md` for compounding SEO

## When to use it

Use it when:
- A bug fix, hotfix, or non-trivial patch lands on `main`
- A versioned release ships (e.g. v1.2.17) and the changes deserve a rolled-up post
- You say *"write the case study for this"* / *"draft the medium post"*

Don't use it for 1-line typo fixes or content that isn't a story.

## What's in the box

```
case-study-publisher/
├── SKILL.md                    # entry point (read first)
├── PERSONALIZATION.md          # customization guide (read second)
├── README.md                   # this file
├── references/
│   ├── case-study-template.md  # 12-section structure every post follows
│   ├── aeo-checklist.md        # 2026 AEO rules
│   ├── style-guide.md          # Ogilvy + Kern voice rules + banned words
│   ├── platforms.md            # per-platform publish guide
│   ├── portfolio-monetization.md  # 5 monetization channels
│   └── published-posts.md      # running log (maintain across runs)
└── scripts/
    ├── flag-slop.mjs           # AI-slop detector (banned words, length, voice)
    ├── emit-schema-ld.mjs      # Schema.org JSON-LD generator
    └── build-frontmatter.mjs   # per-platform YAML frontmatter
```

## Quick start

1. **Personalize** — open `PERSONALIZATION.md` and follow the 5-minute setup.
2. **Install** — drop the `case-study-publisher/` folder into your AI agent's skills directory.
3. **Trigger** — say one of:
   - *"write a case study for the v1.2.17 release"*
   - *"draft the medium post for this fix"*
   - *"case study for commit 51dccc6"*
   - *"what should I post on Medium this week"*
4. **Audit** — the skill runs `flag-slop.mjs` on its own draft. Zero hits is the bar.
5. **Publish** — paste into Medium, set the canonical URL, then cross-post to Dev.to and Hashnode 1-2 days later.
6. **Log** — the skill appends the published URL to `references/published-posts.md`.

## Why the AI-slop audit matters

Most LLM-written engineering posts are unreadable. They open with *"In this article, we will explore..."*, hedge every claim, and end with *"I hope this helps."* The audit forces a different voice — one that a busy engineer will actually read.

The audit catches:
- 27 Tier-1 banned words (delve, leverage, robust, seamless, cutting-edge, etc.)
- 22 Tier-2 banned words (basically, really, very, comprehensive, etc.)
- Sentences over 28 words
- Generic openers (*"In this article..."*, *"Imagine a world where..."*)
- Generic closers (*"I hope this helps"*, *"Thanks for reading"*)
- Vague quantifiers (many, several, various)
- Passive-voice density over 25%

See [`references/style-guide.md`](./references/style-guide.md) for the full ruleset.

## The AEO lens

AEO (Answer Engine Optimization) is the successor to SEO for the LLM-search era. When someone asks Perplexity, Google AI Overview, or ChatGPT search about a topic you've written about, AEO is what gets your post cited.

Every case study produced by this skill is structured for AEO without the reader feeling it:
- TL;DR block at the top (the AI answer box)
- Question-form H2s (AI extraction targets)
- FAQ section (FAQPage schema)
- Schema.org JSON-LD (TechArticle + FAQPage + Person)
- Named references with named-anchor links
- `last_verified` timestamp

See [`references/aeo-checklist.md`](./references/aeo-checklist.md) for the full ruleset.

## License

MIT — see [`../../LICENSE`](../../LICENSE). Fork it, customize it, sell services around it. Just keep the copyright notice.
