import AnimatedSection from '@/components/AnimatedSection';
import CTABanner from '@/components/CTABanner';

export const metadata = {
  title: 'About Krave Microgreens — Our Story & Mission',
  description:
    'Learn about Krave Microgreens — our journey from a single idea to Coimbatore\'s premier microgreens farm. Grown with science, care, and conscience.',
};

const values = [
  {
    emoji: '🌱',
    title: 'Organic Always',
    description: 'Not organic when convenient — organic always. Every seed, every growing medium, every drop of water is chosen for purity and sustainability.',
  },
  {
    emoji: '🔬',
    title: 'Science-Backed Growing',
    description: 'We follow evidence-based growing protocols — precise temperature, humidity, light cycles, and harvest timing to maximize nutritional density.',
  },
  {
    emoji: '🏡',
    title: 'Community Rooted',
    description: 'We\'re not just a farm. We\'re neighbors who care about the health of our community, the livelihoods of local growers, and the future of food in Coimbatore.',
  },
  {
    emoji: '♻️',
    title: 'Zero Waste Philosophy',
    description: 'From compostable packaging to zero-chemical growing, every decision we make considers its impact on the planet we\'re all borrowing from future generations.',
  },
];

const timeline = [
  { year: '2023', title: 'The Beginning', desc: 'Founded with one idea: healthy eating should be beautiful, flavorful, and effortless.' },
  { year: '2023', title: 'First Harvest', desc: 'Grew our first batch of broccoli microgreens and shared them with friends and family in Coimbatore.' },
  { year: '2024', title: 'Growing Varieties', desc: 'Expanded to 15+ varieties including kale, sunflower, beetroot, and heritage seeds sourced locally.' },
  { year: '2024', title: 'Workshop Launch', desc: 'Launched DIY microgreens workshops to share knowledge with women SHGs, students, and urban homemakers.' },
  { year: '2025', title: 'Community Impact', desc: 'Now serving hundreds of families, restaurants, and health professionals across Coimbatore with daily fresh delivery.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-DEFAULT to-leafy-DEFAULT" />
        <div className="absolute top-12 right-16 text-6xl opacity-20 animate-float select-none">🌿</div>
        <div className="absolute bottom-12 left-12 text-5xl opacity-20 animate-float-delayed select-none">🌱</div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white/90 text-sm font-inter font-medium mb-5">
              🌱 Our Story
            </span>
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              We Don't Just Grow Microgreens.
              <br />
              <span className="text-sage-light italic">We Grow Trust.</span>
            </h1>
            <p className="font-inter text-white/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Our journey began with a simple conviction: that real food, grown the right way, 
              has the power to transform how we feel, how we cook, and how we live.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="section-tag mb-5">Our Mission</span>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-forest-DEFAULT mb-6 leading-tight">
                Bringing the Power of Nature to Every Kitchen in Coimbatore
              </h2>
              <p className="font-inter text-text-muted text-lg leading-relaxed mb-5">
                We started Krave Microgreens in 2023 with one idea: "Healthy eating should be beautiful, flavorful, and effortless." 
                In a world of fast food and chemical farming, we believed there was a better way.
              </p>
              <p className="font-inter text-text-muted leading-relaxed mb-5">
                Microgreens aren't new — chefs have known about their extraordinary flavor and visual impact for decades. 
                But the science of their nutritional density was what truly inspired us. When we learned that broccoli 
                microgreens contain up to 100× more sulforaphane than mature broccoli, we knew we had to make this 
                accessible to every family, not just those who could afford premium restaurants.
              </p>
              <p className="font-inter text-text-muted leading-relaxed">
                Today, we grow over 20 varieties of certified-organic microgreens in our controlled urban farm, 
                harvesting fresh every single day and delivering within hours. Every tray we sell carries our promise: 
                the freshest, most nutritious greens you've ever tasted.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { emoji: '🌱', num: '20+', label: 'Microgreen Varieties' },
                  { emoji: '👨‍👩‍👧', num: '500+', label: 'Happy Families' },
                  { emoji: '🌿', num: '100%', label: 'Pesticide-Free' },
                  { emoji: '⏱️', num: '<12h', label: 'Farm to Door' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white rounded-3xl p-6 shadow-card text-center">
                    <div className="text-4xl mb-2">{stat.emoji}</div>
                    <div className="font-playfair text-3xl font-bold text-leafy-DEFAULT mb-1">{stat.num}</div>
                    <div className="font-inter text-xs text-text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-beige-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="section-tag mb-4">Our Values</span>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-forest-DEFAULT mb-4">
              What Drives Everything We Do
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="text-4xl mb-4">{v.emoji}</div>
                  <h3 className="font-playfair font-bold text-forest-DEFAULT text-xl mb-3">{v.title}</h3>
                  <p className="font-inter text-text-muted text-sm leading-relaxed">{v.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="section-tag mb-4">Our Journey</span>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-forest-DEFAULT mb-4">
              From Seed to a Growing Movement
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-sage-light" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className={`flex gap-6 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`flex-1 ${i % 2 === 0 ? 'sm:text-right sm:pr-10' : 'sm:text-left sm:pl-10'} pl-14 sm:pl-0`}>
                      <span className="inline-block font-inter text-xs font-bold text-leafy-DEFAULT tracking-widest uppercase mb-1">{item.year}</span>
                      <h3 className="font-playfair font-bold text-forest-DEFAULT text-xl mb-1">{item.title}</h3>
                      <p className="font-inter text-text-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>

                    {/* Dot — positioned on left for mobile, center for desktop */}
                    <div className="absolute left-4 sm:relative sm:left-auto sm:flex-none sm:flex sm:items-start sm:justify-center sm:pt-1">
                      <div className="w-5 h-5 rounded-full bg-leafy-DEFAULT border-4 border-white shadow-glow-green" />
                    </div>

                    {/* Spacer */}
                    <div className="flex-1 hidden sm:block" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Farming */}
      <section className="py-20 bg-gradient-to-br from-forest-DEFAULT to-leafy-DEFAULT relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-sage-DEFAULT/10 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white/90 text-sm font-inter mb-5">
              ♻️ Sustainability
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-6">
              Growing Food. Not Waste.
            </h2>
            <p className="font-inter text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Urban microgreens farming uses up to 93% less water than conventional agriculture and produces zero agricultural runoff. 
              Our growing medium is composted after every harvest. Our packaging is minimal and biodegradable. 
              We calculate our carbon footprint and offset it. Because we believe growing food and protecting the planet aren't competing ideas — they're the same idea.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: '💧', title: '93% Less Water', desc: 'vs conventional agriculture' },
                { icon: '🏙️', title: 'Urban Growing', desc: 'Zero transport emissions' },
                { icon: '🌍', title: 'Zero Chemicals', desc: 'Pure, clean growing always' },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-2xl bg-white/10 border border-white/15 text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="font-inter font-bold text-white text-sm">{item.title}</div>
                  <div className="font-inter text-white/60 text-xs mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner
        tag="Join Our Community"
        title="Grow Healthier. Live Better. Krave More."
        description="Become part of Coimbatore's growing community of health-conscious families who have made fresh microgreens a daily habit."
        primaryCta={{ label: 'Start Your Order', href: 'https://wa.me/919360123917' }}
        secondaryCta={{ label: 'Learn About Workshops', href: '/workshops' }}
      />
    </>
  );
}
