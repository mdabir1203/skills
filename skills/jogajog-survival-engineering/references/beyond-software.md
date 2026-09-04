# Beyond Software

Applying the Bangladeshi survival-engineering paradigm to civil, mechanical, electrical, and systems engineering.

The paradigm is not a software paradigm. It is an engineering paradigm that software adopted because software systems are increasingly deployed in hostile substrates — unreliable networks, rate-limited APIs, contested cloud regions, scarce engineering time. The same paradigm applies to every other engineering discipline where the substrate is volatile, the resources are scarce, or the operator is the load-bearing element.

This reference operationalizes the paradigm across domains. The principles are the same. The components, tools, and failure modes are domain-specific.

## The unifying lens

Three conditions make the paradigm applicable:

1. **Hostile substrate** — the environment is volatile, unreliable, or adversarial. Power cuts, soil settlement, supply chain disruption, regulatory hostility, equipment scarcity.
2. **Resource constraint** — budget, time, expertise, or materials are short. The system must work with what is on hand.
3. **Human-in-the-loop necessity** — the operator, maintainer, or community is a load-bearing element. The system cannot be fully automated or fully autonomous.

If all three conditions apply, the paradigm is the right frame. If only one or two apply, the Russian or Chinese paradigms may be sufficient.

## Civil engineering

Civil engineering works in physical substrates that are inherently hostile. Soil settles, water flows, wind blows, earthquakes shake. The civil engineer's job is to design for these conditions. The Bangladeshi paradigm is the lens for when the substrate is more hostile than usual, the budget is tighter than usual, or the operator is more critical than usual.

### The conditions

- **Monsoon-driven flooding** — the substrate is wet, the soil is unstable, the river changes course. The infrastructure must survive the monsoon.
- **Soft alluvial soil** — the soil cannot bear the load of standard foundations. The foundation must be designed for the soil, not against it.
- **Earthquake vulnerability** — the substrate shakes. The structure must absorb the energy without collapsing.
- **Limited construction equipment** — the budget does not allow heavy machinery. The construction must use local labor and local materials.
- **Informal construction** — the operator is a local craftsman, not an engineer. The design must be buildable by the operator.

### The paradigm applied

**Triage:** measure the soil bearing capacity, the water table, the seismic zone. Diagnose the failure mode the design must survive.

**Improvisation:** use local materials. Brick from local kilns, bamboo from local forests, sand from local rivers. The improvisation is the supply chain, not the engineering.

**Human-in-the-loop:** the local craftsman is the operator. The design must be buildable by the craftsman, with the tools the craftsman has, with the materials the craftsman can source.

**Community hardening:** the local community is the QA. The community has built structures in this environment for generations. The community's knowledge is the design feedback loop. Engage with the community, not against it.

### Concrete examples

- **Low-cost housing on soft soil** — design a foundation that distributes the load over a wider area (e.g., a mat foundation) instead of a deep pile foundation. The local labor and local materials can build a mat foundation; they cannot build a pile foundation.
- **Flood-resistant infrastructure** — design the infrastructure to be submerged and to recover (e.g., elevated platforms, waterproof materials) instead of fighting the flood. The flood is the substrate; the design is for the flood.
- **Earthquake-resistant vernacular construction** — incorporate the local construction techniques that have survived past earthquakes (e.g., timber framing with flexible joints) instead of replacing them with standard modern techniques. The vernacular is the community's engineering; the modern is the imported engineering. The combination is the paradigm.

## Mechanical engineering

Mechanical engineering works in physical systems that wear, fatigue, and fail. The mechanical engineer's job is to design for these conditions. The paradigm is the lens for when the system must keep working despite the wear, the budget cannot afford the ideal parts, or the operator must repair the system in the field.

### The conditions

- **Imported equipment with local operating conditions** — the equipment was designed for a different climate, a different voltage, a different fuel quality. The local conditions are outside the design envelope.
- **Spare parts scarcity** — the original parts are not available. The repair must use what is on hand.
- **Operator skill variance** — the operator may not be a trained mechanic. The repair must be possible by the operator.
- **Continuous duty in harsh environments** — the equipment runs 24/7 in heat, dust, humidity, or cold. The wear is faster than the design expected.

