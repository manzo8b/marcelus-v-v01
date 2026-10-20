import { PageHeading } from '@/components/portfolio';
import { PromptLibrary } from '@/components/library';
import { library } from '@/data/library';
import { type LocalizedProps, t } from '@/data/i18n';
import { pageMetadata } from '@/data/site-metadata';

export const metadata = pageMetadata('/library/', 'en', 'Prometeus Library');
export default async function LibraryPage({ params }: LocalizedProps) {
  const { locale = 'en' } = await params;
  return <><PageHeading locale={locale} label="Prometeus Marcelus" title="Prometeus Library" description="Structured instructions, training and documented workflows. Original library entries in Italian." /><p className="section-meta">{library.entries.length} · {t(locale, 'Entries')} / {library.categories.length} · {t(locale, 'Area')}</p><div className="scope-note"><p>{t(locale, 'Indexed entries are not a count of unique or validated prompts. Health, legal, finance and safety material requires qualified review and current official sources.')}</p></div><div className="project-band"><PromptLibrary locale={locale} /></div></>;
}
