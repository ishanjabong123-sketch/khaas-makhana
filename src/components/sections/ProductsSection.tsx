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
        '10Kg / 25Kg PP Bags OR Vaccum / Nitrogen flush packets (for retails / private labels)',
      colRatio: 'md:col-span-2',
    },
  ];

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Products
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Premium
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {' '}
              Makhana Varieties
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Carefully graded and sorted makhana available in different sizes and
            specifications to meet diverse international market requirements.
          </p>
        </div>

        {/* Hero Product Image */}
        <div className="relative mb-16 rounded-2xl overflow-hidden shadow-premium">
          <img
            src={varietiesImage}
            alt="Different varieties of premium makhana"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
            <div className="max-w-lg ml-8 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Premium 6 / 6+ Suta Makhana (≈ 18–21 mm)
              </h3>
              <p className="text-lg mb-6">
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
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                product.popular ? 'border-accent shadow-glow' : ''
              }`}
            >
              {product.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">{product.category}</CardTitle>
                <div className="text-lg font-medium text-muted-foreground mb-2">
                  {product.grade}
                </div>
                <div className="text-accent font-bold text-xl">
                  {product.size}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-sm">
                  {product.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {product.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t">
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
        <Card className="bg-secondary/50">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Award className="h-6 w-6 text-accent" />
              Product Specifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center p-3 bg-white rounded-lg ${
                    spec.colRatio || 'md:col-span-1 col-span-2'
                  }`}
                >
                  <span className="font-medium">{spec.label}:</span>
                  <span className="text-primary font-semibold">
                    {spec.value}
                  </span>
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
