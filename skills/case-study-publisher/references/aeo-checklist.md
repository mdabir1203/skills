# AEO Checklist (2026)

AEO = Answer Engine Optimization. The successor to SEO for the LLM-search era. Goal: when someone asks Perplexity, Google AI Overview, ChatGPT search, or Bing Copilot about the topic of your case study, your post is what gets cited.

AEO is invisible to human readers. They see clean structure and a useful post. AI engines see structured metadata, named references, and extractable answers.

## Required elements (every post, no exceptions)

### 1. TL;DR block at the top
2-3 sentences. Direct answer. No "in this article" framing. Place it between the title and the first H2.

Why: AI engines extract this verbatim as the answer box. Humans skim it to decide if the post is worth reading.

### 2. Question-form H2s
Every section header (except Background) is a question a real reader would ask.

Good:
- `## What was the root cause?`
- `## How did we test the fix?`
- `## Why didn't the sanity log catch it?`
- `## What's the lesson for other factory tracking systems?`

Bad:
- `## The Bug`
- `## Implementation`
- `## Conclusion`

Rule: if you can append a question mark to the H2 and it reads naturally, do it. If not, rephrase until it does.

### 3. FAQ section at the end
3-5 questions, 1-2 sentence answers each. Question-form H3s.

Real questions a reader would actually search for. Test each one with: "would I type this into Google?"

The FAQ is the AEO equivalent of FAQPage schema. Combined with JSON-LD, it doubles your extractable answer surface.

### 4. Schema.org JSON-LD (3 blocks, at the bottom)

Use `scripts/emit-schema-ld.mjs` to generate. Three blocks:

**TechArticle** — describes the post itself:
```json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "How a 3-line filter fixed a 21x data divergence bug",
  "datePublished": "2026-08-31",
  "dateModified": "2026-08-31",
  "author": { "@type": "Person", "name": "{{USER_NAME}}", "url": "{{PORTFOLIO_URL}}" },
  "publisher": { "@type": "Organization", "name": "Medium" },
  "about": ["Cloudflare D1", "sql.js", "data integrity", "postmortem"],
  "proficiencyLevel": "Intermediate"
}
```

**FAQPage** — paired with the FAQ section:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the sessions=0 bug?",
      "acceptedAnswer": { "@type": "Answer", "text": "..." }
    }
  ]
}
```

**Person** (author):
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "{{USER_NAME}}",
  "url": "{{PORTFOLIO_URL}}",
  "sameAs": [
    "{{GITHUB_URL}}",
    "{{MEDIUM_URL}}"
  ],
  "jobTitle": "Software Engineer",
  "knowsAbout": ["Cloudflare Workers", "Electron", "Node.js", "D1", "PostgreSQL"]
}
```

### 5. Named references with links
Every external claim has a link. The link is the named anchor, not a naked URL.

Good: `[Cloudflare D1 docs — TRUNCATE semantics](https://developers.cloudflare.com/d1/)`
Bad: `https://developers.cloudflare.com/d1/`

### 6. Author bio block
- Full name
- Current role (one line)
- One credibility signal (degree, prior work, years of experience)
- GitHub link
- Portfolio link
- Medium profile link (for the "more from this author" carousel)

### 7. "Last verified" timestamp
For technical posts, facts rot. Mark the post with a `last_verified:` date. Update the post if you revisit the topic. AI engines trust recent content more.

### 8. Update date (separate from publish date)
If the post is updated after publish, the `dateModified` field changes. AI engines use this to decide if the content is current.

## Highly recommended (do these unless you have a reason not to)

### 9. Statistics with sources
"21x divergence" beats "big divergence." Every number has a source — file path, line number, commit hash, link to the test output.

### 10. Inline definitions in plain English
First use of a technical term gets a 5-word definition in plain English. Example: *"the snapshot writer (the script that copies live production state to a local SQLite file for offline dashboards)"*

Don't do this for terms the audience already knows. Do it for the jargon that's specific to your project.

### 11. Code snippets with file:line references
```js
// shared/sqlite-snapshot.cjs:365 (pre-fix)
const start = r.start;
const end = r.end;
```

Not just "here's the buggy code." The reader (and the AI) can find it.

### 12. Comparison table (before/after)
When the fix has measurable impact, a table beats prose:

| Metric | Before fix | After fix |
|---|---|---|
| Local session count | 0 | 276 |
| Cloud session count | 276 | 276 |
| Divergence | 100% | 0% |
| Synthetic row pollution | 5,622 | 0 |

### 13. Cross-link to related posts
If you've written a prior case study in the same series, link it. AI engines use internal links to build topical authority. Humans use them to keep reading.

## What AEO is NOT

- AEO is not keyword stuffing. Never.
- AEO is not "write for robots, not humans." The reader comes first; the structure serves both.
- AEO is not a substitute for honest content. A post that over-promises and under-delivers gets cited once and never again.
- AEO is not a one-time effort. The `last_verified` field matters. Update when the underlying fact changes.

## AEO failure modes to avoid

- **Hidden answer**: the answer is in paragraph 7 but the TL;DR says "let's explore." AI engines move on.
- **Hedged claims**: "it might be the case that possibly..." — AI engines strip hedges when extracting, leaving nothing.
- **Generic title**: "Lessons from a bug." No number, no verb, no concrete noun. AI engines can't classify it.
- **No FAQ**: post is just narrative prose. AI engines have nothing to extract as Q&A pairs.
- **Broken links**: every linked reference must resolve. AI engines downgrade credibility for 404s.
- **Stale dates**: a 2024 post claiming "current state of X" without a `last_verified` field loses to a 2026 post on the same topic.

## Validation

Before publish, run through this list in order:

1. Title has a number, a verb, a concrete noun? ✓
2. TL;DR is 2-3 sentences with the direct answer? ✓
3. Every H2 is a question? (except Background) ✓
4. FAQ section exists with 3-5 questions? ✓
5. JSON-LD is appended (TechArticle + FAQPage + Person)? ✓
6. Every external claim has a named-link reference? ✓
7. Author bio block is present? ✓
8. `last_verified` date is set? ✓
9. At least 5 specific numbers in the post? ✓
10. Comparison table or "before/after" numbers in the Verification section? ✓

If any answer is no, fix it before publish.
