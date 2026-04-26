# LASR Research Services: Three Prototype AI Security Research PRDs

## Context and interpretation of the brief

The Alan Turing Institute's Defence and National Security Grand Challenge, in support of the Laboratory for AI Security Research (LASR), is seeking commissioned research services in AI security. The call is aligned with LASR's national mission: reducing risks to and from AI, strengthening UK cyber resilience, advancing sovereign AI security capability, and creating practical outputs that can be tested with government, academic, and industry partners.

The research-services format appears to favour sharply scoped pilot studies that can be delivered by small academic teams, demonstrate technical feasibility, and generate evidence for a larger follow-on programme. The following three concepts are therefore designed as ambitious but prototypeable pilots. They deliberately avoid incremental "benchmark another model" work and instead focus on new security primitives, test harnesses, and analytic methods that could become reusable UK AI security infrastructure.

## Project 1: Agentic Tripwires and Deception Fields for Autonomous AI Systems

### Executive proposition

Future AI-enabled operations will include networks of autonomous agents that discover tools, delegate tasks, maintain memory, and negotiate across organisational boundaries. Current security practice mostly asks whether an agent follows a policy in benign test cases. This project asks a more strategically important question: can we build an active defensive environment that exposes, contains, and studies malicious or compromised agents without revealing to them that they are under observation?

The project will prototype a "deception field" for agentic AI: instrumented synthetic tools, credentials, memory stores, documents, peers, and APIs that appear operationally useful to an agent but are cryptographically marked, policy-scoped, and telemetry rich. The goal is not a generic honeypot, but a science of agent counterintelligence: detecting intent, mapping escalation paths, and measuring whether agentic systems can be deterred or diverted before material harm occurs.

### Prototype PRD

#### Product name

Sentinel Garden: an agentic AI deception and tripwire testbed.

#### Primary users

- National-security AI assurance teams evaluating autonomous agents before deployment.
- Red teams studying prompt injection, tool misuse, privilege escalation, and covert goal pursuit.
- Platform security teams operating shared agent infrastructure, memory stores, and tool registries.
- Policy and governance teams needing evidence of residual risk and controllability.

#### User problem

Security teams lack a repeatable way to observe whether autonomous AI systems will:

- exploit excessive tool privileges;
- exfiltrate memory or retrieved documents;
- impersonate peer agents;
- hide unsafe intermediate reasoning or tool calls;
- continue unsafe objectives after an explicit refusal, correction, or containment signal.

Traditional red-teaming produces anecdotes. Sentinel Garden would turn agentic misbehaviour into measurable traces.

#### Product goals

1. Create a controlled multi-agent sandbox with realistic but non-sensitive assets.
2. Embed tripwires across tool interfaces, synthetic secrets, documents, memory, and peer-agent identities.
3. Produce behavioural evidence about agent intent, capability, and containment response.
4. Support comparative evaluation across models, prompting regimes, tool policies, and orchestration frameworks.
5. Generate a transferable taxonomy of agentic compromise indicators for LASR partners.

#### Non-goals

- Building an operational classified monitoring platform.
- Releasing exploit prompts or turnkey offensive tooling.
- Claiming psychological intent in a human sense; the project measures operationally relevant behaviours.

#### Core prototype features

- **Synthetic mission environment:** a small but realistic workflow, such as incident triage, logistics planning, or intelligence summarisation, populated with benign tasks and plausible distractions.
- **Tripwired artefacts:** fake credentials, decoy documents, canary API endpoints, poisoned memory entries, and bogus peer-agent identities with unique cryptographic beacons.
- **Agent interaction recorder:** structured capture of prompts, tool calls, memory reads/writes, API requests, delegation attempts, and policy boundary events.
- **Deception policy engine:** configurable decoys mapped to behaviours of interest, such as lateral movement, unauthorised retrieval, or hidden delegation.
- **Risk scoring dashboard:** metrics for tripwire contact, attempted exploitation, persistence after warning, and recovery after containment.
- **Safe replay harness:** deterministic scenario replay so that researchers can compare mitigations without exposing live infrastructure.

#### Work packages

