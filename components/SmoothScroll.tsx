'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Dynamic import to avoid SSR errors
    const { ScrollTrigger } = require('gsap/ScrollTrigger');
    const { SplitText } = require('gsap/SplitText');
    gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  return <>{children}</>;
}
