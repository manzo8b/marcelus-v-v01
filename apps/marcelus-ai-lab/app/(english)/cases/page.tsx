import { CaseList, PageHeading } from '@/components/portfolio';
import { type LocalizedProps, t } from '@/data/i18n';
import { pageMetadata } from '@/data/site-metadata';
export const metadata = pageMetadata('/cases/', 'en', 'Case studies');
export default async function CasesPage({ params }: LocalizedProps) {
  const { locale = 'en' } = await params;
  return <><PageHeading locale={locale} label="Proof of work" title="Case studies" description="Four documented cases: source-backed fact-checking and AI-assisted synthetic evaluation and training examples." /><section aria-labelledby="case-list"><h2 className="sr-only" id="case-list">{t(locale, 'Selected proof of work')}</h2><CaseList locale={locale} /></section><div className="scope-note"><strong>{t(locale, 'Evidence, not a client claim')}</strong><p>{t(locale, 'These cases demonstrate an approach to evaluation and training. They are not paid client engagements or independently validated outcomes.')}</p></div></>;
}
