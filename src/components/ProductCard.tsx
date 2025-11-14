import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  tagline: string;
  price: number;
  image: string;
  features: string[];
  badge?: string;
}

export const ProductCard = ({ id, name, tagline, price, image, features, badge }: ProductCardProps) => {
  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
      {/* Badge */}
      {badge && (
        <div className="absolute top-4 right-4 z-10">
          <Badge variant="default" className="bg-primary text-primary-foreground">
            {badge}
          </Badge>
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gradient-card">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground">{tagline}</p>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {features.slice(0, 3).map((feature, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <span className="text-2xl font-bold text-foreground">${price}</span>
            <span className="text-sm text-muted-foreground ml-1">USD</span>
          </div>
          <Link to={`/printer/${id}`}>
            <Button variant="hero" size="sm" className="group/btn">
              View Details
              <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
