# LLM Citation & AEO (the new SEO, 2026)

AEO = Answer Engine Optimization. The successor to SEO for the LLM-search era.

The shift: in 2024, users searched Google and clicked a link. In 2026, users ask ChatGPT, Perplexity, Gemini, Grok, or Bing Copilot and read the answer. The AI cites 3–5 sources. If your product is not in that answer, the user does not know you exist.

This is the **highest-leverage channel of 2026** because:
- The algorithms reward structured data + third-party mentions, which is the same thing as good content. You do not have to choose between writing for humans and writing for AI.
- It is the new SEO before competitors catch on. The same window SEO had in 2008 is open for AEO in 2026.
- It compounds. Every citation source you land on is permanent.

## How LLMs decide what to cite

The algorithm is not Google PageRank. It is a citation-selection model trained on human preference data. The factors, in order of weight:

1. **Structured data present** (schema.org / JSON-LD on the page itself, not just sitemap)
2. **Third-party mentions** (best-of lists, Reddit / Hacker News discussions, "alternatives to" pages, G2 / Capterra reviews)
3. **Direct, extractable answer** (FAQ schema, TL;DR block, Q-form H2s)
4. **Named references with authority** (links to primary sources, docs, papers — not naked URLs)
5. **Specificity** (numbers, dates, file paths beat vague claims)
6. **Recency** (last_verified date, dateModified in schema)
7. **Topical authority** (cluster of related posts on the same domain)

The single biggest mistake founders make: writing a beautiful landing page with no schema, no FAQ, no "alternatives" page, no third-party reviews. LLMs cannot cite what they cannot structurally parse.

## The 12 citation sources every tool needs to be on

Land on these. Each one is a permanent node in the citation graph.

| # | Source | What it does | Effort | Time to land |
|---|---|---|---|---|
| 1 | **Product Hunt** | Dofollow backlink + "Product of the Day" badge. Cited in many "best X" answers. | High (full launch) | 4–6 weeks prep |
| 2 | **G2** | B2B buyers + AI citations both pull from here. Reviews >10 needed. | Medium (vendor account) | 2–3 weeks |
| 3 | **Capterra** | Same as G2 but for prosumer. Gartner-owned, cited often. | Medium | 2–3 weeks |
| 4 | **AlternativeTo** | Crowdsourced alternatives. The page "Alternatives to [Competitor]" is gold. | Low (free submission) | 1 week |
| 5 | **There's An AI For That** | The dominant AI-tool directory. Cited by ChatGPT heavily. | Low (free submit) | 3–5 days |
| 6 | **Toolify.ai** | Second major AI-tool directory. Same weight class. | Low | 3–5 days |
| 7 | **Futurepedia.io** | AI tools, growing citation weight. | Low | 3–5 days |
| 8 | **TopAI.tools** | Smaller but cited. | Low | 3–5 days |
| 9 | **OpenAI Apps / plugin store** | If you have a GPT or app integration. | High | 4–6 weeks |
| 10 | **Reddit** | r/[niche] threads rank in Google AND get cited by LLMs. Organic only. | High (community) | 4–8 weeks |
| 11 | **Hacker News** | Show HN or technical mentions. Cited as authority source. | High (technical depth required) | Event-based |
| 12 | **GitHub Awesome lists** | `awesome-[category]` repos. Get into 3–5. | Medium (PR to maintainers) | 1–2 weeks |

The first 8 are submission work. Do them in week 1. The last 4 are earned over time.

## The AEO checklist (every page, no exceptions)

These are non-negotiable. Run the full case-study-publisher checklist for the content side, plus these for the product side.

### Required on every product page

- [ ] **JSON-LD: Product** schema (name, description, brand, offers, aggregateRating if any)
- [ ] **JSON-LD: FAQPage** schema with 3–5 real questions
- [ ] **JSON-LD: Organization** schema (founder, sameAs links to GitHub, LinkedIn, X, portfolio)
- [ ] **Pricing page is indexable** (not gated behind login, not a single JS-rendered SPA without SSR)
- [ ] **FAQ section** with Q-form H2/H3s in the body (not just schema)
- [ ] **TL;DR block** at top of feature pages (2–3 sentences, direct answer)
- [ ] **"Best for" section** (one line: "Best for [persona] who need [outcome]")
- [ ] **"Alternatives" page** (list competitors, link each, explain differentiators)
- [ ] **At least 3 reviews with rating** (G2, Capterra, Trustpilot, or in-page testimonials with reviewer name + role + company)

### Required on the homepage

- [ ] FAQ schema with 5–8 questions (these are the most-cited elements on a homepage)
- [ ] Pricing visible or one click away (LLMs check this)
- [ ] "Last updated" date on the page
- [ ] Founder bio with sameAs links

### Required on the founder / about page

