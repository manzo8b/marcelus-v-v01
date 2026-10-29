import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Mail } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { profile, repository } from '@/data/portfolio';
import { siteOrigin, absoluteUrl } from '@/data/site-metadata';
import { type Locale, localizedPath, t } from '@/data/i18n';
import '@/app/globals.css';
import '@/app/learning-colors.css';

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: { default: 'Marcelo Fernandez - AI Workflow & Evaluation Portfolio', template: '%s | Marcelus AI Lab' },
  description: 'Professional work in prompt design, AI content evaluation, training workflows and process documentation.',
  openGraph: { title: 'Marcelus AI Lab - Marcelo Fernandez', description: 'Prompt design, content evaluation and practical training workflows. Projects, examples and documentary evidence.', type: 'website' },
};

export default function SiteLayout({ children, locale }: Readonly<{ children: React.ReactNode; locale: Locale }>) {
  const person = { '@context': 'https://schema.org', '@type': 'Person', '@id': absoluteUrl('/#marcelo-fernandez'), name: profile.name, url: absoluteUrl(localizedPath('/about/', locale)), sameAs: [profile.linkedin, 'https://github.com/manzo8b'] };
  return <html lang={locale} suppressHydrationWarning><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, '\\u003c') }} />
    <a className="skip-link" href="#main-content">{t(locale, 'Skip to content')}</a>
    <Navigation locale={locale} />
    <main id="main-content" className="page-container">{children}</main>
    <footer className="site-footer"><div className="footer-inner"><div><strong>MARCELUS AI LAB</strong><span>{t(locale, 'Personal projects. Documented work.')}</span></div><div className="footer-links"><Link href={localizedPath('/about/', locale)}>{profile.name}</Link><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn<ArrowUpRight size={14} /></a><a href={`mailto:${profile.email}`}><Mail size={14} aria-hidden="true"/>{profile.email}</a><a href={repository} target="_blank" rel="noreferrer">GitHub<ArrowUpRight size={14} /></a></div></div><nav aria-label="Legal" className="mx-auto flex max-w-[1184px] flex-wrap gap-x-5 gap-y-2 px-8 pb-7 text-xs text-[var(--muted)]">
      <Link href={localizedPath('/legal/', locale)}>{locale === 'it' ? 'Informazioni legali' : locale === 'es' ? 'Aviso legal' : 'Legal notice'}</Link>
      <Link href={localizedPath('/legal/privacy/', locale)}>{locale === 'it' ? 'Privacy' : locale === 'es' ? 'Privacidad' : 'Privacy'}</Link>
      <Link href={localizedPath('/legal/cookies/', locale)}>{locale === 'it' ? 'Cookie e tecnologie locali' : locale === 'es' ? 'Cookies y tecnologías locales' : 'Cookies and local technologies'}</Link>
    </nav></footer>
  </body></html>;
}
