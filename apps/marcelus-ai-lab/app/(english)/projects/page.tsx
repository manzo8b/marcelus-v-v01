import { PageHeading, ProjectGrid } from '@/components/portfolio';
import { type LocalizedProps, t } from '@/data/i18n';

import { pageMetadata } from '@/data/site-metadata';
export const metadata = pageMetadata('/projects/', 'en', 'Projects');
export default async function ProjectsPage({ params }: LocalizedProps) {
  const { locale = 'en' } = await params;
  return <><PageHeading locale={locale} label="Personal proof of work" title="Selected projects" description="Prompt design, content evaluation and practical training, with documentary evidence and explicit limits." /><ProjectGrid locale={locale} /><div className="scope-note"><strong>{t(locale, 'Personal proof of work')}</strong><p>{t(locale, 'Project documents, historical reports and AI-assisted synthetic examples are kept distinct. They do not represent paid AI evaluator assignments or independent user validation.')}</p></div></>;
}
