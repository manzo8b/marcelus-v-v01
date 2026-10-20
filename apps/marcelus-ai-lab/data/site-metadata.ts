import { type Locale, localizedPath, t } from './i18n.ts';

export const siteOrigin = process.env.NEXT_PUBLIC_SITE_ORIGIN || 'http://127.0.0.1:3210';
export function absoluteUrl(path: string) { return new URL(`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`, siteOrigin).href; }
export function pageMetadata(path: string, locale: Locale = 'en', title = 'Marcelo Fernandez', description = t(locale, 'Prompt design, content evaluation and practical training, with documentary evidence and explicit limits.')) {
  const absolute = absoluteUrl;
  if (path === '/recruiter/') description = t(locale, 'Recruiter overview: background, selected evidence, languages and collaboration.');
  if (path === '/library/') description = t(locale, 'Structured instructions, training and documented workflows. Original library entries in Italian.');
  const canonical = absolute(localizedPath(path, locale));
  const project = path.match(/^\/projects\/(verum|prometeus|risto-lab)\/$/)?.[1];
  const image = absolute(`/media/og-${project || 'portfolio'}.png`);
  return {
    title, description,
    alternates: { canonical, languages: Object.fromEntries((['en', 'it', 'es'] as const).map(language => [language, absolute(localizedPath(path, language))])) },
    icons: { icon: [{ url: absolute('/icon.svg'), type: 'image/svg+xml' }] },
    openGraph: { title, description, url: canonical, siteName: 'MARCELUS AI LAB', type: 'website' as const, locale: locale === 'en' ? 'en_US' : locale === 'it' ? 'it_IT' : 'es_ES', images: [{ url: image, width: 1200, height: 630, alt: project ? title : 'Marcelo Fernandez / AI Evaluation, Training & Workflow Design' }] },
    twitter: { card: 'summary_large_image' as const, title, description, images: [image] },
  };
}
