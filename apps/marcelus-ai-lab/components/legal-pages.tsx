import Link from 'next/link';
import { profile } from '@/data/portfolio';
import { legalOwnerName } from '@/data/legal-identity';
import { type Locale, localizedPath } from '@/data/i18n';

export type LegalKind = 'notice' | 'privacy' | 'cookies';
type Section = { heading: string; paragraphs: string[] };
type PageCopy = { title: string; subtitle: string; sections: Section[] };
type Labels = { draft: string; controller: string; contact: string; more: string; notice: string; privacy: string; cookies: string };
const labels: Record<Locale, Labels> = {
  it: {
    draft: 'BOZZA IN REVISIONE — NON APPROVATA PER LA PUBBLICAZIONE. Prassi di conservazione, ruoli dei fornitori, trasferimenti internazionali ed eventuali ulteriori dati identificativi obbligatori da verificare.',
    controller: 'Titolare del trattamento / responsabile del portfolio',
    contact: 'Contatto pubblico',
    more: 'Altre informazioni',
    notice: 'Informazioni legali',
    privacy: 'Privacy',
    cookies: 'Cookie e tecnologie locali',
  },
  en: {
    draft: 'REVIEW DRAFT — NOT APPROVED FOR PUBLICATION. Retention practices, provider roles, international transfers and any additional legally required identity details must be verified.',
    controller: 'Data controller / portfolio owner',
    contact: 'Public contact',
    more: 'Related information',
    notice: 'Legal notice',
    privacy: 'Privacy',
    cookies: 'Cookies and local technologies',
  },
  es: {
    draft: 'BORRADOR EN REVISIÓN — NO APROBADO PARA PUBLICACIÓN. Deben verificarse la conservación, los roles de los proveedores, las transferencias internacionales y los posibles datos identificativos adicionales exigidos por ley.',
    controller: 'Responsable del tratamiento / titular del portafolio',
    contact: 'Contacto público',
    more: 'Información relacionada',
    notice: 'Aviso legal',
    privacy: 'Privacidad',
    cookies: 'Cookies y tecnologías locales',
  },
};

