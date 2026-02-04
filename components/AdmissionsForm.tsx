'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AdmissionsForm() {
  const ref = useRef(null);
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childAge: '',
    childName: '',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      gsap.from('.admissions-header', {
        scrollTrigger: {
          trigger: '.admissions-header',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Animate form
      gsap.from('.admissions-form', {
        scrollTrigger: {
          trigger: '.admissions-form',
          start: 'top 75%',
        },
        y: 60,
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.2)',
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section id="admissions" ref={ref} className="relative py-32 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 admissions-header">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
           Begin Your Wonder Journey
          </h2>
         
        </div>

        <div className="admissions-form bg-gray-50 rounded-2xl p-8 md:p-12 border-2 border-gray-200 shadow-elegant-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="parentName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Parent/Guardian Name
                </label>
                <input
                  type="text"
                  id="parentName"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  className="w-full px-4 py-3 bg-white rounded-lg border-2 border-gray-300 focus:border-school-navy-700 focus:outline-none transition-all text-gray-900 placeholder-gray-400"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white rounded-lg border-2 border-gray-300 focus:border-school-navy-700 focus:outline-none transition-all text-gray-900 placeholder-gray-400"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white rounded-lg border-2 border-gray-300 focus:border-school-navy-700 focus:outline-none transition-all text-gray-900 placeholder-gray-400"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>

              <div>
                <label htmlFor="childAge" className="block text-sm font-semibold text-gray-700 mb-2">
                  Child's Age/Grade
                </label>
                <input
                  type="text"
                  id="childAge"
                  value={formData.childAge}
                  onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                  className="w-full px-4 py-3 bg-white rounded-lg border-2 border-gray-300 focus:border-school-navy-700 focus:outline-none transition-all text-gray-900 placeholder-gray-400"
                  placeholder="e.g., 5 years / UKG"
                  required
                />
              </div>

  <div>
                <label htmlFor="childAge" className="block text-sm font-semibold text-gray-700 mb-2">
                  Child's Name
                </label>
                <input
                  type="text"
                  id="childName"
                  value={formData.childName}
                  onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                  className="w-full px-4 py-3 bg-white rounded-lg border-2 border-gray-300 focus:border-school-navy-700 focus:outline-none transition-all text-gray-900 placeholder-gray-400"
                  placeholder="Enter your child's name"
                  required
                />
              </div>

            </div>

            <button
              type="submit"
              className="w-full group relative px-8 py-4 bg-school-navy-700 text-white rounded-md font-bold text-lg hover:bg-school-red-700 transition-all duration-300 shadow-elegant hover:shadow-elegant-lg hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Submit Application
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-300 text-center">
            <p className="text-sm text-gray-600">
              Questions? Contact us at{' '}
              <a href="mailto:admissions@schoolofwonderkids.com" className="text-school-navy-700 hover:text-school-red-600 transition-colors font-semibold">
                admissions@schoolofwonderkids.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
