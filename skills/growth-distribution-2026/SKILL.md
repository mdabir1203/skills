---
name: growth-distribution-2026
description: This skill should be used when the user wants a ruthlessly cut, 2026-current distribution plan for a webapp, mobile app, or infrastructure platform. Triggers on phrases like "how do I launch X", "distribution strategy for Y", "where do I get users for Z", "what channels should I use", "growth plan for my product", "how do I get the first 100 users", "audit my current distribution", "which channels actually work in 2026", or any task where the user wants the agent to identify which 1–2 of the 4 working channels (LLM citation, niche community, platform launch, SEO bottom-funnel) to run, and what to deliberately skip. Opinionated with reasoning. Cuts channels the 2026 indie-hacker consensus still over-recommends. Sits on top of `case-study-publisher` for the AEO content workflow.
---

# Growth & Distribution in 2026

The goal is not to be on every channel. The goal is to be on the **1–2 channels that actually move signups for your specific product** and to skip the rest without guilt.

This skill cuts first, then plans. Most 2026 distribution advice still recommends 6–8 channels. That advice is wrong. Spreading thin kills the algorithm boost on each one. A focused two-channel execution beats a scattered eight-channel execution, every time, across every product type tested.

## The four channels that work in 2026

Only four. Cut everything else.

| # | Channel | When it wins | Time to first signal | Compounds? |
|---|---|---|---|---|
| 1 | **LLM citation (AEO)** | Tool discovery is shifting from Google to ChatGPT / Perplexity / Grok. Every "best X" prompt now cites 3–5 sources. If you are not on those lists, you do not exist. | 4–8 weeks | Yes — citation surface grows |
| 2 | **Niche community** (Reddit, Discord, Slack) | Zero budget, zero audience, zero runway. The only channel that works at the very start. | 2–4 weeks | Partially — karma + recognition |
| 3 | **Platform launch** (PH, HN, App Store editorial, Indie Hackers) | One-shot spike with permanent badge/backlink. Pick ONE platform based on product type, not all four. | 1 day (event) | Badge yes, traffic no |
| 4 | **SEO bottom-funnel** (comparison, alternatives, "best X for Y" pages) | Highest LTV of any channel. Slow to start, never stops. | 4–6 months | Yes — forever |

## The decision tree

Answer the questions in order. Stop at the first one that resolves.

**Q1: Do users currently discover tools by asking AI assistants about your category?**
- Yes, or probably → Run Channel 1 (LLM citation) first. It is the new SEO before competitors catch on.
- No, your buyers are in a closed vertical with no AI search adoption yet → Skip Channel 1, go to Q2.

**Q2: Can you enumerate your ICP in a small enough number to talk to them directly?**
- Yes (< 10,000 identifiable users) → Channels 2 + 3 (niche community + one platform launch) are your whole plan. Skip SEO for now.
- No, you are in a mass-market consumer category → Go to Q3.

**Q3: Are you selling to other developers or technical buyers?**
- Yes → Lead with Hacker News (Show HN). Use Channel 1 in parallel. Skip Product Hunt for week 0.
- No, B2B SaaS / prosumer → Lead with Product Hunt + Niche Reddit. Skip HN.

**Q4: Are you launching a mobile app?**
- Yes → App Store editorial is your platform launch. App Store Optimization (ASO) replaces much of Channel 4. Niche community still applies.
- No → Continue with Channels 1–4 above.

**Q5: Are you 6+ months from launch with runway to write?**
- Yes → Add Channel 4 (SEO bottom-funnel) as a parallel track. It is the highest LTV channel but takes 4–6 months to compound.
- No, you need signups in 30 days → Skip Channel 4. It does not help you this quarter.

## What to deliberately skip (and why)

These channels appear in every "10 channels to try" listicle. Skip them unless a specific condition applies.

