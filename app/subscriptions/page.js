import AnimatedSection from '@/components/AnimatedSection';
import CTABanner from '@/components/CTABanner';
import { Check, Star } from 'lucide-react';

export const metadata = {
  title: 'Microgreens Subscription Plans — Weekly Fresh Delivery',
  description:
    'Subscribe to weekly fresh microgreens delivery in Coimbatore. Choose from Starter, Fitness, Family, Smoothie, or Chef boxes. Pesticide-free, always fresh.',
};

const plans = [
  {
    id: 'starter',
    name: 'Starter Box',
    emoji: '🌱',
    tagline: 'Perfect for curious beginners',
    frequency: 'Weekly',
    price: '₹299',
    priceNote: 'per week',
    color: '#2d6a4f',
    bgColor: 'from-green-50 to-emerald-50',
    featured: false,
    includes: ['Broccoli Microgreens (50g)', 'Sunflower Microgreens (50g)', 'Any 1 Seasonal Variety (50g)'],
    benefits: [
      '3 fresh varieties weekly',
      'Free home delivery',
      'WhatsApp support',
      'Recipe card included',
    ],
    cta: 'Start Free Trial',
  },
  {
    id: 'fitness',
    name: 'Fitness Box',
    emoji: '💪',
    tagline: 'For active lifestyles & athletes',
    frequency: 'Weekly',
    price: '₹499',
    priceNote: 'per week',
    color: '#1a3d2b',
    bgColor: 'from-forest-50 to-leafy-50',
    featured: true,
    includes: [
      'Broccoli Microgreens (75g)',
      'Sunflower Microgreens (75g)',
      'Wheatgrass (50g)',
      'Pea Shoots (50g)',
      'Choice of 1 Superfood Green (50g)',
    ],
    benefits: [
      '5 high-protein & antioxidant varieties',
      'Optimized for performance & recovery',
      'Priority delivery',
      'Personalized nutrition guide',
      'WhatsApp consultation',
    ],
    cta: 'Get Fitness Box',
  },
  {
    id: 'family',
    name: 'Family Wellness Box',
    emoji: '👨‍👩‍👧‍👦',
    tagline: 'Enough for the whole family',
    frequency: 'Weekly',
    price: '₹699',
    priceNote: 'per week',
    color: '#4a7c59',
    bgColor: 'from-teal-50 to-green-50',
    featured: false,
    includes: [
      'Broccoli Microgreens (100g)',
      'Kale Microgreens (100g)',
      'Sunflower Microgreens (100g)',
      'Pea Shoots (75g)',
      'Radish or Beetroot (75g)',
      '2 Seasonal Varieties (50g each)',
    ],
    benefits: [
      '7 fresh varieties — something for everyone',
      'Serves a family of 4 for a week',
      'Free delivery',
      'Family recipe booklet',
      'Kids-friendly variety selection',
    ],
    cta: 'Choose Family Box',
  },
  {
    id: 'smoothie',
    name: 'Smoothie Box',
    emoji: '🥤',
    tagline: 'Curated for daily green smoothies',
    frequency: 'Weekly',
    price: '₹399',
    priceNote: 'per week',
    color: '#3d7a5e',
    bgColor: 'from-lime-50 to-green-50',
    featured: false,
    includes: [
      'Kale Microgreens (100g)',
      'Wheatgrass (75g)',
      'Broccoli Microgreens (75g)',
      'Pea Shoots (50g)',
    ],
    benefits: [
      'Perfectly blendable varieties',
      'High in chlorophyll',
      'Detox-focused selection',
      'Smoothie recipe guide',
      'Optimal for juicing',
    ],
    cta: 'Get Smoothie Box',
  },
  {
    id: 'chef',
    name: "Chef's Selection",
    emoji: '👨‍🍳',
    tagline: 'Restaurant-quality for home chefs',
    frequency: 'Weekly',
    price: '₹799',
    priceNote: 'per week',
    color: '#b58c2d',
    bgColor: 'from-amber-50 to-yellow-50',
    featured: false,
    includes: [
      'Radish (Purple Sango) (50g)',
      'Mustard Microgreens (50g)',
      'Cilantro Microgreens (50g)',
      'Sunflower Microgreens (75g)',
      'Pok Choi Microgreens (50g)',
      'Broccoli Microgreens (75g)',
      'Chef-chosen Seasonal Rarity (50g)',
    ],
    benefits: [
      '7 premium & rare varieties',
      'Selected by culinary preference',
      'Gourmet garnish selection',
      'Chef consultation available',
      'Premium packaging',
      'Recipe development support',
    ],
    cta: "Order Chef's Box",
  },
];

