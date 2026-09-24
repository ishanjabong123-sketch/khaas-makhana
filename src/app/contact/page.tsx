import { Suspense } from 'react';
import type { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';
import PageShell from '@/components/layout/PageShell';

export const metadata: Metadata = {
  title: {
    absolute: 'Contact Khaas Makhana | Request Bulk Quote',
  },
  description:
    'Contact Khaas Makhana for bulk makhana pricing, product samples, private label packaging, and export order support from Bihar.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Khaas Makhana | Request Bulk Quote',
    description:
      'Contact Khaas Makhana for bulk makhana pricing, product samples, private label packaging, and export order support from Bihar.',
    url: '/contact',
  },
};

type ContactSearchParams = {
  product?: string | string[];
  scroll?: string | string[];
};

const Contact = async ({
  searchParams,
}: {
  searchParams?: Promise<ContactSearchParams>;
}) => {
  const params = await searchParams;
  const product =
    typeof params?.product === 'string' ? params.product : undefined;
  const scroll = typeof params?.scroll === 'string' ? params.scroll : undefined;

  return (
    <PageShell mainClassName="pt-20">
      <Suspense fallback={null}>
        <ContactSection
          initialProduct={product}
          shouldScrollToForm={scroll === 'form'}
          titleAs="h1"
        />
      </Suspense>
    </PageShell>
  );
};

export default Contact;
