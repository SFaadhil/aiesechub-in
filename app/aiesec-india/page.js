import { notFound } from 'next/navigation';
import AiesecIndiaPage from './AiesecIndiaPage';
import { isPageLive } from '@/lib/page-status';
import { fetchCompendium } from '@/lib/sheets';

export const revalidate = 60;

export const metadata = {
  title: 'AIESEC in India',
  description: 'Learn about AIESEC in India — our history, Managing Committee, Board of Advisors, and governing Compendium.',
};

export default async function Page() {
  if (!isPageLive('/aiesec-india')) notFound();
  const compendium = await fetchCompendium();
  return <AiesecIndiaPage compendium={compendium} />;
}
