import Link from 'next/link';
import { type Locale, localizedPath, t } from '@/data/i18n';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { PageHeading } from '@/components/portfolio';
import { caseStudies, evidenceUrl, projects } from '@/data/portfolio';

export function generateStaticParams() { return caseStudies.map(item => ({ slug: item.id })); }
export const dynamicParams = false;
type Props = { params: Promise<{ slug: string; locale?: Locale }> };
export async function generateMetadata({ params }: Props) { const { slug } = await params; return { title: caseStudies.find(item => item.id === slug)?.title || 'Case study' }; }
export default async function CasePage({ params }: Props) {
  const { slug, locale = 'en' } = await params;
  const tr = (text: string) => t(locale, text);
  const item = caseStudies.find(candidate => candidate.id === slug);
  if (!item) notFound();
  const project = projects.find(candidate => candidate.id === item.projectId)!;
  return <article><Link href={localizedPath('/cases/', locale)} className="breadcrumb">{tr('Case studies')} / {item.number}</Link><PageHeading locale={locale} label={project.name} title={item.title} description={item.summary} /><div className="case-detail-content"><section><h2>{tr('What this demonstrates')}</h2><ul className="skills-list">{item.demonstrates.map(skill => <li key={skill}>{tr(skill)}</li>)}</ul><h2>{tr('The complete evidence')}</h2><p>{tr('The canonical case contains the input, reference, annotated output, correction and quality check. Its original location and provenance are preserved.')}</p><a className="button button-primary" href={evidenceUrl(item.path)} target="_blank" rel="noreferrer">{tr('Read the documented case')}<ArrowUpRight size={17} /></a></section><aside className="limits-note"><h2>{tr('Scope & limits')}</h2><p>{tr(project.limits)}</p><p>{tr('AI-assisted synthetic material. Not a new live GPT test or an independent human evaluation.')}</p></aside></div></article>;
}
