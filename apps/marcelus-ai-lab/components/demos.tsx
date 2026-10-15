'use client';

import { useId, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, Copy, RotateCcw } from 'lucide-react';
import { type Locale, t } from '@/data/i18n';
import { type ProjectId, evidenceUrl } from '@/data/portfolio';
import type { Sample } from '@/data/fixtures';
import { type Blueprint, type ReviewFocus, type ScenarioId, blueprintIds, blueprintLabels, buildPrompt, focusSamples, promptLimit, scenarioIds, scenarioLabels, scenarios, trainingViews, validateRequest } from '@/data/demos';

type DemoProps = { locale: Locale };
export function ProjectDemo({ projectId, locale, samples }: DemoProps & { projectId: ProjectId; samples: Sample[] }) {
  return projectId === 'prometeus' ? <PrometeusDemo locale={locale} /> : projectId === 'verum' ? <VerumDemo locale={locale} samples={samples} /> : <RistoDemo locale={locale} />;
}

export function PrometeusDemo({ locale }: DemoProps) {
  const tr = (text: string) => t(locale, text);
  const id = useId();
  const input = useRef<HTMLTextAreaElement>(null);
  const [blueprint, setBlueprint] = useState<Blueprint>('training');
  const [request, setRequest] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [output, setOutput] = useState<ReturnType<typeof buildPrompt> | null>(null);
  const [copyState, setCopyState] = useState<'idle' | 'busy' | 'copied' | 'error'>('idle');
  function clearResult() { setOutput(null); setError(null); setCopyState('idle'); }
  return <div className="demo-workspace" data-demo="prometeus">
    <div className="demo-title"><h2>Prometeus / {tr('Interactive demo')}</h2><span>{tr('Local templates / no AI API')}</span></div>
    <p className="demo-disclosure">{tr('Template composition, not semantic analysis. Input stays in this tab and is not saved or sent.')}</p>
    <form noValidate onSubmit={event => {
      event.preventDefault();
      const validation = validateRequest(request);
      if (validation) { setError(validation); setOutput(null); input.current?.focus(); return; }
      setError(null); setCopyState('idle'); setOutput(buildPrompt(request, blueprint, locale));
    }}>
      <label htmlFor={`${id}-blueprint`}>{tr('Choose a blueprint')}</label>
      <select id={`${id}-blueprint`} value={blueprint} onChange={event => { setBlueprint(event.target.value as Blueprint); clearResult(); }}>{blueprintIds.map(key => <option key={key} value={key}>{tr(blueprintLabels[key])}</option>)}</select>
      <label htmlFor={`${id}-request`}>{tr('Your request')}</label>
      <textarea ref={input} id={`${id}-request`} value={request} maxLength={promptLimit} rows={4} aria-invalid={!!error} aria-describedby={`${id}-count${error ? ` ${id}-error` : ''}`} onChange={event => { setRequest(event.target.value); clearResult(); }} placeholder={tr('Help me create a training course.')} />
      <div className="input-meta"><span id={`${id}-count`}>{request.length} / {promptLimit}</span>{error && <p id={`${id}-error`} role="alert">{tr(error)}</p>}</div>
      <div className="demo-actions"><button className="button button-primary" type="submit">{tr('Build structured prompt')}<ArrowRight size={16} /></button><button type="button" className="icon-button bordered-button" title={tr('Reset')} aria-label={tr('Reset')} onClick={() => { setRequest(''); setBlueprint('training'); clearResult(); input.current?.focus(); }}><RotateCcw size={18} /></button></div>
    </form>
    <p className="demo-status" role="status">{output ? tr('Structured prompt') : ''}</p>
    {output && <div className="prompt-result" data-testid="prompt-result">{output.map(section => <section key={section.title}><div className="prompt-section-heading"><h3>{tr(section.title)}</h3>{section.title === 'Structured prompt' && <button className="icon-button" disabled={copyState === 'busy'} title={tr('Copy prompt')} aria-label={tr('Copy prompt')} onClick={async () => {
      setCopyState('busy');
      try { await navigator.clipboard.writeText(section.text); setCopyState('copied'); } catch { setCopyState('error'); }
    }}>{copyState === 'copied' ? <Check size={18} /> : <Copy size={18} />}</button>}</div><p className={section.title === 'Structured prompt' ? 'generated-prompt' : ''}>{section.text}</p></section>)}<p role="status">{copyState === 'copied' ? tr('Copied') : copyState === 'error' ? tr('Copy unavailable') : ''}</p></div>}
  </div>;
}

