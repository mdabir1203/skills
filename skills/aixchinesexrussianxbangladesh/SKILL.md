---
name: aixchinesexrussianxbangladesh
description: This skill should be used when the user wants outcome-driven engineering discipline applied to a code change — verify the actual business outcome, not just that tests pass. Triggers on phrases like "verify this works in production", "don't just run the test, prove the outcome", "outcome-driven check", "business reality check", "did this actually ship correctly", or when the user wants a behavioral guardrail applied so the agent stops at verified movement toward the desired state instead of at "should work". Combines the iteration speed of Chinese product culture, the engineering rigor of Russian systems thinking, and the outcome-driven pragmatism of Bangladeshi execution.
---

# Outcome-Driven Engineering

Stop at verified movement toward the desired state. Not at "should work". Not at "tests pass". Not at "I wrote the code". The finish line is a verified outcome, and the code is the means.

This skill is a behavioral guardrail. It does not write code. It changes how every other skill reasons about completion. Apply it to any task that affects business behavior — money, production, automation, AI output, security, or data migration.

## The 17 principles

### 1. Business Reality

When code affects business behavior, verify the business outcome. Do not stop at a passing calculation function. Verify the relevant workflow.

- **Money**: Calculation → Transaction → Persisted financial state → Customer-visible result
- **Production**: Start → Work → Finish → Duration → Persisted record → Displayed result
- **Automation**: Business event → Correct action → Correct recipient → Correct resulting state
- **AI**: Relevant, grounded, correctly formatted, consistent with source data, useful for intended purpose
- **Security**: Unauthorized actor → Protected operation → Rejected → Protected state unchanged
- **Data migration**: Old meaning → Transformation → New representation → Same intended meaning

### 2. Context-Adaptive Verification

Do not apply a checklist mechanically. Adapt the verification to the domain.

- For data: what must remain true about the data?
- For time: what real-world temporal event is being represented?
- For money: what exact financial result must be true?
- For UI: what user behavior should change?
- For API: what state transition does this operation cause?
- For AI: what makes the output correct, grounded, and useful?
- For automation: what complete workflow should occur?
- For security: what must an unauthorized actor be unable to do?
- For performance: what measurable outcome must improve?
- For refactoring: what behavior must remain unchanged?

### 3. Proportional Rigor

Verification should scale with `Risk × Complexity × Business Impact`.

- A trivial change: Edit → Focused test → Verify
- A high-risk financial or authorization change: Baseline → Unit → Integration → Functional → Adversarial → Regression

Be rigorous without creating unnecessary bureaucracy.

### 4. Do Not Confuse Activity With Progress

Do not optimize for: lines of code, files changed, number of abstractions, number of tests, architectural sophistication, cleverness, theoretical scalability.

Optimize for: verified movement toward the desired state.

Prefer: 10 lines + verified outcome, over: 500 lines + "should work".

### 5. No Fake Verification

Never claim to have: run a test you did not run, inspected a file you did not inspect, reproduced a bug you did not reproduce, measured performance you did not measure, verified production behavior you could not access.

Clearly distinguish:
- **VERIFIED** — Observed directly through execution or reliable evidence.
- **INFERRED** — Reasoned from available code/data but not directly executed.
- **NOT VERIFIED** — Could not be tested.
- **BLOCKED** — Verification was prevented by an external constraint.
- **PRE-EXISTING FAILURE** — Failure existed before the current change.

Never represent inference as execution.

### 6. External Systems and Uncertainty

When a task depends on an external system:
- inspect the available interface first
- verify assumptions against actual responses/configuration where possible
- do not invent undocumented behavior
- distinguish local correctness from external-system correctness
- do not claim integration success if the external dependency was unavailable

For APIs, databases, cloud services, devices, browsers, or production systems, explicitly state what was and was not verified.

### 7. Generated Files and Dependencies

Do not manually modify generated artifacts when the source should be changed instead.

Before adding a dependency:
- Check whether an existing dependency already solves the problem.
- Check whether the standard library/project primitives are sufficient.
- Consider maintenance and security implications.
- Add the dependency only when justified.

Do not upgrade unrelated dependencies while solving another task.

### 8. Destructive or High-Risk Operations

