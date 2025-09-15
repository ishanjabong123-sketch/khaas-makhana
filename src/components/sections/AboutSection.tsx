import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Shield, Globe2, Heart } from 'lucide-react';
import processingImage from '@/assets/processing-facility.jpg';

const AboutSection = () => {
  const values = [
    {
      icon: Leaf,
      title: '100% Organic',
      description:
        "Naturally grown without chemicals, preserving the authentic taste and nutrition of Bihar's premium makhana.",
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description:
        'Rigorous quality checks and international certifications ensure every batch meets global export standards.',
    },
    {
      icon: Globe2,
      title: 'Global Reach',
      description:
        'Serving 25+ countries with reliable supply chain and timely delivery for bulk international orders.',
    },
    {
      icon: Heart,
      title: 'Heritage & Trust',
      description:
        "15+ years of expertise in makhana cultivation and processing, rooted in Bihar's agricultural heritage.",
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
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            About Khaas Makhana
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            The Global Hub of
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {' '}
              Premium Makhana
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From the fertile wetlands of Purnia, Bihar - the world's largest
            makhana producing region - we bring you the finest quality fox nuts
            with authentic taste and superior nutrition.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-premium">
              <img
                src={processingImage}
                alt="Makhana processing facility"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>

            {/* Floating Stats Card */}
            <Card className="absolute -bottom-6 -right-6 bg-white shadow-glow border-accent/20">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">
                  Tons Exported Annually
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Why Choose Purnia Makhana?</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Purnia district in Bihar produces over 80% of the world's
                  makhana, thanks to its unique geographical conditions and
                  centuries-old cultivation techniques. Our region's wetlands
                  provide the perfect ecosystem for growing the highest quality
                  fox nuts.
                </p>
                <p>
                  At Khaas Makhana, we work directly with local farmers,
                  ensuring fair trade practices while maintaining the superior
                  quality that has made Bihar makhana famous worldwide.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">
                Certifications & Standards
              </h4>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-primary/10 text-primary"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
