'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const defaultFaqs = [
  {
    question: 'What exactly are microgreens?',
    answer:
      'Microgreens are young, edible seedlings of vegetables and herbs, harvested just 7–14 days after germination. Tiny in size but mighty in nutrition, they contain up to 40× more vitamins, minerals, and antioxidants than their mature counterparts. Think of them as nature\'s most powerful little superfoods!',
  },
  {
    question: 'Are Krave Microgreens organic?',
    answer:
      'Yes! All our microgreens are grown 100% organically using non-GMO seeds, chemical-free growing mediums, and purified water. We never use pesticides or synthetic fertilizers — just clean, controlled, and sustainable farming that respects both your body and the environment.',
  },
  {
    question: 'How long do microgreens stay fresh?',
    answer:
      'Since we harvest fresh every day, your greens stay crisp and full of flavor for up to 7 days when kept refrigerated. For the best taste and nutrition, enjoy them within 3–5 days of delivery. Pro tip: don\'t wash them until just before use!',
  },
  {
    question: 'How can I use microgreens in my meals?',
    answer:
      'So many delicious ways! Sprinkle them over salads, sandwiches, soups, wraps, or smoothies. Use them as a beautiful garnish for your favorite dishes. They add a burst of color, crunch, and nutrients to every meal. The key: always add them raw at the end to preserve their nutrients.',
  },
  {
    question: 'Do you deliver to homes directly?',
    answer:
      'Absolutely! We offer farm-to-door delivery across select local areas in Coimbatore. You can choose one-time orders or weekly subscriptions — harvested fresh and delivered within hours, right from our urban farm to your kitchen.',
  },
  {
    question: 'Are microgreens the same as sprouts?',
    answer:
      'Not quite! Sprouts are germinated seeds eaten with the seed and root, grown entirely in water. Microgreens are grown in soil or a natural medium and harvested once the first true leaves appear. They\'re cleaner, safer, and richer in nutrients and flavor than sprouts.',
  },
  {
    question: 'Can I grow my own microgreens at home?',
    answer:
      'You can! And we actually teach you how — check out our DIY Workshops. We also offer Grow Kits for beginners. However, consistent quality requires the right setup, clean environment, quality seeds, and proper light and humidity, which is why many customers prefer our farm-fresh delivery.',
  },
];

export default function FAQAccordion({ faqs = defaultFaqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="bg-white rounded-2xl overflow-hidden shadow-sm border border-beige-200 hover:border-sage-300 transition-colors duration-200"
        >
          <button
            id={`faq-${index}`}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <span className="font-playfair font-semibold text-forest-DEFAULT text-base sm:text-lg pr-4 leading-snug">
              {faq.question}
            </span>
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
              openIndex === index
                ? 'bg-leafy-DEFAULT text-white'
                : 'bg-beige-200 text-forest-DEFAULT'
            }`}>
              {openIndex === index ? (
                <Minus className="w-4 h-4" />
              ) : (
                <Plus className="w-4 h-4" />
              )}
            </div>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                id={`faq-answer-${index}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                  <div className="h-px bg-beige-200 mb-4" />
                  <p className="font-inter text-text-muted text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
