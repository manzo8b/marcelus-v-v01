import { LegalPage } from '@/components/legal-pages';
import { pageMetadata } from '@/data/site-metadata';

export const metadata = { ...pageMetadata('/legal/', 'en', 'Legal notice', 'Personal portfolio, ownership, copyright, third-party materials and documented limits.'), robots: { index: false, follow: false } };

export default function Page() {
  return <LegalPage locale="en" kind="notice" />;
}
