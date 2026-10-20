import Link from 'next/link';
import { type LocalizedProps, localizedPath, t } from '@/data/i18n';
import { ArrowRight } from 'lucide-react';
import { CaseList, ContactBand, PageHeading } from '@/components/portfolio';
import { profile } from '@/data/portfolio';
import { pageMetadata } from '@/data/site-metadata';
export const metadata = pageMetadata('/recruiter/', 'en', '60 second overview');
export default async function RecruiterPage({ params }: LocalizedProps) {
  const { locale = 'en' } = await params;
  const tr = (text: string) => t(locale, text);
  const rows = [
    ['Who I am', 'Operations, team coordination and professional training.'],
    ['What I can do', 'Compare claims, assess evidence, explain errors and document a correction.'],
    ['Core skills', 'Instruction design, evaluation rubrics, audience adaptation and process documentation.'],
    ['Proof of work', 'Three personal projects, annotated synthetic cases and historical reports with explicit limits.'],
    ['Work setup', 'Based in Italy. Remote collaboration; project availability and contract terms to be agreed.'],
  ];
  return <><PageHeading locale={locale} label="60 second overview" title={profile.name} description={profile.role} />
    <dl className="recruiter-summary">{rows.map(([title, text]) => <div key={title}><dt>{tr(title)}</dt><dd>{tr(text)}</dd></div>)}<div><dt>{tr('Languages')}</dt><dd><ul className="plain-list">{profile.languages.map(language => <li key={language}>{tr(language)}</li>)}</ul><p className="small-note">{tr('English B1 is self-reported, not certified. Italian CELI B1 is a separate certification.')}</p></dd></div><div><dt>{tr('Target roles')}</dt><dd>{profile.targets.map(tr).join(' / ')}</dd></div></dl>
    <section aria-labelledby="recruiter-proof"><div className="section-heading"><h2 id="recruiter-proof">{tr('Selected proof of work')}</h2></div><Link className="button button-primary" href={localizedPath('/cases/fact-check-renewables/', locale)}>{tr('View one practical case')}<ArrowRight size={17} /></Link><CaseList locale={locale} ids={['fact-check-renewables', 'prompt-design', 'training-language-quality']} /><p className="small-note">{tr('Personal projects, not paid AI evaluator assignments. Deterministic demos, not live inference.')}</p></section>
    <ContactBand locale={locale} /></>;
}
