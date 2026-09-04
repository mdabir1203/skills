# Frugal Improvisation (Jogar)

Make it work with what is on hand, now. Document the workaround. Plan the proper fix. The discipline is what separates engineering from hack.

The Jogar discipline is the most-misunderstood principle of the Bangladeshi paradigm. Outsiders see it as "scrappy engineering" and assume it is the absence of engineering. It is not. It is engineering that begins from a different axiom: the proper fix is weeks or months away, and the system must work in the meantime. The improvisation is the bridge that buys time. The discipline is making sure the bridge holds and gets replaced before it becomes load-bearing.

## The three properties of a correct improvisation

A correct improvisation has three properties. An incorrect improvisation has the opposite of all three.

### Property 1: It addresses the diagnosed failure, not the perceived one

The improvisation is designed against the output of ground-truth triage (Principle 1). It targets the specific component, not the general feeling. The discipline: write the diagnosis in one sentence, then write the improvisation in one sentence, then verify the improvisation addresses the diagnosis.

Example (software):
- Diagnosis: "The payment gateway is rate-limiting at 200/min due to a shared egress IP."
- Improvisation: "Add a 60-second cache for non-critical payment status reads to reduce the gateway call rate by 70%."
- Verifies: the improvisation reduces the call rate; the rate limit no longer triggers; the user impact is bounded.

Example (mechanical):
- Diagnosis: "The motor is electrically overloaded because the load exceeds the rated capacity."
- Improvisation: "Install a variable-frequency drive (VFD) to reduce the motor speed by 20% during the start-up phase, when the load peaks. The motor runs at rated current after the start-up."
- Verifies: the start-up current is below the rated value; the motor temperature stays within spec; the production cycle is not slowed.

The anti-pattern: the improvisation addresses a symptom, not the cause. "Add a retry loop" for a rate limit. "Replace the motor" for an overload. Both miss the diagnosis.

### Property 2: It is documented as a workaround, with a planned replacement

The improvisation lives in a register. The register tracks:
- The date the improvisation was deployed.
- The operator who deployed it.
- The diagnosed failure it addresses.
- The expected lifetime of the workaround.
- The planned proper fix and its timeline.
- The verification status (Confirmed, Provisional, Unknown).

The register is the system's memory. Without it, the improvisation is invisible to the next operator. With it, the improvisation is part of the system's record.

The discipline: if the improvisation is not in the register, it does not exist. The register is the source of truth. Verbal handoffs are not documentation.

### Property 3: It is small enough that a single operator can understand, maintain, and replace it

The complexity of the improvisation is bounded. A single operator can read the code, understand the design, and replace it with a proper fix. If the improvisation is so complex that only its author can maintain it, it is a liability (Principle 11: Heroic Operator Dependence).

The discipline: write the improvisation so the next person can replace it. Comment the diagnosis. Comment the constraint. Comment the planned fix. The next person is not you.

## The improvisation lifecycle

The lifecycle is the discipline. Each step has a trigger and an exit criterion.

### Step 1: Diagnose

Trigger: a failure is observed, reported, or anticipated.
Output: a Confirmed or Provisional triage (see `ground-truth-triage.md`).
Exit: the failure is named with the specific component.

### Step 2: Improvise

Trigger: the triage is complete, the proper fix is not feasible within the timeline.
Output: a workaround that addresses the diagnosed failure.
Exit: the workaround is deployed and verified.

### Step 3: Document

Trigger: the workaround is deployed.
Output: a register entry with all six fields.
Exit: the entry is searchable, findable, and traceable.

### Step 4: Monitor

Trigger: the entry is in the register.
Output: a schedule for review. Default: weekly for the first month, monthly thereafter.
Exit: the workaround is still in place OR the proper fix has been deployed.

### Step 5: Promote or Replace

Trigger: the workaround has been in place for >2x the originally planned replacement time.
Output: one of two actions.
- **Promote** — if the workaround is now load-bearing and cannot be replaced, promote it to a documented system component. Test it. SLA it. Treat it as a legacy component, not a workaround.
- **Replace** — if the proper fix is feasible, schedule and deploy it. Remove the workaround. Update the register.

Exit: the workaround is either promoted or removed.

### Step 6: Audit

Trigger: quarterly.
Output: a register audit. Count the active workarounds. Count the load-bearing ones. Count the operators who know each one.
Exit: the audit identifies any system that has crossed the "stop iterating" line (Principle 19).

## The 5 improvisation patterns

The patterns are not exclusive. Most workarounds combine several.

### Pattern 1: Add a cache

When a downstream component is slow, rate-limited, or unreliable, add a cache layer in front of it. The cache absorbs the variability.

Examples:
- A 60-second cache for non-critical API reads.
- A 24-hour cache for static asset URLs.
- A local cache of the most-recent database query result.

Limits: the cache must be bounded in size. The cache must have a TTL. The cache must be invalidated on writes. The cache must be observable (you can see what is in it).

### Pattern 2: Add a queue

When the upstream is bursty and the downstream is slow, add a queue between them. The queue smooths the burst.