export function VerumDemo({ locale, samples }: DemoProps & { samples: Sample[] }) {
  const tr = (text: string) => t(locale, text);
  const id = useId();
  const [focus, setFocus] = useState<ReviewFocus>('Factual consistency');
  const [sampleId, setSampleId] = useState('C');
  const [revealed, setRevealed] = useState(false);
  const sample = samples.find(item => item.id === sampleId);
  if (!sample) return <p role="alert">{tr('No reference supplied')}</p>;
  return <div className="demo-workspace" data-demo="verum">
    <div className="demo-title"><h2>VERUM / {tr('Interactive demo')}</h2><span>{tr('Guided examples / no live analysis')}</span></div>
    <p className="demo-disclosure">{tr('Existing AI-assisted annotations, not automatic error detection. Examples and verdict codes are original; no new text is assessed.')}</p>
    <div className="demo-selectors"><div><label htmlFor={`${id}-focus`}>{tr('Review focus')}</label><select id={`${id}-focus`} value={focus} onChange={event => { const next = event.target.value as ReviewFocus; setFocus(next); setSampleId(focusSamples[next][0]); setRevealed(false); }}>{Object.keys(focusSamples).map(key => <option key={key} value={key}>{tr(key)}</option>)}</select></div><div><label htmlFor={`${id}-sample`}>{tr('Example')}</label><select id={`${id}-sample`} value={sampleId} onChange={event => { setSampleId(event.target.value); setRevealed(false); }}>{focusSamples[focus].map(key => <option key={key} value={key}>{key}</option>)}</select></div></div>
    <p className="original-language">{tr('Original Italian evidence')}</p>
    <div className="reference-grid demo-reference"><section><h3>{tr('Original brief')}</h3><p lang="it">{sample.instruction}</p><h3>{tr('Reference facts')}</h3><p className="reference-text" lang={sample.reference ? 'it' : locale}>{sample.reference || tr('No reference supplied')}</p></section><section><h3>{tr('Candidate answer')}</h3><p className="candidate-text" lang="it">{sample.output}</p></section></div>
    <div className="demo-actions"><button type="button" className="button button-primary" onClick={() => setRevealed(true)}>{tr('Reveal documented review')}<ArrowRight size={16} /></button><button type="button" className="icon-button bordered-button" title={tr('Reset')} aria-label={tr('Reset')} onClick={() => { setFocus('Factual consistency'); setSampleId('C'); setRevealed(false); }}><RotateCcw size={18} /></button></div>
    <div className="demo-status" role="status" aria-live="polite">{revealed ? sample.expected : ''}</div>
    {revealed && <section className="annotation" data-testid="review-result"><h3>{tr('Documented finding')}</h3><p lang="it">{sample.evidence}</p><p className={`annotation-verdict ${sample.expected === 'PASS' ? 'is-pass' : sample.expected === 'FAIL' ? 'is-fail' : 'is-revision'}`}>{sample.expected}</p><a className="text-link" href={evidenceUrl('AI_EVALUATION_PORTFOLIO/fixtures.json')} target="_blank" rel="noreferrer">{tr('Canonical examples')}<ArrowUpRight size={16} /></a></section>}
    <div className="document-links"><a className="text-link" href={evidenceUrl('AI_EVALUATION_PORTFOLIO/RUBRIC.md')} target="_blank" rel="noreferrer">{tr('Decision rules')}<ArrowUpRight size={16} /></a><a className="text-link" href={evidenceUrl('AI_EVALUATION_PORTFOLIO/TEST_LOG.md')} target="_blank" rel="noreferrer">{tr('Verification log')}<ArrowUpRight size={16} /></a></div>
  </div>;
}

