'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from('.hero-text', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
      });

      tl.from('.hero-image', {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.2)',
      }, '-=0.5');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative w-full min-h-[600px] lg:min-h-[700px] overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white pt-32 pb-16"
    >
      {/* Grass/Nature Background Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-400 to-transparent opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left space-y-6">
           
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight hero-text">
             School Of Wonder Kids
            </h1>
            
            <p className="text-xl text-gray-600 max-w-xl hero-text">
              School of Wonder Kids - Where learning meets joy and every child discovers their extraordinary potential
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start hero-text">
              <a 
                href="#admissions" 
                className="px-8 py-4 bg-school-red-600 hover:bg-school-red-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Enroll Now
              </a>
              <a 
                href="#about" 
                className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all border-2 border-school-navy-700"
              >
                Learn More
              </a>
            </div>
          </div>
          
          {/* Right: Image/Illustration Placeholder */}
          <div className="relative hero-image">
            <div className="relative aspect-[5/4] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-school-navy-300 via-school-gold-200 to-school-red-200" />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center space-y-6">
                  <div className="text-8xl">🎓</div>
                  <p className="text-gray-700 font-bold text-2xl">
                    President Photo
                  </p>
                  <p className="text-gray-500 text-sm">
                    (Add your image here)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
