import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CaseList, PageHeading, PublicCv } from '@/components/portfolio';
import { profile } from '@/data/portfolio';
export const metadata = { title: '60 second overview' };
export default function RecruiterPage() {
  return <><PageHeading label="60 second overview" title={profile.name} description={profile.role} /><dl className="recruiter-summary"><div><dt>Background</dt><dd>Operations, team coordination and professional training.</dd></div><div><dt>What I build</dt><dd>Structured prompts, evaluation rubrics, training materials and practical workflows.</dd></div><div><dt>Current direction</dt><dd>{profile.targets.join(' / ')}</dd></div><div><dt>Proof of work</dt><dd>Three personal projects, annotated synthetic cases and historical reports with explicit limits.</dd></div></dl><CaseList /><div className="document-links"><Link className="button button-primary" href="/lab/">Open the evaluation example<ArrowRight size={16} /></Link><PublicCv /></div></>;
}
