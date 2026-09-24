import { Suspense } from 'react';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import HeroSection from '@/components/sections/HeroSection';
import ProductsSection from '@/components/sections/ProductsSection';
import PageShell from '@/components/layout/PageShell';

const Home = () => {
  return (
    <PageShell>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <Suspense fallback={null}>
        <ContactSection />
      </Suspense>
    </PageShell>
  );
};

export default Home;
