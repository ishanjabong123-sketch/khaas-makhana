import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import {
  ArrowRight,
  Globe,
  Award,
  Users,
  Shield,
  CheckCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-makhana.jpg';
import farmingMakhana from '@/assets/farming-makhana.jpg';
import processingFacility from '@/assets/processing-facility.jpg';

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const stats = [
    { icon: Globe, label: 'Countries Served', value: '5+' },
    { icon: Award, label: 'Years Experience', value: '5+' },
    { icon: Users, label: 'Happy Clients', value: '50+' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                From Bihar to the{' '}
                <span className="bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
                  World
                </span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-white/90 font-medium">
                Premium Makhana Exporters
              </h2>
              <p className="text-lg text-white/80 max-w-lg leading-relaxed">
                Delivering the finest quality fox nuts from the fertile lands of
                Purnia, Bihar. Trusted by international buyers for premium
                organic makhana with global export standards.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="btn-accent group">
                <Link to="/contact?scroll=form">
                  Get Bulk Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/80 text-white bg-white/10 hover:bg-white hover:text-primary backdrop-blur-sm"
              >
                <Link to="/products">View Products</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-accent" />
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Product Showcase Gallery */}
          <div className="hidden lg:block h-[600px] relative">
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Main Product Image */}
              <div className="relative group overflow-hidden rounded-2xl">
                <img
                  src={farmingMakhana}
                  alt="Premium Makhana Varieties"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-5 w-5 text-accent" />
                      <span className="font-semibold">Premium Quality</span>
                    </div>
                    <p className="text-sm opacity-90">Grade A Export Quality</p>
                  </div>
                </div>
              </div>

              {/* Processing Facility */}
              <div className="relative group overflow-hidden rounded-2xl">
                <img
                  src={processingFacility}
                  alt="Modern Processing Facility"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      <span className="font-semibold">Modern Facility</span>
                    </div>
                    <p className="text-sm opacity-90">
                      FSSAI Certified Processing
                    </p>
                  </div>
                </div>
              </div>

              {/* Quality Badges */}
              <div className="col-span-2 flex justify-center items-center gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-center">
                  <div className="bg-accent/20 rounded-full p-3 mb-2 mx-auto w-fit">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <p className="text-white font-medium text-sm">
                    FSSAI Certified
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-accent/20 rounded-full p-3 mb-2 mx-auto w-fit">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                  <p className="text-white font-medium text-sm">Organic</p>
                </div>
                <div className="text-center">
                  <div className="bg-accent/20 rounded-full p-3 mb-2 mx-auto w-fit">
                    <Globe className="h-6 w-6 text-accent" />
                  </div>
                  <p className="text-white font-medium text-sm">
                    Export Quality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`
          absolute bottom-8 left-1/2 transform -translate-x-1/2
          transition-opacity duration-500
          ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}
        `}
        aria-hidden="true"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
