---
name: case-study-publisher
description: This skill should be used when a code fix, bug patch, hotfix, or non-trivial change lands in any of the user's projects and a public case study is needed. It produces a Medium-ready, AEO-optimized, plagiarism-proof case study in Ogilvy + Kern 2026 direct-response style, runs an automated AI-slop audit, and walks the user through cross-posting to Medium, Dev.to, Hashnode, and HackerNoon. Also covers monetization of the user's personal portfolio. Trigger on phrases like "write a case study for this fix", "publish the post-mortem", "case study for vX.Y.Z", "draft the medium post", "AEO case study for [commit/PR]".
---

# Case Study Publisher

Turn every meaningful fix in your projects into a publishable, AEO-optimized engineering case study. Direct response style. Zero AI slop. Cross-posted to four platforms.

> **Before using this skill, read [`PERSONALIZATION.md`](./PERSONALIZATION.md)** to replace the placeholders (`{{USER_NAME}}`, `{{MEDIUM_URL}}`, etc.) with your own details. The skill ships generic — it's your job to make it yours.

## When to use this skill

Use it when **any** of the following happen:

- A bug fix, hotfix, or non-trivial patch lands on `main` in a project you own
- A versioned release ships (e.g. v1.2.17) and the changes deserve a rolled-up post
- You say "write the case study for this", "draft the medium post", "post-mortem for [commit/PR/release]"
- You ask "what should I post on Medium this week" and there's a recent fix worth covering

Do **not** use it for:

- Trivial typos, dependency bumps, or 1-line config changes (use judgment — if it's not a story, don't force it)
- Marketing copy, sales pages, or social-media blurbs (different skill needed)
- Internal documentation (different skill needed)

## Operating principles (read first, every time)

1. **Source of truth is the repo, not memory.** Always read the actual diff, the actual file, the actual commit. Memory tells you what *kind* of fix it was; the repo tells you what it actually *is*.
2. **Specifics beat adjectives.** Every claim earns a number, a filename, a line number, a commit hash, a date, a count. If a sentence has an adjective that can be deleted, delete it.
3. **Story first, bullets second.** Open with the human moment. Bullets are scaffolding inside the narrative, not the narrative itself.
4. **Headline is a contract.** 5-10 candidates, pick the one with the most specific number or outcome. Test: would you click?
5. **No AI slop, ever.** Run the slop audit before publish. Cut any word on the banned list. Cut any sentence over 28 words.
6. **AEO invisibility.** The reader shouldn't *feel* the SEO. They should feel "this person knows what they're talking about and wrote it clearly." Schema.org JSON-LD lives at the bottom; question-form H2s are invisible to humans.
7. **Honest about mistakes.** A case study that says "we shipped a 372 MB release ZIP because we forgot an exclude flag" is more credible than one that says "we optimized the build." Real > polished.
8. **No secrets, ever.** No API keys, no customer data, no internal-only hostnames, no PII. When in doubt, redact.

## Workflow (run top to bottom)

### Step 1 — Gather the fix

1. Identify the trigger (commit hash, PR number, release tag, or "manual: this thing I just fixed")
2. Run `git log` / `git diff` / `gh pr view` against the target repo
3. Capture: files changed, lines added/removed, test results, the commit message, any linked issues
4. Read the relevant files in full if the diff is non-trivial. Don't guess from filenames.
5. If the user named a commit/PR/release, anchor on that. If they said "the bug from yesterday", ask which one with a one-liner — don't fabricate.

### Step 2 — Pull context from memory

Read your agent's memory file for:
- Prior fixes in the same area (so this case study references "the previous N fixes that led to this one")
- The project's tech stack and architecture (so the reader gets accurate context)
- Production incidents, customer impact, blast radius

Memory is supporting evidence. The repo is the source of truth.

### Step 3 — Draft the case study

Load `references/case-study-template.md` and follow its structure exactly. Do not invent sections. Do not skip the "human moment" opener.

Style requirements (load `references/style-guide.md` for the full ruleset):
- Ogilvy: research-driven, headline does 80% of the work, specific facts over generalities
- Kern: conversational asides, story arc, mass appeal, direct response
- 2026 modern: short sentences (avg 14 words, max 28), plain words, active voice, contractions always
- Forbidden words: delve, leverage, robust, seamless, unlock, navigate, in today's world, it's important to note, let's dive in, cutting-edge, at the end of the day, foster, holistic, paradigm, synergy

### Step 4 — AEO optimization

Load `references/aeo-checklist.md` and apply every item:
- Question-form H2s ("What was the root cause?" "How did we test the fix?")
- TL;DR block at the top (2-3 sentences, the direct answer)
- FAQ section at the end (3-5 questions readers actually ask)
- Schema.org JSON-LD: `TechArticle` + `FAQPage` + `Person` (author) at the bottom
- Named references with links (the actual GitHub commit, official docs, etc.)
- Author bio block with GitHub + portfolio link
- "Last verified" timestamp + update date

