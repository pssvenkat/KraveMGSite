import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, Leaf } from 'lucide-react';
import { getProductBySlug, getRelatedProducts, products } from '@/lib/products';
import CTABanner from '@/components/CTABanner';
import ProductCard from '@/components/ProductCard';
import AnimatedSection from '@/components/AnimatedSection';

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: `${product.name} Microgreens — Benefits, Nutrition & Uses`,
    description: product.excerpt,
    openGraph: {
      title: `${product.name} Microgreens | Krave Microgreens`,
      description: product.excerpt,
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(slug, 3);
  const waMsg = `Hi Krave! I'd like to order ${product.name} Microgreens 🌱`;
  const waUrl = `https://wa.me/919360123917?text=${encodeURIComponent(waMsg)}`;

  return (
    <>
      {/* Breadcrumb + Hero */}
      <section className={`pt-28 pb-0 bg-gradient-to-br ${product.bgGradient} relative overflow-hidden`}>
        <div className="absolute top-8 right-12 text-8xl opacity-30 animate-float select-none">{product.emoji}</div>
        <div className="absolute top-20 right-1/4 text-5xl opacity-15 animate-float-delayed select-none">🌿</div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {/* Breadcrumb */}
          <Link
            href="/microgreens"
            className="inline-flex items-center gap-2 text-sm font-inter font-medium text-forest-DEFAULT/70 hover:text-leafy-DEFAULT transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All Microgreens
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-white/60"
                  style={{ color: product.color }}
                >
                  <Leaf className="w-3 h-3" />
                  {product.category}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-white/60 text-gray-600">
                  <Clock className="w-3 h-3" />
                  {product.growDays}
                </span>
              </div>

              <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-forest-DEFAULT mb-3 leading-tight">
                {product.name} Microgreens
              </h1>
              <p className="font-inter text-lg font-medium mb-4" style={{ color: product.color }}>
                {product.tagline}
              </p>
              <p className="font-inter text-text-muted text-base sm:text-lg leading-relaxed mb-6 max-w-lg">
                {product.excerpt}
              </p>

              {/* Flavor */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/60 backdrop-blur-sm mb-6">
                <span className="text-2xl">👅</span>
                <div>
                  <span className="font-inter text-xs font-bold text-forest-DEFAULT uppercase tracking-wide block mb-0.5">Flavor Profile</span>
                  <span className="font-inter text-sm text-text-muted">{product.flavor}</span>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/60 backdrop-blur-sm mb-8">
                <span className="text-2xl">🤲</span>
                <div>
                  <span className="font-inter text-xs font-bold text-forest-DEFAULT uppercase tracking-wide block mb-0.5">Texture</span>
                  <span className="font-inter text-sm text-text-muted">{product.texture}</span>
                </div>
              </div>

              {/* CTA */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-leafy-DEFAULT text-white font-semibold text-lg rounded-full hover:bg-forest-DEFAULT transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-green font-inter"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Order {product.name} Microgreens
              </a>
            </div>

            {/* Right: Big emoji visual */}
            <div className="hidden lg:flex items-center justify-center">
              <div
                className="text-[200px] select-none animate-float"
                style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))' }}
              >
                {product.emoji}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detail sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Benefits */}
            <AnimatedSection className="bg-beige-200 rounded-3xl p-8">
              <h2 className="font-playfair text-2xl font-bold text-forest-DEFAULT mb-6 flex items-center gap-2">
                💪 Health Benefits
              </h2>
              <ul className="space-y-3">
                {product.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-leafy-DEFAULT/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-leafy-DEFAULT" />
                    </div>
                    <span className="font-inter text-sm text-text-muted">{b}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            {/* Nutrition */}
            <AnimatedSection delay={0.1} className="bg-gradient-to-br from-forest-DEFAULT to-leafy-DEFAULT rounded-3xl p-8 text-white">
              <h2 className="font-playfair text-2xl font-bold mb-6 flex items-center gap-2">
                🧪 Nutrition Highlights
              </h2>
              <div className="space-y-4">
                {Object.entries(product.nutrition).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between border-b border-white/20 pb-3 last:border-0">
                    <span className="font-inter text-sm font-medium text-white/90">{key}</span>
                    <span className="font-inter text-xs text-sage-light font-semibold text-right max-w-[120px]">{value}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Usage + Storage */}
            <div className="space-y-6">
              <AnimatedSection delay={0.2} className="bg-white border-2 border-beige-200 rounded-3xl p-8">
                <h2 className="font-playfair text-2xl font-bold text-forest-DEFAULT mb-5">
                  🍴 How to Use
                </h2>
                <ul className="space-y-2.5">
                  {product.usage.map((u, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-leafy-DEFAULT font-bold text-sm mt-0.5">→</span>
                      <span className="font-inter text-sm text-text-muted">{u}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={0.3} className="bg-amber-50 border-2 border-amber-100 rounded-3xl p-6">
                <h3 className="font-playfair font-bold text-amber-800 text-lg mb-2 flex items-center gap-2">
                  ❄️ Storage
                </h3>
                <p className="font-inter text-sm text-amber-700 leading-relaxed">{product.storage}</p>
              </AnimatedSection>
            </div>
          </div>

          {/* Recipes */}
          {product.recipes && product.recipes.length > 0 && (
            <AnimatedSection className="mt-16">
              <h2 className="font-playfair text-3xl font-bold text-forest-DEFAULT mb-8 text-center">
                🍳 Recipe Ideas
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {product.recipes.map((recipe, i) => (
                  <div key={i} className="bg-beige-200 rounded-3xl p-7">
                    <h3 className="font-playfair font-bold text-forest-DEFAULT text-xl mb-2">{recipe.name}</h3>
                    <p className="font-inter text-text-muted text-sm leading-relaxed">{recipe.description}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-beige-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-playfair text-3xl font-bold text-forest-DEFAULT">You Might Also Like</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={`Love ${product.name} Microgreens?`}
        description="Order fresh today — harvested on the morning of delivery and at your door within hours. Subscribe for weekly delivery and never run out!"
        primaryCta={{ label: `Order ${product.name} on WhatsApp`, href: waUrl }}
        secondaryCta={{ label: 'View Subscriptions', href: '/subscriptions' }}
      />
    </>
  );
}
