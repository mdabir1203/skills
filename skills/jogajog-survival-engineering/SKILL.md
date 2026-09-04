---
name: jogajog-survival-engineering
description: This skill should be used when the user is solving an engineering problem under hostile, volatile, or resource-starved conditions — intermittent power, bandwidth drops, hardware scarcity, budget constraints, regulatory hostility, or any environment where the substrate is unreliable. Triggers on phrases like "how do I make this work with what I have", "the system keeps failing in production", "no budget, no parts, no time", "infrastructure is unreliable", "I need to improvise", "BD engineering", "frugal engineering", "jogajog", "jugaad", "how do I keep this alive", "hostile environment", "resource-constrained", or any task where the user wants the agent to apply the Bangladeshi survival-engineering paradigm — constraint as design input, adversarial substrate assumption, human-in-the-loop safeguards, community-driven hardening, and improvisation discipline. The third paradigm in the tri-cultural matrix: Russian axiom (first principles, outcome verification) + Chinese velocity (engineering loop, iteration) + Bangladeshi survival (hostile substrate, improvisation, human network). Composes with `aixchinesexrussianxbangladesh` and `abirxkarpathyxrussianxchinese1`. Not limited to software and code — applies to civil, mechanical, electrical, and systems engineering.
---

# Jogajog Survival Engineering

The Russian model abstracts the problem to its mathematical bedrock. The Chinese model scales the system through modular recombination. The Bangladeshi model keeps the system alive against a hostile substrate through human ingenuity, improvised repair, and community trust.

This skill is the third paradigm. Most engineering frameworks assume a stable substrate. Power is reliable, parts are available, the team has time, the network is up. The Bangladeshi paradigm assumes the opposite. The substrate will fail. The budget will run short. The part will not arrive. The network will drop. The system must keep working anyway.

Apply this skill when the environment is volatile, the resources are scarce, or the system is being held together by human judgment. The paradigm is not a fallback for "real" engineering. It is engineering that begins from a different axiom: the substrate is adversarial.

## The tri-cultural matrix

The three paradigms compose. They are not alternatives. They are layers.

| Layer | Paradigm | Skill | Question it answers |
|---|---|---|---|
| Axiom | Russian | `aixchinesexrussianxbangladesh` | What must be true? Did the outcome move toward the desired state? |
| Process | Chinese / Karpathy | `abirxkarpathyxrussianxchinese1` | What is the loop that produces the right change? |
| Survival | Bangladeshi | **this skill** | How does the system stay alive when the substrate is hostile? |

Apply the axiom first. Apply the process second. Apply the survival paradigm when the substrate demands it.

## The 21 principles

The principles are organized in four groups: the 4 phase principles (what the operator does), the 4 meta principles (the paradigm-level axioms), the 4 anti-patterns (what looks like the paradigm but is not), and the 9 cuts (judgment calls under pressure).

### The 4 phase principles

#### 1. Ground-Truth Triage

Before improvising, diagnose the actual point of failure. Not "the system is slow" — the API gateway is rate-limiting at 200/min due to a shared egress IP. Not "the network is bad" — the upstream BGP route to AWS Mumbai drops 40% of packets between 14:00 and 16:00 local time. Not "the building is settling" — the south foundation has a 12mm crack that opens 0.4mm per week.

The specificity matters because the improvisation needs to target the actual failure point, not a general feeling. A workaround for "the network is bad" is "use a different network". A workaround for "the upstream route drops 40% of packets between 14:00 and 16:00" is "schedule bulk sync outside that window" — a different, more effective intervention.

Triage is hard under pressure. The temptation is to start fixing before the diagnosis is complete. Resist. The cost of an incorrectly-targeted improvisation is a second improvisation layered on top of a broken first one, and the system is now two improvisations deep with no documentation.

Tools of triage: logs, traces, peer reports, direct observation, measurement before guess. The Bangladeshi operator learns to read the failure like a doctor reads symptoms — the pattern of failures often reveals the cause.

#### 2. Frugal Improvisation (Jogar)

