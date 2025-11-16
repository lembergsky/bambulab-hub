import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, GraduationCap, Lightbulb, Target } from "lucide-react";
import { useEffect } from "react";
import x1CarbonShowcase from "@/assets/x1-carbon-showcase.png";
import a1Showcase from "@/assets/a1-showcase.png";
import a1AmsShowcase from "@/assets/a1-ams-showcase.png";
import a1DetailShowcase from "@/assets/a1-detail-showcase.png";
import filamentShowcase from "@/assets/filament-showcase.png";

const AboutUs = () => {
  useEffect(() => {
    // SEO meta tags
    document.title = "Ultimate Guide to 3D Printers - BambuLab Ukraine | Beginner to Professional";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Ultimate guide to 3D printers - from beginners to education. Discover affordable, high-quality 3D printers for personal, professional, and educational use.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Ultimate guide to 3D printers - from beginners to education. Discover affordable, high-quality 3D printers for personal, professional, and educational use.";
      document.head.appendChild(meta);
    }

    // JSON-LD structured data
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Ultimate Guide to 3D Printers",
      "description": "Comprehensive guide covering 3D printing for beginners, creative possibilities, and education",
      "author": {
        "@type": "Organization",
        "name": "BambuLab Ukraine"
      },
      "publisher": {
        "@type": "Organization",
        "name": "BambuLab Ukraine"
      }
    });
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center space-y-6 max-w-4xl mx-auto animate-fade-in">
            <Badge variant="secondary" className="mb-4">Ultimate Guide</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              The Ultimate Guide to 3D Printers
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              3D printing has initiated a new era of innovation thanks to its accessibility, customizations, efficiency, and affordability. Additive manufacturing is changing the way we make things, from prototypes all the way to end-use products. It has come a long way in the past 20 years and it becomes more affordable than ever. From healthcare to consumer goods, manufacturing, and construction, 3D printing is opening doors to assist the future of humanity.
            </p>
          </div>
        </section>

        {/* Key Sections */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">For Beginners</h2>
              <p className="text-muted-foreground">
                Desktop 3D printers have made it simple for hobbyists, with beginner-friendly options that simplify setup, printing, and finishing. The variety of affordable options available means anyone can start their 3D printing journey.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Creative Possibilities</h2>
              <p className="text-muted-foreground">
                Users can create almost endless variety of things, turning digital prototypes and 3D doodles into real objects from home. The only limit is your imagination.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Education Focus</h2>
              <p className="text-muted-foreground">
                3D printing in education teaches design thinking, empowers students to think like innovators, and exposes them to relevant technology. Successful classroom integration with dedicated 3D printing stations.
              </p>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="container mx-auto px-4 py-12">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        </div>

        {/* How to Choose Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              How to Choose Your 3D Printer
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12">
              To find one of the best 3D printers, start by figuring out two things — how experienced you are with 3D printing and what you plan to create with your printer.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Experience Level</h3>
                  <p className="text-muted-foreground">
                    Beginners should look for printers with automatic calibration and easy setup. Advanced users can explore models with more customization options.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Project Requirements</h3>
                  <p className="text-muted-foreground">
                    Consider the size, material type, and print quality you need. Prototyping requires speed, while display models need precision.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Budget Considerations</h3>
                  <p className="text-muted-foreground">
                    3D printers now come in various price ranges. Entry-level models start around $299, while professional-grade printers offer advanced features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="container mx-auto px-4 py-12">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        </div>

        {/* Featured Products Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Featured Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our range of professional 3D printers and materials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* X1 Carbon */}
            <article className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow">
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-background/50 to-background">
                <img
                  src={x1CarbonShowcase}
                  alt="BambuLab X1 Carbon 3D Printer - Professional CoreXY FDM printer with enclosed chamber"
                  className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <Badge variant="default" className="mb-2">Flagship Model</Badge>
                  <h3 className="text-2xl font-bold text-foreground">X1 Carbon</h3>
                  <p className="text-muted-foreground mt-2">
                    Professional-grade speed and precision with CoreXY motion system and active chamber heating.
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <p className="text-sm text-foreground italic">
                    "Incredible speed and quality. The CoreXY system delivers professional results every time."
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">- Professional User</p>
                </div>
              </div>
            </article>

            {/* A1 Printer */}
            <article className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow">
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-background/50 to-background">
                <img
                  src={a1Showcase}
                  alt="BambuLab A1 3D Printer - Affordable beginner-friendly FDM printer with automatic calibration"
                  className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <Badge variant="secondary" className="mb-2">Best for Beginners</Badge>
                  <h3 className="text-2xl font-bold text-foreground">A1 Series</h3>
                  <p className="text-muted-foreground mt-2">
                    Perfect entry point into 3D printing with automatic calibration and easy setup.
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <p className="text-sm text-foreground italic">
                    "Easy to assemble, great print at first time, tested on 170mm/s and works fine!"
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">- Happy Customer</p>
                </div>
              </div>
            </article>

            {/* A1 with AMS */}
            <article className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow">
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-background/50 to-background">
                <img
                  src={a1AmsShowcase}
                  alt="BambuLab A1 with AMS - Multi-color 3D printing system with automatic material switching"
                  className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <Badge variant="default" className="mb-2">Multi-Color</Badge>
                  <h3 className="text-2xl font-bold text-foreground">A1 + AMS</h3>
                  <p className="text-muted-foreground mt-2">
                    Multi-color printing capabilities with the Automatic Material System for vibrant creations.
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <p className="text-sm text-foreground italic">
                    "The AMS is a game changer! Multi-color prints are now effortless and beautiful."
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">- Creative Designer</p>
                </div>
              </div>
            </article>

            {/* A1 Detail */}
            <article className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow">
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-background/50 to-background">
                <img
                  src={a1DetailShowcase}
                  alt="BambuLab A1 3D Printer detailed view - showing compact design and user interface"
                  className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <Badge variant="secondary" className="mb-2">Compact Design</Badge>
                  <h3 className="text-2xl font-bold text-foreground">A1 Compact</h3>
                  <p className="text-muted-foreground mt-2">
                    Space-saving design perfect for home offices and small workshops.
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <p className="text-sm text-foreground italic">
                    "Perfect size for my desk. Doesn't take up much space but delivers big results."
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">- Home User</p>
                </div>
              </div>
            </article>

            {/* Filament */}
            <article className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow md:col-span-2">
              <div className="relative aspect-[2/1] overflow-hidden bg-gradient-to-br from-background/50 to-background">
                <img
                  src={filamentShowcase}
                  alt="BambuLab PLA filament spools in multiple colors - Basic and Matte finish, 2kg spools"
                  className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <Badge variant="default" className="mb-2">Premium Materials</Badge>
                  <h3 className="text-2xl font-bold text-foreground">PLA Filament Collection</h3>
                  <p className="text-muted-foreground mt-2">
                    High-quality PLA filament in Basic and Matte finishes. Available in 2kg spools in vibrant colors including green, yellow, blue, red, and more.
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <p className="text-sm text-foreground italic">
                    "Excellent quality filament with consistent diameter. Colors are vibrant and prints come out perfect every time."
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">- Verified Buyer</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-card border border-border p-12 md:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Ready to Start Your 3D Printing Journey?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore our full catalog of printers, materials, and accessories to find the perfect setup for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="text-lg"
                  onClick={() => window.location.href = '/catalog'}
                >
                  Browse Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg border-foreground/20 hover:bg-foreground/10"
                  onClick={() => window.location.href = '/faq'}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
