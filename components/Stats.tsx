'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const stats = [
  { value: 5, suffix: '+', label: 'Live Projects', description: 'Shipped to production' },
  { value: 3, suffix: '', label: 'Years Building', description: 'Since first commit' },
  { value: 10, suffix: 'k+', label: 'Lines Written', description: 'Across all projects' },
  { value: 4, suffix: '', label: 'Core Domains', description: 'Frontend, Backend, Cloud, AI' },
];

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const statEls = sectionRef.current?.querySelectorAll('.stat-number');
    statEls?.forEach((el, i) => {
      const target = stats[i];
      const counter = { val: 0 };

      gsap.to(counter, {
        val: target.value,
        duration: 2,
        ease: 'power2.out',
        delay: i * 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
        onUpdate: () => {
          el.textContent = Math.round(counter.val) + target.suffix;
        }
      });
    });

    // Animate stat cards
    const cards = sectionRef.current?.querySelectorAll('.stat-card');
    cards?.forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: i * 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          }
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} style={{
      padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)',
      borderTop: '1px solid rgba(245,245,243,0.08)',
    }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>

        <div style={{ marginBottom: '3rem' }}>
          <p style={{
            fontSize: '10px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(245,245,243,0.4)',
            fontWeight: 700,
          }}>By The Numbers</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2px',
        }}>
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-card"
              style={{
                opacity: 0,
                padding: '3rem 2rem',
                border: '1px solid rgba(245,245,243,0.06)',
                background: 'rgba(245,245,243,0.02)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(0,245,212,0.04)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(245,245,243,0.02)';
              }}
            >
              {/* Accent line top */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '0%',
                height: '2px',
                background: 'var(--accent)',
                transition: 'width 0.6s ease',
              }}
                className="stat-accent-line"
              />

              <div
                className="stat-number stat-value"
                style={{
                  fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  color: 'var(--cream)',
                  marginBottom: '0.75rem',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                0{stat.suffix}
              </div>
              <p style={{
                fontSize: '0.875rem',
                fontWeight: 700,
                color: 'var(--cream)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '0.4rem',
              }}>{stat.label}</p>
              <p style={{
                fontSize: '0.8rem',
                color: 'rgba(245,245,243,0.35)',
                fontWeight: 300,
              }}>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
