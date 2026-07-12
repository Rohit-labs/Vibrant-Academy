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

const hscToppers = [
  { name: "Shivshankar Chaurasiya", score: "98.00%", school: "A.P. College", milestone: "1st Rank in College, MHT-CET 98.5%" },
  { name: "Rashmi Upadhyay", score: "95.00%", school: "Royal College", milestone: "" },
  { name: "Harshit Jha", score: "94.00%", school: "Royal College", milestone: "JEE Advanced Cleared" },
  { name: "Rizvi Sakina M", score: "94.00%", school: "Royal College - Science", milestone: "1st Rank in College, MHT-CET 96.00%" },
  { name: "Priyanshu Yadav", score: "93.33%", school: "L.R. Tiwari College", milestone: "1st Rank in College" },
  { name: "Vijay Dubey", score: "92.00%", school: "A.P. College", milestone: "MHT-CET 96% / 99.00 Percentile" },
  { name: "Virendra Vishwakarma", score: "92.00%", school: "Royal College", milestone: "MBBS Selection at J.J. Hospital" },
  { name: "Anshika Sharma", score: "92.00%", school: "Royal College - Commerce", milestone: "" },
  { name: "Khushi Sharma", score: "90.00%", school: "Royal College", milestone: "3rd Rank in College" },
  { name: "Shefali Gajre", score: "90.00%", school: "RMC", milestone: "1st Rank in RMC - Science" },
  { name: "Ronak Sharma", score: "90.00%", school: "Royal College - Science", milestone: "" },
  { name: "Kruti Rathod", score: "89.00%", school: "T.P. Bhatiya College", milestone: "1st Rank in R.K." },
  { name: "Rahul Rathod", score: "89.00%", school: "T.P. Bhatiya College", milestone: "MHT-CET 96%" },
  { name: "Dimple Purohit", score: "89.00%", school: "R.M.C. Jr. College", milestone: "1st Rank in College" },
  { name: "Zenab Behlim", score: "89.00%", school: "L.R. Tiwari College", milestone: "NEET Qualified / MBBS Selection" },
  { name: "Bhoomi Singh", score: "89.00%", school: "Thakur College", milestone: "NEET Qualified / MBBS Selection" },
  { name: "Shem Naoh", score: "89.00%", school: "Reena Mehta College", milestone: "MHT-CET 89%" },
  { name: "Jyoti Jangid", score: "89.00%", school: "Jr. College of Bhayander", milestone: "1st Rank in College" },
  { name: "Pratiksha Parulekar", score: "89.50%", school: "Abhinav Jr. College", milestone: "1st Rank in College" },
  { name: "Pooja Chaurasiya", score: "87.00%", school: "Royal College - Science", milestone: "" },
  { name: "Keval Sharma", score: "86.00%", school: "Reena Mehta College", milestone: "1st Rank in College" },
  { name: "Kalash Singh", score: "85.00%", school: "Reena Mehta College", milestone: "" },
  { name: "Maizah Shaikh", score: "85.00%", school: "Royal College - Science", milestone: "" },
  { name: "Mamta Patel", score: "83.00%", school: "A.P. Jr. College", milestone: "1st Rank in College" },
  { name: "Dhwani Singhal", score: "83.00%", school: "Reena Mehta College - Science", milestone: "1st Rank in College" },
  { name: "Riya Mishra", score: "76.00%", school: "Reena Mehta College", milestone: "JEE Main / NIT Haryana" }
];

