import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";
import hero3 from "@/assets/hero-3.png";
import hero4 from "@/assets/hero-4.png";
import hero5 from "@/assets/hero-5.png";

const heroSlides = [
  {
    image: hero1,
    title: "Precision Engineering",
    subtitle: "Advanced Multi-Material System",
    description: "Experience seamless multi-color printing with the innovative AMS system"
  },
  {
    image: hero2,
    title: "Complete Ecosystem",
    subtitle: "Everything You Need",
    description: "From printer to accessories, build your perfect 3D printing setup"
  },
  {
    image: hero3,
    title: "Professional Setup",
    subtitle: "Workshop Ready",
    description: "Industrial-grade quality for your creative workspace"
  },
  {
    image: hero4,
    title: "Creative Freedom",
    subtitle: "Bring Ideas to Life",
    description: "Transform your imagination into reality with stunning print quality"
  },
  {
    image: hero5,
    title: "Modern Innovation",
    subtitle: "Smart Technology",
    description: "AI-powered features for effortless 3D printing excellence"
  }
];

export const HeroCarousel = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      <Carousel
        setApi={setApi}
        className="w-full h-full"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className="h-full">
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index} className="h-screen">
              <div className="relative h-full w-full">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover animate-fade-in"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/30 to-background/90" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="container mx-auto px-4 text-center animate-fade-in">
                    <div className="max-w-4xl mx-auto space-y-6">
                      <div className="space-y-2">
                        <p className="text-primary text-lg md:text-xl font-medium uppercase tracking-wider animate-fade-in">
                          {slide.subtitle}
                        </p>
                        <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight animate-fade-in animation-delay-100">
                          {slide.title}
                        </h1>
                      </div>
                      <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
                        {slide.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in animation-delay-300">
                        <Button variant="hero" size="lg" className="text-lg">
                          Explore Collection
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button variant="outline" size="lg" className="text-lg border-primary text-primary hover:bg-primary hover:text-background">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation */}
        <CarouselPrevious className="left-4 md:left-8 h-12 w-12 border-primary/50 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-background" />
        <CarouselNext className="right-4 md:right-8 h-12 w-12 border-primary/50 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-background" />

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current ? "w-8 bg-primary" : "w-2 bg-primary/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block" style={{ bottom: '4rem' }}>
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};
