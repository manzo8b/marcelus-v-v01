import Link from 'next/link';
import { ArrowRight, ArrowUpRight, BookOpen, FileDown, GraduationCap, ScanLine, Workflow } from 'lucide-react';
import { type Project, type ProjectId, caseStudies, evidenceUrl, profile, projects } from '@/data/portfolio';

export const projectIcons = { prometeus: Workflow, verum: ScanLine, 'risto-lab': GraduationCap };

export function ProjectGrid() {
  return <div className="project-grid">{projects.map(project => <ProjectCard key={project.id} project={project} />)}</div>;
}

export function ProjectCard({ project }: { project: Project }) {
  const Icon = projectIcons[project.id];
  return <Link href={`/projects/${project.id}/`} className={`project-card project-${project.id}`}>
    <div className="project-card-top"><span className="project-icon"><Icon size={23} strokeWidth={1.6} /></span><ArrowUpRight className="project-arrow" size={20} /></div>
    <h3>{project.name}</h3><p className="project-domain">{project.subtitle}</p>
    <p className="project-description">{project.description}</p>
    <div className="project-skills">{project.skills.slice(0, 2).map(skill => <span key={skill}>{skill}</span>)}</div>
  </Link>;
}

export function PageHeading({ label, title, description }: { label: string; title: string; description: string }) {
  return <div className="page-heading"><p className="eyebrow">{label}</p><h1>{title}</h1><p className="lead">{description}</p></div>;
}

export function EvidenceList({ project }: { project: Project }) {
  return <div className="evidence-list">{project.evidence.map(item => <a key={item.path} href={evidenceUrl(item.path)} target="_blank" rel="noreferrer" className="evidence-row"><BookOpen size={19} /><span>{item.label}<small>{item.kind}</small></span><ArrowUpRight size={17} /></a>)}</div>;
}

export function CaseList({ projectId }: { projectId?: ProjectId }) {
  return <div className="case-list">{caseStudies.filter(item => !projectId || item.projectId === projectId).map(item => <Link key={item.id} href={`/cases/${item.id}/`} className={`case-row project-${item.projectId}`}><span className="case-number">{item.number}</span><div><p className="case-project">{projects.find(project => project.id === item.projectId)?.name}</p><h3>{item.title}</h3><p>{item.summary}</p></div><ArrowRight size={20} /></Link>)}</div>;
}

export function PublicCv() {
  return profile.publicCv ? <a className="text-link" href={profile.publicCv} download><FileDown size={16} />Download CV</a> : <span className="cv-status" title="A public CV version has not been approved"><FileDown size={16} />Public CV pending</span>;
}
