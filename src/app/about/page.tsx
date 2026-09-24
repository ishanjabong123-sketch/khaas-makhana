import type { Metadata } from 'next';
import AboutSection from '@/components/sections/AboutSection';
import PageShell from '@/components/layout/PageShell';

export const metadata: Metadata = {
  title: {
    absolute: 'About Khaas Makhana | Bihar Makhana Exporters',
  },
  description:
    'Learn about Khaas Makhana, a Purnia, Bihar based fox nut supplier focused on premium makhana sourcing, grading, and export support.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Khaas Makhana | Bihar Makhana Exporters',
    description:
      'Learn about Khaas Makhana, a Purnia, Bihar based fox nut supplier focused on premium makhana sourcing, grading, and export support.',
    url: '/about',
  },
};

const About = () => {
  return (
    <PageShell mainClassName="pt-20">
      <AboutSection titleAs="h1" />
    </PageShell>
  );
};

export default About;
