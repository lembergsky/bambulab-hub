import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Button } from "@/components/ui/button";
import { printers } from "@/data/printers";
import promoBanner from "@/assets/promo-banner.png";
import { ArrowRight, Zap, Shield, Award, Package, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Carousel */}
      <HeroCarousel />

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

      {/* Featured Categories */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-card border border-border p-8 hover:border-primary/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
            <Package className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">3D Printers</h3>
            <p className="text-muted-foreground mb-4">
              Discover our range of professional 3D printers with cutting-edge technology
            </p>
            <Button variant="hero" className="mt-4">
              Browse Printers
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-gradient-card border border-border p-8 hover:border-primary/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
            <Sparkles className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">Filament</h3>
            <p className="text-muted-foreground mb-4">
              Premium quality filaments in various materials and colors
            </p>
            <Button variant="hero" className="mt-4">
              Shop Filament
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-gradient-card border border-border p-8 hover:border-primary/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
            <Award className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">AMS & Accessories</h3>
            <p className="text-muted-foreground mb-4">
              Enhance your printing experience with our accessories
            </p>
            <Button variant="hero" className="mt-4">
              View Accessories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="container mx-auto px-4 py-12">
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src={promoBanner}
            alt="Black Friday Sale - Up to 30% Off"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Featured Printers */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            New Arrivals
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the latest innovations in 3D printing technology
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
