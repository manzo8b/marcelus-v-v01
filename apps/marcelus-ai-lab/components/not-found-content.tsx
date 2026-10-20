'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { type Locale, localeFromPath, localizedPath, t } from '@/data/i18n';
export function NotFoundContent() {
  const [locale, setLocale] = useState<Locale>('en');
  useEffect(() => {
    const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
    const path = window.location.pathname.slice(prefix.length);
    const next = localeFromPath(path);
    setLocale(next); document.documentElement.lang = next;
    try { if (localStorage.getItem('marcelus-theme') === 'dark') document.documentElement.dataset.theme = 'dark'; } catch { /* The error page works without storage. */ }
  }, []);
  return <main className="page-container"><div className="page-heading"><p className="eyebrow">404</p><h1>{t(locale, 'This page is not in the lab.')}</h1><Link className="button button-primary" href={localizedPath('/', locale)}>{t(locale, 'Back to overview')}</Link><div className="document-links"><Link href="/">English</Link><Link href="/it/">Italiano</Link><Link href="/es/">Español</Link></div></div></main>;
}
