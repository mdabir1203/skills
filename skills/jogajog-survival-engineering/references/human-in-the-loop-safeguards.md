# Human-in-the-Loop Safeguards

The operator is the last line of defense. Not a fallback. The design.

The Bangladeshi paradigm treats the human as a load-bearing system component, not as a debugging tool. The design assumes the automation will fail. The human is positioned to catch the failure before it becomes an incident. The human's override is respected, not fought.

This is the gold standard in safety-critical systems — nuclear, aviation, medical, financial. The Bangladeshi paradigm applies it as the default, not the exception. The Western "best practice" of automating the human out of the loop is the exception, not the rule.

## The HITL pattern

The pattern has four components: the proposal, the review, the override, and the audit.

### The proposal

The automated system generates a proposal. The proposal is an action, a state, or a recommendation. The proposal is presented to the human in a form the human can review.

Examples:
- A transaction flagged for review: the amount, the counterparty, the risk score, the recommended action.
- A medical dosing recommendation: the patient, the drug, the dose, the proposed time, the alternatives.
- A control system state change: the current state, the proposed state, the conditions that triggered the proposal, the predicted impact.

The discipline: the proposal is complete. The human does not have to dig for context. The proposal is rendered in the human's language (e.g., dollars, not cents; minutes, not milliseconds; risk level, not raw score).

### The review

The human reviews the proposal against the context the human has. The human's review is the source of contextual judgment — the case the system was not designed to handle, the customer the system does not know about, the political context the system is not aware of.

The review is not "approve or deny". The review is "this is the situation as I see it, this is what I want to do, here is why". The system captures the review, the action, and the reasoning.

The discipline: the review is documented. The audit trail includes the proposal, the review, the action, the outcome, and the reasoning. The audit trail is the system's memory of the human's judgment.

### The override

The human can override the proposal. The override is not fought. The system executes the override and records the result.

The override is not "a deviation that needs justification". The override is the system working as designed. The human's judgment is the design.

The discipline: the override is fast. The human does not have to navigate a multi-step approval workflow to override the system. The override is one click, one keystroke, one command.

### The audit

The system audits the human's overrides. The audit looks for patterns:
- Is the human overriding in a specific direction (e.g., always increasing the dose, always approving the high-value transaction)? The override is consistent; the system is miscalibrated.
- Is the human overriding randomly? The override is noise; the system should suppress it.
- Is the human never overriding? The system is correctly calibrated, or the human is rubber-stamping. The audit cannot distinguish these without a deeper review.

The discipline: the audit is not punitive. The audit is feedback. The audit updates the system's calibration so the proposals get more accurate over time. The human's job is to make the system better at proposing, not to defend the human's deviations.

## When to design for HITL

HITL is not appropriate for every system. The discipline: design for HITL when the cost of an automated error exceeds the cost of a human review.

### HITL is appropriate

- **Safety-critical operations** — nuclear, aviation, medical, financial. The cost of an automated error is human life or material loss.
- **High-value transactions** — large dollar amounts, irreversible transfers, contracts. The cost of an automated error is the transaction itself.
- **Irreversible actions** — anything that cannot be undone by the system. The cost of an automated error is the lost state.
- **Ambiguous inputs** — the system cannot make a confident proposal. The cost of a wrong proposal exceeds the cost of a human review.
- **Regulatory requirements** — the regulation requires human review. The cost of non-compliance exceeds the cost of the review.

### HITL is not appropriate

- **High-volume, low-value operations** — the cost of the review exceeds the cost of the error. Example: a $0.10 transaction. The review is more expensive than the error.
- **Latency-critical operations** — the human cannot review fast enough. Example: a real-time bidding system. The bid is gone before the human sees it.
- **The system is correctly calibrated and the human is the bottleneck** — the human is slowing down the system without adding value. Remove the human; automate.
- **The human cannot review** — the human is not available (e.g., the system runs 24/7, the human works 9–5). The HITL pattern requires a human in the loop, not a human on call.

The discipline: the design starts with HITL if any of the "appropriate" conditions apply. The design removes HITL only if the cost of the review is demonstrated to exceed the cost of the error.

## The HITL anti-patterns

### Anti-pattern 1: Rubber-stamping

The human is presented with proposals and approves them without review. The HITL is theater. The human's review adds no value.

The fix: the audit (above) detects rubber-stamping. The feedback to the human is specific: "You approved 1,000 of 1,000 proposals in the last 24 hours. The expected approval rate for your portfolio is 60%." The human is asked to review their behavior.

### Anti-pattern 2: Override theatre

The human can override, but the override is recorded as a "deviation" that requires justification. The human is discouraged from overriding. The system is not learning from the human's judgment; it is policing it.

The fix: the override is the design. The justification is free-form. The system learns from the override. The human is rewarded for catching the system's mistakes, not penalized for deviating.

### Anti-pattern 3: Late HITL

The human is inserted into the loop after the automated system has already acted. The human is reviewing a fait accompli. The override is impossible or expensive.

The fix: the HITL is in the proposal stage, before the action. The human reviews the proposal; the system executes the action. The action is reversible if the human overrides after the fact (see Pattern: reversible actions below).

### Anti-pattern 4: Missing context

