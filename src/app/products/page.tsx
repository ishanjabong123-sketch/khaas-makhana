import type { Metadata } from 'next';
import PageShell from '@/components/layout/PageShell';
import ProductsSection from '@/components/sections/ProductsSection';

export const metadata: Metadata = {
  title: {
    absolute: 'Makhana Products | Bulk Fox Nut Grades',
  },
  description:
    'Explore export premium, retail premium, and commercial makhana grades for wholesale, food processing, private label, and global bulk orders.',
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: 'Makhana Products | Bulk Fox Nut Grades',
    description:
      'Explore export premium, retail premium, and commercial makhana grades for wholesale, food processing, private label, and global bulk orders.',
    url: '/products',
  },
};

const Products = () => {
  return (
    <PageShell mainClassName="pt-20">
      <ProductsSection titleAs="h1" />
    </PageShell>
  );
};

export default Products;