### The paradigm applied

**Triage:** diagnose the wear, the failure mode, the operating condition that is outside the design envelope. The diagnosis is the difference between a repair that works and a repair that fails next week.

**Improvisation:** substitute parts that are functionally equivalent, even if not identical. The substitution is documented. The substitution is tested. The substitution is tracked.

**Human-in-the-loop:** the operator is the maintainer. The maintenance procedure is in the operator's language. The maintenance tool is on hand. The maintenance does not require a specialist.

**Community hardening:** the local mechanics are the QA. The local mechanics have repaired the equipment in ways the manufacturer did not document. Engage with the local mechanics; credit their knowledge.

### Concrete examples

- **Vehicle maintenance with no OEM parts** — substitute parts from a different model that fit. Document the substitution. Test the substitution under load. Track the substitution for future reference.
- **Generator operation in dusty conditions** — increase the air filter change frequency. Add a pre-filter (e.g., a foam wrap) to extend the filter life. Document the procedure. Train the operator.
- **Pump repair with mismatched spares** — use the impeller from a similar pump. Adapt the mounting. Test the flow rate. Document the repair.

## Electrical engineering

Electrical engineering works in physical systems that are subject to power quality, environmental conditions, and load variability. The paradigm is the lens for when the grid is unreliable, the budget cannot afford the ideal protection, or the operator must troubleshoot in the field.

### The conditions

- **Unreliable grid** — the power cuts, the voltage sags, the frequency drifts. The equipment must survive the grid conditions.
- **Overloaded distribution** — the transformer, the wiring, the breaker are at or above capacity. The load must be managed.
- **Lightning and surge exposure** — the environment has frequent lightning or switching transients. The equipment must be protected.
- **Mixed power sources** — the grid, a generator, solar, batteries. The sources must be coordinated.
- **Operator skill variance** — the operator may not be a trained electrician. The wiring must be safe by design, not by operator vigilance.

### The paradigm applied

**Triage:** measure the voltage, the current, the power quality. Diagnose the failure mode the system must survive. The diagnosis is the difference between a workaround that works and a workaround that burns the house down.

**Improvisation:** use voltage stabilizers, surge protectors, UPS systems, and generator changeover switches to bridge the gap between the grid and the load. The improvisation is the power conditioning, not the grid itself.

**Human-in-the-loop:** the operator is the maintainer. The maintenance procedure is documented. The maintenance is safe (lockout/tagout). The maintenance does not require a specialist for routine operations.

**Community hardening:** the local electricians are the QA. The local electricians have wired the neighborhood in ways the code did not anticipate. Engage with the local electricians; respect the safety norms.

### Concrete examples

- **Voltage stabilizer for sensitive equipment** — install a stabilizer on the load side. The stabilizer absorbs the sag. The equipment sees the rated voltage. Document the stabilizer; replace it when the grid is improved.
- **Generator changeover switch** — install a manual or automatic changeover between the grid and the generator. The switch is the safeguard. The generator runs when the grid is down. The load sees continuous power. Document the procedure; train the operator.
- **Surge protection for lightning-exposed areas** — install a Type 1 surge protector at the service entrance, a Type 2 at the distribution panel, a Type 3 at the equipment. The layered protection is the design.

## Systems engineering

Systems engineering is the discipline of designing and managing complex systems that span multiple domains. The paradigm is the lens for when the system is more volatile than the design anticipated, the resources are tighter than the plan assumed, or the human is more critical than the system recognizes.

### The conditions

- **Multi-stakeholder coordination** — the system crosses organizational boundaries. The stakeholders have different priorities, different budgets, different timelines.
- **Emergent behavior** — the system behaves in ways the design did not predict. The behavior emerges from the interaction of the components, not from any single component.
- **Resource competition** — the system's resources are shared with other systems. The system must negotiate for resources.
- **Operator dependence** — the system's operation depends on the operator's skill, judgment, and presence. The system is brittle when the operator is absent.

### The paradigm applied

**Triage:** diagnose the system's failure modes across the boundaries. The failure may be in the interaction, not in any single component. The triage is multi-disciplinary.

