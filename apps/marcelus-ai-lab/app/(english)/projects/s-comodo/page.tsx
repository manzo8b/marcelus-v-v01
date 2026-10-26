import { SComodoOverview } from '@/components/s-comodo-overview';
import { pageMetadata } from '@/data/site-metadata';

export const metadata = pageMetadata('/projects/s-comodo/', 'en', 'S-COMODO — Independent Editorial Project', 'Independent editorial project, in preparation. Historical context, verified sources and transparent AI assistance with human editorial review.');
export default function SComodoPage() { return <SComodoOverview locale="en" />; }
