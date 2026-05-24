'use client';

import Link from 'next/link';
import { Leaf, MapPin, Mail, Phone, Instagram, Facebook, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const footerLinks = {
  'Products': [
    { href: '/microgreens/broccoli', label: 'Broccoli Microgreens' },
    { href: '/microgreens/kale', label: 'Kale Microgreens' },
    { href: '/microgreens/sunflower', label: 'Sunflower Microgreens' },
    { href: '/microgreens/beetroot', label: 'Beetroot Microgreens' },
    { href: '/microgreens', label: 'All Varieties' },
  ],
  'Services': [
    { href: '/subscriptions', label: 'Subscription Boxes' },
    { href: '/workshops', label: 'DIY Workshops' },
    { href: '/workshops', label: 'Grow Kits' },
    { href: '/workshops', label: 'Farm Support' },
  ],
  'Company': [
    { href: '/about', label: 'About Us' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-forest-DEFAULT text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sage-DEFAULT to-leafy-DEFAULT flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-playfair font-bold text-xl text-white leading-none">Krave</div>
                <div className="font-inter text-xs text-sage-light tracking-widest uppercase leading-none">Microgreens</div>
              </div>
            </Link>

            <p className="text-white/70 font-inter text-sm leading-relaxed mb-6 max-w-xs">
              Premium organic microgreens grown with science, care, and conscience. 
              Harvested fresh daily and delivered to your door in Coimbatore.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2 mb-6">
              {['🌱 Pesticide-Free', '🌿 Non-GMO', '♻️ Zero Waste'].map((badge) => (
                <span key={badge} className="text-xs font-inter font-medium px-3 py-1.5 rounded-full bg-white/10 text-white/80 border border-white/10">
                  {badge}
                </span>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: 'Instagram', href: '#' },
                { icon: Facebook, label: 'Facebook', href: '#' },
                { icon: Youtube, label: 'YouTube', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white/70 hover:bg-sage-DEFAULT hover:text-white transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
              {/* WhatsApp */}
              <a
                href="https://wa.me/919360123917"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 hover:bg-green-500 hover:text-white transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-playfair font-semibold text-white text-base mb-4">{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-inter text-sm text-white/60 hover:text-sage-light transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-10 border-t border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a
              href="https://maps.google.com/?q=Coimbatore,Tamil+Nadu,India"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-200 group"
            >
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-sage-DEFAULT transition-colors duration-200">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="font-inter text-sm">Coimbatore, Tamil Nadu, India</span>
            </a>
            <a
              href="mailto:grow@kravemicrogreens.in"
              className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-200 group"
            >
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-sage-DEFAULT transition-colors duration-200">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-inter text-sm">grow@kravemicrogreens.in</span>
            </a>
            <a
              href="https://wa.me/919360123917"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-200 group"
            >
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-green-500 transition-colors duration-200">
                <Phone className="w-4 h-4" />
              </div>
              <span className="font-inter text-sm">+91 93601 23917</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-xs text-white/40">
            © {new Date().getFullYear()} Krave Microgreens. Made with 💚 for healthy living in Coimbatore.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="font-inter text-xs text-white/40 hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="font-inter text-xs text-white/40 hover:text-white/60 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
