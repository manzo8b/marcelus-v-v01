import Link from 'next/link';
import { ArrowRight, ArrowUpRight, BookOpenCheck, CircleCheck, FileSearch, GraduationCap, Layers3, ScanSearch, Sparkles, Workflow } from 'lucide-react';
import { PublicCv } from '@/components/portfolio';
import { type Locale, localizedPath } from '@/data/i18n';
import { assetUrl, profile } from '@/data/portfolio';
import s from './home-v2.module.css';

// Home-only editorial copy: does not change documentary excerpts or the shared translation dictionary.
const words = {
  en: {
    label: 'INDEPENDENT DIGITAL LAB',
    first: 'Clear thinking.',
    second: 'Practical digital tools.',
    intro: 'I design ways to check AI-generated content, write more precise instructions and make professional training easier to organize.',
    honest: 'Each project explains what it does, what has been tested and what still needs work.',
    explore: 'Explore the projects',
    about: 'About my work',
    heroNote: 'Projects, evidence and a clear next step.',
    pictureLabel: 'FROM PROBLEM TO PROOF',
    visualSteps: ['A real problem', 'A practical method', 'A documented check'],
    visualBottom: 'Design with a purpose. Test with evidence.',
    featuredEyebrow: 'SELECTED WORK',
    featuredTitle: 'Three projects, three concrete needs.',
    featuredLead: 'Start with the problem each project addresses. Then explore the examples and documentation.',
    projectLink: 'Explore project',
    projects: [
      {id: 'verum', title: 'VERUM', tag: 'AI EVALUATION', desc: 'Two distinct activities: reviewing claims against sources, and checking AI outputs against supplied references. Results and limits are documented.', image: '/media/og-verum.png', alt: 'VERUM project visual'},
      {id: 'prometeus', title: 'Prometeus Marcelus', tag: 'INSTRUCTION DESIGN', desc: 'Turns a vague request into clear instructions, useful constraints and criteria for checking the answer.', image: '/media/og-prometeus.png', alt: 'Prometeus Marcelus project visual'},
      {id: 'risto-lab', title: 'RISTO-LAB', tag: 'HOSPITALITY TRAINING', desc: 'Organizes hospitality procedures and teaching materials. Its Instructor Hub is being tested locally and is not a public service.', image: '/media/og-risto-lab.png', alt: 'RISTO-LAB project visual'},
    ],
    inProgressEyebrow: 'IN DEVELOPMENT',
    inProgressTitle: 'Tools still being built.',
    inProgressLead: 'These are ongoing projects, not finished products or public services.',
    wipLabel: 'Work in progress',
    wip: [
      {name: 'OIKO', category: 'FAMILY ORGANIZATION', desc: 'A mobile-friendly tool for tracking household expenses, bills, subscriptions and deadlines. Testing and refinement are ongoing.'},
      {name: 'HACCP SMART', category: 'FOOD SAFETY RECORDS', desc: 'Digital registers and operational checks for food businesses. In development; not a substitute for a validated HACCP plan.'},
    ],
    editorialName: 'S-COMODO',
    editorialText: 'Independent editorial project, separate from the AI evaluation tools. Its publication status is not implied by this portfolio.',
    workEyebrow: 'DOCUMENTED WORK',
    workTitle: 'See the method, not just the result.',
    workLead: 'A case study shows the starting question, the method, the evidence and the remaining limits.',
    caseLink: 'Read case study',
    cases: [
      {title: 'When a statistic tells the wrong story', desc: 'VERUM · Renewable energy claims and their denominators.', path: '/cases/fact-check-renewables/'},
      {title: 'From a vague request to a testable brief', desc: 'Prometeus · Instructions and an evaluation rubric.', path: '/cases/prompt-design/'},
      {title: 'Instructions a new employee can follow', desc: 'RISTO-LAB · Language and practical training.', path: '/cases/training-language-quality/'},
    ],
    methodEyebrow: 'HOW I WORK',
    methodTitle: 'Less jargon. More usable decisions.',
    method: [
      {title: 'Understand', desc: 'Define the real need and its context.'},
      {title: 'Design', desc: 'Choose a clear structure and practical steps.'},
      {title: 'Check', desc: 'Test the result against explicit criteria.'},
      {title: 'Improve', desc: 'Document what changed and what still needs work.'},
    ],
    aboutEyebrow: 'ABOUT',
    aboutTitle: 'Experience in the field, applied to digital work.',
    aboutDesc: 'My background is in hospitality operations, team coordination and vocational training. I now apply that experience to independent AI evaluation, instruction design and digital tools.',
    aboutLink: 'Read my profile',
    contactTitle: 'Have a real problem to solve?',
    contactDesc: 'I am interested in work involving content quality, clear instructions, digital training and process improvement.',
    contactLink: 'Contact on LinkedIn',
    github: 'View the documented work on GitHub',
  },
  it: {
    label: 'LABORATORIO DIGITALE INDIPENDENTE',
    first: 'Idee chiare.',
    second: 'Strumenti concreti.',
    intro: 'Progetto metodi per valutare contenuti prodotti dall’AI, scrivere istruzioni più precise e organizzare meglio la formazione professionale.',
    honest: 'Ogni progetto spiega cosa fa, cosa è stato verificato e cosa resta da migliorare.',
    explore: 'Esplora i progetti',
    about: 'Il mio percorso',
    heroNote: 'Progetti, prove documentate e passi concreti.',
    pictureLabel: 'DAL PROBLEMA ALLA VERIFICA',
    visualSteps: ['Un problema reale', 'Un metodo pratico', 'Una verifica documentata'],
    visualBottom: 'Progettare con uno scopo. Verificare con le prove.',
    featuredEyebrow: 'PROGETTI PRINCIPALI',
    featuredTitle: 'Tre progetti, tre esigenze concrete.',
    featuredLead: 'Parti dal problema che ogni progetto affronta. Poi esplora esempi e documentazione.',
    projectLink: 'Scopri il progetto',
    projects: [
      {id: 'verum', title: 'VERUM', tag: 'VALUTAZIONE AI', desc: 'Due attività distinte: verificare affermazioni rispetto alle fonti e valutare risposte AI rispetto a riferimenti forniti. Risultati e limiti sono documentati.', image: '/media/og-verum.png', alt: 'Grafica del progetto VERUM'},
      {id: 'prometeus', title: 'Prometeus Marcelus', tag: 'PROGETTAZIONE DI ISTRUZIONI', desc: 'Trasforma richieste vaghe in istruzioni chiare, vincoli utili e criteri per controllare le risposte.', image: '/media/og-prometeus.png', alt: 'Grafica del progetto Prometeus Marcelus'},
      {id: 'risto-lab', title: 'RISTO-LAB', tag: 'FORMAZIONE NELLA RISTORAZIONE', desc: 'Organizza procedure e materiali per insegnare il lavoro nella ristorazione. L’area docente è in prova locale, non è un servizio pubblico.', image: '/media/og-risto-lab.png', alt: 'Grafica del progetto RISTO-LAB'},
    ],
    inProgressEyebrow: 'IN SVILUPPO',
    inProgressTitle: 'Strumenti ancora in lavorazione.',
    inProgressLead: 'Sono progetti in corso, non prodotti conclusi né servizi già disponibili al pubblico.',
    wipLabel: 'Work in progress',
    wip: [
      {name: 'OIKO', category: 'ORGANIZZAZIONE FAMILIARE', desc: 'Una micro-app per tenere sotto controllo spese domestiche, bollette, abbonamenti e scadenze. Test e rifiniture sono ancora in corso.'},
      {name: 'HACCP SMART', category: 'REGISTRI E CONTROLLI ALIMENTARI', desc: 'Registri digitali e verifiche operative per attività alimentari. In sviluppo: non sostituisce un piano HACCP validato.'},
    ],
    editorialName: 'S-COMODO',
    editorialText: 'Progetto editoriale indipendente, distinto dagli strumenti di valutazione AI. La presenza qui non implica che sia già pubblicato.',
    workEyebrow: 'CASI DOCUMENTATI',
    workTitle: 'Non solo il risultato: anche il metodo.',
    workLead: 'Ogni caso presenta la domanda iniziale, il procedimento, le prove disponibili e i limiti ancora aperti.',
    caseLink: 'Leggi il caso',
    cases: [
      {title: 'Quando una statistica cambia significato', desc: 'VERUM · Affermazioni sulle rinnovabili e dati a confronto.', path: '/cases/fact-check-renewables/'},
      {title: 'Da una richiesta vaga a criteri verificabili', desc: 'Prometeus · Istruzioni e rubrica di valutazione.', path: '/cases/prompt-design/'},
      {title: 'Istruzioni chiare per chi inizia a lavorare', desc: 'RISTO-LAB · Linguaggio e formazione pratica.', path: '/cases/training-language-quality/'},
    ],
    methodEyebrow: 'COME LAVORO',
    methodTitle: 'Meno gergo. Più decisioni utili.',
    method: [
      {title: 'Capire', desc: 'Identifico il bisogno concreto e il contesto.'},
      {title: 'Progettare', desc: 'Definisco una struttura chiara e passi pratici.'},
      {title: 'Verificare', desc: 'Controllo il risultato con criteri espliciti.'},
      {title: 'Migliorare', desc: 'Documento correzioni e verifiche ancora necessarie.'},
    ],
    aboutEyebrow: 'CHI SONO',
    aboutTitle: 'Esperienza sul campo, applicata al digitale.',
    aboutDesc: 'Provengo dalla ristorazione, dal coordinamento dei team e dalla formazione professionale. Applico questa esperienza a progetti indipendenti di valutazione AI, istruzioni e strumenti digitali.',
    aboutLink: 'Leggi il mio profilo',
    contactTitle: 'Hai un problema concreto da risolvere?',
    contactDesc: 'Mi interessano collaborazioni su qualità dei contenuti, istruzioni chiare, formazione digitale e miglioramento dei processi.',
    contactLink: 'Contattami su LinkedIn',
    github: 'Esplora il lavoro documentato su GitHub',
  },
  es: {
    label: 'LABORATORIO DIGITAL INDEPENDIENTE',
    first: 'Ideas claras.',
    second: 'Herramientas útiles.',
    intro: 'Diseño métodos para evaluar contenidos de IA, escribir instrucciones más precisas y organizar mejor la formación profesional.',
    honest: 'Cada proyecto explica qué hace, qué se ha comprobado y qué falta por mejorar.',
    explore: 'Explorar proyectos',
    about: 'Mi trayectoria',
    heroNote: 'Proyectos, evidencia documentada y pasos concretos.',
    pictureLabel: 'DEL PROBLEMA A LA VERIFICACIÓN',
    visualSteps: ['Un problema real', 'Un método práctico', 'Una verificación documentada'],
    visualBottom: 'Diseñar con propósito. Comprobar con evidencias.',
    featuredEyebrow: 'PROYECTOS PRINCIPALES',
    featuredTitle: 'Tres proyectos, tres necesidades concretas.',
    featuredLead: 'Empieza por el problema que aborda cada proyecto. Después consulta ejemplos y documentación.',
    projectLink: 'Ver proyecto',
    projects: [
      {id: 'verum', title: 'VERUM', tag: 'EVALUACIÓN DE IA', desc: 'Dos tareas distintas: contrastar afirmaciones con fuentes y revisar respuestas de IA frente a referencias proporcionadas. Se documentan los resultados y sus límites.', image: '/media/og-verum.png', alt: 'Visual del proyecto VERUM'},
      {id: 'prometeus', title: 'Prometeus Marcelus', tag: 'DISEÑO DE INSTRUCCIONES', desc: 'Convierte peticiones vagas en instrucciones claras, restricciones útiles y criterios para comprobar las respuestas.', image: '/media/og-prometeus.png', alt: 'Visual del proyecto Prometeus Marcelus'},
      {id: 'risto-lab', title: 'RISTO-LAB', tag: 'FORMACIÓN EN HOSTELERÍA', desc: 'Organiza procedimientos y materiales para enseñar en hostelería. El espacio docente está en pruebas locales y no es un servicio público.', image: '/media/og-risto-lab.png', alt: 'Visual del proyecto RISTO-LAB'},
    ],
    inProgressEyebrow: 'EN DESARROLLO',
    inProgressTitle: 'Herramientas todavía en construcción.',
    inProgressLead: 'Son proyectos en curso, no productos terminados ni servicios disponibles públicamente.',
    wipLabel: 'Work in progress',
    wip: [
      {name: 'OIKO', category: 'ORGANIZACIÓN FAMILIAR', desc: 'Una microaplicación para gastos del hogar, facturas, suscripciones y vencimientos. Sigue en pruebas y ajustes.'},
      {name: 'HACCP SMART', category: 'REGISTROS DE SEGURIDAD ALIMENTARIA', desc: 'Registros digitales y controles operativos para negocios alimentarios. En desarrollo: no sustituye un plan HACCP validado.'},
    ],
    editorialName: 'S-COMODO',
    editorialText: 'Proyecto editorial independiente, distinto de las herramientas de evaluación de IA. Su inclusión aquí no implica que ya esté publicado.',
    workEyebrow: 'CASOS DOCUMENTADOS',
    workTitle: 'No solo el resultado: también el método.',
    workLead: 'Cada caso presenta la pregunta inicial, el proceso, la evidencia disponible y los límites pendientes.',
    caseLink: 'Leer caso',
    cases: [
      {title: 'Cuando una estadística cambia de significado', desc: 'VERUM · Afirmaciones sobre renovables y comparaciones de datos.', path: '/cases/fact-check-renewables/'},
      {title: 'De una petición vaga a criterios verificables', desc: 'Prometeus · Instrucciones y rúbrica de evaluación.', path: '/cases/prompt-design/'},
      {title: 'Instrucciones claras para quien empieza', desc: 'RISTO-LAB · Lenguaje y formación práctica.', path: '/cases/training-language-quality/'},
    ],
    methodEyebrow: 'CÓMO TRABAJO',
    methodTitle: 'Menos jerga. Más decisiones útiles.',
    method: [
      {title: 'Entender', desc: 'Identifico la necesidad y su contexto.'},
      {title: 'Diseñar', desc: 'Defino una estructura clara y pasos prácticos.'},
      {title: 'Comprobar', desc: 'Reviso el resultado con criterios explícitos.'},
      {title: 'Mejorar', desc: 'Documento cambios y verificaciones pendientes.'},
    ],
    aboutEyebrow: 'SOBRE MÍ',
    aboutTitle: 'Experiencia práctica aplicada a lo digital.',
    aboutDesc: 'Mi experiencia viene de la hostelería, la coordinación de equipos y la formación profesional. Hoy la aplico a proyectos independientes de evaluación de IA, diseño de instrucciones y herramientas digitales.',
    aboutLink: 'Conocer mi perfil',
    contactTitle: '¿Tienes un problema concreto que resolver?',
    contactDesc: 'Me interesan colaboraciones en calidad de contenidos, instrucciones claras, formación digital y mejora de procesos.',
    contactLink: 'Contactar por LinkedIn',
    github: 'Ver el trabajo documentado en GitHub',
  },
} as const;

