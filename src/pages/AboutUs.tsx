import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckCircle, GraduationCap, Lightbulb, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";

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
                Create almost endless variety of things, turning digital prototypes and 3D doodles into real objects from the comfort of your home. The possibilities are limited only by your imagination.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Education</h2>
              <p className="text-muted-foreground">
                3D printing in education teaches design thinking, empowers students to think like innovators, and exposes them to relevant technology. Schools are successfully integrating dedicated 3D printing stations.
              </p>
            </div>
          </div>
        </section>

        {/* How to Choose Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                How to Choose Your 3D Printer
              </h2>
              <p className="text-xl text-muted-foreground">
                To find one of the best 3D printers, start by figuring out two things — how experienced you are with 3D printing and what you plan to create with your printer.
              </p>
            </div>
            
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
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
