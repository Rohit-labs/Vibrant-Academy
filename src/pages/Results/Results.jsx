import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Results.css';

// Import data
import toppers from '../../data/toppers';
import testimonials from '../../data/testimonials';

function Results() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="results-page">

      {/* SECTION 1 — PAGE HERO (Split Layout) */}
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
              <a href="#toppers" className="px-8 py-3.5 border-2 border-brand-purple hover:bg-brand-purple hover:text-white text-brand-purple font-bold rounded-lg transition-all text-sm uppercase tracking-wider text-center">
                View Toppers
              </a>
              <Link to="/contact" className="px-8 py-3.5 bg-brand-yellow hover:bg-[#E0B000] text-[#1F2937] font-bold rounded-lg shadow-md hover:translate-y-[-2px] active:scale-95 transition-all text-sm uppercase tracking-wider text-center">
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — ACHIEVEMENT STATS (4 Counters) */}
      <section className="bg-white border-y border-brand-navy/5 relative z-30 py-12">
        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-brand-navy/5 hover:translate-y-[-4px] hover:shadow-md transition-all duration-300" data-aos="fade-up">
              <div className="w-16 h-16 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-gold mb-4 text-2xl">
                <span className="material-symbols-outlined text-3xl">groups</span>
              </div>
              <p className="text-3xl md:text-4xl font-extrabold text-brand-navy font-poppins mb-1">500+</p>
              <p className="text-xs font-bold text-brand-navy/50 uppercase tracking-widest">Total Students</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-brand-navy/5 hover:translate-y-[-4px] hover:shadow-md transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple mb-4 text-2xl">
                <span className="material-symbols-outlined text-3xl">star</span>
              </div>
              <p className="text-3xl md:text-4xl font-extrabold text-brand-navy font-poppins mb-1">95%</p>
              <p className="text-xs font-bold text-brand-navy/50 uppercase tracking-widest">Pass Rate</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-brand-navy/5 hover:translate-y-[-4px] hover:shadow-md transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-4 text-2xl">
                <span className="material-symbols-outlined text-3xl">school</span>
              </div>
              <p className="text-3xl md:text-4xl font-extrabold text-brand-navy font-poppins mb-1">10+</p>
              <p className="text-xs font-bold text-brand-navy/50 uppercase tracking-widest">Years Experience</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-brand-navy/5 hover:translate-y-[-4px] hover:shadow-md transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-gold mb-4 text-2xl">
                <span className="material-symbols-outlined text-3xl">workspace_premium</span>
              </div>
              <p className="text-3xl md:text-4xl font-extrabold text-brand-navy font-poppins mb-1">50+</p>
              <p className="text-xs font-bold text-brand-navy/50 uppercase tracking-widest">Top Scorers</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — TOP TOPPERS CAROUSEL */}
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

          {/* Carousel */}
          <div className="px-4 md:px-8 relative" data-aos="zoom-in">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              pagination={{ clickable: true, el: '.toppers-pagination' }}
              navigation={{
                nextEl: '.toppers-next',
                prevEl: '.toppers-prev',
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 }
              }}
              className="w-full pb-16"
            >
              {toppers.map((topper) => (
                <SwiperSlide key={topper.id} className="py-4">
                  <div className="bg-white rounded-xl p-6 border border-brand-purple/10 border-t-4 border-t-brand-yellow shadow-sm hover:shadow-lg hover:translate-y-[-6px] transition-all duration-300 flex flex-col items-center text-center h-[370px] justify-between">
                    <div className="flex flex-col items-center w-full">
                      <div className="relative w-28 h-28 mb-4">
                        <img alt={topper.name} className="w-full h-full object-cover rounded-full border-2 border-brand-yellow p-1 shadow-inner" src={topper.photo} />
                      </div>
                      <h4 className="font-bold text-brand-navy text-base mb-1 truncate w-full">{topper.name}</h4>
                      <p className="text-3xl font-extrabold text-brand-gold mb-3 font-poppins">{topper.score}</p>
                      <div className="flex gap-1.5 justify-center mb-2">
                        <span className="px-2.5 py-0.5 bg-brand-purple/10 text-brand-purple text-[9px] font-bold rounded-full uppercase">{topper.board}</span>
                        <span className="px-2.5 py-0.5 bg-brand-teal/10 text-brand-teal text-[9px] font-bold rounded-full uppercase">{topper.class}</span>
                      </div>
                      {topper.school && (
                        <p className="text-xs text-gray-400 font-medium mt-1">{topper.school}</p>
                      )}
                    </div>
                    <p className="text-gray-400 text-[11px] italic leading-none">{topper.subject}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination & Navigation Controls */}
            <div className="flex items-center justify-center gap-6 mt-4">
              <button className="toppers-prev w-10 h-10 rounded-full border border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white flex items-center justify-center transition-all disabled:opacity-30 disabled:pointer-events-none shadow-sm active:scale-95">
                <span className="material-symbols-outlined text-xl">arrow_back</span>
              </button>
              <div className="toppers-pagination flex gap-2 !w-auto"></div>
              <button className="toppers-next w-10 h-10 rounded-full border border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white flex items-center justify-center transition-all disabled:opacity-30 disabled:pointer-events-none shadow-sm active:scale-95">
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4 — BOARD RESULTS (ICSE / SSC Side by Side) */}
      <section className="py-stack_xl bg-[#F5F0F7] overflow-hidden">
        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter">

          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <p className="text-brand-teal font-extrabold uppercase tracking-widest text-xs mb-3">Board Results</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-2 tracking-tight">
              ICSE & <span className="text-brand-purple">SSC Results.</span>
            </h2>
            <div className="h-1 w-[40px] bg-brand-purple rounded-full mx-auto mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

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

            {/* Card 2: SSC Results */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col justify-between border border-brand-navy/5" data-aos="fade-left">
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

      {/* SECTION 5 — SUBJECT PERFORMANCE (3 Cards) */}
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

            {/* Mathematics Card */}
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

            {/* English & Language Card */}
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

      {/* SECTION 6 — TESTIMONIALS (3 Student Cards) */}
      <section className="py-stack_xl bg-[#F5F0F7] border-t border-brand-navy/5">
        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter">

          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <p className="text-brand-teal font-extrabold uppercase tracking-widest text-xs mb-3 text-[13px]">Topper Reviews</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-2 tracking-tight">
              Testimonials from <span className="text-brand-purple">Achievers.</span>
            </h2>
            <div className="h-1 w-[40px] bg-brand-purple rounded-full mx-auto mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((test) => (
              <div
                key={test.id}
                className="bg-white rounded-xl p-8 border border-brand-purple/10 flex flex-col justify-between hover:translate-y-[-4px] hover:shadow-lg transition-all shadow-sm"
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

      {/* SECTION 7 — ENROLL CTA STRIP (Full Width) */}
      <section className="py-stack_xl bg-brand-purple text-white relative z-30 overflow-hidden">
        <div className="max-w-3xl mx-auto px-margin_mobile text-center" data-aos="zoom-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-brand-yellow"></span>
            <span className="font-dancing text-brand-yellow text-xl">Believe in Excellence...</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight">
            Create Your <span className="text-brand-yellow">Success Story.</span>
          </h2>
          <div className="h-1 w-[40px] bg-brand-yellow rounded-full mx-auto mb-6"></div>
          <p className="text-white/80 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Our admissions are strictly merit and micro-batch capacity based. Book a diagnostic scoring session with Mr. Ravindra Singh to evaluate your conceptual foundations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-10 py-4 bg-brand-yellow hover:bg-[#E0B000] text-[#1F2937] font-bold rounded-lg shadow-md transition-all text-sm uppercase tracking-wider">
              Book Scoring Session
            </Link>
            <Link to="/contact" className="px-10 py-4 border-2 border-white hover:bg-white hover:text-brand-purple text-white font-bold rounded-lg transition-all text-sm uppercase tracking-wider">
              Enquire Batches
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Results;
