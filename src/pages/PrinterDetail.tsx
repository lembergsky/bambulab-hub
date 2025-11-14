import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { printers } from "@/data/printers";
import { ArrowLeft, ShoppingCart, Download, Share2 } from "lucide-react";

const PrinterDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const printer = printers.find((p) => p.id === Number(id));

  if (!printer) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Printer Not Found</h1>
          <Button onClick={() => navigate("/printers")}>
            Back to Printers
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-24 pb-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      </div>

      {/* Product Hero */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-card border border-border p-8">
            <img
              src={printer.image}
              alt={printer.name}
              className="w-full h-auto object-contain"
            />
            {printer.badge && (
              <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground text-base px-4 py-2">
                {printer.badge}
              </Badge>
            )}
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl font-bold text-foreground mb-2">
                BambuLab {printer.name}
              </h1>
              <p className="text-2xl text-muted-foreground">{printer.tagline}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {printer.features.map((feature, index) => (
                <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                  {feature}
                </Badge>
              ))}
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {printer.description}
            </p>

            <div className="border-t border-b border-border py-6">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-foreground">${printer.price}</span>
                <span className="text-xl text-muted-foreground">USD</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="flex-1 text-lg">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-background">
                <Share2 className="mr-2 h-5 w-5" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-card rounded-2xl border border-border p-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Technical Specifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-2">
                  Build Volume
                </h3>
                <p className="text-lg text-foreground">{printer.specs.buildVolume}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-2">
                  Print Speed
                </h3>
                <p className="text-lg text-foreground">{printer.specs.printSpeed}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-2">
                  Layer Height
                </h3>
                <p className="text-lg text-foreground">{printer.specs.layerHeight}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-2">
                  Connectivity
                </h3>
                <p className="text-lg text-foreground">{printer.specs.connectivity}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-2">
                  Compatible Materials
                </h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {printer.specs.materials.map((material, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      {material}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Download Full Specifications (PDF)
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrinterDetail;
