# Style Guide — Ogilvy + Kern 2026

This is the voice. Read it before drafting. Re-read it before publish.

## The synthesis

**Ogilvy brings the rigor.** Research-driven. Specifics over generalities. The headline does 80% of the work. Long-form when there's something to say. Never use an adjective that can be deleted.

**Kern brings the heart.** Conversational. Story-based. Talk like you're replying to a friend's question. Be genuinely useful, never hype. The "magic bullet" is finding what already works and amplifying it.

**2026 brings the lens.** AI answer engines are now reading your post. Direct response still works — the AI engines quote the same parts humans highlight. The post has to read like a person wrote it *and* be structurally extractable.

## Voice rules (the non-negotiables)

### Sentence length
- **Target average: 14 words.**
- **Maximum: 28 words.** Any sentence over 28 must be split.
- **Minimum: 4 words** (only for emphasis, used sparingly).
- Variety is good. A mix of 6-word, 14-word, and 20-word sentences reads better than uniform 14.

### Word choice
- **Plain words over clever words.** "Use" not "utilize." "Show" not "demonstrate." "Help" not "facilitate."
- **Contractions always.** "It's," "don't," "we're," "couldn't" — never "it is," "do not," "we are."
- **Active voice default.** "We fixed the bug" not "The bug was fixed."
- **No intensifiers.** Cut "really," "very," "quite," "extremely," "incredibly." They dilute. Pick a stronger verb instead.
- **No filler.** Cut "actually," "basically," "literally," "honestly" (unless followed by something genuinely surprising).
- **No vague quantifiers.** Cut "many," "several," "various," "a number of," "some." Replace with the actual number or remove.
- **Jargon allowed only if the audience uses it.** When in doubt, define it on first use in plain English.

### Tone
- **Direct.** Say what you mean. Don't soften. Don't hedge.
- **Conversational.** Read it aloud. If you wouldn't say it to a friend at a coffee shop, rewrite it.
- **Confident but not arrogant.** "We shipped a bug. Here's what we learned" — not "we made a minor oversight that hopefully won't happen again."
- **Honest about mistakes.** Real > polished. Admitting the bug makes you credible; hiding it makes you suspect.

## Banned words and phrases (run `scripts/flag-slop.mjs` to enforce)

### Tier 1 — instant kill (rewrite or remove)
- delve
- leverage (as a verb)
- robust
- seamless
- cutting-edge
- unlock
- foster
- holistic
- paradigm
- synergy
- in today's world
- in today's fast-paced
- it's important to note
- it is important to note
- it is worth mentioning
- it's worth noting
- let's dive in
- let's explore
- have you ever wondered
- imagine a world where
- in this article
- in this post
- we will explore
- buckle up
- at the end of the day
- when it comes to
- navigate the complexities
- in the realm of
- in the world of
- a testament to
- a paradigm shift

### Tier 2 — almost-always-bad (rewrite or cut)
- basically
- literally
- actually (when used as filler)
- really
- very
- quite
- just (as in "I just want to...")
- simply (as in "it's simply a matter of...")
- easy (as in "it's easy to...")
- obviously
- clearly (as in "clearly, the issue is...")
- essentially
- fundamentally
- comprehensive
- innovative
- revolutionary
- game-changing
- world-class
- best-in-class
- next-generation
- state-of-the-art
- powerful (when used as a vague descriptor)

