'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import FoldText from './FoldText';
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Stagger reveal for supporting elements
    const tl = gsap.timeline({ delay: 1.5 });
    tl.fromTo('.hero-sub', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
    );
  }, []);

  return (
    <section 
      ref={containerRef}
      id="hero"
      className="relative min-h-[110vh] flex flex-col justify-center px-[clamp(1.5rem,5vw,4rem)] pt-32 pb-20 overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-[20%] right-[-5%] w-[40vw] h-[40vw] bg-[var(--accent)] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col gap-8 md:gap-12">
          
          <div ref={elementsRef} className="flex flex-col">
            <div className="overflow-hidden">
              <FoldText
                text="CRAFTING"
                splitBy="char"
                hinge="top"
                trigger="mount"
                duration={0.65}
                stagger={0.045}
                ease="power3.out"
                perspective={700}
                creaseShading={0.55}
                fontSize="clamp(3.5rem,8.5vw,8.5rem)"
                fontWeight={900}
                color="var(--cream)"
              />
            </div>
            <div className="overflow-hidden flex items-baseline mt-[-0.05em]">
              <div className="italic-accent lowercase mr-4" style={{ fontFamily: "'EB Garamond', serif" }}>
                <FoldText
                  text="scalable"
                  splitBy="char"
                  hinge="top"
                  trigger="mount"
                  duration={0.65}
                  stagger={0.045}
                  ease="power3.out"
                  perspective={700}
                  creaseShading={0.55}
                  fontSize="clamp(2.8rem,8vw,8rem)"
                  fontWeight={400}
                  color="var(--accent)"
                />
              </div>
            </div>
            <div className="overflow-hidden">
              <FoldText
                text="DIGITAL ARCHITECTURE."
                splitBy="char"
                hinge="top"
                trigger="mount"
                duration={0.65}
                stagger={0.045}
                ease="power3.out"
                perspective={700}
                creaseShading={0.55}
                fontSize="clamp(3.5rem,8.5vw,8.5rem)"
                fontWeight={900}
                color="var(--cream)"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <div className="hero-sub opacity-0 max-w-md">
              <p className="text-[clamp(0.9rem,1.2vw,1.1rem)] text-[rgba(245,245,243,0.5)] font-light leading-relaxed">
                Sourav Deogharia — Full Stack Developer & Cloud Engineer. Based in India. Google Cloud Arcade (Premium, Ranger, Trooper) & GFG DSA 350+ Questions. I use LLM to generate full fledged codes.
              </p>
            </div>

            <div className="hero-sub opacity-0 flex flex-col items-end text-right">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--cream)]">Technical Milestones</span>
              </div>
              <p className="font-serif italic text-xl text-[var(--accent)] opacity-80">Arcade Ranger & GFG 350+</p>
            </div>
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-10 left-[clamp(1.5rem,5vw,4rem)] flex items-center gap-4 hero-sub opacity-0">
          <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[var(--accent)] origin-top animate-[scroll-hint_2s_infinite]" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">Scroll to explore</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-hint {
          0% { transform: scaleY(0); transform-origin: top; }
          45% { transform: scaleY(1); transform-origin: top; }
          55% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
      `}</style>
    </section>
  );
}
