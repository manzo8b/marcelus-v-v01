import { type LocalizedProps } from '@/data/i18n';
import { PageHeading } from '@/components/portfolio';
import { getSample } from '@/data/fixtures';
import { VerumDemo } from '@/components/demos';

export const metadata = { title: 'AI Evaluation Lab' };
export default async function LabPage({ params }: LocalizedProps) {
  const { locale = 'en' } = await params;
  return <><PageHeading locale={locale} label="Reference-based review" title="AI Evaluation Lab" description="How I review AI-generated content against explicit instructions and reference facts." /><VerumDemo locale={locale} samples={['CULTURE_BAD', 'CULTURE_FIXED', 'A', 'B', 'C', 'D', 'B1_A', 'B1_B', 'UNKNOWN'].map(getSample)} /></>;
}
