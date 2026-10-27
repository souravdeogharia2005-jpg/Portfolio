'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import TextSplitter from './TextSplitter';

const timelineEvents = [
  {
    year: '2023',
    title: 'The Spark',
    subtitle: 'Started Coding',
    description: 'Wrote my first "Hello World" in Python, then fell down the rabbit hole of web development. Spent countless nights learning HTML, CSS, and JavaScript through tutorials, building ugly but functional UIs that I was proud of.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Python'],
    milestone: 'First GitHub commit',
    color: '#00F5D4',
  },
  {
    year: '2024',
    title: 'Building in Public',
    subtitle: 'Projects & Full Stack',
    description: 'Leveled up to React and Node.js, then discovered the world of cloud infrastructure. Built Atmos, Split World, Alpine Wanderlust, and AegisAI — each project teaching hard lessons about architecture, performance, and user experience.',
    tech: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
    milestone: '5 live projects shipped',
    color: '#7C3AED',
  },
  {
    year: '2025',
    title: 'Going Professional',
    subtitle: 'Freelancing & AI',
    description: 'Launched ExamPrepPro AI — integrating Gemini AI for personalized learning. Achieved Google Cloud Arcade Ranger milestone and completed 350+ GFG DSA questions, focusing on the intersection of AI with modern infrastructure.',
    tech: ['Next.js', 'Gemini AI', 'Kubernetes', 'Terraform'],
    milestone: 'Google Cloud Arcade Milestone',
    color: '#F59E0B',
  },
];

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current) return;

    gsap.fromTo(lineRef.current,
      { height: 0 },
      {
        height: '100%',
        duration: 2.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1.2,
        }
      }
    );

    // Animate each event
    const events = sectionRef.current?.querySelectorAll('.timeline-event');
    events?.forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'power3.out',
          delay: i * 0.1,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            once: true,
          }
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} id="timeline" style={{
      padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 5vw, 4rem)',
      borderTop: '1px solid rgba(245,245,243,0.08)',
      background: '#0A0A0A',
    }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: 'clamp(3rem, 8vw, 5rem)' }}>
          <p style={{
            fontSize: '10px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            fontWeight: 700,
            marginBottom: '1rem',
          }}>The Journey</p>
          <TextSplitter 
            text={`My\nStory`}
            tag="h2"
            className="text-[clamp(3rem, 8vw, 8rem)] font-black leading-[0.9] tracking-[-0.04em] uppercase"
            textAlign="left"
            delay={30}
          />
        </div>

        {/* Timeline */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 0,
          position: 'relative',
          paddingLeft: '2.5rem',
        }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '1px',
            background: 'rgba(245,245,243,0.08)',
          }}>
            <div ref={lineRef} style={{
              width: '100%',
              background: 'var(--accent)',
              height: 0,
            }} />
          </div>

          {timelineEvents.map((event, index) => (
            <div
              key={event.year}
              className="timeline-event"
              style={{
                paddingBottom: index < timelineEvents.length - 1 ? 'clamp(4rem, 8vw, 7rem)' : 0,
                opacity: 0,
                position: 'relative',
              }}
            >
              {/* Dot on line */}
              <div style={{
                position: 'absolute',
                left: '-2.75rem',
                top: '0.5rem',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: event.color,
                boxShadow: `0 0 0 4px rgba(10,10,10,1), 0 0 0 5px ${event.color}44`,
              }} />

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '0',
              }}>
                {/* Year badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1.5rem',
                }}>
                  <span style={{
                    fontFamily: "'EB Garamond', serif",
                    fontStyle: 'italic',
                    fontSize: 'clamp(2rem, 5vw, 4rem)',
                    fontWeight: 400,
                    color: event.color,
                    lineHeight: 1,
                  }}>{event.year}</span>
                  <div>
                    <p style={{
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'rgba(245,245,243,0.4)',
                      marginBottom: '0.25rem',
                    }}>{event.subtitle}</p>
                    <h3 style={{
                      fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                      fontWeight: 900,
                      letterSpacing: '-0.03em',
                      color: 'var(--cream)',
                    }}>{event.title}</h3>
                  </div>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '2.5rem',
                  paddingLeft: '1rem',
                  borderLeft: `1px solid ${event.color}33`,
                  marginLeft: '0.5rem',
                }}>
                  <div>
                    <p style={{
                      color: 'rgba(245,245,243,0.55)',
                      fontWeight: 300,
                      lineHeight: 1.8,
                      fontSize: '1rem',
                      maxWidth: '520px',
                    }}>{event.description}</p>
                  </div>
                  <div>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <p style={{
                        fontSize: '9px',
                        fontWeight: 700,
                        letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        color: 'rgba(245,245,243,0.35)',
                        marginBottom: '0.75rem',
                      }}>Tech Used</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {event.tech.map(t => (
                          <span key={t} style={{
                            padding: '0.25rem 0.75rem',
                            background: `${event.color}15`,
                            border: `1px solid ${event.color}30`,
                            borderRadius: '100px',
                            fontSize: '10px',
                            fontWeight: 600,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: event.color,
                          }}>{t}</span>
                        ))}
                      </div>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.75rem 1rem',
                      background: 'rgba(245,245,243,0.03)',
                      border: '1px solid rgba(245,245,243,0.06)',
                      borderRadius: '4px',
                    }}>
                      <span style={{ fontSize: '18px' }}>🎯</span>
                      <div>
                        <p style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,245,243,0.35)', marginBottom: '0.2rem' }}>Milestone</p>
                        <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--cream)' }}>{event.milestone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