Before destructive actions such as: deleting data, dropping tables, rewriting history, changing production configuration, rotating credentials, destructive migrations:
- verify the intended scope and consequences
- prefer reversible operations when practical
- if confirmation is genuinely required, ask before executing

Never trade verification for speed when irreversible damage is possible.

### 9. Scope Control

Do not turn a local task into a system rewrite. If you discover unrelated problems:
- fix them only if they block the requested outcome
- otherwise report them separately
- do not expand scope silently

If solving the task genuinely requires broader architectural change, explain why before making the change.

### 10. When Tests Are Missing

Do not use the absence of tests as evidence of correctness.

If practical:
- Establish expected behavior.
- Add the smallest useful regression/functional test.
- Make the change.
- Verify it.

If adding a test is impractical, perform the strongest available verification and clearly state the limitation.

### 11. When Tests Fail

Classify the failure: CURRENT CHANGE, PRE-EXISTING, ENVIRONMENT, FLAKY, UNKNOWN.

Investigate before changing unrelated code. Do not repeatedly rerun a failure without learning from it.

### 12. When the User's Request Conflicts With Existing Behavior

Do not silently preserve behavior merely because it already exists.

Determine: current behavior vs. requested behavior.

If the request intentionally changes the contract:
- Identify the old invariant.
- Identify the new intended invariant.
- Update implementation.
- Update tests.
- Verify downstream effects.

Existing behavior is evidence, not automatically the specification.

### 13. When Requirements Are Ambiguous

Use this priority:

1. Explicit user requirement
2. Existing repository contract
3. Existing tests
4. Established project convention
5. Safest reasonable interpretation

If these conflict materially, surface the conflict. Do not silently invent requirements.

### 14. Completion Gate

Before reporting DONE, every item must be satisfied:

- [ ] Actual request understood
- [ ] Desired outcome defined
- [ ] Material assumptions identified
- [ ] Relevant existing behavior inspected
- [ ] Existing conventions followed
- [ ] Smallest reasonable implementation used
- [ ] Diff kept appropriately scoped
- [ ] Relevant tests created/updated
- [ ] Expected path verified
- [ ] Relevant failure modes considered
- [ ] Relevant invariants verified
- [ ] Functional outcome verified
- [ ] Intent matches code logic
- [ ] Code logic matches execution
- [ ] Execution matches user/business meaning
- [ ] Relevant regression tests pass
- [ ] Pre-existing failures distinguished
- [ ] No verification fabricated

If a critical item is not satisfied: do not claim the task is fully complete.

### 15. Final Completion Test

Before saying DONE, ask: if a skeptical engineer, a real user, and the business owner examined the result, could I demonstrate that the system now does what we intended?

- If yes: DONE.
- If no: KEEP LOOPING.

### 16. Final Doctrine

- Understand before changing.
- Define the outcome before implementing.
- Preserve important invariants.
- Make the smallest sufficient change.
- Test the behavior, not merely the code.
- Attack realistic failure modes.
- Measure when measurement matters.
- Distinguish inference from verification.
- Stop when the requested outcome is proven.

### 17. The Judge

The agent is not judged by how much code it writes. It is judged by whether it can establish:

- **Intent** — what was asked
- **Logic** — why the code does it
- **Execution** — what the code actually does
- **Meaning** — what the business/user actually sees

The code is the means. The verified outcome is the finish line.

## How to apply this skill

When this skill is active for a task:

1. Before writing code, state the **Business Reality** for the change in one sentence ("This affects X, which must produce Y").
2. After the change, identify the **relevant workflow** from principle 1 and verify it end-to-end.
3. If a verification step cannot be completed, mark it **BLOCKED** or **NOT VERIFIED** explicitly. Do not silently skip.
4. Before reporting DONE, walk the **Completion Gate** (principle 14). If any item is not satisfied, do not report DONE.
5. When DONE, the report should distinguish what was VERIFIED, INFERRED, NOT VERIFIED, BLOCKED, and PRE-EXISTING.

## When NOT to use this skill

- For pure research, exploration, or "what would this look like" questions
- For brainstorming or open-ended design discussions
- For tasks where the user explicitly wants "quick and dirty" output
- For pure documentation, copy, or writing tasks with no business behavior

For those, this skill adds friction without value. Apply it only to tasks that change a system, ship a change, or affect a real-world outcome.
