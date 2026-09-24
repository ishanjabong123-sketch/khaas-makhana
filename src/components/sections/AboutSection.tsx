import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Shield, Globe2, Heart } from 'lucide-react';
import Image from 'next/image';
import processingImage from '@/assets/processing-facility.jpg';

const AboutSection = ({ titleAs = 'h2' }: { titleAs?: 'h1' | 'h2' }) => {
  const TitleTag = titleAs;
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
    <section id="about" className="bg-secondary/30 py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center animate-fade-in-up sm:mb-16">
          <Badge variant="outline" className="mb-4">
            About Khaas Makhana
          </Badge>
          <TitleTag className="mb-6 text-3xl font-bold leading-tight sm:text-4xl">
            The Global Hub of
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {' '}
              Premium Makhana
            </span>
          </TitleTag>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-xl">
            From the fertile wetlands of Purnia, Bihar - the world's largest
            makhana producing region - we bring you the finest quality fox nuts
            with authentic taste and superior nutrition.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '120ms' }}>
            <div className="relative overflow-hidden rounded-xl shadow-premium sm:rounded-2xl">
              <Image
                src={processingImage}
                alt="Makhana processing facility"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-[320px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>

            {/* Floating Stats Card */}
            <Card className="absolute bottom-4 right-4 max-w-[calc(100%-2rem)] border-accent/20 bg-white shadow-glow sm:-bottom-6 sm:-right-6 sm:max-w-none">
              <CardContent className="p-4 text-center sm:p-6">
                <div className="mb-1 text-2xl font-bold text-primary sm:mb-2 sm:text-3xl">
                  50+
                </div>
                <div className="text-sm text-muted-foreground">
                  Tons Exported Annually
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '220ms' }}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold leading-tight sm:text-3xl">
                Why Choose Purnia Makhana?
              </h3>
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
                    className="bg-primary/10 text-primary transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group border-none shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-xl md:hover:scale-[1.02] animate-fade-in-up"
              style={{ animationDelay: `${300 + index * 80}ms` }}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
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
