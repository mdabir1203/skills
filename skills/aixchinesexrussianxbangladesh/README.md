# aixchinesexrussianxbangladesh

Outcome-driven engineering discipline for any task that changes a system. Stops the agent at verified movement toward the desired state, not at "should work".

> A behavioral guardrail, not a procedural skill. Apply it to any task that affects business behavior — money, production, automation, AI output, security, or data migration. The skill does not write code. It changes how every other skill reasons about completion.

## What it does

When this skill is active for a code change, the agent:

1. States the **Business Reality** for the change in one sentence before writing any code
2. Identifies the relevant workflow (Money, Production, Automation, AI, Security, Data migration) and verifies it end-to-end
3. Marks every verification step as **VERIFIED**, **INFERRED**, **NOT VERIFIED**, **BLOCKED**, or **PRE-EXISTING** — never silently skips
4. Walks the **Completion Gate** (18 items) before reporting DONE
5. Passes the **Final Completion Test** — would a skeptical engineer, a real user, and the business owner all agree the system now does what was intended?

The 17 principles are baked in. The hard ones:
- Do not confuse activity with progress (10 lines + verified outcome beats 500 lines + "should work")
- No fake verification (never claim to have run a test you did not run)
- Context-adaptive rigor (a trivial change needs a focused test; a financial change needs adversarial)
- Scope control (do not turn a local task into a system rewrite)

## When to use it

Use it when:
- A change affects money, production state, customer-visible behavior, security boundaries, or AI output
- The user says *"verify this works in production"*, *"don't just run the test, prove the outcome"*, *"outcome-driven check"*, *"did this actually ship correctly"*
- The user wants a behavioral guardrail applied so the agent stops at verified movement instead of "should work"
- A task previously claimed DONE but turned out not to actually work

Do not use it for:
- Pure research, exploration, "what would this look like" questions
- Brainstorming or open-ended design discussions
- Tasks where the user explicitly wants quick-and-dirty output
- Pure documentation, copy, or writing tasks with no business behavior

For those, this skill adds friction without value.

## What's in the box

```
aixchinesexrussianxbangladesh/
â”œâ”€â”€ SKILL.md           # the 17 principles + how to apply them
â”œâ”€â”€ README.md          # this file
â”œâ”€â”€ CHANGELOG.md       # version history
â””â”€â”€ PERSONALIZATION.md # no placeholders; ships as-is
```

No `references/` or `assets/` because this is a philosophy, not a procedural workflow. If you want to add a checklist or template, add it under `assets/`.

## The 17 principles, summarized

1. **Business Reality** — verify the business outcome, not the unit test
2. **Context-Adaptive Verification** — adapt the checklist to the domain
3. **Proportional Rigor** — risk × complexity × business impact drives the depth
4. **Do Not Confuse Activity With Progress** — verified movement, not line count
5. **No Fake Verification** — VERIFIED, INFERRED, NOT VERIFIED, BLOCKED, PRE-EXISTING
6. **External Systems and Uncertainty** — distinguish local from external correctness
7. **Generated Files and Dependencies** — modify source, not artifacts; justify new deps
8. **Destructive or High-Risk Operations** — verify scope, prefer reversible
9. **Scope Control** — do not turn a local task into a system rewrite
10. **When Tests Are Missing** — add the smallest useful test
11. **When Tests Fail** — classify before changing code
12. **When the User's Request Conflicts With Existing Behavior** — change the contract explicitly
13. **When Requirements Are Ambiguous** — use the priority order, surface conflicts
14. **Completion Gate** — 18 items must pass before DONE
15. **Final Completion Test** — could a skeptical engineer + real user + business owner all agree?
16. **Final Doctrine** — 9 rules of the road
17. **The Judge** — judged by verified outcomes, not code volume

## Why this exists

Most agent failures are not capability failures. They are discipline failures. The agent writes the code, runs the test, sees it pass, reports DONE — and the actual business outcome is broken. The user finds out in production.

This skill exists to make that failure mode expensive to commit. Every DONE report must distinguish what was actually verified from what was inferred or assumed. The completion gate is the gate. The final test is the test.

## License

MIT â€” see [`../../LICENSE`](../../LICENSE). Use it, fork it, sell services around it. Just keep the copyright notice.
