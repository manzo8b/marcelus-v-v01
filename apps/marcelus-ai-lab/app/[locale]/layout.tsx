import { notFound } from 'next/navigation';
import SiteLayout, { siteMetadata } from '@/components/site-layout';
export const metadata = siteMetadata;
export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== 'it' && locale !== 'es') notFound();
  return <SiteLayout locale={locale}>{children}</SiteLayout>;
}