### Tier 3 — context-dependent (use sparingly, justify each)
- However (often replaced with a period and a new sentence)
- Furthermore (cut 90% of the time)
- Moreover (cut 90% of the time)
- Additionally (cut 90% of the time)
- Therefore (often replaced with a colon and a new sentence)
- That said (often cut)
- On the other hand (replace with actual contrast)
- In conclusion (cut, you're not writing an essay)

## Headline formula

5-10 candidates. Pick the most specific.

**Pattern 1: [Number] [verb] [concrete noun] [context]**
- "How 3 lines of code cut our snapshot write time by 21x"
- "Why 5,622 test rows polluted our factory dashboard for 6 weeks"

**Pattern 2: The [adjective] [noun] that [verb] [outcome]**
- "The 3-line filter that fixed a 21x data divergence bug"
- "The 2 AM WhatsApp that exposed our snapshot writer bug"

**Pattern 3: What I learned from [specific event]**
- "What I learned shipping a 372 MB release that should have been 100 MB"
- "What I learned when my sanity log lied to me"

**Pattern 4: [Number] [things] [outcome verb]**
- "5,622 rows, 1 missing filter, 6 weeks of bad data"
- "3 fixes, 1 release, 0 data divergence"

**Avoid:**
- "Lessons from X" (too generic, no click)
- "How to X" (works for tutorials, not for case studies)
- "Why X matters" (you're not convincing, you're showing)

## Opener formula

**Pattern 1: The time and the moment**
> It was 2:47 PM Dubai time. My phone buzzed — a WhatsApp from the floor manager.

**Pattern 2: The number that didn't add up**
> 5,898 completed logs. 0 sessions. The math was lying.

**Pattern 3: The thing I tried first that failed**
> My first guess was wrong. A database lock. I wrapped the snapshot in a transaction. Still empty.

**Pattern 4: The direct contradiction**
> The dashboard said 5,898. The table said 0. Both numbers were in the same file, written 200ms apart. They couldn't both be right.

**Avoid:**
- "In this post, I'll walk you through..."
- "Have you ever wondered why..."
- "Imagine a world where..."
- "It's no secret that..."

## Closer formula

End with one of these, not "I hope this helps" or "Thanks for reading":

**Pattern 1: The hand-extended question**
> Have you hit a bug like this? How did you find it? Drop me a line — I read every reply.

**Pattern 2: The next-post tease**
> The v1.2.18 release is going to be smaller (the build script is next on the list). If you want to see how that goes, follow me here.

**Pattern 3: The direct ask**
> If this saved you an hour of debugging, share it. One share, one less engineer stuck on a meta field that lies.

**Pattern 4: The shared-stakes closer**
> We're running this on a real factory floor in Dubai, with real payroll riding on the numbers. If you're running a similar system and want to compare notes, my DMs are open.

## Self-audit checklist (run before publish)

1. **Headline test:** does it have a number, a verb, and a concrete noun? Would I click?
2. **Opener test:** is the first sentence a time, a number, or a contradiction? Not an abstraction?
3. **Specifics test:** at least 5 specific numbers (line numbers, counts, dates, versions, hashes) in the post?
4. **Honesty test:** does the post admit the mistake clearly? Or does it sound like the bug never happened?
5. **Lesson test:** is the lesson stated directly in one sentence, not buried in three paragraphs?
6. **Ending test:** does the last paragraph offer a way to keep going (question, link, CTA)? Not a generic closer?
7. **AI-slop test:** zero Tier 1 banned words, zero Tier 2 banned words except with justification, zero banned openers, zero banned closers?
8. **Read-aloud test:** read the whole post aloud in your head. Does it sound like a person? Or does it sound like a model?
9. **AEO test:** TL;DR + question-form H2s + FAQ + JSON-LD + author bio + last_verified?
10. **One-thing test:** if a reader walks away with exactly one sentence, which sentence is it? Is that the lesson?

## Failure modes to catch in the audit

- **The "did I really write this" test:** read paragraph 3 and ask if you'd be proud to have written it. If it feels like something any model could have written, it needs a rewrite.
- **The "specifics substitution" test:** take any sentence and try to add a number. If you can't, the sentence is probably fluff.
- **The "explain to a junior" test:** is every concept explained enough that a smart junior engineer with no context could follow? If not, add the missing context.
- **The "delete the first paragraph" test:** does the post still work? If yes, the first paragraph is filler.
- **The "delete the last paragraph" test:** same. If yes, the last paragraph is filler.

## Voice examples

### Before (AI slop)
> In this post, we will explore the various challenges associated with data integrity in distributed systems, and how a robust filtering mechanism can seamlessly address these complex issues. It's important to note that when it comes to ensuring data quality, a holistic approach is paramount.

### After (Ogilvy + Kern 2026)
> 5,898 logs came in. 0 sessions went to the cloud. The filter was missing for six weeks. Here's the three-line fix that closed the gap.

### Before (boring)
> We optimized the build process to reduce the size of release artifacts.

### After (specific)
> The release ZIP went from 643 MB to 372 MB. The 271 MB difference was `data/sqlite-snapshots/`, `data/lan-update-mirror/`, and `data/pm2-logs/` — three directories the build script forgot to exclude. Adding them to the `/XD` list took 3 lines.

## When the rule breaks

If a Tier 1 word is genuinely the right word (rare but real), keep it and add a one-line justification in your self-audit notes. Don't be a robot about the rules. The rules exist to make the post better. If a banned word makes the post better, the rule is wrong, not the post.
