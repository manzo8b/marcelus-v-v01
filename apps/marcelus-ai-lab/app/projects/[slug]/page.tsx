import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCheck } from 'lucide-react';
import { CaseList, EvidenceList, projectIcons } from '@/components/portfolio';
import { evidenceUrl, projects } from '@/data/portfolio';
import { projectDetails } from '@/data/project-details';
import { getSample } from '@/data/fixtures';

export function generateStaticParams() { return projects.map(project => ({ slug: project.id })); }
export const dynamicParams = false;
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find(item => item.id === slug);
  return { title: project?.name || 'Project', description: project?.description };
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find(item => item.id === slug);
  if (!project) notFound();
  const Icon = projectIcons[project.id];
  const detail = projectDetails[project.id];
  const before = getSample(detail.example.beforeId);
  const after = getSample(detail.example.afterId);
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <article className={`project-detail project-${project.id}`}>
    <Link href="/projects/" className="breadcrumb"><ArrowLeft size={14} />All projects</Link>
    <div className="project-title"><span className="project-icon"><Icon size={27} /></span><p className="eyebrow">{project.subtitle}</p></div>
    <h1>{project.name}</h1><p className="lead">{project.description}</p>
    <dl className="project-summary"><div><dt>Audience</dt><dd>{detail.audience}</dd></div><div><dt>Contribution</dt><dd>{detail.contribution}</dd></div><div><dt>Evidence status</dt><dd>{detail.status}</dd></div></dl>
    <nav className="project-sections" aria-label="Project sections"><a href="#method">01 Method</a><a href="#deliverables">02 Deliverables</a><a href="#example">03 Example</a><a href="#iteration">04 Review</a></nav>
    <div className="project-detail-grid" id="method">
      <section aria-labelledby="method-title"><p className="eyebrow">01 / Approach</p><h2 id="method-title">The problem & method</h2><p>{project.problem}</p><ol className="workflow-steps">{project.method.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span>{step}</li>)}</ol></section>
      <aside aria-labelledby="sources-title"><h2 id="sources-title">Documentary evidence</h2><EvidenceList project={project} /><div className="limits-note"><h3>Scope & limits</h3><p>{project.limits}</p></div></aside>
    </div>
    <section className="project-band" id="deliverables" aria-labelledby="deliverables-title"><p className="eyebrow">02 / Work & skills</p><h2 id="deliverables-title">What the work produces</h2><div className="deliverable-list">{detail.deliverables.map(item => <div className="deliverable-row" key={item.label}><p className="deliverable-skill">{item.kind}</p><div><h3>{item.label}</h3><p>{item.description}</p></div><a href={evidenceUrl(item.path)} target="_blank" rel="noreferrer" className="text-link">Read source<ArrowUpRight size={15} /><span className="sr-only">: {item.label}</span></a></div>)}</div></section>
    <section className="project-band" id="example" aria-labelledby="example-title"><p className="eyebrow">03 / Documented comparison</p><h2 id="example-title">{detail.example.title}</h2><p className="example-provenance">{detail.example.limit}</p>
      <div className="example-brief"><h3>Original brief</h3><p lang="it">{before.instruction}</p><h3>Reference facts</h3><p lang="it">{before.reference}</p></div>
      <div className="sample-comparison">{[{ label: 'Candidate / variant', sample: before }, { label: 'Reference-preserving variant', sample: after }].map(({ label, sample }) => <section className="sample-panel" key={sample.id} aria-label={label}><div className="sample-heading"><h3>{label}</h3><span className={`sample-verdict ${sample.expected === 'PASS' ? 'is-pass' : 'is-fail'}`}>{sample.expected}</span></div><blockquote lang="it">{sample.output}</blockquote><p className="sample-finding" lang="it">{sample.evidence}</p></section>)}</div>
      <div className="review-finding"><CheckCheck size={21} /><p>{detail.example.finding}</p></div>
      <a href={evidenceUrl('AI_EVALUATION_PORTFOLIO/fixtures.json')} target="_blank" rel="noreferrer" className="text-link">Canonical examples<ArrowUpRight size={16} /></a>
    </section>
    <section className="project-band" id="iteration" aria-labelledby="iteration-title"><p className="eyebrow">04 / Quality & iteration</p><h2 id="iteration-title">What changed, what remains to test</h2><dl className="iteration-list"><div><dt>Observed</dt><dd>{detail.review.observed}</dd></div><div><dt>Documented change</dt><dd>{detail.review.changed}</dd></div><div><dt>Next verification</dt><dd>{detail.review.next}</dd></div></dl><a href={evidenceUrl(detail.review.source.path)} target="_blank" rel="noreferrer" className="text-link">{detail.review.source.label}<ArrowUpRight size={16} /></a></section>
    <section className="related-cases"><h2>Selected case</h2><CaseList projectId={project.id} /></section>
    <nav className="project-next" aria-label="More projects"><Link href="/projects/" className="text-link"><ArrowLeft size={16} />All projects</Link><Link href={`/projects/${next.id}/`} className="text-link">{next.name}<ArrowRight size={16} /></Link></nav>
  </article>;
}