Make it work with what is on hand, now. Not the ideal solution. The available one. Stitch together fragments. Combine open-source pieces in combinations the maintainers did not intend. Hand-roll a script that solves the immediate problem even if it is not elegant.

The discipline is: ship the workaround, document it as temporary, and design the proper fix on a separate timeline. Improvisation is not a substitute for engineering. It is the bridge that buys time for engineering.

A correct improvisation has three properties:
- It addresses the diagnosed failure (Principle 1), not the perceived one.
- It is documented as a workaround, with the date, the operator, and the planned proper fix.
- It is small enough that a single operator can understand, maintain, and replace it.

An incorrect improvisation has the opposite: it is undocumented, addresses a symptom, and grows over time until it is load-bearing. That is technical debt in disguise as a feature.

#### 3. Human-in-the-Loop Safeguards

When the automated system cannot be trusted, design for human verification. The operator is the last line of defense.

This is not a primitive approach. Safety-critical systems — nuclear plant control rooms, factory floor monitoring, financial transaction review, medical dosing — use human-in-the-loop by design. The Bangladeshi paradigm treats it as the default, not the fallback.

The pattern:
- The automated system proposes an action or surfaces a state.
- The human reviews and confirms before the action is committed.
- The human is positioned to catch the failure mode the automation was not designed to handle.
- The human's override is respected, not fought.

The mistake to avoid: "automating away the human" because the human is "too slow" or "error-prone". The human is the source of contextual judgment that no automation has. Removing the human to make the system faster is a false optimization.

#### 4. Community-Driven Hardening

Leverage peer networks for testing, debugging, and edge-case discovery. The community is the QA team, the field test lab, the security audit.

This is not "ask for help". It is a designed system where the community is a load-bearing component. The reciprocity is structural: you give before you take. You answer other people's questions before you ask your own. You share your workarounds so others can learn from them.

The discipline:
- The community has its own norms. Read them before participating.
- Reciprocity is currency. Spend it before you earn it.
- Edge cases found by the community are real edge cases. Treat them as such.
- The community is the long-term QA. Compensate it with credit, code, or money when it produces material value.

The failure mode: extracting from the community without contributing. This is detected quickly and punished by exclusion. The community is patient with new members who are learning the norms. It is not patient with members who take without giving.

### The 4 meta principles

#### 5. Constraint as Design Input

The constraints ARE the design, not obstacles to design. Power cuts, bandwidth limits, budget caps, hardware scarcity, time pressure — these define what the system must be. They are not problems to engineer around. They are the inputs to the engineering.

A system designed for a 1 MW grid is different from one designed for 500 W with 4 hours of outage per day. A system designed for a 10 Gbps fiber is different from one designed for 256 kbps ADSL with 60% packet loss. A system designed for a team of 20 is different from one designed for a team of 2.

The discipline: name the constraints at the start. Make them explicit. Design to them. Do not pretend the constraints are temporary and design for the ideal case — the constraints will be there when the system ships.

#### 6. Adversarial Substrate Assumption

Assume the substrate will fail. Not "if" — "when". Power fails. Bandwidth drops. Hardware breaks. APIs get rate-limited. ISPs reroute. Cloud regions go down. The grid browns out. The transformer blows. The well runs dry.

Design the failure mode into the architecture. Not as an afterthought. As a load-bearing element. The system should work when 30% of its components are degraded. The system should fail gracefully when 60% are degraded. The system should not lose data when 90% are degraded.

This is the principle that makes Bangladeshi engineering different from "best practice" engineering. Best practice says "design for happy path and add error handling". The Bangladeshi paradigm says "design for the failure path and add happy-path features". The two produce different architectures.

#### 7. Improvisation Ethics

Improvisation has a moral dimension. The paradigm does not justify cutting corners that harm users — security theater, deceptive UX, exploitative pricing, hidden costs. It does justify cutting corners that buy time to do the engineering properly.

The line: does the workaround preserve the user's agency and dignity, or strip it?

Examples of ethical improvisation:
- A caching layer that degrades user experience for non-paying users during peak hours, with a clear disclosure.
- A manual override that requires supervisor approval, with the approval path documented.
- A temporary downgrade of a feature with a public timeline for restoration.