| Work package | Activities | Outputs |
| --- | --- | --- |
| WP1: Threat model and taxonomy | Define adversarial and failure modes for autonomous agents in defence-adjacent workflows. | Agentic compromise taxonomy and scenario design notes. |
| WP2: Deception environment | Build synthetic tools, documents, identities, credentials, and memory stores with tripwire instrumentation. | Runnable sandbox and configuration templates. |
| WP3: Measurement science | Define metrics for deception contact, unsafe persistence, self-correction, and containment. | Evaluation rubric and machine-readable event schema. |
| WP4: Experimental campaign | Test multiple open and commercial model-backed agents under controlled prompt-injection and policy-stress conditions. | Comparative results, risk patterns, and mitigation evidence. |
| WP5: Transition package | Produce a technical report, demonstration, and guidance for safe adoption by LASR partners. | Final report, demo video/script, and extension roadmap. |

#### Success metrics

- Detects at least four classes of agentic misuse in repeatable scenarios: unauthorised retrieval, tool overreach, peer impersonation, and hidden persistence.
- Provides scenario-level reproducibility sufficient for independent reruns with comparable event traces.
- Demonstrates that at least two mitigations, such as least-privilege tool gating or memory quarantine, measurably reduce tripwire contact without destroying task utility.
- Produces a reusable event schema that can be adopted by future LASR agent-security test harnesses.

#### Key risks and mitigations

- **Risk:** Deception artefacts become unrealistic and easy for models to identify.  
  **Mitigation:** Co-design artefacts with domain specialists and use blinded realism scoring by analysts.
- **Risk:** The work drifts into offensive agent capability development.  
  **Mitigation:** Keep all assets synthetic, avoid exploit release, and publish only defensive indicators and aggregate findings.
- **Risk:** Model nondeterminism undermines evaluation.  
  **Mitigation:** Use repeated trials, seeded open-model baselines where possible, and confidence intervals around behavioural rates.

### Testing strategy

#### Research questions

1. Which classes of deception artefacts best distinguish benign agent errors from dangerous goal pursuit?
2. Do current agent frameworks leak security-critical intent through tool-use traces before harmful outcomes occur?
3. Can containment prompts, permission revocation, memory quarantine, or peer authentication reduce unsafe persistence?

#### Experimental design

- Construct 20-30 synthetic missions with controlled security boundaries.
- Run each mission under benign, adversarial-prompt, malicious-tool, and compromised-memory conditions.
- Compare model-agent combinations across identical tasks.
- Introduce mitigations one at a time to estimate causal effects on tripwire contact and mission completion.

#### Evaluation metrics

- Tripwire contact rate by artefact class.
- Time or steps to first boundary violation.
- Unsafe persistence after warning or denial.
- Benign mission completion rate.
- False-positive rate for ordinary exploration.
- Containment recovery rate.

#### Adversarial testing

- Indirect prompt injection in retrieved documents.
- Tool description manipulation.
- Fake peer-agent registration.
- Memory poisoning and hidden instruction carryover.
- Synthetic credential discovery and attempted use.

#### Evidence threshold for pilot success

The pilot succeeds if it demonstrates a repeatable sandbox in which defensive tripwires reveal materially different risk profiles across agent configurations, and at least one mitigation reduces a high-risk behaviour by a statistically meaningful margin while preserving useful task performance.

#### Optional extension

Extend Sentinel Garden into a federated LASR agent-security range, where universities, SMEs, and government teams can contribute scenarios, decoys, and mitigations under a common event schema.

## Project 2: Model Supply-Chain Forensics for Foundation-Model Derivatives

### Executive proposition

AI supply-chain security is currently strongest for software packages and weakest for the most strategically consequential artefacts: models, adapters, embeddings, synthetic datasets, prompt libraries, evaluation sets, and fine-tuning pipelines. As organisations adopt fine-tuned, distilled, merged, quantised, and retrieval-augmented models, they often cannot answer a basic security question: what exactly influenced this model's behaviour, and can we prove it?

This project will prototype a forensic system for tracing behavioural provenance in derivative AI systems. Instead of treating model cards and software bills of materials as static paperwork, it will create an evidence graph linking training artefacts, parameter deltas, evaluation behaviours, data licences, safety regressions, and deployment context. The scientific novelty is to combine model-difference analysis, behavioural watermarking, and knowledge-graph provenance into an "AI materials passport" that is testable rather than merely declarative.

### Prototype PRD

#### Product name

Model Provenance Observatory: forensic passports for derivative AI systems.

