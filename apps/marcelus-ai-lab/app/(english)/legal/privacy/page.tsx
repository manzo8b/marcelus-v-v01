import { LegalPage } from '@/components/legal-pages';
import { pageMetadata } from '@/data/site-metadata';

export const metadata = pageMetadata('/legal/privacy/', 'en', 'Privacy notice', 'Information about data involved in browsing MARCELUS AI LAB and contacting its owner.'));

export default function Page() {
  return <LegalPage locale="en" kind="privacy" />;
}
