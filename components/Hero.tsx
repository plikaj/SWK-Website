'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from('.hero-overlay', {
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      tl.from('.hero-title', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.5');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative w-full h-[calc(100vh-120px)] md:h-[calc(100vh-120px)] overflow-hidden -mt-20"
    >
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img 
          src="/assets/president-hero.jpg" 
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30 hero-overlay" />
      </div>

      {/* Text Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4 max-w-5xl mx-auto">
          <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl leading-tight">
            Wonder Kids with Honourable President of India
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl mt-2 inline-block">
              Shri Ram Nath Kovind
            </span>
          </h1>
        </div>
      </div>

    
    </section>
  );
}
