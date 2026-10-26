import { notFound } from 'next/navigation';
import Home from '@/app/(english)/page';
import Projects from '@/app/(english)/projects/page';
import Project from '@/app/(english)/projects/[slug]/page';
import Cases from '@/app/(english)/cases/page';
import Case from '@/app/(english)/cases/[slug]/page';
import About from '@/app/(english)/about/page';
import Recruiter from '@/app/(english)/recruiter/page';
import Lab from '@/app/(english)/lab/page';
import LibraryPage from '@/app/(english)/library/page';
import { FreeResources } from '@/components/free-resources';
import { VillaPitosforiOverview } from '@/components/villa-pitosfori';
import { SComodoOverview } from '@/components/s-comodo-overview';
import { caseStudies, projects, profile } from '@/data/portfolio';
import { type Locale, t } from '@/data/i18n';
import { pageMetadata } from '@/data/site-metadata';

const routes = ['', 'projects', 'projects/s-comodo', 'projects/villa-pitosfori', 'resources', ...projects.map(item => `projects/${item.id}`), 'lab', 'library', 'cases', ...caseStudies.map(item => `cases/${item.id}`), 'about', 'recruiter'];
export const dynamicParams = false;
export function generateStaticParams() { return ['it', 'es'].flatMap(locale => routes.map(route => ({ locale, segments: route ? route.split('/') : [] }))); }
type Props = { params: Promise<{ locale: string; segments?: string[] }> };

export async function generateMetadata({ params }: Props) {
  const { locale, segments = [] } = await params;
  if (locale !== 'it' && locale !== 'es') return {};
  const route = segments.join('/');
  if (route === 'resources') {
    return pageMetadata('/resources/', locale, locale === 'it' ? 'Risorse gratuite' : 'Recursos gratuitos', locale === 'it' ? 'Checklist e modelli gratuiti per risposte AI, istruzioni più chiare e lezioni. Download diretto senza registrazione.' : 'Plantillas gratuitas para revisar respuestas de IA, escribir instrucciones y planificar clases. Descarga directa sin registro.');
  }
  if (route === 'projects/villa-pitosfori') {
    return pageMetadata('/projects/villa-pitosfori/', locale, "Villa All'Ombra dei Pitosfori", locale === 'it' ? 'Progetto di realizzazione web di una villa nel Salento, con link al sito ufficiale.' : 'Proyecto de creación web de una villa en Salento, con enlace al sitio oficial.');
  }
  if (route === 'projects/s-comodo') {
    const description = locale === 'it'
      ? 'Progetto editoriale indipendente in preparazione: contesto storico, fonti e uso trasparente dell’AI con verifica umana.'
      : 'Proyecto editorial independiente en preparación: contexto histórico, fuentes y revisión humana del uso de IA.';
    return pageMetadata('/projects/s-comodo/', locale, 'S-COMODO — Editorial', description);
  }
  const project = projects.find(item => route === `projects/${item.id}`);
  const item = caseStudies.find(item => route === `cases/${item.id}`);
  const title = project?.name || (item ? t(locale, item.title) : route === 'projects' ? t(locale, 'Projects') : route === 'cases' ? t(locale, 'Case studies') : route === 'lab' ? t(locale, 'AI Evaluation Lab') : route === 'library' ? t(locale, 'Prometeus Library') : route === 'recruiter' ? t(locale, '60 second overview') : profile.name);
  const description = t(locale, project?.description || item?.summary || 'Prompt design, content evaluation and practical training, with documentary evidence and explicit limits.');
  const path = route ? `/${route}/` : '/';
  return pageMetadata(path, locale, title, description);
}

export default async function LocalizedPage({ params }: Props) {
  const { locale, segments = [] } = await params;
  if (locale !== 'it' && locale !== 'es') notFound();
  const route = segments.join('/');
  if (!routes.includes(route)) notFound();
  const pageParams = Promise.resolve<{ locale: Locale }>({ locale });
  if (route === '') return <Home params={pageParams} />;
  if (route === 'projects') return <Projects params={pageParams} />;
  if (route === 'projects/s-comodo') return <SComodoOverview locale={locale} />;
  if (route === 'projects/villa-pitosfori') return <VillaPitosforiOverview locale={locale} />;
  if (route === 'resources') return <FreeResources locale={locale} />;
  if (route === 'cases') return <Cases params={pageParams} />;
  if (route === 'about') return <About params={pageParams} />;
  if (route === 'recruiter') return <Recruiter params={pageParams} />;
  if (route === 'lab') return <Lab params={pageParams} />;
  if (route === 'library') return <LibraryPage params={pageParams} />;
  const detailParams = Promise.resolve<{ locale: Locale; slug: string }>({ locale, slug: segments[1] });
  if (segments[0] === 'projects') return <Project params={detailParams} />;
  return <Case params={detailParams} />;
}