const sscToppers = [
  { name: "Akshara Gupta", score: "96.00%", school: "SVPV", milestone: "" },
  { name: "Jyoti Jangid", score: "96.00%", school: "Golden Nest School", milestone: "School Topper" },
  { name: "Anjali Chaurasiya", score: "96.00%", school: "Relevant High School", milestone: "1st Rank in Reena Mehta / JEE Advanced Qualified" },
  { name: "Gudiya Chaurasiya", score: "95.00%", school: "S.S. Classes", milestone: "" },
  { name: "Shreya Bhabal", score: "95.00%", school: "S.V.P.V. School", milestone: "" },
  { name: "Darsh Kalathiya", score: "94.00%", school: "S.S. Classes ", milestone: "" },
  { name: "Shefali Gajare", score: "94.00%", school: "Queen Mary's School", milestone: "" },
  { name: "Nehal Mahto", score: "93.40%", school: "Queen Mary School", milestone: "" },
  { name: "Prince Jha", score: "93.00%", school: "S.V.P. School", milestone: "" },
  { name: "Krishna Thakur", score: "93.00%", school: "S.S. Classes ", milestone: "" },
  { name: "Swayam Singh", score: "93.00%", school: "Golden Nest School", milestone: "" },
  { name: "Shreya Patidar", score: "93.00%", school: "S.V.P.V. School", milestone: "" },
  { name: "Ronak Prajapati", score: "92.00%", school: "S.V.P. School", milestone: "" },
  { name: "Harsha Gupta", score: "92.00%", school: "S.S. Classes ", milestone: "" },
  { name: "Abhijeet Pandey", score: "92.00%", school: "Bright International High School", milestone: "1st Rank in School" },
  { name: "Pooja Chaurasiya", score: "91.00%", school: "Holy Trinity School", milestone: "" },
  { name: "Ashwin Poddar", score: "91.00%", school: "S.V.P.V. School", milestone: "" },
  { name: "Nitish Pasi", score: "91.00%", school: "Bright International High School", milestone: "" },
  { name: "Anushka Patil", score: "91.00%", school: "S.V.P.V. School", milestone: "" },
  { name: "Shreyash Jha", score: "91.00%", school: "St. Xavier's School", milestone: "" },
  { name: "Rokaiya Khan", score: "91.00%", school: "S.S. Classes ", milestone: "" },
  { name: "Priya Yadav", score: "90.00%", school: "Queen Mary's School", milestone: "2nd Rank in School" },
  { name: "Ankita Chaurasiya", score: "90.00%", school: "S.S. Classes ", milestone: "" },
  { name: "Sweta Gurnale", score: "90.00%", school: "S.V.P. School", milestone: "" },
  { name: "Nidhi Malthane", score: "90.00%", school: "St. Paul's School", milestone: "" },
  { name: "Affan Khan", score: "90.00%", school: "Golden Nest School", milestone: "" },
  { name: "Sidhhi Pevekar", score: "90.00%", school: "S.V.P.V. School", milestone: "" },
  { name: "Muzzamil Maraikar", score: "90.00%", school: "S.V.P.V. School", milestone: "" },
  { name: "Harshi Kadam", score: "90.00%", school: "Cosmopolitan School", milestone: "" },
  { name: "Krishna Parmar", score: "90.00%", school: "St. Xavier", milestone: "" },
  { name: "Sandesh Kanji", score: "90.00%", school: "St. Xavier", milestone: "" },
  { name: "Shreyash Pandey", score: "89.00%", school: "Golden Nest", milestone: "" }
];

