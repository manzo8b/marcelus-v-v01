import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { CaseList, ProjectGrid, PublicCv } from '@/components/portfolio';
import { assetUrl, profile } from '@/data/portfolio';

export default function Home() {
  return <>
    <section className="identity-band">
      <div className="identity-topline"><p className="eyebrow">Workflow / Evaluation / Training</p><Link href="/recruiter/" className="overview-link">60 second overview<ArrowUpRight size={15} /></Link></div>
      <h1>Marcelo Fernandez Caballero</h1><p className="professional-role">{profile.role}</p>
      <p className="identity-copy">I turn real-world problems into structured prompts, workflows, evaluation systems and practical AI tools.</p>
      <div className="hero-actions"><Link href="/lab/" className="button button-primary">Explore the lab<ArrowRight size={17} /></Link><Link href="/projects/" className="button button-secondary">View projects</Link><PublicCv /></div>
    </section>
    <section className="selected-section" aria-labelledby="selected-heading"><div className="section-heading"><h2 id="selected-heading">Selected projects</h2><span className="section-meta">03 documented projects</span></div><ProjectGrid /></section>
    <section className="work-preview" aria-labelledby="preview-heading">
      <div className="section-heading"><div><p className="eyebrow">An existing proof of work</p><h2 id="preview-heading">Evaluation Desk</h2></div><Link href="/lab/" className="text-link">View the reference<ArrowRight size={16} /></Link></div>
      <figure className="product-media"><img src={assetUrl('/media/evaluation-desk.png')} alt="The existing Evaluation Desk manual prototype, with a reference, candidate response and an evidence-based FAIL annotation." width={1440} height={1089} /><figcaption>Evaluation Desk / existing manual prototype / synthetic reference-based example</figcaption></figure>
    </section>
    <section className="cases-section" aria-labelledby="cases-heading"><div className="section-heading"><h2 id="cases-heading">From problem to proof</h2><Link href="/cases/" className="text-link">All case studies<ArrowRight size={16} /></Link></div><CaseList /></section>
  </>;
}
