import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { printers } from "@/data/printers";
import { Filter, SlidersHorizontal } from "lucide-react";

const Printers = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filters = [
    { id: "all", label: "All Printers" },
    { id: "flagship", label: "Flagship" },
    { id: "pro", label: "Professional" },
    { id: "compact", label: "Compact" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Header */}
      <section className="pt-32 pb-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              All Printers
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover the perfect 3D printer for your needs. From compact desktop models to professional-grade machines.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border sticky top-16 bg-background/95 backdrop-blur-lg z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={selectedFilter === filter.id ? "default" : "outline"}
                  onClick={() => setSelectedFilter(filter.id)}
                  className="transition-all"
                >
                  {filter.label}
                </Button>
              ))}
            </div>
            <Button variant="outline" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Advanced Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our 3D Printers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our range of high-quality 3D printers designed for every need
            </p>
          </div>

          {/* X1 Carbon Showcase */}
          <div className="mb-20 group">
            <div className="grid md:grid-cols-2 gap-8 items-center bg-card/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500">
              <div className="order-2 md:order-1 p-8 md:p-12 space-y-6">
                <div className="inline-block">
                  <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    Flagship Model
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                  X1 Carbon
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  The ultimate speed demon featuring CoreXY Motion, LiDAR Flow Calibration, and Multi-Color AMS support. Perfect for professionals demanding the highest quality prints.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="px-4 py-2 bg-secondary/50 rounded-lg">
                    <span className="text-sm font-medium">Up to 500 mm/s</span>
                  </div>
                  <div className="px-4 py-2 bg-secondary/50 rounded-lg">
                    <span className="text-sm font-medium">AI Camera</span>
                  </div>
                  <div className="px-4 py-2 bg-secondary/50 rounded-lg">
                    <span className="text-sm font-medium">Multi-Color</span>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-3xl font-bold text-foreground mb-4">$1,249</p>
                  <Button size="lg" className="w-full md:w-auto">
                    Learn More
                  </Button>
                </div>
                <div className="pt-6 border-t border-border/50">
                  <p className="text-sm text-muted-foreground italic">
                    "Easy to assemble, great print at first time, tested on 170mm/s and works fine"
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">- Verified Customer</p>
                </div>
              </div>
              <div className="order-1 md:order-2 relative aspect-square md:aspect-auto md:h-full overflow-hidden">
                <img 
                  src="/src/assets/x1-carbon-showcase.png" 
                  alt="X1 Carbon 3D Printer - Professional grade with CoreXY motion system"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* A1 Series Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* A1 Mini Showcase */}
            <div className="group bg-card/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src="/src/assets/a1-showcase.png" 
                  alt="A1 Mini 3D Printer - Compact and beginner-friendly desktop 3D printer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="inline-block">
                  <span className="px-4 py-1.5 bg-accent/10 text-accent-foreground rounded-full text-sm font-semibold">
                    Best Seller
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">A1 Mini</h3>
                <p className="text-muted-foreground">
                  Compact powerhouse perfect for beginners. Easy setup, reliable printing, and perfect for limited desk space.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-secondary/50 rounded-lg text-xs">Up to 300 mm/s</span>
                  <span className="px-3 py-1 bg-secondary/50 rounded-lg text-xs">180×180×180 mm³</span>
                </div>
                <p className="text-2xl font-bold text-foreground">$299</p>
              </div>
            </div>

            {/* A1 AMS Showcase */}
            <div className="group bg-card/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src="/src/assets/a1-ams-showcase.png" 
                  alt="A1 with AMS - Multi-color 3D printing system with automatic material switching"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">A1 with AMS</h3>
                <p className="text-muted-foreground">
                  Take your printing to the next level with automatic multi-color capability. Create stunning multi-material prints.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-secondary/50 rounded-lg text-xs">4-Color Support</span>
                  <span className="px-3 py-1 bg-secondary/50 rounded-lg text-xs">Auto Switching</span>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "The AMS system is a game-changer for multi-color projects!"
                </p>
              </div>
            </div>
          </div>

          {/* Detail & Filament Showcase */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* A1 Detail */}
            <div className="group relative overflow-hidden rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-500">
              <img 
                src="/src/assets/a1-detail-showcase.png" 
                alt="A1 Series Detail - Close-up view of precision engineering and build quality"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6 w-full">
                  <h4 className="text-xl font-bold text-foreground mb-2">Precision Engineering</h4>
                  <p className="text-sm text-muted-foreground">Every detail matters in creating perfect prints</p>
                </div>
              </div>
            </div>

            {/* Filament Showcase */}
            <div className="group relative overflow-hidden rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-500">
              <img 
                src="/src/assets/filament-showcase.png" 
                alt="Premium 3D Printer Filaments - Wide range of colors and materials including PLA, PETG, ABS"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6 w-full">
                  <h4 className="text-xl font-bold text-foreground mb-2">Premium Materials</h4>
                  <p className="text-sm text-muted-foreground">Wide selection of high-quality filaments for every project</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Printers;
