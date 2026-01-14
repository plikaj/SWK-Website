'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from('.gallery-title', {
        scrollTrigger: {
          trigger: '.gallery-title',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Animate gallery items
      gsap.from('.gallery-item', {
        scrollTrigger: {
          trigger: '.gallery-grid',
          start: 'top 75%',
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const categories = ['all', 'Events', 'Classrooms', 'Activities'];

  const galleryItems = [
    { category: 'Events', title: 'President Visit', image: '🏆', description: 'Meeting with Hon. President' },
    { category: 'Classrooms', title: 'Smart Learning', image: '📚', description: 'Modern Classroom Setup' },
    { category: 'Activities', title: 'Sports Day', image: '⚽', description: 'Annual Sports Competition' },
    { category: 'Events', title: 'Annual Function', image: '🎭', description: 'Cultural Program 2025' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" ref={sectionRef} className="relative py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 gallery-title">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-school-navy-700">
            Photo <span className="text-school-red-600">Gallery</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Glimpses of our vibrant school life, achievements, and memorable moments.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-school-navy-700 text-white shadow-elegant'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 gallery-grid">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="gallery-item group relative bg-gray-50 rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-school-navy-700 hover:shadow-elegant-lg transition-all duration-300 cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-300">
                {item.image}
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-school-navy-700 via-school-navy-700/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-school-gold-400 mb-1">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

           </div>
    </section>
  );
}
