'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function RecordsTimeline() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      gsap.from('.records-header', {
        scrollTrigger: {
          trigger: '.records-header',
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Animate timeline line
      gsap.from('.timeline-line', {
        scrollTrigger: {
          trigger: '.timeline-section',
          start: 'top 70%',
        },
        scaleX: 0,
        duration: 1.5,
        ease: 'power2.inOut',
      });

      // Animate milestones
      gsap.from('.milestone-card', {
        scrollTrigger: {
          trigger: '.timeline-section',
          start: 'top 65%',
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.2)',
      });

      // Animate stats cards
      gsap.from('.timeline-stat', {
        scrollTrigger: {
          trigger: '.stats-cards',
          start: 'top 80%',
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'back.out(1.4)',
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  const milestones = [
    { year: '2020', event: 'School Founded', count: 0 },
    { year: '2021', event: 'First 10 Records', count: 10 },
    { year: '2023', event: '50 Records Achieved', count: 50 },
    { year: '2025', event: '128 Records in a Day', count: 128, highlight: true },
  ];

  return (
    <section id="records" ref={ref} className="relative py-32 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 records-header">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            <span className="text-school-navy-700">Breaking Records,</span>
            <br />
            <span className="text-school-red-600">
              Building Legends
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our journey from a vision to 128 records in a single day
          </p>
        </div>

        {/* Timeline */}
        <div className="relative timeline-section">
          {/* Horizontal line */}
          <div className="timeline-line absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-school-navy-700 via-school-red-600 to-school-gold-600 origin-left" />

          {/* Milestones */}
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="relative milestone-card"
              >
                <div className="flex flex-col items-center">
                  {/* Node */}
                  <div
                    className={`
                      w-6 h-6 rounded-full mb-6 
                      ${milestone.highlight 
                        ? 'bg-school-gold-600 shadow-elegant ring-4 ring-school-gold-200' 
                        : 'bg-school-navy-700 shadow-elegant'
                      }
                    `}
                  />

                  {/* Card */}
                  <div
                    className={`
                      bg-white rounded-2xl p-6 border-2 
                      ${milestone.highlight 
                        ? 'border-school-gold-600 shadow-elegant-lg' 
                        : 'border-gray-200'
                      }
                      hover:scale-105 transition-transform duration-300 w-full
                    `}
                  >
                    <div className="text-center space-y-2">
                      <div
                        className={`
                          text-sm font-bold uppercase tracking-wider
                          ${milestone.highlight ? 'text-school-gold-700' : 'text-school-navy-700'}
                        `}
                      >
                        {milestone.year}
                      </div>
                      <div className="text-gray-900 font-semibold text-lg">
                        {milestone.event}
                      </div>
                      <div
                        className={`
                          text-4xl font-bold
                          ${milestone.highlight 
                            ? 'text-school-gold-600' 
                            : 'text-school-navy-700'
                          }
                        `}
                      >
                        {milestone.count}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 stats-cards">
          {[
            { label: 'Total Records', value: '128+', color: 'gold' },
            { label: 'Students', value: '500+', color: 'navy' },
            { label: 'Success Rate', value: '100%', color: 'red' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="timeline-stat bg-white rounded-2xl p-8 border-2 border-gray-200 text-center hover:scale-105 hover:shadow-elegant-lg transition-all duration-300"
            >
              <div
                className={`
                  text-5xl font-bold mb-2
                  ${stat.color === 'gold' && 'text-school-gold-600'}
                  ${stat.color === 'navy' && 'text-school-navy-700'}
                  ${stat.color === 'red' && 'text-school-red-600'}
                `}
              >
                {stat.value}
              </div>
              <div className="text-gray-600 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
