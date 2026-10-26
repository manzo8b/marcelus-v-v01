import Link from 'next/link';
import { ArrowLeft, BookOpenCheck, CircleAlert, Newspaper } from 'lucide-react';
import { type Locale, localizedPath } from '@/data/i18n';

const content = {
  en: {
    label: 'INDEPENDENT EDITORIAL PROJECT',
    status: 'In preparation',
    title: 'S-COMODO',
    intro: 'A separate editorial project about current events and their historical context. Its purpose is to make the editorial process — and the limits of AI assistance — visible.',
    blocks: [
      ['What it explores', 'Public events, historical comparisons and sources that help readers understand the context of a story.'],
      ['How AI is used', 'AI may assist with research organization and early drafts. Editorial direction, fact checking, corrections and the decision to publish require human review.'],
      ['Current status', 'Editorial drafts are being prepared. This page is an introduction, not evidence of published articles or a launched magazine.'],
    ],
    back: 'Back to projects',
    note: 'This project has its own editorial identity. Its articles, when approved and published, will not represent the position of MARCELUS AI LAB.',
  },
  it: {
    label: 'PROGETTO EDITORIALE INDIPENDENTE',
    status: 'In preparazione',
    title: 'S-COMODO',
    intro: 'Un progetto editoriale autonomo che mette in relazione fatti di oggi e contesto storico. Il suo obiettivo è rendere visibile il metodo di lavoro e dichiarare i limiti dell’uso dell’AI.',
    blocks: [
      ['Di cosa si occupa', 'Attualità, confronti storici e fonti utili per comprendere il contesto delle notizie.'],
      ['Come viene usata l’AI', 'L’AI può aiutare a organizzare la ricerca e preparare le bozze. La linea editoriale, la verifica dei fatti, le correzioni e la pubblicazione richiedono revisione umana.'],
      ['Stato attuale', 'Gli articoli sono in preparazione. Questa pagina presenta il progetto: non significa che il magazine sia già pubblicato.'],
    ],
    back: 'Torna ai progetti',
    note: 'S-COMODO mantiene una propria identità editoriale. Gli articoli, una volta verificati e pubblicati, non rappresentano automaticamente la posizione di MARCELUS AI LAB.',
  },
  es: {
    label: 'PROYECTO EDITORIAL INDEPENDIENTE',
    status: 'En preparación',
    title: 'S-COMODO',
    intro: 'Un proyecto editorial autónomo que relaciona hechos actuales con su contexto histórico. Busca hacer visible el método de trabajo y explicar los límites del uso de IA.',
    blocks: [
      ['De qué trata', 'Actualidad, comparaciones históricas y fuentes útiles para comprender el contexto de las noticias.'],
      ['Cómo se utiliza la IA', 'La IA puede ayudar a organizar la investigación y preparar borradores. La dirección editorial, la verificación, las correcciones y la publicación requieren revisión humana.'],
      ['Estado actual', 'Los artículos están en preparación. Esta página presenta el proyecto: no significa que la revista ya esté publicada.'],
    ],
    back: 'Volver a proyectos',
    note: 'S-COMODO mantiene una identidad editorial propia. Sus artículos, cuando sean revisados y publicados, no representan automáticamente la posición de MARCELUS AI LAB.',
  },
} as const;

export function SComodoOverview({ locale = 'en' }: { locale?: Locale }) {
  const c = content[locale];
  return <article className="project-detail" style={{maxWidth:'960px'}}>
    <Link href={localizedPath('/projects/',locale)} className="breadcrumb"><ArrowLeft size={16} aria-hidden="true"/>{c.back}</Link>
    <div className="project-title"><Newspaper size={25} aria-hidden="true"/><p className="eyebrow">{c.label}</p></div>
    <h1>{c.title}</h1>
    <p className="lead">{c.intro}</p>
    <p style={{display:'inline-flex',alignItems:'center',gap:'8px',marginTop:'22px',padding:'8px 15px',borderRadius:'999px',border:'1px solid var(--line)',fontSize:'13px'}}><CircleAlert size={16} aria-hidden="true"/>{c.status}</p>
    <div className="project-detail-grid" style={{marginTop:'42px'}}>
      <section>
        {c.blocks.map(([title,description])=><div className="project-band" key={title}><h2>{title}</h2><p style={{color:'var(--muted)',marginTop:'12px',lineHeight:1.7}}>{description}</p></div>)}
      </section>
      <aside className="scope-note" style={{alignSelf:'start',marginTop:0}}>
        <BookOpenCheck size={22} aria-hidden="true"/>
        <p style={{marginTop:'12px'}}>{c.note}</p>
      </aside>
    </div>
  </article>;
}