import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "What's the best printer for beginners?",
          a: "The BambuLab A1 Mini is perfect for beginners - it's affordable, compact, and comes fully assembled with automatic calibration for hassle-free printing."
        },
        {
          q: "How difficult is setup?",
          a: "BambuLab printers are designed for quick setup. Most models are ready to print in under 30 minutes with automatic bed leveling and calibration."
        },
        {
          q: "Do I need prior 3D printing experience?",
          a: "No prior experience needed! BambuLab printers are designed with user-friendly interfaces and come with comprehensive guides to get you started."
        }
      ]
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          q: "What's included in the price?",
          a: "Every printer includes the printer unit, power cable, sample filament, tools, and comprehensive documentation. Some models include additional accessories like AMS units."
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept credit cards (Visa, Mastercard), cash on delivery, bank transfers, and digital wallets (Apple Pay, Google Pay)."
        },
        {
          q: "Do you offer financing options?",
          a: "Yes, we offer flexible payment plans for purchases over certain amounts. Contact our sales team for more details."
        }
      ]
    },
    {
      category: "Technical Specifications",
      questions: [
        {
          q: "What materials can I print with?",
          a: "BambuLab printers support PLA, PETG, ABS, TPU, and advanced materials like Carbon Fiber, ASA, and Nylon. Multi-material printing is available with the AMS system."
        },
        {
          q: "How fast can these printers print?",
          a: "BambuLab printers feature speeds up to 500mm/s with CoreXY systems, allowing you to complete projects in a fraction of the time compared to traditional printers."
        },
        {
          q: "What is the maximum build volume?",
          a: "Build volumes vary by model. The X1 Carbon offers 256×256×256mm, while the A1 Mini provides 180×180×180mm. Check individual product pages for detailed specifications."
        }
      ]
    },
    {
      category: "Support & Warranty",
      questions: [
        {
          q: "Do you offer warranty?",
          a: "Yes! All BambuLab printers come with a 1-year manufacturer warranty covering defects and malfunctions. Extended warranty options are available for purchase."
        },
        {
          q: "What if my printer needs repair?",
          a: "We offer full service and repair support. Contact our service center to schedule a repair or troubleshoot issues with our technical team."
        },
        {
          q: "How do I get technical support?",
          a: "Contact us via phone, email, Telegram, or WhatsApp. Our technical support team is available during business hours to help with any issues."
        }
      ]
    },
    {
      category: "Shipping & Delivery",
      questions: [
        {
          q: "Do you ship throughout Ukraine?",
          a: "Yes, we ship to all regions of Ukraine. Shipping times and costs vary depending on your location."
        },
        {
          q: "How long does delivery take?",
          a: "Standard delivery takes 2-5 business days within major cities, and 3-7 days for other regions. Express delivery options are available."
        },
        {
          q: "Is free shipping available?",
          a: "Yes, we offer free shipping on orders over $500 (or equivalent in UAH)."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about BambuLab 3D printers
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((category, catIndex) => (
              <div key={catIndex}>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, qIndex) => {
                    const index = catIndex * 100 + qIndex;
                    const isOpen = openIndex === index;
                    
                    return (
                      <div
                        key={qIndex}
                        className="rounded-xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors"
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                          className="w-full p-6 text-left flex items-center justify-between gap-4"
                        >
                          <h3 className="text-lg font-semibold text-foreground">
                            {faq.q}
                          </h3>
                          <ChevronDown
                            className={`h-5 w-5 text-primary transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6 text-muted-foreground animate-fade-in">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              Still have questions?
            </p>
            <a
              href="tel:+380000000000"
              className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
