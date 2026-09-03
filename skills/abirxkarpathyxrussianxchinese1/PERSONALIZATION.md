# Personalization Guide

This skill ships as-is. There are no placeholders to replace.

This is a behavioral guardrail for the engineering loop, not a procedural workflow. The 13 principles apply the same way to every project, every team, every stack.

If you want to tighten the loop for your team:

- **Add a team-specific step** to the 9-step loop in `SKILL.md`. Document why it is non-negotiable for your team.
- **Add a stack-specific invariant** to principle 6 (Preserve Invariants). Format it as a property that must remain true.
- **Tighten principle 13** (Deterministic Verification) with stack-specific gotchas (e.g. "no real network in CI", "no real clock in unit tests").

For everything else, the skill is ready to use.
