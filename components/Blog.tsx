'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Reveal from './Reveal';
import TextSplitter from './TextSplitter';

const articles = [
  {
    title: "The Future of Cloud-Native Architecture in 2025",
    date: "May 12, 2025",
    category: "Cloud Engineering",
    excerpt: "Exploring the shift from monolithic systems to serverless and micro-frontend architectures in the age of decentralized computing.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  },
  {
    title: "Designing for Motion: Beyond Simple Transitions",
    date: "April 08, 2025",
    category: "Frontend & UI",
    excerpt: "How to use GSAP and Framer Motion to create intentional, performance-first interactions that enhance user mental models.",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
  },
  {
    title: "Leveraging LLMs for Intelligent Data Pipelines",
    date: "March 15, 2025",
    category: "AI & Data",
    excerpt: "A deep dive into integrating Google Gemini and LangChain to automate complex data processing tasks with high accuracy.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  }
];

export default function Blog() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.article-card');
    cards?.forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power3.out',
          delay: i * 0.15,
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            once: true,
          }
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} id="blog" style={{
      padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 5vw, 4rem)',
      borderTop: '1px solid rgba(245,245,243,0.08)',
      background: '#0A0A0A',
    }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 'clamp(3rem, 6vw, 5rem)',
        }}>
          <div>
            <p style={{
              fontSize: '10px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'rgba(245,245,243,0.4)',
              fontWeight: 700,
              marginBottom: '1rem',
            }}>Insights</p>
            <TextSplitter 
              text={`Journal\n& Articles`}
              tag="h2"
              className="text-[clamp(3rem, 6vw, 6rem)] font-black leading-[0.9] tracking-[-0.04em] uppercase"
              textAlign="left"
              delay={30}
            />
          </div>
          
          <Reveal delay={0.2}>
            <a href="#" style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--cream)',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(245,245,243,0.2)',
              paddingBottom: '0.5rem',
              transition: 'border-color 0.3s ease, color 0.3s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--accent)'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(245,245,243,0.2)'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--cream)'; }}
            >
              View All Posts
            </a>
          </Reveal>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
        }}>
          {articles.map((article, i) => (
            <div
              key={i}
              className="article-card"
              style={{
                opacity: 0,
                cursor: 'pointer',
              }}
            >
              <div style={{
                overflow: 'hidden',
                borderRadius: '2px',
                marginBottom: '1.5rem',
                aspectRatio: '16/10',
                background: '#1a1a1a',
                position: 'relative',
              }}>
                <img 
                  src={article.img} 
                  alt={article.title} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.08)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
                />
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  padding: '4px 10px',
                  background: 'rgba(10,10,10,0.8)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '100px',
                  fontSize: '9px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  border: '1px solid rgba(0, 245, 212, 0.2)',
                }}>
                  {article.category}
                </div>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '11px', color: 'rgba(245,245,243,0.4)', fontWeight: 500 }}>{article.date}</span>
              </div>
              
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                lineHeight: 1.3,
                color: 'var(--cream)',
                marginBottom: '1rem',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--cream)'; }}
              >
                {article.title}
              </h3>
              
              <p style={{
                fontSize: '0.9rem',
                color: 'rgba(245,245,243,0.45)',
                lineHeight: 1.6,
                fontWeight: 300,
                marginBottom: '1.5rem',
              }}>
                {article.excerpt}
              </p>
              
              <a href="https://en.wikipedia.org/wiki/Special:Search?search=Digital+Architecture" target="_blank" rel="noopener noreferrer" style={{
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--cream)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'gap 0.3s ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.gap = '0.75rem'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.gap = '0.5rem'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--cream)'; }}
              >
                Read Article
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