Examples of unethical improvisation:
- Removing security warnings because they "look unprofessional".
- Hiding the failure from the user because it "looks bad".
- Charging the user for a service the system cannot reliably deliver.

The discipline: every improvisation is reviewed for its effect on the user. If the effect is exploitative, the improvisation is rejected regardless of the operational pressure.

#### 8. Operating Against Entropy

Every system degrades. Hardware wears. Code rots. Knowledge atrophies. Trust erodes. The Bangladeshi paradigm treats degradation as a continuous process, not a discrete event.

The question is not "did it break" but "how is it breaking right now, and what is the next failure mode likely to be". The system is always one step from failure. The engineering is to delay that step, and to ensure that the failure is recoverable when it comes.

The discipline:
- Inspect the system regularly, not only when it fails.
- Track improvisation events. Count the days between them. Restore trust only when the count is meaningful.
- Plan the next failure. Pre-stage the response. Drill it.
- Rotate the operator role. The single point of failure for the system should not be a single human.

### The 4 anti-patterns

#### 9. Cargo-Cult Improvisation

Improvising for the sake of improvisation. The look of "scrappy BD engineering" without the substance. Random hot-fixes, undocumented workarounds, hand-rolled scripts that nobody understands.

The fix is not "improvise more". The fix is "improvise with discipline". Document every workaround. Mark them as temporary with a planned replacement date. Refuse to add new workarounds on top of undocumented ones.

The test: if the next operator cannot understand the system in 30 minutes, the system has too many cargo-cult improvisations. Rewrite the load-bearing ones from scratch. Document the rest.

#### 10. False Redundancy

Building "redundancy" that is not actually independent. Two power supplies on the same grid. Two internet connections from the same ISP. Two servers in the same datacenter. Two replicas on the same database cluster.

Real redundancy requires independent failure modes. If the same event takes out both, it is not redundancy. It is a single point of failure with extra wiring.

The discipline: enumerate the failure modes the redundancy is meant to protect against. Verify that the redundancy protects against each one independently. If two "redundant" components share a common failure mode, the design is wrong.

#### 11. Heroic Operator Dependence

Building systems that only work because of one operator's skill. "I know the exact incantation to restart the database at 3 AM." "Only Abdul can fix the billing reconciliation." "The PDF generator works only on Ahmed's machine."

This is fragile. The system should work even if the operator is sick, on vacation, or quit. The discipline:
- Document the incantation. Video, written, or scripted.
- Automate the incantation. The script is documentation that runs.
- Distribute the knowledge. Train at least two people on every critical operation.
- Rotate the operator. The person who has not done the operation in 6 months should be the one to drill it.

If the system depends on a single person, the system is not engineered. It is being heroically operated.

#### 12. Stigma-Driven Concealment

Hiding improvisations from stakeholders because they look "unprofessional". This is the most common failure mode of the Bangladeshi paradigm in non-Bangladeshi environments.

The workaround is real engineering. Hiding it is the unprofessional part. The discipline:
- Document every improvisation in the system record. The record is a feature, not a confession.
- Communicate the improvisation to the affected stakeholders. Frame it as "here is the workaround we are running, here is the planned proper fix, here is the timeline".
- Escalate when the workaround is below the stakeholder's risk tolerance. Concealment is not escalation.
- Track the workaround to its proper replacement. The hidden one never gets replaced.

The test: if a new engineer joining the team would not be told about the workaround on day one, the workaround is concealed. Surface it.

### The 9 cuts

#### 13. When to Abandon Improvisation for Proper Engineering

The line: when the workaround has been in place long enough to be load-bearing, it is no longer a workaround. It is the system. Promote it. Document it. Test it. If you cannot, you have a ticking bomb.

Heuristic: if the workaround has been in place for more than 2× the originally planned replacement time, it is the system. Stop calling it a workaround. Start calling it a legacy component. Allocate the engineering time to replace it.

#### 14. When to Refuse the Constraint

