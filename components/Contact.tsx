'use client';

import { useRef } from 'react';
import Reveal from './Reveal';
import TextSplitter from './TextSplitter';
import { gsap } from 'gsap';

export default function Contact() {
  const btnRef = useRef<HTMLAnchorElement>(null);

  return (
    <footer id="contact" style={{
      padding: 'clamp(5rem, 12vw, 10rem) clamp(1.5rem, 5vw, 4rem) clamp(3rem, 6vw, 4rem)',
      borderTop: '1px solid rgba(245,245,243,0.08)',
    }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>

        {/* CTA Headline */}
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(4rem, 8vw, 7rem)' }}>
            <TextSplitter
              text={`LET'S BUILD\nTHE FUTURE`}
              tag="h2"
              className="text-[clamp(3.5rem,12vw,12rem)] font-black leading-[0.85] tracking-[-0.04em] uppercase mb-12"
              textAlign="center"
              delay={30}
            />
            <div className="flex flex-col items-center gap-4">
              <span className="italic-accent text-[clamp(2.5rem,8vw,8rem)] lowercase" style={{
                fontFamily: "'EB Garamond', serif",
                fontStyle: 'italic',
                fontWeight: 400,
                color: 'var(--accent)',
                letterSpacing: '-0.01em',
                paddingRight: '0.3em',
              }}>together</span>
            </div>

            {/* CTA Button */}
            <a
              ref={btnRef}
              href="mailto:souravdeogharia2005@gmail.com"
              className="magnetic-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.5rem 3.5rem',
                border: '1px solid rgba(245,245,243,0.2)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--cream)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, border-color 0.3s ease',
                marginTop: '4rem'
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--accent)';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(245,245,243,0.2)';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
              }}
            >
              <div className="btn-fill" />
              <span className="btn-text">Get in touch</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ position: 'relative', zIndex: 1 }}>
                <path d="M3 13L13 3M13 3H7M13 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </Reveal>

        {/* Footer bottom row */}
        <Reveal delay={0.2}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            paddingTop: '3rem',
            borderTop: '1px solid rgba(245,245,243,0.08)',
          }}>

            {/* Socials */}
            <div>
              <h5 style={{
                fontSize: '9px',
                fontWeight: 700,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'rgba(245,245,243,0.35)',
                marginBottom: '1.5rem',
              }}>Socials</h5>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { label: 'GitHub', url: 'https://github.com/souravdeogharia2005-jpg' },
                  { label: 'WhatsApp', url: 'https://wa.me/918927662972' },
                  { label: 'Twitter (X)', url: 'https://twitter.com/souravdeogharia' },
                ].map(link => (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        textDecoration: 'none',
                        color: 'var(--cream)',
                        fontSize: '1rem',
                        fontWeight: 300,
                        transition: 'color 0.3s ease',
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--cream)'; }}
                    >
                      <span style={{
                        display: 'inline-block',
                        width: '16px',
                        height: '1px',
                        background: 'rgba(245,245,243,0.2)',
                        transition: 'width 0.3s ease, background 0.3s ease',
                      }} />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Email */}
            <div>
              <h5 style={{
                fontSize: '9px',
                fontWeight: 700,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'rgba(245,245,243,0.35)',
                marginBottom: '1.5rem',
              }}>Inquiries</h5>
              <TextSplitter
                text={`Get in\ntouch`}
                tag="h2"
                className="text-[clamp(3.5rem,8vw,9rem)] font-black leading-[0.85] tracking-[-0.04em] uppercase mb-8"
                textAlign="left"
                delay={30}
              />
              <a
                href="mailto:souravdeogharia2005@gmail.com"
                style={{
                  fontSize: 'clamp(1rem, 3vw, 2.2rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  color: 'var(--cream)',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'color 0.3s ease, transform 0.3s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.02)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--cream)';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)';
                }}
              >
                souravdeogharia2005@gmail.com
              </a>
            </div>

            {/* Copyright */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', textAlign: 'right' }}>
              <h5 style={{
                fontSize: '9px',
                fontWeight: 700,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'rgba(245,245,243,0.35)',
                marginBottom: '1.5rem',
              }}>Copyright</h5>
              <p style={{
                fontFamily: "'EB Garamond', serif",
                fontStyle: 'italic',
                fontSize: '1rem',
                color: 'rgba(245,245,243,0.35)',
                lineHeight: 1.7,
              }}>
                © 2025 Sourav Deogharia.<br />
                Crafted with code and intent.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
