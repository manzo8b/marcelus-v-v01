import Link from 'next/link';
import { type Locale, localizedPath, t } from '@/data/i18n';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCheck } from 'lucide-react';
import { CaseList, EvidenceList, projectIcons } from '@/components/portfolio';
import { evidenceUrl, projects } from '@/data/portfolio';
import { projectDetails } from '@/data/project-details';
import { getSample } from '@/data/fixtures';
import { ProjectDemo } from '@/components/demos';
import { pageMetadata } from '@/data/site-metadata';

export function generateStaticParams() { return projects.map(project => ({ slug: project.id })); }
export const dynamicParams = false;
type Props = { params: Promise<{ slug: string; locale?: Locale }> };
export async function generateMetadata({ params }: Props) {
  const { slug, locale = 'en' } = await params;
  const project = projects.find(item => item.id === slug);
  return pageMetadata(`/projects/${slug}/`, locale, project?.name || 'Project', project ? t(locale, project.description) : undefined);
}
export default async function ProjectPage({ params }: Props) {
  const { slug, locale = 'en' } = await params;
  const tr = (text: string) => t(locale, text);
  const project = projects.find(item => item.id === slug);
  if (!project) notFound();
  const Icon = projectIcons[project.id];
  const detail = projectDetails[project.id];
  const before = getSample(detail.example.beforeId);
  const after = getSample(detail.example.afterId);
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <article className={`project-detail project-${project.id}`}>
    <Link href={localizedPath('/projects/', locale)} className="breadcrumb"><ArrowLeft size={14} />{tr('All projects')}</Link>
    <div className="project-title"><span className="project-icon"><Icon size={27} /></span><p className="eyebrow">{tr(project.subtitle)}</p></div>
    <h1>{project.name}</h1><p className="lead">{tr(project.description)}</p>
    {project.id === 'prometeus' && <div className="document-links"><Link className="text-link" href={localizedPath('/library/', locale)}>{tr('Explore the prompt library')}<ArrowRight size={17} /></Link></div>}
    {project.id === 'verum' && <div className="document-links"><Link className="button button-primary" href={localizedPath('/lab/', locale)}>{tr('Try the evaluation lab')}<ArrowRight size={17} /></Link><a href={evidenceUrl('FACT_CHECK_INDIPENDENTE/METODO_FACT_CHECKING.md')} target="_blank" rel="noreferrer" className="text-link">{tr('View evaluation methodology')}<ArrowUpRight size={17} /></a></div>}
    <dl className="project-summary"><div><dt>{tr('Audience')}</dt><dd>{tr(detail.audience)}</dd></div><div><dt>{tr('Contribution')}</dt><dd>{tr(detail.contribution)}</dd></div><div><dt>{tr('Evidence status')}</dt><dd>{tr(detail.status)}</dd></div></dl>
    <nav className="project-sections" aria-label={tr('Project sections')}><a href="#method">{tr('01 Method')}</a><a href="#deliverables">{tr('02 Deliverables')}</a><a href="#example">{tr('03 Example')}</a><a href="#iteration">{tr('04 Review')}</a><a href="#demo">{tr('Interactive demo')}</a></nav>
    <div className="project-detail-grid" id="method">
      <section aria-labelledby="method-title"><p className="eyebrow">{tr('01 / Approach')}</p><h2 id="method-title">{tr('The problem & method')}</h2><p>{tr(project.problem)}</p><ol className="workflow-steps">{project.method.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span>{tr(step)}</li>)}</ol></section>
      <aside aria-labelledby="sources-title"><h2 id="sources-title">{tr('Documentary evidence')}</h2><EvidenceList project={project} locale={locale} /><div className="limits-note"><h3>{tr('Scope & limits')}</h3><p>{tr(project.limits)}</p></div></aside>
    </div>
    <section className="project-band" id="deliverables" aria-labelledby="deliverables-title"><p className="eyebrow">{tr('02 / Work & skills')}</p><h2 id="deliverables-title">{tr('What the work produces')}</h2><div className="deliverable-list">{detail.deliverables.map(item => <div className="deliverable-row" key={item.label}><p className="deliverable-skill">{tr(item.kind)}</p><div><h3>{tr(item.label)}</h3><p>{tr(item.description)}</p></div><a href={evidenceUrl(item.path)} target="_blank" rel="noreferrer" className="text-link">{tr('Read source')}<ArrowUpRight size={15} /><span className="sr-only">: {tr(item.label)}</span></a></div>)}</div></section>
    <section className="project-band" id="example" aria-labelledby="example-title"><p className="eyebrow">{tr('03 / Documented comparison')}</p><h2 id="example-title">{tr(detail.example.title)}</h2><p className="example-provenance">{tr(detail.example.limit)}</p>
      <p className="original-language">{tr('Original Italian evidence')}</p>
      <div className="example-brief"><h3>{tr('Original brief')}</h3><p lang="it">{before.instruction}</p><h3>{tr('Reference facts')}</h3><p lang="it">{before.reference}</p></div>
      <div className="sample-comparison">{[{ label: 'Candidate / variant', sample: before }, { label: 'Reference-preserving variant', sample: after }].map(({ label, sample }) => <section className="sample-panel" key={sample.id} aria-label={tr(label)}><div className="sample-heading"><h3>{tr(label)}</h3><span className={`sample-verdict ${sample.expected === 'PASS' ? 'is-pass' : 'is-fail'}`}>{sample.expected}</span></div><blockquote lang="it">{sample.output}</blockquote><p className="sample-finding" lang="it">{sample.evidence}</p></section>)}</div>
      <div className="review-finding"><CheckCheck size={21} /><p>{tr(detail.example.finding)}</p></div>
      <a href={evidenceUrl('AI_EVALUATION_PORTFOLIO/fixtures.json')} target="_blank" rel="noreferrer" className="text-link">{tr('Canonical examples')}<ArrowUpRight size={16} /></a>
    </section>
    <section className="project-band" id="iteration" aria-labelledby="iteration-title"><p className="eyebrow">{tr('04 / Quality & iteration')}</p><h2 id="iteration-title">{tr('What changed, what remains to test')}</h2><dl className="iteration-list"><div><dt>{tr('Observed')}</dt><dd>{tr(detail.review.observed)}</dd></div><div><dt>{tr('Documented change')}</dt><dd>{tr(detail.review.changed)}</dd></div><div><dt>{tr('Next verification')}</dt><dd>{tr(detail.review.next)}</dd></div></dl><a href={evidenceUrl(detail.review.source.path)} target="_blank" rel="noreferrer" className="text-link">{tr(detail.review.source.label)}<ArrowUpRight size={16} /></a></section>
    <section className="project-band" id="demo"><ProjectDemo projectId={project.id} locale={locale} samples={['CULTURE_BAD', 'CULTURE_FIXED', 'A', 'B', 'C', 'D', 'B1_A', 'B1_B', 'UNKNOWN'].map(getSample)} /></section>
    <section className="related-cases"><h2>{tr('Selected cases')}</h2><CaseList projectId={project.id} locale={locale} /></section>
    <nav className="project-next" aria-label={tr('More projects')}><Link href={localizedPath('/projects/', locale)} className="text-link"><ArrowLeft size={16} />{tr('All projects')}</Link><Link href={localizedPath(`/projects/${next.id}/`, locale)} className="text-link">{next.name}<ArrowRight size={16} /></Link></nav>
  </article>;
}
