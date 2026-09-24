import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import ScrollToTop from '@/hooks/use-scroll-to-top';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ExportProcess from './pages/ExportProcess';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

const pageMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Khaas Makhana | Premium Fox Nut Exporters',
    description:
      'Premium makhana exporters from Purnia, Bihar, supplying sorted fox nuts for bulk buyers, private labels, and global food businesses.',
  },
  '/about': {
    title: 'About Khaas Makhana | Bihar Makhana Exporters',
    description:
      'Learn about Khaas Makhana, a Purnia, Bihar based fox nut supplier focused on premium makhana sourcing, grading, and export support.',
  },
  '/products': {
    title: 'Makhana Products | Bulk Fox Nut Grades',
    description:
      'Explore export premium, retail premium, and commercial makhana grades for wholesale, food processing, private label, and global bulk orders.',
  },
  '/export-process': {
    title: 'Makhana Export Process | Khaas Makhana',
    description:
      'See how Khaas Makhana supports bulk fox nut buyers with sourcing, grading, packaging, documentation, and export logistics.',
  },
  '/contact': {
    title: 'Contact Khaas Makhana | Request Bulk Quote',
    description:
      'Contact Khaas Makhana for bulk makhana pricing, product samples, private label packaging, and export order support from Bihar.',
  },
};

const setMetaContent = (selector: string, content: string) => {
  const element = document.querySelector<HTMLMetaElement>(selector);
  if (element) {
    element.content = content;
  }
};

const MetaManager = () => {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.replace(/\/$/, '') || '/';
    const meta = pageMeta[pathname] || {
      title: 'Khaas Makhana | Premium Makhana Exporters',
      description:
        'Khaas Makhana supplies premium fox nuts from Purnia, Bihar for bulk buyers, food brands, distributors, and private labels.',
    };
    const canonicalUrl =
      pathname === '/'
        ? 'https://khaasmakhana.com/'
        : `https://khaasmakhana.com${pathname}`;
    const canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );

    document.title = meta.title;
    setMetaContent('meta[name="description"]', meta.description);
    setMetaContent('meta[property="og:title"]', meta.title);
    setMetaContent('meta[property="og:description"]', meta.description);
    setMetaContent('meta[property="og:url"]', canonicalUrl);
    setMetaContent('meta[name="twitter:title"]', meta.title);
    setMetaContent('meta[name="twitter:description"]', meta.description);

    if (canonical) {
      canonical.href = canonicalUrl;
    }
  }, [location.pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MetaManager />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/export-process" element={<ExportProcess />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
