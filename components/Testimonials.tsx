'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Reveal from './Reveal';
import TextSplitter from './TextSplitter';

const testimonials = [
  {
    quote: "Google Cloud Arcade 2024-2025 Milestones. Successfully achieved Premium, Ranger, and Trooper milestones across multiple cohorts.",
    author: "Cloud Infrastructure",
    role: "Google Cloud Arcade",
    avatar: "https://www.gstatic.com/images/branding/product/2x/google_cloud_64dp.png",
  },
  {
    quote: "Completed 350+ challenges on Geeks for Geeks. Mastery of data structures and algorithms with a focus on optimized problem solving.",
    author: "DSA & Problem Solving",
    role: "Geeks for Geeks",
    avatar: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200X200.png",
  },
  {
    quote: "Expertise in integrating LLMs to generate full-fledged production code. Specializing in Gemini AI and agentic workflows.",
    author: "AI Engineering",
    role: "LLM & GenAI",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/1024px-Google_Gemini_logo.svg.png",
  }
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.testimonial-card');
    cards?.forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, scale: 0.95, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          delay: i * 0.2,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            once: true,
          }
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} style={{
      padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 5vw, 4rem)',
      borderTop: '1px solid rgba(245,245,243,0.08)',
      background: '#0A0A0A',
    }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        
          <div style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
            <p style={{
              fontSize: '10px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              fontWeight: 700,
              marginBottom: '1rem',
            }}>Benchmarks</p>
            <TextSplitter 
              text={`My\nSkills`}
              tag="h2"
              className="text-[clamp(3rem, 8vw, 8rem)] font-black leading-[0.9] tracking-[-0.04em] uppercase"
              textAlign="left"
              delay={30}
            />
          </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
        }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card"
              style={{
                opacity: 0,
                padding: '3rem',
                background: 'rgba(245,245,243,0.02)',
                border: '1px solid rgba(245,245,243,0.05)',
                borderRadius: '4px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color 0.3s ease, background 0.3s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0, 245, 212, 0.2)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(245,245,243,0.03)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,245,243,0.05)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(245,245,243,0.02)';
              }}
            >
              <div style={{ fontSize: '3rem', color: 'var(--accent)', opacity: 0.3, position: 'absolute', top: '2rem', right: '2rem', fontFamily: 'serif' }}>&ldquo;</div>
              
              <p style={{
                fontSize: '1.25rem',
                fontWeight: 300,
                lineHeight: 1.6,
                color: 'rgba(245,245,243,0.85)',
                marginBottom: '3rem',
                position: 'relative',
                zIndex: 1,
              }}>
                {t.quote}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img 
                  src={t.avatar} 
                  alt={t.author} 
                  style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(0, 245, 212, 0.3)' }}
                />
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--cream)' }}>{t.author}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(245,245,243,0.4)', fontWeight: 300 }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
