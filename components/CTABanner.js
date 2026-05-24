'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTABanner({
  tag = 'Ready to Grow Healthier?',
  title = 'Fresh Microgreens Delivered Daily',
  description = 'Join thousands of health-conscious families in Coimbatore who start their day with Krave Microgreens. Pesticide-free, non-GMO, harvested at peak nutrition.',
  primaryCta = { label: 'Order on WhatsApp', href: 'https://wa.me/919360123917' },
  secondaryCta = { label: 'Explore Microgreens', href: '/microgreens' },
}) {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-DEFAULT via-leafy-DEFAULT to-sage-DEFAULT" />
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`
        }}
      />
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5" />
      <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-white/5" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-center">
        {/* Floating leaves */}
        <div className="absolute top-8 left-8 text-4xl opacity-40 animate-float">🌿</div>
        <div className="absolute top-12 right-12 text-3xl opacity-30 animate-float-delayed">🌱</div>
        <div className="absolute bottom-8 left-16 text-3xl opacity-30 animate-float-slow">🍃</div>
        <div className="absolute bottom-12 right-8 text-4xl opacity-40 animate-float">🌾</div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white/90 text-sm font-inter font-medium tracking-wide mb-6">
            {tag}
          </span>

          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            {title}
          </h2>

          <p className="font-inter text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={primaryCta.href}
              target={primaryCta.href.startsWith('http') ? '_blank' : undefined}
              rel={primaryCta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-2.5 px-8 py-4 bg-white text-forest-DEFAULT font-semibold rounded-full hover:bg-cream transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl font-inter"
            >
              <svg className="w-4 h-4 fill-green-600" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {primaryCta.label}
            </a>

            <a
              href={secondaryCta.href}
              className="flex items-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-full hover:border-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 font-inter"
            >
              {secondaryCta.label}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
