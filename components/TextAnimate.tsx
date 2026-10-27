'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

type AnimationType = 'scaleUp' | 'fadeIn' | 'slideUp';

interface TextAnimateProps {
  children: string;
  animation?: AnimationType;
  by?: 'word' | 'char' | 'text';
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function TextAnimate({
  children,
  animation = 'scaleUp',
  by = 'text',
  className = '',
  delay = 0,
  duration = 0.5,
  once = true
}: TextAnimateProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-10%" });

  const variants: Record<AnimationType, Variants> = {
    scaleUp: {
      hidden: { opacity: 0, scale: 0.8, y: 20 },
      visible: { opacity: 1, scale: 1, y: 0 }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    slideUp: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 }
    }
  };

  const currentVariant = variants[animation];

  if (by === 'text') {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={currentVariant}
        transition={{ duration, delay, ease: "easeOut" }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  const items = by === 'word' ? children.split(' ') : children.split('');

  return (
    <div ref={ref} className={`${className} flex flex-wrap`}>
      {items.map((item, i) => (
        <motion.span
          key={i}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={currentVariant}
          transition={{ 
            duration, 
            delay: delay + (i * 0.05),
            ease: "easeOut"
          }}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {item === ' ' ? '\u00A0' : item}
          {by === 'word' && i !== items.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </div>
  );
}
