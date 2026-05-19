import { notFound } from 'next/navigation';
import AiesecWayPage from './AiesecWayPage';
import { isPageLive } from '@/lib/page-status';

export const metadata = {
  title: 'The AIESEC Way',
  description: 'The guide that explains the purpose of our existence and the unique way we achieve it as an organisation — our vision, who we serve, our method, and what we offer.',
};

export default function Page() {
  if (!isPageLive('/aiesec-way')) notFound();
  return <AiesecWayPage />;
}
