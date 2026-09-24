import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PageShell from '@/components/layout/PageShell';
import { Stepper } from '@/components/ui/stepper';
import { CheckCircle, Package, Ship, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: {
    absolute: 'Makhana Export Process | Khaas Makhana',
  },
  description:
    'See how Khaas Makhana supports bulk fox nut buyers with sourcing, grading, packaging, documentation, and export logistics.',
  alternates: {
    canonical: '/export-process',
  },
  openGraph: {
    title: 'Makhana Export Process | Khaas Makhana',
    description:
      'See how Khaas Makhana supports bulk fox nut buyers with sourcing, grading, packaging, documentation, and export logistics.',
    url: '/export-process',
  },
};

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
    <PageShell mainClassName="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
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

          <div className="mb-16">
            <Stepper steps={processSteps} />
          </div>

          <Card className="bg-secondary/50 mb-16">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Quality Certifications</CardTitle>
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

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              ['25+', 'Countries Exported'],
              ['50+', 'Tons Annual Export'],
              ['99.8%', 'Quality Success Rate'],
              ['15+', 'Years Experience'],
            ].map(([value, label]) => (
              <Card key={label} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary">
                    {value}
                  </div>
                  <div className="text-muted-foreground">{label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-none">
            <CardContent className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">
                Ready to Start Exporting?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Partner with us for reliable, high-quality makhana exports. Our
                experienced team will guide you through the entire process.
              </p>
              <Button asChild size="lg" className="btn-accent">
                <a href="/contact?scroll=form">Get Export Quote</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageShell>
  );
};

export default ExportProcess;
