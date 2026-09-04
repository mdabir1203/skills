# Ground-Truth Triage

Diagnose the actual point of failure. Not the perceived one.

The discipline of triage is the single most-load-bearing skill in the Bangladeshi paradigm. Every other principle depends on it. A workaround for the wrong failure is a wasted workaround. A constraint design for the wrong environment is a wasted design. The cost of incorrect triage is not the failed fix — it is the cascade of failed fixes that follow.

## The triage frame

Under pressure, the human brain jumps to the most available explanation, not the correct one. The available explanation is the one that matches a recent memory, a recent conversation, or a familiar pattern. The correct explanation is the one that matches the actual evidence.

Triage is the discipline of choosing evidence over availability.

The frame:
1. **Observe** — what is actually happening, in measurable terms.
2. **Compare** — what is happening vs. what should be happening (the design intent).
3. **Localize** — which specific component, link, or boundary is the divergence.
4. **Name** — state the failure in one sentence, with the specific component.
5. **Verify** — confirm the diagnosis by reproducing or by re-observing.

The mistake: skipping steps 1–4 and jumping to step 5 with a guess.

## Examples across domains

The frame is the same. The components are different.

### Software: the API is slow

**Perceived failure:** "The API is slow today."

**Triage:**
- **Observe:** measure the response time distribution. Is it slow for all requests or specific endpoints? All users or specific geographies? All times or specific windows?
- **Compare:** the design intent. P95 should be < 200ms. Current P95 is 4,800ms. The gap is 24x.
- **Localize:** is the latency in the application server, the database, the upstream API, or the network? Trace one request through the stack. Time each hop.
- **Name:** "The latency is on the upstream payment gateway integration. The 95th percentile of the call to /charges is 4,500ms; the application server and database are within budget. The gateway is rate-limiting at 200/min due to a shared egress IP."
- **Verify:** reproduce by calling the gateway directly. The gateway is the failure point.

The workaround targets the gateway (e.g., add a caching layer for non-critical reads), not "make the API faster" (which is the wrong problem).

### Electrical: the building browns out

**Perceived failure:** "The power is unreliable."

**Triage:**
- **Observe:** measure the voltage over 24 hours. At what times does the voltage drop? By how much? For how long?
- **Compare:** design intent is 220V ±10% (198V–242V). Observed: 14:00–16:00 daily, voltage drops to 175V. The 14:00 drop is the failure mode.
- **Localize:** is the drop in the grid, the transformer, the building wiring, or the load? Check the grid voltage at the meter. Check the building voltage at the panel. Check the load profile.
- **Name:** "The voltage drop is at the building's distribution transformer. It is overloaded during the 14:00–16:00 air conditioning peak. The grid is within spec; the transformer is the bottleneck."
- **Verify:** measure at the transformer secondary. The transformer is the failure point.

The workaround targets the transformer (e.g., stagger the air conditioning load, or install a voltage stabilizer for the critical loads), not "get more power from the grid" (which is the wrong problem).

### Civil: the building cracks

**Perceived failure:** "The building is settling."

**Triage:**
- **Observe:** measure the crack widths over time. Where is the crack? Is it growing? In which direction? At what rate?
- **Compare:** design intent is zero movement beyond the elastic range. Observed: a 12mm crack on the south wall, growing at 0.4mm per week.
- **Localize:** is the crack from foundation settlement, thermal expansion, structural overload, or material degradation? Look at the crack pattern (vertical = settlement, horizontal = pressure, diagonal = shear). Measure the building tilt. Check the drainage around the foundation.
- **Name:** "The crack is from differential settlement of the south foundation. The south side is settling at twice the rate of the north side. Likely cause: a leaking water main on the south side is washing out the foundation soil."
- **Verify:** check the water main. Pressure test. The main is leaking.

The workaround targets the leak (e.g., shut off the south main, repair, and compact the soil), not "add more concrete" (which is the wrong problem).

### Mechanical: the motor burns out

**Perceived failure:** "The motor keeps failing."

