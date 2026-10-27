'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Reveal from './Reveal';
import TextSplitter from './TextSplitter';

import AccordionGallery from './AccordionGallery';

const projects = [
  {
    id: 1,
    title: 'ExamPrepPro AI',
    subtitle: 'AI-Powered Exam Preparation Platform',
    year: '2025',
    tech: ['Next.js', 'Gemini AI', 'TypeScript', 'Tailwind CSS'],
    url: 'https://examprepproai.netlify.app/',
    github: 'https://github.com/souravdeogharia2005-jpg',
    color: '#00F5D4',
    img: '/projects/examprep.png',
    description: 'An AI-powered platform for competitive exam preparation using Google Gemini for personalized question generation.',
  },
  {
    id: 2,
    title: 'Atmos',
    subtitle: 'Real-time Weather Visualization',
    year: '2024',
    tech: ['React', 'OpenWeather API', 'CSS Animations', 'Chart.js'],
    url: 'https://atmossweather.netlify.app/',
    github: 'https://github.com/souravdeogharia2005-jpg',
    color: '#7C3AED',
    img: '/projects/atmos.jpg',
    description: 'Real-time weather data visualization with beautiful animated UI and interactive charts.',
  },
  {
    id: 3,
    title: 'AegisAI Insurance',
    subtitle: 'AI-Enhanced Insurance Platform',
    year: '2024',
    tech: ['Next.js', 'MySQL', 'Node.js', 'Vercel'],
    url: 'https://insurance-app-ruby.vercel.app/',
    github: 'https://github.com/souravdeogharia2005-jpg',
    color: '#3B82F6',
    img: '/projects/aegis.png',
    description: 'A modern insurance management platform with AI-assisted proposal generation and admin dashboard.',
  },
  {
    id: 4,
    title: 'Alpine Wanderlust',
    subtitle: 'Travel Experiences Platform',
    year: '2024',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    url: 'https://alpinewanderlust.netlify.app/',
    github: 'https://github.com/souravdeogharia2005-jpg',
    color: '#10B981',
    img: '/projects/wanderlust.jpg',
    description: 'A full-stack travel booking platform with curated mountain experiences and secure payments.',
  },
  {
    id: 5,
    title: 'Indian Archives',
    subtitle: 'Interactive Timeline Journey',
    year: '2024',
    tech: ['React', 'GSAP', 'Timeline', 'Interactive UI'],
    url: 'https://indianarchives.netlify.app/',
    github: 'https://github.com/souravdeogharia2005-jpg',
    color: '#F59E0B',
    img: '/projects/archives.png',
    description: 'An interactive journey through the timeline of Indian civilization, from the Indus Valley to the Republic.',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Create accordion items from projects
  const accordionItems = projects.map(p => ({
    image: p.img,
    label: p.title,
    link: p.url,
    alt: p.title
  }));

  return (
    <section ref={sectionRef} id="work" style={{
      padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 5vw, 4rem)',
      borderTop: '1px solid rgba(245,245,243,0.08)',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 'clamp(3rem, 8vw, 6rem)',
        }}>
          <TextSplitter 
            text={`Selected\nWorks`}
            tag="h2"
            className="text-[clamp(3rem, 8vw, 8rem)] font-black leading-[0.9] tracking-[-0.04em] uppercase"
            textAlign="left"
            delay={30}
          />
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(245,245,243,0.4)', display: 'block', marginBottom: '0.5rem' }}>Portfolio</span>
            <span style={{ fontSize: '0.85rem', color: 'rgba(245,245,243,0.4)', fontWeight: 300 }}>[ 01 — 05 ]</span>
          </div>
        </div>

        {/* Accordion Gallery */}
        <div style={{ width: '100%', position: 'relative' }}>
          <AccordionGallery
            items={accordionItems}
            defaultIndex={2}
            expandRatio={0.52}
            trigger="hover"
            accentColor="var(--accent)"
            height={500}
          />
        </div>
        
        {/* Helper instruction */}
        <div style={{ textAlign: 'center', marginTop: '1.5rem', opacity: 0.5, fontSize: '0.85rem' }}>
          <i>Hover over a project to expand it. Click to visit the live site.</i>
        </div>

      </div>
    </section>
  );
}
