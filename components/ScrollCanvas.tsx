'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface ScrollCanvasProps {
  frameCount: number;
  basePath: string; // e.g., "/sequence/frame_"
  extension: string; // e.g., "webp"
  triggerSelector: string;
  canvasWidth?: number;
  canvasHeight?: number;
}

export default function ScrollCanvas({
  frameCount,
  basePath,
  extension,
  triggerSelector,
  canvasWidth = 1920,
  canvasHeight = 1080,
}: ScrollCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = `${basePath}${String(i).padStart(4, '0')}.${extension}`;
        img.onload = () => {
            loadedCount++;
            if (loadedCount === frameCount || (i === 1 && frameCount > 1)) {
                setIsLoaded(true); // Show at least the first frame early
            }
        };
        img.onerror = () => {
          // If a frame fails, still mark as loaded if it's the first one
          if (i === 1) setIsLoaded(true);
        };
        loadedImages.push(img);
    }
    setImages(loadedImages);
  }, [frameCount, basePath, extension]);

  useEffect(() => {
    if (!isLoaded || images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;

    // Initial render
    render(0);

    function render(index: number) {
      if (!context || !images[index]) return;
      
      const img = images[index];
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      // Maintain aspect ratio cover
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;
      
      context.drawImage(img, x, y, img.width * scale, img.height * scale);
    }

    // GSAP Scrubber
    const { ScrollTrigger } = require('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);

    const playhead = { frame: 0 };

    gsap.to(playhead, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
      scrollTrigger: {
        trigger: triggerSelector,
        start: 'top top',
        end: '+=300%', // Scroll depth for the animation
        scrub: 1.5,
        pin: true,
      },
      onUpdate: () => render(Math.round(playhead.frame)),
    });

  }, [isLoaded, images, frameCount, triggerSelector]);

  return (
    <div className="w-full h-full relative overflow-hidden bg-[var(--charcoal)]">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-2 border-[var(--accent)] border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        className="w-full h-full object-cover"
        style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s ease' }}
      />
    </div>
  );
}
