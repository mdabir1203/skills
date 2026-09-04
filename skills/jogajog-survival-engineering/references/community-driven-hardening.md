# Community-Driven Hardening

The peer network is a load-bearing system component. Not a support channel. The design.

The Bangladeshi paradigm treats the community as part of the system architecture. The community is the QA team, the field test lab, the security audit, the edge-case discoverer, the post-mortem reviewer. The community is paid in credit, code, money, or reciprocity — never in extraction without return.

This is not "ask for help". It is a designed system where the community is a structural element. The reciprocity is structural. The norms are explicit. The contribution is tracked.

## The community as a system component

The community has properties that no internal team can replicate:
- **Diverse environments** — community members run the system on hardware, networks, and configurations the internal team has never seen.
- **Diverse use cases** — community members use the system for purposes the internal team did not anticipate.
- **Diverse failure modes** — community members encounter failure modes the internal team has not tested.
- **Diverse time zones** — community members are awake when the internal team is asleep.
- **Diverse expertise** — community members have skills the internal team does not have.

The community is the cheapest way to multiply the team's coverage. The cost is reciprocity: you give before you take.

## The reciprocity discipline

Reciprocity is the medium of exchange. The discipline:
- **Give before you take.** Answer questions, share workarounds, contribute code, review PRs, before you ask for any of these.
- **Be specific.** "Can anyone help?" is a weak ask. "I'm seeing X error on Y configuration; has anyone else hit this?" is a strong ask.
- **Be honest about the gap.** "I don't know" is an acceptable answer. "Let me find out" is an acceptable answer. "Pretend I know" is not.
- **Credit the contribution.** When the community finds a bug, fixes a bug, or contributes a feature, the credit is public. The contribution is in the changelog, the release notes, the docs.
- **Pay when you can.** Open source does not pay the bills. When your project is profitable, sponsor the maintainers, the contributors, the infrastructure. The community's labor has value.

The anti-pattern: extract without contributing. Ask questions without answering. Use the community as a free consulting service. The community detects this within weeks. The exclusion is swift.

## The community structures

Different community structures serve different purposes. The discipline: match the structure to the purpose.

### Structure 1: The public forum

- **What:** an open discussion space (Discourse, mailing list, GitHub Discussions, subreddit).
- **Purpose:** general Q&A, public discussion, transparent history.
- **Best for:** user-to-user support, public roadmap discussion, transparent governance.
- **Anti-pattern:** the forum is overrun with spam, the team does not engage, the unanswered threads pile up. The forum becomes a liability, not an asset.

### Structure 2: The chat room

- **What:** a real-time chat (Discord, Slack, IRC, Matrix).
- **Purpose:** quick questions, real-time debugging, community bonding.
- **Best for:** fast iteration, social connection, escalation of urgent issues.
- **Anti-pattern:** the chat is a noise channel, the team does not engage, the chat becomes a graveyard of "is this thing on?" messages. The chat is high-touch; it requires daily presence to stay alive.

### Structure 3: The issue tracker

- **What:** a structured issue system (GitHub Issues, GitLab Issues, Jira).
- **Purpose:** bug reports, feature requests, structured triage.
- **Best for:** reproducible bugs, structured discussion, accountability.
- **Anti-pattern:** the issue tracker is a wall of unanswered issues. The team does not triage. The community gives up. The signal-to-noise ratio collapses.

### Structure 4: The working group

- **What:** a small, focused group of contributors who meet regularly (weekly, monthly).
- **Purpose:** deep work on a specific area (security, performance, accessibility, documentation).
- **Best for:** sustained contribution, mentorship, succession planning.
- **Anti-pattern:** the working group is gatekeeping. The group makes decisions in private; the public sees the outcome without the process. Trust erodes.

### Structure 5: The meetup / conference

- **What:** an in-person or virtual gathering (local meetup, annual conference).
- **Purpose:** social bonding, cross-pollination, recognition.
- **Best for:** long-term community health, contributor retention, network effects.
- **Anti-pattern:** the meetup is a sales event. The community is the audience; the team is the speaker. The community feels extracted-from, not part-of.

## The community-driven hardening process

The process turns community signal into system improvement.

### Step 1: Open the surface

The system has surfaces where the community can interact: bug reports, feature requests, support questions, code contributions, documentation edits. The surfaces are public, accessible, and discoverable.

The discipline:
- The bug report form is short. The required fields are title, description, reproduction steps, expected, actual. The optional fields are environment, screenshots, logs.
- The support channel is monitored. A response within 24 hours is the minimum. A response within 1 hour is the standard.
- The contribution path is documented. CONTRIBUTING.md is current. The first PR is welcome. The review is constructive.

### Step 2: Triage the signal

The community generates signal: bug reports, questions, complaints, feature requests. The signal is triaged by the team. The triage is fast, transparent, and consistent.

The discipline:
- Every report gets a response within 24 hours. The response can be "I cannot reproduce, can you provide more detail?" but the report is acknowledged.
- The triage is public. The community sees the status (open, in progress, closed, wontfix). The reasoning is shared.
- The triage is consistent. The same type of report gets the same treatment. The community learns the norms.

### Step 3: Investigate the edge case

The community finds edge cases the internal team has not tested. The edge case is real. The discipline: investigate the edge case as if it were a critical bug.