export function RistoDemo({ locale }: DemoProps) {
  const tr = (text: string) => t(locale, text);
  const id = useId();
  const [scenarioId, setScenarioId] = useState<ScenarioId>('opening');
  const [visible, setVisible] = useState(false);
  const [tab, setTab] = useState(0);
  const [checked, setChecked] = useState<number[]>([]);
  const scenario = scenarios[locale][scenarioId];
  const activeView = trainingViews[tab];
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  return <div className="demo-workspace" data-demo="risto-lab">
    <div className="demo-title"><h2>RISTO-LAB / {tr('Interactive demo')}</h2><span>{tr('Synthetic training scenarios')}</span></div>
    <p className="demo-disclosure">{tr('New illustrative templates based on documented scenarios. Not a live GPT run, certified procedure or participant-tested course.')}</p>
    <label htmlFor={`${id}-scenario`}>{tr('Scenario')}</label><select id={`${id}-scenario`} value={scenarioId} onChange={event => { setScenarioId(event.target.value as ScenarioId); setVisible(false); setTab(0); setChecked([]); }}>{scenarioIds.map(key => <option key={key} value={key}>{tr(scenarioLabels[key])}</option>)}</select>
    <p className="scenario-problem">{scenario.problem}</p>
    <div className="demo-actions"><button type="button" className="button button-primary" onClick={() => setVisible(true)}>{tr('Build training plan')}<ArrowRight size={16} /></button><button type="button" className="icon-button bordered-button" title={tr('Reset')} aria-label={tr('Reset')} onClick={() => { setScenarioId('opening'); setVisible(false); setTab(0); setChecked([]); }}><RotateCcw size={18} /></button></div>
    <p className="demo-status" role="status">{visible ? tr(scenarioLabels[scenarioId]) : ''}</p>
    {visible && <div className="training-result" data-testid="training-result"><div className="training-tabs" role="tablist" aria-label={tr('Training views')}>{trainingViews.map((view, index) => <button key={view} ref={element => { tabRefs.current[index] = element; }} type="button" role="tab" id={`${id}-tab-${index}`} aria-selected={tab === index} aria-controls={`${id}-panel`} tabIndex={tab === index ? 0 : -1} onClick={() => setTab(index)} onKeyDown={event => {
      let next = index;
      if (event.key === 'ArrowRight') next = (index + 1) % trainingViews.length;
      else if (event.key === 'ArrowLeft') next = (index + trainingViews.length - 1) % trainingViews.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = trainingViews.length - 1;
      else return;
      event.preventDefault(); setTab(next); tabRefs.current[next]?.focus();
    }}>{tr(view)}</button>)}</div><section id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${tab}`} tabIndex={0}><h3>{tr(activeView)}</h3>{activeView === 'Checklist' ? <><div className="training-checklist">{scenario.views.Checklist.map((item, index) => <label key={item}><input type="checkbox" checked={checked.includes(index)} onChange={event => setChecked(current => event.target.checked ? [...current, index] : current.filter(value => value !== index))} /><span>{item}</span></label>)}</div><p className="checklist-progress" role="status">{tr('Completed')}: {checked.length} / {scenario.views.Checklist.length}</p></> : <ol>{scenario.views[activeView].map(item => <li key={item}>{item}</li>)}</ol>}</section></div>}
    <a className="text-link" href={evidenceUrl('RISTO_LAB/TEST_REPORT_RISTO_LAB_2026_09_03.md')} target="_blank" rel="noreferrer">{tr('Scenario source')}<ArrowUpRight size={16} /></a>
  </div>;
}
