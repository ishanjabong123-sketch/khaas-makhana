import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Package, Award, Download } from 'lucide-react';
import varietiesImage from '@/assets/makhana-varieties.jpg';

const ProductsSection = () => {
  const products = [
    {
      category: 'Export Premium',
      grade: '6+ or 7 Suta Handpicked',
      size: '> 21 mm',
      description:
        'Extra-large, export-quality makhana with uniform round puff, creamy white color, and minimal breakage.',
      features: ['Extra Large Size', 'Export Grade', 'Premium Quality'],
      price: 'Contact for bulk pricing',
      popular: true,
    },
    {
      category: 'Retail Premium',
      grade: '6 Suta Normal + Handpicked',
      size: '18–21 mm',
      description:
        'Large-size makhana suitable for retail packs and wholesale distribution, consistent in size and quality.',
      features: ['Large Size', 'Consistent Quality', 'Retail Ready'],
      price: 'Contact for bulk pricing',
    },
    {
      category: 'Commercial',
      grade: '3/3+ 4/4+ 5/5+ Suta Normal or Handpicked',
      size: '15-18mm',
      description:
        'Medium-size makhana, cost-effective for food processing, flavored snacks, and value-added products.',
      features: ['Medium Size', 'Processing Grade', 'Bulk Orders'],
      price: 'Contact for bulk pricing',
    },
  ];

  const handleRequestQuote = (category: string) => {
    window.location.href = `/contact?product=${encodeURIComponent(category)}`;
  };

  const specifications = [
    { label: 'Moisture Content', value: 'Max 5-8%' },
    {
      label: 'Minimum Order Quantity (MOQ)',
      value: '1 Ton (1000 Kgs)',
    },

    {
      label: 'Shelf Life',
      value: '12 Months (in cool, dry, airtight storage)',
    },
    { label: 'Broken Seeds', value: 'Max 2%' },
    {
      label: 'Packaging Options',
      value:
        '10Kg / 25Kg PP Bags OR Vacuum / Nitrogen flush packets (for retail / private labels)',
      colRatio: 'md:col-span-2',
    },
  ];

  return (
    <section id="products" className="overflow-hidden py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center sm:mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4">
            Our Products
          </Badge>
          <h2 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl">
            Premium
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {' '}
              Makhana Varieties
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-xl">
            Carefully graded and sorted makhana available in different sizes and
            specifications to meet diverse international market requirements.
          </p>
        </div>

        {/* Hero Product Image */}
        <div
          className="relative mb-12 overflow-hidden rounded-xl shadow-premium sm:mb-16 sm:rounded-2xl animate-fade-in-up"
          style={{ animationDelay: '120ms' }}
        >
          <img
            src={varietiesImage}
            alt="Different varieties of premium makhana"
            className="h-[320px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[400px]"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary/90 via-primary/55 to-transparent p-5 sm:items-center sm:bg-gradient-to-r sm:from-primary/80 sm:via-primary/45 sm:to-transparent sm:p-8">
            <div className="max-w-xl text-white">
              <h3 className="mb-3 text-2xl font-bold leading-tight sm:mb-4 sm:text-3xl">
                Premium 6 / 6+ Suta Makhana (≈ 18–21 mm)
              </h3>
              <p className="text-sm leading-relaxed text-white/90 sm:mb-6 sm:text-lg">
                Extra-large, export-grade fox nuts, carefully sorted for premium
                markets — full round puff, minimal breakage, natural creamy
                white color, and long shelf life.
              </p>
              {/* <Button className="btn-accent">
                <Download className="mr-2 h-4 w-4" />
                Download Product Brochure
              </Button> */}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="mb-12 grid gap-6 md:grid-cols-3 lg:gap-8 sm:mb-16">
          {products.map((product, index) => (
            <Card
              key={index}
              className={`relative flex h-full flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-xl md:hover:scale-[1.02] animate-fade-in-up ${
                product.popular ? 'border-accent shadow-glow' : ''
              }`}
              style={{ animationDelay: `${180 + index * 90}ms` }}
            >
              {product.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl leading-tight sm:text-2xl">
                  {product.category}
                </CardTitle>
                <div className="mb-2 text-base font-medium leading-snug text-muted-foreground sm:text-lg">
                  {product.grade}
                </div>
                <div className="text-xl font-bold text-accent">
                  {product.size}
                </div>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col space-y-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Key Features:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {product.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-auto border-t pt-4">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-primary mb-3">
                      {product.price}
                    </div>
                    <Button
                      className={`w-full ${
                        product.popular ? 'btn-accent' : 'btn-premium'
                      }`}
                      onClick={() => handleRequestQuote(product.category)}
                    >
                      <Package className="mr-2 h-4 w-4" />
                      Request Quote
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specifications */}
        <Card
          className="overflow-hidden bg-secondary/50 shadow-premium animate-fade-in-up"
          style={{ animationDelay: '420ms' }}
        >
          <CardHeader className="text-center">
            <CardTitle className="flex flex-col items-center justify-center gap-2 text-xl leading-tight sm:flex-row sm:text-2xl">
              <Award className="h-6 w-6 text-accent" />
              Product Specifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:gap-6">
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className={`min-w-0 rounded-lg border border-border/60 bg-white/95 p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md ${
                    spec.colRatio || ''
                  }`}
                >
                  <div className="flex min-w-0 flex-col gap-1.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <span className="text-sm font-medium text-foreground/80 sm:text-base">
                      {spec.label}:
                    </span>
                    <span className="min-w-0 break-words text-sm font-semibold leading-relaxed text-primary sm:max-w-[62%] sm:text-right sm:text-base">
                      {spec.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                All products are carefully processed and packaged following
                international food safety standards.
              </p>
              {/* <Button variant="outline" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download Complete Specifications (PDF)
              </Button> */}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProductsSection;
