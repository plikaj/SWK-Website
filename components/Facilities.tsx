'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Palette, Dice5, Bus, School, TimerIcon } from 'lucide-react'; 

gsap.registerPlugin(ScrollTrigger);

export default function Facilities() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.facilities-header', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.facility-card', {
        scrollTrigger: {
          trigger: '.facilities-grid',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        clearProps: 'all',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="facilities" ref={sectionRef} className="bg-white">
      {/* Hero Image Section with Overlay Nav */}
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src="/path-to-your-hero-image.jpg" 
          alt="Students Image" 
          className="w-full h-full object-cover object-top"
        />
      
      </div>

      <div className="max-w-7xl mx-auto py-20 px-4">
        {/* Center Title and Description */}
        <div className="text-center mb-20 facilities-header">
          <h2 className="text-s md:text-4xl font-bold mb-6 text-slate-700 leading-tight max-w-4xl mx-auto">
            <span className="text-school-navy-700">School of</span> <span className="text-school-red-600">Wonder Kids</span> was started with a vision to offer education to children in a friendly and caring environment. We offer various facilities at school that our students can experience as they start their journey here at school.
          </h2>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-3 gap-8 facilities-grid">
          
          {/* Creative Activities Card */}
          <div className="facility-card bg-[#F8F9FA] p-12 flex flex-col items-center text-center group hover:bg-school-navy-700 transition-all duration-500 cursor-pointer relative overflow-hidden rounded-lg shadow-lg">
            <div className="w-16 h-16 rounded-full bg-school-navy-700 group-hover:bg-white flex items-center justify-center text-white group-hover:text-school-navy-700 mb-6 transition-all duration-500">
              <Palette size={32} />
            </div>
            <h3 className="text-lg font-medium mb-4 text-gray-500 group-hover:text-white transition-all duration-500">Creative Activities</h3>
            <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-90 max-h-0 group-hover:max-h-40 transition-all duration-500 text-white overflow-hidden">
              We encourage creativity through art, music, and hands-on activities that help students express themselves and develop their artistic talents.
            </p>
          </div>

          {/* Games Card */}
          <div className="facility-card bg-[#F8F9FA] p-12 flex flex-col items-center text-center group hover:bg-school-navy-700 transition-all duration-500 cursor-pointer relative overflow-hidden rounded-lg shadow-lg">
            <div className="w-16 h-16 rounded-full bg-school-navy-700 group-hover:bg-white flex items-center justify-center text-white group-hover:text-school-navy-700 mb-6 transition-all duration-500">
              <Dice5 size={32} />
            </div>
            <h3 className="text-lg font-medium mb-4 text-gray-500 group-hover:text-white transition-all duration-500">Games</h3>
            <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-90 max-h-0 group-hover:max-h-40 transition-all duration-500 text-white overflow-hidden">
                Indoor games such as Chess and Carroms are encouraged at School of Wonder Kids. Our school child bagged World Chess Championship and hundreds of students bagged hundreds of gold medals in Martial Arts and won International Awards. 
            </p>
          </div>

          {/* Transport Card */}
          <div className="facility-card bg-[#F8F9FA] p-12 flex flex-col items-center text-center group hover:bg-school-navy-700 transition-all duration-500 cursor-pointer relative overflow-hidden rounded-lg shadow-lg">
            <div className="w-16 h-16 rounded-full bg-school-navy-700 group-hover:bg-white flex items-center justify-center text-white group-hover:text-school-navy-700 mb-6 transition-all duration-500">
              <Bus size={32} />
            </div>
            <h3 className="text-lg font-medium mb-4 text-gray-500 group-hover:text-white transition-all duration-500">Transport</h3>
            <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-90 max-h-0 group-hover:max-h-40 transition-all duration-500 text-white overflow-hidden">
            To ensure safety and comfort and on demand from parent, we provide high quality buses that carries a majority of our students to the school.
            </p>
          </div>

            {/* Teacher Card */}
          <div className="facility-card bg-[#F8F9FA] p-12 flex flex-col items-center text-center group hover:bg-school-navy-700 transition-all duration-500 cursor-pointer relative overflow-hidden rounded-lg shadow-lg">
            <div className="w-16 h-16 rounded-full bg-school-navy-700 group-hover:bg-white flex items-center justify-center text-white group-hover:text-school-navy-700 mb-6 transition-all duration-500">
              <School size={32} />
            </div>
            <h3 className="text-lg font-medium mb-4 text-gray-500 group-hover:text-white transition-all duration-500">Teachers</h3>
            <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-90 max-h-0 group-hover:max-h-40 transition-all duration-500 text-white overflow-hidden">
               School of Wonder Kids has efficient team of trained and compassionate staff with good managerial skills to handle the minds of the children. 
            </p>
          </div>



            {/* Flexible timing Card */}
          <div className="facility-card bg-[#F8F9FA] p-12 flex flex-col items-center text-center group hover:bg-school-navy-700 transition-all duration-500 cursor-pointer relative overflow-hidden rounded-lg shadow-lg">
            <div className="w-16 h-16 rounded-full bg-school-navy-700 group-hover:bg-white flex items-center justify-center text-white group-hover:text-school-navy-700 mb-6 transition-all duration-500">
              <TimerIcon size={32} />
            </div>
            <h3 className="text-lg font-medium mb-4 text-gray-500 group-hover:text-white transition-all duration-500">Flexible Timings</h3>
            <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-90 max-h-0 group-hover:max-h-40 transition-all duration-500 text-white overflow-hidden">
            School Hours

           Mon to Fri – 1st Class and Above, 8:30AM to 3:30PM
           Sat – 1st Class and Above, 8:30AM to 12:30PM

           Mon to Sat – KG Classes, 8:30AM to 12:30PM
            </p>
          </div>

            {/* Trips Card */}
          <div className="facility-card bg-[#F8F9FA] p-12 flex flex-col items-center text-center group hover:bg-school-navy-700 transition-all duration-500 cursor-pointer relative overflow-hidden rounded-lg shadow-lg">
            <div className="w-16 h-16 rounded-full bg-school-navy-700 group-hover:bg-white flex items-center justify-center text-white group-hover:text-school-navy-700 mb-6 transition-all duration-500">
              <Bus size={32} />
            </div>
            <h3 className="text-lg font-medium mb-4 text-gray-500 group-hover:text-white transition-all duration-500">Trips</h3>
            <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-90 max-h-0 group-hover:max-h-40 transition-all duration-500 text-white overflow-hidden">
          We take the kids for outdoor activities like picnics, field trips which enables the students to have joyful time. The school encourages them to participate in all kinds of activities they love. 
            </p>
          </div>
          </div>

          <div className="flex flex-col items-center justify-center text-center py-12 px-4 facilities-header">
         <div className="max-w-4xl mx-auto space-y-6 text-center">
         <div className="text-base md:text-lg text-slate-700 leading-relaxed space-y-4">
      <p>
        We break the cycle of regular education with <span className="text-school-red-600 font-semibold">stress-free education</span>. 
        Huge contributions are made to maintain physical, mental and emotional development of the children.
      </p>
      <p>
        We maintain world class hygiene standards at <span className="text-school-navy-700 font-semibold">School of Wonder Kids</span>. 
        We strictly see that the preservation of good health is a top priority on our school premises, 
        including classrooms, playgrounds, washrooms and rest rooms.
      </p>
      <p className="text-xl font-serif italic text-school-navy-700 mt-6">
        “Cleanliness is next to Godliness”
      </p>
      <p className="text-sm uppercase tracking-widest text-gray-500">
        is instilled in the minds of the kids through our practical approach to keeping a clean ecology.
      </p>
    </div>
  </div>
</div>

        </div>
     
    </section>
  );
}