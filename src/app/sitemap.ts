import type { MetadataRoute } from 'next';

const siteUrl = 'https://khaasmakhana.com';

const sitemap = (): MetadataRoute.Sitemap => {
  const routes = [
    { path: '/', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/products', priority: 0.9, changeFrequency: 'weekly' as const },
    {
      path: '/export-process',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path === '/' ? '' : route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
};

export default sitemap;
