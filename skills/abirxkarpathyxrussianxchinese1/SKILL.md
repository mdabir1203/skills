---
name: abirxkarpathyxrussianxchinese1
description: This skill should be used when the user wants the 9-step engineering loop applied to a code change — Understand, Define, Simplify, Build, Test, Attack, Measure, Verify, Iterate. Triggers on phrases like "be pragmatic about this", "think before coding", "karpathy mode", "ship the smallest correct change", "outcome-driven check", "before you write code, read first", or any task where the user wants the agent to slow down and verify intent = logic = execution = meaning instead of rushing to a commit. Combines Karpathy pragmatism, Chinese iteration speed, and Russian engineering rigor. Sits on top of the `aixchinesexrussianxbangladesh` skill — apply that one for the verification discipline, this one for the engineering loop.
---

# Karpathy Pragmatism × Chinese Iteration × Russian Engineering Rigor

The goal is not to maximize code written. The goal is to produce the smallest correct change that achieves the intended outcome and can be verified with evidence.

The framework draws from pragmatic engineering, high-iteration engineering, and rigorous systems engineering. These are engineering influences, not cultural stereotypes.

**This skill follows Outcome-Driven Engineering** (see `aixchinesexrussianxbangladesh`). Apply that skill for the verification discipline; this skill is the engineering loop.

## The 9-step loop

`Understand → Define → Simplify → Build → Test → Attack → Measure → Verify → Iterate`

Every step is non-negotiable. Skipping a step is the most common cause of "should work" failures.

## The 13 principles

### 1. Understand Before Coding

Before changing code:

1. Read the relevant files.
2. Inspect nearby tests.
3. Search for existing implementations and patterns.
4. Understand dependencies and constraints.
5. Identify assumptions that materially affect the solution.
6. Determine what the user actually wants, not merely what their wording literally requests.

Do not redesign a system you have not understood. Do not invent architecture when the existing architecture can satisfy the requirement.

If ambiguity creates meaningful risk, ask one concise clarifying question. Otherwise, make the safest reasonable interpretation and state the assumption.

Prefer evidence over assumptions.

### 2. Convert Requests Into Outcomes

Every meaningful task must become an observable, verifiable outcome.

Examples:

- **"Add validation"** — Invalid inputs are rejected, valid inputs remain accepted, and existing valid workflows continue to work.
- **"Fix the bug"** — Reproduce the bug, encode the failure as a test, fix it, and verify the regression path.
- **"Refactor X"** — Change the implementation while preserving externally observable behavior.
- **"Make it faster"** — Measure the baseline, identify the bottleneck, define a target, optimize it, and measure again.
- **"Make offline mode work"** — An intended offline action survives disconnection and eventually produces the correct synchronized state.
- **"Fix login"** — The intended user can authenticate, obtain the correct session state, access protected resources, and remain authenticated as expected.
- **"Connect the payment API"** — A successful payment produces the correct persisted financial and order state, not merely an HTTP success.
- **"Improve search"** — Relevant results become more useful according to a measurable relevance or latency criterion.
- **"Add an AI feature"** — The output is correct, grounded, appropriately formatted, and useful for the intended workflow.

Always ask: what must become true when this task is finished?

### 3. Functional Equivalence

For meaningful changes, compare four layers:

```
INTENT    What the human/user/business wants
   ↓
LOGIC     What the code says should happen
   ↓
EXECUTION What the running system actually does
   ↓
MEANING   What the result actually means in the real workflow
```

Target: `Intent = Logic = Execution = Meaning`.

A change is not fully verified merely because:

- the code compiles
- a function returns an expected value
- an endpoint returns 200
- a UI renders
- a unit test passes

The verification level must match the claim. Example: HTTP 200 does not prove "payment recorded correctly → order marked paid → customer state updated → duplicate payment avoided".

### 4. Define a Functional Contract

When appropriate, express behavior as:

```
Given [state]
When  [action]
Then  [observable outcome]
```

Example:

```
Given: A worker starts at 10:32.
When:  The worker finishes at 16:35.
Then:  The recorded production duration is exactly 6h 03m.
```

Prefer testing the behavior users and businesses depend upon rather than only testing internal implementation details.

### 5. Test the Outcome

Choose the smallest test capable of proving the claim. Use:

- **Unit tests** when individual logic is the claim
- **Integration tests** when component interaction is the claim
- **Functional / E2E tests** when a complete user workflow is the claim
- **Business / outcome verification** when correctness depends on real-world meaning

Do not use a weaker test to make a stronger claim.

Recipes:

- **For a bug:** Reproduce → Failing test → Minimal fix → Passing test → Regression verification
- **For a refactor:** Baseline → Refactor → Focused tests → Regression tests → Behavior preserved
- **For performance:** Baseline measurement → Bottleneck → Target → Change → Measurement
- **For a feature:** Expected behavior → Functional test → Implementation → Verification

### 6. Preserve Invariants

Identify properties that must remain true. Examples:

- `finish_time >= start_time`
- `duration = finish_time - start_time`
- `completed_units <= assigned_units`
- Unauthorized actors cannot perform protected operations
- Acknowledged operations cannot silently disappear
- Migrated records preserve their intended meaning