| Channel | Why people recommend it | Why to skip it (2026) |
|---|---|---|
| **Twitter / X launch thread** | "Build in public" lore | Organic reach is ~3% unless you already have 500+ followers. If you do, run it on the side. If you don't, skip. |
| **LinkedIn long-form** | B2B audience | Only works if you are B2B AND you already post weekly. Cold start is 4–6 weeks of ghost town. |
| **Generic newsletters** | "Sponsor a list" | Open rates crashed in 2025. Conversion is sub-1%. Build your own list first. |
| **Cold email blasts** | Outbound is back | Burn through domain reputation in 2 weeks. Only works with warmed domains and ICP enrichment. |
| **Facebook groups / Instagram** | "Audience is there" | Only relevant for B2C consumer (fashion, food, fitness). Not for SaaS or infra. |
| **Medium / Dev.to cross-posting** | Distribution hack | Only works for AEO if structured correctly (see `case-study-publisher` skill). Otherwise it is duplicate content noise. |
| **Discord paid promo** | "Buy a ping" | Conversion is sub-2%. Burns community trust. |
| **YouTube ad reads** | Brand play | $5–15 CAC for most categories. Only worth it once you have validated organic channels. |

## The workflow

When this skill is active for a distribution task:

1. **Identify product type and ICP** — webapp, mobile app, or infra platform. For B2B, who specifically. For consumer, the persona. Without this, no channel can be picked.
2. **Run the decision tree** — answer Q1–Q5. Pick 1–2 channels. State the cut: what you are NOT doing and why.
3. **Load the matching reference(s)** — see Reference Index below. Read the relevant reference fully before drafting any plan.
4. **Draft the 30-day plan** — week by week, with specific actions, not vague tactics. "Post in r/SaaS" is a tactic. "Post 'I built [X] because I had [Y]' in r/SaaS on day 14, after 10 days of comments, link only in comment thread" is a plan.
5. **State the metric that proves the channel works** — signups per week from the channel, or LLM citations per month, or ranking position for the bottom-funnel keyword. Without a metric, the channel is a hobby.
6. **Cut if the metric does not move in 4 weeks** — if a channel does not produce a measurable signal in 4 weeks, it is dead. Move to the next one. Most 2026 advice under-recommends cutting.

## Reference Index

Load the references that match the channels picked in step 2.

- **`references/llm-citation-aeo.md`** — Channel 1. The new SEO. How to get cited by ChatGPT, Perplexity, Grok, Gemini, Bing Copilot. AEO checklist, the 10 citation sources, anti-patterns.
- **`references/niche-community-strategy.md`** — Channel 2. Reddit, Discord, Slack dominance. 30-day warmup, format that works, 5 subreddit archetypes.
- **`references/platform-launch-algorithm.md`** — Channel 3. Product Hunt, Hacker News, App Store editorial, Indie Hackers — decoded as algorithms. The "pick one" rule, the week 6+ rule, hour-by-hour runbook.
- **`references/seo-bottom-funnel.md`** — Channel 4. Comparison, alternatives, "best X for Y" pages. 4 page types, 6-month compounding plan.

## Composing with other skills

- **`case-study-publisher`** — when the AEO content workflow is needed. This skill says "write AEO content"; the case-study-publisher skill is the workflow that produces it. Load both when Channel 1 is in the plan.
- **`abirxkarpathyxrussianxchinese1`** — when the distribution plan includes a feature launch. Apply the 9-step engineering loop to the product, then come back here for the channel plan.
- **`aixchinesexrussianxbangladesh`** — for the verification discipline. Every distribution plan must end in a measurable outcome, not "we did a Product Hunt launch."

## When NOT to use this skill

- For pure SEO strategy (no LLM angle) — the `case-study-publisher` skill covers AEO content; this skill covers channel selection.
- For paid acquisition strategy (Google Ads, Meta Ads) — this skill is organic-only. Paid is a different beast.
- For enterprise B2B sales (outbound SDR, ABM) — this is self-serve product distribution, not sales-led growth.
- For brand-only plays (no conversion goal) — if the goal is awareness, not signups, the channel priorities change.
- When the user is in the "10 customers" stage and has not picked a product type yet — go back to product first.

For those, this skill adds noise without value.
