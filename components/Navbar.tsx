'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#timeline', label: 'Story' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Dynamic require for SSR safety
    const { ScrollTrigger } = require('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);

    // Scroll progress bar
    const progressEl = document.querySelector('.scroll-progress') as HTMLElement;
    if (progressEl) {
      ScrollTrigger.create({
        onUpdate: (self: any) => {
          progressEl.style.transform = `scaleX(${self.progress})`;
        }
      });
    }

    // Active section detection
    const sections = navLinks.map(l => ({
      id: l.href.slice(1),
      el: document.getElementById(l.href.slice(1))
    })).filter(s => s.el);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { threshold: 0.3 });

    sections.forEach(s => s.el && observer.observe(s.el));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.getElementById(href.slice(1));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div className="scroll-progress" />

      <nav ref={navRef} style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 'clamp(2rem, 3vw, 2.5rem) clamp(2rem, 6vw, 6rem)',
        mixBlendMode: 'difference',
      }}>
        <div style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 900,
          fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
          letterSpacing: '-0.04em',
          color: 'var(--cream)',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          paddingLeft: '0.5rem',
        }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          S.DEOGHARIA
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex" style={{ gap: '3rem' }}>
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                fontSize: '10px',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: activeSection === link.href.slice(1) ? 'var(--accent)' : 'var(--cream)',
                transition: 'color 0.3s ease, letter-spacing 0.3s ease',
                padding: 0,
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = activeSection === link.href.slice(1) ? 'var(--accent)' : 'var(--cream)')}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--cream)', padding: 0 }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '24px' }}>
            <span style={{ display: 'block', height: '1px', background: 'currentColor', transition: 'transform 0.3s ease', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
            <span style={{ display: 'block', height: '1px', background: 'currentColor', transition: 'opacity 0.3s ease', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', height: '1px', background: 'currentColor', transition: 'transform 0.3s ease', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'var(--charcoal)',
          zIndex: 8999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
        }}>
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--cream)',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(2rem, 8vw, 4rem)',
                letterSpacing: '-0.04em',
                cursor: 'pointer',
                animationDelay: `${i * 0.1}s`
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
