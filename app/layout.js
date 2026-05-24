import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Krave Microgreens — Fresh Organic Microgreens Delivered in Coimbatore',
    template: '%s | Krave Microgreens',
  },
  description:
    'Premium pesticide-free, non-GMO microgreens harvested fresh daily in Coimbatore, Tamil Nadu. Broccoli, kale, sunflower, and 15+ varieties delivered to your door.',
  keywords: [
    'microgreens Coimbatore',
    'organic microgreens',
    'broccoli microgreens benefits',
    'fresh microgreens delivery',
    'healthy greens India',
    'pesticide free vegetables',
    'superfood delivery Coimbatore',
    'krave microgreens',
  ],
  authors: [{ name: 'Krave Microgreens' }],
  creator: 'Krave Microgreens',
  metadataBase: new URL('https://kravemicrogreens.in'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://kravemicrogreens.in',
    siteName: 'Krave Microgreens',
    title: 'Krave Microgreens — Fresh Organic Microgreens Delivered in Coimbatore',
    description:
      'Premium pesticide-free, non-GMO microgreens harvested fresh daily. Delivered to your door in Coimbatore, Tamil Nadu.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Krave Microgreens — Fresh Organic Greens',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krave Microgreens — Fresh Organic Microgreens',
    description: 'Premium pesticide-free microgreens harvested fresh daily in Coimbatore.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Krave Microgreens',
  alternateName: 'KraveFresh Microgreens',
  url: 'https://kravemicrogreens.in',
  telephone: '+919360123917',
  email: 'grow@kravemicrogreens.in',
  description:
    'Premium organic microgreens farm in Coimbatore, Tamil Nadu. Pesticide-free, non-GMO microgreens harvested daily and delivered fresh.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Coimbatore',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '11.0168',
    longitude: '76.9558',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '08:00',
    closes: '20:00',
  },
  sameAs: [
    'https://wa.me/919360123917',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Microgreens Varieties',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Broccoli Microgreens' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Kale Microgreens' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Sunflower Microgreens' } },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="bg-cream font-inter antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
