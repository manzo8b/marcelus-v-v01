import Link from 'next/link';
import { type Locale, localizedPath, t } from '@/data/i18n';
import { ArrowRight, ArrowUpRight, BookOpen, FileDown, GraduationCap, ScanLine, Workflow } from 'lucide-react';
import { type Project, type ProjectId, caseStudies, evidenceUrl, profile, projects } from '@/data/portfolio';

export const projectIcons = { prometeus: Workflow, verum: ScanLine, 'risto-lab': GraduationCap };

export function ProjectGrid({ locale = 'en' }: { locale?: Locale }) {
  return <div className="project-grid">{projects.map(project => <ProjectCard key={project.id} project={project} locale={locale} />)}</div>;
}

export function ProjectCard({ project, locale = 'en' }: { project: Project; locale?: Locale }) {
  const Icon = projectIcons[project.id];
  return <Link href={localizedPath(`/projects/${project.id}/`, locale)} className={`project-card project-${project.id}`}>
    <div className="project-card-top"><span className="project-icon"><Icon size={23} strokeWidth={1.6} /></span><ArrowUpRight className="project-arrow" size={20} /></div>
    <h3>{project.name}</h3><p className="project-domain">{t(locale, project.subtitle)}</p>
    <p className="project-description">{t(locale, project.description)}</p>
    <div className="project-skills">{project.skills.slice(0, 2).map(skill => <span key={skill}>{t(locale, skill)}</span>)}</div>
  </Link>;
}

export function PageHeading({ label, title, description, locale = 'en' }: { label: string; title: string; description: string; locale?: Locale }) {
  const literal = (text: string) => text === profile.name || projects.some(project => project.name === text) ? text : t(locale, text);
  return <div className="page-heading"><p className="eyebrow">{literal(label)}</p><h1>{literal(title)}</h1><p className="lead">{literal(description)}</p></div>;
}

export function EvidenceList({ project, locale = 'en' }: { project: Project; locale?: Locale }) {
  return <div className="evidence-list">{project.evidence.map(item => <a key={item.path} href={evidenceUrl(item.path)} target="_blank" rel="noreferrer" className="evidence-row"><BookOpen size={19} /><span>{t(locale, item.label)}<small>{t(locale, item.kind)}</small></span><ArrowUpRight size={17} /></a>)}</div>;
}

export function CaseList({ projectId, locale = 'en' }: { projectId?: ProjectId; locale?: Locale }) {
  return <div className="case-list">{caseStudies.filter(item => !projectId || item.projectId === projectId).map(item => <Link key={item.id} href={localizedPath(`/cases/${item.id}/`, locale)} className={`case-row project-${item.projectId}`}><span className="case-number">{item.number}</span><div><p className="case-project">{projects.find(project => project.id === item.projectId)?.name}</p><h3>{t(locale, item.title)}</h3><p>{t(locale, item.summary)}</p></div><ArrowRight size={20} /></Link>)}</div>;
}

export function PublicCv({ locale = 'en' }: { locale?: Locale }) {
  return profile.publicCv ? <a className="text-link" href={profile.publicCv} download><FileDown size={16} />{t(locale, 'Download CV')}</a> : <span className="cv-status" title={t(locale, 'A public CV version has not been approved')}><FileDown size={16} />{t(locale, 'Public CV pending')}</span>;
}
