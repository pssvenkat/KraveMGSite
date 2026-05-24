import AnimatedSection from '@/components/AnimatedSection';
import CTABanner from '@/components/CTABanner';

export const metadata = {
  title: 'Microgreens Workshops & Training — Learn to Grow at Home',
  description:
    'Join Krave Microgreens workshops in Coimbatore. DIY home growing, women SHG training, student programs, urban farming, and commercial setup support.',
};

const workshops = [
  {
    id: 'home-growing',
    emoji: '🏠',
    title: 'Home Growing Workshop',
    duration: '3 hours',
    capacity: 'Max 10 participants',
    level: 'Beginner',
    color: '#2d6a4f',
    description: 'Learn everything you need to start growing your own fresh microgreens at home. From seed selection to harvest, we cover the complete cycle.',
    topics: [
      'Choosing the right seeds and growing medium',
      'Setting up your home growing station',
      'Watering schedules and light requirements',
      'Pest prevention and hygiene',
      'Harvesting at peak nutritional density',
      'Storage and freshness tips',
    ],
    for: 'Health enthusiasts, home cooks, and anyone curious about growing their own food',
  },
  {
    id: 'women-shg',
    emoji: '👩‍🌾',
    title: 'Women SHG Training Program',
    duration: '2-day intensive',
    capacity: '15-20 participants',
    level: 'Beginner to Intermediate',
    color: '#7b2d8b',
    description: 'A comprehensive training program designed specifically for women Self Help Groups (SHGs) interested in microgreens as a livelihood opportunity.',
    topics: [
      'Microgreens farming as a business model',
      'Investment and return calculations',
      'Market identification and sales channels',
      'Quality control and packaging standards',
      'Pricing strategy for B2B and B2C',
      'Government scheme awareness',
    ],
    for: 'Women SHG members, homemakers seeking income, and aspiring entrepreneurs',
  },
  {
    id: 'students',
    emoji: '🎓',
    title: 'Student STEM Workshop',
    duration: '2-4 hours',
    capacity: 'School/College groups',
    level: 'All levels',
    color: '#1a7ab8',
    description: 'An engaging educational experience that connects biology, nutrition science, and sustainable agriculture for students of all ages.',
    topics: [
      'Plant biology and the germination process',
      'Photosynthesis and nutrient cycles',
      'Nutritional science — why microgreens are superfoods',
      'Urban agriculture and food security',
      'Hands-on growing activity (take-home kit)',
      'Scientific observation and documentation',
    ],
    for: 'School students (Class 5-12) and college groups for biology and agriculture programs',
  },
  {
    id: 'urban-farming',
    emoji: '🏙️',
    title: 'Urban Farming Masterclass',
    duration: 'Full-day (6 hours)',
    capacity: 'Max 8 participants',
    level: 'Intermediate to Advanced',
    color: '#c8a415',
    description: 'A deep-dive into scaling microgreens production in urban settings, covering advanced techniques, equipment, and business development.',
    topics: [
      'Indoor growing systems and equipment selection',
      'Lighting optimization — LED spectra and duration',
      'Controlled environment agriculture (CEA) basics',
      'Production planning and cycle management',
      'Quality testing and consistency',
      'Scaling from hobby to commercial operation',
    ],
    for: 'Aspiring urban farmers, those with existing setups wanting to scale, and agri-tech enthusiasts',
  },
  {
    id: 'commercial',
    emoji: '🏭',
    title: 'Commercial Setup Training',
    duration: 'Custom program',
    capacity: 'Individual/Small teams',
    level: 'Advanced',
    color: '#1a3d2b',
    description: 'One-on-one mentoring and setup support for serious entrepreneurs looking to establish a commercial microgreens operation.',
    topics: [
      'Business plan and financial modeling',
      'Facility design and layout optimization',
      'Equipment sourcing and vendor relationships',
      'Food safety certification guidance',
      'B2B market entry (restaurants, hotels, hospitals)',
      'Ongoing mentoring and troubleshooting',
    ],
    for: 'StartupTN aspirants, serious entrepreneurs, and investors exploring agri-business',
  },
];

