import { CaseList, PageHeading } from '@/components/portfolio';
import { type LocalizedProps, t } from '@/data/i18n';
export const metadata = { title: 'Case studies' };
export default async function CasesPage({ params }: LocalizedProps) {
  const { locale = 'en' } = await params;
  return <><PageHeading locale={locale} label="Proof of work" title="Case studies" description="Three documented, AI-assisted synthetic cases, with source material and explicit limits." /><CaseList locale={locale} /><div className="scope-note"><strong>{t(locale, 'Evidence, not a client claim')}</strong><p>{t(locale, 'These cases demonstrate an approach to evaluation and training. They are not paid client engagements or independently validated outcomes.')}</p></div></>;
}
