import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { CaseList, ProjectGrid, PublicCv } from '@/components/portfolio';
import { assetUrl, profile } from '@/data/portfolio';
import { type LocalizedProps, localizedPath, t } from '@/data/i18n';

export default async function Home({ params }: LocalizedProps) {
  const { locale = 'en' } = await params;
  const tr = (text: string) => t(locale, text);
  return <>
    <section className="identity-band">
      <div className="identity-topline"><p className="eyebrow">{tr('Workflow / Evaluation / Training')}</p><Link href={localizedPath('/recruiter/', locale)} className="overview-link">{tr('60 second overview')}<ArrowUpRight size={15} /></Link></div>
      <h1>{profile.name}</h1><p className="professional-role">{tr(profile.role)}</p>
      <p className="identity-copy">{tr('I turn real-world problems into structured prompts, workflows, evaluation systems and practical AI tools.')}</p>
      <div className="hero-actions"><Link href={localizedPath('/lab/', locale)} className="button button-primary">{tr('Explore the lab')}<ArrowRight size={17} /></Link><Link href={localizedPath('/projects/', locale)} className="button button-secondary">{tr('View projects')}</Link><PublicCv locale={locale} /></div>
    </section>
    <section className="selected-section" aria-labelledby="selected-heading"><div className="section-heading"><h2 id="selected-heading">{tr('Selected projects')}</h2><span className="section-meta">{tr('03 documented projects')}</span></div><ProjectGrid locale={locale} /></section>
    <section className="work-preview" aria-labelledby="preview-heading">
      <div className="section-heading"><div><p className="eyebrow">{tr('An existing proof of work')}</p><h2 id="preview-heading">Evaluation Desk</h2></div><Link href={localizedPath('/lab/', locale)} className="text-link">{tr('View the reference')}<ArrowRight size={16} /></Link></div>
      <figure className="product-media"><img src={assetUrl('/media/evaluation-desk.png')} alt={tr('The existing Evaluation Desk manual prototype, with a reference, candidate response and an evidence-based FAIL annotation.')} width={1440} height={1089} /><figcaption>{tr('Evaluation Desk / existing manual prototype / synthetic reference-based example')}</figcaption></figure>
    </section>
    <section className="cases-section" aria-labelledby="cases-heading"><div className="section-heading"><h2 id="cases-heading">{tr('From problem to proof')}</h2><Link href={localizedPath('/cases/', locale)} className="text-link">{tr('All case studies')}<ArrowRight size={16} /></Link></div><CaseList locale={locale} /></section>
  </>;
}
