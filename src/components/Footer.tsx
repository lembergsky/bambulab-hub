import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Catalog</h4>
            <ul className="space-y-2">
              <li><Link to="/printers" className="text-sm text-muted-foreground hover:text-primary transition-colors">Shop</Link></li>
              <li><Link to="/filament" className="text-sm text-muted-foreground hover:text-primary transition-colors">Filament</Link></li>
              <li><Link to="/accessories" className="text-sm text-muted-foreground hover:text-primary transition-colors">Accessories</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Information</h4>
            <ul className="space-y-2">
              <li><Link to="/payment-shipping" className="text-sm text-muted-foreground hover:text-primary transition-colors">Payment & Shipping</Link></li>
              <li><Link to="/warranty" className="text-sm text-muted-foreground hover:text-primary transition-colors">Warranty</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/public-offer" className="text-sm text-muted-foreground hover:text-primary transition-colors">Public Offer</Link></li>
              <li><Link to="/service-request" className="text-sm text-muted-foreground hover:text-primary transition-colors">Service Request</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Useful</h4>
            <ul className="space-y-2">
              <li><a href="https://www.thingiverse.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">Thingiverse</a></li>
              <li><a href="https://www.printables.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">Printables</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Bambu Studio</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Bambu Handy</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li><a href="tel:+380000000000" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"><Phone className="h-4 w-4" />+380 00 000 0000</a></li>
              <li><a href="mailto:info@bambulab.ua" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"><Mail className="h-4 w-4" />info@bambulab.ua</a></li>
              <li><div className="flex items-start gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4 mt-0.5" /><span>Kyiv, Ukraine</span></div></li>
              <li><div className="flex items-start gap-2 text-sm text-muted-foreground"><Clock className="h-4 w-4 mt-0.5" /><span>Mon-Fri: 9:00-18:00</span></div></li>
              <li className="flex gap-3 pt-2">
                <a href="https://t.me/bambulab" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Send className="h-5 w-5" /></a>
                <a href="https://wa.me/380000000000" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><MessageCircle className="h-5 w-5" /></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2024 BambuLab Ukraine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
