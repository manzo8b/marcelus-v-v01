import { HomeV2 } from '@/components/home-v2';
import { type LocalizedProps } from '@/data/i18n';
import { pageMetadata } from '@/data/site-metadata';

export const metadata = pageMetadata('/');

export default async function Home({ params }: LocalizedProps) {
  const { locale = 'en' } = await params;
  return <HomeV2 locale={locale} />;
}
