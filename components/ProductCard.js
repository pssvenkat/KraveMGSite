'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Star } from 'lucide-react';

export default function ProductCard({ product, index = 0 }) {
  const whatsappMsg = `Hi Krave! I'd like to order ${product.name} Microgreens 🌱`;
  const waUrl = `https://wa.me/919360123917?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: 'easeOut' }}
      className="group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 flex flex-col"
    >
      {/* Image area */}
      <div className={`relative h-52 bg-gradient-to-br ${product.bgGradient} overflow-hidden`}>
        {/* Decorative circles */}
        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
        <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-white/10" />

        {/* Emoji as placeholder visual */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-8xl select-none group-hover:scale-110 transition-transform duration-500"
            style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))' }}
          >
            {product.emoji}
          </span>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full"
            style={{ color: product.color }}>
            <Leaf className="w-3 h-3" />
            {product.category}
          </span>
        </div>

        {/* Featured badge */}
        {product.featured && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-400 text-amber-900 text-xs font-bold rounded-full">
              <Star className="w-3 h-3 fill-current" />
              Popular
            </span>
          </div>
        )}

        {/* Grow days */}
        <div className="absolute bottom-4 right-4">
          <span className="inline-flex items-center px-3 py-1 bg-white/80 backdrop-blur-sm text-xs font-medium text-gray-700 rounded-full">
            🌱 {product.growDays}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex-1">
          <div className="mb-1">
            <p className="font-inter text-xs font-semibold uppercase tracking-widest" style={{ color: product.color }}>
              {product.tagline}
            </p>
          </div>
          <h3 className="font-playfair text-xl font-bold text-forest-DEFAULT mb-2">
            {product.name} Microgreens
          </h3>
          <p className="font-inter text-sm text-text-muted leading-relaxed mb-4 line-clamp-2">
            {product.excerpt}
          </p>

          {/* Flavor profile */}
          <div className="flex items-start gap-2 mb-4 p-3 rounded-2xl bg-beige-200">
            <span className="text-lg">👅</span>
            <div>
              <span className="font-inter text-xs font-semibold text-forest-DEFAULT block">Flavor Profile</span>
              <span className="font-inter text-xs text-text-muted">{product.flavor}</span>
            </div>
          </div>

          {/* Top 2 benefits */}
          <div className="space-y-1.5 mb-5">
            {product.benefits.slice(0, 2).map((b, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center"
                  style={{ backgroundColor: `${product.color}20` }}>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: product.color }} />
                </div>
                <span className="font-inter text-xs text-text-muted">{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-auto pt-4 border-t border-beige-200">
          <Link
            href={`/microgreens/${product.slug}`}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 border-2 border-beige-300 text-forest-DEFAULT text-sm font-semibold rounded-2xl hover:border-leafy-DEFAULT hover:text-leafy-DEFAULT transition-all duration-200"
          >
            Details
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-leafy-DEFAULT text-white text-sm font-semibold rounded-2xl hover:bg-forest-DEFAULT transition-all duration-200"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Order
          </a>
        </div>
      </div>
    </motion.div>
  );
}
