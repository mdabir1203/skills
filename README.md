# mdabir1203/skills

A monorepo of AI-agent skills maintained by [Mohammad Abir](https://github.com/mdabir1203).

Each skill is a self-contained package that teaches an AI agent (Claude, Cursor, Codex, Mavis, etc.) a specific workflow — knowledge the model doesn't fully possess out of the box. Skills turn a general-purpose agent into a specialist for a particular task.

## Skills in this repo

| Skill | What it does | Status |
|---|---|---|
| [`case-study-publisher`](./skills/case-study-publisher/) | Turn code fixes into AEO-optimized Medium / Dev.to / Hashnode / HackerNoon case studies with zero AI slop | v1.0.0 |
| [`keynote-explainer`](./skills/keynote-explainer/) | Build Apple/Google/Silicon Valley-style motion video explainers in Remotion — 5-stage pipeline, 6 neuromarketing drivers, controlled imperfection as signature | v0.1.0 |
| [`aixchinesexrussianxbangladesh`](./skills/aixchinesexrussianxbangladesh/) | Outcome-Driven Engineering — 17 principles as a behavioral guardrail, not a procedural workflow. Stop at verified movement toward the desired state, not at "should work" | v0.1.0 |
| [`abirxkarpathyxrussianxchinese1`](./skills/abirxkarpathyxrussianxchinese1/) | The 9-step engineering loop (Understand → Define → Simplify → Build → Test → Attack → Measure → Verify → Iterate) with 13 principles. Composes with `aixchinesexrussianxbangladesh` for full coverage | v0.1.0-rc1 |

More skills in progress. If you have a request, open an issue.

## How to use a skill

1. Pick a skill from the table above.
2. Read its [`SKILL.md`](./skills/case-study-publisher/SKILL.md) — that's the entry point.
3. **Read [`PERSONALIZATION.md`](./skills/case-study-publisher/PERSONALIZATION.md)** for that skill to replace the placeholders (`{{USER_NAME}}`, `{{MEDIUM_URL}}`, etc.) with your own details.
4. Drop the skill folder into your AI agent's skills directory.
5. Invoke the skill with one of the trigger phrases listed in its `SKILL.md` description (e.g. *"write a case study for this fix"*).

The skill then runs its full workflow: gather the fix, draft, audit, hand you publish-ready markdown.

## Why this repo exists

I ship code in production. Production breaks. Production breaks again, and you learn something new. Without a system, the lesson dies in a Slack thread.

This repo is the system. Every meaningful fix I ship gets a case study, and every case study turns into a published post on Medium. The case studies are the marketing, the portfolio is the storefront, the consulting is the income.

If you ship code in production too, the same pattern works for you. The skills here are the templates; the lessons are yours.

## Contributing

PRs welcome. For new skills, see [`CONTRIBUTING.md`](./CONTRIBUTING.md). For fixes to existing skills, just open a PR — keep the change minimal, add a test if the script changes, and update the relevant reference files.

## License

MIT. See [`LICENSE`](./LICENSE). Use it, fork it, sell services around it. Keep the copyright notice.

## Credits

Built and maintained by [Mohammad Abir](https://github.com/mdabir1203). Case studies published at [medium.com/@md.abir1203](https://medium.com/@md.abir1203). Portfolio: [abir.getwaved.ai](https://abir.getwaved.ai).
