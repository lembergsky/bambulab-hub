import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart, Search } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
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
              All Printers
            </Link>
            <Link to="/ecosystem" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Ecosystem
            </Link>
            <Link to="/tutorials" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Tutorials
            </Link>
            <Link to="/support" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Support
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