The mistake: dismissing the edge case because "no one else will hit it". The community member did. The community has 1,000 members. The next 999 may hit it too.

The discipline:
- The edge case is reproduced. The reproduction is documented.
- The edge case is fixed. The fix is in a release. The release notes credit the reporter.
- The edge case is added to the test suite. The next version does not regress.

### Step 4: Recognize the contributor

The contributor's work is recognized. The recognition is public, specific, and timely.

The discipline:
- The release notes credit the contributor. "Fixed by [name] in [PR/issue]."
- The contributor is in the AUTHORS file, the README, the about page. The contribution is permanent.
- The contributor is invited to the working group. The contributor is mentored to become a maintainer.
- The contribution is celebrated. The team publicly thanks the contributor. The community sees the thank-you.

### Step 5: Close the loop

The community report is closed with the outcome. The community sees: the bug was fixed, the feature was added, the question was answered, the request was declined. The community sees the reasoning.

The discipline:
- The closure is public. The reporter and the community see it.
- The closure is respectful. The reporter is thanked, even if the report was not actionable.
- The closure is honest. If the report was a wontfix, the reason is explained. The community can disagree, but the disagreement is on the reasoning, not the process.

## The community-driven hardening in non-software domains

The pattern is the same across domains. The community is the QA, the field test, the edge-case discoverer.

### Engineering (civil, mechanical, electrical)

- The community of practitioners is the QA. The practitioner has used the system in a configuration the designer did not anticipate.
- The community of operators is the field test. The operator has run the system in conditions the designer did not test.
- The community of maintainers is the edge-case discoverer. The maintainer has repaired the system in ways the designer did not document.

The discipline: engage with the practitioner community. The conferences, the trade shows, the user groups, the online forums. The community is the design feedback loop.

### Medical

- The community of practitioners is the QA. The clinician has used the protocol in patients the trial did not include.
- The community of patients is the field test. The patient has experienced the protocol in ways the trial did not measure.
- The community of researchers is the edge-case discoverer. The researcher has studied the protocol in populations the trial did not reach.

The discipline: engage with the practitioner and patient communities. The conferences, the patient advocacy groups, the support groups. The community is the post-market surveillance.

### Public services

- The community of beneficiaries is the QA. The beneficiary has used the service in conditions the designer did not anticipate.
- The community of frontline staff is the field test. The staff has delivered the service in ways the policy did not anticipate.
- The community of local leaders is the edge-case discoverer. The leader has implemented the service in a context the policy did not address.

The discipline: engage with the beneficiary and frontline communities. The community meetings, the surveys, the focus groups. The community is the service improvement loop.

## The community-driven hardening anti-patterns

### Anti-pattern 1: The graveyard forum

The forum is open. The team does not engage. The unanswered threads pile up. The community gives up. The forum is a liability, not an asset.

The fix: the team commits to a response SLA. The response is fast, even if the answer is "I do not know yet, I am looking into it." The community sees the response. The community stays.

### Anti-pattern 2: The exclusive inner circle

The team makes decisions in a private channel. The community sees the outcome without the process. Trust erodes. The community feels extracted-from, not part-of.

The fix: the decision-making is public. The discussion is in the open. The outcome is shared with the reasoning. The community sees the process, even if the community is not in the room.

### Anti-pattern 3: The free consulting extraction

The team uses the community to debug the team's bugs. The team asks. The community answers. The team takes the answer and ships the fix. The team credits no one.

The fix: the contribution is credited. The contributor is named in the release notes, the about page, the conference talk. The contribution is permanent.

### Anti-pattern 4: The hostile moderation

The moderator is heavy-handed. The moderator bans without warning. The moderator dismisses without explanation. The community feels unsafe. The community leaves.

The fix: the moderation is transparent. The rules are public. The enforcement is consistent. The warning is given before the ban. The appeal is possible.

### Anti-pattern 5: The contributor burnout

The team relies on a few key contributors. The contributors are overworked. The contributors burn out. The contributors leave. The system is at risk.

The fix: the contributors are distributed. No single contributor is the single point of failure. The mentorship is active. The next generation of contributors is being trained.

## The community-driven hardening cut

The community is a system component. The system is designed for the community. The community is not free; the community is paid in reciprocity, credit, and care.

- The community is engaged, not extracted.
- The community is credited, not used.
- The community is mentored, not left to rot.
- The community is distributed, not concentrated.

The cut: if the community is a liability (graveyard, hostile, extracted, burned out), the system is not engineered. The system has a community-shaped hole. Fix the community first, then the system.

## How to apply this reference

When this reference is loaded for a community-driven hardening task:

1. State the surfaces the community can interact with. Bug reports, support, code, docs.
2. State the triage SLA. Default: 24 hours for first response, 1 week for resolution.
3. State the reciprocity model. What the team gives, what the community gives, the medium of exchange.
4. Design the contribution path. Short bug report, current CONTRIBUTING.md, constructive review.
5. Design the recognition. Release notes, AUTHORS file, public thank-yous, working group invitations.
6. Track the community health. Forum response time, contributor count, contributor diversity, contributor retention. The metrics are reviewed monthly.
7. Cut the anti-patterns. Graveyard forum, exclusive circle, free consulting, hostile moderation, contributor burnout. Each one is a system failure.
