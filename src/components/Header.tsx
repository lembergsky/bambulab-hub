import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart, Search, Phone, Mail } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border">
      {/* Top Bar */}
      <div className="border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center gap-6 text-muted-foreground">
              <a href="tel:+380000000000" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span className="hidden md:inline">+380 00 000 0000</span>
              </a>
              <a href="mailto:info@bambulab.ua" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span className="hidden md:inline">info@bambulab.ua</span>
              </a>
            </div>
            <div className="text-muted-foreground hidden md:block">
              Free shipping on orders over $500
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              BambuLab
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/printers" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              3D Printers
            </Link>
            <Link to="/filament" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Filament
            </Link>
            <Link to="/accessories" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Accessories
            </Link>
            <Link to="/scanners" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              3D Scanners
            </Link>
            <Link to="/charging" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Charging Stations
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="hero" className="hidden md:flex">
              Shop Now
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
