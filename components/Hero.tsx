'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Animate badge
      tl.from(badgeRef.current, {
        scale: 0,
        rotation: -180,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)',
      });

      // Animate title
      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.3');

      // Animate subtitle
      tl.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.5');

      // Animate buttons
      tl.from(buttonsRef.current?.children || [], {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out',
      }, '-=0.4');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative w-full h-[calc(100vh-116px)] overflow-hidden">
      {/* Hero Image with full width */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://placehold.co/1920x1080/1e3a8a/ffffff?text=Hero+Image"
          alt="Wonder Kids with President"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 30%' }}
        />
        {/* Gradient overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Hero Image Caption Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-school-navy-700/90 backdrop-blur-sm py-6 px-4 border-t-4 border-school-gold-600">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-serif text-center">
            Wonder Kids with Honourable President of India
            <br />
            <span className="text-school-gold-400 font-semibold">Shri Ram Nath Kovind</span>
          </h2>
        </div>
      </div>


       
      
    </section>
  );
}
