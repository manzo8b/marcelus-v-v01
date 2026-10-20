import Link from 'next/link';
import { type Locale, localizedPath, t } from '@/data/i18n';
import { notFound } from 'next/navigation';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PageHeading } from '@/components/portfolio';
import { caseStudies, evidenceUrl, projects } from '@/data/portfolio';
import { caseNarratives } from '@/data/case-studies';
import { factCheck, factClaims, verdictLabels } from '@/data/fact-check';
import { getSample } from '@/data/fixtures';
import { FactSources } from '@/components/fact-check-demo';
import { pageMetadata } from '@/data/site-metadata';

export function generateStaticParams() { return caseStudies.map(item => ({ slug: item.id })); }
export const dynamicParams = false;
type Props = { params: Promise<{ slug: string; locale?: Locale }> };
export async function generateMetadata({ params }: Props) { const { slug, locale = 'en' } = await params; const item = caseStudies.find(item => item.id === slug); return pageMetadata(`/cases/${slug}/`, locale, item ? t(locale, item.title) : 'Case study', item ? t(locale, item.summary) : undefined); }
export default async function CasePage({ params }: Props) {
  const { slug, locale = 'en' } = await params;
  const tr = (text: string) => t(locale, text);
  const item = caseStudies.find(candidate => candidate.id === slug);
  if (!item) notFound();
  const project = projects.find(candidate => candidate.id === item.projectId)!;
  const narrative = caseNarratives[item.id];
  if (!narrative) notFound();
  const isFactCheck = item.id === 'fact-check-renewables';
  const samples = narrative.samples.map(getSample);
  const input = samples[0];
  const sections = [['problem', 'Problem'], ['input', 'Input & reference'], ['process', 'Process'], ['output', 'Output'], ['quality', 'Quality check'], ['evidence', 'Evidence & limits']];
  return <article className={`case-study project-${project.id}`}>
    <Link href={localizedPath('/cases/', locale)} className="breadcrumb">{tr('Case studies')} / {item.number}</Link>
    <PageHeading locale={locale} label={project.name} title={item.title} description={item.summary} />
    <p className="case-provenance">{tr(isFactCheck ? 'Source-backed illustration' : 'Synthetic evaluation example')} / {tr('AI-assisted synthetic material. Not a new live GPT test or an independent human evaluation.')}</p>
    <nav className="project-sections" aria-label={tr('Case sections')}>{sections.map(([id, label], index) => <a key={id} href={`#case-${id}`}>{String(index + 1).padStart(2, '0')} {tr(label)}</a>)}</nav>
    <section className="case-section" id="case-problem"><h2>{tr('Problem')}</h2><p>{narrative.problem[locale]}</p></section>
    <section className="case-section" id="case-input"><h2>{tr('Input & reference')}</h2><p>{narrative.brief[locale]}</p>
      {isFactCheck ? <><blockquote className="case-quote">{factCheck.post[locale]}</blockquote><FactSources locale={locale} prefix="case-source" /></> : <>
        <p className="original-language">{tr('Original Italian evidence')}</p>
        {narrative.originalRequest && <blockquote className="case-quote" lang="it">{narrative.originalRequest}</blockquote>}
        <div className="case-input-reference"><h3>{tr('Original brief')}</h3><p lang="it">{input.instruction}</p><h3>{tr('Reference facts')}</h3><p lang="it">{input.reference}</p></div>
        {samples.length === 2 && <blockquote className="case-quote" lang="it">{input.output}</blockquote>}
      </>}
    </section>
    <section className="case-section" id="case-process"><h2>{tr('Process')}</h2><ol className="case-process">{narrative.process.map((step, index) => <li key={index}>{step[locale]}</li>)}</ol></section>
    <section className="case-section" id="case-output"><h2>{tr('Output')}</h2><p>{narrative.output[locale]}</p>
      {isFactCheck ? <><div className="case-output-list">{factClaims.map(claim => <section key={claim.id}><div className="claim-result-heading"><h3>{claim.id}</h3><strong className={`fact-verdict verdict-${claim.verdict.replaceAll(' ', '-').toLowerCase()}`}>{verdictLabels[claim.verdict][locale]}</strong></div><p>{claim.text[locale]}</p><p className="output-annotation">{claim.reason[locale]}</p><div className="document-links">{claim.sources.map(source => <a className="text-link" key={source} href={`#case-source-${source}`}>{source}<ArrowRight size={14} /></a>)}</div></section>)}</div><h3>{tr('Corrected wording')}</h3><blockquote className="case-quote">{factCheck.correction[locale]}</blockquote></> : samples.length === 4 ? <div className="case-output-list">{samples.map(sample => <section key={sample.id}><div className="claim-result-heading"><h3>{sample.id}</h3><strong className={`fact-verdict ${sample.expected === 'PASS' ? 'is-pass' : sample.expected === 'FAIL' ? 'is-fail' : 'is-revision'}`}>{sample.expected}</strong></div><p lang="it">{sample.output}</p><p className="output-annotation" lang="it">{sample.evidence}</p></section>)}</div> : <><blockquote className="case-quote" lang="it">{samples[1].output}</blockquote><p className="output-annotation" lang="it">{samples[1].expected} / {samples[1].evidence}</p></>}
    </section>
    <section className="case-section" id="case-quality"><h2>{tr('Quality check')}</h2><dl className="case-quality">{narrative.checks.map((check, index) => <div key={index}><dt>{tr('Documentary check')}</dt><dd>{check[locale]}</dd></div>)}<div><dt>{tr('Human check pending')}</dt><dd>{narrative.pending[locale]}</dd></div></dl><h3>{tr('What this demonstrates')}</h3><ul className="skills-list">{item.demonstrates.map(skill => <li key={skill}>{tr(skill)}</li>)}</ul></section>
    <section className="case-section" id="case-evidence"><h2>{tr('Evidence & limits')}</h2><p>{isFactCheck ? factCheck.limits[locale] : tr(project.limits)}</p><div className="document-links"><a className="text-link" href={evidenceUrl(item.path, item.ref)} target="_blank" rel="noreferrer">{tr('Read the documented case')}<ArrowUpRight size={16} /></a><Link className="text-link" href={localizedPath(`/projects/${project.id}/`, locale)}>{tr('Explore the related project')}<ArrowRight size={16} /></Link><Link className="text-link" href={`${localizedPath(isFactCheck ? '/lab/' : `/projects/${project.id}/`, locale)}${isFactCheck ? '' : '#demo'}`}>{tr('Try the related demo')}<ArrowRight size={16} /></Link></div></section>
    <Link className="text-link case-back" href={localizedPath('/cases/', locale)}>{tr('Back to cases')}<ArrowRight size={16} /></Link>
  </article>;
}
