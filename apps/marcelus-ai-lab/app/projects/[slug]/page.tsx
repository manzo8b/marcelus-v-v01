import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { CaseList, EvidenceList, projectIcons } from '@/components/portfolio';
import { projects } from '@/data/portfolio';

export function generateStaticParams() { return projects.map(project => ({ slug: project.id })); }
export const dynamicParams = false;
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) { const { slug } = await params; return { title: projects.find(project => project.id === slug)?.name || 'Project' }; }
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find(item => item.id === slug);
  if (!project) notFound();
  const Icon = projectIcons[project.id];
  return <article className={`project-detail project-${project.id}`}>
    <Link href="/projects/" className="breadcrumb">Projects / {project.name}</Link>
    <div className="project-title"><span className="project-icon"><Icon size={27} /></span><p className="eyebrow">{project.subtitle}</p></div>
    <h1>{project.name}</h1><p className="lead">{project.description}</p>
    <div className="project-detail-grid"><section><h2>The problem</h2><p>{project.problem}</p><h2>The method</h2><ol className="workflow-steps">{project.method.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span>{step}</li>)}</ol><h2>Skills demonstrated</h2><ul className="skills-list">{project.skills.map(skill => <li key={skill}>{skill}</li>)}</ul><Link href="/lab/" className="text-link">Reference-based examples<ArrowRight size={16} /></Link></section><section><h2>Documentary evidence</h2><EvidenceList project={project} /><div className="limits-note"><h3>Scope & limits</h3><p>{project.limits}</p></div></section></div>
    <section className="related-cases"><h2>Selected case</h2><CaseList projectId={project.id} /></section>
  </article>;
}
