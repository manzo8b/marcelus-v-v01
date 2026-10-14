import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { profile, repository } from '@/data/portfolio';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Marcelo Fernandez - AI Workflow & Evaluation Portfolio', template: '%s | Marcelus AI Lab' },
  description: 'Professional work in prompt design, AI content evaluation, training workflows and process documentation.',
  openGraph: { title: 'Marcelus AI Lab - Marcelo Fernandez', description: 'Prompt design, content evaluation and practical training workflows. Projects, examples and documentary evidence.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Navigation />
    <main id="main-content" className="page-container">{children}</main>
    <footer className="site-footer"><div className="footer-inner"><div><strong>MARCELUS AI LAB</strong><span>Personal projects. Documented work.</span></div><div className="footer-links"><Link href="/about/">Marcelo Fernandez Caballero</Link><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn<ArrowUpRight size={14} /></a><a href={repository} target="_blank" rel="noreferrer">GitHub<ArrowUpRight size={14} /></a></div></div></footer>
  </body></html>;
}
