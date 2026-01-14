'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each row as it comes into view
      gsap.utils.toArray('.about-row').forEach((row: any) => {
        gsap.from(row, {
          scrollTrigger: {
            trigger: row,
            start: 'top 80%',
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-20 px-4 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto space-y-32">

         <div className="lg:col-span-2 text-left">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-school-navy-700">
              Welcome to School of Wonder Kids
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>What is Education? Is it just making students carry a pile of books and recite a few lessons forcefully? Or does it stand for something greater?</p>
              <p>
                For School of Wonder Kids, Education is the most powerful weapon to change the world and imparting the right education, thus, forms the base to make the leaders of tomorrow.
              </p>
              <p>Established in 2001 with the concept of no books-no reading-no writing-no homework for KG classes & no loads of books and no homework from class 1 on wards, School of Wonder Kids in Visakhapatnam and Gajuwaka emerged as India’s most distinct schools and is widely accepted and appreciated by parents and educationalists. The school has won several awards and accolades, and remains a top choice for parents choosing the best school in Visakhapatnam.</p>
            
            </div>
          </div>


          {/* Stats Section */}
        <div className="pt-20 border-t border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Students' },
              { number: '128+', label: 'Records' },
              { number: '100%', label: 'Success Rate' },
              { number: '15+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index} className="text-center about-card">
                <div className="text-4xl md:text-5xl font-bold text-school-red-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-semibold uppercase text-xs tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Section 1: CBSE School in Vizag */}
        <div className="about-row grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 text-left">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-school-navy-700">
              Cbse School in Vizag
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
             <p>School of Wonder Kids was started with a vision to offer education to children in a friendly and playful environment. The burden of heavy baggage, home work and more was done away with. Our main interest is to impart knowledge to the best interests for the future of the children. It is done by analyzing and understanding their strengths and weaknesses. Thereafter, we make their learning cycle simple and easy through tailoring the best possible intelligent solutions that we have on offer. Thus, we dynamically increase their learning skills in a stress-free ecological environment.</p>
              <p>
             We strongly believe that our professional expertise in the field of education prepared with a new concept of School without Books, Reading and Writing, including no home work at all. This will give the kids the time to enjoy their childhood. Play while learning is not an option, it is essential. It definitely helps them to stay healthy and improve their thinking skills.
              </p>
            
            </div>
          </div>
          {/* Right Side Image Placeholders */}
          <div className="grid grid-cols-1 gap-4">
            <div className="aspect-[4/3] bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">Image Placeholder 1</div>
            <div className="aspect-[4/3] bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">Image Placeholder 2</div>
          </div>
        </div>

        {/* Section 2: Our Kids are our Inspiration */}
        <div className="about-row grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 text-left">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-school-navy-700">
              Our Kids are our Inspiration
            </h2>
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
              <div>
                <h4 className="font-bold text-school-red-600 mb-2">Rajitha</h4>
                <p>Kumari Rajitha, the eldest of the three kids of Malla Ramunaidu and Malla Vani Sri, is the recipient of National Child Award for Exceptional Achievement 1996, in the field of Mathematics. She was honoured by the then HRD Minister Mr. S.R. Bommai in Delhi . Rajitha is proud to be one among the seven child awardees. At the age of six, she could say the day of any given date from any century. Additions and subtractions are her passion, she knows the easiest root for any square root. She received tons of awards for her mathematical genius. Her extraordinary knowledge of multiplications, multiplied her name and fame from East to West.</p>
              </div>
              <div>
                <h4 className="font-bold text-school-red-600 mb-2">Karthik</h4>
                <p>If the first is first, the second is better than the first. Karthik, the second son started his career with ‘Ugadi Puraskar’ from Madras Telugu Academy . This itself is a testimony of his world wide knowledge. At the age of 2+ he knew the capital cities of different nations, identified different countries in the world map, recognised the flags of different nations. He could answer more than five thousand questions like the authors of different books, inventors of different inventions, geographical surnames, superlatives, abbreviations etc. Many prestigious organisations conferred upon him titles like Wonder kid, Super kid, Balaratna etc. Awards and encomiums are no new to him.</p>
              </div>
              <div>
                <h4 className="font-bold text-school-red-600 mb-2">Sarvani</h4>
                <p>Sarvani, the youngest, has the silver lining right from her infancy. From her cradle she went to the stage to Dance. If she dances a classical item it is a real classic. The melody of her ghungru rings in the inner ears of the audience. Lights are real sights when she dances. Her accuracy, perfection, concentration for dance brought her recognition earlier than her brother and sister. Sarvani’s ‘folk’ is a ‘talk’. Call it a Bhangra, call it a Bharatanatyam, call it a Kuchipudi, she is an amalgam precipitated into artistic form of a professional dancer. Awards made her responsible. She understood the value of ‘recognition’ before she recognised alphabet. All the three attracted wide coverage in dailies, magazines and TV Channels.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="aspect-square bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">Student Achievement 1</div>
            <div className="aspect-square bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">Student Achievement 2</div>
          </div>
        </div>

        {/* Section 3: Extra-ordinary Talents List */}
        <div className="about-row grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 text-left">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-school-navy-700">
              Our students display the following extra-ordinary talents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-base text-gray-700">
              <p>1. UKG kids learn english alphabet in 3 hrs</p>
              <p>2. UKG kids write exams without teacher’s help</p>
              <p>3. UKG kids identify all countries in world map</p>
              <p>4. UKG kids read english dailies</p>
              <p>5. LKG kids say capitals of all countries</p>
              <p>6. PKG kids answer 500+ GK questions</p>
              <p>7. Class 1 kids have 99% similar handwriting</p>
              <p>8. Class 5 students say day of any date in seconds</p>
              <p>9. Class 2 kids possess efficient and 99% similar handwriting of hindi and can write any article dictated from class 5 textbook</p>
              <p>10. Class 3 kids learn the writing of telugu in six hours</p>
              <p>11. Class 3 kids recite hundred telugu poems</p>
              <p>12. Class 3 kids possess efficient and 99% similar handwriting of telugu and can write any article dictated from telugu dailies</p>
              <p>13. Class 4 kids perform speed mental math calculations</p>
              <p>14. Class 5 students say the day of any date in any century within seconds</p>
             <p>15. Class 5 students memorize hundreds of mobile numbers</p>
             <p>16. Class 5 students memorize hundreds of objects given on the spot and recall them</p>
             <p>17. Class 5 kids display photographic memory</p>
            

           
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="aspect-[3/4] bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">Talent Showcase 1</div>
          </div>
        </div>

        
      </div>
   
    </section>
  );
}