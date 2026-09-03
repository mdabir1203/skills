# abirxkarpathyxrussianxchinese1

The 9-step engineering loop applied to a code change: Understand, Define, Simplify, Build, Test, Attack, Measure, Verify, Iterate. The goal is the smallest correct change that achieves the intended outcome and can be verified with evidence.

> **v0.1.0-rc1** — release candidate. The source content was truncated at principle 13. The full document continues with Business Reality workflows (Money, Production, Automation, AI, Security, Data migration) that overlap with the sister skill `aixchinesexrussianxbangladesh`. When the missing source is supplied, this skill moves to v0.2.0 with the full content.

## What it does

When this skill is active for a code change, the agent:

1. **Understands** before coding — reads files, inspects tests, finds patterns, identifies constraints
2. **Defines** the outcome — every request becomes an observable, verifiable claim
3. **Simplifies** — asks "can this be solved with fewer moving parts?"
4. **Builds** the minimum sufficient solution with a surgical diff
5. **Tests** the outcome at the right level (unit, integration, functional, business)
6. **Attacks** realistic failure modes, not irrelevant edge cases
7. **Measures** when measurement matters — baseline → change → measure
8. **Verifies** that `Intent = Logic = Execution = Meaning`
9. **Iterates** if not DONE — loops back to the failing step

The 13 principles are baked in. The hard ones:
- Convert every request into an outcome ("Add validation" → "invalid inputs rejected, valid inputs accepted, existing workflows continue working")
- Functional equivalence across four layers (Intent → Logic → Execution → Meaning)
- Preserve invariants — implementation can change, important invariants cannot silently change
- Attack your own solution — how could this realistically fail?
- Debug from evidence — "first divergence at X, evidence suggests Y, test distinguishes Y from Z"
- Surgical changes — minimal diff, maximum verified outcome

## Sister skill

This skill **composes with `aixchinesexrussianxbangladesh`** (Outcome-Driven Engineering). The two are designed to work together:

- **`abirxkarpathyxrussianxchinese1`** — the engineering loop (Understand → ... → Iterate)
- **`aixchinesexrussianxbangladesh`** — the verification discipline (Business Reality, Completion Gate, No Fake Verification, Final Completion Test)

Apply both for a complete operating system. Apply just the engineering loop when the work is small and the verification discipline would be overhead.

## When to use it

Use it when:
- The user says *"be pragmatic about this"*, *"karpathy mode"*, *"think before coding"*, *"ship the smallest correct change"*
- The user wants the agent to slow down and verify intent = logic = execution = meaning
- A task affects business behavior and needs the 9-step loop applied rigorously
- A previously-shipped change turned out not to work in production

Do not use it for:
- Pure research, exploration, "what would this look like" questions
- Brainstorming or open-ended design discussions
- Tasks where the user explicitly wants quick-and-dirty output
- One-line typo fixes or trivial config changes
- Pure documentation, copy, or writing tasks

## What's in the box

```
abirxkarpathyxrussianxchinese1/
â”œâ”€â”€ SKILL.md           # the 9-step loop + 13 principles + truncation note
â”œâ”€â”€ README.md          # this file
â”œâ”€â”€ CHANGELOG.md       # version history
â””â”€â”€ PERSONALIZATION.md # ships as-is
```

No `references/` or `assets/` because this is a process, not a procedural workflow.

## The 13 principles, summarized

1. **Understand Before Coding** — read, inspect, search, identify assumptions
2. **Convert Requests Into Outcomes** — every task becomes an observable claim
3. **Functional Equivalence** — Intent = Logic = Execution = Meaning
4. **Define a Functional Contract** — Given / When / Then
5. **Test the Outcome** — pick the smallest test that proves the claim
6. **Preserve Invariants** — implementation changes, important invariants don't
7. **Baseline Before Refactoring** — measure before, measure after
8. **Attack Your Own Solution** — realistic failure modes, not irrelevant ones
9. **Debug From Evidence** — first divergence, hypothesis, smallest supported change
10. **Simplicity First** — minimum sufficient solution
11. **Surgical Changes** — minimal diff, maximum verified outcome
12. **Follow Repository Conventions** — local consistency beats personal preference
13. **Deterministic Verification** — reproducible behavior, or it cannot be verified

## The 9-step loop

`Understand → Define → Simplify → Build → Test → Attack → Measure → Verify → Iterate`

Skipping a step is the most common cause of "should work" failures. The loop is non-negotiable.

## Why this exists

Most engineering failures are not capability failures. They are discipline failures. The agent writes the code, runs the test, sees it pass, reports DONE — and the actual business outcome is broken. The user finds out in production.

This skill exists to make the engineering loop explicit. Every step has a name. Every step has a check. The agent cannot quietly skip a step because the step is named in the loop.

## License

MIT â€” see [`../../LICENSE`](../../LICENSE). Use it, fork it, sell services around it. Just keep the copyright notice.
