import { FreeResources } from '@/components/free-resources';
import { pageMetadata } from '@/data/site-metadata';

export const metadata = pageMetadata('/resources/', 'en', 'Free Resources — MARCELUS AI LAB', 'Download free and editable worksheets for checking AI responses, writing clear instructions and planning lessons. No registration required.');
export default function Resources() { return <FreeResources locale="en" />; }
