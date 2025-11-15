import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { printers } from "@/data/printers";
import { SlidersHorizontal } from "lucide-react";

// Category filters
const categories = [
  { id: "all", label: "All Products" },
  { id: "printers", label: "3D Printers" },
  { id: "filament", label: "Filament" },
  { id: "accessories", label: "Accessories" },
  { id: "scanners", label: "3D Scanners" },
  { id: "charging", label: "Charging Stations" },
];

// Price range filters
const priceRanges = [
  { id: "all", label: "All Prices" },
  { id: "0-500", label: "Under $500" },
  { id: "500-1000", label: "$500 - $1000" },
  { id: "1000+", label: "Over $1000" },
];

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("all");

  // Filter products based on selected filters
  const filteredProducts = printers.filter((printer) => {
    // Category filter
    if (selectedCategory !== "all" && selectedCategory !== "printers") {
      return false; // For now, we only have printers
    }

    // Price range filter
    if (selectedPriceRange !== "all") {
      const [min, max] = selectedPriceRange.split("-").map(p => p.replace("+", ""));
      const minPrice = parseInt(min);
      const maxPrice = max ? parseInt(max) : Infinity;
      
      if (printer.price < minPrice || printer.price > maxPrice) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Header */}
      <section className="pt-32 pb-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Product Catalog
            </h1>
            <p className="text-xl text-muted-foreground">
              Browse our complete collection of BambuLab 3D printers, filaments, accessories, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border sticky top-16 bg-background/95 backdrop-blur-lg z-40">
        <div className="container mx-auto px-4">
          <div className="space-y-4">
            {/* Category Filters */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <SlidersHorizontal className="h-4 w-4 text-primary" />
                <h3 className="text-sm font-semibold text-foreground">Category</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className="transition-all"
                    size="sm"
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Price Range Filters */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Price Range</h3>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map((range) => (
                  <Button
                    key={range.id}
                    variant={selectedPriceRange === range.id ? "default" : "outline"}
                    onClick={() => setSelectedPriceRange(range.id)}
                    className="transition-all"
                    size="sm"
                  >
                    {range.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-16">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {filteredProducts.map((printer) => (
              <ProductCard key={printer.id} {...printer} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-foreground mb-2">No products found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your filters to see more results</p>
            <Button 
              onClick={() => {
                setSelectedCategory("all");
                setSelectedPriceRange("all");
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Catalog;
