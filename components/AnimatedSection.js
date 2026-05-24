'use client';

import { motion, useReducedMotion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/**
 * AnimatedSection — wraps children in a fade-up reveal animation
 * @param {string} className
 * @param {number} delay — additional delay in seconds
 * @param {boolean} stagger — enable stagger animation for direct children
 * @param {'div'|'section'|'article'} as — HTML element to render as
 */
export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  stagger = false,
  as: Tag = 'div',
  ...props
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <Tag className={className} {...props}>
        {children}
      </Tag>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      variants={stagger ? staggerVariants : variants}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedChild({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay } },
      }}
    >
      {children}
    </motion.div>
  );
}
