import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { CaseList, ContactBand, ProjectGrid, PublicCv } from '@/components/portfolio';
import { assetUrl, profile } from '@/data/portfolio';
import { type LocalizedProps, localizedPath, t } from '@/data/i18n';
import { pageMetadata } from '@/data/site-metadata';

export const metadata = pageMetadata('/');

export default async function Home({ params }: LocalizedProps) {
  const { locale = 'en' } = await params;
  const tr = (text: string) => t(locale, text);
  return <>
    <section className="identity-band">
      <div className="identity-topline"><p className="eyebrow">{tr('Workflow / Evaluation / Training')}</p><a href={profile.linkedin} target="_blank" rel="noreferrer" className="overview-link">LinkedIn<ArrowUpRight size={15} /></a></div>
      <h1>{profile.name}</h1><p className="professional-role">{tr(profile.role)}</p>
      <p className="identity-copy">{tr('I turn real-world problems into structured prompts, workflows, evaluation systems and practical AI tools.')}</p>
      <div className="hero-actions"><Link href="#proof" className="button button-primary">{tr('Explore my work')}<ArrowRight size={17} /></Link><Link href={localizedPath('/recruiter/', locale)} className="button button-secondary">{tr('60 second overview')}</Link><PublicCv locale={locale} /></div>
    </section>
    <section id="proof" className="selected-section" aria-labelledby="selected-heading"><div className="section-heading"><h2 id="selected-heading">{tr('Selected proof of work')}</h2><Link href={localizedPath('/cases/', locale)} className="text-link">{tr('All case studies')}<ArrowRight size={16} /></Link></div><CaseList locale={locale} ids={['fact-check-renewables', 'prompt-design', 'training-language-quality']} /></section>
    <section className="credibility-band" aria-label={tr('Evidence status')}>{[['Documented', 'Four cases with sources and explicit limits.'], ['Tested', 'Nine synthetic fixtures with mechanical checks, not model accuracy.'], ['Iterated', 'Historical changes documented; remaining checks stay visible.']].map(([title, detail]) => <div key={title}><h2>{tr(title)}</h2><p>{tr(detail)}</p></div>)}</section>
    <section className="selected-section" aria-labelledby="projects-heading"><div className="section-heading"><h2 id="projects-heading">{tr('Selected projects')}</h2><span className="section-meta">{tr('03 documented projects')}</span></div><ProjectGrid locale={locale} evaluationFirst /></section>
    <section className="work-preview" aria-labelledby="preview-heading">
      <div className="section-heading"><div><p className="eyebrow">{tr('An existing proof of work')}</p><h2 id="preview-heading">Evaluation Desk</h2></div><Link href={`${localizedPath('/cases/prompt-design/', locale)}#case-output`} className="text-link">{tr('View the reference')}<ArrowRight size={16} /></Link></div>
      <figure className="product-media"><img src={assetUrl('/media/evaluation-desk.png')} alt={tr('The existing Evaluation Desk manual prototype, with a reference, candidate response and an evidence-based FAIL annotation.')} width={1440} height={1089} loading="lazy" /><figcaption>{tr('Evaluation Desk / existing manual prototype / synthetic reference-based example')}</figcaption></figure>
    </section>
    <ContactBand locale={locale} />
  </>;
}
