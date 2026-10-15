import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { profile, repository } from '@/data/portfolio';
import { siteOrigin } from '@/data/site-metadata';
import { type Locale, localizedPath, t } from '@/data/i18n';
import '@/app/globals.css';

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: { default: 'Marcelo Fernandez - AI Workflow & Evaluation Portfolio', template: '%s | Marcelus AI Lab' },
  description: 'Professional work in prompt design, AI content evaluation, training workflows and process documentation.',
  openGraph: { title: 'Marcelus AI Lab - Marcelo Fernandez', description: 'Prompt design, content evaluation and practical training workflows. Projects, examples and documentary evidence.', type: 'website' },
};

export default function SiteLayout({ children, locale }: Readonly<{ children: React.ReactNode; locale: Locale }>) {
  return <html lang={locale} suppressHydrationWarning><body>
    <a className="skip-link" href="#main-content">{t(locale, 'Skip to content')}</a>
    <Navigation locale={locale} />
    <main id="main-content" className="page-container">{children}</main>
    <footer className="site-footer"><div className="footer-inner"><div><strong>MARCELUS AI LAB</strong><span>{t(locale, 'Personal projects. Documented work.')}</span></div><div className="footer-links"><Link href={localizedPath('/about/', locale)}>{profile.name}</Link><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn<ArrowUpRight size={14} /></a><a href={repository} target="_blank" rel="noreferrer">GitHub<ArrowUpRight size={14} /></a></div></div></footer>
  </body></html>;
}
