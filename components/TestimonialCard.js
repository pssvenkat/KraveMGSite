'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const defaultTestimonials = [
  {
    name: 'Dr. Priya Sundaram',
    role: 'Nutritionist, Coimbatore',
    text: 'I recommend Krave Microgreens to all my clients. The freshness is unmatched — you can taste the difference. The broccoli microgreens are exceptional for detox protocols.',
    rating: 5,
    avatar: '👩‍⚕️',
  },
  {
    name: 'Chef Arjun Krishnan',
    role: 'Executive Chef, The Ritz',
    text: 'For fine dining, quality is everything. Krave\'s microgreens arrive fresh and vibrant every time. The sunflower and pea shoots are stunning on the plate and delicious in flavor.',
    rating: 5,
    avatar: '👨‍🍳',
  },
  {
    name: 'Kavitha Ramesh',
    role: 'Yoga & Wellness Coach',
    text: 'My morning smoothies are completely transformed with Krave microgreens. My energy levels, skin, and digestion have all improved dramatically. Worth every rupee!',
    rating: 5,
    avatar: '🧘‍♀️',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Fitness Trainer',
    text: 'I add sunflower microgreens to my post-workout smoothies daily. The plant protein and amino acids are real — my recovery has noticeably improved since I started.',
    rating: 5,
    avatar: '💪',
  },
  {
    name: 'Meena Anand',
    role: 'Home Cook & Mom of 3',
    text: 'My kids actually eat greens now because of Krave! The pea shoots are their favorite — sweet and crunchy. The weekly subscription makes healthy eating effortless.',
    rating: 5,
    avatar: '👩‍👧‍👦',
  },
  {
    name: 'Dr. Suresh Babu',
    role: 'Cardiologist',
    text: 'I recommend microgreens to heart patients as part of anti-inflammatory diets. Krave provides consistent quality and their broccoli microgreens are particularly beneficial for cardiovascular health.',
    rating: 5,
    avatar: '🫀',
  },
];

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className="bg-white rounded-3xl p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden group"
    >
      {/* Decorative quote mark */}
      <div className="absolute top-4 right-6 text-leafy-DEFAULT/10 group-hover:text-leafy-DEFAULT/20 transition-colors duration-300">
        <Quote className="w-16 h-16 fill-current" />
      </div>

      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Text */}
      <p className="font-inter text-sm sm:text-base text-text-muted leading-relaxed mb-6 relative z-10">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-leafy-DEFAULT to-forest-DEFAULT flex items-center justify-center text-xl shadow-glow-green">
          {testimonial.avatar}
        </div>
        <div>
          <div className="font-inter font-semibold text-forest-DEFAULT text-sm">{testimonial.name}</div>
          <div className="font-inter text-xs text-text-muted">{testimonial.role}</div>
        </div>
      </div>
    </motion.div>
  );
}

export { defaultTestimonials };
