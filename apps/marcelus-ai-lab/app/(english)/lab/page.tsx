import { type LocalizedProps } from '@/data/i18n';
import { PageHeading } from '@/components/portfolio';
import { getSample } from '@/data/fixtures';
import { VerumLab } from '@/components/demos';

import { pageMetadata } from '@/data/site-metadata';
export const metadata = pageMetadata('/lab/', 'en', 'AI Evaluation Lab');
export default async function LabPage({ params }: LocalizedProps) {
  const { locale = 'en' } = await params;
  return <><PageHeading locale={locale} label="Fact-check dossier" title="AI Evaluation Lab" description="Check denominators, percentage points and a causal claim against dated Eurostat publications." /><VerumLab locale={locale} samples={['CULTURE_BAD', 'CULTURE_FIXED', 'A', 'B', 'C', 'D', 'B1_A', 'B1_B', 'UNKNOWN'].map(getSample)} /></>;
}
