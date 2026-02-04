'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HexagonalGallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hex-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        
        {/* Hexagonal Grid */}
        <div className="relative max-w-5xl mx-auto">
          {/* Using CSS Grid for hexagonal-like layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Row 1 */}
            <div className="hex-item col-span-1 aspect-square">
              <div className="hexagon-container">
                <div className="w-full h-full bg-gradient-to-br from-school-red-300 to-school-red-500 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    👧
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hex-item col-span-1 aspect-square">
              <div className="hexagon-container">
                <div className="w-full h-full bg-gradient-to-br from-school-navy-300 to-school-navy-500 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    🎨
                  </div>
                </div>
              </div>
            </div>

            <div className="hex-item col-span-1 aspect-square md:col-start-3">
              <div className="hexagon-container">
                <div className="w-full h-full bg-gradient-to-br from-school-gold-300 to-school-gold-500 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    👶
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 - Offset */}
            <div className="hex-item col-span-1 aspect-square lg:col-start-1">
              <div className="hexagon-container">
                <div className="w-full h-full bg-gradient-to-br from-school-navy-300 to-school-navy-600 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    🎭
                  </div>
                </div>
              </div>
            </div>

            <div className="hex-item col-span-2 md:col-span-1 aspect-square">
              <div className="hexagon-container">
                <div className="w-full h-full bg-gradient-to-br from-school-gold-300 to-school-gold-600 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    👦
                  </div>
                </div>
              </div>
            </div>

            <div className="hex-item col-span-1 aspect-square">
              <div className="hexagon-container">
                <div className="w-full h-full bg-gradient-to-br from-school-red-300 to-school-red-600 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    🎪
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="hex-item col-span-1 aspect-square">
              <div className="hexagon-container">
                <div className="w-full h-full bg-gradient-to-br from-school-red-400 to-school-gold-400 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    🧒
                  </div>
                </div>
              </div>
            </div>

            <div className="hex-item col-span-1 aspect-square">
              <div className="hexagon-container">
                <div className="w-full h-full bg-gradient-to-br from-school-navy-400 to-school-navy-700 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    🎉
                  </div>
                </div>
              </div>
            </div>

            <div className="hex-item col-span-1 aspect-square">
              <div className="hexagon-container">
                <div className="w-full h-full bg-gradient-to-br from-school-gold-500 to-school-red-500 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    👨‍👩‍👧‍👦
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Replace emojis with your actual student images for a beautiful portfolio showcase
            </p>
            <a 
              href="#gallery" 
              className="inline-block px-8 py-4 bg-school-red-600 hover:bg-school-red-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              View Complete Gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
