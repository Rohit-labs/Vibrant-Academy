import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import './Results.css';

// Import data
import toppers from '../../data/toppers';
import testimonials from '../../data/testimonials';
import resultsTable from '../../data/results';

function Results() {
  const [filterYear, setFilterYear] = useState('all');
  const [visibleToppers, setVisibleToppers] = useState(4);
  const [galleryFilter, setGalleryFilter] = useState('all');

  useEffect(() => {
    AOS.refresh();
  }, []);

  // Filter toppers based on year
  const filteredToppers = toppers.filter(topper => {
    return filterYear === 'all' || topper.year === filterYear;
  });

  const handleLoadMore = () => {
    setVisibleToppers(prev => prev + 4);
  };

  const galleryItems = [
    {
      id: 1,
      category: "marksheets",
      title: "Class 10 Board Marksheet",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4GycBE1yYDgeclceBfmTNMTVtS-y2mpakZYxHyDaUFrvOXHcHQzZ97lSSBuqYbqJqi-72q3NjNUP3vP27xsaZb3NI40FSLooe-r1QGXr-3ENPK37eaK9YclezGHXGO3XFjmLEZT_roVRsp_rQ6Adbpq-_RilTEMkfH530SA-XiKhEDeya-LpAqj0NOA_Q1HiX8FFe8i32ZdR-mZk7B_WorYFrBnE1qA_A2ng2cBf3xwpCmdTqoiFACerLSPJvUyihh4_1IWYLJg"
    },
    {
      id: 2,
      category: "celebrations",
      title: "Annual Toppers Convocation Ceremony",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 3,
      category: "awards",
      title: "Best Academic Coaching Trophy 2024",
      img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 4,
      category: "marksheets",
      title: "100/100 Mathematics Centum",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4GycBE1yYDgeclceBfmTNMTVtS-y2mpakZYxHyDaUFrvOXHcHQzZ97lSSBuqYbqJqi-72q3NjNUP3vP27xsaZb3NI40FSLooe-r1QGXr-3ENPK37eaK9YclezGHXGO3XFjmLEZT_roVRsp_rQ6Adbpq-_RilTEMkfH530SA-XiKhEDeya-LpAqj0NOA_Q1HiX8FFe8i32ZdR-mZk7B_WorYFrBnE1qA_A2ng2cBf3xwpCmdTqoiFACerLSPJvUyihh4_1IWYLJg"
    },
    {
      id: 5,
      category: "celebrations",
      title: "Parents Appreciation Dinner Meet",
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 6,
      category: "awards",
      title: "District Rank 1 Gold Medalist Award",
      img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  const filteredGallery = galleryItems.filter(item => {
    return galleryFilter === 'all' || item.category === galleryFilter;
  });

  return (
    <div className="results-page overflow-x-hidden">
      
      {/* SECTION 1 — PAGE HERO */}
      <section className="mt-[70px] flex flex-col md:flex-row min-h-[500px] overflow-hidden bg-white">
        <div className="w-full md:w-[45%] h-[250px] md:h-auto relative overflow-hidden">
          <img 
            alt="Celebrating Students Results" 
            className="w-full h-full object-cover rounded-r-none md:rounded-r-[24px]" 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200"
          />
          <div className="absolute inset-0 bg-brand-navy/5"></div>
        </div>
        <div className="w-full md:w-[55%] flex items-center bg-white hero-pattern p-margin_mobile md:p-stack_xl">
          <div className="max-w-xl mx-auto md:mx-0" data-aos="fade-left">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-brand-teal"></span>
              <span className="font-dancing text-brand-teal text-xl">Believe in Excellence...</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy mb-4 tracking-tight leading-tight">
              Our Student <br /><span className="text-brand-purple">Results.</span>
            </h1>
            <div className="h-1 w-[40px] bg-brand-purple rounded-full mb-6"></div>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-6">
              We are proud of every student who has walked through our doors. Their success is our greatest achievement and the true measure of our excellence.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-wider text-brand-navy/60 mb-8">
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-brand-purple text-base">check_circle</span> ICSE Toppers</span>
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-brand-purple text-base">check_circle</span> SSC Toppers</span>
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-brand-purple text-base">check_circle</span> 95% Pass Rate</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#toppers" className="px-8 py-3.5 bg-brand-yellow hover:bg-[#E0B000] text-[#1F2937] font-bold rounded-lg shadow-md hover:translate-y-[-2px] active:scale-95 transition-all text-sm uppercase tracking-wider text-center">
                View Toppers
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
                <p className="text-[10px] font-bold text-brand-navy/50 uppercase tracking-widest mb-0.5">Total Students</p>
                <p className="text-xl font-bold text-brand-navy">500+</p>
              </div>
            </div>
            <div className="py-8 md:py-10 flex items-center gap-4 group hover:bg-brand-purple/5 transition-colors px-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                <span className="material-symbols-outlined text-xl">star</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-brand-navy/50 uppercase tracking-widest mb-0.5">Pass Rate</p>
                <p className="text-xl font-bold text-brand-navy">95%</p>
              </div>
            </div>
            <div className="py-8 md:py-10 flex items-center gap-4 group hover:bg-brand-purple/5 transition-colors px-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                <span className="material-symbols-outlined text-xl">school</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-brand-navy/50 uppercase tracking-widest mb-0.5">Years Experience</p>
                <p className="text-xl font-bold text-brand-navy">10+</p>
              </div>
            </div>
            <div className="py-8 md:py-10 flex items-center gap-4 group hover:bg-brand-purple/5 transition-colors px-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-gold">
                <span className="material-symbols-outlined text-xl">workspace_premium</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-brand-navy/50 uppercase tracking-widest mb-0.5">Top Scorers</p>
                <p className="text-xl font-bold text-brand-navy">50+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — ANIMATED STATS COUNTER */}
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y-0 divide-x-0 md:divide-x divide-white/10 text-center">
            <div className="px-4">
              <p className="text-5xl md:text-6xl font-extrabold text-brand-yellow mb-2 font-poppins">500+</p>
              <p className="text-gray-400 text-sm tracking-wider uppercase font-semibold text-[13px]">Students Taught</p>
            </div>
            <div className="px-4">
              <p className="text-5xl md:text-6xl font-extrabold text-brand-yellow mb-2 font-poppins">95%</p>
              <p className="text-gray-400 text-sm tracking-wider uppercase font-semibold text-[13px]">Pass Rate</p>
            </div>
            <div className="px-4">
              <p className="text-5xl md:text-6xl font-extrabold text-brand-yellow mb-2 font-poppins">10+</p>
              <p className="text-gray-400 text-sm tracking-wider uppercase font-semibold text-[13px]">Years Experience</p>
            </div>
            <div className="px-4">
              <p className="text-5xl md:text-6xl font-extrabold text-brand-yellow mb-2 font-poppins">50+</p>
              <p className="text-gray-400 text-sm tracking-wider uppercase font-semibold text-[13px]">Top Scorers</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — YEAR FILTER + TOPPERS GRID */}
      <section id="toppers" className="py-stack_xl bg-white">
        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter">
          
          <div className="text-center max-w-2xl mx-auto mb-12" data-aos="fade-up">
            <p className="text-brand-teal font-extrabold uppercase tracking-widest text-xs mb-3 text-[13px]">Our Toppers</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-2 tracking-tight">
              Hall of <span className="text-brand-purple">Fame.</span>
            </h2>
            <div className="h-1 w-[40px] bg-brand-purple rounded-full mx-auto mb-4"></div>
            <p className="text-gray-500 text-base leading-relaxed">
              Celebrating our brightest stars who made Vibrant Academy proud year after year.
            </p>
          </div>

          {/* Year Filter Bar */}
          <div className="flex gap-3 overflow-x-auto pb-4 justify-start md:justify-center mb-10 hide-scrollbar scroll-smooth">
            {['all', '2024', '2023', '2022', '2021', '2020'].map(year => (
              <button 
                key={year}
                onClick={() => {
                  setFilterYear(year);
                  setVisibleToppers(4); // Reset pagination
                }}
                className={`px-6 py-2 rounded-full border transition-all text-xs font-bold uppercase whitespace-nowrap ${
                  filterYear === year 
                    ? 'bg-brand-yellow text-brand-purple border-brand-yellow shadow-sm font-extrabold' 
                    : 'bg-white text-brand-purple border-brand-purple hover:bg-brand-purple/5'
                }`}
              >
                {year === 'all' ? 'ALL' : year}
              </button>
            ))}
          </div>

          {/* Toppers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredToppers.slice(0, visibleToppers).map((topper) => (
              <div 
                key={topper.id}
                className="bg-white rounded-xl p-6 border border-brand-purple/10 border-t-4 border-t-brand-yellow shadow-sm hover:shadow-lg hover:translate-y-[-6px] transition-all duration-300 flex flex-col items-center text-center snap-center"
                data-aos="zoom-in"
              >
                <div className="relative w-24 h-24 mb-4">
                  <img alt={topper.name} className="w-full h-full object-cover rounded-full border-2 border-brand-yellow p-1 shadow-inner" src={topper.photo} />
                  <div className="absolute bottom-0 right-0 w-7 h-7 bg-brand-yellow rounded-full flex items-center justify-center text-brand-navy border-2 border-white text-sm font-bold shadow-md">{topper.medal}</div>
                </div>
                <h4 className="font-bold text-brand-purple text-base mb-1">{topper.name}</h4>
                <p className="text-3xl font-extrabold text-[#E0B000] mb-3 font-poppins">{topper.score}</p>
                <div className="flex flex-wrap justify-center gap-1.5 mb-3">
                  <span className="px-3 py-0.5 bg-brand-purple text-white text-[10px] font-semibold rounded-full">{topper.board}</span>
                  <span className="px-3 py-0.5 bg-brand-teal text-white text-[10px] font-semibold rounded-full">{topper.class}</span>
                </div>
                <p className="text-gray-400 text-xs italic mb-4 leading-none">{topper.subject}</p>
                <div className="h-px bg-brand-navy/5 w-full my-3"></div>
                <span className="px-3 py-1 bg-[#F5F0F7] text-brand-purple text-[10px] font-bold rounded-full uppercase tracking-wider">Batch {topper.year}</span>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleToppers < filteredToppers.length && (
            <div className="text-center mt-12">
              <button 
                onClick={handleLoadMore}
                className="px-8 py-3 border-2 border-brand-yellow hover:bg-brand-yellow hover:text-[#1F2937] text-brand-purple font-bold rounded-lg active:scale-95 transition-all text-xs uppercase tracking-wider"
              >
                Load More Toppers
              </button>
            </div>
          )}

        </div>
      </section>

      {/* SECTION 5 — BOARD WISE RESULTS */}
      <section className="py-stack_xl bg-[#F5F0F7]">
        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter">
          
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <p className="text-brand-teal font-extrabold uppercase tracking-widest text-xs mb-3">Board Results</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-2 tracking-tight">
              ICSE, CBSE & <span className="text-brand-purple">SSC Results.</span>
            </h2>
            <div className="h-1 w-[40px] bg-brand-purple rounded-full mx-auto mb-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Card 1: ICSE Results */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col justify-between border border-brand-navy/5" data-aos="fade-right">
              <div>
                <div className="bg-brand-purple text-center py-6 px-4 text-white">
                  <h3 className="text-2xl font-bold font-poppins">ICSE Board</h3>
                  <p className="text-brand-yellow text-xs font-semibold uppercase tracking-wider mt-1">Class 7 to 10</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-4 text-sm md:text-base font-medium text-brand-navy/80">
                    <li className="flex items-start gap-2.5 py-3 border-b border-brand-navy/5">
                      <span className="material-symbols-outlined text-brand-teal">check_circle</span>
                      <span>98.5% highest score achieved</span>
                    </li>
                    <li className="flex items-start gap-2.5 py-3 border-b border-brand-navy/5">
                      <span className="material-symbols-outlined text-brand-teal">check_circle</span>
                      <span>100% pass rate in Science</span>
                    </li>
                    <li className="flex items-start gap-2.5 py-3 border-b border-brand-navy/5">
                      <span className="material-symbols-outlined text-brand-teal">check_circle</span>
                      <span>95% pass rate in Commerce</span>
                    </li>
                    <li className="flex items-start gap-2.5 py-3 border-b border-brand-navy/5">
                      <span className="material-symbols-outlined text-brand-teal">check_circle</span>
                      <span>20+ students scored above 90%</span>
                    </li>
                    <li className="flex items-start gap-2.5 py-3">
                      <span className="material-symbols-outlined text-brand-teal">check_circle</span>
                      <span>5 students in district top 10</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-8 pt-0">
                <Link to="/contact" className="w-full py-3 bg-brand-yellow hover:bg-[#E0B000] text-[#1F2937] font-bold rounded-lg uppercase text-xs tracking-wider transition-all text-center block">
                  View ICSE Details
                </Link>
              </div>
            </div>

            {/* Card 2: CBSE Results (In Between!) */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col justify-between border border-brand-navy/5" data-aos="fade-up" data-aos-delay="100">
              <div>
                <div className="bg-brand-navy text-center py-6 px-4 text-white">
                  <h3 className="text-2xl font-bold font-poppins">CBSE Board</h3>
                  <p className="text-brand-yellow text-xs font-semibold uppercase tracking-wider mt-1">Class 7 to 10</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-4 text-sm md:text-base font-medium text-brand-navy/80">
                    <li className="flex items-start gap-2.5 py-3 border-b border-brand-navy/5">
                      <span className="material-symbols-outlined text-brand-teal">check_circle</span>
                      <span>98.0% highest score achieved</span>
                    </li>
                    <li className="flex items-start gap-2.5 py-3 border-b border-brand-navy/5">
                      <span className="material-symbols-outlined text-brand-teal">check_circle</span>
                      <span>100% pass rate in Science & Maths</span>
                    </li>
                    <li className="flex items-start gap-2.5 py-3 border-b border-brand-navy/5">
                      <span className="material-symbols-outlined text-brand-teal">check_circle</span>
                      <span>96% pass rate in English</span>
                    </li>
                    <li className="flex items-start gap-2.5 py-3 border-b border-brand-navy/5">
                      <span className="material-symbols-outlined text-brand-teal">check_circle</span>
                      <span>15+ students scored above 90%</span>
                    </li>
                    <li className="flex items-start gap-2.5 py-3">
                      <span className="material-symbols-outlined text-brand-teal">check_circle</span>
                      <span>Top regional board school ranks</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-8 pt-0">
                <Link to="/contact" className="w-full py-3 bg-brand-yellow hover:bg-[#E0B000] text-[#1F2937] font-bold rounded-lg uppercase text-xs tracking-wider transition-all text-center block">
                  View CBSE Details
                </Link>
              </div>
            </div>

            {/* Card 3: SSC Results */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col justify-between border border-brand-navy/5" data-aos="fade-left" data-aos-delay="200">
              <div>
                <div className="bg-brand-teal text-center py-6 px-4 text-white">
                  <h3 className="text-2xl font-bold font-poppins">SSC Board</h3>
                  <p className="text-brand-yellow text-xs font-semibold uppercase tracking-wider mt-1">Class 7 to 10</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-4 text-sm md:text-base font-medium text-brand-navy/80">
                    <li className="flex items-start gap-2.5 py-3 border-b border-brand-navy/5">
                      <span className="material-symbols-outlined text-brand-teal">check_circle</span>
                      <span>97.2% highest score achieved</span>
                    </li>
                    <li className="flex items-start gap-2.5 py-3 border-b border-brand-navy/5">
                      <span className="material-symbols-outlined text-brand-teal">check_circle</span>
                      <span>100% pass rate in Science</span>
                    </li>
                    <li className="flex items-start gap-2.5 py-3 border-b border-brand-navy/5">
                      <span className="material-symbols-outlined text-brand-teal">check_circle</span>
                      <span>94% pass rate in Commerce</span>
                    </li>
                    <li className="flex items-start gap-2.5 py-3 border-b border-brand-navy/5">
                      <span className="material-symbols-outlined text-brand-teal">check_circle</span>
                      <span>18+ students scored above 90%</span>
                    </li>
                    <li className="flex items-start gap-2.5 py-3">
                      <span className="material-symbols-outlined text-brand-teal">check_circle</span>
                      <span>3 students in state top 20</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-8 pt-0">
                <Link to="/contact" className="w-full py-3 bg-brand-yellow hover:bg-[#E0B000] text-[#1F2937] font-bold rounded-lg uppercase text-xs tracking-wider transition-all text-center block">
                  View SSC Details
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6 — SUBJECT WISE RESULTS */}
      <section className="py-stack_xl bg-white">
        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter">
          
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <p className="text-brand-teal font-extrabold uppercase tracking-widest text-xs mb-3 text-[13px]">Subject Results</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-2 tracking-tight">
              Subject Wise <span className="text-brand-purple">Performance.</span>
            </h2>
            <div className="h-1 w-[40px] bg-brand-purple rounded-full mx-auto mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Science Card */}
            <div className="bg-white rounded-xl p-8 border border-brand-navy/5 border-t-4 border-t-brand-teal shadow-md hover:translate-y-[-4px] hover:shadow-xl transition-all" data-aos="fade-up">
              <div className="w-14 h-14 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center mb-6 mx-auto">
                <span className="material-symbols-outlined text-2xl">science</span>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4 text-center">Science Stream</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 text-center">Stellar analytical marks achieved in physics, chemistry, and genetics modules.</p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-bold text-brand-navy/70 mb-1">
                    <span>PASS RATE</span>
                    <span>100%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-teal rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between border-t border-brand-navy/5 pt-4 text-xs font-semibold">
                  <span className="text-gray-400">TOP SCORER:</span>
                  <span className="text-brand-purple">98.5% Aditi Sharma</span>
                </div>
              </div>
            </div>

            {/* Commerce Card */}
            <div className="bg-white rounded-xl p-8 border border-brand-navy/5 border-t-4 border-t-brand-purple shadow-md hover:translate-y-[-4px] hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="100">
              <div className="w-14 h-14 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center mb-6 mx-auto">
                <span className="material-symbols-outlined text-2xl">calculate</span>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4 text-center">Mathematics</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 text-center">Algebraic centums and complex geometry proofs solved with visual standards.</p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-bold text-brand-navy/70 mb-1">
                    <span>PASS RATE</span>
                    <span>98%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-purple rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between border-t border-brand-navy/5 pt-4 text-xs font-semibold">
                  <span className="text-gray-400">TOP SCORER:</span>
                  <span className="text-brand-purple">100/100 Rohan Mehta</span>
                </div>
              </div>
            </div>

            {/* English Card */}
            <div className="bg-white rounded-xl p-8 border border-brand-navy/5 border-t-4 border-t-brand-yellow shadow-md hover:translate-y-[-4px] hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="200">
              <div className="w-14 h-14 rounded-full bg-brand-yellow/10 text-brand-gold flex items-center justify-center mb-6 mx-auto">
                <span className="material-symbols-outlined text-2xl">menu_book</span>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4 text-center">English & Language</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 text-center">Critical essay writing guidelines, grammar grids, and literature critiques.</p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-bold text-brand-navy/70 mb-1">
                    <span>PASS RATE</span>
                    <span>96%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-yellow rounded-full" style={{ width: '96%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between border-t border-brand-navy/5 pt-4 text-xs font-semibold">
                  <span className="text-gray-400">TOP SCORER:</span>
                  <span className="text-brand-purple">96.5% Neha Deshmukh</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7 — YEAR WISE RESULTS TABLE */}
      <section className="py-stack_xl bg-[#F5F0F7]">
        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-12" data-aos="fade-up">
            <p className="text-brand-teal font-extrabold uppercase tracking-widest text-xs mb-3">Historical Breakdown</p>
            <h2 className="text-3xl font-extrabold text-brand-navy mb-2 tracking-tight">Year Wise Performance</h2>
            <div className="h-1 w-12 bg-brand-purple rounded-full mx-auto mb-6"></div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-brand-navy/5 overflow-hidden" data-aos="fade-up">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-brand-navy/5 text-left border-collapse">
                <thead className="bg-[#1E2D6B] text-white">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Year</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Board</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Total Students</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Pass Rate</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Top Score</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Distinction</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Remarks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-navy/5 text-sm font-semibold text-brand-navy/80">
                  {resultsTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-brand-purple/5 transition-colors">
                      <td className="px-6 py-4 text-brand-purple font-extrabold">{row.year}</td>
                      <td className="px-6 py-4"><span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${row.board === 'ICSE' ? 'bg-brand-purple/10 text-brand-purple' : 'bg-brand-teal/10 text-brand-teal'}`}>{row.board}</span></td>
                      <td className="px-6 py-4 font-mono">{row.students}</td>
                      <td className="px-6 py-4 text-brand-teal font-extrabold">{row.passRate}</td>
                      <td className="px-6 py-4 text-[#D97706] font-extrabold">{row.topScore}</td>
                      <td className="px-6 py-4">{row.distinctions}</td>
                      <td className="px-6 py-4 text-gray-500 font-medium text-xs max-w-[280px] leading-relaxed">{row.remarks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — STUDENT SUCCESS STORIES */}
      <section className="py-stack_xl bg-white">
        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter">
          
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <p className="text-brand-teal font-extrabold uppercase tracking-widest text-xs mb-3">Inspiring Journeys</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-2 tracking-tight">Success Stories</h2>
            <div className="h-1 w-12 bg-brand-purple rounded-full mx-auto mb-4"></div>
          </div>

          <div className="space-y-16">
            
            {/* Story 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-12" data-aos="fade-up">
              <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-xl h-[300px]">
                <img className="w-full h-full object-cover" alt="Student Topper" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600" />
              </div>
              <div className="w-full lg:w-1/2">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="h-px w-6 bg-brand-purple"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">ICSE 2024 Rank 1</span>
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-3">Aditi Sharma's Analytical Science Triumph</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Aditi joined our secondary physics and chemistry boards program with conceptual doubts. Through weekly customized diagnostic sheets and Mr. Ravindra Singh's ex-moderator assessment notes, she mastered standard board answer representations and scored 98.5% total distinctions.
                </p>
                <div className="flex gap-8 border-t border-brand-navy/5 pt-4">
                  <div>
                    <span className="text-3xl font-extrabold text-[#D97706] font-poppins">98.5%</span>
                    <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mt-0.5">Aggregate Score</p>
                  </div>
                  <div>
                    <span className="text-3xl font-extrabold text-brand-purple font-poppins">100/100</span>
                    <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mt-0.5">Physics Centum</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12" data-aos="fade-up">
              <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-xl h-[300px]">
                <img className="w-full h-full object-cover" alt="Student Topper" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600" />
              </div>
              <div className="w-full lg:w-1/2">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="h-px w-6 bg-brand-teal"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">SSC 2024 Rank 2</span>
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-3">Rohan Mehta's Mathematical Speed Centum</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Rohan struggled with arithmetic speed and geometry proof alignments. UnderMr. Malhotra's personalized algebra modules and step-by-step mock runs, Rohan completed his SSC board mathematics paper 20 minutes before time, scoring a perfect 100 centum.
                </p>
                <div className="flex gap-8 border-t border-brand-navy/5 pt-4">
                  <div>
                    <span className="text-3xl font-extrabold text-[#D97706] font-poppins">97.2%</span>
                    <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mt-0.5">Aggregate Score</p>
                  </div>
                  <div>
                    <span className="text-3xl font-extrabold text-brand-teal font-poppins">100/100</span>
                    <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mt-0.5">Maths Centum</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 9 — INTERACTIVE PHOTO GALLERY */}
      <section className="py-stack_xl bg-[#F5F0F7]">
        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter">
          
          <div className="text-center max-w-2xl mx-auto mb-12" data-aos="fade-up">
            <p className="text-brand-teal font-extrabold uppercase tracking-widest text-xs mb-3 text-[13px]">Vibrant Gallery</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-2 tracking-tight">
              Visual <span className="text-brand-purple">Moments.</span>
            </h2>
            <div className="h-1 w-[40px] bg-brand-purple rounded-full mx-auto mb-4"></div>
          </div>

          {/* Gallery Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['all', 'marksheets', 'celebrations', 'awards'].map(cat => (
              <button 
                key={cat}
                onClick={() => setGalleryFilter(cat)}
                className={`px-6 py-2 rounded-full border transition-all text-xs font-bold uppercase ${
                  galleryFilter === cat 
                    ? 'bg-brand-purple text-white border-brand-purple shadow-sm font-extrabold' 
                    : 'bg-white text-brand-purple border-brand-purple hover:bg-brand-purple/5'
                }`}
              >
                {cat === 'all' ? 'ALL PHOTOS' : cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div 
                key={item.id} 
                className="gallery-item relative rounded-xl overflow-hidden shadow-md group h-[220px]"
                data-aos="fade-up"
              >
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={item.title} src={item.img} />
                <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <div className="text-center">
                    <span className="px-3 py-0.5 bg-brand-yellow text-[#1F2937] text-[9px] font-bold rounded-full uppercase tracking-wider">{item.category}</span>
                    <h4 className="text-white font-bold text-sm mt-2">{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 10 — TESTIMONIALS */}
      <section className="py-stack_xl bg-white">
        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter">
          
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <p className="text-brand-teal font-extrabold uppercase tracking-widest text-xs mb-3 text-[13px]">Topper Reviews</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-2 tracking-tight">
              Testimonials from <span className="text-brand-purple">Achievers.</span>
            </h2>
            <div className="h-1 w-[40px] bg-brand-purple rounded-full mx-auto mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test) => (
              <div 
                key={test.id} 
                className="bg-[#F5F0F7] rounded-xl p-8 border border-brand-purple/10 flex flex-col justify-between hover:translate-y-[-4px] hover:shadow-lg transition-all"
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
                    <img alt={test.name} className="w-10 h-10 rounded-full object-cover border border-white shadow-inner" src={test.photo} />
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

      {/* SECTION 11 & 12 — CTA STRIPS */}
      <section className="bg-brand-purple text-white relative z-30">
        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="py-8 md:py-10 flex items-center gap-6 group hover:bg-white/5 transition-all px-6">
              <div className="w-14 h-14 rounded-full bg-brand-teal/15 flex items-center justify-center flex-shrink-0 text-brand-teal">
                <span className="material-symbols-outlined text-2xl">call</span>
              </div>
              <div>
                <p className="text-sm font-bold text-white/50 uppercase tracking-widest mb-1 text-[11px]">Call Our Desk</p>
                <p className="text-xl font-bold text-white font-poppins">91379 64830</p>
              </div>
            </div>
            <div className="py-8 md:py-10 flex items-center gap-6 group hover:bg-white/5 transition-all px-6">
              <div className="w-14 h-14 rounded-full bg-brand-whatsapp/15 flex items-center justify-center flex-shrink-0 text-brand-whatsapp">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: '"FILL" 1' }}>chat</span>
              </div>
              <div>
                <p className="text-sm font-bold text-white/50 uppercase tracking-widest mb-1 text-[11px]">Quick Support</p>
                <a className="text-xl font-bold text-brand-yellow hover:underline" href="https://wa.me/919137964830" target="_blank" rel="noreferrer">WhatsApp Us</a>
              </div>
            </div>
            <div className="py-8 md:py-10 flex items-center gap-6 group hover:bg-white/5 transition-all px-6">
              <div className="w-14 h-14 rounded-full bg-brand-yellow/15 flex items-center justify-center flex-shrink-0 text-brand-yellow">
                <span className="material-symbols-outlined text-2xl">location_on</span>
              </div>
              <div>
                <p className="text-sm font-bold text-white/50 uppercase tracking-widest mb-1 text-[11px]">Visit Campus</p>
                <p className="text-base font-bold text-white leading-tight">Dahisar (East), Mumbai</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-stack_xl bg-white">
        <div className="max-w-3xl mx-auto px-margin_mobile text-center animate-pulse-once" data-aos="zoom-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-brand-teal"></span>
            <span className="font-dancing text-brand-teal text-xl">Believe in Excellence...</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-2 tracking-tight">
            Create Your <span className="text-brand-purple">Success Story.</span>
          </h2>
          <div className="h-1 w-[40px] bg-brand-purple rounded-full mx-auto mb-6"></div>
          <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Our admissions are strictly merit and micro-batch capacity based. Book a diagnostic scoring session with Mr. Ravindra Singh to evaluate your conceptual foundations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-10 py-4 bg-brand-yellow hover:bg-[#E0B000] text-[#1F2937] font-bold rounded-lg shadow-md transition-all text-sm uppercase tracking-wider">
              Book Scoring Session
            </Link>
            <Link to="/contact" className="px-10 py-4 border-2 border-brand-purple hover:bg-brand-purple hover:text-white text-brand-purple font-bold rounded-lg transition-all text-sm uppercase tracking-wider">
              Enquire Batches
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Results;