const documents: Record<Locale, Record<LegalKind, PageCopy>> = {
  it: {
    notice: {
      title: 'Informazioni legali',
      subtitle: 'Identità, natura del portfolio, limiti delle dimostrazioni e diritti sui materiali.',
      sections: [
        { heading: 'Natura del progetto', paragraphs: [
          'MARCELUS AI LAB è attualmente un portfolio personale e un laboratorio indipendente. Documenta progetti, metodologie, casi preparati e strumenti digitali sviluppati anche con assistenza AI.',
          'Il sito non gestisce attualmente ordini, acquisti, pagamenti o contratti di servizi. Eventuali future attività professionali saranno descritte e disciplinate separatamente prima dell’avvio.',
        ] },
        { heading: 'Contenuti, esempi e limitazioni', paragraphs: [
          'I casi sintetici e le dimostrazioni preparate sono identificati come tali. Non costituiscono automaticamente risultati di clienti, prove di impiego produttivo, misure indipendenti di accuratezza o verifiche universali dal vivo.',
          'I materiali sono informativi e formativi e non sostituiscono valutazioni specialistiche, consulenze professionali o controlli richiesti dalla normativa applicabile.',
        ] },
        { heading: 'Autori, copyright e risorse di terzi', paragraphs: [
          'Le condizioni di riutilizzo dei materiali sono quelle delle licenze esplicitamente associate ai singoli file e progetti. La presenza di una licenza in un repository non autorizza automaticamente il riutilizzo di marchi, fotografie o materiali di terzi.',
          'I nomi dei prodotti e i marchi di altre organizzazioni appartengono ai rispettivi titolari. I crediti e gli avvisi relativi alle dipendenze open source restano consultabili nella documentazione del progetto.',
        ] },
        { heading: 'Collegamenti esterni e aggiornamenti', paragraphs: [
          'I collegamenti verso repository, siti di terzi e social network conducono a servizi autonomi con condizioni proprie. I contenuti possono essere corretti o aggiornati per riflettere lo stato documentato dei progetti.',
          'Queste informazioni descrivono il portfolio nello stato attuale; eventuali futuri servizi a pagamento richiederanno una nuova verifica dei requisiti informativi e contrattuali.',
        ] },
      ],
    },
    privacy: {
      title: 'Informativa sulla privacy',
      subtitle: 'Come possono essere trattati i dati durante la visita e quando si scrive al contatto pubblico.',
      sections: [
        { heading: 'Dati trattati e finalità', paragraphs: [
          'Il sito è un portfolio statico: non offre account visitatore, moduli di registrazione, checkout o una API che riceve i testi inseriti nelle dimostrazioni. Le interazioni locali delle demo non sono destinate all’invio al titolare.',
          'Per la sicurezza e l’erogazione delle pagine, GitHub Pages dichiara di registrare l’indirizzo IP dei visitatori, anche senza accesso a GitHub. Il relativo trattamento tecnico dipende dall’infrastruttura del fornitore.',
          'Se un visitatore invia volontariamente un messaggio all’indirizzo email pubblico, saranno trattati l’indirizzo del mittente e i dati inclusi nel messaggio per leggere e gestire la comunicazione.',
        ] },
        { heading: 'Basi giuridiche', paragraphs: [
          'Per gestire comunicazioni volontarie e mantenere accessibile il portfolio può trovare applicazione il legittimo interesse (art. 6, par. 1, lett. f, GDPR), da verificare rispetto ai trattamenti effettivi e ai diritti degli interessati.',
          'Non si richiede un consenso generale alla privacy per consultare il sito. L’eventuale introduzione futura di tecnologie non necessarie soggette a consenso richiederà una verifica e un meccanismo appropriato prima dell’attivazione.',
        ] },
        { heading: 'Destinatari e fornitori', paragraphs: [
          'Le pagine sono pubblicate tramite GitHub Pages. I messaggi inviati all’indirizzo di contatto sono gestiti tramite il servizio di posta elettronica del relativo account. Questi fornitori possono trattare dati secondo i rispettivi ruoli e condizioni.',
          'GitHub: https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement — Informazioni su GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages',
        ] },
        { heading: 'Trasferimenti internazionali', paragraphs: [
          'L’uso di fornitori tecnologici globali può comportare trattamenti o trasferimenti al di fuori dello Spazio economico europeo. Le effettive localizzazioni, i ruoli dei fornitori e le eventuali garanzie applicabili devono essere verificati prima dell’approvazione dell’informativa definitiva.',
        ] },
        { heading: 'Conservazione', paragraphs: [
          'La preferenza grafica resta nella memoria locale del browser fino a quando viene modificata o rimossa dal visitatore. I dati tecnici registrati da GitHub seguono le condizioni e i periodi definiti dal fornitore.',
          'Per le email ricevute occorre ancora formalizzare e applicare un periodo di conservazione o un criterio operativo documentabile: questo elemento è da completare prima della pubblicazione.',
        ] },
        { heading: 'Diritti degli interessati', paragraphs: [
          'Nei casi e nei limiti previsti dal GDPR, si possono richiedere accesso, rettifica, cancellazione, limitazione del trattamento e opposizione; quando ne ricorrono i presupposti, anche portabilità e altri diritti applicabili.',
          'È possibile rivolgersi al recapito pubblico per le richieste di competenza del titolare e presentare reclamo al Garante per la protezione dei dati personali (https://www.garanteprivacy.it/).',
        ] },
        { heading: 'Conferimento dei dati e decisioni automatizzate', paragraphs: [
          'Non è necessario inviare dati personali per consultare il portfolio. Il contenuto delle email è fornito volontariamente, ma un recapito di risposta è normalmente necessario per rispondere al messaggio.',
          'Il sito non effettua decisioni automatizzate sui visitatori né profilazione tramite sistemi sviluppati dal portfolio, secondo le funzionalità attualmente documentate.',
        ] },
        { heading: 'Aggiornamenti', paragraphs: [
          'L’informativa dovrà essere aggiornata in caso di introduzione di nuovi servizi, moduli, misurazioni, account o sistemi di trattamento. Questa versione rimane una bozza soggetta a verifica tecnica e giuridica.',
        ] },
      ],
    },
    cookies: {
      title: 'Cookie e tecnologie locali',
      subtitle: 'Informazioni sulle preferenze del browser e sui possibili strumenti di tracciamento.',
      sections: [
        { heading: 'Preferenza del tema', paragraphs: [
          'Il codice del portfolio salva nel localStorage del browser la chiave “marcelus-theme”, che contiene la scelta tra tema chiaro e scuro. È una preferenza funzionale, non un identificatore pubblicitario.',
          'La preferenza rimane disponibile sul dispositivo finché non viene modificata o cancellata dal browser. È possibile cambiare tema dal controllo presente nella navigazione.',
        ] },
        { heading: 'Cookie, analytics e pubblicità', paragraphs: [
          'Nel codice attualmente esaminato non risultano strumenti pubblicitari, pixel di profilazione o integrazioni di analytics. Non è previsto un banner di consenso per tecnologie non installate.',
          'Prima della pubblicazione definitiva di questa informativa è richiesta una verifica dal browser delle richieste di rete, dei cookie e degli altri archivi locali, compresi eventuali comportamenti del provider di hosting.',
        ] },
        { heading: 'Servizi esterni', paragraphs: [
          'L’apertura volontaria di collegamenti a GitHub, LinkedIn o altri siti conduce a servizi esterni che applicano politiche e tecnologie proprie.',
        ] },
        { heading: 'Come eliminare i dati locali', paragraphs: [
          'Le preferenze locali possono essere modificate dalle impostazioni del sito o eliminate tramite le funzioni di cancellazione dei dati del proprio browser.',
        ] },
        { heading: 'Modifiche future', paragraphs: [
          'Qualora vengano introdotti analytics non esenti, tecnologie pubblicitarie o altri strumenti che richiedano consenso, verranno aggiornate l’informativa e la gestione preventiva del consenso prima dell’attivazione.',
        ] },
      ],
    },
  },
  en: {
    notice: {
      title: 'Legal notice',
      subtitle: 'Ownership, portfolio status, limitations of demonstrations and intellectual property.',
      sections: [
        { heading: 'Nature of the project', paragraphs: [
          'MARCELUS AI LAB is currently a personal portfolio and independent lab documenting projects, methods, prepared case studies and digital tools developed with AI assistance.',
          'The website does not currently process orders, payments, purchases or service contracts. Any future professional activity will be separately described and reviewed before it starts.',
        ] },
        { heading: 'Content and limitations', paragraphs: [
          'Synthetic case studies and prepared demonstrations are clearly labelled. They do not automatically establish client work, production deployment, independent accuracy measurements or universal live verification.',
          'Materials are informational and educational; they are not a substitute for specialist assessment or compliance checks.',
        ] },
        { heading: 'Rights and third-party materials', paragraphs: [
          'Reuse conditions depend on the licences expressly attached to each file or project. A repository licence does not automatically grant rights to third-party images, names or marks.',
          'Third-party trademarks belong to their owners. Open-source notices can be found in the project documentation.',
        ] },
        { heading: 'External links and updates', paragraphs: [
          'Links to other sites and social platforms lead to independently operated services. Project descriptions may be updated to reflect documented evidence and development status.',
          'If the portfolio later offers paid services, the applicable legal information will be reassessed before such services begin.',
        ] },
      ],
    },
    privacy: {
      title: 'Privacy notice',
      subtitle: 'Information about data involved in visiting the website and contacting the portfolio owner.',
      sections: [
        { heading: 'Data and purposes', paragraphs: [
          'This is a static portfolio with no visitor accounts, registration forms, checkout or API collecting demonstration input. Documented local demo interactions are not intended to be transmitted to the owner.',
          'GitHub Pages states that it logs visitors’ IP addresses for security purposes even when they are not signed into GitHub.',
          'If you voluntarily send an email to the public contact address, your sender address and message content are processed to read and respond to that communication.',
        ] },
        { heading: 'Legal bases', paragraphs: [
          'Legitimate interests (Article 6(1)(f) GDPR) may apply to handling voluntary correspondence and maintaining the portfolio, subject to verification against the actual processing and data-subject rights.',
          'No blanket privacy consent is required merely to browse the website. Optional technologies requiring consent would need appropriate assessment and controls before being introduced.',
        ] },
        { heading: 'Providers and recipients', paragraphs: [
          'Pages are hosted on GitHub Pages. Email communications are handled by the provider of the public mailbox. The providers may process information according to their respective roles and terms.',
          'GitHub privacy statement: https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement — GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages',
        ] },
        { heading: 'International transfers', paragraphs: [
          'Global technology providers may process or transfer personal data outside the European Economic Area. Applicable provider roles, locations and safeguards must be verified before this notice is approved for publication.',
        ] },
        { heading: 'Retention', paragraphs: [
          'The display preference remains in browser local storage until changed or removed. GitHub retains its security logs in accordance with the provider’s own policies.',
          'A documented retention period or operational criterion for incoming email still needs to be confirmed and implemented before publication.',
        ] },
        { heading: 'Your rights', paragraphs: [
          'Where applicable under GDPR, you may request access, rectification, erasure, restriction or objection, and portability where its legal conditions apply.',
          'Contact the portfolio owner using the published contact address for relevant requests. You may lodge a complaint with the Italian data protection authority: https://www.garanteprivacy.it/.',
        ] },
        { heading: 'Voluntary information and automated decisions', paragraphs: [
          'No personal information needs to be submitted to read this portfolio. Emails are voluntary; a return address is normally necessary for a response.',
          'The documented website does not perform automated decisions about visitors or profiling through portfolio-controlled systems.',
        ] },
        { heading: 'Changes', paragraphs: [
          'This notice must be updated if accounts, contact forms, tracking, payment options or other data-processing features are introduced. This text remains a draft pending technical and legal review.',
        ] },
      ],
    },
    cookies: {
      title: 'Cookies and local technologies',
      subtitle: 'How browser preferences and optional tracking technologies are handled.',
      sections: [
        { heading: 'Theme preference', paragraphs: [
          'The portfolio stores the key “marcelus-theme” in browser localStorage to remember the visitor’s light or dark theme preference. It is a functional setting rather than an advertising identifier.',
          'The value remains on the device until changed or cleared. Visitors can change the theme using the navigation control.',
        ] },
        { heading: 'Cookies and analytics', paragraphs: [
          'No advertising pixels, profiling tools or analytics integrations were identified in the reviewed application code. A consent banner for tools that are not installed is not planned.',
          'Browser-based checks of network requests, cookies and local storage, including the hosting provider’s behaviour, remain necessary before this notice is final.',
        ] },
        { heading: 'External services', paragraphs: [
          'Following links to GitHub, LinkedIn or other external websites takes visitors to services with their own policies and technologies.',
        ] },
        { heading: 'Managing storage', paragraphs: [
          'Visitors can change the theme on the website or remove locally stored settings through their browser controls.',
        ] },
        { heading: 'Future changes', paragraphs: [
          'If non-exempt analytics, advertising or other consent-based tracking are introduced, this notice and prior-consent controls will be updated before activation.',
        ] },
      ],
    },
  },
  es: {
    notice: {
      title: 'Aviso legal',
      subtitle: 'Responsabilidad del sitio, naturaleza del portafolio, límites de las demostraciones y propiedad intelectual.',
      sections: [
        { heading: 'Naturaleza del proyecto', paragraphs: [
          'MARCELUS AI LAB es actualmente un portafolio personal y un laboratorio independiente que documenta proyectos, métodos, casos preparados y herramientas digitales desarrolladas con asistencia de IA.',
          'El sitio no tramita actualmente pedidos, compras, pagos ni contratos de servicios. Cualquier futura actividad profesional se describirá y revisará por separado antes de comenzar.',
        ] },
        { heading: 'Contenidos y límites', paragraphs: [
          'Los casos sintéticos y las demostraciones preparadas se identifican expresamente. No acreditan por sí mismos trabajos para clientes, despliegues productivos, mediciones independientes de precisión ni verificaciones universales en tiempo real.',
          'Los materiales son informativos y educativos; no sustituyen evaluaciones especializadas ni verificaciones normativas.',
        ] },
        { heading: 'Derechos y materiales de terceros', paragraphs: [
          'Las condiciones de reutilización dependen de las licencias expresamente asociadas a cada archivo o proyecto. Una licencia del repositorio no concede automáticamente derechos sobre imágenes, nombres o marcas de terceros.',
          'Las marcas pertenecen a sus respectivos titulares. Los avisos de software libre figuran en la documentación del proyecto.',
        ] },
        { heading: 'Enlaces y actualizaciones', paragraphs: [
          'Los enlaces externos conducen a sitios gestionados por otros responsables. Las descripciones pueden actualizarse de acuerdo con el estado documentado de los proyectos.',
          'Si en el futuro se ofrecen servicios de pago, se revisará antes la información legal correspondiente.',
        ] },
      ],
    },
    privacy: {
      title: 'Política de privacidad',
      subtitle: 'Información sobre los datos implicados en la navegación y el contacto con el responsable.',
      sections: [
        { heading: 'Datos y finalidades', paragraphs: [
          'El portafolio es estático y no ofrece cuentas de visitantes, formularios de registro, pagos ni una API que reciba entradas de las demostraciones. Las interacciones locales documentadas no se envían deliberadamente al titular.',
          'GitHub Pages indica que registra las direcciones IP de los visitantes por motivos de seguridad, incluso sin iniciar sesión en GitHub.',
          'Si se envía voluntariamente un correo a la dirección pública, se tratan los datos del remitente y el contenido para leer y responder a la comunicación.',
        ] },
        { heading: 'Bases jurídicas', paragraphs: [
          'El interés legítimo (artículo 6.1.f del RGPD) puede resultar aplicable a la correspondencia voluntaria y al mantenimiento del portafolio, sujeto a verificación de los tratamientos reales y los derechos de las personas.',
          'La visita no requiere un consentimiento general de privacidad. Si se incorporan tecnologías opcionales que requieran consentimiento, deberán evaluarse y controlarse antes de activarlas.',
        ] },
        { heading: 'Destinatarios y proveedores', paragraphs: [
          'Las páginas se alojan en GitHub Pages. Los mensajes se gestionan a través del proveedor de correo de la dirección de contacto. Estos proveedores pueden tratar información según sus funciones y condiciones.',
          'Privacidad de GitHub: https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement — GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages',
        ] },
        { heading: 'Transferencias internacionales', paragraphs: [
          'El uso de proveedores tecnológicos globales puede implicar tratamiento o transferencias fuera del Espacio Económico Europeo. Deben verificarse las funciones, ubicaciones y garantías aplicables antes de aprobar esta información.',
        ] },
        { heading: 'Conservación', paragraphs: [
          'La preferencia visual permanece en el almacenamiento local del navegador hasta modificarse o borrarse. Los registros de seguridad de GitHub siguen las políticas de ese proveedor.',
          'Queda pendiente establecer y aplicar un período o criterio documentado para conservar los correos recibidos antes de la publicación.',
        ] },
        { heading: 'Derechos de las personas', paragraphs: [
          'Cuando proceda según el RGPD, pueden ejercerse derechos de acceso, rectificación, supresión, limitación u oposición, así como portabilidad cuando corresponda.',
          'Las solicitudes relativas al responsable pueden dirigirse al contacto público. También se puede presentar una reclamación ante el Garante italiano: https://www.garanteprivacy.it/.',
        ] },
        { heading: 'Carácter voluntario y decisiones automatizadas', paragraphs: [
          'No es obligatorio comunicar datos personales para consultar el portafolio. Los correos se envían voluntariamente; normalmente se necesita una dirección de respuesta para contestar.',
          'El sitio documentado no toma decisiones automatizadas sobre visitantes ni crea perfiles mediante sistemas controlados por el portafolio.',
        ] },
        { heading: 'Cambios', paragraphs: [
          'La política deberá actualizarse si se añaden cuentas, formularios, mediciones, pagos u otras funciones que traten datos. Este texto sigue siendo un borrador sujeto a revisión técnica y jurídica.',
        ] },
      ],
    },
    cookies: {
      title: 'Cookies y tecnologías locales',
      subtitle: 'Preferencias del navegador y posibles tecnologías de seguimiento.',
      sections: [
        { heading: 'Preferencia de apariencia', paragraphs: [
          'El portafolio guarda la clave “marcelus-theme” en localStorage para recordar el tema claro u oscuro. Es una preferencia funcional, no un identificador publicitario.',
          'El valor permanece en el dispositivo hasta su modificación o eliminación. El tema puede cambiarse desde la navegación.',
        ] },
        { heading: 'Cookies y analítica', paragraphs: [
          'No se han identificado píxeles publicitarios, sistemas de perfilado ni integraciones de analítica en el código de la aplicación revisada. No se prevé un banner para herramientas que no estén instaladas.',
          'Antes de aprobar esta política debe revisarse el comportamiento real del navegador: solicitudes de red, cookies y almacenamiento local, incluido el proveedor de alojamiento.',
        ] },
        { heading: 'Servicios externos', paragraphs: [
          'Los enlaces a GitHub, LinkedIn y otros sitios conducen a servicios que aplican sus propias políticas y tecnologías.',
        ] },
        { heading: 'Gestión del almacenamiento', paragraphs: [
          'Es posible cambiar el tema en el sitio o eliminar los datos locales desde la configuración del navegador.',
        ] },
        { heading: 'Cambios futuros', paragraphs: [
          'Antes de añadir analítica no exenta, publicidad o seguimiento sujeto a consentimiento, se actualizarán esta política y los controles de consentimiento previo.',
        ] },
      ],
    },
  },
};

