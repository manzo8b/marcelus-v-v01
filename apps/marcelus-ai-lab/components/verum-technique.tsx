'use client';

import { useId, useRef, useState } from 'react';
import { ArrowUpRight, BookOpen, Languages, ScanLine } from 'lucide-react';
import type { Locale } from '@/data/i18n';
import { evidenceUrl } from '@/data/portfolio';
import { techniqueCopy as copy, techniqueExamples, techniqueSource } from '@/data/verum-technique';

export function VerumTechnique({ locale }: { locale: Locale }) {
  const [selected, setSelected] = useState(0);
  const id = useId();
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  return <section className="project-band verum-technique" id="double-layer" aria-labelledby={`${id}-title`}>
    <p className="eyebrow">{copy.label[locale]}</p>
    <h2 id={`${id}-title`}>{copy.title[locale]}</h2>
    <p className="technique-intro">{copy.intro[locale]}</p>
    <p className="technique-principle">{copy.principle[locale]}</p>
    <div className="technique-tabs" role="tablist" aria-label={copy.tabs[locale]}>{techniqueExamples.map((example, index) => <button key={example.id} ref={element => { buttons.current[index] = element; }} id={`${id}-tab-${index}`} type="button" role="tab" aria-selected={index === selected} aria-controls={`${id}-panel-${index}`} tabIndex={index === selected ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={event => {
      const next = event.key === 'ArrowRight' ? (index + 1) % techniqueExamples.length : event.key === 'ArrowLeft' ? (index + techniqueExamples.length - 1) % techniqueExamples.length : event.key === 'Home' ? 0 : event.key === 'End' ? techniqueExamples.length - 1 : null;
      if (next !== null) { event.preventDefault(); setSelected(next); buttons.current[next]?.focus(); }
    }}>{example.id}</button>)}</div>
    <div className="technique-panels">{techniqueExamples.map((example, index) => <div className="technique-panel" key={example.id} id={`${id}-panel-${index}`} role="tabpanel" aria-labelledby={`${id}-tab-${index}`} tabIndex={0} aria-hidden={selected !== index} inert={selected !== index}>
      <p className="eyebrow">{copy.source[locale]}</p>
      <blockquote className="technique-source" lang="en">{example.source}</blockquote>
      <div className="technique-layers">
        <section><h3><ScanLine size={19} aria-hidden="true" />{copy.evidence[locale]}</h3><p>{example.claim[locale]}</p><h4>{copy.needed[locale]}</h4><p>{example.needed[locale]}</p></section>
        <section><h3><Languages size={19} aria-hidden="true" />{copy.language[locale]}</h3><p>{example.framing[locale]}</p></section>
      </div>
      <div className="technique-rewrite"><div><h3>{copy.rewrite[locale]}</h3><blockquote lang="en">{example.rewrite}</blockquote></div><div><h3>{copy.fidelity[locale]}</h3><p>{example.fidelity[locale]}</p></div></div>
      <div className="technique-correction"><h3>{copy.correction[locale]}</h3><p>{example.correction[locale]}</p></div>
    </div>)}</div>
    <details className="technique-scope"><summary>{copy.scope[locale]}</summary><p>{copy.task[locale]}</p></details>
    <div className="technique-limits"><h3>{copy.limitsTitle[locale]}</h3><p>{copy.limits[locale]}</p><a className="text-link" href={evidenceUrl(techniqueSource, 'main')} target="_blank" rel="noreferrer"><BookOpen size={16} aria-hidden="true" />{copy.read[locale]}<ArrowUpRight size={15} aria-hidden="true" /></a></div>
  </section>;
}
