'use client';

import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Globe,
  Award,
  Users,
  Shield,
  CheckCircle,
} from 'lucide-react';
import Link from 'next/link';
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
      className="relative flex min-h-[100svh] items-center overflow-hidden py-24 sm:py-28 lg:py-0"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage.src})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Content */}
          <div className="space-y-6 animate-fade-in-up sm:space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                From Bihar to the{' '}
                <span className="bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
                  World
                </span>
              </h1>
              <h2 className="text-lg font-medium text-white/90 sm:text-xl lg:text-2xl">
                Premium Makhana Exporters
              </h2>
              <p className="max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
                Delivering the finest quality fox nuts from the fertile lands of
                Purnia, Bihar. Trusted by international buyers for premium
                organic makhana with global export standards.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="btn-accent group w-full sm:w-auto">
                <Link href="/contact?scroll=form">
                  Get Bulk Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-white/80 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-primary sm:w-auto"
              >
                <Link href="/products">View Products</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 pt-6 sm:gap-6 sm:pt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-white/5 p-2 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10 sm:bg-transparent sm:p-0"
                >
                  <stat.icon className="mx-auto mb-2 h-6 w-6 text-accent sm:h-8 sm:w-8" />
                  <div className="text-xl font-bold text-white sm:text-2xl">
                    {stat.value}
                  </div>
                  <div className="text-xs leading-snug text-white/70 sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Product Showcase Gallery */}
          <div
            className="relative hidden h-[600px] animate-fade-in-up lg:block"
            style={{ animationDelay: '180ms' }}
          >
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Main Product Image */}
              <div className="group relative overflow-hidden rounded-2xl shadow-premium transition-transform duration-500 hover:-translate-y-1">
                <Image
                  src={farmingMakhana}
                  alt="Premium Makhana Varieties"
                  sizes="25vw"
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
              <div className="group relative overflow-hidden rounded-2xl shadow-premium transition-transform duration-500 hover:-translate-y-1">
                <Image
                  src={processingFacility}
                  alt="Modern Processing Facility"
                  sizes="25vw"
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
              <div className="col-span-2 flex items-center justify-center gap-6 rounded-2xl bg-white/10 p-6 shadow-premium backdrop-blur-sm">
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
