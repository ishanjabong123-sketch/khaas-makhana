import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Export Process', href: '/export-process' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center space-x-1">
            <img
              src="/logo.png"
              alt="Khaas Makhana Logo"
              className="h-14 w-auto lg:h-16"
            />
            <div className="flex flex-col">
              <h1 className="text-2xl lg:text-3xl text-accent  font-bold">
                Khaas Makhana
              </h1>
              <p
                className={`text-xs transition-colors duration-300 ${
                  isScrolled || !isHomePage
                    ? 'text-muted-foreground'
                    : 'text-white/70'
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
                to={item.href}
                className={` transition-colors duration-300 font-medium ${
                  isScrolled || !isHomePage
                    ? 'text-foreground hover:text-muted-foreground'
                    : 'text-white hover:text-gray-400'
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
                isScrolled || !isHomePage
                  ? 'text-muted-foreground'
                  : 'text-white/70'
              }`}
            >
              <Phone className="h-4 w-4" />
              <span>+91-87084-99295</span>
            </div>
            <Button asChild variant="default" className="btn-premium">
              <Link to="/contact?scroll=form">Get Bulk Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${
                isScrolled || !isHomePage ? 'text-foreground' : 'text-white'
              } hover:bg-white/10`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
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
                  <Link to="/contact?scroll=form">Get Bulk Quote</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