const projectMarks = { verum: ScanSearch, prometeus: Workflow, 'risto-lab': GraduationCap };

export function HomeV2({ locale = 'en' }: { locale?: Locale }) {
  const c = words[locale];
  return <div className={s.home}>
    <section className={s.hero} aria-labelledby="home-v2-heading">
      <div className={s.heroText}>
        <p className={s.eyebrow}><Sparkles size={15} aria-hidden="true" /> {c.label}</p>
        <h1 id="home-v2-heading">{c.first}<br /><span>{c.second}</span></h1>
        <p className={s.intro}>{c.intro}</p>
        <p className={s.honest}>{c.honest}</p>
        <div className={s.heroActions}>
          <a className={s.primaryAction} href="#projects-v2">{c.explore}<ArrowRight size={18} aria-hidden="true" /></a>
          <Link className={s.secondaryAction} href={localizedPath('/about/', locale)}>{c.about}<ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
        <p className={s.heroNote}><CircleCheck size={15} aria-hidden="true" /> {c.heroNote}</p>
      </div>
      <div className={s.heroVisual} aria-hidden="true">
        <div className={s.orbitOne}></div><div className={s.orbitTwo}></div>
        <div className={s.visualPanel}>
          <div className={s.visualHead}><span className={s.visualSignal}></span><span>{c.pictureLabel}</span><span className={s.visualDots}>•••</span></div>
          {c.visualSteps.map((step,index)=><div className={s.visualRow} key={index}><span className={s.visualIndex}>0{index+1}</span><span>{step}</span>{index===2?<CircleCheck size={19}/>:<span className={s.visualBar}></span>}</div>)}
          <div className={s.visualBottom}>{c.visualBottom}</div>
        </div>
      </div>
    </section>

    <section id="projects-v2" className={s.section} aria-labelledby="home-v2-projects">
      <div className={s.sectionHeading}><div><p className={s.eyebrow}>{c.featuredEyebrow}</p><h2 id="home-v2-projects">{c.featuredTitle}</h2><p className={s.sectionLead}>{c.featuredLead}</p></div></div>
      <div className={s.featuredGrid}>{c.projects.map(card=>{
        const Mark=projectMarks[card.id];
        return <Link key={card.id} className={s.featuredCard} href={localizedPath('/projects/'+card.id+'/',locale)}>
          <div className={s.featuredImage}><img src={assetUrl(card.image)} alt={card.alt} width={1200} height={630} loading="lazy" decoding="async" /></div>
          <div className={s.featuredBody}><p className={s.cardTag}><Mark size={16} aria-hidden="true" /> {card.tag}</p><h3>{card.title}</h3><p className={s.cardDescription}>{card.desc}</p><span className={s.cardAction}>{c.projectLink}<ArrowUpRight size={17} aria-hidden="true" /></span></div>
        </Link>;
      })}</div>
    </section>

    <section className={s.section} aria-labelledby="home-v2-wip">
      <div className={s.sectionHeading}><div><p className={s.eyebrow}>{c.inProgressEyebrow}</p><h2 id="home-v2-wip">{c.inProgressTitle}</h2><p className={s.sectionLead}>{c.inProgressLead}</p></div></div>
      <div className={s.wipGrid}>{c.wip.map(item=><article key={item.name} className={s.wipCard}><div className={s.wipTop}><span className={s.wipBadge}><Layers3 size={14} aria-hidden="true" /> {c.wipLabel}</span><span className={s.wipIcon}><FileSearch size={24} aria-hidden="true" /></span></div><p className={s.cardTag}>{item.category}</p><h3>{item.name}</h3><p className={s.cardDescription}>{item.desc}</p></article>)}</div>
      <p className={s.editorialNote}><BookOpenCheck size={17} aria-hidden="true" /> <strong>{c.editorialName}</strong> — {c.editorialText}</p>
    </section>

    <section className={s.section} aria-labelledby="home-v2-evidence">
      <div className={s.sectionHeading}><div><p className={s.eyebrow}>{c.workEyebrow}</p><h2 id="home-v2-evidence">{c.workTitle}</h2><p className={s.sectionLead}>{c.workLead}</p></div></div>
      <div className={s.caseGrid}>{c.cases.map((item,index)=><Link key={item.path} className={s.caseCard} href={localizedPath(item.path,locale)}><span className={s.caseNumber}>0{index+1}</span><h3>{item.title}</h3><p>{item.desc}</p><span className={s.caseLink}>{c.caseLink}<ArrowUpRight size={17} aria-hidden="true"/></span></Link>)}</div>
    </section>

    <section className={s.methodSection} aria-labelledby="home-v2-method">
      <div className={s.sectionHeading}><div><p className={s.eyebrow}>{c.methodEyebrow}</p><h2 id="home-v2-method">{c.methodTitle}</h2></div></div>
      <div className={s.methodGrid}>{c.method.map((step,index)=><div key={step.title} className={s.methodStep}><span>0{index+1}</span><h3>{step.title}</h3><p>{step.desc}</p></div>)}</div>
    </section>

    <section className={s.aboutBand} aria-labelledby="home-v2-about"><div><p className={s.eyebrow}>{c.aboutEyebrow}</p><h2 id="home-v2-about">{c.aboutTitle}</h2><p>{c.aboutDesc}</p></div><div className={s.aboutLinks}><Link href={localizedPath('/about/',locale)} className={s.secondaryAction}>{c.aboutLink}<ArrowUpRight size={16} aria-hidden="true"/></Link><PublicCv locale={locale}/></div></section>

    <section className={s.contactBand} aria-labelledby="home-v2-contact"><div><h2 id="home-v2-contact">{c.contactTitle}</h2><p>{c.contactDesc}</p></div><div className={s.contactActions}><a className={s.contactButton} href={profile.linkedin} target="_blank" rel="noreferrer">{c.contactLink}<ArrowUpRight size={18} aria-hidden="true"/></a><a href="https://github.com/manzo8b/marcelus-v-v01" target="_blank" rel="noreferrer" className={s.githubLink}>{c.github}<ArrowUpRight size={15} aria-hidden="true"/></a></div></section>
  </div>;
}
