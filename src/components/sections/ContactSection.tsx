import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Clock,
  Package,
  CheckCircle,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    productType: '',
    quantity: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const productOptions = [
    { value: '>21 mm', label: '6+ or 7 Suta Handpicked ( > 21 mm )' },
    { value: '18–21 mm', label: '6 Suta Normal + Handpicked ( 18–21 mm )' },
    {
      value: '15-18mm',
      label: '3/3+ 4/4+ 5/5+ Suta Normal or Handpicked ( 15-18mm )',
    },
  ];

  useEffect(() => {
    // Read URL parameter for product selection
    const urlParams = new URLSearchParams(window.location.search);
    const productParam = urlParams.get('product');
    if (productParam) {
      setFormData((prev) => ({ ...prev, productType: productParam }));
    }

    // Only scroll to form if there's a product parameter or scroll flag
    const shouldScroll = productParam || urlParams.get('scroll') === 'form';
    if (shouldScroll) {
      setTimeout(() => {
        const formContainer = document.querySelector('#contact-form');
        if (formContainer) {
          formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }

    const handleProductSelection = (event: CustomEvent) => {
      setFormData((prev) => ({ ...prev, productType: event.detail }));
    };

    window.addEventListener(
      'selectProduct',
      handleProductSelection as EventListener
    );
    return () => {
      window.removeEventListener(
        'selectProduct',
        handleProductSelection as EventListener
      );
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formDataObj = new FormData(form);

    try {
      await fetch('/', {
        method: 'POST',
        body: formDataObj,
      });

      toast({
        title: 'Quote Request Submitted!',
        description:
          "We'll contact you within 24 hours with pricing and availability.",
        duration: 5000,
      });

      setFormData({
        name: '',
        email: '',
        company: '',
        country: '',
        productType: '',
        quantity: '',
        message: '',
      });
    } catch (err) {
      toast({
        title: 'Error',
        description: 'Something went wrong while sending your request.',
        duration: 5000,
      });
    }

    setIsSubmitting(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91-87084-99295',
      description: 'Mon-Sat, 9AM-6PM IST',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'khaasmakhana@gmail.com',
      description: '24/7 Email Support',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Purnia, Bihar, India',
      description: 'Makhana Capital of the World',
    },
  ];

  const whatsappNumber = '+918708499295';
  const whatsappMessage =
    "Hi! I'm interested in bulk makhana export. Please share pricing and availability.";

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Ready to
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {' '}
              Start Importing?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact us for bulk pricing, product samples, and custom packaging
            solutions. Our export team is ready to serve international buyers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card id="contact-form" className="shadow-premium scroll-mt-24">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-6 w-6 text-accent" />
                Request Bulk Quote
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmit}
                name="quote-request"
                method="POST"
                data-netlify="true"
                className="space-y-6"
              >
                {/* hidden input for Netlify */}
                <input type="hidden" name="form-name" value="quote-request" />

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      placeholder="Your company name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country *</Label>
                    <Input
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      placeholder="Your country"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Product Type *</Label>
                  <div className="grid grid-cols-1 gap-3">
                    {productOptions.map((option) => (
                      <div
                        key={option.value}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="radio"
                          id={option.value}
                          name="productType"
                          value={option.value}
                          checked={formData.productType === option.value}
                          onChange={handleInputChange}
                          required
                          className="w-4 h-4 text-accent border-gray-300 focus:ring-accent focus:ring-2 accent-accent outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus:shadow-none"
                          style={{
                            boxShadow: 'none',
                            outline: 'none',
                          }}
                        />
                        <Label
                          htmlFor={option.value}
                          className="cursor-pointer"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">Required Quantity *</Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., 10 tons, 500 kg, etc."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Requirements</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Specific requirements, preferred grades, packaging needs, delivery timeline, etc."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="btn-accent w-full"
                  disabled={isSubmitting}
                  size="lg"
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Submit Quote Request
                    </>
                  )}
                </Button>

                <div className="text-center pt-4">
                  <p className="text-sm text-muted-foreground">
                    We'll respond within 24 hours with pricing and availability
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{info.title}</h4>
                        <p className="text-primary font-medium">{info.value}</p>
                        <p className="text-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">
                  Quick WhatsApp Inquiry
                </h4>
                <p className="text-muted-foreground mb-4">
                  Get instant response for urgent bulk orders and pricing
                  inquiries
                </p>
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() =>
                    window.open(
                      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        whatsappMessage
                      )}`,
                      '_blank'
                    )
                  }
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Business Hours & Features */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-sm text-muted-foreground">
                      Monday - Saturday: 9:00 AM - 6:00 PM (IST)
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  {/* <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Free product samples available</span>
                  </div> */}
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Custom packaging solutions</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Export documentation support</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Global shipping & logistics</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