#### Primary users

- Government and critical-sector AI assurance teams procuring or deploying third-party models.
- Research groups fine-tuning open-weight models for sensitive use cases.
- Security teams investigating model tampering, backdoors, unsafe capability drift, or data contamination.
- Policy teams defining evidence requirements for trustworthy AI supply chains.

#### User problem

Teams increasingly inherit model artefacts whose origins are unclear. A model may include unknown fine-tunes, merged adapters, contaminated evaluation data, synthetic training traces, or deliberately implanted triggers. Conventional documentation can be incomplete, wrong, or unverifiable.

#### Product goals

1. Create an evidence model for AI supply-chain provenance that covers weights, adapters, datasets, prompts, embeddings, and evaluations.
2. Prototype forensic tests that infer likely derivation relationships and behavioural contamination.
3. Demonstrate a minimum viable "AI materials passport" for several open-model derivative chains.
4. Identify assurance gaps where current provenance claims cannot be independently validated.

#### Non-goals

- De-anonymising private training data.
- Certifying all models as safe or unsafe.
- Building a full production model registry.

#### Core prototype features

- **AI bill of materials schema:** structured representation of base model, adapters, merges, fine-tuning data, synthetic data generators, prompt templates, retrieval indexes, evaluations, and deployment constraints.
- **Provenance graph:** a queryable graph connecting artefacts, transformations, evidence, and uncertainty scores.
- **Weight and adapter fingerprinting:** statistical signatures for detecting similarity, merging, quantisation, and suspicious parameter-localised changes.
- **Behavioural lineage probes:** test suites that detect inherited behaviours, safety regressions, hidden triggers, and benchmark contamination.
- **Evidence confidence scoring:** a calibrated score separating attested, inferred, contradicted, and unknown provenance claims.
- **Passport generator:** human-readable and machine-readable model provenance report.

#### Work packages

| Work package | Activities | Outputs |
| --- | --- | --- |
| WP1: Provenance ontology | Design an ontology for derivative model supply chains and assurance claims. | AI materials passport schema and evidence categories. |
| WP2: Forensic methods | Implement weight fingerprints, adapter-delta analysis, behavioural probes, and trigger scans. | Prototype forensic toolkit. |
| WP3: Case-study corpus | Build benign derivative chains from open models, adapters, synthetic data, and controlled backdoor insertions. | Reproducible corpus with known ground truth. |
| WP4: Evaluation | Measure whether the observatory recovers lineage, detects tampering, and flags unverifiable claims. | Quantitative evaluation and limitations analysis. |
| WP5: Assurance guidance | Translate findings into procurement and governance recommendations. | Final report and example passport templates. |

#### Success metrics

- Recovers known derivation relationships in controlled model chains with high precision.
- Detects at least two classes of supply-chain anomaly, such as undisclosed adapter merge and trigger-conditioned unsafe behaviour.
- Produces a model passport that distinguishes evidence-backed claims from assertions.
- Demonstrates how provenance confidence changes when documentation is removed, falsified, or incomplete.

#### Key risks and mitigations

- **Risk:** Weight-level fingerprints fail across aggressive quantisation or distillation.  
  **Mitigation:** Combine weight analysis with behavioural probes and uncertainty-aware evidence scoring.
- **Risk:** The project overclaims forensic attribution.  
  **Mitigation:** Use calibrated confidence bands and explicitly report non-identifiability.
- **Risk:** Controlled backdoor experiments create dual-use details.  
  **Mitigation:** Use toy triggers and focus publication on detection methodology and aggregate metrics.

### Testing strategy

#### Research questions

1. Which combinations of structural and behavioural evidence best recover model lineage?
2. Can an assurance team detect material undocumented transformations without access to the full training pipeline?
3. How should uncertainty be represented so decision-makers do not mistake provenance paperwork for proof?

#### Experimental design

- Create controlled derivative chains from open-weight models using fine-tuning, adapter merging, pruning, quantisation, and distillation.
- Introduce benign and malicious anomalies: undocumented adapters, contaminated benchmark examples, synthetic data collapse, and trigger-conditioned behaviours.
- Run provenance inference with partial, truthful, false, and absent documentation.
- Compare graph-based evidence fusion against single-method baselines.

#### Evaluation metrics

