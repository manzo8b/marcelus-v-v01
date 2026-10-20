'use client';

import { useState } from 'react';
import { ArrowDown, ArrowUpRight, RotateCcw, ShieldAlert } from 'lucide-react';
import { library, librarySourceUrl, searchLibrary } from '@/data/library';
import { type Locale, t } from '@/data/i18n';

const pageSize = 24;
export function PromptLibrary({ locale }: { locale: Locale }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [limit, setLimit] = useState(pageSize);
  const results = searchLibrary(query, category);
  const tr = (value: string) => t(locale, value);
  const picks = library.categories.filter(item => ['03', '05', '15', '24'].includes(item.id));
  function reset() { setQuery(''); setCategory(''); setLimit(pageSize); }
  return <section aria-labelledby="library-results-title">
    <h2>{tr('Selected starting points')}</h2>
    <div className="library-picks">{picks.map(item => <button key={item.id} type="button" aria-pressed={category === item.id} onClick={() => { setCategory(category === item.id ? '' : item.id); setQuery(''); setLimit(pageSize); }} lang="it">{item.label}</button>)}</div>
    <div className="library-toolbar"><label>{tr('Search library')}<input type="search" value={query} maxLength={120} placeholder={tr('Search titles')} onChange={event => { setQuery(event.target.value); setLimit(pageSize); }} /></label><label>{tr('Area')}<select value={category} onChange={event => { setCategory(event.target.value); setLimit(pageSize); }}><option value="">{tr('All areas')}</option>{library.categories.map(item => <option key={item.id} value={item.id} lang="it">{item.label} ({item.count})</option>)}</select></label></div>
    <div className="library-status"><h2 id="library-results-title" className="sr-only">{tr('Entries')}</h2><span role="status" aria-live="polite">{Math.min(limit, results.length)} / {results.length} · {tr('Entries')} · {tr('Original Italian titles')}</span>{(query || category) && <button className="icon-button" title={tr('Reset filters')} aria-label={tr('Reset filters')} onClick={reset}><RotateCcw size={18} /></button>}</div>
    {results.length ? <ul className="library-results">{results.slice(0, limit).map(entry => <li key={entry.id}><a className="library-entry" href={librarySourceUrl(entry)} target="_blank" rel="noreferrer"><div><h3 lang="it">{entry.title}</h3><p><span lang="it">{library.categories.find(item => item.id === entry.category)?.label}</span> · {tr('Source')} {entry.id}{entry.reviewRequired && <span className="library-review"><ShieldAlert size={14} />{tr('Review required')}</span>}</p></div><ArrowUpRight size={18} /></a></li>)}</ul> : <div className="library-empty"><h3>{tr('No matching entries')}</h3><button className="text-link bordered-button" onClick={reset}>{tr('Reset filters')}<RotateCcw size={16} /></button></div>}
    {results.length > limit && <div className="document-links"><button className="button button-secondary" onClick={() => setLimit(value => value + pageSize)}>{tr('Show more')}<ArrowDown size={17} /></button></div>}
  </section>;
}
