import { type Locale, localizedPath, t } from './i18n.ts';

export const siteOrigin = process.env.NEXT_PUBLIC_SITE_ORIGIN || 'http://127.0.0.1:3210';
export function pageMetadata(path: string, locale: Locale = 'en', title = 'Marcelo Fernandez', description = t(locale, 'Prompt design, content evaluation and practical training, with documentary evidence and explicit limits.')) {
  const absolute = (target: string) => new URL(`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${target}`, siteOrigin).href;
  const canonical = absolute(localizedPath(path, locale));
  return {
    title, description,
    alternates: { canonical, languages: Object.fromEntries((['en', 'it', 'es'] as const).map(language => [language, absolute(localizedPath(path, language))])) },
    openGraph: { title, description, url: canonical, siteName: 'MARCELUS AI LAB', type: 'website' as const, locale: locale === 'en' ? 'en_US' : locale === 'it' ? 'it_IT' : 'es_ES', images: [{ url: absolute('/media/evaluation-desk.png'), width: 1440, height: 1089, alt: 'Evaluation Desk / documented manual prototype' }] },
  };
}
