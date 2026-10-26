import type { MetadataRoute } from 'next';
import { projects, caseStudies } from '@/data/portfolio';
import { locales, localizedPath } from '@/data/i18n';
import { absoluteUrl } from '@/data/site-metadata';

export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/', '/projects/', '/projects/s-comodo/', '/projects/villa-pitosfori/', '/resources/', '/lab/', '/library/', '/cases/', '/about/', '/recruiter/', '/legal/', '/legal/privacy/', '/legal/cookies/', ...projects.map(item => `/projects/${item.id}/`), ...caseStudies.map(item => `/cases/${item.id}/`)];
  return paths.flatMap(path => locales.map(locale => ({
    url: absoluteUrl(localizedPath(path, locale)),
    alternates: { languages: Object.fromEntries(locales.map(language => [language, absoluteUrl(localizedPath(path, language))])) },
  })));
}
