import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Award, Users, Globe, Heart } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              About BambuLab Ukraine
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner for cutting-edge 3D printing technology in Ukraine
            </p>
          </div>

          {/* Mission Section */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-3xl bg-gradient-card border border-border p-12 md:p-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground text-center leading-relaxed">
                  We are the official dealer of BambuLab in Ukraine, committed to bringing world-class 
                  3D printing technology to makers, engineers, educators, and businesses across the country. 
                  Our goal is to make advanced 3D printing accessible, reliable, and affordable for everyone.
                </p>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Official Dealer</h3>
                <p className="text-muted-foreground">
                  Authorized BambuLab dealer with genuine products and full manufacturer warranty
                </p>
              </div>

              <div className="text-center space-y-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Expert Support</h3>
                <p className="text-muted-foreground">
                  Dedicated technical support team ready to help with setup, troubleshooting, and maintenance
                </p>
              </div>

              <div className="text-center space-y-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Nationwide Delivery</h3>
                <p className="text-muted-foreground">
                  Fast and reliable shipping to all regions of Ukraine with tracking
                </p>
              </div>

              <div className="text-center space-y-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Customer First</h3>
                <p className="text-muted-foreground">
                  Your satisfaction is our priority with flexible payment options and responsive service
                </p>
              </div>
            </div>
          </section>

          {/* What We Offer Section */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground text-center mb-12">
                What We Offer
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-3">Premium Products</h3>
                  <p className="text-muted-foreground">
                    Complete range of BambuLab 3D printers, filaments, AMS units, and accessories
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-3">Technical Service</h3>
                  <p className="text-muted-foreground">
                    Professional maintenance, repairs, and upgrades for your 3D printers
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-3">Training & Tutorials</h3>
                  <p className="text-muted-foreground">
                    Comprehensive guides, video tutorials, and workshops for all skill levels
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-3">Business Solutions</h3>
                  <p className="text-muted-foreground">
                    Custom packages and support for educational institutions and businesses
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="max-w-3xl mx-auto rounded-3xl bg-gradient-card border border-border p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact our team today to find the perfect 3D printing solution for your needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+380000000000"
                  className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold"
                >
                  Call Us Now
                </a>
                <a
                  href="mailto:info@bambulab.ua"
                  className="inline-block px-8 py-3 rounded-lg border border-border hover:bg-foreground/10 transition-colors font-semibold"
                >
                  Email Us
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
