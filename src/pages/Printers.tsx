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

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {printers.map((printer) => (
            <ProductCard key={printer.id} {...printer} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Printers;