export default function WorkshopsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-forest-DEFAULT to-leafy-DEFAULT relative overflow-hidden">
        <div className="absolute top-10 right-10 text-6xl opacity-20 animate-float select-none">🌿</div>
        <div className="absolute bottom-10 left-10 text-5xl opacity-20 animate-float-delayed select-none">🎓</div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white/90 text-sm font-inter font-medium mb-5">
              🎓 Learn & Grow
            </span>
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Learn the Art & Science of Microgreens
            </h1>
            <p className="font-inter text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
              From curious beginners to aspiring entrepreneurs — our workshops are designed to give you real, practical 
              knowledge you can use from day one.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Workshops */}
      <section className="py-20 bg-beige-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {workshops.map((workshop, i) => (
              <AnimatedSection key={workshop.id} delay={i * 0.08}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* Left panel */}
                    <div className="p-8 lg:p-10 flex flex-col justify-between"
                      style={{ background: `linear-gradient(135deg, ${workshop.color}15, ${workshop.color}05)` }}>
                      <div>
                        <div className="text-5xl mb-4">{workshop.emoji}</div>
                        <h2 className="font-playfair text-2xl font-bold text-forest-DEFAULT mb-2">{workshop.title}</h2>
                        <p className="font-inter text-sm text-text-muted mb-4 leading-relaxed">{workshop.description}</p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="font-inter text-xs font-bold uppercase tracking-wide" style={{ color: workshop.color }}>Duration</span>
                          <span className="font-inter text-sm text-text-muted">{workshop.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-inter text-xs font-bold uppercase tracking-wide" style={{ color: workshop.color }}>Capacity</span>
                          <span className="font-inter text-sm text-text-muted">{workshop.capacity}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-inter text-xs font-bold uppercase tracking-wide" style={{ color: workshop.color }}>Level</span>
                          <span className="font-inter text-sm text-text-muted">{workshop.level}</span>
                        </div>
                      </div>
                    </div>

                    {/* Middle: Topics */}
                    <div className="p-8 lg:p-10 border-t lg:border-t-0 lg:border-l border-beige-200">
                      <h3 className="font-inter text-xs font-bold uppercase tracking-widest text-forest-DEFAULT mb-5">What You'll Learn</h3>
                      <ul className="space-y-2.5">
                        {workshop.topics.map((topic, j) => (
                          <li key={j} className="flex items-start gap-2.5">
                            <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                              style={{ backgroundColor: `${workshop.color}20` }}>
                              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: workshop.color }} />
                            </div>
                            <span className="font-inter text-sm text-text-muted">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: CTA */}
                    <div className="p-8 lg:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-beige-200">
                      <div className="mb-6">
                        <h3 className="font-inter text-xs font-bold uppercase tracking-widest text-forest-DEFAULT mb-3">Perfect For</h3>
                        <p className="font-inter text-sm text-text-muted leading-relaxed">{workshop.for}</p>
                      </div>

                      <div className="space-y-3">
                        <a
                          href={`https://wa.me/919360123917?text=Hi! I'm interested in the ${workshop.title} 🎓`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 py-3.5 text-white font-semibold rounded-2xl transition-all duration-300 text-sm"
                          style={{ backgroundColor: workshop.color }}
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                          Enquire on WhatsApp
                        </a>

                        <div className="text-center">
                          <span className="font-inter text-xs text-text-muted">Certificate of completion provided</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Grow Kits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="section-tag mb-4">🧰 Grow Kits</span>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-forest-DEFAULT mb-4">
              Start Growing at Home Today
            </h2>
            <p className="font-inter text-text-muted max-w-xl mx-auto">
              Our grow kits come with everything you need to start growing microgreens at home — seeds, medium, tray, and instructions.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: '🌱', name: 'Basic Starter Kit', desc: 'Single tray + 2 seed varieties + growing medium + instructions. Perfect first step.', for: 'Complete beginners' },
              { emoji: '👨‍👩‍👧', name: 'Family Pack Kit', desc: '3 trays + 5 seed varieties + premium growing medium + recipe guide. Enough for the whole family.', for: 'Families & enthusiasts' },
              { emoji: '🧒', name: 'Kids STEM Kit', desc: 'Fun, educational kit designed for children. Watch seeds sprout in real time!', for: 'Age 6-14, schools' },
              { emoji: '🧘', name: 'Wellness Kit', desc: 'Curated health-focused varieties: broccoli, kale, wheatgrass with nutrition guide.', for: 'Health-conscious adults' },
              { emoji: '🎉', name: 'Corporate Event Kit', desc: 'Branded grow kits for corporate events, team building, and office gifting.', for: 'Corporate clients' },
              { emoji: '💍', name: 'Return Gift Kit', desc: 'Beautifully packaged microgreens grow kit — a unique, memorable gift for weddings & baby showers.', for: 'Weddings & celebrations' },
            ].map((kit, i) => (
              <AnimatedSection key={kit.name} delay={i * 0.08}>
                <div className="bg-beige-200 rounded-3xl p-7 hover:bg-white hover:shadow-card transition-all duration-300 h-full flex flex-col">
                  <div className="text-4xl mb-4">{kit.emoji}</div>
                  <h3 className="font-playfair font-bold text-forest-DEFAULT text-lg mb-2">{kit.name}</h3>
                  <p className="font-inter text-sm text-text-muted leading-relaxed flex-1 mb-3">{kit.desc}</p>
                  <p className="font-inter text-xs text-leafy-DEFAULT font-semibold mb-4">Best for: {kit.for}</p>
                  <a
                    href={`https://wa.me/919360123917?text=Hi! I'm interested in the ${kit.name} 🧰`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center py-2.5 text-sm font-semibold text-leafy-DEFAULT border-2 border-leafy-DEFAULT rounded-2xl hover:bg-leafy-DEFAULT hover:text-white transition-all duration-200"
                  >
                    Enquire →
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        tag="Ready to Grow?"
        title="Join Our Next Workshop"
        description="Limited spots available. WhatsApp us today to reserve your place and start your microgreens growing journey."
        primaryCta={{ label: 'Reserve Your Spot', href: 'https://wa.me/919360123917?text=Hi! I\'d like to join a Krave Microgreens workshop 🌱' }}
        secondaryCta={{ label: 'View Grow Kits', href: '#kits' }}
      />
    </>
  );
}