Some constraints are unreasonable. Asking a team to deliver a safety-critical system with 4 hours of power per day is not frugality. It is malpractice. Asking an operator to maintain a 50-server fleet with a 1-person team is not lean. It is a recipe for burnout and incident.

The Bangladeshi paradigm is about making the impossible possible, not about accepting the unacceptable. Refuse constraints that risk human safety, dignity, or autonomy. Refuse constraints that ask for engineering theater (a documented process that does not actually work).

The discipline: name the constraint. Quantify the risk. Present the refusal as a risk assessment, not a complaint. "We can deliver this in 6 weeks with the team of 2, but the safety margin will be below the regulatory threshold. Here are the three options that meet the threshold."

#### 15. When to Escalate

When the improvisation requires a capability the operator does not have — specialized equipment, expertise, authority, access — escalate. Not "figure it out alone". "This needs someone with the right access / knowledge / skill".

Humility is part of the paradigm. The operator who attempts a fix beyond their capability creates a worse failure than the one they were trying to fix.

The discipline: know the boundary of your competence. Document it. Refer to it. When the failure is outside the boundary, escalate before the improvisation. The cost of an unnecessary escalation is small. The cost of a botched improvisation is large.

#### 16. When to Use the Cheap Solution vs. the Right Solution

The rule: cheap solution when the constraint is real and the timeline is short. Right solution when the constraint is permanent.

Examples:
- A temporary generator is fine for a 2-week outage. A permanent generator needs proper engineering, fuel contracts, and maintenance schedule.
- A caching proxy is fine for a 1-month bandwidth cap. A CDN is the right solution for permanent traffic.
- A manual approval workflow is fine for a low-volume critical operation. An automated approval with logging is the right solution at scale.

The cut: a workaround is acceptable when it has a clear end. A workaround is unacceptable when it becomes the de facto permanent solution by default.

#### 17. When to Accept a Failure

Not every failure is improvable. If the substrate is hostile in a way that the workaround costs more than the failure, accept the failure.

Examples:
- A 5% packet loss on a non-critical monitoring stream is acceptable. A 5% packet loss on a payment stream is not.
- A 30-minute outage once a month on a non-revenue feature is acceptable. A 30-minute outage once a month on the checkout flow is not.
- A 4-hour power cut is the substrate. It is not improvable with engineering; it is improvable only with infrastructure investment. Accept it; design around it.

The discipline: classify the failure. Critical (must prevent), important (must detect and recover), acceptable (must record and move on). The classification drives the engineering investment.

#### 18. When to Say No

The paradigm does not mean "yes to everything". Some requests are inappropriate for the environment.

Examples:
- A real-time bidding system in a 500 W power budget is not frugal engineering. It is a contradiction.
- A 99.99% SLA on infrastructure with 4 hours of outage per day is not a service level. It is theater.
- A multi-region active-active deployment on a single internet connection is not architecture. It is wishful thinking.

The discipline: name the request. Name the environment. State the contradiction. Refuse early. The cost of a late refusal is the cost of building the wrong thing.

#### 19. When to Stop Iterating

Improvisation has a tendency to grow. Each fix adds a layer. Eventually, the system is a pile of workarounds held together by operator memory.

The cut: if the cumulative technical debt from improvisation exceeds the time-to-proper-fix, stop iterating and rewrite. The test: can a new operator understand the system end-to-end in a day? If no, the system has crossed the line.

The discipline: track the number of workarounds. When the count exceeds a threshold (varies by domain, but 10 is a common ceiling), schedule a rewrite. The rewrite is not a failure. It is the proper fix for accumulated debt.

#### 20. When to Trust the System Again

After a series of improvisations, when do you trust the system? The signal: when the system has run for X time periods without improvisation-required intervention.

The threshold varies by domain. A safety-critical system needs a longer trust interval than a marketing site. The discipline is the same: track improvisation events, count the days between them, restore trust only when the count is meaningful.

The trap: declaring trust too early, before the substrate has been observed through all its failure modes. A system that has not been tested in a power cut has not been tested. A system that has not been tested under load has not been tested.

#### 21. When to Apply the Paradigm at All

