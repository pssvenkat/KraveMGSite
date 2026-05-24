'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDown, Leaf, ShieldCheck, Zap, Globe } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import TestimonialCard, { defaultTestimonials } from '@/components/TestimonialCard';
import FAQAccordion from '@/components/FAQAccordion';
import CTABanner from '@/components/CTABanner';
import AnimatedSection from '@/components/AnimatedSection';
import { products } from '@/lib/products';

// Nutrition stats
const stats = [
  { value: '40×', label: 'More Vitamin C', icon: '🍊' },
  { value: '20×', label: 'More Vitamin E', icon: '🌿' },
  { value: '25×', label: 'More Beta Carotene', icon: '🥕' },
  { value: '15×', label: 'More Vitamin K', icon: '💚' },
];

const features = [
  {
    icon: ShieldCheck,
    title: '100% Organic & Fresh',
    description:
      'Every leaf nurtured naturally, free from pesticides, chemicals, and artificial fertilizers. Grown in controlled, clean environments.',
  },
  {
    icon: Zap,
    title: 'Nutrient Powerhouse',
    description:
      'Tiny in size, mighty in nutrition! Packed with up to 40× more vitamins, minerals, and antioxidants than mature vegetables.',
  },
  {
    icon: Globe,
    title: 'Locally Grown',
    description:
      'Grown right here in Coimbatore with love and care, supporting sustainable urban farming and reducing farm-to-fork distance.',
  },
  {
    icon: Leaf,
    title: 'Restaurant Quality',
    description:
      'The same premium quality trusted by top chefs — crisp texture, bold flavor, and impeccable presentation for every meal.',
  },
];

