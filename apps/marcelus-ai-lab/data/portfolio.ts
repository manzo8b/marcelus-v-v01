export const sourceCommit = 'f108170a748e161ba26dd148421ddd8ad9ee929f';
export const repository = 'https://github.com/manzo8b/marcelus-v-v01';
export const profile = {
  name: 'Marcelo Fernandez Caballero',
  role: 'Trainer & AI Workflow Designer',
  linkedin: 'https://www.linkedin.com/in/marcelo-fernandez-cab/',
  publicCv: null as string | null,
  languages: ['Spanish: native', 'Italian: professional use, CELI B1 certified', 'English: B1'],
  targets: ['AI Content Evaluation', 'Language Evaluation', 'Digital Training', 'Content Quality', 'Process Documentation'],
};

export type ProjectId = 'prometeus' | 'verum' | 'risto-lab';
export type Evidence = { label: string; path: string; kind: string };
export type Project = {
  id: ProjectId; name: string; subtitle: string; description: string;
  skills: string[]; problem: string; method: string[]; limits: string; evidence: Evidence[];
};

export const projects: Project[] = [
  {
    id: 'prometeus', name: 'Prometeus Marcelus', subtitle: 'Prompt & Workflow Design',
    description: 'Clarify a request. Define constraints. Build a verifiable prompt.',
    skills: ['Prompt design', 'Requirements', 'Rubric design'],
    problem: 'A useful answer starts with a clear objective, enough context and explicit constraints.',
    method: ['Clarify the need', 'Identify context', 'Check risk', 'Structure the prompt', 'Verify the result'],
    limits: 'The historical report covers V2: one full case and a compact diagnostic batch. It is not a new validation of V5.',
    evidence: [
      { label: 'Instruction framework V5', path: 'PROMETEUS_MARCELUS/gpt_builder/ISTRUZIONI_CUSTOM_GPT_V5.md', kind: 'Method' },
      { label: 'Evaluation rubric', path: 'PROMETEUS_MARCELUS/training/rubrica_valutazione.md', kind: 'Criteria' },
      { label: 'Historical V2 test report', path: 'PROMETEUS_MARCELUS/training/REPORT_TEST_REALI_30_V2.md', kind: 'Historical report' },
    ],
  },
  {
    id: 'verum', name: 'VERUM', subtitle: 'AI Evaluation & Fact Checking',
    description: 'Compare claims with reference facts, then explain the correction.',
    skills: ['Content evaluation', 'Fact checking', 'Structured feedback'],
    problem: 'Fluent language can hide altered facts, unsupported additions and missing evidence.',
    method: ['Read the claim', 'Find the reference', 'Compare the evidence', 'Explain the decision', 'Record the limits'],
    limits: 'Portfolio examples use supplied reference facts. They do not perform live web fact-checking. The ambiguity regression remains pending.',
    evidence: [
      { label: 'Fact-checking methodology', path: 'FACT_CHECK_INDIPENDENTE/METODO_FACT_CHECKING.md', kind: 'Method' },
      { label: 'Ambiguity test and correction', path: 'FACT_CHECK_INDIPENDENTE/TEST_REPORT_VERUM_2026_08_06.md', kind: 'Historical report' },
      { label: 'Reference-based case study', path: 'AI_EVALUATION_PORTFOLIO/CASE_01_VERUM_OUTPUT_EVALUATION.md', kind: 'Synthetic case' },
    ],
  },
  {
    id: 'risto-lab', name: 'RISTO-LAB', subtitle: 'Training & Operations',
    description: 'Turn practical knowledge into clear training and shared standards.',
    skills: ['Training design', 'SOP design', 'Process documentation'],
    problem: 'Teams need shared procedures, clear language and a practical way to check understanding.',
    method: ['Observe the problem', 'Define the process', 'Write the procedure', 'Train the team', 'Check understanding'],
    limits: 'The report is pre-Builder. The 50 scenarios are prepared test cases, not 50 completed live tests. B1 comprehension has not been tested with participants.',
    evidence: [
      { label: 'Training module catalogue', path: 'RISTO_LAB/CATALOGO_MODULI_FORMATIVI_V1.md', kind: 'Method' },
      { label: 'Pre-Builder report', path: 'RISTO_LAB/TEST_REPORT_RISTO_LAB_2026_09_03.md', kind: 'Historical report' },
      { label: 'Language and training case', path: 'AI_EVALUATION_PORTFOLIO/CASE_03_LANGUAGE_QUALITY.md', kind: 'Synthetic case' },
    ],
  },
];

export const caseStudies = [
  { id: 'prompt-design', projectId: 'prometeus' as ProjectId, number: '01', title: 'From a vague request to an evaluation rubric', summary: 'Make the criteria explicit, define severity and calibrate the decision.', path: 'AI_EVALUATION_PORTFOLIO/CASE_02_PROMETEUS_RUBRIC_DESIGN.md', demonstrates: ['Instruction design', 'Severity rules', 'Calibration'] },
  { id: 'output-evaluation', projectId: 'verum' as ProjectId, number: '02', title: 'When a clear answer changes the facts', summary: 'Compare a cultural-centre description with five supplied facts and a documented correction.', path: 'AI_EVALUATION_PORTFOLIO/CASE_01_VERUM_OUTPUT_EVALUATION.md', demonstrates: ['Claim review', 'Unsupported content', 'Feedback'] },
  { id: 'training-language-quality', projectId: 'risto-lab' as ProjectId, number: '03', title: 'From formal language to practical instructions', summary: 'Preserve the procedure while making four actions clear to a new employee.', path: 'AI_EVALUATION_PORTFOLIO/CASE_03_LANGUAGE_QUALITY.md', demonstrates: ['Audience awareness', 'Checklists', 'Training design'] },
];

export function evidenceUrl(path: string) {
  return `${repository}/blob/${sourceCommit}/${path.split('/').map(encodeURIComponent).join('/')}`;
}

export function assetUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;
}
