import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import CTABanner from '@/components/CTABanner';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: 'Organic Microgreens Catalog — All Varieties',
  description:
    'Browse our full catalog of 11+ fresh organic microgreens varieties — broccoli, kale, beetroot, sunflower, wheatgrass, and more. Pesticide-free and delivered fresh in Coimbatore.',
};

const categories = ['All', ...new Set(products.map((p) => p.category))];

export default function MicrogreensPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-forest-DEFAULT to-leafy-DEFAULT relative overflow-hidden">
        <div className="absolute top-10 right-10 text-6xl opacity-20 animate-float">🌿</div>
        <div className="absolute bottom-10 left-10 text-5xl opacity-20 animate-float-delayed">🌱</div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white/90 text-sm font-inter font-medium mb-5">
              🌱 {products.length} Organic Varieties
            </span>
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Our Microgreens Catalog
            </h1>
            <p className="font-inter text-white/80 text-lg max-w-2xl mx-auto">
              Each variety is grown with precision, harvested at peak nutrition, and delivered fresh to your door. 
              Explore the full range of nature's most powerful foods.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-beige-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <ProductCard key={product.slug} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="section-tag mb-4">📦 Simple Process</span>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-forest-DEFAULT mb-4">
              How to Order Your Microgreens
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { step: '01', emoji: '💬', title: 'WhatsApp Us', desc: 'Message us on WhatsApp with your variety choice and quantity' },
              { step: '02', emoji: '🌱', title: 'We Harvest Fresh', desc: 'We harvest your order on the morning of delivery for maximum freshness' },
              { step: '03', emoji: '🚀', title: 'Delivered Fresh', desc: 'Your microgreens arrive at your door within hours of harvest' },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.15}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-leafy-DEFAULT to-forest-DEFAULT flex items-center justify-center mx-auto mb-4 shadow-glow-green">
                    <span className="text-2xl">{item.emoji}</span>
                  </div>
                  <div className="font-inter text-xs font-bold text-sage-DEFAULT tracking-widest mb-2">STEP {item.step}</div>
                  <h3 className="font-playfair font-bold text-forest-DEFAULT text-lg mb-2">{item.title}</h3>
                  <p className="font-inter text-text-muted text-sm">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Can't Decide? We'll Help You Choose!"
        description="Chat with us on WhatsApp and tell us your health goals. We'll recommend the perfect microgreens blend for your needs."
        primaryCta={{ label: 'Get a Recommendation', href: 'https://wa.me/919360123917?text=Hi! Can you help me choose the right microgreens for my health goals? 🌱' }}
        secondaryCta={{ label: 'View Subscriptions', href: '/subscriptions' }}
      />
    </>
  );
}