const studentTestimonials = [
  {
    name: "Shivshankar Chaurasiya",
    quote: "Vibrant Academy's guidance was key to my MHT-CET score. The focus on basic concepts helped me top my college!",
    detail: "Class 12 Topper (98.00%) | A.P. College",
    initial: "SC",
    stars: 5
  },
  {
    name: "Akshara Gupta",
    quote: "The study material and test series prepared me perfectly for my board exams. I scored 96.00% and felt fully confident!",
    detail: "Class 10 Topper (96.00%) | SVPV",
    initial: "AG",
    stars: 5
  },
  {
    name: "Anjali Chaurasiya",
    quote: "The teachers were always ready to solve my doubts, even after class hours. This solid foundation helped me clear JEE Advanced.",
    detail: "Class 10 Topper (96.00%) | SVPV",
    initial: "AC",
    stars: 5
  },
  {
    name: "Rashmi Upadhyay",
    quote: "The small batch sizes made it easy to interact with the faculty and clear concepts immediately. Highly recommended academy!",
    detail: "Class 12 Topper (95.00%) | Royal College",
    initial: "RU",
    stars: 5
  },
  {
    name: "Harshit Jha",
    quote: "Personalized mentorship and constant motivation kept me focused on my goals. They provide the best coaching for competitive exams.",
    detail: "Class 12 Achiever (94.00%) | Royal College",
    initial: "HJ",
    stars: 5
  },
  {
    name: "Rizvi Sakina M",
    quote: "Vibrant helped me balance my college schedule and board preparation. I scored 94.00% and topped my stream easily.",
    detail: "Class 12 Topper (94.00%) | Royal College - Science",
    initial: "RS",
    stars: 5
  },
  {
    name: "Priyanshu Yadav",
    quote: "Regular mock tests and practice papers helped me analyze my mistakes and improve my speed for the final boards.",
    detail: "Class 12 Topper (93.33%) | L.R. Tiwari College",
    initial: "PY",
    stars: 5
  },
  {
    name: "Vijay Dubey",
    quote: "The physics and chemistry concepts were taught so well. Their tips and tricks helped me score 99 percentile in MHT-CET.",
    detail: "Class 12 Achiever (92.00%) | A.P. College",
    initial: "VD",
    stars: 5
  },
  {
    name: "Jyoti Jangid",
    quote: "I joined in Class 9, and the consistent mock tests and personalized attention helped me become the school topper with 96.00%!",
    detail: "Class 10 Topper (96.00%) | Golden Nest School",
    initial: "JJ",
    stars: 5
  },
  {
    name: "Shreya Bhabal",
    quote: "The teachers make even the most difficult math and science topics very simple and interesting. I am very grateful to them.",
    detail: "Class 10 Topper (95.00%) | S.V.P.V. School",
    initial: "SB",
    stars: 5
  },
  {
    name: "Swayam Singh",
    quote: "The mock test papers were highly aligned with the actual SSC board questions. It felt like solving a regular class test.",
    detail: "Class 10 Topper (93.00%) | Golden Nest School",
    initial: "SS",
    stars: 5
  },
  {
    name: "Zenab Behlim",
    quote: "Vibrant's specialized coaching for competitive biology and chemistry helped me qualify NEET and secure my MBBS seat!",
    detail: "Class 12 Achiever (89.00%) | L.R. Tiwari College",
    initial: "ZB",
    stars: 5
  }
];

