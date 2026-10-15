'use client';
import Link from 'next/link';
import { useId, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, ListChecks, RotateCcw } from 'lucide-react';
import { type Locale, localizedPath, t } from '@/data/i18n';
import { evidenceUrl } from '@/data/portfolio';
import { factCheck, factCheckSource, factClaims, factSources, relativeChange, verdictLabels } from '@/data/fact-check';

export function FactSources({ locale, prefix = 'fact-source' }: { locale: Locale; prefix?: string }) {
  const format = new Intl.DateTimeFormat(locale, { dateStyle: 'medium', timeZone: 'UTC' });
  return <div className="fact-sources">{factSources.map(source => <section id={`${prefix}-${source.id}`} key={source.id}><p className="eyebrow">{source.id} / Eurostat</p><h3><a className="text-link" href={source.url} target="_blank" rel="noreferrer">{source.title[locale]}<ArrowUpRight size={15} /></a></h3><p>{source.finding[locale]}</p><p className="source-meta">{t(locale, 'Primary statistical source / grade A')}<br />{t(locale, 'Published')}: <time dateTime={source.published}>{format.format(new Date(`${source.published}T12:00:00Z`))}</time></p></section>)}</div>;
}
export function FactCheckDemo({ locale }: { locale: Locale }) {
  const tr = (text: string) => t(locale, text);
  const id = useId();
  const [selected, setSelected] = useState('C2');
  const [revealed, setRevealed] = useState<string[]>([]);
  const [allFindings, setAllFindings] = useState(false);
  const claim = factClaims.find(item => item.id === selected)!;
  const visible = revealed.includes(selected);
  const number = new Intl.NumberFormat(locale, { maximumFractionDigits: 1 });
  const calculation = relativeChange(factCheck.electricityShare, factCheck.deltaPoints);
  return <div className="demo-workspace fact-check-workspace" data-demo="fact-check">
    <div className="demo-title"><h2>VERUM / {tr('Fact-check dossier')}</h2><span>{tr('Reviewed')}: <time dateTime={factCheck.reviewedOn}>15.10.2026</time></span></div>
    <p className="demo-disclosure">{factCheck.provenance[locale]}</p>
    <a className="text-link" href="#fact-claims">{tr('Check the claims')}<ArrowDown size={16} /></a>
    <div className="fact-dossier-grid"><section><p className="eyebrow">{tr('Illustrative post')} / {locale === 'en' ? 'EU' : 'UE'} 2024</p><h3 className="fact-headline">{factCheck.title[locale]}</h3><blockquote className="fact-post">{factCheck.post[locale]}</blockquote></section><aside aria-label={tr('Source dossier')}><h3>{tr('Source dossier')}</h3><FactSources locale={locale} /></aside></div>
    <fieldset className="claim-picker" id="fact-claims"><legend>{tr('Select a claim')}</legend>{factClaims.map(item => <label key={item.id}><input type="radio" name={`${id}-claim`} value={item.id} checked={selected === item.id} onChange={() => { setSelected(item.id); setAllFindings(false); }} /><span><strong>{item.id}</strong>{item.text[locale]}</span></label>)}</fieldset>
    <div className="demo-actions"><button className="button button-primary" type="button" onClick={() => { setAllFindings(false); setRevealed(current => current.includes(selected) ? current : [...current, selected]); }}>{tr('Show documented fact-check')}<ArrowRight size={16} /></button><button className="button button-secondary" type="button" onClick={() => { setRevealed(factClaims.map(item => item.id)); setAllFindings(true); }}><ListChecks size={17} />{tr('Show all findings')}</button><button className="icon-button bordered-button" type="button" aria-label={tr('Reset')} title={tr('Reset')} onClick={() => { setSelected('C2'); setRevealed([]); setAllFindings(false); }}><RotateCcw size={18} /></button><span className="section-meta">{tr('Claims explored')}: {revealed.length} / {factClaims.length}</span></div>
    <p className="demo-status" role="status">{allFindings ? tr('All findings shown') : visible ? `${claim.id}: ${verdictLabels[claim.verdict][locale]}` : ''}</p>
    {(allFindings ? factClaims : visible ? [claim] : []).map(finding => <section key={finding.id} className="claim-result" data-testid="fact-result" aria-label={`${finding.id} / ${tr('Documented finding')}`}><div className="claim-result-heading"><h3>{finding.id} / {tr('Documented finding')}</h3><strong className={`fact-verdict verdict-${finding.verdict.replaceAll(' ', '-').toLowerCase()}`}>{verdictLabels[finding.verdict][locale]}</strong></div><p>{finding.reason[locale]}</p><div className="document-links">{finding.sources.map(sourceId => <a className="text-link" href={`#fact-source-${sourceId}`} key={sourceId}>{sourceId}<ArrowRight size={14} /></a>)}</div></section>)}
    <details className="calculation"><summary>{tr('Show the calculation')}</summary><p>{tr('Rounded values / approximate relative change')}</p><code>{number.format(factCheck.electricityShare)} - {number.format(factCheck.deltaPoints)} = {number.format(calculation.previous)}<br />{number.format(factCheck.deltaPoints)} / {number.format(calculation.previous)} × 100 ≈ {number.format(calculation.relative)}%</code></details>
    {revealed.length === factClaims.length && <section className="fact-conclusion" data-testid="fact-conclusion"><h3>{tr('Overall assessment')}: <span className="fact-verdict">{verdictLabels.FUORVIANTE[locale]}</span></h3><p className="section-meta">{tr('This assessment concerns factual claims, not the PASS/FAIL output rubric.')}</p><h3>{tr('Corrected wording')}</h3><p>{factCheck.correction[locale]}</p></section>}
    <div className="scope-note"><strong>{tr('Scope & limits')}</strong><p>{factCheck.limits[locale]}</p></div>
    <div className="document-links"><Link className="text-link" href={localizedPath('/cases/fact-check-renewables/', locale)}>{tr('Read the documented case')}<ArrowRight size={16} /></Link><a className="text-link" href={evidenceUrl(factCheckSource.path, factCheckSource.ref)} target="_blank" rel="noreferrer">{tr('Archived analysis')}<ArrowUpRight size={16} /></a></div>
  </div>;
}
