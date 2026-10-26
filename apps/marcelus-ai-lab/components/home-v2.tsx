import Link from 'next/link';
import { ArrowRight, ArrowUpRight, BookOpenCheck, CircleCheck, FileSearch, GraduationCap, Layers3, Newspaper, ScanSearch, Sparkles, Workflow } from 'lucide-react';
import { PublicCv } from '@/components/portfolio';
import { type Locale, localizedPath } from '@/data/i18n';
import { profile } from '@/data/portfolio';
import s from './home-v2.module.css';

// Home-only editorial copy: does not change documentary excerpts or the shared translation dictionary.
const words = {
  en: {
    label: 'INDEPENDENT DIGITAL LAB',
    first: 'Clear ideas.',
    second: 'Useful tools.',
    intro: 'I design tools to check information, give AI clearer instructions and organize practical training and work.',
    honest: 'Each project explains what it does, what has been tested and what still needs work.',
    explore: 'Explore the projects',
    about: 'About my work',
    heroNote: 'Personal projects, documented examples and limits made clear.',
    pictureLabel: 'FROM CLAIM TO CHECK',
    visualSteps: [{ title: 'Problem', detail: 'The AI says: “Children enter free this month.”' }, { title: 'Reference', detail: 'The supplied reference says: “Children’s admission: $25.”' }, { title: 'Check', detail: 'FAIL: contradiction and invented promotion.' }],
    visualBottom: 'Synthetic example · VERUM Output Reviewer · checks supplied references, not the live web.',
    featuredEyebrow: 'SELECTED WORK',
    featuredTitle: 'Four projects. Four concrete needs.',
    featuredLead: 'Understand what each project helps with, why it matters and what remains to be tested.',
    projectLink: 'Explore project',
    reasonLabel: 'Why it matters', limitLabel: 'Status / limit', skillLink: 'Discover skills on Agensi',
    projects: [
      {id: 'verum', title: 'VERUM', tag: 'AI EVALUATION', headline: 'Separate what is claimed from what can be proved.', desc: 'Checks statements against sources and, separately, AI responses against references you supply.', reason: 'Fluent writing can sound true without reliable evidence.', limit: 'The Output Reviewer does not search the web; it needs supplied references.'},
      {id: 'prometeus', title: 'Prometeus Marcelus', tag: 'INSTRUCTION DESIGN', headline: 'Turn a vague request into instructions that work.', desc: 'Makes requirements, constraints and review criteria explicit.', reason: 'Clearer instructions reduce ambiguity and make outputs easier to check.', limit: 'Documented examples do not establish universal AI performance.'},
      {id: 'risto-lab', title: 'RISTO-LAB', tag: 'HOSPITALITY TRAINING', headline: 'Training made practical and repeatable.', desc: 'Organizes service procedures and teaching materials with clear checks.', reason: 'New staff need instructions they can understand and reuse.', limit: 'The Instructor Hub is a local prototype, not a public service.'},
      {id: 's-comodo', title: 'S-COMODO', tag: 'INDEPENDENT EDITORIAL', headline: 'Current facts, historical context and clear editorial judgment.', desc: 'An independent editorial project with AI-assisted drafts, sources and human editorial review.', reason: 'Show how AI can assist writing without hiding the editorial method.', limit: 'In preparation; editorial material is not presented as already published.'},
    ],
    skillEyebrow: 'AI SKILLS', skillTitle: 'Specialized instructions for specific tasks.', skillIntro: 'A Skill is a set of instructions that helps an AI assistant perform a defined task consistently. VERUM Output Reviewer checks a response against the instructions and references you supply.', skillAvailability: 'VERUM Output Reviewer is currently available free on Agensi. It does not browse the web or independently establish external facts.', skillCreator: 'See my skills on Agensi', skillTry: 'Try VERUM Output Reviewer (free)', skillCustom: 'Discuss a custom Skill', skillFooter: 'Other paid or custom skills are possibilities, not products already listed for sale.',
        inProgressEyebrow: 'IN DEVELOPMENT',
    inProgressTitle: 'Tools still in development.',
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
    intro: 'Progetto strumenti per verificare informazioni, migliorare le istruzioni date all’intelligenza artificiale e organizzare meglio il lavoro e la formazione.',
    honest: 'Ogni progetto nasce da un problema concreto: mostro come lo affronto, cosa ho verificato e cosa resta da migliorare.',
    explore: 'Esplora i progetti',
    about: 'Il mio percorso',
    heroNote: 'Progetti, prove documentate e passi concreti.',
    pictureLabel: 'DAL PROBLEMA ALLA VERIFICA',
    visualSteps: [{ title: 'Problema', detail: 'L’AI dice: «I bambini entrano gratis questo mese».' }, { title: 'Riferimento', detail: 'Il testo fornito indica: «Ingresso bambini: 25 $».' }, { title: 'Verifica', detail: 'FAIL: contraddizione e promozione inventata.' }],
    visualBottom: 'Esempio sintetico · VERUM Output Reviewer · confronta i riferimenti forniti, non cerca sul web.',
    featuredEyebrow: 'PROGETTI PRINCIPALI',
    featuredTitle: 'Quattro progetti, quattro esigenze concrete.',
    featuredLead: 'Scopri cosa fa ogni progetto, perché serve e quali verifiche sono ancora necessarie.',
    projectLink: 'Scopri il progetto',
    reasonLabel: 'Perché serve', limitLabel: 'Stato / limite', skillLink: 'Scopri le Skill su Agensi',
    projects: [
      {id: 'verum', title: 'VERUM', tag: 'VALUTAZIONE AI', headline: 'Separa ciò che si afferma da ciò che si può provare.', desc: 'Distingue affermazioni, opinioni e prove. Valuta anche risposte AI rispetto ai riferimenti forniti.', reason: 'Una frase ben scritta può sembrare vera senza esserlo.', limit: 'Output Reviewer non cerca sul web: richiede riferimenti da confrontare.'},
      {id: 'prometeus', title: 'Prometeus Marcelus', tag: 'PROGETTAZIONE DI ISTRUZIONI', headline: 'Da una richiesta vaga a istruzioni che funzionano.', desc: 'Rende più chiari requisiti, vincoli e criteri per controllare una risposta.', reason: 'Una richiesta precisa riduce l’ambiguità e rende i risultati verificabili.', limit: 'Gli esempi documentati non dimostrano prestazioni universali dell’AI.'},
      {id: 'risto-lab', title: 'RISTO-LAB', tag: 'FORMAZIONE NELLA RISTORAZIONE', headline: 'Il lavoro di sala e cucina si impara con procedure chiare.', desc: 'Organizza materiali didattici e procedure da applicare e verificare.', reason: 'Chi inizia a lavorare ha bisogno di istruzioni comprensibili e ripetibili.', limit: 'L’area docente è in prova locale, non è un servizio pubblico.'},
      {id: 's-comodo', title: 'S-COMODO', tag: 'EDITORIA INDIPENDENTE', headline: 'Fatti di oggi, contesto storico, scelte editoriali esplicite.', desc: 'Progetto editoriale indipendente con bozze assistite dall’AI, fonti e revisione umana.', reason: 'Mostra come usare l’AI per scrivere senza nascondere il metodo.', limit: 'In preparazione: non si presenta come già pubblicato.'},
    ],
    skillEyebrow: 'SKILL PER L’AI', skillTitle: 'Istruzioni specializzate, pronte da usare.', skillIntro: 'Una Skill è un insieme di istruzioni che aiuta un assistente AI a svolgere bene un compito preciso. VERUM Output Reviewer confronta una risposta con le istruzioni e i riferimenti forniti.', skillAvailability: 'VERUM Output Reviewer è disponibile gratuitamente su Agensi. Non cerca sul web e non verifica fatti esterni senza fonti fornite.', skillCreator: 'Vedi le mie Skill su Agensi', skillTry: 'Prova VERUM Output Reviewer (gratis)', skillCustom: 'Chiedi una Skill su misura', skillFooter: 'Altre Skill a pagamento o personalizzate sono possibilità future, non prodotti già pubblicati.',
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
    intro: 'Diseño herramientas para verificar información, mejorar las instrucciones dadas a la inteligencia artificial y organizar mejor el trabajo y la formación.',
    honest: 'Cada proyecto nace de un problema concreto: explico cómo lo abordo, qué he verificado y qué falta por mejorar.',
    explore: 'Explorar proyectos',
    about: 'Mi trayectoria',
    heroNote: 'Proyectos, evidencia documentada y pasos concretos.',
    pictureLabel: 'DEL PROBLEMA A LA VERIFICACIÓN',
    visualSteps: [{ title: 'Problema', detail: 'La IA afirma: «Los niños entran gratis este mes».' }, { title: 'Referencia', detail: 'El texto aportado dice: «Entrada infantil: 25 $».' }, { title: 'Verificación', detail: 'FAIL: contradicción y promoción inventada.' }],
    visualBottom: 'Ejemplo sintético · VERUM Output Reviewer · compara referencias aportadas; no busca en la web.',
    featuredEyebrow: 'PROYECTOS PRINCIPALES',
    featuredTitle: 'Cuatro proyectos, cuatro necesidades concretas.',
    featuredLead: 'Descubre qué hace cada proyecto, para qué sirve y qué verificaciones quedan pendientes.',
    projectLink: 'Ver proyecto',
    reasonLabel: 'Por qué importa', limitLabel: 'Estado / límite', skillLink: 'Descubre las Skills en Agensi',
    projects: [
      {id: 'verum', title: 'VERUM', tag: 'EVALUACIÓN DE IA', headline: 'Distingue lo que se afirma de lo que se puede demostrar.', desc: 'Separa afirmaciones, opiniones y evidencias. También revisa respuestas de IA frente a referencias aportadas.', reason: 'Una frase convincente puede no ser cierta.', limit: 'Output Reviewer no busca en la web; compara referencias proporcionadas.'},
      {id: 'prometeus', title: 'Prometeus Marcelus', tag: 'DISEÑO DE INSTRUCCIONES', headline: 'De una petición vaga a instrucciones que funcionan.', desc: 'Define requisitos, restricciones y criterios claros para comprobar respuestas.', reason: 'Una petición precisa reduce ambigüedades y facilita verificar resultados.', limit: 'Los ejemplos documentados no demuestran rendimiento universal de la IA.'},
      {id: 'risto-lab', title: 'RISTO-LAB', tag: 'FORMACIÓN EN HOSTELERÍA', headline: 'Aprender sala y cocina con procedimientos claros.', desc: 'Organiza materiales de formación y procedimientos aplicables y verificables.', reason: 'Quien empieza necesita instrucciones claras y repetibles.', limit: 'El espacio docente está en pruebas locales; no es un servicio público.'},
      {id: 's-comodo', title: 'S-COMODO', tag: 'EDITORIAL INDEPENDIENTE', headline: 'Hechos actuales, contexto histórico y criterio editorial.', desc: 'Proyecto editorial independiente con borradores asistidos por IA, fuentes y revisión humana.', reason: 'Permite usar IA para escribir sin ocultar el método.', limit: 'En preparación: todavía no se presenta como publicado.'},
    ],
    skillEyebrow: 'SKILLS PARA IA', skillTitle: 'Instrucciones especializadas, listas para usar.', skillIntro: 'Una Skill es un conjunto de instrucciones que ayuda a un asistente de IA a realizar una tarea concreta. VERUM Output Reviewer compara una respuesta con las instrucciones y referencias que proporcionas.', skillAvailability: 'VERUM Output Reviewer está disponible gratis en Agensi. No navega por la web ni comprueba hechos externos sin referencias aportadas.', skillCreator: 'Ver mis Skills en Agensi', skillTry: 'Probar VERUM Output Reviewer (gratis)', skillCustom: 'Consultar una Skill a medida', skillFooter: 'Otras Skills de pago o personalizadas son posibles proyectos futuros, no productos ya publicados.',
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

const projectMarks = { verum: ScanSearch, prometeus: Workflow, 'risto-lab': GraduationCap, 's-comodo': Newspaper };

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
          <a className={s.secondaryAction} href="https://agensi.io/creators/marcelo-javier-fernandez-caballero" target="_blank" rel="noreferrer">{c.skillLink}<ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
        <p className={s.heroNote}><CircleCheck size={15} aria-hidden="true" /> {c.heroNote}</p>
      </div>
      <div className={s.heroVisual}>
        <div className={s.orbitOne} aria-hidden="true"></div><div className={s.orbitTwo} aria-hidden="true"></div>
        <div className={s.visualPanel}>
          <div className={s.visualHead}><span className={s.visualSignal} aria-hidden="true"></span><span>{c.pictureLabel}</span><span className={s.visualDots} aria-hidden="true">•••</span></div>
          {c.visualSteps.map((step,index)=><div className={s.visualRow} key={step.title}><span className={s.visualIndex}>0{index+1}</span><div className={s.exampleText}><strong>{step.title}</strong><p>{step.detail}</p></div>{index===2?<CircleCheck size={19} aria-hidden="true"/>:null}</div>)}
          <div className={s.visualBottom}>{c.visualBottom}</div>
        </div>
      </div>
    </section>

    <section id="projects-v2" className={s.section} aria-labelledby="home-v2-projects">
      <div className={s.sectionHeading}><div><p className={s.eyebrow}>{c.featuredEyebrow}</p><h2 id="home-v2-projects">{c.featuredTitle}</h2><p className={s.sectionLead}>{c.featuredLead}</p></div></div>
      <div className={s.featuredGrid}>{c.projects.map(card=>{
        const Mark=projectMarks[card.id];
        return <Link key={card.id} className={`${s.featuredCard} ${s['accent-'+card.id]}`} href={localizedPath('/projects/'+card.id+'/',locale)}>
          <div className={s.featuredBody}>
            <p className={s.cardTag}><Mark size={17} aria-hidden="true"/>{card.tag}</p>
            <h3>{card.title}</h3><p className={s.projectHeadline}>{card.headline}</p>
            <p className={s.cardDescription}>{card.desc}</p>
            <p className={s.cardReason}><strong>{c.reasonLabel}:</strong> {card.reason}</p>
            <p className={s.cardLimit}><strong>{c.limitLabel}:</strong> {card.limit}</p>
            <span className={s.cardAction}>{c.projectLink}<ArrowUpRight size={17} aria-hidden="true" /></span>
          </div>
        </Link>;
      })}</div>
    </section>

    <section className={s.section} aria-labelledby="home-v2-wip">
      <div className={s.sectionHeading}><div><p className={s.eyebrow}>{c.inProgressEyebrow}</p><h2 id="home-v2-wip">{c.inProgressTitle}</h2><p className={s.sectionLead}>{c.inProgressLead}</p></div></div>
      <div className={s.wipGrid}>{c.wip.map(item=><article key={item.name} className={s.wipCard}><div className={s.wipTop}><span className={s.wipBadge}><Layers3 size={14} aria-hidden="true" /> {c.wipLabel}</span><span className={s.wipIcon}><FileSearch size={24} aria-hidden="true" /></span></div><p className={s.cardTag}>{item.category}</p><h3>{item.name}</h3><p className={s.cardDescription}>{item.desc}</p></article>)}</div>

    </section>

    <section className={s.section} aria-labelledby="home-v2-evidence">
      <div className={s.sectionHeading}><div><p className={s.eyebrow}>{c.workEyebrow}</p><h2 id="home-v2-evidence">{c.workTitle}</h2><p className={s.sectionLead}>{c.workLead}</p></div></div>
      <div className={s.caseGrid}>{c.cases.map((item,index)=><Link key={item.path} className={s.caseCard} href={localizedPath(item.path,locale)}><span className={s.caseNumber}>0{index+1}</span><h3>{item.title}</h3><p>{item.desc}</p><span className={s.caseLink}>{c.caseLink}<ArrowUpRight size={17} aria-hidden="true"/></span></Link>)}</div>
    </section>

    <section className={s.methodSection} aria-labelledby="home-v2-method">
      <div className={s.sectionHeading}><div><p className={s.eyebrow}>{c.methodEyebrow}</p><h2 id="home-v2-method">{c.methodTitle}</h2></div></div>
      <div className={s.methodGrid}>{c.method.map((step,index)=><div key={step.title} className={s.methodStep}><span>0{index+1}</span><h3>{step.title}</h3><p>{step.desc}</p></div>)}</div>
    </section>

    <section id="skills" className={s.skillsSection} aria-labelledby="home-v21-skills">
      <div className={s.skillText}>
        <p className={s.eyebrow}><BookOpenCheck size={15} aria-hidden="true"/>{c.skillEyebrow}</p>
        <h2 id="home-v21-skills">{c.skillTitle}</h2>
        <p>{c.skillIntro}</p>
        <p className={s.skillNote}>{c.skillAvailability}</p>
      </div>
      <div className={s.skillActions}>
        <a className={s.primaryAction} href="https://agensi.io/creators/marcelo-javier-fernandez-caballero" target="_blank" rel="noreferrer">{c.skillCreator}<ArrowUpRight size={16} aria-hidden="true"/></a>
        <a className={s.secondaryAction} href="https://agensi.io/skills/verum-output-reviewer" target="_blank" rel="noreferrer">{c.skillTry}<ArrowUpRight size={16} aria-hidden="true"/></a>
        <a className={s.secondaryAction} href={profile.linkedin} target="_blank" rel="noreferrer">{c.skillCustom}<ArrowUpRight size={16} aria-hidden="true"/></a>
        <p className={s.skillFooter}>{c.skillFooter}</p>
      </div>
    </section>

    <section className={s.aboutBand} aria-labelledby="home-v2-about"><div><p className={s.eyebrow}>{c.aboutEyebrow}</p><h2 id="home-v2-about">{c.aboutTitle}</h2><p>{c.aboutDesc}</p></div><div className={s.aboutLinks}><Link href={localizedPath('/about/',locale)} className={s.secondaryAction}>{c.aboutLink}<ArrowUpRight size={16} aria-hidden="true"/></Link><PublicCv locale={locale}/></div></section>

    <section className={s.contactBand} aria-labelledby="home-v2-contact"><div><h2 id="home-v2-contact">{c.contactTitle}</h2><p>{c.contactDesc}</p></div><div className={s.contactActions}><a className={s.contactButton} href={profile.linkedin} target="_blank" rel="noreferrer">{c.contactLink}<ArrowUpRight size={18} aria-hidden="true"/></a><a href="https://github.com/manzo8b/marcelus-v-v01" target="_blank" rel="noreferrer" className={s.githubLink}>{c.github}<ArrowUpRight size={15} aria-hidden="true"/></a></div></section>
  </div>;
}
