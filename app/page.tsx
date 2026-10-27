'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Timeline from '@/components/Timeline';
import Expertise from '@/components/Expertise';
import Stats from '@/components/Stats';
import Marquee from '@/components/Marquee';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import BackgroundParticles from '@/components/BackgroundParticles';
import { TextAnimate } from '@/components/TextAnimate';

// Dynamic import for cursor (client-only)
const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false });

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Background ambient motion */}
      <BackgroundParticles />

      {/* Preloader */}
      {!loaded && (
        <Preloader onComplete={() => setLoaded(true)} />
      )}

      {/* Custom cursor */}
      <CustomCursor />

      {/* Main content */}
      <main style={{
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.8s ease',
        position: 'relative',
        zIndex: 1,
      }}>
        <Navbar />
        <Hero />
        <div className="py-20 flex justify-center">
          <TextAnimate animation="scaleUp" by="text" className="text-[10px] uppercase tracking-[0.5em] text-white/20 font-bold">
            The Digital Portfolio of Sourav Deogharia
          </TextAnimate>
        </div>
        <Marquee />
        <Projects />
        <Timeline />
        <Stats />
        <Expertise />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </>
  );
}