export default function SubscriptionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-forest-DEFAULT to-leafy-DEFAULT relative overflow-hidden">
        <div className="absolute top-10 right-10 text-6xl opacity-20 animate-float select-none">🌿</div>
        <div className="absolute bottom-10 left-10 text-5xl opacity-20 animate-float-delayed select-none">📦</div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white/90 text-sm font-inter font-medium mb-5">
              📦 Weekly Subscription
            </span>
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Never Run Out of Fresh Greens
            </h1>
            <p className="font-inter text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
              Choose a subscription box that fits your lifestyle. Fresh microgreens delivered weekly — harvested on the morning of delivery. 
              Pause or cancel anytime.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-20 bg-beige-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {plans.slice(0, 3).map((plan, i) => (
              <AnimatedSection key={plan.id} delay={i * 0.1}>
                <div className={`relative bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 flex flex-col h-full ${
                  plan.featured ? 'ring-2 ring-leafy-DEFAULT' : ''
                }`}>
                  {plan.featured && (
                    <div className="absolute top-0 left-0 right-0 py-2 bg-leafy-DEFAULT text-center">
                      <span className="font-inter text-xs font-bold text-white tracking-widest uppercase flex items-center justify-center gap-1">
                        <Star className="w-3 h-3 fill-current" /> Most Popular
                      </span>
                    </div>
                  )}

                  <div className={`p-8 bg-gradient-to-br ${plan.bgColor} ${plan.featured ? 'pt-12' : ''}`}>
                    <div className="text-5xl mb-3">{plan.emoji}</div>
                    <h2 className="font-playfair text-2xl font-bold text-forest-DEFAULT mb-1">{plan.name}</h2>
                    <p className="font-inter text-sm text-text-muted mb-4">{plan.tagline}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="font-playfair text-4xl font-bold text-forest-DEFAULT">{plan.price}</span>
                      <span className="font-inter text-sm text-text-muted">{plan.priceNote}</span>
                    </div>
                    <span className="inline-block mt-2 px-3 py-1 bg-white/70 rounded-full text-xs font-semibold font-inter" style={{ color: plan.color }}>
                      🔄 {plan.frequency} Delivery
                    </span>
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="font-inter text-xs font-bold text-forest-DEFAULT uppercase tracking-widest mb-3">What's Included</h3>
                    <ul className="space-y-2 mb-6">
                      {plan.includes.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: `${plan.color}20` }}>
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: plan.color }} />
                          </div>
                          <span className="font-inter text-sm text-text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="font-inter text-xs font-bold text-forest-DEFAULT uppercase tracking-widest mb-3">Benefits</h3>
                    <ul className="space-y-2 flex-1 mb-6">
                      {plan.benefits.map((benefit, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-leafy-DEFAULT flex-shrink-0" />
                          <span className="font-inter text-sm text-text-muted">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={`https://wa.me/919360123917?text=Hi! I'd like to subscribe to the ${plan.name} 📦`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3.5 text-white font-semibold rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
                      style={{ backgroundColor: plan.color }}
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      {plan.cta}
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {plans.slice(3).map((plan, i) => (
              <AnimatedSection key={plan.id} delay={i * 0.1 + 0.3}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 flex flex-col h-full">
                  <div className={`p-8 bg-gradient-to-br ${plan.bgColor}`}>
                    <div className="text-5xl mb-3">{plan.emoji}</div>
                    <h2 className="font-playfair text-2xl font-bold text-forest-DEFAULT mb-1">{plan.name}</h2>
                    <p className="font-inter text-sm text-text-muted mb-4">{plan.tagline}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="font-playfair text-4xl font-bold text-forest-DEFAULT">{plan.price}</span>
                      <span className="font-inter text-sm text-text-muted">{plan.priceNote}</span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <div className="grid grid-cols-2 gap-6 flex-1">
                      <div>
                        <h3 className="font-inter text-xs font-bold text-forest-DEFAULT uppercase tracking-widest mb-3">Includes</h3>
                        <ul className="space-y-1.5">
                          {plan.includes.slice(0, 4).map((item, j) => (
                            <li key={j} className="font-inter text-xs text-text-muted flex items-start gap-1.5">
                              <span className="text-leafy-DEFAULT">→</span> {item}
                            </li>
                          ))}
                          {plan.includes.length > 4 && (
                            <li className="font-inter text-xs text-leafy-DEFAULT">+{plan.includes.length - 4} more</li>
                          )}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-inter text-xs font-bold text-forest-DEFAULT uppercase tracking-widest mb-3">Benefits</h3>
                        <ul className="space-y-1.5">
                          {plan.benefits.slice(0, 4).map((b, j) => (
                            <li key={j} className="flex items-center gap-1.5">
                              <Check className="w-3 h-3 text-leafy-DEFAULT flex-shrink-0" />
                              <span className="font-inter text-xs text-text-muted">{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/919360123917?text=Hi! I'd like to subscribe to the ${plan.name} 📦`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 flex items-center justify-center gap-2 py-3 text-white font-semibold rounded-2xl transition-all duration-300 text-sm"
                      style={{ backgroundColor: plan.color }}
                    >
                      {plan.cta} →
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-playfair text-3xl font-bold text-forest-DEFAULT">Subscription Questions</h2>
          </AnimatedSection>
          <div className="space-y-4">
            {[
              { q: 'Can I pause or cancel my subscription?', a: 'Absolutely. Simply message us on WhatsApp at least 48 hours before your next delivery. No questions asked, no penalties.' },
              { q: 'Can I customize my box?', a: 'Yes! The plans above are starting points. Tell us your taste preferences, health goals, or dietary requirements and we\'ll personalize your box accordingly.' },
              { q: 'What day do you deliver?', a: 'We deliver Monday through Saturday. You can choose your preferred delivery day when you subscribe. We\'ll harvest fresh on your delivery morning.' },
              { q: 'Is there a minimum subscription period?', a: 'No commitment required. You can subscribe for a single week and decide after. We\'re confident you\'ll want to continue!' },
            ].map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="bg-beige-200 rounded-2xl p-6">
                  <h3 className="font-playfair font-semibold text-forest-DEFAULT mb-2">{faq.q}</h3>
                  <p className="font-inter text-sm text-text-muted">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        tag="Start Your Health Journey"
        title="Subscribe Today. Feel Different by Next Week."
        description="Your first delivery arrives fresh within hours of harvest. Give your body what it needs — consistently."
        primaryCta={{ label: 'Subscribe on WhatsApp', href: 'https://wa.me/919360123917?text=Hi! I\'d like to start a microgreens subscription 🌱' }}
        secondaryCta={{ label: 'View All Varieties', href: '/microgreens' }}
      />
    </>
  );
}
