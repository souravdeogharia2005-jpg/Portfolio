'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  from?: gsap.TweenVars;
  style?: React.CSSProperties;
}

export default function Reveal({ children, className = '', delay = 0, from, style }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(el,
      { opacity: 0, y: 60, ...(from || {}) },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: 'power3.out',
        delay,
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        }
      }
    );
  }, [delay, from]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0, ...style }}>
      {children}
    </div>
  );
}
