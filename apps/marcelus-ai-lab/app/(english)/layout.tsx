import SiteLayout, { siteMetadata } from '@/components/site-layout';
export const metadata = siteMetadata;
export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteLayout locale="en">{children}</SiteLayout>;
}
