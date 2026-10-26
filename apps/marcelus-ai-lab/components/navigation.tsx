'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Aperture, Menu, Moon, Sun, X } from 'lucide-react';
import { repository } from '@/data/portfolio';
import { type Locale, localizedPath, unlocalizedPath, t } from '@/data/i18n';

const links = [['/', 'Overview'], ['/projects/', 'Projects'], ['/#skills', 'Skill'], ['/resources/', 'Free resources'], ['/lab/', 'Evaluation lab'], ['/library/', 'Library']];

export function Navigation({ locale }: { locale: Locale }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); menuButton.current?.focus(); }
    };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [open]);
  useEffect(() => {
    let preference = null;
    try { preference = localStorage.getItem('marcelus-theme'); } catch { /* Preferences are optional. */ }
    const next = preference ? preference === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
    setDark(next);
  }, []);
  function toggleTheme() {
    const next = !dark;
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
    setDark(next);
    try { localStorage.setItem('marcelus-theme', next ? 'dark' : 'light'); } catch { /* Keep the in-memory theme. */ }
  }
  function active(href: string) { const clean = unlocalizedPath(path); return href === '/' ? clean === '/' : clean.startsWith(href.replace(/\/$/, '')); }
  return <header className="site-header">
    <div className="header-inner">
      <Link href={localizedPath('/', locale)} className="brand" aria-label="Marcelus AI Lab"><Aperture size={26} strokeWidth={1.6} /><span>MARCELUS <span className="brand-detail">AI LAB</span></span></Link>
      <nav id="main-navigation" aria-label={t(locale, 'Main navigation')} className={`main-nav ${open ? 'is-open' : ''}`}>
        {links.map(([href, label]) => {
          const anchor = href === '/#skills';
          const url = anchor ? `${localizedPath('/', locale)}#skills` : localizedPath(href, locale);
          return <Link key={href} href={url} aria-current={!anchor && active(href) ? 'page' : undefined} onClick={() => setOpen(false)}>{anchor ? 'Skill' : t(locale, label)}</Link>;
        })}
        <a href={repository} target="_blank" rel="noreferrer">GitHub<ArrowUpRight size={14} /></a>
      </nav>
      <div className="header-tools">
        <label className="language-control"><span className="sr-only">{t(locale, 'Language')}</span><select aria-label={t(locale, 'Language')} value={locale} onChange={event => {
          const selected = event.target.value as Locale;
          const target = localizedPath(path, selected);
          // Root-layout changes deliberately reload, preserving the route, hash and theme.
          window.location.assign(`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${target}${window.location.hash}`);
        }}><option value="en" lang="en">EN</option><option value="it" lang="it">IT</option><option value="es" lang="es">ES</option></select></label>
        <button className="icon-button" onClick={toggleTheme} title={t(locale, dark ? 'Switch to light theme' : 'Switch to dark theme')} aria-label={t(locale, dark ? 'Switch to light theme' : 'Switch to dark theme')}>{dark ? <Sun size={19} /> : <Moon size={19} />}</button>
        <button ref={menuButton} className="icon-button menu-button" aria-expanded={open} aria-controls="main-navigation" aria-label={t(locale, open ? 'Close navigation' : 'Open navigation')} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
    </div>
  </header>;
}