Examples:
- A message queue between the user-facing API and the slow backend.
- A retry queue with exponential backoff.
- A dead-letter queue for messages that fail repeatedly.

Limits: the queue must be bounded in size. The queue must have a backpressure mechanism. The queue must be drained, not just accumulated.

### Pattern 3: Add a fallback

When the primary path fails, fall back to a degraded but functional path. The fallback is the improvisation.

Examples:
- A payment processor fails. Fall back to a backup processor with higher fees. The user can still pay.
- A primary database is down. Fall back to a read-only replica. The user can still read.
- A primary power source is down. Fall back to a UPS or generator. The critical load is still powered.

Limits: the fallback must be tested. The fallback must be triggered automatically (not requiring operator intervention). The fallback must be visible (the operator knows the system is in fallback mode).

### Pattern 4: Add a throttle

When the demand exceeds the capacity, throttle the demand. The throttle buys time.

Examples:
- A rate limiter on the public API (e.g., 100 req/min per user).
- A queue length limit that rejects new work when the queue is full.
- A circuit breaker that opens when the failure rate exceeds a threshold.

Limits: the throttle must be visible to the caller. The throttle must have a clear error response. The throttle must be reviewed — a 24-hour throttle on a critical operation is a failure, not a feature.

### Pattern 5: Add a manual step

When the automated system cannot be trusted, insert a manual step. The human is the improvisation.

Examples:
- A manual approval for high-value transactions.
- A manual review for flagged content.
- A manual reconciliation for mismatched inventory.

Limits: the manual step must be documented. The manual step must have a target completion time. The manual step must be automated as soon as feasible.

## The improvisation anti-patterns

### Anti-pattern 1: The untracked workaround

The improvisation is deployed, but it is not in the register. The next operator does not know it exists. The improvisation is invisible to the system's memory.

The fix: the register is non-optional. Every improvisation, no matter how small, is in the register. The register is the source of truth. An improvisation without a register entry is a bug waiting to be discovered.

### Anti-pattern 2: The permanent workaround

The improvisation was planned as temporary, but it has been in place for 6 months. It is now load-bearing. The proper fix is still on the roadmap. The system depends on the workaround, but the workaround is treated as a temporary thing.

The fix: the workaround is promoted (Step 5). It is documented as a system component. It is tested. It is SLAd. The roadmap is updated to reflect that the proper fix is no longer the workaround's replacement; it is an improvement on a documented system.

### Anti-pattern 3: The cargo-cult workaround

The improvisation copies a pattern from another system without understanding why the pattern works. The result is a workaround that is wrong for the new context.

Example: copying a circuit breaker pattern from a microservices architecture into a single-threaded desktop application. The pattern is for distributed systems; the new context does not have the failure modes the pattern addresses.

The fix: the improvisation is designed against the diagnosed failure (Property 1). The pattern is chosen because it addresses the failure, not because it is the latest trend.

### Anti-pattern 4: The layered workaround

The first workaround was incorrect. The second workaround is layered on top. The third, fourth, fifth. The system is now five workarounds deep, each one addressing a symptom of the previous one's failure.

The fix: when the second workaround is needed, the first is wrong. Stop. Re-triage. Replace the first workaround with the correct one. The discipline: never add a workaround on top of an undocumented or unverified workaround.

### Anti-pattern 5: The undocumented operator knowledge

The improvisation depends on the operator's tacit knowledge. "You have to restart the service in this specific order, or the cache gets corrupted." The knowledge is in the operator's head, not in the register.

The fix: the knowledge is in the register. The runbook is the documentation. The operator's head is not a reliable storage medium.

## The cut: when not to improvise

There are times when the correct response is not to improvise.

- **Safety-critical systems** — a workaround that risks human safety is refused, even under pressure. The discipline: the workaround is a last resort, not a default.
- **The proper fix is feasible** — if the proper fix is within the timeline, do the proper fix. The improvisation is for when the proper fix is not.
- **The constraint is unreasonable** — if the constraint (e.g., 4 hours of power per day for a safety-critical system) is the cause of the failure, refuse the constraint. The improvisation is a band-aid on a structural problem.
- **The diagnosis is Unknown** — if the failure is not localized, the improvisation is a guess. Refuse. Continue triage.

The discipline: the improvisation is one tool in the box. The other tools are refuse, escalate, and accept.

## How to apply this reference

When this reference is loaded for an improvisation task:

1. Confirm the diagnosis (see `ground-truth-triage.md`). The improvisation without a diagnosis is a guess.
2. Choose the pattern (cache, queue, fallback, throttle, manual step) that addresses the diagnosed failure.
3. Write the register entry. All six fields. Date, operator, diagnosis, expected lifetime, planned proper fix, verification status.
4. Deploy the workaround. Verify it addresses the diagnosed failure.
5. Schedule the review. Default: weekly for the first month.
6. At each review, ask: is the workaround still needed? Is the proper fix feasible now? If yes to either, promote or replace.
7. At each audit, ask: how many workarounds are active? How many are load-bearing? How many operators know each one? If the count exceeds the threshold, schedule a rewrite.