**Improvisation:** build in slack, redundancy, and graceful degradation. The system survives when 30% of the components are degraded. The system fails gracefully when 60% are degraded. The system does not lose data when 90% are degraded.

**Human-in-the-loop:** the operator is the system. The system's design must respect the operator's cognitive load, decision time, and skill. The system must be operable under stress.

**Community hardening:** the stakeholders are the community. The system must serve the stakeholders, not the other way around. Engage with the stakeholders. The system is co-designed, not designed-and-handed-over.

### Concrete examples

- **Supply chain resilience** — the supply chain has multiple suppliers, multiple routes, multiple modes. The supply chain survives when one supplier, one route, or one mode is disrupted. The supply chain is not optimized for cost; it is optimized for survival.
- **Public health system** — the system has layered defenses (primary care, secondary care, tertiary care), redundant capacity (multiple hospitals, multiple labs), and graceful degradation (when the system is overloaded, the lower-acuity cases are deferred). The system is designed for the surge, not just for the average.
- **Disaster response** — the response is organized around the community, not around the agency. The community is the first responder. The agency supports the community. The system is designed to amplify the community's capacity, not to replace it.

## Public services and social systems

Public services and social systems are engineered systems that serve populations. The paradigm is the lens for when the service must reach populations the formal system cannot reach, the resources are tighter than the policy assumes, or the frontline staff is more critical than the central office.

### The conditions

- **Rural or underserved populations** — the populations are far from the formal services. The service must reach them, or the populations must reach the service.
- **Informal or undocumented status** — the populations may not have the documentation the formal service requires. The service must serve the person, not the document.
- **Resource scarcity at the point of service** — the central office has resources; the point of service does not. The system must distribute the resources.
- **Frontline staff autonomy** — the frontline staff makes decisions the policy did not anticipate. The system must trust the frontline, not police the frontline.

### The paradigm applied

**Triage:** understand the population's actual needs, not the policy's assumed needs. The frontline staff is the source of the actual needs.

**Improvisation:** the frontline staff adapts the service to the population. The adaptation is documented. The adaptation is shared with other frontline staff.

**Human-in-the-loop:** the frontline staff is the service. The system must support the frontline, not constrain the frontline.

**Community hardening:** the community is the service. The service is co-designed with the community. The community's knowledge is the design feedback loop.

### Concrete examples

- **Mobile health clinics** — bring the service to the population. The clinic is improvised (a van, a tent, a community center). The service is documented. The community is the partner.
- **Microfinance** — the loan is small, the interest is affordable, the repayment is flexible. The service is designed for the population's reality, not the bank's ideal.
- **Community health workers** — the worker is from the community, trained in the basics, supported by the formal system. The worker is the bridge. The system is the support.

## The cross-domain discipline

The paradigm is the same across domains. The components, tools, and failure modes are domain-specific. The discipline is:

- **Diagnose the failure** in the substrate, not the symptom.
- **Improvise with documentation** — the workaround is tracked, the proper fix is planned.
- **Design for the human** — the operator, the maintainer, the community is a load-bearing element.
- **Engage the community** — the community is the QA, the field test, the design feedback loop.

The Bangladeshi paradigm is not a software paradigm. It is an engineering paradigm for hostile substrates, scarce resources, and human-loaded systems. The software world adopted it because the software substrate became hostile. Every other engineering discipline has always lived in the paradigm — the difference is the discipline of naming it.

## How to apply this reference

When this reference is loaded for a cross-domain engineering task:

1. State the domain (civil, mechanical, electrical, systems, public services).
2. State the substrate conditions. What is volatile, scarce, or unreliable in this environment.
3. State the resource constraints. What is short (budget, time, expertise, materials).
4. State the human-in-the-loop necessity. Who is the operator, the maintainer, the community.
5. Apply the four phase principles (triage, improvisation, human-in-the-loop, community hardening) to the specific domain.
6. Cross-reference the example patterns in this reference. The patterns are templates; the specifics are domain-local.
7. Track the design feedback. The community finds the failure modes the design did not anticipate. The discipline is to engage the community, not to ignore the feedback.
