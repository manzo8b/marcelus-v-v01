import Link from 'next/link';
import { ArrowLeft, Download, FileSpreadsheet, FileText, ShieldCheck, Workflow } from 'lucide-react';
import { assetUrl } from '@/data/portfolio';
import { type Locale, localizedPath } from '@/data/i18n';
import s from './free-resources.module.css';

const copy = {
  en: {
    eyebrow: 'MARCELUS AI LAB · OPEN RESOURCES',
    title: 'Free resources you can use',
    intro: 'Three practical templates for checking an AI response, writing a clearer request and organizing a 60-minute lesson. Download them without registration and adapt them to your work.',
    notice: 'Original, editable educational templates. They are not legal, medical, safety or independent factual certification. Verify important claims with current sources.',
    action: 'Download free',
    available: 'Direct download · No account required',
    version: 'Version 1.0',
    back: 'Back to the projects',
    data: [
      ['Check an AI-generated answer', 'A simple checklist to compare what the AI wrote with your instructions and reference material. Includes an evidence record and review decision.', 'Text document (.txt)', 'ai-review-checklist'],
      ['Write clearer AI instructions', 'A worksheet for goal, audience, sources, constraints and acceptance criteria, with an example prompt to adapt.', 'Text document (.txt)', 'prompt-design-worksheet'],
      ['Plan a 60-minute lesson', 'An editable timetable with sequence, objectives, planned minutes and space for your teaching notes.', 'Spreadsheet (.csv)', 'lesson-plan-60-min']
    ]
  },
  it: {
    eyebrow: 'MARCELUS AI LAB · RISORSE APERTE',
    title: 'Risorse gratuite, subito utilizzabili',
    intro: 'Tre strumenti pratici per controllare una risposta AI, scrivere richieste più chiare e organizzare una lezione di 60 minuti. Li scarichi senza registrarti e puoi adattarli al tuo lavoro.',
    notice: 'Modelli originali e modificabili per uso pratico e formativo. Non sono certificazioni legali, sanitarie, di sicurezza o di verità fattuale: verifica sempre le informazioni importanti con fonti aggiornate.',
    action: 'Scarica gratis',
    available: 'Download diretto · Nessun account',
    version: 'Versione 1.0',
    back: 'Torna ai progetti',
    data: [
      ['Controlla una risposta generata dall’AI', 'Una checklist per confrontare la risposta con istruzioni e documenti disponibili, registrando evidenze e correzioni.', 'Documento di testo (.txt)', 'ai-review-checklist'],
      ['Scrivi istruzioni AI più chiare', 'Una scheda per definire obiettivo, pubblico, fonti, vincoli e criteri di accettazione, con un prompt da personalizzare.', 'Documento di testo (.txt)', 'prompt-design-worksheet'],
      ['Prepara una lezione di 60 minuti', 'Un piano modificabile con sequenza, obiettivi, tempi previsti e spazio per le note del docente.', 'Foglio di calcolo (.csv)', 'lesson-plan-60-min']
    ]
  },
  es: {
    eyebrow: 'MARCELUS AI LAB · RECURSOS ABIERTOS',
    title: 'Recursos gratuitos para empezar',
    intro: 'Tres plantillas prácticas para revisar una respuesta de IA, escribir instrucciones más claras y organizar una clase de 60 minutos. Descárgalas sin registro y adáptalas a tu trabajo.',
    notice: 'Plantillas originales y editables para uso práctico y formativo. No son certificaciones legales, sanitarias, de seguridad ni de veracidad factual: comprueba lo importante con fuentes actuales.',
    action: 'Descargar gratis',
    available: 'Descarga directa · Sin registro',
    version: 'Versión 1.0',
    back: 'Volver a los proyectos',
    data: [
      ['Revisa una respuesta generada por IA', 'Una lista para comparar la respuesta con las instrucciones y referencias disponibles, y documentar correcciones.', 'Documento de texto (.txt)', 'ai-review-checklist'],
      ['Escribe instrucciones de IA más claras', 'Una ficha para definir objetivos, público, fuentes, restricciones y criterios de aceptación con un prompt adaptable.', 'Documento de texto (.txt)', 'prompt-design-worksheet'],
      ['Organiza una clase de 60 minutos', 'Un plan editable con fases, objetivos, minutos previstos y espacio para notas docentes.', 'Hoja de cálculo (.csv)', 'lesson-plan-60-min']
    ]
  }
} as const;

export function FreeResources({ locale = 'en' }: { locale?: Locale }) {
  const c = copy[locale];
  return <article className={s.root}>
    <div className={s.hero}>
      <p className={s.eyebrow}><ShieldCheck size={17} aria-hidden="true" /> {c.eyebrow}</p>
      <h1>{c.title}</h1>
      <p className={s.lead}>{c.intro}</p>
      <p className={s.available}>{c.available}</p>
    </div>
    <section className={s.grid} aria-label={c.title}>
      {c.data.map(([title, desc, format, slug], index) => {
        const ext = index === 2 ? 'csv' : 'txt';
        const filename = `${slug}-${locale}.${ext}`;
        const Icon = index === 0 ? ShieldCheck : index === 1 ? Workflow : FileSpreadsheet;
        return <article className={s.card} key={slug}>
          <span className={s.icon}><Icon size={23} aria-hidden="true"/></span>
          <span className={s.count}>0{index + 1} · {c.version}</span>
          <h2>{title}</h2>
          <p>{desc}</p>
          <span className={s.format}><FileText size={14} aria-hidden="true" /> {format}</span>
          <a href={assetUrl('/resources/' + filename)} download={filename} className={s.download}><Download size={17} aria-hidden="true"/>{c.action}</a>
        </article>;
      })}
    </section>
    <div className={s.notice}><ShieldCheck size={20} aria-hidden="true"/><p>{c.notice}</p></div>
    <Link href={localizedPath('/projects/',locale)} className={s.back}><ArrowLeft size={16} aria-hidden="true"/>{c.back}</Link>
  </article>;
}
