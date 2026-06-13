import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import './About.css';
import mentors from '../../data/mentors';

function About() {
  useEffect(() => {
    AOS.refresh();
  }, []);



  return (
    <div className="about-page">
      
      {/* SECTION 1 — PAGE HERO (Strict bounded height split layout) */}
      <section className="mt-[70px] flex flex-col md:flex-row md:h-[70vh] overflow-hidden hero-pattern">
        <div className="w-full md:w-[45%] h-[300px] md:h-full relative flex items-center justify-center overflow-hidden">
          <img
            alt="Vibrant Academy Dahisar Classroom"
            className="w-[95%] h-[95%] object-cover rounded-[24px]"
            src="/classroom.jpg"
          />
        </div>
        <div className="w-full md:w-[55%] flex items-center bg-white hero-pattern p-margin_mobile md:p-10 overflow-hidden">
          <div className="max-w-xl mx-auto md:mx-0" data-aos="fade-left">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-brand-teal"></span>
              <span className="font-dancing text-brand-teal text-xl">Believe in Excellence...</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy mb-4 tracking-tight leading-tight">
              About <br /><span className="text-brand-purple">Vibrant Academy.</span>
            </h1>
            <div className="h-1 w-[40px] bg-brand-purple rounded-full mb-6"></div>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-6">
              Powered by the trusted legacy of S.S. Classes, Vibrant Academy provides a supportive learning environment where students are encouraged to grow, excel, and develop a strong foundation for future success.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-wider text-brand-navy/60 mb-8">
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-brand-purple text-base">check_circle</span> Experienced</span>
              <span className="flex items-center gap-1"><span class="material-symbols-outlined text-brand-purple text-base">check_circle</span> Dedicated</span>
              <span className="flex items-center gap-1"><span class="material-symbols-outlined text-brand-purple text-base">check_circle</span> Result-Driven</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#story" className="px-8 py-3.5 bg-brand-yellow hover:bg-[#E0B000] text-[#1F2937] font-bold rounded-lg shadow-md hover:translate-y-[-2px] active:scale-95 transition-all text-sm uppercase tracking-wider text-center">
                Our Story
              </a>
              <Link to="/contact" className="px-8 py-3.5 border-2 border-brand-purple hover:bg-brand-purple hover:text-white text-brand-purple font-bold rounded-lg active:scale-95 transition-all text-sm uppercase tracking-wider text-center">
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — ESTABLISHED METRICS */}
      <section className="bg-white border-y border-brand-navy/5 relative z-30 mt-14">
        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y-0 divide-x divide-brand-navy/5">
            <div className="py-8 md:py-10 flex items-center gap-4 group hover:bg-brand-purple/5 transition-colors px-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-gold">
                <span className="material-symbols-outlined text-xl">emoji_events</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-brand-navy/50 uppercase tracking-widest mb-0.5">ESTABLISHED</p>
                <p className="text-xl font-bold text-brand-navy">Since 2002</p>
              </div>
            </div>
            <div className="py-8 md:py-10 flex items-center gap-4 group hover:bg-brand-purple/5 transition-colors px-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                <span className="material-symbols-outlined text-xl">groups</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-brand-navy/50 uppercase tracking-widest mb-0.5">EXPERT MENTORS</p>
                <p className="text-xl font-bold text-brand-navy">25+ Teachers</p>
              </div>
            </div>
            <div className="py-8 md:py-10 flex items-center gap-4 group hover:bg-brand-purple/5 transition-colors px-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                <span className="material-symbols-outlined text-xl">school</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-brand-navy/50 uppercase tracking-widest mb-0.5">STUDENTS TAUGHT</p>
                <p className="text-xl font-bold text-brand-navy">1000+</p>
              </div>
            </div>
            <div className="py-8 md:py-10 flex items-center gap-4 group hover:bg-brand-purple/5 transition-colors px-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-gold">
                <span className="material-symbols-outlined text-xl">star</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-brand-navy/50 uppercase tracking-widest mb-0.5">PASS RATE</p>
                <p className="text-xl font-bold text-brand-navy">100% Success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — OUR STORY */}
      <section id="story" className="py-stack_xl bg-white overflow-hidden">
        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2" data-aos="fade-right">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-brand-teal"></span>
                <span className="font-dancing text-brand-teal text-xl">Powered by S.S. Classes</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 tracking-tight leading-tight">
                Our Story & <br /><span className="text-brand-purple">Academic Mission.</span>
              </h2>
              <div className="h-1 w-[40px] bg-brand-purple rounded-full mb-6"></div>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Vibrant Academy is built on the trusted educational legacy of S.S. Classes, combining years of teaching excellence with modern learning approaches to help students achieve academic success. 
              </p>
              <div className="border-l-4 border-brand-purple pl-6 py-2 my-6 bg-[#F5F0F7] rounded-r-xl">
                <p className="text-brand-navy italic font-semibold text-sm md:text-base">
                  "Our mission is not just to improve marks, but to build confidence, curiosity, and a lifelong love for learning."
                </p>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                With experienced faculty, focused batches, and personalized guidance, we help students across SSC, ICSE, CBSE, Science, Commerce, and Pharma streams reach their full potential.
              </p>
            </div>
            <div className="w-full lg:w-1/2 relative" data-aos="fade-left">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  alt="Student Studying with Mentor" 
                  className="w-full h-[350px] md:h-[450px] object-cover" 
                  src="/images/teaching photos/whole class photo.jpeg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — MISSION & VISION */}
      <section className="py-stack_xl bg-[#F5F0F7]">
        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-brand-purple/10 border-t-4 border-t-brand-purple shadow-md hover:translate-y-[-4px] hover:shadow-lg transition-all" data-aos="fade-up">
              <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple mb-6">
                <span className="material-symbols-outlined text-2xl">stars</span>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">Our Mission</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                At Vibrant Academy, we believe learning should be full of energy, curiosity, and excitement. Our mission is to turn classrooms into spaces where students enjoy learning, discover their strengths, and build the confidence to achieve their dreams.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-brand-teal/10 border-t-4 border-t-brand-teal shadow-md hover:translate-y-[-4px] hover:shadow-lg transition-all" data-aos="fade-up" data-aos-delay="100">
              <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-6">
                <span className="material-symbols-outlined text-2xl">visibility</span>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">Our Vision</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our vision is to create a generation of confident learners who are not afraid to ask questions, embrace challenges, and shine in every stage of life. Because when learning is vibrant, every future becomes brighter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — FOUNDER PROFILE */}
      <section className="py-stack_xl bg-white overflow-hidden">
        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/3 flex justify-center" data-aos="fade-right">
              <div className="relative">
                <div className="absolute inset-0 border-2 border-brand-purple rounded-2xl transform translate-x-4 translate-y-4"></div>
                <img 
                  alt="Founder Mr. Ravindra Singh" 
                  className="relative rounded-2xl w-[280px] h-[340px] object-cover shadow-xl border-4 border-white" 
                  src="/founder.jpg"
                />
              </div>
            </div>
            <div className="w-full lg:w-2/3" data-aos="fade-left">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-brand-teal"></span>
                <span className="font-dancing text-brand-teal text-xl">Leadership...</span>
              </div>
              <h2 className="text-3xl font-extrabold text-brand-navy mb-1 tracking-tight">Mr. Ravindra Singh</h2>
              <p className="text-brand-purple font-semibold text-sm mb-4">Founder & Curriculum Advisor</p>
              <div className="h-1 w-[40px] bg-brand-purple rounded-full mb-6"></div>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Mr. Ravindra Singh holds an M.Sc. and B.Ed. degree with over 20 years of experience teaching Mathematics. His clear teaching style and strong subject expertise have helped students consistently achieve excellent academic results.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                At Vibrant Academy, he guides students with structured learning methods, regular assessments, and personalized support, helping them build confidence and a strong foundation in Mathematics.
              </p>
              <div className="flex gap-6 border-t border-brand-navy/5 pt-6">
                <div>
                  <h4 className="font-bold text-brand-purple text-lg">20+ Yrs</h4>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mt-0.5">Teaching Experience</p>
                </div>
                <div>
                  <h4 className="font-bold text-brand-teal text-lg">M.SC, B.ED, PHD</h4>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mt-0.5">Qualifications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FACULTY LISTING */}
      <section id="faculty" className="py-stack_xl bg-white border-t border-brand-navy/5">
        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter">

          <div className="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
            <p className="text-brand-teal font-extrabold uppercase tracking-widest text-xs mb-3">Our Faculty</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-2 tracking-tight">
              Faculty <span className="text-brand-purple">Directory.</span>
            </h2>
            <div className="h-1 w-[40px] bg-brand-purple rounded-full mx-auto mb-4"></div>
            <p className="text-gray-500 text-sm leading-relaxed">Qualified educators across all streams and boards committed to student excellence.</p>
          </div>

          {(() => {
            const groups = {};
            mentors.forEach(m => {
              if (!groups[m.subject]) groups[m.subject] = [];
              groups[m.subject].push(m);
            });

            const order = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Marathi', 'Hindi', 'History & Civics', 'Geography & Economics', 'Computer Science', 'O.C.M.', 'S.P.', 'Book Keeping & Accountancy'];
            const sortedKeys = [...order.filter(k => groups[k]), ...Object.keys(groups).filter(k => !order.includes(k))];

            const headingColors = ['bg-brand-purple', 'bg-brand-teal'];

            return (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedKeys.map((subject, si) => (
                  <div key={si} className="bg-white border border-brand-navy/10 rounded-xl shadow-sm overflow-hidden" data-aos="fade-up" data-aos-delay={(si % 3) * 80}>
                    {/* Subject heading with colored background */}
                    <div className={`${headingColors[si % headingColors.length]} px-6 py-4`}>
                      <h3 className="text-base font-extrabold uppercase tracking-[0.15em] text-white">{subject}</h3>
                    </div>
                    {/* Faculty rows */}
                    <ul className="divide-y divide-brand-navy/5">
                      {groups[subject].map((f, fi) => (
                        <li key={fi} className="px-6 py-4">
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1 min-w-0">
                              <p className="font-semibold text-brand-navy text-sm leading-snug">{f.name}</p>
                              <p className="text-gray-400 text-xs mt-0.5">{f.qualification}</p>
                            </div>
                            {f.exp && (
                              <span className="flex-shrink-0 text-[9px] font-bold uppercase tracking-wider text-brand-purple bg-brand-purple/10 border border-brand-purple/20 rounded px-2 py-0.5 mt-0.5 whitespace-nowrap">{f.exp}</span>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            );
          })()}

        </div>
      </section>

    </div>
  );
}

export default About;
