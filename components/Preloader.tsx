'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (preloaderRef.current) {
          preloaderRef.current.style.display = 'none';
        }
        onComplete();
      }
    });

    const counter = { val: 0 };

    tl.fromTo(logoRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
      .to(counter, {
        val: 100,
        duration: 1.8,
        ease: 'power2.inOut',
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = Math.round(counter.val) + '';
          }
          if (progressBarRef.current) {
            progressBarRef.current.style.width = counter.val + '%';
          }
        }
      }, '-=0.3')
      .to(logoRef.current, { opacity: 0, y: -20, duration: 0.4, ease: 'power2.in' }, '+=0.1')
      .to(overlayRef.current, {
        scaleY: 0,
        transformOrigin: 'top',
        duration: 1,
        ease: 'power4.inOut'
      }, '-=0.1');
  }, [onComplete]);

  return (
    <div ref={preloaderRef} className="preloader" style={{ zIndex: 99997 }}>
      <div ref={overlayRef} style={{
        position: 'absolute',
        inset: 0,
        background: 'var(--charcoal)',
        zIndex: 1
      }} />
      <div ref={logoRef} style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <div style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 900,
          fontSize: 'clamp(2rem, 6vw, 4rem)',
          letterSpacing: '-0.04em',
          color: 'var(--cream)',
          marginBottom: '3rem'
        }}>
          S.DEOGHARIA
        </div>
        <div style={{
          width: '200px',
          height: '1px',
          background: 'rgba(245,245,243,0.1)',
          margin: '0 auto',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div ref={progressBarRef} style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            background: 'var(--accent)',
            width: '0%',
            transition: 'none'
          }} />
        </div>
        <div style={{
          marginTop: '1rem',
          fontFamily: 'Inter, sans-serif',
          fontSize: '11px',
          fontWeight: 300,
          letterSpacing: '0.3em',
          color: 'rgba(245,245,243,0.4)',
          textTransform: 'uppercase'
        }}>
          <span ref={counterRef}>0</span> %
        </div>
      </div>
    </div>
  );
}
