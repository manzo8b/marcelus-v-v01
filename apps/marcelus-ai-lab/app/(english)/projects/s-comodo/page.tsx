import { SComodoOverview } from '@/components/s-comodo-overview';
import { pageMetadata } from '@/data/site-metadata';

export const metadata = pageMetadata('/projects/s-comodo/', 'en', 'S-COMODO — Independent Editorial Project', 'Independent editorial website with reviewed articles, source references, historical context and transparent human oversight of AI-assisted writing.');
export default function SComodoPage() { return <SComodoOverview locale="en" />; }