Generate the JSON-LD with `scripts/emit-schema-ld.mjs` and append to the post.

### Step 5 — Anti-slop audit (mandatory, do not skip)

Run `scripts/flag-slop.mjs` on the draft. It checks for:
- Banned words and phrases (full list in `references/style-guide.md`)
- Sentences over 28 words
- Passive-voice density over 25%
- Generic openers ("In this article", "Let's explore", "Have you ever wondered")
- Vague quantifiers ("many", "several", "various", "a number of")
- "It's important to note" / "It is worth mentioning" patterns
- Filler intensifiers ("really", "very", "quite", "actually", "basically")

Every flagged item must be fixed or have a written justification for why it stays. No silent passes.

Re-run the script. Zero flags is the bar.

### Step 6 — Self-review pass

Before handing to the user, do a full read-through with these questions:
1. Does the headline make a specific promise?
2. Does the opener have a human moment (time, place, real stakes)?
3. Are there at least 5 specific numbers in the post (line numbers, counts, dates, versions)?
4. Is the lesson stated directly, not buried?
5. Does the ending offer the reader a way to keep going (question, link, next-post tease)?
6. Would I click this if I saw it in my Medium feed?
7. Is there any AI tell I missed? (Read it aloud in your head — does it sound like a person or like a model?)

If any answer is no, fix it before showing the user.

### Step 7 — Cross-post preparation

Load `references/platforms.md` and prepare per-platform versions:
- **Medium** (your profile): full post + canonical URL placeholder
- **Dev.to**: full post, dev-to-specific frontmatter (`---`, `published: true`, `tags:`, `canonical_url:`)
- **Hashnode**: full post, hashnode-specific frontmatter
- **HackerNoon**: condensed version (HackerNoon editors prefer 800-1500 words) + submission form link

Each cross-post is a copy-paste, not a rewrite. One canonical URL (Medium) to avoid SEO cannibalization.

### Step 8 — Publish flow (the user does the click)

The skill does NOT auto-publish. Publishing is the user's call. The flow is:

1. Show the user the final draft in chat (markdown)
2. Open `{{MEDIUM_URL}}/publish` in the in-app browser (use the `control-in-app-browser` skill if loaded) so they can paste and publish
3. For each additional platform, give a single-line "go to X, paste, publish" instruction
4. After publish, the user pastes the canonical Medium URL back; the skill logs it to `references/published-posts.md` for future reference and cross-linking

Why human-in-the-loop: Medium API access is gated, automated publishing violates most platforms' ToS in subtle ways, and a 30-second human review catches the kind of thing a script can't.

### Step 9 — Portfolio monetization hook

If the case study has strong technical depth and the user mentions the portfolio site or wants to drive traffic:

Load `references/portfolio-monetization.md` and add:
- A portfolio CTA in the post ("More of my work: {{PORTFOLIO_URL}}")
- A portfolio post template that links back to the Medium case study (SEO round-trip)
- A "hire me" / consulting CTA on the portfolio

## Outputs (what the user gets at the end)

For every run, the user receives:
1. The full case study in markdown (copy-paste ready for Medium)
2. The AEO metadata block (JSON-LD, FAQ section, TL;DR) pre-formatted
3. Per-platform frontmatter for Dev.to, Hashnode, HackerNoon
4. A self-audit report (zero AI slop, every checklist item ticked)
5. A one-click publish path for each platform
6. A logged entry in `references/published-posts.md` (if continuing across runs)

## Reference files

- `references/case-study-template.md` — the exact structure every post follows
- `references/aeo-checklist.md` — AEO optimization rules
- `references/style-guide.md` — Ogilvy + Kern 2026 style ruleset
- `references/platforms.md` — per-platform publish guide (Medium, Dev.to, Hashnode, HackerNoon)
- `references/portfolio-monetization.md` — portfolio monetization playbook
- `references/published-posts.md` — running log of published case studies (maintain across runs)

## Scripts

- `scripts/flag-slop.mjs` — AI-slop detector (banned words, sentence length, passive voice, vague quantifiers)
- `scripts/emit-schema-ld.mjs` — generates Schema.org JSON-LD for TechArticle + FAQPage + Person
- `scripts/build-frontmatter.mjs` — generates per-platform frontmatter (Medium canonical URL, Dev.to tags, Hashnode tags)

## Anti-patterns (what this skill will refuse to do)

- Invent metrics, user counts, or impact numbers that aren't in the source code or commit
- Generate a "case study" for a 1-line typo fix just to fill content quota
- Use the user's name, project name, or bio inconsistently across posts
- Copy paragraphs from prior case studies (every post stands on its own)
- Publish without the user's explicit go-ahead
- Include any sensitive info: API keys, customer data, internal-only URLs, PII

## License

MIT — see [`../../LICENSE`](../../LICENSE). Use it, fork it, sell services around it. Keep the copyright notice.