**Triage:**
- **Observe:** measure the motor current, voltage, temperature, and vibration. At what load does it fail? After how many hours? Is the failure gradual or sudden?
- **Compare:** design intent is 10A at 220V, ambient 40°C, 50,000 hour life. Observed: motor pulls 14A and runs at 65°C, failing every 6 months.
- **Localize:** is the problem electrical (overload), thermal (insufficient cooling), mechanical (bearing failure), or environmental (dust, moisture)? Measure each.
- **Name:** "The motor is electrically overloaded. The mechanical load exceeds the motor's rated capacity. The vibration and temperature are within range; the current is the problem."
- **Verify:** decouple the load. Run the motor no-load. The current drops to 2A. The load is the problem.

The workaround targets the load (e.g., reduce the mechanical load or upsize the motor), not "replace the motor again" (which is the wrong problem).

## The triage tools

The frame is the same. The tools differ by domain.

### Universal

- **Direct measurement** — the highest signal. Voltage, current, temperature, latency, packet loss, deflection, vibration. The discipline: measure before guessing.
- **Comparison to design intent** — the spec, the SLA, the design document. The failure is the gap.
- **Time series** — failure modes are often intermittent. A snapshot misses them. A 24-hour trace catches them.
- **Reproduction** — the highest-confidence verification. If you can reproduce the failure on demand, you can localize it. If you cannot, the diagnosis is provisional.

### Software

- **Distributed tracing** — OpenTelemetry, Jaeger, Zipkin. Trace one request through the stack.
- **Structured logging** — every request, every error, every slow path. Searchable.
- **Metrics** — RED (Rate, Errors, Duration) for services. USE (Utilization, Saturation, Errors) for resources.
- **Profiling** — flame graphs, allocation profiles, lock contention. For "slow" without an obvious cause.

### Electrical

- **Multimeter** — voltage, current, resistance. The basic tool.
- **Oscilloscope** — for AC waveform analysis, harmonics, transients.
- **Power quality analyzer** — for sustained monitoring, captures the 14:00 brownout.
- **Thermal camera** — for finding hot connections, overloaded breakers.

### Civil

- **Crack monitor** — measures crack width over time. The discipline: install before the crisis.
- **Plumb line / total station** — for measuring building tilt.
- **Soil test** — for foundation analysis.
- **Ground-penetrating radar** — for finding buried utilities without excavation.

### Mechanical

- **Vibration analyzer** — for bearing health, imbalance, misalignment.
- **Thermal camera** — for finding hot bearings, electrical connections.
- **Tachometer / stroboscope** — for rotational speed.
- **Oil analysis** — for wear debris, contamination.

## The triage anti-patterns

### Jumping to the most-available explanation

A common phrase: "It worked yesterday, what changed?" The mind jumps to the recent change. The diagnosis often lies elsewhere. The discipline: enumerate the top 3 candidate causes, then triage each, not just the most-available.

### Trusting the loudest report

The user who reports the bug is not always the user with the right diagnosis. The loudest voice is not the most-informed voice. The discipline: gather multiple reports, look for the pattern across them, name the failure from the pattern, not from the loudest single report.

### Triage fatigue

Under sustained pressure, the operator stops triaging carefully and starts guessing. The error rate goes up. The discipline: rotate the operator. The fresh operator catches what the tired one missed.

### Triage theatre

Going through the motions of triage without actually measuring. "I checked the logs and the logs look fine." "I checked the power and the power looks fine." The discipline: state the measurement, the value, the comparison to spec. If the value is "looks fine", the measurement was not made.

## The triage cut

After triage, the diagnosis is one of three states:
- **Confirmed** — reproduced, localized, named. Ready for workaround (Principle 2) or refusal (Principle 14).
- **Provisional** — localized and named, but not reproduced. The workaround can proceed, but the verification is owed.
- **Unknown** — neither localized nor named. The triage continues. No workaround. No improvisation. The system waits.

The cut: refuse to improvise on an Unknown. The improvisation without a diagnosis is a guess. The guess without a verification is a future failure.

## How to apply this reference

When this reference is loaded for a triage task:

1. State the perceived failure in the user's words.
2. Run the 5-step frame: Observe, Compare, Localize, Name, Verify.
3. For each step, state the specific measurement or observation, not the general impression.
4. State the diagnosis in one sentence with the specific component.
5. State the triage state: Confirmed, Provisional, or Unknown.
6. If Unknown, refuse to improvise. Continue triage.
7. If Confirmed or Provisional, hand off to the improvisation reference.
