import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CreditCard, Banknote, Building2, Smartphone, Shield, Clock } from "lucide-react";

const Payments = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Payment Methods
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible and secure payment options for your convenience
            </p>
          </div>

          {/* Payment Methods Grid */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
                <div className="w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <CreditCard className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Credit/Debit Cards</h3>
                <p className="text-muted-foreground mb-4">
                  We accept Visa and Mastercard for quick and secure online payments
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Instant processing</li>
                  <li>✓ Secure 3D authentication</li>
                  <li>✓ No additional fees</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
                <div className="w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Banknote className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Cash on Delivery</h3>
                <p className="text-muted-foreground mb-4">
                  Pay when you receive your order at your doorstep
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ No upfront payment</li>
                  <li>✓ Inspect before paying</li>
                  <li>✓ Available nationwide</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
                <div className="w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Bank Transfer</h3>
                <p className="text-muted-foreground mb-4">
                  Direct bank transfer for larger orders or business purchases
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Preferred for bulk orders</li>
                  <li>✓ Invoice provided</li>
                  <li>✓ 1-2 day processing</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
                <div className="w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Digital Wallets</h3>
                <p className="text-muted-foreground mb-4">
                  Pay with Apple Pay or Google Pay for contactless checkout
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ One-click payment</li>
                  <li>✓ Enhanced security</li>
                  <li>✓ Mobile-friendly</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
                <div className="w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Installment Plans</h3>
                <p className="text-muted-foreground mb-4">
                  Split your payment into manageable monthly installments
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ 0% interest available</li>
                  <li>✓ 3, 6, or 12 months</li>
                  <li>✓ Quick approval</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
                <div className="w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Secure Payments</h3>
                <p className="text-muted-foreground mb-4">
                  All transactions are encrypted and protected
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ SSL encryption</li>
                  <li>✓ PCI DSS compliant</li>
                  <li>✓ Fraud protection</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Payment Process */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground text-center mb-12">
                How Payment Works
              </h2>
              <div className="space-y-6">
                <div className="flex gap-6 items-start p-6 rounded-xl bg-card border border-border">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Choose Your Products</h3>
                    <p className="text-muted-foreground">
                      Browse our catalog and add items to your cart. You can review and modify your order before checkout.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start p-6 rounded-xl bg-card border border-border">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Select Payment Method</h3>
                    <p className="text-muted-foreground">
                      At checkout, choose your preferred payment method from the options available. All methods are secure.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start p-6 rounded-xl bg-card border border-border">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Complete Payment</h3>
                    <p className="text-muted-foreground">
                      Follow the payment instructions. You'll receive a confirmation email with your order details and tracking.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start p-6 rounded-xl bg-card border border-border">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Receive Your Order</h3>
                    <p className="text-muted-foreground">
                      Track your shipment and receive your BambuLab products. Enjoy your 3D printing journey!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">
              Payment FAQs
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">Is my payment information secure?</h3>
                <p className="text-muted-foreground">
                  Yes, all payments are processed through secure, encrypted channels. We never store your full payment details.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">Can I get a refund if I change my mind?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer a 14-day return policy for unopened products. Refunds are processed to the original payment method within 5-7 business days.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">Do you offer invoices for businesses?</h3>
                <p className="text-muted-foreground">
                  Yes, we provide official invoices for all orders. Business clients can request VAT invoices at checkout.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Payments;