- Lineage reconstruction precision and recall.
- Tamper or anomaly detection area under the precision-recall curve.
- Calibration of evidence confidence scores.
- False accusation rate under benign model modifications.
- Robustness under quantisation, distillation, and adapter merging.
- Analyst time saved in producing a provenance assessment.

#### Adversarial testing

- Obfuscated adapter merges.
- Weight perturbations intended to defeat fingerprinting.
- Synthetic datasets containing benchmark leakage.
- Behavioural triggers with low activation probability.
- False or incomplete model cards.

#### Evidence threshold for pilot success

The pilot succeeds if the observatory can recover meaningful provenance in controlled derivative chains, expose unverifiable or contradicted claims, and produce passports that a procurement or assurance team could use to make risk-based deployment decisions.

#### Optional extension

Develop the observatory into a shared LASR AI supply-chain assurance testbed, including model passport interoperability with software bills of materials, confidential-compute attestations, and secure model registries.

## Project 3: Cognitive Firewalling for Retrieval-Augmented Decision Support

### Executive proposition

Retrieval-augmented generation (RAG) is becoming the default architecture for bringing organisational knowledge into AI systems. In national-security settings, the key risk is not only that the model may hallucinate. It is that the retrieval layer can be manipulated so that an AI assistant confidently reasons from adversary-shaped context while appearing grounded. Existing mitigations check documents for malicious strings or ask the model to be careful. That is insufficient.

This project will prototype a cognitive firewall: a security layer that evaluates how retrieved evidence changes model beliefs, decisions, and uncertainty before those changes reach the user. It treats retrieved context as an influence operation against the model's reasoning process. The novelty is to measure and govern epistemic influence, not merely content toxicity.

### Prototype PRD

#### Product name

Epistemic Shield: a cognitive firewall for RAG and decision-support systems.

#### Primary users

- Analysts using AI decision-support tools over open-source, internal, or partner-provided corpora.
- Security teams responsible for RAG pipelines, vector stores, document ingestion, and prompt governance.
- Evaluation teams assessing AI systems for high-stakes summarisation, triage, and strategic warning tasks.

#### User problem

RAG systems can be compromised through poisoned documents, adversarial phrasing, source spoofing, embedding-space manipulation, temporal flooding, and selective omission. Current systems often report citations, but citations do not prove that the retrieved evidence was authentic, representative, or proportionately influential.

#### Product goals

1. Detect when retrieved evidence causes disproportionate or suspicious changes in model conclusions.
2. Attribute model answer changes to specific retrieved passages, sources, and retrieval decisions.
3. Provide policy controls for uncertainty escalation, source diversity, contradiction handling, and abstention.
4. Produce a reusable benchmark for epistemic attacks against RAG systems.

#### Non-goals

- Replacing human analytic judgement.
- Solving source authenticity for all domains.
- Building a production intelligence platform.

#### Core prototype features

- **Belief-delta measurement:** compare model outputs with and without each retrieved passage to estimate influence on claims, confidence, and recommendations.
- **Retrieval influence graph:** map which documents, sources, time windows, and embedding clusters drive answer changes.
- **Contradiction and corroboration engine:** identify whether retrieved claims are independent, circular, contradicted, or single-source.
- **Epistemic risk policies:** configurable thresholds for over-concentration, suspicious novelty, source spoofing, temporal flooding, and confidence inflation.
- **Analyst-facing explanation:** concise display of why an answer was allowed, caveated, escalated, or blocked.
- **Attack benchmark:** synthetic and semi-synthetic corpora with known poisoning, omission, and flooding attacks.

#### Work packages

| Work package | Activities | Outputs |
| --- | --- | --- |
| WP1: Threat model | Define epistemic attacks against RAG in decision-support contexts. | Attack taxonomy and benchmark specification. |
| WP2: Influence measurement | Implement belief-delta, passage attribution, source diversity, and contradiction metrics. | Prototype cognitive firewall library. |
| WP3: Benchmark corpus | Build controlled corpora for strategic-warning, cyber-incident, and policy-briefing scenarios. | Test corpus with ground-truth attack labels. |
| WP4: Evaluation campaign | Compare baseline RAG, citation-only guardrails, and Epistemic Shield under attacks. | Quantitative results and qualitative analyst review. |
| WP5: Transition and governance | Produce deployment patterns and policy guidance for sensitive RAG systems. | Final report, demo notebook, and risk-control checklist. |