export function LegalPage({ locale, kind }: { locale: Locale; kind: LegalKind }) {
  const copy = documents[locale][kind];
  const l = labels[locale];
  return (
    <article className="mx-auto max-w-[840px] py-12">
      <p className="eyebrow">MARCELUS AI LAB / LEGAL</p>
      <h1 className="mt-3">{copy.title}</h1>
      <p className="lead">{copy.subtitle}</p>
      <aside role="note" className="my-7 border-l-4 border-[var(--gold)] bg-[var(--surface)] p-4 text-sm leading-relaxed">
        <strong>{l.draft}</strong>
      </aside>
      <section className="my-8 border-y border-[var(--line)] py-5 text-sm">
        <h2 className="mb-3 text-base">{l.controller}</h2>
        <p>{legalOwnerName}</p>
        <p className="mt-2">
          {l.contact}: <a className="underline underline-offset-4" href={'mailto:' + profile.email}>{profile.email}</a>
        </p>
      </section>
      {copy.sections.map((section, index) => (
        <section key={index} className="my-9">
          <h2 className="mb-3 text-xl">{section.heading}</h2>
          {section.paragraphs.map((p, i) => <p key={i} className="mt-3 leading-7 text-[var(--muted)]">{p}</p>)}
        </section>
      ))}
      <nav aria-label={l.more} className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-[var(--line)] pt-6 text-sm">
        <Link className="underline underline-offset-4" href={localizedPath('/legal/', locale)}>{l.notice}</Link>
        <Link className="underline underline-offset-4" href={localizedPath('/legal/privacy/', locale)}>{l.privacy}</Link>
        <Link className="underline underline-offset-4" href={localizedPath('/legal/cookies/', locale)}>{l.cookies}</Link>
      </nav>
    </article>
  );
}
