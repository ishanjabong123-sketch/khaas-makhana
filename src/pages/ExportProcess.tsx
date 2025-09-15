import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Stepper } from '@/components/ui/stepper';
import { CheckCircle, Package, Ship, Globe, Download } from 'lucide-react';

const ExportProcess = () => {
  const processSteps = [
    {
      title: 'Sourcing & Selection',
      description:
        "Direct sourcing from certified farmers in Bihar's best regions",
      details: [
        'Quality assessment at farm level',
        'Size grading',
        'Moisture content testing',
      ],
      icon: CheckCircle,
    },
    {
      title: 'Processing & Packaging',
      description: 'Modern facility processing with international standards',
      details: [
        'Cleaning and sorting',
        'Quality control testing',
        'Vacuum packaging',
      ],
      icon: Package,
    },
    {
      title: 'Export Documentation',
      description: 'Complete documentation and certification process',
      details: [
        'Export certificates',
        'Quality certifications',
        'Customs documentation',
      ],
      icon: Ship,
    },
    {
      title: 'Global Delivery',
      description: 'Reliable shipping to international destinations',
      details: [
        'Container loading',
        'Shipping coordination',
        'Delivery tracking',
      ],
      icon: Globe,
    },
  ];

  const certifications = [
    'GST',
    'FSSAI',
    'APEDA',
    'Halal',
    'Phytosanitary Certificate',
    'Lab Test Reports on request',
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Export Process
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                From Farm to{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Global Markets
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our streamlined export process ensures premium quality makhana
                reaches international buyers with complete traceability and
                compliance.
              </p>
            </div>

            {/* Process Stepper */}
            <div className="mb-16">
              <Stepper steps={processSteps} />
            </div>

            {/* Certifications */}
            <Card className="bg-secondary/50 mb-16">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">
                  Quality Certifications
                </CardTitle>
                <p className="text-muted-foreground">
                  All our exports are backed by international quality
                  certifications
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-white rounded-lg"
                    >
                      <CheckCircle className="h-5 w-5 text-accent" />
                      <span className="font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Export Statistics */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <div className="text-muted-foreground">
                    Countries Exported
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-muted-foreground">
                    Tons Annual Export
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary">99.8%</div>
                  <div className="text-muted-foreground">
                    Quality Success Rate
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-none">
              <CardContent className="text-center py-12">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Start Exporting?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Partner with us for reliable, high-quality makhana exports.
                  Our experienced team will guide you through the entire
                  process.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="btn-accent">
                    Get Export Quote
                  </Button>
                  {/* <Button variant="outline" size="lg">
                    <Download className="mr-2 h-4 w-4" />
                    Download Export Guide
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ExportProcess;
