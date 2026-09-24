import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Providers from './providers';
import '@/index.css';

const siteUrl = 'https://khaasmakhana.com';
const siteDescription =
  'Premium makhana exporters from Purnia, Bihar, supplying sorted fox nuts for bulk buyers, private labels, and global food businesses.';

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Khaas Makhana',
      url: `${siteUrl}/`,
      logo: `${siteUrl}/logo.png`,
      description: siteDescription,
      email: 'khaasmakhana@gmail.com',
      telephone: '+91-87084-99295',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Purnia',
        addressRegion: 'Bihar',
        postalCode: '854301',
        addressCountry: 'IN',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-87084-99295',
        contactType: 'sales',
        areaServed: 'Worldwide',
        availableLanguage: ['en', 'hi'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: 'Khaas Makhana',
      publisher: {
        '@id': `${siteUrl}/#organization`,
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Khaas Makhana | Premium Fox Nut Exporters',
    template: '%s | Khaas Makhana',
  },
  description: siteDescription,
  keywords: [
    'makhana export',
    'fox nut supplier',
    'Bihar makhana',
    'Purnia makhana export',
    'organic fox nuts',
    'premium makhana bulk',
  ],
  authors: [{ name: 'Khaas Makhana' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'Khaas Makhana',
    title: 'Khaas Makhana | Premium Fox Nut Exporters',
    description: siteDescription,
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Khaas Makhana logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khaas Makhana | Premium Fox Nut Exporters',
    description: siteDescription,
    images: ['/logo.png'],
  },
  icons: {
    icon: [
      { url: '/favicon_io/favicon.ico' },
      {
        url: '/favicon_io/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon_io/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    apple: '/favicon_io/apple-touch-icon.png',
  },
  manifest: '/favicon_io/site.webmanifest',
};

export const viewport = {
  themeColor: '#2f573f',
  width: 'device-width',
  initialScale: 1,
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
