'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const hasSolidHeader = isScrolled || !isHomePage || isMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Export Process', href: '/export-process' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        hasSolidHeader
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-shrink-0 items-center space-x-1 transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image
              src="/logo.png"
              alt="Khaas Makhana Logo"
              width={64}
              height={64}
              preload={isHomePage}
              className="h-12 w-auto sm:h-14 lg:h-16"
            />
            <div className="flex flex-col">
              <div className="text-xl font-bold text-accent sm:text-2xl lg:text-3xl">
                Khaas Makhana
              </div>
              <p
                className={`text-xs transition-colors duration-300 ${
                  hasSolidHeader ? 'text-muted-foreground' : 'text-white/70'
                }`}
              >
                Premium Fox Nut Exporters
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-medium transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  hasSolidHeader
                    ? 'text-foreground hover:text-primary'
                    : 'text-white hover:text-accent'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div
              className={`flex items-center space-x-2 text-sm transition-colors duration-300 ${
                hasSolidHeader ? 'text-muted-foreground' : 'text-white/70'
              }`}
            >
              <Phone className="h-4 w-4" />
              <span>+91-87084-99295</span>
            </div>
            <Button asChild variant="default" className="btn-premium">
              <Link href="/contact?scroll=form">Get Bulk Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className={`relative rounded-full transition-all duration-300 ${
                hasSolidHeader ? 'text-foreground' : 'text-white'
              } hover:bg-accent/15 hover:text-accent`}
            >
              <Menu
                className={`h-6 w-6 transition-all duration-300 ${
                  isMenuOpen
                    ? 'rotate-90 scale-75 opacity-0'
                    : 'rotate-0 scale-100 opacity-100'
                }`}
              />
              <X
                className={`absolute h-6 w-6 transition-all duration-300 ${
                  isMenuOpen
                    ? 'rotate-0 scale-100 opacity-100'
                    : '-rotate-90 scale-75 opacity-0'
                }`}
              />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          aria-hidden={!isMenuOpen}
          className={`overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-out md:hidden ${
            isMenuOpen
              ? 'max-h-[460px] translate-y-0 opacity-100'
              : 'pointer-events-none max-h-0 -translate-y-2 opacity-0'
          }`}
        >
          <div className="pb-5 pt-2">
            <nav className="flex flex-col space-y-2 rounded-xl border border-border/80 bg-white/95 p-3 shadow-xl backdrop-blur-xl">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`rounded-lg px-3 py-3 font-medium transition-all duration-300 hover:bg-secondary hover:text-primary ${
                    pathname === item.href
                      ? 'bg-secondary text-primary'
                      : 'text-foreground'
                  }`}
                  tabIndex={isMenuOpen ? 0 : -1}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <Button
                  asChild
                  variant="default"
                  className="btn-premium w-full"
                >
                  <Link
                    href="/contact?scroll=form"
                    tabIndex={isMenuOpen ? 0 : -1}
                  >
                    Get Bulk Quote
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
