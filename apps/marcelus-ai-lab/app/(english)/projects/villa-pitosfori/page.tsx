import { VillaPitosforiOverview } from '@/components/villa-pitosfori';
import { pageMetadata } from '@/data/site-metadata';

export const metadata = pageMetadata('/projects/villa-pitosfori/', 'en', "Villa All'Ombra dei Pitosfori — Website project", 'Website creation project for a holiday villa in Salento. Real-world hospitality website, with a link to the published project.');
export default function VillaPage() {return <VillaPitosforiOverview locale="en" />;}
