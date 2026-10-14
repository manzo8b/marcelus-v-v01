import { PageHeading, ProjectGrid } from '@/components/portfolio';

export const metadata = { title: 'Projects' };
export default function ProjectsPage() {
  return <><PageHeading label="Personal proof of work" title="Selected projects" description="Prompt design, content evaluation and practical training, with documentary evidence and explicit limits." /><ProjectGrid /><div className="scope-note"><strong>Personal proof of work</strong><p>Project documents, historical reports and AI-assisted synthetic examples are kept distinct. They do not represent paid AI evaluator assignments or independent user validation.</p></div></>;
}
