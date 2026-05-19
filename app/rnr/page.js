import { notFound } from 'next/navigation';
import RnRPage from './RnRPage';
import { isPageLive } from '@/lib/page-status';

export const metadata = {
  title: 'Rewards & Recognition',
  description: 'AIESEC India national RnR dashboard — tier standings, portfolio rankings, and recognition for every LC.',
};

export default function Page() {
  if (!isPageLive('/rnr')) notFound();
  return <RnRPage />;
}
