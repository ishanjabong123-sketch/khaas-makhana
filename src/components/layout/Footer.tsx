import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Export Process', href: '/export-process' },
    { name: 'Contact', href: '/contact' },
  ];

  const products = [
    'Premium Grade A+',
    'Standard Grade A',
    'Commercial Grade B',
    'Custom Packaging',
    'Organic Certification',
  ];

  const certifications = [
    'FSSAI Certified',
    'Export License',
    'ISO 22000',
    'HACCP Compliant',
    'Organic Certified',
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Khaas Makhana</h3>
              <p className="text-primary-foreground/80 text-sm">
                Premium Fox Nut Exporters
              </p>
              <Badge
                variant="secondary"
                className="mt-2 bg-accent text-accent-foreground"
              >
                From Bihar to the World
              </Badge>
            </div>

            <p className="text-primary-foreground/70 leading-relaxed">
              Leading exporters of premium quality makhana from Purnia, Bihar.
              Trusted by international buyers for consistent quality and
              reliable supply.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground/70 hover:text-accent"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground/70 hover:text-accent"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground/70 hover:text-accent"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground/70 hover:text-accent"
              >
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Our Products</h4>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index} className="text-primary-foreground/70 text-sm">
                  {product}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contact Information</h4>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80 text-sm font-medium">
                    Office Address
                  </p>
                  <p className="text-primary-foreground/70 text-sm">
                    Purnia, Bihar, India
                    <br />
                    Pin: 854301
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-primary-foreground/80 text-sm font-medium">
                    Phone
                  </p>
                  <p className="text-primary-foreground/70 text-sm">
                    +91-70154-12372
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-primary-foreground/80 text-sm font-medium">
                    Email
                  </p>
                  <p className="text-primary-foreground/70 text-sm">
                    export@khaasmakhana.com
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-primary-foreground/80">
                Certifications:
              </p>
              <div className="flex flex-wrap gap-1">
                {certifications.map((cert, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-xs border-primary-foreground/30 text-primary-foreground/70"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-primary-foreground/70 text-sm">
                © 2024 Khaas Makhana. All rights reserved.
              </p>
              <p className="text-primary-foreground/60 text-xs mt-1">
                Premium makhana exporters from Purnia, Bihar to the world.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <Globe className="h-4 w-4" />
                <span>Serving 25+ Countries</span>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-primary-foreground/70 hover:text-accent"
              >
                <ArrowUp className="h-4 w-4 mr-1" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
