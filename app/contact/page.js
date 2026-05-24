'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import CTABanner from '@/components/CTABanner';
import FAQAccordion from '@/components/FAQAccordion';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';

const contactFaqs = [
  {
    question: 'What is the minimum order quantity?',
    answer: 'There is no minimum order! You can order a single 50g pack or a multi-variety bundle. We accommodate all order sizes.',
  },
  {
    question: 'Which areas do you deliver to in Coimbatore?',
    answer: 'We currently deliver across Coimbatore city and surrounding areas. WhatsApp us with your location to confirm delivery availability.',
  },
  {
    question: 'Can I visit your farm?',
    answer: 'Yes! We welcome farm visits and tours. Please schedule in advance via WhatsApp so we can ensure someone is available to guide you.',
  },
  {
    question: 'Do you supply to restaurants and hotels?',
    answer: 'Absolutely. We have B2B supply arrangements with several restaurants in Coimbatore. WhatsApp us with your requirements for a custom quote.',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', subject: 'Order Inquiry' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open WhatsApp with form data
    const msg = `Hi Krave! I'm ${formData.name}.\n\nSubject: ${formData.subject}\n\n${formData.message}\n\nContact: ${formData.email || formData.phone}`;
    window.open(`https://wa.me/919360123917?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-forest-DEFAULT to-leafy-DEFAULT relative overflow-hidden">
        <div className="absolute top-10 right-10 text-6xl opacity-20 animate-float select-none">💬</div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white/90 text-sm font-inter font-medium mb-5">
              📍 Coimbatore, Tamil Nadu
            </span>
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5">
              Let's Grow Together
            </h1>
            <p className="font-inter text-white/80 text-lg max-w-2xl mx-auto">
              Whether you want to order fresh microgreens, learn about workshops, or simply say hello — 
              we'd love to hear from you. WhatsApp is always fastest!
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="font-playfair text-2xl font-bold text-forest-DEFAULT mb-8">Get in Touch</h2>

                {/* WhatsApp CTA — primary */}
                <a
                  id="contact-whatsapp-cta"
                  href="https://wa.me/919360123917"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-green-50 border-2 border-green-200 hover:border-green-400 hover:bg-green-100 transition-all duration-200 mb-6"
                >
                  <div className="w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-inter font-bold text-green-800">WhatsApp (Fastest)</div>
                    <div className="font-inter text-green-600">+91 93601 23917</div>
                    <div className="font-inter text-xs text-green-500 mt-0.5">Usually replies within minutes</div>
                  </div>
                </a>

                {/* Other contact options */}
                <div className="space-y-4">
                  <a
                    href="mailto:grow@kravemicrogreens.in"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-beige-200 hover:bg-beige-300 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-leafy-DEFAULT flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-inter font-semibold text-forest-DEFAULT text-sm">Email</div>
                      <div className="font-inter text-text-muted text-sm">grow@kravemicrogreens.in</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-beige-200">
                    <div className="w-10 h-10 rounded-xl bg-leafy-DEFAULT flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-inter font-semibold text-forest-DEFAULT text-sm">Location</div>
                      <div className="font-inter text-text-muted text-sm">Coimbatore, Tamil Nadu, India</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-beige-200">
                    <div className="w-10 h-10 rounded-xl bg-leafy-DEFAULT flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-inter font-semibold text-forest-DEFAULT text-sm">Hours</div>
                      <div className="font-inter text-text-muted text-sm">Mon–Sat: 8:00 AM – 8:00 PM</div>
                    </div>
                  </div>
                </div>

                {/* Google Map */}
                <div className="mt-6 rounded-2xl overflow-hidden border-2 border-beige-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125328.93099693884!2d76.89474862734375!3d11.01680999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Krave Microgreens Location in Coimbatore"
                  />
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={0.2}>
                <div className="bg-beige-200 rounded-3xl p-8 sm:p-10">
                  <h2 className="font-playfair text-2xl font-bold text-forest-DEFAULT mb-6">Send Us a Message</h2>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <CheckCircle className="w-16 h-16 text-leafy-DEFAULT mb-4" />
                      <h3 className="font-playfair text-2xl font-bold text-forest-DEFAULT mb-2">Opening WhatsApp!</h3>
                      <p className="font-inter text-text-muted">Your message is ready to send via WhatsApp.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="font-inter text-xs font-bold uppercase tracking-wide text-forest-DEFAULT block mb-2">
                            Your Name *
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Priya Sundaram"
                            className="w-full px-4 py-3 rounded-2xl bg-white border-2 border-transparent focus:border-leafy-DEFAULT focus:outline-none font-inter text-sm text-forest-DEFAULT placeholder:text-text-muted/50 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="font-inter text-xs font-bold uppercase tracking-wide text-forest-DEFAULT block mb-2">
                            Phone / WhatsApp
                          </label>
                          <input
                            id="contact-phone"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 XXXXX XXXXX"
                            className="w-full px-4 py-3 rounded-2xl bg-white border-2 border-transparent focus:border-leafy-DEFAULT focus:outline-none font-inter text-sm text-forest-DEFAULT placeholder:text-text-muted/50 transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="font-inter text-xs font-bold uppercase tracking-wide text-forest-DEFAULT block mb-2">
                          Email Address
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="hello@example.com"
                          className="w-full px-4 py-3 rounded-2xl bg-white border-2 border-transparent focus:border-leafy-DEFAULT focus:outline-none font-inter text-sm text-forest-DEFAULT placeholder:text-text-muted/50 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="font-inter text-xs font-bold uppercase tracking-wide text-forest-DEFAULT block mb-2">
                          Subject *
                        </label>
                        <select
                          id="contact-subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-2xl bg-white border-2 border-transparent focus:border-leafy-DEFAULT focus:outline-none font-inter text-sm text-forest-DEFAULT transition-colors"
                        >
                          <option>Order Inquiry</option>
                          <option>Subscription Plans</option>
                          <option>Workshop Registration</option>
                          <option>B2B / Restaurant Supply</option>
                          <option>Grow Kit Purchase</option>
                          <option>General Question</option>
                          <option>Farm Visit</option>
                        </select>
                      </div>

                      <div>
                        <label className="font-inter text-xs font-bold uppercase tracking-wide text-forest-DEFAULT block mb-2">
                          Message *
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Tell us what you're looking for, what microgreens interest you, or any questions you have..."
                          className="w-full px-4 py-3 rounded-2xl bg-white border-2 border-transparent focus:border-leafy-DEFAULT focus:outline-none font-inter text-sm text-forest-DEFAULT placeholder:text-text-muted/50 transition-colors resize-none"
                        />
                      </div>

                      <button
                        id="contact-submit"
                        type="submit"
                        className="w-full flex items-center justify-center gap-3 py-4 bg-leafy-DEFAULT text-white font-semibold text-lg rounded-2xl hover:bg-forest-DEFAULT transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-green font-inter"
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Send via WhatsApp
                      </button>

                      <p className="font-inter text-xs text-text-muted text-center">
                        Submitting opens WhatsApp with your message pre-filled. We respond within minutes during business hours.
                      </p>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-beige-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-playfair text-3xl font-bold text-forest-DEFAULT">Common Questions</h2>
          </AnimatedSection>
          <FAQAccordion faqs={contactFaqs} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
