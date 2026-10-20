import Link from 'next/link';
import { type Locale, localizedPath, t } from '@/data/i18n';
import { ArrowRight, ArrowUpRight, BookOpen, FileDown, GraduationCap, ScanLine, Workflow } from 'lucide-react';
import { type Project, type ProjectId, assetUrl, caseStudies, evidenceUrl, profile, projects, repository } from '@/data/portfolio';

export const projectIcons = { prometeus: Workflow, verum: ScanLine, 'risto-lab': GraduationCap };

export function ProjectGrid({ locale = 'en', evaluationFirst = false }: { locale?: Locale; evaluationFirst?: boolean }) {
  const ordered = evaluationFirst ? [...projects].sort((a, b) => Number(b.id === 'verum') - Number(a.id === 'verum')) : projects;
  return <div className="project-grid">{ordered.map(project => <ProjectCard key={project.id} project={project} locale={locale} />)}</div>;
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

export function CaseList({ projectId, locale = 'en', ids }: { projectId?: ProjectId; locale?: Locale; ids?: string[] }) {
  const selected = ids ? ids.map(id => { const item = caseStudies.find(item => item.id === id); if (!item) throw new Error(`Missing case: ${id}`); return item; }) : caseStudies.filter(item => !projectId || item.projectId === projectId);
  return <div className="case-list">{selected.map(item => <Link key={item.id} href={localizedPath(`/cases/${item.id}/`, locale)} className={`case-row project-${item.projectId}`}><span className="case-number">{item.number}</span><div><p className="case-project">{projects.find(project => project.id === item.projectId)?.name}</p><h3>{t(locale, item.title)}</h3><p>{t(locale, item.summary)}</p></div><ArrowRight size={20} /></Link>)}</div>;
}

export function ContactBand({ locale = 'en' }: { locale?: Locale }) {
  return <section className="contact-band" aria-labelledby="contact-title"><div><h2 id="contact-title">{t(locale, 'Interested in working together?')}</h2><p>{t(locale, 'Evaluation, instructions and training grounded in real operational problems.')}</p></div><div className="document-links"><a href={profile.linkedin} className="button button-primary" target="_blank" rel="noreferrer">{t(locale, 'Contact on LinkedIn')}<ArrowUpRight size={17} /></a><PublicCv locale={locale} /><a href={repository} className="text-link" target="_blank" rel="noreferrer">GitHub<ArrowUpRight size={16} /></a></div></section>;
}

export function PublicCv({ locale = 'en' }: { locale?: Locale }) {
  return profile.publicCv ? <a className="text-link" href={assetUrl(profile.publicCv)} download="CV_Marcelo_Fernandez_IT.pdf" hrefLang="it" type="application/pdf"><FileDown size={16} />{t(locale, 'Download CV (Italian PDF)')}</a> : <span className="cv-status" title={t(locale, 'A public CV version has not been approved')}><FileDown size={16} />{t(locale, 'Public CV pending')}</span>;
}