The meta-cut. The Bangladeshi paradigm is not always appropriate. In a stable, well-resourced environment with reliable substrate, the Russian axiom + Chinese velocity is the right frame.

The paradigm shines in:
- Volatility (the substrate changes unexpectedly)
- Scarcity (resources are constrained)
- Resource-starved contexts (budget, time, expertise all short)

The paradigm is wasted in:
- Stable, well-resourced environments (overhead exceeds value)
- Greenfield design with no operational history (the constraints are not yet known)
- Pure research or exploration (the substrate is intentionally flexible)

The discipline: apply the paradigm when the environment demands it. Do not apply it as a default — the overhead of ground-truth triage, human-in-the-loop safeguards, and community-driven hardening is real. Use it where it earns its keep.

## How to apply this skill

When this skill is active for a task:

1. **Classify the environment** (Principle 21). Is the substrate hostile, scarce, or stable? If stable, the Russian + Chinese paradigms are sufficient.
2. **Triage the failure** (Principle 1) or design constraint (Principle 5). Diagnose the actual point of failure, not the perceived one.
3. **Improvise with discipline** (Principle 2) or refuse the constraint (Principle 14) or escalate (Principle 15). Pick one. Do not improvise when the right answer is to refuse or escalate.
4. **Design the human-in-the-loop safeguard** (Principle 3) when the automated system cannot be trusted. Position the human as the last line of defense.
5. **Engage the community** (Principle 4) for edge cases, peer review, and field testing. Give before you take.
6. **Document every improvisation** with date, operator, diagnosed failure, planned proper fix, and replacement timeline.
7. **Apply the cuts** (Principles 13–21) on a regular cadence. Review workarounds for promotion to system. Refuse unreasonable constraints. Stop iterating when debt exceeds fix.

## When NOT to use this skill

- For greenfield design with no operational history — the constraints are not yet known; the Russian + Chinese paradigms are sufficient.
- For stable, well-resourced environments — the overhead of the paradigm is not justified.
- For pure research, exploration, or open-ended design — the substrate is intentionally flexible.
- For tasks where the user explicitly wants a "real" engineering approach without improvisation — apply `abirxkarpathyxrussianxchinese1` instead.
- For tasks where the user wants pure first-principles or outcome verification — apply `aixchinesexrussianxbangladesh` instead.

For those, this skill adds overhead without value. The paradigm is a tool, not a default.

## Reference Index

Load the references that match the phase or the cross-cutting meta in the active task.

- **`references/ground-truth-triage.md`** — Phase 1. The discipline of diagnosing the actual failure point under pressure. Examples across civil, electrical, mechanical, and software.
- **`references/frugal-improvisation.md`** — Phase 2. The Jogar discipline. Documenting workarounds, promoting them to systems, the time-to-proper-fix timeline. The line between improvisation and technical debt.
- **`references/human-in-the-loop-safeguards.md`** — Phase 3. When automation cannot be trusted. Designing for human verification. The "operator is the last line of defense" pattern.
- **`references/community-driven-hardening.md`** — Phase 4. Peer networks as load-bearing systems. Reciprocity, edge-case discovery, the long-term QA. Anti-patterns of community extraction.
- **`references/beyond-software.md`** — The cross-domain meta. Applying the paradigm to civil, mechanical, electrical, and systems engineering. The unifying lens of hostile substrate, resource constraint, and human network.

## Composing with the other paradigms

Apply the axiom first. Apply the process second. Apply the survival paradigm when the substrate demands it.

- **Verify what should be true** — load `aixchinesexrussianxbangladesh`. State the Business Reality. Verify the outcome, not the test.
- **Loop to make it true** — load `abirxkarpathyxrussianxchinese1`. Run the 9-step engineering loop. Make the smallest correct change.
- **Survive the hostile substrate** — load this skill. Diagnose the failure. Improvise. Document. Refuse unreasonable constraints. Engage the community.

The three paradigms are not alternatives. They are layers. The Bangladeshi paradigm is the layer that most "best practice" engineering skips — and the layer that most production systems cannot live without.
