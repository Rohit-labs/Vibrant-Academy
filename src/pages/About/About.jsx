import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaSearchPlus, FaTimes } from 'react-icons/fa';
import AOS from 'aos';
import './About.css';
import mentors from '../../data/mentors';

const desktopCoordinates = {
  1: { left: 286, top: 269 },
  2: { left: 29, top: 577 },
  3: { left: 354, top: 535 },
  4: { left: 750, top: 365 },
  5: { left: 46, top: 198 },
  6: { left: 255, top: 634 },
  7: { left: 101, top: 70 },
  8: { left: 453, top: 634 },
  9: { left: 470, top: 396 },
  10: { left: 439, top: 167 },
  11: { left: 654, top: 523 },
  12: { left: 17, top: 42 },
  13: { left: 130, top: 424 },
  14: { left: 241, top: 139 },
  15: { left: 750, top: 111 },
  16: { left: 45, top: 126 },
  17: { left: 583, top: 198 },
  18: { left: 538, top: 68 },
  19: { left: 354, top: 54 },
  20: { left: 186, top: 42 }
};

const mobileCoordinates = {
  1: { left: 115, top: 1330 },
  2: { left: 282, top: 563 },
  3: { left: 282, top: 875 },
  4: { left: 42, top: 1228 },
  5: { left: 101, top: 1033 },
  6: { left: 282, top: 1186 },
  7: { left: 15, top: 56 },
  8: { left: 282, top: 54 },
  9: { left: 87, top: 736 },
  10: { left: 28, top: 931 },
  11: { left: 58, top: 453 },
  12: { left: 15, top: 254 },
  13: { left: 186, top: 269 },
  14: { left: 28, top: 1497 },
  15: { left: 282, top: 1497 },
  16: { left: 72, top: 311 },
  17: { left: 58, top: 85 },
  18: { left: 127, top: 1596 },
  19: { left: 254, top: 1667 },
  20: { left: 15, top: 367 }
};

const galleryPhotos = [
  {
    id: 1,
    size: 'large',
    src: '../images/Vibrant moments photos/Traditional Dancer at Grand Annual Function.png',
    caption: 'A little rhythm, a lot of joy'
  },
  {
    id: 2,
    size: 'medium',
    src: '../images/Vibrant moments photos/turf image(2).jpeg',
    caption: 'Together we played, competed, and created memories to celebrate'
  },
  {
    id: 3,
    size: 'medium',
    src: '../images/Vibrant moments photos/trip image.jpeg',
    caption: 'Good vibes, great company, and memories made along the way.'
  },
  {
    id: 4,
    size: 'medium',
    src: '../images/Vibrant moments photos/Good People, Great Vibes, Unforgettable Memories.png',
    caption: 'One frame, countless memories, and a whole lot of energy!'
  },
  {
    id: 5,
    size: 'large',
    src: '../images/Vibrant moments photos/Award Photo.jpeg',
    caption: 'Celebrating Great Achievements'
  },
  {
    id: 6,
    size: 'medium',
    src: '../images/Vibrant moments photos/celebration.jpeg',
    caption: 'Capturing Lifelong Memories'
  },
  {
    id: 7,
    size: 'small',
    src: '../images/Vibrant moments photos/farewell(4).png',
    caption: 'Elegance, confidence, and a moment to remember'
  },
  {
    id: 8,
    size: 'medium',
    src: '../images/Vibrant moments photos/farewell(2).jpeg',
    caption: 'A moment of mentorship, connection, and memories beyond the classroom.'
  },
  {
    id: 9,
    size: 'large',
    src: '../images/Vibrant moments photos/farewell(3).png',
    caption: 'A memorable moment, celebrating achievements and new beginnings.'
  },
  {
    id: 10,
    size: 'medium',
    src: '../images/Vibrant moments photos/S.S. Classes Farewell Party Performance.png',
    caption: 'Stealing the spotlight, one dance move at a time!'
  },
  {
    id: 11,
    size: 'large',
    src: '../images/Vibrant moments photos/farewell.jpeg',
    caption: 'Celebrating friendship, guidance, and the unforgettable moments we create together.'
  },
  {
    id: 12,
    size: 'small',
    src: '../images/Vibrant moments photos/Festive Farewell Gown Stage Portrait.png',
    caption: 'Grace in every step, confidence in every moment.'
  },
  {
    id: 13,
    size: 'large',
    src: '../images/Vibrant moments photos/Festive Group Celebration Portrait.png',
    caption: 'Smiles, celebrations, and memories that will always bring us together.'
  },
  {
    id: 14,
    size: 'medium',
    src: '../images/Vibrant moments photos/Festive Farewell Party Stage.png',
    caption: 'Where memories were made and goodbyes became unforgettable.'
  },
  {
    id: 15,
    size: 'medium',
    src: '../images/Vibrant moments photos/Colorful Farewell Party Stage.png',
    caption: 'Campus Vibe'
  },
  {
    id: 16,
    size: 'small',
    src: '../images/Vibrant moments photos/Joyful Pageant Contestant Making a Heart.png',
    caption: 'A smile, a heart, and a moment to remember.'
  },
  {
    id: 17,
    size: 'large',
    src: '../images/Vibrant moments photos/S.S. Classes Welcome Group Portrait.png',
    caption: 'Welcoming new faces and creating lasting memories.'
  },
  {
    id: 18,
    size: 'medium',
    src: '../images/Vibrant moments photos/Celebration Group at S.S. Classes.png',
    caption: 'Celebrating moments that will always stay with us.'
  },
  {
    id: 19,
    size: 'medium',
    src: '../images/Vibrant moments photos/Student Gathering.png',
    caption: 'Innovative Ideas'
  },
  {
    id: 20,
    size: 'small',
    src: '../images/Vibrant moments photos/S.S. Classes Farewell Celebration.png',
    caption: 'Stepping onto the stage with confidence and creating memories to cherish forever.'
  }
];

