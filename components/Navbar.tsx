'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'ABOUT US', href: '#about' },
    { name: 'FACILITIES', href: '#facilities' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'CONTACT US', href: '#admissions' },
  ];

  return (
    <>
  
      <div className="bg-school-navy-700 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a href="tel:+919246618264" className="flex items-center gap-1.5 hover:text-school-gold-400 transition-colors text-[11px] font-medium">
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 9246618264
                <span className="bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded text-[9px] font-bold uppercase">VIP Road</span>
              </a>
              <a href="tel:+919866186264" className="flex items-center gap-1.5 hover:text-fun-yellow-300 transition-colors text-[11px] font-medium">
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 9866186264
                <span className="bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded text-[9px] font-bold uppercase">Gajuwaka</span>
              </a>
            </div>
          </div>

          
          <div className="hidden md:flex items-center gap-4">
           
            
            <span className="bg-school-red-600 text-white px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wide">
              Recognized by Govt. of AP
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-school-navy-700 shadow-lg h-16' : 'bg-transparent h-20'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            
            {/* Logo Section - Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white shadow-md overflow-hidden shrink-0">
                <img 
                  src="/assets/swk-logo.jpg" 
                  alt="School of Wonder Kids Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Desktop Navigation - Right */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-[13px] font-bold text-white hover:text-school-gold-400 transition-colors relative group uppercase tracking-widest"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-school-red-600 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-lg bg-school-red-600 text-white hover:bg-school-red-700 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}