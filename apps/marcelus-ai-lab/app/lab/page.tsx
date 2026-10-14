import { readFileSync } from 'node:fs';
import path from 'node:path';
import { ArrowUpRight } from 'lucide-react';
import { PageHeading } from '@/components/portfolio';
import { evidenceUrl } from '@/data/portfolio';

export const metadata = { title: 'AI Evaluation Lab' };
export default function LabPage() {
  const fixtureFile = JSON.parse(readFileSync(path.resolve(process.cwd(), '../../AI_EVALUATION_PORTFOLIO/fixtures.json'), 'utf8'));
  const sample = fixtureFile.samples.find((item: { id: string }) => item.id === 'C');
  return <><PageHeading label="Content quality / Reference-based review" title="AI Evaluation Lab" description="How I review AI-generated content against explicit instructions and reference facts." />
    <div className="lab-topline"><span className="sample-label">Example C / Italian</span><span className="section-meta">Synthetic example / documentary review</span></div>
    <div className="reference-grid"><section><p className="eyebrow">01 / Original instruction</p><p lang="it">{sample.instruction}</p><h2>Reference facts</h2><p className="reference-text" lang="it">{sample.reference}</p></section><section><p className="eyebrow">02 / Candidate answer</p><p className="candidate-text" lang="it">{sample.output}</p><div className="annotation"><span className="annotation-title">Documented finding</span><p lang="it">{sample.evidence}</p><p className="annotation-verdict">{sample.expected}<span>Mandatory condition changed</span></p></div></section></div>
    <div className="scope-note"><strong>Reference-based, not live AI analysis</strong><p>This is an existing annotated sample. No model, web search or automatic judgment of new text is running.</p></div>
    <div className="document-links"><a className="text-link" href={evidenceUrl('AI_EVALUATION_PORTFOLIO/RUBRIC.md')} target="_blank" rel="noreferrer">Decision rules<ArrowUpRight size={16} /></a><a className="text-link" href={evidenceUrl('AI_EVALUATION_PORTFOLIO/TEST_LOG.md')} target="_blank" rel="noreferrer">Verification log<ArrowUpRight size={16} /></a></div>
  </>;
}