const usageIdeas = [
  { emoji: '🥗', title: 'Fresh Salads', description: 'Add crunch and nutrition to your daily salads' },
  { emoji: '🍽️', title: 'Gourmet Garnish', description: 'Elevate dishes with restaurant-quality presentation' },
  { emoji: '🥤', title: 'Smoothie Boost', description: 'Blend for an extra nutritional kick' },
  { emoji: '🥪', title: 'Sandwiches & Wraps', description: 'Replace lettuce with nutrient-dense microgreens' },
];

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-DEFAULT via-forest-DEFAULT to-leafy-DEFAULT" />

        {/* Animated organic shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-sage-DEFAULT/10 blur-3xl" />
          <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-leafy-DEFAULT/20 blur-2xl" />
        </div>

        {/* Floating leaves */}
        <motion.div
          className="absolute top-20 right-16 text-6xl select-none"
          animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          🌿
        </motion.div>
        <motion.div
          className="absolute top-40 right-1/4 text-4xl select-none"
          animate={{ y: [8, -8, 8], rotate: [3, -3, 3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          🌱
        </motion.div>
        <motion.div
          className="absolute bottom-32 right-20 text-5xl select-none"
          animate={{ y: [-6, 6, -6], rotate: [-3, 3, -3] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        >
          🍃
        </motion.div>
        <motion.div
          className="absolute top-60 left-10 text-3xl select-none hidden lg:block"
          animate={{ y: [5, -5, 5], rotate: [5, -5, 5] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          🌾
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-1/4 text-4xl select-none hidden lg:block"
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        >
          🥦
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-24">
          <div className="max-w-3xl">
            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {['🌱 Pesticide-Free', '🌿 Non-GMO Seeds', '♻️ Zero Waste Farming'].map((badge) => (
                <span
                  key={badge}
                  className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-sm font-inter font-medium"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-playfair text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
            >
              Fresh Organic{' '}
              <span className="text-sage-light italic">Microgreens</span>{' '}
              Delivered to Your Door
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-inter text-white/80 text-lg sm:text-xl mb-10 max-w-xl leading-relaxed"
            >
              Nutrient-dense microgreens harvested fresh daily. Pesticide-free. Non-GMO.
              Sustainably grown in Coimbatore, Tamil Nadu.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                id="hero-whatsapp-cta"
                href="https://wa.me/919360123917?text=Hi%20Krave!%20I'd%20like%20to%20order%20some%20fresh%20microgreens%20🌱"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-green-500 text-white font-semibold text-lg rounded-full hover:bg-green-400 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(34,197,94,0.5)] font-inter"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Order on WhatsApp
              </a>
              <Link
                id="hero-explore-cta"
                href="/microgreens"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white border-2 border-white/50 font-semibold text-lg rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 hover:-translate-y-0.5 font-inter"
              >
                Explore Microgreens
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="font-inter text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* FEATURES SECTION */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="section-tag mb-4">🌱 Krave's Promise</span>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-DEFAULT mb-5">
              We Grow with Science, Care, and Conscience
            </h2>
            <p className="font-inter text-text-muted text-lg max-w-2xl mx-auto">
              From seed to your kitchen — every step of our growing process is designed for maximum nutrition, flavor, and freshness.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-leafy-DEFAULT to-forest-DEFAULT flex items-center justify-center mb-5 shadow-glow-green">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-playfair font-bold text-forest-DEFAULT text-lg mb-2">{feature.title}</h3>
                  <p className="font-inter text-text-muted text-sm leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* NUTRITION STATS SECTION */}
      <section className="py-20 bg-gradient-to-br from-forest-DEFAULT to-leafy-DEFAULT relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-56 h-56 rounded-full bg-sage-DEFAULT/10 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white/90 text-sm font-inter font-medium mb-4">
              🧪 Nutritional Powerhouse
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">
              Scientific studies confirm it
            </h2>
            <p className="font-inter text-white/70 text-lg max-w-xl mx-auto">
              Microgreens contain 4–40× higher nutrient levels than their mature counterparts.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="text-center p-6 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors duration-300">
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="font-playfair text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="font-inter text-white/70 text-sm">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS PREVIEW SECTION */}
      <section className="section-padding bg-beige-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="section-tag mb-4">🌿 Our Varieties</span>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-DEFAULT mb-5">
              Fresh Microgreen Varieties
            </h2>
            <p className="font-inter text-text-muted text-lg max-w-2xl mx-auto">
              Explore our premium selection of organic microgreens, each grown with care and harvested at peak nutritional density.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {products.slice(0, 6).map((product, i) => (
              <ProductCard key={product.slug} product={product} index={i} />
            ))}
          </div>

          <AnimatedSection className="text-center">
            <Link
              href="/microgreens"
              className="inline-flex items-center gap-2 px-8 py-4 bg-leafy-DEFAULT text-white font-semibold rounded-full hover:bg-forest-DEFAULT transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-green font-inter"
            >
              View All {products.length} Varieties →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* HOW TO USE SECTION */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="section-tag mb-4">🍽️ Usage Ideas</span>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-forest-DEFAULT mb-4">
              How to Use Microgreens
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {usageIdeas.map((idea, i) => (
              <AnimatedSection key={idea.title} delay={i * 0.1}>
                <div className="text-center p-7 rounded-3xl bg-beige-200 hover:bg-leafy-50 transition-colors duration-300 group">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{idea.emoji}</div>
                  <h3 className="font-playfair font-bold text-forest-DEFAULT text-lg mb-2">{idea.title}</h3>
                  <p className="font-inter text-text-muted text-sm">{idea.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="section-tag mb-4">❤️ Loved by Coimbatore</span>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-forest-DEFAULT mb-4">
              What Our Customers Say
            </h2>
            <p className="font-inter text-text-muted text-lg max-w-xl mx-auto">
              From home cooks to professional chefs, nutritionists to fitness trainers — everyone is Kraving microgreens.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {defaultTestimonials.map((t, i) => (
              <TestimonialCard key={t.name} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="section-tag mb-4">💬 Questions</span>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-forest-DEFAULT mb-4">
              Got Questions? We've Got Fresh Answers
            </h2>
            <p className="font-inter text-text-muted max-w-xl mx-auto">
              Curious about microgreens? Here are answers to the questions we hear most from our community.
            </p>
          </AnimatedSection>
          <FAQAccordion />
        </div>
      </section>

      {/* CTA BANNER */}
      <CTABanner />
    </>
  );
}
