# Cross-Post Platforms

Same case study, four platforms. One canonical URL (Medium) to avoid SEO cannibalization. Each cross-post is a copy-paste with platform-specific frontmatter.

## The four platforms (priority order)

### 1. Medium (canonical)

**URL:** `{{MEDIUM_URL}}` (e.g. `https://medium.com/@your-handle`)

**Why first:** the canonical URL all other platforms point back to. Partner Program pays per-member-read (you need to be in it, gated application).

**Format:** Medium accepts markdown in the editor. Paste the body, set the title, add a subtitle, set the cover image, add tags.

**Frontmatter:** none required. Use the Medium editor's UI fields.

**Cover image:** use a Canva or Figma template. A simple dark-mode title card with the headline + your name. 1400x788 px.

**Tags (5 max):** `Cloudflare`, `Software Engineering`, `Data Integrity`, `Postmortem`, `Bug Fix` (or whatever fits the post).

**Publishing time:** Tue/Wed/Thu 9-11 AM US Eastern (best for engagement). Adjust for your target audience's timezone.

**Critical:** always set the canonical URL in the post (or via Medium's "Set Canonical Link" in settings). Without it, Google may index Dev.to and Hashnode versions and split your SEO juice.

**How to publish from this skill:**
1. Open `{{MEDIUM_URL}}/publish` in the in-app browser
2. Paste the markdown body
3. Set the title (Medium H1)
4. Set the subtitle (1 sentence, the TL;DR)
5. Add 5 tags
6. Upload the cover image
7. Set the canonical link (after publish, in story settings) — point to the post's own Medium URL once it's live
8. Hit "Publish"

### 2. Dev.to

**URL:** `https://dev.to`

**Why:** huge dev audience, good SEO, no monetization directly but massive visibility for recruiters. Free, open, dev-focused.

**Format:** markdown with a YAML frontmatter block at the top.

**Frontmatter template:**
```yaml
---
title: "How a 3-line filter fixed a 21x data divergence bug in our factory tracker"
published: true
description: "A 3-line filter, 5,622 polluted rows, and a 6-week silent data divergence. The full postmortem."
tags: cloudflare, d1, sqljs, postmortem, debugging
canonical_url: {{MEDIUM_URL}}/[your-slug-here]
cover_image: {{PORTFOLIO_URL}}/og/[slug].png
---
```

**Tags (4 max):** keep them lowercase, comma-separated. Dev.to surfaces posts by tag heavily.

**Series:** if you have a series (e.g. "{{PROJECT_NAME}} postmortems"), set the series field. Dev.to surfaces series prominently.

**How to publish:**
1. Open `https://dev.to/new`
2. Paste the markdown (frontmatter included)
3. Click "Save Draft" → "Publish"
4. Set canonical URL in the post settings → points to your Medium version

### 3. Hashnode

**URL:** `https://hashnode.com`

**Why:** dev-focused, good SEO, partner program pays for ad revenue on your posts. Cleaner reading experience than Medium for tech content.

**Format:** markdown with Hashnode-specific frontmatter.

**Frontmatter template:**
```markdown
---
title: How a 3-line filter fixed a 21x data divergence bug
subtitle: A 3-line filter, 5,622 polluted rows, and a 6-week silent data divergence
slug: 3-line-filter-21x-divergence
tags: cloudflare, d1, postmortem, debugging
canonical: {{MEDIUM_URL}}/[your-slug-here]
coverImage: {{PORTFOLIO_URL}}/og/[slug].png
domain: [your-subdomain-here]  # if you've set up Hashnode on your own domain
---
```

**Tags (5 max):** Hashnode has a tag system, but the discovery surface is smaller than Dev.to. Use 3-5 specific tags.

**Domain:** Hashnode lets you publish to your own subdomain. If `blog.yourdomain.com` is set up, use that — own your SEO.

**How to publish:**
1. Open your Hashnode dashboard
2. New post → paste markdown
3. Set canonical URL
4. Publish

### 4. HackerNoon

**URL:** `https://hackernoon.com`

**Why:** editorial-style, accepts tech deep-dives, has a tip program. Less saturated than Medium for engineering content.

**Format:** they accept submissions via the editor or via their submission form. Editorial picks stories; you'll get accepted or rejected based on quality.

**Important:** HackerNoon prefers 800-1500 word posts. If your case study is longer, **condense** it for HackerNoon specifically. Cut the Background section, tighten the code blocks, keep the lesson and the FAQ.

**Submission:** `https://hackernoon.com/submit-a-story` (requires account, then paste or upload).

**Frontmatter:** none — HackerNoon adds their own metadata when they accept.

**Tagging:** HackerNoon uses topic tags (e.g. `programming`, `databases`, `startup`). Use 1-3.

**Tip:** if you want a faster path, HackerNoon accepts drafts from existing bloggers. Send your Medium post URL to `submission@hackernoon.com` with a short pitch.

## Cross-posting workflow

For each new case study:

1. Publish on **Medium** first (canonical)
2. Wait 1-2 days, then copy-paste to **Dev.to** with canonical URL pointing to Medium
3. Same day or next day, copy-paste to **Hashnode** with canonical URL pointing to Medium
4. After 1 week, condense and submit to **HackerNoon** (if quality is editorial-grade)

Why this order: Medium is the canonical, the others inherit credibility from it. Dev.to and Hashnode cross-link back via canonical URL. HackerNoon submission takes longer (editorial review).

## SEO rules (don't fight yourself)

- **One canonical URL per post.** Set it on Dev.to, Hashnode, HackerNoon to point to the Medium post. Without this, Google sees 4 copies of the same content and picks one — usually not the one you want.
- **Same title everywhere** (or near-same — HackerNoon may want a shorter title, that's fine).
- **Same author bio everywhere** (Name: {{USER_NAME}}, link: {{PORTFOLIO_URL}}).
- **Different excerpt/description per platform** if you want, but it's optional.

## Monetization reality check (2026)

| Platform | Direct revenue | Indirect value |
|---|---|---|
| Medium Partner Program | Yes (per-read, modest) | High (canonical + distribution) |
| Dev.to | No | High (recruiter inbound, SEO) |
| Hashnode | Yes (ad revenue share) | Medium (SEO) |
| HackerNoon | Yes (tip program) | Medium (credibility) |

**Honest take:** the direct revenue from these platforms is small (think $20-200/month for a steady poster with a tech audience). The **real** value is:
- Inbound from recruiters (especially via Dev.to)
- Consulting leads (your portfolio gets traffic)
- Authority signals for your own domain

If monetization is the primary goal, your portfolio at `{{PORTFOLIO_URL}}` (see `references/portfolio-monetization.md`) is where the real money lives. The cross-posts feed the portfolio; the portfolio is the storefront.

## Tracking

Maintain `references/published-posts.md` with:
- Date published
- Post title
- Medium URL (canonical)
- Dev.to URL
- Hashnode URL
- HackerNoon URL (if accepted)
- View count (if you check)
- Inbound leads (consulting/recruiter contacts received)

This log compounds. After 6 months, you'll know exactly which topics drive traffic and which platforms pay off for you.

## Common mistakes to avoid

- **Don't post the same content 4 times in one day.** Stagger by 1-2 days each. Google indexes faster when content appears over time.
- **Don't skip the canonical URL.** Without it, you're competing with yourself.
- **Don't change the headline per platform** unless there's a real reason. Consistency = brand.
- **Don't engage with low-quality comments.** Reply to substantive ones, ignore the rest. Your comment section is part of the post.
- **Don't skip the cover image.** Posts with covers get 2-3x the click-through.
