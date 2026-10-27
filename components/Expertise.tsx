'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Reveal from './Reveal';
import TextSplitter from './TextSplitter';

const skills = [
  {
    number: '01',
    area: 'Frontend',
    title: 'React, Next.js,\nTypeScript, Three.js',
    description: 'Focusing on interaction design, motion, and highly responsive user interfaces that bridge the gap between aesthetics and function.',
    tags: ['Tailwind CSS', 'GSAP', 'Framer Motion', 'WebGL'],
    color: '#00F5D4',
  },
  {
    number: '02',
    area: 'Backend',
    title: 'Node.js, Go,\nPython, PostgreSQL',
    description: 'Building robust APIs and microservices architecture. Geeks for Geeks DSA 350+ Questions completed.',
    tags: ['Redis', 'GraphQL', 'gRPC', 'REST'],
    color: '#7C3AED',
  },
  {
    number: '03',
    area: 'Cloud',
    title: 'Google Cloud Platform,\nTerraform, CI/CD',
    description: 'Cloud Arcade 2024 (Premium), 2025 Jan-Jun (Ranger), 2025 Jul-Dec (Trooper Milestones).',
    tags: ['Kubernetes', 'Docker', 'Github Actions', 'Prometheus'],
    color: '#F59E0B',
  },
  {
    number: '04',
    area: 'AI / ML',
    title: 'LLMs, Gemini AI,\nLangChain, RAG',
    description: 'I use LLM to generate full fledged codes. Integrating large language models into production applications.',
    tags: ['OpenAI', 'Vector DBs', 'Embeddings', 'Agents'],
    color: '#10B981',
  },
];

export default function Expertise() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate skill rows
    const rows = sectionRef.current?.querySelectorAll('.skill-row');
    rows?.forEach((row) => {
      gsap.fromTo(row,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 82%',
            once: true,
          }
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} id="expertise" style={{
      padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 5vw, 4rem)',
      background: 'var(--cream)',
      color: '#0A0A0A',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
        }}>

          {/* Sticky sidebar */}
          <div ref={stickyRef} style={{
            position: 'sticky',
            top: '8rem',
            alignSelf: 'flex-start',
            height: 'fit-content',
          }}>
            <TextSplitter 
              text={`Expertise\n& Tools`}
              tag="h2"
              className="text-[clamp(3rem,6vw,6rem)] font-black leading-[0.85] tracking-[-0.04em] uppercase text-[#0A0A0A] mb-8"
              textAlign="left"
              delay={30}
            />
            <div style={{ width: '3rem', height: '3px', background: '#00F5D4', marginBottom: '2rem' }} />
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(10,10,10,0.6)',
              fontWeight: 300,
              lineHeight: 1.7,
              maxWidth: '280px',
            }}>
              A precise blend of creative development and cloud engineering logic.
            </p>
          </div>

          {/* Skills list */}
          <div style={{ paddingTop: '0.5rem' }}>
            {skills.map((skill, i) => (
              <div
                key={skill.number}
                className="skill-row"
                style={{
                  padding: '3rem 0',
                  borderTop: '1px solid rgba(10,10,10,0.1)',
                  opacity: 0,
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  const title = (e.currentTarget as HTMLElement).querySelector('.skill-title') as HTMLElement;
                  if (title) title.style.transform = 'translateX(8px)';
                }}
                onMouseLeave={e => {
                  const title = (e.currentTarget as HTMLElement).querySelector('.skill-title') as HTMLElement;
                  if (title) title.style.transform = 'translateX(0)';
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span style={{
                      fontSize: '10px',
                      fontWeight: 900,
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: skill.color,
                      opacity: 0.8,
                    }}>
                      {skill.number} / {skill.area}
                    </span>
                  </div>
                  <h4
                    className="skill-title"
                    style={{
                      fontSize: 'clamp(1.5rem, 3.5vw, 3rem)',
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.1,
                      color: '#0A0A0A',
                      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {skill.title}
                  </h4>
                  <p style={{
                    fontSize: '1rem',
                    color: 'rgba(10,10,10,0.55)',
                    fontWeight: 300,
                    lineHeight: 1.7,
                    maxWidth: '480px',
                  }}>
                    {skill.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {skill.tags.map(tag => (
                      <span
                        key={tag}
                        style={{
                          padding: '0.3rem 0.75rem',
                          background: 'rgba(10,10,10,0.05)',
                          borderRadius: '3px',
                          fontSize: '9px',
                          fontWeight: 700,
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          color: '#0A0A0A',
                          transition: 'background 0.2s ease, color 0.2s ease',
                          cursor: 'default',
                        }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLElement).style.background = skill.color;
                          (e.currentTarget as HTMLElement).style.color = '#0A0A0A';
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLElement).style.background = 'rgba(10,10,10,0.05)';
                          (e.currentTarget as HTMLElement).style.color = '#0A0A0A';
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
