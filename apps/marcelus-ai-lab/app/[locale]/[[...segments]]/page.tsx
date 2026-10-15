import { notFound } from 'next/navigation';
import Home from '@/app/(english)/page';
import Projects from '@/app/(english)/projects/page';
import Project from '@/app/(english)/projects/[slug]/page';
import Cases from '@/app/(english)/cases/page';
import Case from '@/app/(english)/cases/[slug]/page';
import About from '@/app/(english)/about/page';
import Recruiter from '@/app/(english)/recruiter/page';
import Lab from '@/app/(english)/lab/page';
import { caseStudies, projects, profile } from '@/data/portfolio';
import { type Locale, t } from '@/data/i18n';
import { pageMetadata } from '@/data/site-metadata';

const routes = ['', 'projects', ...projects.map(item => `projects/${item.id}`), 'lab', 'cases', ...caseStudies.map(item => `cases/${item.id}`), 'about', 'recruiter'];
export const dynamicParams = false;
export function generateStaticParams() { return ['it', 'es'].flatMap(locale => routes.map(route => ({ locale, segments: route ? route.split('/') : [] }))); }
type Props = { params: Promise<{ locale: string; segments?: string[] }> };

export async function generateMetadata({ params }: Props) {
  const { locale, segments = [] } = await params;
  if (locale !== 'it' && locale !== 'es') return {};
  const route = segments.join('/');
  const project = projects.find(item => route === `projects/${item.id}`);
  const item = caseStudies.find(item => route === `cases/${item.id}`);
  const title = project?.name || (item ? t(locale, item.title) : route === 'projects' ? t(locale, 'Projects') : route === 'cases' ? t(locale, 'Case studies') : route === 'lab' ? t(locale, 'AI Evaluation Lab') : profile.name);
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
  if (route === 'cases') return <Cases params={pageParams} />;
  if (route === 'about') return <About params={pageParams} />;
  if (route === 'recruiter') return <Recruiter params={pageParams} />;
  if (route === 'lab') return <Lab params={pageParams} />;
  const detailParams = Promise.resolve<{ locale: Locale; slug: string }>({ locale, slug: segments[1] });
  if (segments[0] === 'projects') return <Project params={detailParams} />;
  return <Case params={detailParams} />;
}
