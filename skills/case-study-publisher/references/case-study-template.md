# Case Study Template

Use this template **exactly**. Every case study follows this structure. No section is optional. The "human moment" opener is non-negotiable — without it, the post is a generic bug writeup, not a case study.

---

## Title (H1)

**5-10 candidates. Pick the one with the most specific number or outcome.**

Test: would you click? Would you remember it a week later?

Good:
- "How a 3-line filter fixed a 21x data divergence bug in our factory tracker"
- "Why our 372 MB release ZIP was 271 MB of stuff we shouldn't have shipped"
- "The 5,622 rows that shouldn't have been there: a snapshot bug postmortem"

Bad:
- "Lessons from a database bug"
- "Optimizing our build process"
- "A retrospective on data integrity"

Rule: if the title doesn't have a number, a verb in the active voice, and a concrete noun, rewrite it.

---

## TL;DR (right under the title, 2-3 sentences)

Direct answer. First sentence = the headline condensed. Second sentence = the impact. Third sentence = the lesson.

Example:
> A 3-line `e_bc_*` filter in our local snapshot writer fixed a 21x data divergence between the factory floor and the cloud. The bug shipped in v1.2.13 and silently polluted 5,622 of 5,898 logs with synthetic test rows. The fix landed in v1.2.17 with a regression test that catches every variant we could think of.

---

## The human moment (1 short paragraph, 2-4 sentences)

The moment the bug became real. The WhatsApp. The phone call. The Slack ping at 2 AM. The dashboard you opened and wished you hadn't.

Why this section exists: without it, you're writing documentation. With it, you're writing a story.

Tone: conversational, present tense for the moment, past tense for everything after.

Example:
> It was 2:47 PM Dubai time. My phone buzzed — a WhatsApp from the floor manager. "Sessions is empty again." I'd heard that line three times this month. I opened the dashboard. Yep. Zero sessions. 5,898 completed logs. 0 sessions. The math didn't add up, and that meant the math was lying.

---

## Background (1-2 paragraphs, set the stakes)

What is the project? What is the bug class? Why does this matter to the user/customer/business? Cite the project repo + version.

Include:
- One sentence on what the project does
- The relevant subsystem (snapshot writer, build pipeline, etc.)
- Why "sessions=0" is a real problem (business impact, customer impact, or developer-impact)

Do NOT include:
- Generic "what is a database" / "what is CI/CD" explanations
- Marketing copy about the project
- More than 2 paragraphs — this is a setup, not the main act

---

## The wrong turn (1-2 paragraphs)

What you tried first that didn't work. Be honest. Be specific. This is the section readers remember most because it's where you look human.

Example:
> My first guess: a database lock. SQLite doesn't love concurrent writers. I wrapped the snapshot in a transaction and added a 200ms retry. Still empty. Next guess: a race condition in the offline JSON producer. I added a "completed_count" sanity log. The count said 5,898. The table said 0. The sanity log was lying — or the data was.

---

## The actual cause (the meat, 3-6 paragraphs)

The root cause. Walk through the logic. Use code snippets. Reference exact files, line numbers, function names.

Structure:
1. The specific line(s) that caused the bug (show the code, before and after)
2. Why the old code looked correct (so the reader doesn't think you're stupid)
3. The exact condition that triggered it (the input that exposed the bug)
4. The asymmetry between local and cloud that let it ship

Rule: every claim here has a file path, a line number, a commit hash, or a count. No exceptions.

---

## The fix (2-4 paragraphs)

The actual code change. Before/after diff. Why this fix is correct. Why it doesn't regress.

Include:
- The actual diff (formatted as a code block, not a screenshot)
- The test that proves the fix (with the test name, not just "we added tests")
- Any forward-compat fixes that came with the main fix (so future changes don't reintroduce it)

---

## Verification (1-2 paragraphs, all numbers)

Real numbers from a real run. The "after" snapshot of the database. The test count before and after.

Format:
> Post-fix, against the real offline JSON (5,898 logs):
> - employees: 20
> - active_sessions: 17 (e_bc_* only)
> - sessions: 276 (matches cloud D1)
> - completed_count: 276
> - completed_logs_filtered_synthetic: 5,622

If you don't have numbers, you don't have a case study. Go back to the repo and get them.

---

## The lesson (1 paragraph, stated directly)

The moral in plain English. No metaphors. No "and so the lesson is." Just the lesson.

Example:
> A meta field that reports the input count instead of the actual insert count is worse than no meta field at all. It told us the bug didn't exist. The next time you write a sanity log, ask: "what does this number actually count, and what would I do if it lied?"

---

## What's next (1-2 paragraphs, the hand-extended ending)

- What ships in the next release because of this lesson
- A question to the reader ("Have you hit a bug like this? How did you find it?")
- A link to the commit, the PR, the test file
- A tease for the next post in the series

NOT a generic "I hope this was helpful" closer. NOT a "stay tuned" without substance.

---

## FAQ (3-5 questions, 1-2 sentence answers each)

Real questions a reader would actually search for. Question-form H3s. These are the AEO extractors.

Examples:
- **What was the root cause of the sessions=0 bug?**
- **How does the e_bc_* synthetic emp_id filter work?**
- **What's the difference between the local snapshot and the cloud D1?**
- **Why did the completed_count meta field lie?**

---

## About the author (2-3 sentences)

Name. Role. Project. One credibility signal (years of experience, prior work, or notable project). One link to the portfolio. One link to the GitHub.

Example (customize via `PERSONALIZATION.md`):
> {{USER_NAME}} ({{USER_SHORT_NAME}}) builds {{PROJECT_NAME}}, a {{PROJECT_ONE_LINE}}. Previously: {{PRIOR_CRED_1}}, {{PRIOR_CRED_2}}, {{PRIOR_CRED_3}}. More of their work at [{{PORTFOLIO_URL}}]({{PORTFOLIO_URL}}) and [{{GITHUB_URL}}]({{GITHUB_URL}}).

---

## References / sources (linked, named)

- The actual commit (with hash)
- Official docs you used (Cloudflare D1, Node.js, etc.) — only what you actually used
- Any prior case study that set up the context
- The AGENTS.md / README.md of the project, if relevant

Format: bullet list with `anchor text — context — link`. No naked URLs.

---

## Metadata (NOT visible to reader, at the bottom)

```yaml
---
title: "How a 3-line filter fixed a 21x data divergence bug in our factory tracker"
date: 2026-08-31
tags: [cloudflare-workers, sql-js, data-integrity, postmortem, {{PROJECT_TAG}}]
canonical_url: {{MEDIUM_URL}}/[your-slug-here]
last_verified: 2026-08-31
word_count: 1240
commit_ref: [hash-here]
---
```
