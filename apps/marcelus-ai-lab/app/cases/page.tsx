import { CaseList, PageHeading } from '@/components/portfolio';
export const metadata = { title: 'Case studies' };
export default function CasesPage() {
  return <><PageHeading label="Proof of work" title="Case studies" description="Three documented, AI-assisted synthetic cases, with source material and explicit limits." /><CaseList /><div className="scope-note"><strong>Evidence, not a client claim</strong><p>These cases demonstrate an approach to evaluation and training. They are not paid client engagements or independently validated outcomes.</p></div></>;
}
