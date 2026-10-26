import { LegalPage } from '@/components/legal-pages';
import { pageMetadata } from '@/data/site-metadata';

export const metadata = pageMetadata('/legal/cookies/', 'en', 'Cookies and local technologies', 'Browser theme preference, localStorage and tracking disclosures.');

export default function Page() {
  return <LegalPage locale="en" kind="cookies" />;
}
