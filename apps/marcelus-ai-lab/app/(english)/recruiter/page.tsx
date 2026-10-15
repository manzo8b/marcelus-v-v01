import Link from 'next/link';
import { type LocalizedProps, localizedPath, t } from '@/data/i18n';
import { ArrowRight } from 'lucide-react';
import { CaseList, PageHeading, PublicCv } from '@/components/portfolio';
import { profile } from '@/data/portfolio';
export const metadata = { title: '60 second overview' };
export default async function RecruiterPage({ params }: LocalizedProps) {
  const { locale = 'en' } = await params;
  const tr = (text: string) => t(locale, text);
  return <><PageHeading locale={locale} label="60 second overview" title={profile.name} description={profile.role} /><dl className="recruiter-summary"><div><dt>{tr('Background')}</dt><dd>{tr('Operations, team coordination and professional training.')}</dd></div><div><dt>{tr('What I build')}</dt><dd>{tr('Structured prompts, evaluation rubrics, training materials and practical workflows.')}</dd></div><div><dt>{tr('Current direction')}</dt><dd>{profile.targets.map(tr).join(' / ')}</dd></div><div><dt>{tr('Proof of work')}</dt><dd>{tr('Three personal projects, annotated synthetic cases and historical reports with explicit limits.')}</dd></div></dl><CaseList locale={locale} /><div className="document-links"><Link className="button button-primary" href={localizedPath('/lab/', locale)}>{tr('Open the evaluation example')}<ArrowRight size={16} /></Link><PublicCv locale={locale} /></div></>;
}
