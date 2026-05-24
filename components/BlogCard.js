'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';

export default function BlogCard({ post, index = 0 }) {
  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : '';

  const readingTime = post.content
    ? Math.max(1, Math.ceil(post.content.split(' ').length / 200))
    : 3;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className="group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-forest-50 to-leafy-100 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-7xl select-none">
          🌱
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-forest-DEFAULT/40 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-leafy-DEFAULT text-white text-xs font-semibold rounded-full">
            <Tag className="w-3 h-3" />
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Meta */}
        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center gap-1.5 text-text-muted">
            <Calendar className="w-3.5 h-3.5" />
            <span className="font-inter text-xs">{formattedDate}</span>
          </div>
          <div className="flex items-center gap-1.5 text-text-muted">
            <Clock className="w-3.5 h-3.5" />
            <span className="font-inter text-xs">{readingTime} min read</span>
          </div>
        </div>

        <h2 className="font-playfair text-lg font-bold text-forest-DEFAULT mb-3 leading-snug group-hover:text-leafy-DEFAULT transition-colors duration-200 line-clamp-2">
          {post.title}
        </h2>

        <p className="font-inter text-sm text-text-muted leading-relaxed mb-4 line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-beige-200 text-text-muted text-xs font-medium rounded-full font-inter"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Author + Read more */}
        <div className="flex items-center justify-between pt-4 border-t border-beige-200 mt-auto">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-leafy-DEFAULT flex items-center justify-center">
              <span className="text-xs text-white font-bold">K</span>
            </div>
            <span className="font-inter text-xs font-medium text-forest-DEFAULT">{post.author}</span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="flex items-center gap-1.5 text-leafy-DEFAULT text-sm font-semibold hover:gap-2.5 transition-all duration-200"
          >
            Read
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