#### Success metrics

- Detects poisoning, flooding, or source-spoofing attacks before final answer delivery in controlled scenarios.
- Reduces unsupported confidence inflation relative to baseline RAG.
- Maintains useful answer quality on clean corpora.
- Produces actionable explanations that analysts judge relevant and non-obstructive.

#### Key risks and mitigations

- **Risk:** Influence measurement is computationally expensive.  
  **Mitigation:** Evaluate approximate leave-one-cluster-out methods and reserve full attribution for high-risk answers.
- **Risk:** The system blocks novel but true weak signals.  
  **Mitigation:** Use escalation and caveating policies, not blunt suppression, and measure missed-signal risk explicitly.
- **Risk:** Benchmark scenarios become too artificial.  
  **Mitigation:** Use domain expert review and mix synthetic attacks with realistic public-source corpora.

### Testing strategy

#### Research questions

1. Can epistemic influence metrics detect attacks that conventional prompt-injection and toxicity filters miss?
2. What policy thresholds best balance attack detection against weak-signal preservation?
3. Do analyst-facing influence explanations improve appropriate trust calibration?

#### Experimental design

- Build three benchmark domains: cyber incident response, strategic warning, and crisis misinformation triage.
- Seed corpora with ground-truth attacks: poisoned documents, source spoofing, circular citation, temporal flooding, embedding-neighbour hijacking, and strategic omission.
- Evaluate baseline RAG, citation-filtered RAG, and Epistemic Shield RAG.
- Conduct blinded analyst review of answer usefulness, trust calibration, and escalation appropriateness.

#### Evaluation metrics

- Attack detection precision, recall, and latency.
- Confidence calibration error before and after firewall policies.
- Unsupported claim rate.
- Source concentration and independence scores.
- Clean-task answer quality.
- Analyst trust-calibration score.

#### Adversarial testing

- Multi-document slow poisoning where no single passage is obviously malicious.
- High-reputation source spoofing in metadata.
- Embedding-space attacks that cause malicious documents to be retrieved for unrelated queries.
- Contradiction burial, where many low-quality documents drown out one authoritative correction.
- Adversarially phrased passages that induce overconfident policy recommendations.

#### Evidence threshold for pilot success

The pilot succeeds if Epistemic Shield detects epistemic attacks missed by conventional filters, reduces confidence inflation and unsupported claims, and preserves analyst utility on clean tasks.

#### Optional extension

Extend the cognitive firewall into a deployable governance layer for sensitive RAG systems, including confidential-compute compatible audit logs and integration with model provenance passports from Project 2.

## Comparative recommendation

| Criterion | Project 1: Sentinel Garden | Project 2: Model Provenance Observatory | Project 3: Epistemic Shield |
| --- | --- | --- | --- |
| Strategic novelty | Very high: agentic counterintelligence and active defence | High: forensic model passports for derivative AI | Very high: epistemic security for RAG reasoning |
| Prototype feasibility | High with synthetic environments | Medium-high with open models and controlled chains | High with benchmark corpora and RAG pipelines |
| LASR mission fit | Strong fit for agentic AI security and cyber resilience | Strong fit for AI supply-chain security | Strong fit for secure decision support and national-security analysis |
| Dual-use sensitivity | Moderate | Moderate | Low-moderate |
| Best first pilot | If LASR prioritises agent infrastructure | If LASR prioritises procurement and assurance | If LASR prioritises analyst decision-support systems |

My strongest recommendation is to lead with **Project 3: Epistemic Shield** if the call panel values immediate operational relevance to government analysis workflows, and with **Project 1: Sentinel Garden** if it values frontier research that could define a new field of agentic AI security testing. **Project 2** is the most infrastructure-like and may be strongest as a bridge between LASR's supply-chain security interests and future regulatory assurance requirements.

## Suggested cross-project scientific contribution

The three projects can also be framed as a coherent research programme:

1. **Sentinel Garden** secures autonomous action.
2. **Model Provenance Observatory** secures the origins of AI capability.
3. **Epistemic Shield** secures the evidence that AI systems reason from.

Together, they define a defence-in-depth agenda for AI security: provenance before deployment, epistemic control during reasoning, and deception-based detection during autonomous action.
