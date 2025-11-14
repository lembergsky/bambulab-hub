import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { printers } from "@/data/printers";
import heroImage from "@/assets/hero-x1-carbon.jpg";
import { ArrowRight, Zap, Shield, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="BambuLab X1 Carbon"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              The Future of{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                3D Printing
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Experience unprecedented speed, precision, and reliability with BambuLab's revolutionary 3D printers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button variant="hero" size="lg" className="text-lg">
                Explore Printers
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg border-primary text-primary hover:bg-primary hover:text-background">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Lightning Fast</h3>
            <p className="text-muted-foreground">
              Print speeds up to 500mm/s with CoreXY motion system for unmatched productivity.
            </p>
          </div>
          
          <div className="text-center space-y-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Reliable Quality</h3>
            <p className="text-muted-foreground">
              Advanced LiDAR calibration and AI monitoring ensure perfect prints every time.
            </p>
          </div>
          
          <div className="text-center space-y-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Award Winning</h3>
            <p className="text-muted-foreground">
              Recognized globally for innovation and excellence in 3D printing technology.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Printers */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Printers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From hobbyists to professionals, we have the perfect 3D printer for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {printers.map((printer) => (
            <ProductCard key={printer.id} {...printer} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-background">
            View All Printers
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-card border border-border p-12 md:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-hero opacity-10" />
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Ready to Start Creating?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of makers, engineers, and creators who trust BambuLab for their 3D printing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="hero" size="lg" className="text-lg">
                Shop Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg border-foreground/20 hover:bg-foreground/10">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
