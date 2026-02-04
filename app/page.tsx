import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import PlayAsYouLearn from '@/components/PlayAsYouLearn';
import Facilities from '@/components/Facilities';
import Gallery from '@/components/Gallery';
import RecordsTimeline from '@/components/RecordsTimeline';
import AdmissionsForm from '@/components/AdmissionsForm';
import { Facebook, Instagram, Mail, Youtube } from 'lucide-react';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <AboutUs />
      <PlayAsYouLearn />
      <Facilities />
      <Gallery />
      <RecordsTimeline />
      <AdmissionsForm />
      
      {/* Footer */}
      <footer className="relative bg-school-navy-700 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full border-4 border-white flex items-center justify-center bg-school-navy-700 shadow-elegant-lg">
                  <div className="text-center">
                    <div className="text-white text-[8px] font-bold leading-tight">SCHOOL</div>
                    <div className="text-school-gold-400 text-[8px] font-bold leading-tight">CREST</div>
                  </div>
                </div>
                <div>
                  <div className="text-lg font-bold text-white">School Of Wonder Kids</div>
                  <div className="text-xs text-gray-300 uppercase tracking-wider">Excellence in Education</div>
                </div>
              </div>
              <p className="text-white/90 text-sm max-w-md">
                Unlocking extraordinary potential in every child through innovative, experience-based education.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="text-gray-300 hover:text-school-gold-400 transition-colors">About Us</a></li>
                <li><a href="#facilities" className="text-gray-300 hover:text-school-gold-400 transition-colors">Facilities</a></li>
                <li><a href="#gallery" className="text-gray-300 hover:text-school-gold-400 transition-colors">Gallery</a></li>
                <li><a href="#admissions" className="text-gray-300 hover:text-school-gold-400 transition-colors">Admissions</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>info@schoolofwonderkids.com</li>
                <li>+91 9246618264</li>
                <li>+91 9866186264</li>
                <li className="pt-4">
                   <div className="flex items-center gap-3">
              <a href="#" className="text-white hover:text-school-gold-400 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white hover:text-school-gold-400 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white hover:text-school-gold-400 transition-colors">
                <Youtube size={18} />
              </a>
              <a href="#" className="text-white hover:text-school-gold-400 transition-colors">
                <Mail size={18} />
              </a>
            </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
            <div>© 2026 School of Wonder Kids. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
