import type { Evidence, ProjectId } from './portfolio.ts';

type ProjectDetail = {
  audience: string;
  contribution: string;
  status: string;
  deliverables: (Evidence & { description: string })[];
  example: { title: string; beforeId: string; afterId: string; finding: string; limit: string };
  review: { observed: string; changed: string; next: string; source: Evidence };
};

export const projectDetails: Record<ProjectId, ProjectDetail> = {
  prometeus: {
    audience: 'People turning an unclear request into a structured AI task.',
    contribution: 'Instruction framework, evaluation criteria and documented calibration.',
    status: 'V5 instructions / historical V2 testing',
    deliverables: [
      { label: 'Prompt framework', description: 'Role, context, objective, constraints, sources, format, tone and self-check, with risk review and up to three necessary questions.', path: 'PROMETEUS_MARCELUS/gpt_builder/ISTRUZIONI_CUSTOM_GPT_V5.md', kind: 'Prompt design' },
      { label: 'Evaluation criteria', description: 'A historical 1-5 rubric for classification, questions, prompt quality, prudence, verifiability, usefulness and tone.', path: 'PROMETEUS_MARCELUS/training/rubrica_valutazione.md', kind: 'Requirements' },
      { label: 'Specialized calibration case', description: 'A separate portfolio rubric makes major errors override minor language issues. It is not a certification of the GPT.', path: 'AI_EVALUATION_PORTFOLIO/CASE_02_PROMETEUS_RUBRIC_DESIGN.md', kind: 'Rubric design' },
    ],
    example: {
      title: 'A mandatory condition cannot become optional', beforeId: 'C', afterId: 'A',
      finding: 'The candidate changes mandatory registration to a recommendation. The calibrated rule assigns FAIL even though the sentence is readable. Variant A preserves the supplied facts.',
      limit: 'Existing synthetic calibration examples, authored and reviewed with AI assistance. These are not before-and-after transcripts from a live GPT session.',
    },
    review: {
      observed: 'An earlier portfolio decision treated a changed mandatory condition as a minor revision.',
      changed: 'The specialized rubric now distinguishes factual or mandatory-condition errors from minor language defects. Example C is FAIL; an accent-only error remains NEEDS REVISION.',
      next: 'Run and retain new V5 conversations against declared criteria. The V2 report contains one full case and a compact diagnostic batch, not 30 complete V5 transcripts.',
      source: { label: 'Calibration and correction record', path: 'AI_EVALUATION_PORTFOLIO/CASE_02_PROMETEUS_RUBRIC_DESIGN.md', kind: 'Documented iteration' },
    },
  },
  verum: {
    audience: 'Readers and reviewers checking a claim against identifiable evidence.',
    contribution: 'Fact-checking method, claim-level annotations and correction feedback.',
    status: 'Documented method / live regression pending',
    deliverables: [
      { label: 'Source and claim method', description: 'Separate facts, opinions and inferences; check source quality, context and what cannot be established.', path: 'FACT_CHECK_INDIPENDENTE/METODO_FACT_CHECKING.md', kind: 'Fact checking' },
      { label: 'Claim-level review', description: 'Compare opening days, price, age conditions and last entry with supplied reference facts. Record unsupported additions separately.', path: 'AI_EVALUATION_PORTFOLIO/CASE_01_VERUM_OUTPUT_EVALUATION.md', kind: 'Content evaluation' },
      { label: 'Correction with evidence', description: 'Explain each changed attribute and provide a reference-preserving revision rather than relying on a fluent tone.', path: 'AI_EVALUATION_PORTFOLIO/CASE_01_VERUM_OUTPUT_EVALUATION.md', kind: 'Structured feedback' },
    ],
    example: {
      title: 'Readable language, unreliable information', beforeId: 'CULTURE_BAD', afterId: 'CULTURE_FIXED',
      finding: 'Four factual attributes change: opening days, price, the free-entry age and last entry. The queue prediction is also unsupported. The corrected version preserves all five reference facts.',
      limit: 'Synthetic, supplied-reference review using the portfolio PASS/FAIL rubric. It is not a live web investigation or a measurement of VERUM accuracy; the historical method has its own verdict vocabulary.',
    },
    review: {
      observed: 'The 6 August 2026 report records an ambiguous request where "applications" was prematurely interpreted as asylum applications.',
      changed: 'An ambiguity protocol was added to the instructions: clarify the subject before giving a firm verdict.',
      next: 'Repeat the ambiguous request in a new live conversation and preserve both the clarification and the final decision. That regression is not yet attached.',
      source: { label: 'Historical test and instruction correction', path: 'FACT_CHECK_INDIPENDENTE/TEST_REPORT_VERUM_2026_08_06.md', kind: 'Historical report' },
    },
  },
  'risto-lab': {
    audience: 'Hospitality teams, trainers and new employees who need usable procedures.',
    contribution: 'Training structure, operational checklists and audience-aware language.',
    status: 'Pre-Builder report / private GPT',
    deliverables: [
      { label: 'Training module catalogue', description: 'Documented modules include complaint handling, professional hospitality Italian and express onboarding; planned durations are not courses delivered.', path: 'RISTO_LAB/CATALOGO_MODULI_FORMATIVI_V1.md', kind: 'Training design' },
      { label: 'Operational method', description: 'Observe, understand, standardize, train, simulate, verify, measure and improve. Outputs include procedures, checklists and role-play.', path: 'RISTO_LAB/README.md', kind: 'SOP design' },
      { label: 'Audience-aware checklist', description: 'Keep the objects, missing-material condition and final supervisor check explicit in four concise actions.', path: 'AI_EVALUATION_PORTFOLIO/CASE_03_LANGUAGE_QUALITY.md', kind: 'Process documentation' },
    ],
    example: {
      title: 'From formal prose to four practical actions', beforeId: 'B1_A', afterId: 'B1_B',
      finding: 'Variant A omits the required checklist and the specific objects. Variant B names glasses and napkins, assigns the escalation and retains the final check before service.',
      limit: 'Synthetic example inspired by module M08, not a delivered course or a new run of the private GPT. PASS is a documentary decision, not evidence of comprehension by B1 participants.',
    },
    review: {
      observed: 'The training example shows that grammatical, formal prose can still miss the requested format and concrete objects.',
      changed: 'The revised four-point checklist uses direct actions and preserves the original condition and responsibility, within the 45-word brief.',
      next: 'Ask B1 readers what to check, who to notify and when service can start. No participant responses have been collected; the 50 V2 scenarios are prepared cases, not 50 completed live tests.',
      source: { label: 'Language comparison and proposed human check', path: 'AI_EVALUATION_PORTFOLIO/CASE_03_LANGUAGE_QUALITY.md', kind: 'Synthetic case' },
    },
  },
};