function Results() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="results-page">

      {/* SECTION 1 — PAGE HERO (Full Image Banner Carousel) */}
      <section className="mt-[60px] relative w-full overflow-hidden h-auto md:h-[calc(100vh-60px)] results-hero-carousel">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          className="w-full h-full"
        >
          <SwiperSlide className="w-full h-auto md:h-full">
            {/* Desktop Banner */}
            <img
              src="/images/hero banner 2.png"
              alt="Vibrant Academy SSC Toppers Banner"
              className="hidden md:block w-full h-full object-cover"
              style={{ objectPosition: 'center 14%' }}
            />
            {/* Mobile Banner */}
            <img
              src="/images/hero banner 2 mobile.png"
              alt="Vibrant Academy SSC Toppers Banner Mobile"
              className="block md:hidden w-full h-auto object-contain"
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-auto md:h-full">
            {/* Desktop Banner */}
            <img
              src="/images/hero banner 3.png"
              alt="Vibrant Academy Achievers Banner"
              className="hidden md:block w-full h-full object-cover"
              style={{ objectPosition: 'center 11%' }}
            />
            {/* Mobile Banner */}
            <img
              src="/images/hero banner 3 mobile.png"
              alt="Vibrant Academy Achievers Banner Mobile"
              className="block md:hidden w-full h-auto object-contain"
            />
          </SwiperSlide>
        </Swiper>
        <Link 
          to="/contact" 
          className="absolute bottom-4 left-4 md:bottom-12 md:left-12 z-50 px-5 py-2.5 md:px-8 md:py-3.5 bg-brand-yellow text-brand-purple font-extrabold rounded-lg shadow-lg border-2 border-brand-purple/20 results-apply-now-btn uppercase tracking-wider text-[10px] md:text-sm pointer-events-auto"
        >
          Apply Now
        </Link>
      </section>

      {/* SECTION 2 — ESTABLISHED METRICS */}
      <section className="bg-white border-y border-brand-navy/5 relative z-30 mt-12">
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
                  <div className="bg-white rounded-xl p-6 border border-brand-purple/10 border-t-4 border-t-brand-yellow shadow-sm hover:shadow-lg hover:translate-y-[-6px] transition-all duration-300 flex flex-col items-center text-center justify-center">
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

      {/* SECTION 5 — HSC & SSC TOPPERS LIST (Side by Side Scroll lists) */}
      <section className="py-stack_xl bg-[#F5F0F7]">
        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter">

          <div className="text-center max-w-2xl mx-auto mb-12" data-aos="fade-up">
            <p className="text-brand-teal font-extrabold uppercase tracking-widest text-xs mb-3 text-[13px]">Vibrant Stars</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-2 tracking-tight">
              Toppers & <span className="text-brand-purple">Achievers.</span>
            </h2>
            <div className="h-1 w-[40px] bg-brand-purple rounded-full mx-auto mb-4"></div>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Browse through the complete list of academic achievers from our board panels. Scroll inside each list to view more.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

            {/* HSC Toppers Scroll Column */}
            <div className="bg-[#F9F7FA] rounded-2xl p-6 border border-brand-purple/10 flex flex-col h-[650px] shadow-sm animate-fade-right" data-aos="fade-right">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-brand-purple/10">
                <div>
                  <h3 className="text-xl font-bold text-brand-navy">H.S.C. (Class XII) Toppers</h3>
                  <p className="text-xs text-brand-purple font-semibold uppercase tracking-wider mt-0.5">Science & Commerce Achievers</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                  <span className="material-symbols-outlined font-bold">school</span>
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto pr-2 space-y-3 topper-scroll-container">
                {hscToppers.map((student, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white hover:bg-gray-50 border border-brand-navy/5 hover:border-brand-purple/20 p-4 rounded-xl flex items-center justify-between transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]"
                  >
                    <div className="flex items-center gap-3 w-[78%]">
                      <div className="w-9 h-9 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center font-bold text-xs flex-shrink-0">
                        {idx + 1}
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-brand-navy text-sm md:text-base truncate">{student.name}</h4>
                        <p className="text-gray-400 text-xs truncate">{student.school}</p>
                        {student.milestone && (
                          <div className="mt-1">
                            <span className="inline-block text-[9px] font-bold px-2 py-0.5 rounded-full bg-brand-yellow/20 text-[#8F6B00]">
                              {student.milestone}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-lg md:text-xl font-extrabold font-poppins text-brand-purple">
                        {student.score}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center text-gray-400 text-[11px] font-semibold pt-3 border-t border-brand-purple/5 mt-3 flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-sm animate-bounce">arrow_downward</span>
                Scroll inside list to view more ({hscToppers.length} students)
              </div>
            </div>

            {/* SSC Toppers Scroll Column */}
            <div className="bg-[#F5F9F9] rounded-2xl p-6 border border-brand-teal/10 flex flex-col h-[650px] shadow-sm animate-fade-left" data-aos="fade-left">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-brand-teal/10">
                <div>
                  <h3 className="text-xl font-bold text-brand-navy">S.S.C. (Class X) Toppers</h3>
                  <p className="text-xs text-brand-teal font-semibold uppercase tracking-wider mt-0.5">High School Achievers</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                  <span className="material-symbols-outlined font-bold">workspace_premium</span>
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto pr-2 space-y-3 topper-scroll-container teal-scroll">
                {sscToppers.map((student, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white hover:bg-gray-50 border border-brand-navy/5 hover:border-brand-teal/20 p-4 rounded-xl flex items-center justify-between transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]"
                  >
                    <div className="flex items-center gap-3 w-[78%]">
                      <div className="w-9 h-9 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center font-bold text-xs flex-shrink-0">
                        {idx + 1}
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-brand-navy text-sm md:text-base truncate">{student.name}</h4>
                        <p className="text-gray-400 text-xs truncate">{student.school}</p>
                        {student.milestone && (
                          <div className="mt-1">
                            <span className="inline-block text-[9px] font-bold px-2 py-0.5 rounded-full bg-brand-teal/10 text-brand-teal">
                              {student.milestone}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-lg md:text-xl font-extrabold font-poppins text-brand-teal">
                        {student.score}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center text-gray-400 text-[11px] font-semibold pt-3 border-t border-brand-teal/5 mt-3 flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-sm animate-bounce">arrow_downward</span>
                Scroll inside list to view more ({sscToppers.length} students)
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* SECTION 6 — TESTIMONIALS CAROUSEL (Group of 3 Student Cards) */}
      <section className="py-stack_xl bg-[#F5F0F7] border-t border-brand-navy/5">
        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter">

          <div className="text-center max-w-2xl mx-auto mb-12" data-aos="fade-up">
            <p className="text-brand-teal font-extrabold uppercase tracking-widest text-xs mb-3 text-[13px]">Topper Reviews</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-2 tracking-tight">
              Testimonials from <span className="text-brand-purple">Achievers.</span>
            </h2>
            <div className="h-1 w-[40px] bg-brand-purple rounded-full mx-auto mb-4"></div>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Read how our toppers achieved high percentages and cracked competitive exams with the help of Vibrant Academy.
            </p>
          </div>

          <div className="px-4 md:px-8 relative" data-aos="zoom-in">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true, el: '.reviews-pagination' }}
              navigation={{
                nextEl: '.reviews-next',
                prevEl: '.reviews-prev',
              }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              className="w-full pb-16"
            >
              {studentTestimonials.map((test, idx) => (
                <SwiperSlide key={idx} className="py-4 h-auto">
                  <div className="bg-white rounded-xl p-8 border border-brand-purple/10 flex flex-col justify-between hover:translate-y-[-4px] hover:shadow-lg transition-all shadow-sm h-[320px]">
                    <div>
                      <span className="text-5xl text-brand-purple/20 font-serif leading-none font-bold block mb-2">“</span>
                      <p className="text-gray-600 text-sm italic mb-4 leading-relaxed line-clamp-4">{test.quote}</p>
                    </div>
                    <div>
                      <div className="flex text-brand-yellow mb-3">
                        {[...Array(test.stars)].map((_, i) => (
                          <span key={i} className="material-symbols-outlined text-base" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                        ))}
                      </div>
                      <div className="h-px bg-brand-navy/5 w-full my-3"></div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center font-bold text-sm border border-white shadow-inner flex-shrink-0">
                          {test.initial}
                        </div>
                        <div className="min-w-0">
                          <h5 className="font-bold text-brand-purple text-sm truncate">{test.name}</h5>
                          <p className="text-gray-400 text-[10px] truncate">{test.detail}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination & Navigation Controls */}
            <div className="flex items-center justify-center gap-6 mt-4">
              <button className="reviews-prev w-10 h-10 rounded-full border border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white flex items-center justify-center transition-all disabled:opacity-30 disabled:pointer-events-none shadow-sm active:scale-95">
                <span className="material-symbols-outlined text-xl">arrow_back</span>
              </button>
              <div className="reviews-pagination flex gap-2 !w-auto"></div>
              <button className="reviews-next w-10 h-10 rounded-full border border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white flex items-center justify-center transition-all disabled:opacity-30 disabled:pointer-events-none shadow-sm active:scale-95">
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
            </div>
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
            Every student receives focused guidance and individualized support. Book a consultation session to explore how we can help unlock your full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
