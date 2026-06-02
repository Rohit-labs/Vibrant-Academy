import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import './About.css';

function About() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  const mentors = [
    {
      name: "Mr. Ravindra Singh",
      role: "Founder & Physics Advisor",
      exp: "20+ Years Exp",
      board: "Ex-ICSE Moderator",
      desc: "Mr. Ravindra Singh guides our pedagogical modules, ensuring all Physics lesson sheets comply directly with standardized board layouts.",
      avatar: "/founder.jpg"
    },
    {
      name: "Mr. Malhotra",
      role: "Mathematics Chief",
      exp: "15+ Years Exp",
      board: "Boards Evaluator",
      desc: "Specializes in high-speed calculation matrices, algebraic proofs, and geometry visual guides for advanced grades.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200"
    },
    {
      name: "Miss Sneha",
      role: "Chemistry Coordinator",
      exp: "8+ Years Exp",
      board: "Syllabus Expert",
      desc: "Miss Sneha curates our stoichiometry grids, periodic memory maps, and organic reaction diagrams.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200"
    }
  ];

  return (
    <div className="about-page">
      
      {/* SECTION 1 — PAGE HERO (Strict bounded height split layout) */}
      <section className="mt-[70px] flex flex-col md:flex-row md:h-[500px] overflow-hidden bg-white">
        <div className="w-full md:w-[45%] h-[300px] md:h-full relative overflow-hidden">
          <img 
            alt="Vibrant Academy Dahisar Classroom" 
            className="w-full h-full object-cover rounded-r-none md:rounded-r-[24px] object-[40%_center]" 
            src="/classroom.jpg"
          />
          <div className="absolute inset-0 bg-brand-navy/5"></div>
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
              We are a boutique educational institution dedicated to crafting academic success stories through highly personalized mentorship and modern teaching methodologies.
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

      {/* SECTION 2 — STATS STRIP */}
      <section className="bg-white border-y border-brand-navy/5 relative z-30">
        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y-0 divide-x divide-brand-navy/5">
            <div className="py-8 md:py-10 flex items-center gap-4 group hover:bg-brand-purple/5 transition-colors px-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-gold">
                <span className="material-symbols-outlined text-xl">emoji_events</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-brand-navy/50 uppercase tracking-widest mb-0.5">ESTABLISHED</p>
                <p className="text-xl font-bold text-brand-navy">Since 2010</p>
              </div>
            </div>
            <div className="py-8 md:py-10 flex items-center gap-4 group hover:bg-brand-purple/5 transition-colors px-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                <span className="material-symbols-outlined text-xl">groups</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-brand-navy/50 uppercase tracking-widest mb-0.5">EXPERT MENTORS</p>
                <p className="text-xl font-bold text-brand-navy">15+ Teachers</p>
              </div>
            </div>
            <div className="py-8 md:py-10 flex items-center gap-4 group hover:bg-brand-purple/5 transition-colors px-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                <span className="material-symbols-outlined text-xl">school</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-brand-navy/50 uppercase tracking-widest mb-0.5">STUDENTS TAUGHT</p>
                <p className="text-xl font-bold text-brand-navy">500+ Grads</p>
              </div>
            </div>
            <div className="py-8 md:py-10 flex items-center gap-4 group hover:bg-brand-purple/5 transition-colors px-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-gold">
                <span className="material-symbols-outlined text-xl">star</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-brand-navy/50 uppercase tracking-widest mb-0.5">PASS RATE</p>
                <p className="text-xl font-bold text-brand-navy">95% Success</p>
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
                <span className="font-dancing text-brand-teal text-xl">Believe in Excellence...</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 tracking-tight leading-tight">
                Our Story & <br /><span className="text-brand-purple">Academic Mission.</span>
              </h2>
              <div className="h-1 w-[40px] bg-brand-purple rounded-full mb-6"></div>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Founded in 2010 as a small classroom project, Vibrant Academy has expanded into Dahisar East's leading boutique institute for secondary board preparation. 
              </p>
              <div className="border-l-4 border-brand-purple pl-6 py-2 my-6 bg-[#F5F0F7] rounded-r-xl">
                <p className="text-brand-navy italic font-semibold text-sm md:text-base">
                  "Our goal is not simply to help students pass examinations, but to build cognitive frameworks that spark life-long computational and scientific interest."
                </p>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                By maintaining highly focused micro-batch architectures, our senior faculties evaluate analytical scorecards and custom draft progress reviews for every child.
              </p>
            </div>
            <div className="w-full lg:w-1/2 relative" data-aos="fade-left">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  alt="Student Studying with Mentor" 
                  className="w-full h-[350px] md:h-[450px] object-cover" 
                  src="/student_studying_with_mentor.png"
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
                To engineer standard board preparation modules that emphasize conceptual clarity, direct evaluation reports, and targeted doubt-solving systems.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-brand-teal/10 border-t-4 border-t-brand-teal shadow-md hover:translate-y-[-4px] hover:shadow-lg transition-all" data-aos="fade-up" data-aos-delay="100">
              <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-6">
                <span className="material-symbols-outlined text-2xl">visibility</span>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">Our Vision</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                To craft a collaborative hub where micro-batch learning formats ensure zero child-isolation, prompting excellent analytical results and state-wide ranks.
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
                Mr. Ravindra Singh has spent over two decades in high school physics and curriculum curation. As a senior academic coordinator and ex-ICSE Board moderator, he designs the testing grids and analytical sheets at Vibrant Academy.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                His structural diagnostic notes have guided hundreds of students to achieve 100/100 distinctions in board physics papers year after year.
              </p>
              <div className="flex gap-6 border-t border-brand-navy/5 pt-6">
                <div>
                  <h4 className="font-bold text-brand-purple text-lg">20+ Yrs</h4>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mt-0.5">Teaching Experience</p>
                </div>
                <div>
                  <h4 className="font-bold text-brand-teal text-lg">MA, B.Ed</h4>
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
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <p className="text-brand-teal font-extrabold uppercase tracking-widest text-xs mb-3">Our Core Team</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-2 tracking-tight">
              Meet Our <span className="text-brand-purple">Mentors.</span>
            </h2>
            <div className="h-1 w-[40px] bg-brand-purple rounded-full mx-auto mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mentors.map((mentor, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl p-8 border border-brand-navy/5 shadow-md flex flex-col items-center text-center hover:translate-y-[-6px] hover:shadow-xl transition-all duration-300"
                data-aos="fade-up" 
                data-aos-delay={idx * 100}
              >
                <img alt={mentor.name} className="w-24 h-24 rounded-full object-cover border-2 border-brand-purple p-1 mb-6 shadow-md" src={mentor.avatar} />
                <h4 className="font-bold text-brand-purple text-lg mb-1">{mentor.name}</h4>
                <p className="text-brand-navy/60 text-xs font-semibold uppercase tracking-wider mb-2">{mentor.role}</p>
                <div className="flex gap-2 justify-center mb-4">
                  <span className="px-3 py-0.5 bg-brand-purple/10 text-brand-purple text-[10px] font-bold rounded-full uppercase tracking-wider">{mentor.exp}</span>
                  <span className="px-3 py-0.5 bg-brand-teal/10 text-brand-teal text-[10px] font-bold rounded-full uppercase tracking-wider">{mentor.board}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{mentor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — BOARD PILLS STRIP */}
      <section className="py-12 bg-brand-navy text-white">
        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter text-center">
          <p className="text-brand-yellow font-bold uppercase tracking-wider text-xs mb-6">AFFILIATED SYLLABUS BOARDS & SUBJECT PILLS</p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 border border-white/20 rounded-full text-sm font-semibold uppercase tracking-wider bg-white/5">ICSE Board</span>
            <span className="px-4 py-2 border border-white/20 rounded-full text-sm font-semibold uppercase tracking-wider bg-white/5">SSC Board</span>
            <span className="px-4 py-2 border border-white/20 rounded-full text-sm font-semibold uppercase tracking-wider bg-white/5">Class 7 to 10</span>
            <span className="px-4 py-2 border border-white/20 rounded-full text-sm font-semibold uppercase tracking-wider bg-white/5">Class 11 & 12 Boards</span>
            <span className="px-4 py-2 border border-white/20 rounded-full text-sm font-semibold uppercase tracking-wider bg-white/5">Science Stream</span>
            <span className="px-4 py-2 border border-white/20 rounded-full text-sm font-semibold uppercase tracking-wider bg-white/5">Algebra & Geometry</span>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