function About() {
  const [activePhoto, setActivePhoto] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [scale, setScale] = useState(1);
  const containerRef = useRef(null);

  const openLightbox = (photo) => {
    setActivePhoto(photo);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActivePhoto(null);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const isMob = width < 768;
      setIsMobile(isMob);

      if (containerRef.current) {
        const parentWidth = containerRef.current.parentElement.getBoundingClientRect().width;
        const targetBaseWidth = isMob ? 453 : 920;
        const newScale = Math.min(1, parentWidth / (targetBaseWidth + 20));
        setScale(newScale);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="about-page">

      {/* SECTION 1 — PAGE HERO (Strict bounded height split layout) */}
      <section className="mt-[60px] flex flex-col md:flex-row md:h-[90vh] overflow-hidden hero-pattern">
        <div className="w-full md:w-[45%] h-[300px] md:h-full relative flex items-center justify-center overflow-hidden">
          <img
            alt="Vibrant Academy Dahisar Classroom"
            className="w-[95%] h-[95%] object-cover rounded-[24px]"
            src="/Classroom.png"
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

      {/* SECTION 4.5 — PROGRAMS / COURSES OFFERED */}
      <section className="py-stack_xl overflow-hidden bg-white border-t border-brand-navy/5">
        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter">

          <div className="text-center max-w-2xl mx-auto mb-10" data-aos="fade-up">
            <p className="text-brand-teal font-extrabold uppercase tracking-widest text-xs mb-3">COURSES OFFERED</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-2 tracking-tight">
              Programs<span className="text-brand-purple"> for Every Learner.</span>
            </h2>
            <div className="h-1 w-[40px] bg-brand-purple rounded-full mx-auto mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {[
              { title: "ICSE Board", sub: "Class 7 to 10", color: "bg-brand-purple", points: ["Strong foundation in Mathematics & Science", "Concept-based learning approach", "Regular tests and performance analysis", "Individual attention for every student", "Board-oriented preparation strategy"] },
              { title: "SSC Board", sub: "Class 7 to 10", color: "bg-brand-teal", points: ["Comprehensive syllabus coverage", "Focus on scoring and conceptual clarity", "Weekly assessments and revisions", "Dedicated doubt-solving sessions", "Structured board exam preparation"] },
              { title: "CBSE Board", sub: "Class 7 to 10", color: "bg-brand-purple", points: ["NCERT-focused teaching methodology", "Emphasis on analytical thinking", "Continuous practice through worksheets", "Exam-oriented preparation techniques", "Personalized academic guidance"] },
              { title: "HSC Science", sub: "Class 11 to 12", color: "bg-brand-teal", points: ["In-depth coverage of PCM/PCB subjects", "Strong focus on board examination success", "Regular practical and theory revision", "Chapter-wise testing and evaluation", "Board + Entrance Exam preparation"] },
              { title: "HSC Commerce", sub: "Class 11 to 12", color: "bg-brand-purple", points: ["Expert guidance in Accounts & Economics", "Conceptual understanding of commerce subjects", "Board-focused preparation strategy", "Regular assessments and progress tracking", "Preparation for professional courses"] },
              { title: "CA Foundation", sub: "Chartered Accountant", color: "bg-brand-teal", points: ["Comprehensive coverage of all foundation subjects", "Strong emphasis on conceptual clarity", "Exam-oriented problem-solving techniques", "Regular mock tests and evaluations", "Guidance from experienced faculty"] },
              { title: "CMA", sub: "Cost and Management Accountant", color: "bg-brand-purple", points: ["Structured preparation for CMA examinations", "Focus on accounting and business concepts", "Practice-based learning methodology", "Continuous assessment and feedback", "Strategic exam preparation support"] },
              { title: "B.Pharma", sub: "", color: "bg-brand-teal", points: ["Guidance in core pharmaceutical subjects", "Support for semester examinations", "Concept-based learning approach", "Assistance with practical understanding", "Regular academic progress monitoring"] },
              { title: "D.Pharm", sub: "", color: "bg-brand-purple", points: ["Strong foundation in pharmacy education", "Simplified explanation of technical concepts", "Practical and theory-focused learning", "Semester exam preparation support", "Personalized academic mentoring"] },
            ].map((card, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col border border-brand-navy/5" data-aos="fade-up" data-aos-delay={(idx % 3) * 50}>
                <div className={`${card.color} text-center py-5 px-4 text-white`}>
                  <h3 className="text-lg font-bold font-poppins">{card.title}</h3>
                  {card.sub && <p className="text-brand-yellow text-[10px] font-semibold uppercase tracking-wider mt-0.5">{card.sub}</p>}
                </div>
                <div className="p-6">
                  <ul className="space-y-1.5">
                    {card.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 py-1.5 border-b border-brand-navy/5 last:border-0">
                        <span className="material-symbols-outlined text-brand-teal text-base leading-5">check_circle</span>
                        <span className="text-sm text-brand-navy/75">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* SECTION 5 — FOUNDER PROFILE */}
      <section className="py-stack_xl bg-white overflow-hidden border-t border-brand-navy/5">
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

            const sortedKeys = Object.keys(groups).sort((a, b) => groups[b].length - groups[a].length);

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

      {/* SECTION 6 — VIBRANT MOMENTS (PHOTO COLLAGE) */}
      <section className="py-stack_xl bg-gray-50 border-t border-brand-navy/5 overflow-hidden">
        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter">

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <p className="text-brand-teal font-extrabold uppercase tracking-widest text-xs mb-3">GALLERY</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-2 tracking-tight">
              Vibrant <span className="text-brand-purple">Moments.</span>
            </h2>
            <div className="h-1 w-[40px] bg-brand-purple rounded-full mx-auto mb-4"></div>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Take a visual tour through academy life, student bonding camps, collaborative study, and campus events. Click any photo to expand.
            </p>
          </div>

          {/* Outer scale container */}
          <div className="collage-outer-wrapper" ref={containerRef}>
            <div
              className="collage-container"
              style={{
                transform: `translate(-50%, 0) scale(${scale})`,
                height: isMobile ? `${1840 * scale}px` : `${810 * scale}px`,
                width: isMobile ? '453px' : '920px'
              }}
            >
              {galleryPhotos.map((photo) => {
                let sizeClass = 'diamond-medium';
                if (photo.size === 'large') sizeClass = 'diamond-large';
                if (photo.size === 'small') sizeClass = 'diamond-small';

                const coords = isMobile ? mobileCoordinates[photo.id] : desktopCoordinates[photo.id];

                return (
                  <div
                    key={photo.id}
                    style={{
                      position: 'absolute',
                      left: `${coords.left}px`,
                      top: `${coords.top}px`
                    }}
                    data-aos="zoom-in"
                    data-aos-delay={(photo.id % 5) * 40}
                  >
                    <div
                      className={`diamond-wrapper ${sizeClass}`}
                      onClick={() => openLightbox(photo)}
                    >
                      <img
                        src={photo.src}
                        alt={photo.caption}
                        className="diamond-img"
                      />
                      <div className="diamond-overlay">
                        <FaSearchPlus className="zoom-icon" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 bg-black/95 z-[300] flex flex-col items-center justify-center p-4 backdrop-blur-md transition-opacity duration-300"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white text-2xl transition-transform hover:scale-110 z-[310] flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 active:scale-95"
            onClick={closeLightbox}
          >
            <FaTimes />
          </button>

          <div
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center animate-fade-in px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activePhoto.src}
              alt={activePhoto.caption}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-white/10"
            />
            <p className="text-white text-sm md:text-base font-semibold mt-6 text-center tracking-wider font-poppins bg-brand-purple/90 px-6 py-2.5 rounded-full shadow-lg border border-brand-purple/20">
              {activePhoto.caption}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}

export default About;
