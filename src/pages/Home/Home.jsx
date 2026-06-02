import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

import './Home.css';

// Import data
import toppers from '../../data/toppers';
import testimonials from '../../data/testimonials';

function Home() {
  const [quickForm, setQuickForm] = useState({
    name: '',
    phone: '',
    standard: '',
    subject: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.refresh();
  }, []);

  const handleQuickChange = (e) => {
    const { name, value } = e.target;
    setQuickForm(prev => ({ ...prev, [name]: value }));
  };

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const courses = [
    {
      title: "Algebra & Geometry",
      badge: "Mathematics",
      desc: "Comprehensive foundation of numerical equations, trigonometry matrices, proofs and geometric conceptual layouts.",
      icon: "calculate",
      color: "brand-purple"
    },
    {
      title: "Mechanics & Optics",
      badge: "Physics",
      desc: "Hands-on conceptual reviews of kinematics, rotational dynamics, mirrors, lenses, and magnetic circuit models.",
      icon: "bolt",
      color: "brand-teal"
    },
    {
      title: "Organic & Inorganic",
      badge: "Chemistry",
      desc: "Detailed molecular representations, stoichiometry tables, periodic classifications, and lab reaction procedures.",
      icon: "science",
      color: "brand-gold"
    },
    {
      title: "Physiology & Genetics",
      badge: "Biology",
      desc: "Exploration of cellular organelles, anatomy structure charts, plant respiration, and genetics code metrics.",
      icon: "biotech",
      color: "brand-teal"
    },
    {
      title: "Language & Literature",
      badge: "English",
      desc: "Structured critical grammar essays, dramatic script critiques, public speaking guidelines, and active composition tags.",
      icon: "menu_book",
      color: "brand-purple"
    },
    {
      title: "Boards prep crash course",
      badge: "Board Special",
      desc: "Intensive 30-day question bank reviews, historical board papers, and direct classroom exam mocks.",
      icon: "workspace_premium",
      color: "brand-gold"
    }
  ];

  return (
    <div className="home-page overflow-x-hidden">
      
      {/* SECTION 1 — HERO */}
      <section className="mt-[70px] relative h-[650px] md:h-[80vh] w-full overflow-hidden bg-white">
        <div className="flex flex-col md:flex-row w-full h-full">
          <div className="w-full md:w-[45%] h-[280px] md:h-full relative overflow-hidden bg-white flex items-center justify-center">
            <img 
              alt="Vibrant Academy Logo Banner" 
              className="w-full h-full object-contain p-6 rounded-r-none md:rounded-r-[24px]" 
              src="/vibrant_logo_banner.jpg"
            />
            <div className="absolute inset-0 bg-brand-purple/5 pointer-events-none"></div>
          </div>
          <div className="w-full md:w-[55%] flex items-start md:items-center bg-white hero-pattern px-margin_mobile pt-6 pb-20 md:p-stack_xl">
            <div className="max-w-xl mx-auto md:mx-0">
              <div className="inline-flex items-center gap-2 mb-2 md:mb-3">
                <span className="h-px w-8 bg-brand-teal"></span>
                <span className="font-dancing text-brand-teal text-lg md:text-xl">Believe in Excellence...</span>
              </div>
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy mb-2 md:mb-4 tracking-tight leading-tight">
                Welcome to <br /><span className="text-brand-purple">Vibrant Academy.</span>
              </h1>
              <p className="text-gray-500 text-sm md:text-lg leading-relaxed mb-4 md:mb-6">
                Crafting academic success stories through highly personalized mentorship, comprehensive curriculum guides, and expert-led board coaching since 2002.
              </p>
              <div className="flex gap-4">
                <Link to="/contact" className="px-6 py-3 bg-brand-yellow hover:bg-[#E0B000] text-[#1F2937] font-bold rounded-lg shadow-md transition-all text-xs uppercase tracking-wider">
                  Enroll Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — ESTABLISHED METRICS */}
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

      {/* SECTION 3 — CURVE HEADING SECTION */}
      <section id="offerings" className="py-stack_xl bg-white">
        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <p className="text-brand-teal font-extrabold uppercase tracking-widest text-xs mb-3">Our Core Programs</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-2 tracking-tight">
              Classroom <span className="text-brand-purple">Offerings.</span>
            </h2>
            <div className="h-1 w-[40px] bg-brand-purple rounded-full mx-auto mb-4"></div>
            <p className="text-gray-500 text-base leading-relaxed">
              We specialize in deep conceptual coaching for class 7 to 10 secondary school curriculum boards.
            </p>
          </div>

          {/* Offerings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl p-8 border border-brand-navy/5 shadow-md hover:translate-y-[-6px] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                data-aos="fade-up" 
                data-aos-delay={idx * 100}
              >
                <div>
                  <div className={`w-12 h-12 rounded-full mb-6 flex items-center justify-center bg-brand-purple/5 text-brand-purple`}>
                    <span className="material-symbols-outlined text-2xl">{course.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">{course.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{course.desc}</p>
                </div>
                <div>
                  <span className="px-3 py-1 bg-brand-purple/10 text-brand-purple text-[10px] font-bold rounded-full uppercase tracking-wider">{course.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK ENQUIRY FORM SECTION */}
      <section className="py-12 bg-brand-navy relative z-30 overflow-hidden">
        {/* Subtle decorative background blur elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter relative z-10">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl" data-aos="fade-up">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8">
              <div>
                <span className="font-dancing text-brand-yellow text-xl block mb-1">Reserve Your Free Session...</span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Quick Batch Enquiry</h3>
              </div>
              <p className="text-white/60 text-sm max-w-md">
                Select your academic standard and subject interest to book a free trial trial batch with our senior moderators.
              </p>
            </div>

            {submitted ? (
              <div className="bg-brand-teal/10 border border-brand-teal/20 text-brand-teal p-6 rounded-xl text-center font-bold" data-aos="zoom-in">
                <span className="material-symbols-outlined text-4xl mb-2 block">check_circle</span>
                Thank you! Your academic enquiry has been submitted. We will contact you at {quickForm.phone} within 24 hours.
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
                {/* Field 1: Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-white/70 ml-1">Student Name</label>
                  <input
                    type="text"
                    name="name"
                    value={quickForm.name}
                    onChange={handleQuickChange}
                    placeholder="Enter Name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-white/40 focus:bg-white/15 focus:border-brand-yellow transition-all outline-none text-sm"
                  />
                </div>

                {/* Field 2: Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-white/70 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={quickForm.phone}
                    onChange={handleQuickChange}
                    placeholder="Enter Phone"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-white/40 focus:bg-white/15 focus:border-brand-yellow transition-all outline-none text-sm"
                  />
                </div>

                {/* Field 3: Standard */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-white/70 ml-1">Standard</label>
                  <select
                    name="standard"
                    value={quickForm.standard}
                    onChange={handleQuickChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white focus:bg-brand-navy focus:border-brand-yellow transition-all outline-none text-sm cursor-pointer [&>option]:text-brand-navy [&>option]:bg-white"
                  >
                    <option value="" className="text-white/40">Select Class</option>
                    <option value="Class 7">Class 7</option>
                    <option value="Class 8">Class 8</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 10">Class 10</option>
                    <option value="Class 11">Class 11</option>
                    <option value="Class 12">Class 12</option>
                  </select>
                </div>

                {/* Field 4: Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-white/70 ml-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={quickForm.subject}
                    onChange={handleQuickChange}
                    placeholder="e.g. Maths, Physics"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-white/40 focus:bg-white/15 focus:border-brand-yellow transition-all outline-none text-sm"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-brand-yellow hover:bg-brand-yellow/90 disabled:bg-brand-yellow/60 text-[#1F2937] font-bold rounded-lg transition-all text-xs uppercase tracking-widest shadow-lg shadow-brand-yellow/10"
                >
                  {isSubmitting ? 'Submitting...' : 'Enquire Now'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 4 — HIGHER SECONDARY SECTION */}
      <section className="py-stack_xl bg-[#F5F0F7]">
        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2" data-aos="fade-right">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-brand-teal"></span>
                <span className="font-dancing text-brand-teal text-xl">Believe in Excellence...</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 tracking-tight leading-tight">
                Higher Secondary <br /><span className="text-brand-purple">Batch Coaching.</span>
              </h2>
              <div className="h-1 w-[40px] bg-brand-purple rounded-full mb-6"></div>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                In addition to secondary foundations, we host expert-guided coaching grids for high school cohorts (Class 11 & 12). Science streams focus heavily on board compliance standards with intensive mock runs.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-brand-teal mt-0.5">check_circle</span>
                  <span className="text-sm font-medium text-brand-navy/80">Class 11 and 12 Physics, Chemistry, Mathematics</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-brand-teal mt-0.5">check_circle</span>
                  <span className="text-sm font-medium text-brand-navy/80">ICSE, SSC, CBSE state board integration models</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-brand-teal mt-0.5">check_circle</span>
                  <span className="text-sm font-medium text-brand-navy/80">Bi-weekly diagnostic test series with scorecard reports</span>
                </div>
              </div>
              <Link to="/contact" className="px-8 py-3.5 bg-brand-yellow hover:bg-[#E0B000] text-[#1F2937] font-bold rounded-lg shadow-md transition-all text-xs uppercase tracking-wider">
                Request timing sheet
              </Link>
            </div>
            <div className="w-full lg:w-1/2 relative" data-aos="fade-left">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  alt="High School Study Environment" 
                  className="w-full h-[350px] md:h-[450px] object-cover" 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand-teal text-white p-6 rounded-xl shadow-xl hidden sm:block max-w-xs">
                <h4 className="font-bold text-lg mb-1">98.5% Highest Score</h4>
                <p className="text-white/80 text-xs">Achieved in Class 12 Boards in 2024 by our student!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHY CHOOSE US */}
      <section className="py-stack_xl bg-white">
        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 order-2 lg:order-1" data-aos="fade-right">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#F0F9FC] p-6 rounded-xl border border-brand-teal/5 flex flex-col justify-between h-[180px]">
                  <span className="material-symbols-outlined text-brand-teal text-3xl">co_present</span>
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm mb-1">Micro Batches</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">Max 15 students per batch for absolute focus.</p>
                  </div>
                </div>
                <div className="bg-[#F5F0F7] p-6 rounded-xl border border-brand-purple/5 flex flex-col justify-between h-[180px]">
                  <span className="material-symbols-outlined text-brand-purple text-3xl">verified</span>
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm mb-1">Weekly Tests</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">Standard diagnostic tests to track performance.</p>
                  </div>
                </div>
                <div className="bg-[#FFFCEB] p-6 rounded-xl border border-brand-yellow/5 flex flex-col justify-between h-[180px]">
                  <span className="material-symbols-outlined text-brand-gold text-3xl">psychology</span>
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm mb-1">Senior Mentors</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">Ex-examiners and syllabus experts guide classes.</p>
                  </div>
                </div>
                <div className="bg-[#F5F0F7] p-6 rounded-xl border border-brand-purple/5 flex flex-col justify-between h-[180px]">
                  <span className="material-symbols-outlined text-brand-purple text-3xl">menu_book</span>
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm mb-1">Syllabus Grids</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">Well-mapped worksheets, handouts, and notes.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2" data-aos="fade-left">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-brand-teal"></span>
                <span className="font-dancing text-brand-teal text-xl">Believe in Excellence...</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 tracking-tight leading-tight">
                Our Educational <br /><span className="text-brand-purple">Philosophy.</span>
              </h2>
              <div className="h-1 w-[40px] bg-brand-purple rounded-full mb-6"></div>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                We believe that education is not about rote memorization but building strong analytical skills. Our boutique framework maps out standard textbook concepts into easy graphical representations, formula grids, and diagnostic test feedback.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Every child is unique, which is why our classes are limited. We analyze weekly scoring indices to target doubt clearance and correct assessment writing formats.
              </p>
              <Link to="/about" className="px-8 py-3.5 bg-brand-yellow hover:bg-[#E0B000] text-[#1F2937] font-bold rounded-lg shadow-md transition-all text-xs uppercase tracking-wider">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — RESULTS BANNER (TOPPERS STRIP) */}
      <section className="py-stack_xl bg-white border-t border-brand-navy/5">
        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-brand-teal font-extrabold uppercase tracking-widest text-xs mb-3">Our Toppers</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-2 tracking-tight">
              Student <span class="text-brand-purple">Achievements.</span>
            </h2>
            <div className="h-1 w-[40px] bg-brand-purple rounded-full mx-auto mb-4"></div>
          </div>

          {/* Toppers Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {toppers.slice(0, 3).map((topper) => (
              <div 
                key={topper.id}
                className="bg-white rounded-xl p-8 border-t-[3px] border-brand-yellow shadow-md flex flex-col items-center text-center hover:translate-y-[-4px] transition-all"
                data-aos="zoom-in"
              >
                <div className="relative w-20 h-20 mb-4">
                  <img 
                    alt={topper.name} 
                    className="w-full h-full object-cover rounded-full border-2 border-brand-yellow p-1" 
                    src={topper.photo}
                  />
                </div>
                <h4 className="font-bold text-brand-purple text-base mb-1">{topper.name}</h4>
                <p className="text-4xl font-extrabold text-[#E0B000] mb-1 font-poppins">{topper.score}</p>
                <p className="text-xs font-semibold text-brand-teal uppercase tracking-wider">{topper.board} {topper.class}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/results" className="px-8 py-3.5 border-2 border-brand-purple hover:bg-brand-purple hover:text-white text-brand-purple font-bold rounded-lg transition-all text-sm uppercase tracking-wider inline-block">
              View All Results
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION 7 — TESTIMONIALS */}
      <section className="py-stack_xl bg-[#F5F0F7]">
        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-brand-teal font-extrabold uppercase tracking-widest text-xs mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-2 tracking-tight">
              What Parents <span className="text-brand-purple">Say About Us.</span>
            </h2>
            <div className="h-1 w-[40px] bg-brand-purple rounded-full mx-auto mb-4"></div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test) => (
              <div 
                key={test.id}
                className="bg-white rounded-xl p-8 shadow-md flex flex-col justify-between border border-brand-navy/5"
                data-aos="fade-up"
              >
                <div>
                  <span className="text-5xl text-brand-purple/20 font-serif leading-none font-bold block mb-2">“</span>
                  <p className="text-gray-600 text-sm italic mb-4 leading-relaxed">{test.quote}</p>
                </div>
                <div>
                  <div className="flex text-brand-yellow mb-4">
                    {[...Array(test.stars)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-base" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                    ))}
                  </div>
                  <div className="h-px bg-brand-navy/5 w-full my-4"></div>
                  <div className="flex items-center gap-3">
                    <img alt={test.name} className="w-10 h-10 rounded-full object-cover" src={test.photo} />
                    <div>
                      <h5 className="font-bold text-brand-purple text-sm">{test.name}</h5>
                      <p className="text-gray-400 text-[11px]">{test.detail}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;
