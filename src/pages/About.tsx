import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutSection from '@/components/sections/AboutSection';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;