Before and after important changes:

- Identify relevant invariants
- Verify them where practical
- Make the smallest change
- Verify them again
- Explicitly acknowledge intentional invariant changes

Implementation can change. Important invariants should not silently change.

### 7. Baseline Before Refactoring

Before changing established behavior:

- Run relevant tests
- Record pre-existing failures
- Understand current behavior
- Make the change
- Run focused verification
- Run relevant regression tests
- Compare before/after behavior

Do not attribute pre-existing failures to your change. Do not silently repair unrelated failures.

### 8. Attack Your Own Solution

After the expected path works, ask: how could this realistically fail?

Consider relevant:

- invalid input
- empty input
- boundary values
- duplicates
- retries
- stale state
- concurrent actions
- network interruption
- offline operation
- refresh
- restart
- partial writes
- timezone differences
- date boundaries
- multiple devices
- malformed external responses
- unexpected user behavior
- authorization bypass
- inconsistent state

Do not create irrelevant edge cases merely to increase test count. Attack realistic failure modes proportional to the risk.

### 9. Debug From Evidence

When debugging:

```
Reproduce
   ↓
Capture actual state
   ↓
Define expected state
   ↓
Find first divergence
   ↓
Form hypothesis
   ↓
Test hypothesis
   ↓
Make smallest supported change
   ↓
Reproduce
   ↓
Regression test
```

Do not randomly modify multiple areas until the failure disappears. Do not claim a root cause without evidence.

Prefer:

> "The first divergence occurs at X; evidence suggests Y; this test distinguishes Y from Z."

over:

> "Maybe changing X fixes it."

### 10. Simplicity First

Implement the minimum sufficient solution. Avoid:

- speculative architecture
- unnecessary abstraction
- premature optimization
- unnecessary configuration
- unnecessary dependencies
- generalized solutions for one-off problems
- framework changes without evidence
- architecture designed for hypothetical future requirements

Ask: can this be solved correctly with fewer moving parts? If yes, prefer that solution.

### 11. Surgical Changes

Keep the diff tightly connected to the request. Do not:

- reformat unrelated files
- rename unrelated variables
- rewrite adjacent modules
- upgrade dependencies without need
- reorganize directories without need
- clean unrelated technical debt

Clean up only what your change makes obsolete. Minimal diff. Maximum verified outcome.

### 12. Follow Repository Conventions

Before introducing a new pattern:

- Search the repository
- Find similar existing code
- Follow established conventions unless there is evidence they are inadequate

Local consistency generally beats personal preference. Respect existing naming, architecture, test style, error handling, dependency patterns, formatting, configuration, and deployment conventions.

### 13. Deterministic Verification

Where practical:

- control time in tests
- control randomness
- avoid hidden global state
- make state transitions explicit
- avoid test-order dependencies
- eliminate flaky tests
- make failures reproducible

If behavior cannot reliably be reproduced, it cannot reliably be verified.

## Truncation note (source content was incomplete)

The source document for this skill continued past principle 13 with additional sections on **Business Reality** workflows (Money, Production, Automation, AI, Security, Data migration) — the same workflows already covered by the sister skill `aixchinesexrussianxbangladesh`. The pasted source was truncated mid-sentence in that section. The full content has not yet been supplied.

Until the missing source is pasted, this skill ships as **v0.1.0-rc1** (release candidate 1). When the rest of the source is supplied, the truncation stub will be replaced with the full text and the skill will move to **v0.2.0**.

If you want the Business Reality workflows in v0.1.0-rc1, apply the `aixchinesexrussianxbangladesh` skill alongside this one. The two skills are designed to compose.

## How to apply this skill

When this skill is active for a task:

1. **Understand** — read the code, find the pattern, identify the constraints. Do not start coding.
2. **Define** — write the outcome as a `Given / When / Then` contract, or as a one-sentence verifiable claim.
3. **Simplify** — ask: can this be solved correctly with fewer moving parts?
4. **Build** — implement the minimum sufficient solution. Surgical diff.
5. **Test** — choose the smallest test that proves the claim.
6. **Attack** — attack realistic failure modes. Skip irrelevant ones.
7. **Measure** — when measurement matters, baseline → change → measure.
8. **Verify** — `Intent = Logic = Execution = Meaning`. Mark VERIFIED, INFERRED, NOT VERIFIED, BLOCKED, or PRE-EXISTING.
9. **Iterate** — if not DONE, loop back to the failing step.

Combine with `aixchinesexrussianxbangladesh` for the verification discipline. The two skills cover the engineering loop and the outcome discipline; together they form a complete operating system for shipping code.

## When NOT to use this skill

- For pure research, exploration, or "what would this look like" questions
- For brainstorming or open-ended design discussions
- For tasks where the user explicitly wants "quick and dirty" output
- For pure documentation, copy, or writing tasks with no business behavior
- For one-line typo fixes or trivial config changes

For those, the loop adds friction without value. Apply it only to tasks that change a system, ship a change, or affect a real-world outcome.
