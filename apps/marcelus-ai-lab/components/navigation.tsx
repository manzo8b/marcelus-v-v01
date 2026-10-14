'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Aperture, Menu, Moon, Sun, X } from 'lucide-react';
import { repository } from '@/data/portfolio';

const links = [['/', 'Overview'], ['/projects/', 'Projects'], ['/lab/', 'Evaluation lab'], ['/cases/', 'Case studies'], ['/about/', 'About']];

export function Navigation() {
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
  function active(href: string) { return href === '/' ? path === '/' : path.startsWith(href.replace(/\/$/, '')); }
  return <header className="site-header">
    <div className="header-inner">
      <Link href="/" className="brand" aria-label="Marcelus AI Lab, overview"><Aperture size={26} strokeWidth={1.6} /><span>MARCELUS <span className="brand-detail">AI LAB</span></span></Link>
      <nav id="main-navigation" aria-label="Main navigation" className={`main-nav ${open ? 'is-open' : ''}`}>
        {links.map(([href, label]) => <Link key={href} href={href} aria-current={active(href) ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
        <a href={repository} target="_blank" rel="noreferrer">GitHub<ArrowUpRight size={14} /></a>
      </nav>
      <div className="header-tools">
        <button className="icon-button" onClick={toggleTheme} title={dark ? 'Light theme' : 'Dark theme'} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}>{dark ? <Sun size={19} /> : <Moon size={19} />}</button>
        <button ref={menuButton} className="icon-button menu-button" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
    </div>
  </header>;
}