The human is presented with a proposal but not the context needed to review it. The human approves or denies without understanding. The HITL is theater.

The fix: the proposal includes the context. The human does not have to dig for it. The context is rendered in the human's language. The system is opinionated about what the human needs to see.

### Anti-pattern 5: HITL as a bug fix

The system has a bug. The HITL is added as a workaround. The HITL is in place while the bug is fixed. The bug is never fixed. The HITL becomes permanent.

The fix: the HITL is a workaround (see `frugal-improvisation.md`). The register entry includes the planned removal date. The HITL is removed when the underlying bug is fixed.

## The HITL + automation balance

The right balance is not "all HITL" or "all automation". The right balance is calibrated automation with HITL on the edges.

### The calibration question

For each decision the system makes, ask:
- What is the cost of an automated error?
- What is the cost of a human review?
- What is the cost of a missed review (i.e., the human is not available)?

If the cost of an automated error >> cost of a human review, HITL.
If the cost of a human review >> cost of an automated error, automate.
If the cost of a missed review > both, design for graceful degradation (the system acts; the human reviews later; the action is reversible).

### The "reversible actions" pattern

Some actions are reversible. The HITL is post-hoc: the system acts, the human reviews, the human can reverse. The system has a rollback mechanism. The rollback is tested.

Examples:
- A content moderation system removes a post. The human reviews. The human restores. The restoration is one click.
- A trading system cancels an order. The human reviews. The human re-issues. The re-issue is one click.
- A configuration change is deployed. The human reviews. The human rolls back. The rollback is one command.

The discipline: the rollback is fast, the rollback is tested, the rollback is observed. The HITL is in the rollback stage, not the proposal stage.

## The HITL operator design

The human is part of the system. The system is designed for the human's capabilities and limitations.

### Capability fit

- The human can review ~50–200 proposals per hour, depending on complexity. Above this, the human is overwhelmed. Below, the human is bored.
- The human's review accuracy degrades with fatigue, time-on-task, and decision density. The discipline: rotate the human. Limit session length. Build in breaks.
- The human's review is best on cases that match the human's training. Out-of-distribution cases should be escalated, not force-fit into the human's pattern.

### Limitation fit

- The human is not available 24/7. The system must work without the human (graceful degradation) or be off when the human is off.
- The human is not consistent. The system must be tolerant of human variability.
- The human is not the bottleneck. The system must be faster than the human on the easy cases so the human can focus on the hard cases.

## The HITL in software: a concrete pattern

The pattern in software:
1. The system makes a decision (e.g., flag this transaction as suspicious).
2. The decision is queued for human review.
3. The human reviews the decision in a UI: the proposal, the context, the recommended action, the override options.
4. The human's action is recorded. The outcome is fed back to the model's training.
5. The system is calibrated: the false positive rate, the false negative rate, the review load are tracked.

The discipline:
- The queue is bounded. The human does not review 10,000 proposals; the human reviews the 50 most-important proposals.
- The review is fast. The UI is one click per case. The human is not typing essays.
- The calibration is tracked. The system improves. The HITL is a feedback loop, not a bottleneck.

## The HITL in non-software domains

### Industrial control

A factory control system proposes a state change (e.g., "increase reactor temperature by 5°C"). The human operator reviews. The operator approves, denies, or modifies. The action is recorded. The audit trail is reviewed by the safety team.

The discipline: the operator is positioned to see the proposal in the control room. The proposal is rendered on the same screens the operator is already watching. The override is a single physical control (a button, a switch, a dial).

### Medical

A clinical decision support system proposes a treatment (e.g., "drug X, dose Y, frequency Z"). The clinician reviews. The clinician approves, denies, or modifies. The action is recorded in the patient's chart. The audit trail is part of the medical record.

The discipline: the system is a decision aid, not a decision maker. The clinician is the decision maker. The system is a tool, like a stethoscope — it informs, it does not decide.

### Aviation

A flight management system proposes a course change. The pilot reviews. The pilot approves, denies, or modifies. The action is recorded. The audit trail is part of the flight data recorder.

The discipline: the pilot can always override. The override is one control input. The system is a tool. The pilot is in command.

## The HITL cut

When to refuse to remove the human from the loop:
- The cost of an automated error exceeds the cost of a human review (the primary condition).
- The system is in a new domain and the calibration is unknown. The human is the calibration.
- The action is irreversible. The human is the reversibility.

When to remove the human:
- The system is calibrated. The human's override rate is below 5%. The human's accuracy on overrides is below the system's accuracy. The human is a net negative on the metric.
- The cost of the human review exceeds the cost of the automated error. The metric is clear.
- The human is not available. The system must work without the human.

## How to apply this reference

When this reference is loaded for an HITL design task:

1. State the decision the system is making. State the cost of an automated error. State the cost of a human review.
2. If cost of automated error >> cost of review, design for HITL. If not, justify the removal.
3. Design the proposal: complete, in the human's language, with the context.
4. Design the review: fast, one-click, with a free-form justification.
5. Design the override: respected, not fought. The override is the system working as designed.
6. Design the audit: not punitive. The audit is feedback. The audit updates the system's calibration.
7. Track the calibration. Remove the human when the metric justifies the removal. Not before.