- [ ] JSON-LD: Person schema with knowsAbout
- [ ] sameAs links to GitHub, LinkedIn, X, portfolio, Medium
- [ ] One credibility signal per line (degree, prior work, years)
- [ ] Link to the product, not just text

## The 6 page types LLMs cite most

Build all six over 8 weeks. They cite each other. The cluster compounds.

1. **`[You] vs [Competitor]`** — the most-cited page type. Specific verdict, comparison table, "who should pick whom."
2. **`[You] for [Use Case]`** — captures solution-aware searchers ("CRM for real estate agents").
3. **`Best [Category] for [Persona]`** — captures category-curious searchers.
4. **`[You] alternatives`** — captures dissatisfied users of competitors.
5. **`[Competitor] alternatives`** — captures dissatisfied users of a specific competitor (bigger than #4 for some categories).
6. **`How to [outcome] with [your category]`** — captures problem-aware searchers. Higher funnel, lower conversion, but cited often.

Skip "what is X" and "introduction to X" pages. They are too top-of-funnel for citation weight.

## Tools to track your citations

You cannot improve what you do not measure. Use one of these to track which prompts cite you, which do not, and how that changes week over week.

| Tool | What it does | Cost |
|---|---|---|
| **Otterly.AI** | Tracks ChatGPT / Perplexity / Google AI Overview citations for your brand and prompts | Paid, mid-tier |
| **Profound** | Enterprise AEO tracking, prompt-volume analysis | Paid, expensive |
| **Peec.ai** | European AEO tracker, good for EU traffic | Paid, mid-tier |
| **Ahrefs Brand Radar** | Now includes AI Overview presence tracking | Paid (you likely have Ahrefs) |
| **Manual spot-check** | Open ChatGPT, ask 10 prompts in your category, see if you appear. Free. | Free |

Run the manual check weekly. The paid tools only matter if you have 50+ prompts to track.

## What AEO is NOT

- Not keyword stuffing. LLMs see through it. If your copy reads like SEO content, you fail the specificity test.
- Not "write for robots, not humans." The reader comes first. Structured data serves both.
- Not a substitute for honest content. A post that over-promises and under-delivers gets cited once, then never again. LLMs learn from human preference signals.
- Not a one-time effort. The `last_verified` field matters. Update when the underlying fact changes.
- Not the same as SEO. Many SEO moves (backlink buying, keyword density) are actively harmful for AEO.

## AEO failure modes

- **Hidden answer** — the answer is in paragraph 7, but the TL;DR says "let's explore." LLMs move on.
- **Hedged claims** — "it might be the case that possibly..." — LLMs strip hedges when extracting, leaving nothing.
- **Generic title** — "The best CRM" with no number, no verb, no concrete noun. LLMs cannot classify it.
- **No FAQ** — the page is just narrative prose. LLMs have nothing to extract as Q&A pairs.
- **Broken links** — every linked reference must resolve. LLMs downgrade credibility for 404s.
- **Stale dates** — a 2024 page claiming "current state of X" without a `last_verified` field loses to a 2026 page on the same topic.
- **No schema on a JavaScript SPA** — if your pricing is rendered client-side and the JSON-LD is missing, LLMs see a blank page. Use SSR or pre-render.
- **Reviews without names** — "Great product, 5 stars!" from "John" with no role or company is ignored. Reviews need verifiable identity for citation weight.

## The 30-day AEO sprint

If you only have 30 days, this is the order.

- **Day 1–3:** Run the manual citation check. Ask 20 prompts in ChatGPT, Perplexity, Gemini, Grok. Note which competitors appear and you do not. This is your gap list.
- **Day 4–7:** Submit to directories #1–8 above. Product Hunt launch is scheduled for week 4.
- **Day 8–14:** Add the 6 required schema blocks to the homepage, pricing page, and top 3 feature pages. Add FAQ sections to the same.
- **Day 15–21:** Write the 2 most-searched comparison pages (`[You] vs [Top Competitor]` and `[You] for [Top Use Case]`). Apply the case-study-publisher AEO checklist to each.
- **Day 22–28:** Land on AlternativeTo + 3 GitHub awesome lists. PR the maintainers, do not spam.
- **Day 29–30:** Re-run the manual citation check. Expect 20–40% of the prompts that did not cite you to now cite you. That is the signal.

If the manual check shows no movement at day 30, the bottleneck is third-party mentions. Double down on directory submissions, G2 reviews, and Reddit presence. Internal page changes have diminishing returns without external signal.

## How to apply this reference

When this reference is loaded, produce:

1. A citation gap analysis (which prompts should cite you, which currently cite competitors).
2. A 12-source submission plan with owner and deadline per source.
3. The 6 page types you need, ranked by search volume and citation potential.
4. The schema blocks to add, in order.
5. A 30-day AEO sprint, week by week.

Do not produce generic "improve your SEO" advice. Every recommendation must map to a specific AEO factor from the list above.
