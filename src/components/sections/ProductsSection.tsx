import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Package, Award, Download } from 'lucide-react';
import varietiesImage from '@/assets/makhana-varieties.jpg';

const ProductsSection = () => {
  const products = [
    {
      name: "Premium Grade A+",
      size: "20-22mm",
      description: "Largest size, perfect spherical shape, premium quality for international markets",
      features: ["Extra Large Size", "Perfect Shape", "Premium Quality", "Export Grade"],
      price: "Contact for bulk pricing",
      popular: true
    },
    {
      name: "Standard Grade A",
      size: "18-20mm", 
      description: "High quality makhana suitable for retail and wholesale distribution",
      features: ["Large Size", "Consistent Quality", "Good Value", "Retail Ready"],
      price: "Contact for bulk pricing"
    },
    {
      name: "Commercial Grade B",
      size: "15-18mm",
      description: "Cost-effective option for food processing and value-added products",
      features: ["Medium Size", "Processing Grade", "Cost Effective", "Bulk Orders"],
      price: "Contact for bulk pricing"
    }
  ];

  const specifications = [
    { label: "Moisture Content", value: "Max 10%" },
    { label: "Foreign Matter", value: "Max 0.5%" },
    { label: "Broken Seeds", value: "Max 2%" },
    { label: "Shelf Life", value: "12 Months" },
    { label: "Packaging", value: "25kg, 50kg bags" },
    { label: "Minimum Order", value: "1 Ton" }
  ];

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Our Products</Badge>
          <h2 className="text-4xl font-bold mb-6">
            Premium 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Makhana Varieties</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Carefully graded and sorted makhana available in different sizes and specifications 
            to meet diverse international market requirements.
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
              <h3 className="text-3xl font-bold mb-4">Grade A+ Premium Makhana</h3>
              <p className="text-lg mb-6">
                Hand-selected, perfectly shaped fox nuts representing the finest quality from Bihar's harvest.
              </p>
              <Button className="btn-accent">
                <Download className="mr-2 h-4 w-4" />
                Download Product Brochure
              </Button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 hover:scale-105 ${
              product.popular ? 'border-accent shadow-glow' : ''
            }`}>
              {product.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">{product.name}</CardTitle>
                <div className="text-accent font-bold text-xl">{product.size}</div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-sm">{product.description}</p>
                
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
                      className={`w-full ${product.popular ? 'btn-accent' : 'btn-premium'}`}
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
            <div className="grid md:grid-cols-3 gap-6">
              {specifications.map((spec, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-medium">{spec.label}:</span>
                  <span className="text-primary font-semibold">{spec.value}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                All products are carefully processed and packaged following international food safety standards.
              </p>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download Complete Specifications (PDF)
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProductsSection;