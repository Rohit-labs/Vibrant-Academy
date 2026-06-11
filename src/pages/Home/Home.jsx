import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import Loader from '../../components/Loader/Loader';
import ThankYouModal from '../../components/ThankYouModal/ThankYouModal';

import './Home.css';

// Import data
import toppers from '../../data/toppers';
import testimonials from '../../data/testimonials';
import faqs from '../../data/faqs';

function Home() {
  const [quickForm, setQuickForm] = useState({
    name: '',
    phone: '',
    standard: ''
  });
  const [activeFAQIndex, setActiveFAQIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQIndex(prevIndex => prevIndex === index ? null : index);
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setCurrentTestimonialIndex((prev) => {
        const maxIndex = mobile ? testimonials.length - 1 : Math.max(0, testimonials.length - 3);
        return Math.min(prev, maxIndex);
      });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const maxIndex = isMobile ? testimonials.length - 1 : Math.max(0, testimonials.length - 3);
    if (maxIndex === 0) return;

    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isMobile]);

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
      setSubmittedInfo({ name: quickForm.name, phone: quickForm.phone });
      setIsSubmitting(false);
      setShowEnquiryModal(false);
      setQuickForm({ name: '', phone: '', standard: '' });
      setShowThankYou(true);
    }, 2000);
  };

  const closeEnquiryModal = () => {
    setShowEnquiryModal(false);
    setSubmitted(false);
    setQuickForm({ name: '', phone: '', standard: '' });
  };

  const [formData, setFormData] = useState({
    name: '',
    parentName: '',
    phone: '',
    gender: '',
    standard: '',
    examination: 'Plain Boards',
    stream: '',
    board: '',
    message: ''
  });

  const [isContactSubmitting, setIsContactSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [submittedInfo, setSubmittedInfo] = useState({ name: '', phone: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => {
      const updated = { ...prev, [name]: value };

      // Conditional auto-population logic
      if (name === 'standard') {
        const isClass7to10 = ['Class 7', 'Class 8', 'Class 9', 'Class 10'].includes(value);
        const isClass11to12 = ['Class 11', 'Class 12'].includes(value);
        const isPharma = ['D.Pharm', 'B.Pharm'].includes(value);
        const isCAorCMA = ['Chartered Accountant (CA)', 'Cost and Management Accountant (CMA)'].includes(value);

        if (isClass7to10) {
          updated.examination = 'Plain Boards';
          updated.stream = '';
          if (updated.board === 'HSC') {
            updated.board = '';
          }
        } else if (isClass11to12) {
          updated.board = 'HSC';
        } else if (isPharma) {
          updated.examination = 'Plain Boards';
          updated.stream = 'Science';
          updated.board = '';
        } else if (isCAorCMA) {
          updated.examination = 'Plain Boards';
          updated.stream = 'Commerce';
          updated.board = '';
        } else if (value === '') {
          updated.examination = '';
          updated.stream = '';
          updated.board = '';
        }
      }

      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsContactSubmitting(true);

    setTimeout(() => {
      setSubmittedInfo({ name: formData.name, phone: formData.phone });
      setFormData({
        name: '',
        parentName: '',
        phone: '',
        gender: '',
        standard: '',
        examination: 'Plain Boards',
        stream: '',
        board: '',
        message: ''
      });
      setIsContactSubmitting(false);
      setShowThankYou(true);
    }, 2000);
  };

  const showExamAndStream = ['Class 11', 'Class 12'].includes(formData.standard);
  const showBoard = !['B.Pharm', 'D.Pharm', 'Chartered Accountant (CA)', 'Cost and Management Accountant (CMA)'].includes(formData.standard);

  const courses = [
    {
      title: "SSC (7th–10th Std)",
      badge: "SSC BOARD",
      desc: "Strong academic foundation with concept-based learning, board exam preparation, and regular assessments for consistent performance.",
      color: "brand-purple"
    },
    {
      title: "ICSE (7th–10th Std)",
      badge: "ICSE BOARD",
      desc: "Comprehensive subject coverage with analytical learning, project guidance, and focused preparation for ICSE examinations.",
      color: "brand-teal"
    },
    {
      title: "CBSE (7th–10th Std)",
      badge: "CBSE BOARD",
      desc: "NCERT-oriented teaching with conceptual clarity, problem-solving skills, and structured preparation for board exams.",
      color: "brand-gold"
    },
    {
      title: "Science (11th–12th)",
      badge: "JEE, NEET, CET, Plain Boards",
      desc: "Expert coaching for Physics, Chemistry, and Mathematics/Biology with integrated preparation for JEE, NEET, Plain Boards and MHT-CET.",
      color: "brand-teal"
    },
    {
      title: "Commerce",
      badge: "CA, CMA",
      desc: "Specialized guidance in Accounts, Economics, and Business Studies with foundation support for CA and CMA careers.",
      color: "brand-purple"
    },
    {
      title: "Pharma",
      badge: "B.PHARM • D.PHARM",
      desc: "Focused academic support for B.Pharm and D.Pharm students covering core pharmaceutical sciences and practical concepts",
      color: "brand-gold"
    }
  ];

  const [showPopup, setShowPopup] = useState(true);

  return (

    <div className="home-page">
      {showPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 backdrop-blur-md">

          {/* Close Button */}
          <button
            onClick={() => {
              setShowPopup(false);
              localStorage.setItem("welcomePopup", "seen");
            }}
            className="absolute top-5 right-5 text-white text-4xl p-2  hover:scale-110 transition"
          >
            ✕
          </button>

          {/* Center Image */}
          <div className="relative">
            <Link to="/contact">
              <img
                src="/Popup_advertisement.jpeg"
                alt="Academy Announcement"
                className="max-w-[90vw] max-h-[85vh] rounded-2xl shadow-2xl"
              />
            </Link>
          </div>

        </div>
      )}



      {/* SECTION 1 — HERO */}
      <section className="mt-[70px] relative h-[380px] md:h-[65vh] w-full overflow-hidden hero-pattern">
        <div className="flex flex-col md:flex-row w-full h-full ">
          <div className="hidden md:flex w-full md:w-[45%] h-[250px] md:h-full relative overflow-hidden items-center justify-center object-cover ">
            <img
              alt="Vibrant Academy Entrance"
              className="w-[95%] h-[95%] mx-auto rounded-xl"
              src="/images/Classes photos/Classes entrance.png"
            />
            <div className="absolute inset-0  pointer-events-none"></div>
          </div>
          <div className="w-full md:w-[55%] flex items-start md:items-center px-margin_mobile pt-6 pb-20 md:p-stack_xl ">
            <div className="max-w-xl mx-auto md:mx-0 ">
              <div className="inline-flex items-center gap-2 mb-2 md:mb-3">
                <span className="h-px w-8 bg-brand-teal "></span>
                <span className="font-dancing text-brand-teal text-lg md:text-xl">Believe in Excellence...</span>
              </div>
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold text-brand-teal mb-2 md:mb-4 tracking-tight leading-tight">
                Welcome to <br /><span className="text-brand-purple">Vibrant Academy.</span>
              </h1>
              <p className="text-gray-500 text-sm md:text-lg leading-relaxed mb-4 md:mb-6">
                Crafting academic success stories through highly personalized mentorship, comprehensive curriculum guides, and expert-led board coaching since 2002.
              </p>
              <div className="flex gap-4">
                <button onClick={() => setShowEnquiryModal(true)} className="px-6 py-3 bg-brand-yellow hover:bg-[#E0B000] text-[#1F2937] font-bold rounded-lg shadow-md transition-all text-xs uppercase tracking-wider">
                  Apply Now
                </button>
              </div>
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
              Student <span className="text-brand-purple">Achievements.</span>
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
                {topper.school && (
                  <p className="text-xs text-gray-400 font-medium mt-1">{topper.school}</p>
                )}
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
              We provide comprehensive coaching for SSC, ICSE, and CBSE students from Classes 7–10, along with specialized guidance for Science, Commerce, and Pharmacy aspirants.
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

      {/* QUICK ENQUIRY MODAL */}
      {showEnquiryModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[500] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl max-w-2xl w-full relative" data-aos="zoom-in">
            {/* Close Button */}
            <button
              onClick={closeEnquiryModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            <div className="mb-6">
              <span className="font-dancing text-brand-teal text-xl block mb-1">Request a Free Counselling Session</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-brand-navy tracking-tight">Quick Enquiry</h3>
            </div>

            {submitted ? (
              <div className="bg-brand-teal/10 border border-brand-teal/20 text-brand-teal p-6 rounded-xl text-center font-bold">
                <span className="material-symbols-outlined text-4xl mb-2 block">check_circle</span>
                Thank you! Your academic enquiry has been submitted. We will contact you at {quickForm.phone} within 24 hours.
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit} className="space-y-4">
                {/* Field 1: Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-600 ml-1">Student Name</label>
                  <input
                    type="text"
                    name="name"
                    value={quickForm.name}
                    onChange={handleQuickChange}
                    placeholder="Enter Name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-brand-navy placeholder-gray-400 focus:bg-white focus:border-brand-teal transition-all outline-none text-sm"
                  />
                </div>

                {/* Field 2: Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-600 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={quickForm.phone}
                    onChange={handleQuickChange}
                    placeholder="Enter Phone"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-brand-navy placeholder-gray-400 focus:bg-white focus:border-brand-teal transition-all outline-none text-sm"
                  />
                </div>

                {/* Field 3: Standard */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-600 ml-1">Standard</label>
                  <select
                    name="standard"
                    value={quickForm.standard}
                    onChange={handleQuickChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-brand-navy focus:bg-white focus:border-brand-teal transition-all outline-none text-sm cursor-pointer [&>option]:text-brand-navy [&>option]:bg-white"
                  >
                    <option value="">Select Class</option>
                    <option value="Class 7">Class 7</option>
                    <option value="Class 8">Class 8</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 10">Class 10</option>
                    <option value="Class 11">Class 11</option>
                    <option value="Class 12">Class 12</option>
                    <option value="B.Pharm">B.Pharm</option>
                    <option value="D.Pharm">D.Pharm</option>
                    <option value="Chartered Accountant (CA)">Chartered Accountant (CA)</option>
                    <option value="Cost and Management Accountant (CMA)">Cost and Management Accountant (CMA)</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-brand-yellow hover:bg-brand-yellow/90 disabled:bg-brand-yellow/60 text-[#1F2937] font-bold rounded-lg transition-all text-xs uppercase tracking-widest shadow-lg"
                >
                  {isSubmitting ? 'Submitting...' : 'Enquire Now'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}      {/* SECTION 3B — ENQUIRY FORM & CONTACT INFO */}
      <section className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter pt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left Column: Contact Info & Photo */}
          <div className="space-y-6" data-aos="fade-right">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-brand-navy uppercase tracking-tight">
                Expert Guidance is Just a Message Away
              </h2>
            </div>

            {/* Compact Address, Phone, Email Rows */}
            <div className="space-y-3">
              {/* Address card (Full Width) */}
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-brand-navy/5 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple flex-shrink-0">
                  <span className="material-symbols-outlined text-base">location_on</span>
                </div>
                <div>
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Address</p>
                  <p className="text-[11px] font-semibold text-brand-navy leading-normal">
                    Shop No. 7, RMMS CHSL, Bldg. A1/A2, C.S. Road, Dahisar (East), Mumbai
                  </p>
                </div>
              </div>

              {/* Phone & Email cards (Side by Side) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-brand-navy/5 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal flex-shrink-0">
                    <span className="material-symbols-outlined text-base">call</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Phone</p>
                    <a href="tel:+919137964830" className="text-[11px] font-semibold text-brand-navy hover:text-brand-purple transition-colors truncate block">
                      +91 91379 64830
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-brand-navy/5 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-gold flex-shrink-0">
                    <span className="material-symbols-outlined text-base">mail</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Email</p>
                    <a href="mailto:info@vibrantacademy.com" className="text-[11px] font-semibold text-brand-navy hover:text-brand-purple transition-colors truncate block">
                      info@vibrantacademy.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Photo Container */}
            <div className="h-[280px] md:h-[340px] rounded-xl overflow-hidden shadow-sm border border-brand-navy/5">
              <img
                src="/images/Classes photos/Classes entrance.png"
                alt="Vibrant Academy Entrance"
                className="w-full h-full "
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200";
                }}
              />
            </div>
          </div>

          {/* Right Column: Enquiry Form (Reduced height & highly compact layout) */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-brand-navy/5" data-aos="fade-left">
            <div className="mb-4">
              <p className="text-brand-teal font-extrabold uppercase tracking-widest text-[10px] mb-0.5">Admissions Desk</p>
              <h2 className="text-xl md:text-2xl font-black text-brand-navy uppercase tracking-tight">
                Enquiry Form
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Row 1: Name & Parent Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-brand-navy/80 ml-0.5">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Student Name"
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all outline-none text-xs font-semibold"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-brand-navy/80 ml-0.5">Parent Name</label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    placeholder="Parent Name"
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all outline-none text-xs font-semibold"
                    required
                  />
                </div>
              </div>

              {/* Row 2: Phone Number & Gender */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-brand-navy/80 ml-0.5">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all outline-none text-xs font-semibold"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-brand-navy/80 ml-0.5">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all outline-none text-xs font-semibold cursor-pointer [&>option]:text-brand-navy [&>option]:bg-white"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Standard & Boards */}
              <div className={`grid grid-cols-1 ${showBoard ? 'md:grid-cols-2' : ''} gap-4`}>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-brand-navy/80 ml-0.5">Standard</label>
                  <select
                    name="standard"
                    value={formData.standard}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all outline-none text-xs font-semibold cursor-pointer [&>option]:text-brand-navy [&>option]:bg-white"
                    required
                  >
                    <option value="">Select Standard</option>
                    <option value="Class 7">Class 7</option>
                    <option value="Class 8">Class 8</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 10">Class 10</option>
                    <option value="Class 11">Class 11</option>
                    <option value="Class 12">Class 12</option>
                    <option value="B.Pharm">B.Pharm</option>
                    <option value="D.Pharm">D.Pharm</option>
                    <option value="Chartered Accountant (CA)">Chartered Accountant (CA)</option>
                    <option value="Cost and Management Accountant (CMA)">Cost and Management Accountant (CMA)</option>
                  </select>
                </div>

                {showBoard && (
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-navy/80 ml-0.5">Boards</label>
                    <select
                      name="board"
                      value={formData.board}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all outline-none text-xs font-semibold cursor-pointer [&>option]:text-brand-navy [&>option]:bg-white"
                      required={showBoard}
                    >
                      <option value="">Select Board</option>
                      <option value="SSC">SSC</option>
                      <option value="CBSE">CBSE</option>
                      <option value="ICSE">ICSE</option>
                      <option value="HSC">HSC</option>
                    </select>
                  </div>
                )}
              </div>

              {/* Conditional Row: Examination & Stream (Shown only for Class 11 & Class 12) */}
              {showExamAndStream && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-navy/80 ml-0.5">Examination</label>
                    <select
                      name="examination"
                      value={formData.examination}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all outline-none text-xs font-semibold cursor-pointer [&>option]:text-brand-navy [&>option]:bg-white"
                      required
                    >
                      <option value="">Select Exam</option>
                      <option value="JEE">JEE</option>
                      <option value="NEET">NEET</option>
                      <option value="MHT-CET">MHT-CET</option>
                      <option value="CA">CA</option>
                      <option value="CMA">CMA</option>
                      <option value="Plain Boards">Plain Boards</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-navy/80 ml-0.5">Stream</label>
                    <select
                      name="stream"
                      value={formData.stream}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all outline-none text-xs font-semibold cursor-pointer [&>option]:text-brand-navy [&>option]:bg-white"
                      required
                    >
                      <option value="">Select Stream</option>
                      <option value="Science">Science</option>
                      <option value="Commerce">Commerce</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Message Field */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-brand-navy/80 ml-0.5">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message..."
                  rows="2"
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all outline-none text-xs font-semibold resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isContactSubmitting}
                className="w-full py-3 bg-brand-navy text-white font-extrabold rounded-lg hover:bg-brand-purple active:scale-[0.98] transition-all text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2"
              >
                {isContactSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-xs">send</span>
                    <span>Submit Enquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* SECTION 4 — HIGHER SECONDARY SECTION */}
      <section className="py-stack_xl bg-[#F5F0F7] overflow-hidden">
        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2" data-aos="fade-right">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-brand-teal"></span>
                <span className="font-dancing text-brand-teal text-xl">Powered by S.S. Classes </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 tracking-tight leading-tight">
                Why Choose <br /><span className="text-brand-purple">Vibrant Academy?</span>
              </h2>
              <div className="h-1 w-[40px] bg-brand-purple rounded-full mb-6"></div>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                We provide comprehensive coaching programs for SSC, ICSE, and CBSE students from Classes 7 to 10, along with specialized guidance for Science, Commerce, and Pharmacy aspirants. Our structured teaching approach focuses on conceptual understanding, academic excellence, and career-oriented preparation.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-brand-teal mt-0.5">check_circle</span>
                  <span className="text-sm font-medium text-brand-navy/80">ICSE, SSC, CBSE state board integration models</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-brand-teal mt-0.5">check_circle</span>
                  <span className="text-sm font-medium text-brand-navy/80">JEE, NEET, MHT-CET & Plain Boards Preparation</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-brand-teal mt-0.5">check_circle</span>
                  <span className="text-sm font-medium text-brand-navy/80">CA & CMA Foundation Coaching</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-brand-teal mt-0.5">check_circle</span>
                  <span className="text-sm font-medium text-brand-navy/80">B.Pharm & D.Pharm Support</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative" data-aos="fade-left">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  alt="High School Study Environment"
                  className="w-full h-[350px] md:h-[450px] object-cover"
                  src="/images/teaching photos/PTA meeting.jpeg"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Education Philosophy */}
      <section className="py-stack_xl bg-white overflow-hidden">
        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 order-2 lg:order-1" data-aos="fade-right">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#F0F9FC] p-6 rounded-xl border border-brand-teal/5 flex flex-col justify-center h-[180px]">

                  <div>
                    <h4 className="font-bold text-brand-navy text-sm mb-1">Micro Batches</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">Max 25 students per batch for personalized attention and focused learning.</p>
                  </div>
                </div>
                <div className="bg-[#F5F0F7] p-6 rounded-xl border border-brand-purple/5 flex flex-col justify-center h-[180px]">
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm mb-1">Weekly Tests</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">Periodic diagnostic tests to evaluate progress and strengthen exam readiness.</p>
                  </div>
                </div>
                <div className="bg-[#FFFCEB] p-6 rounded-xl border border-brand-yellow/5 flex flex-col justify-center h-[180px]">
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm mb-1">Senior Mentors</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">Experienced faculty and subject experts guide every student.</p>
                  </div>
                </div>
                <div className="bg-[#F5F0F7] p-6 rounded-xl border border-brand-purple/5 flex flex-col justify-center h-[180px]">
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm mb-1">Syllabus Grids</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">Structured notes, worksheets, and exam-oriented resources.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2" data-aos="fade-left">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-brand-teal"></span>
                <span className="font-dancing text-brand-teal text-xl">Powered By S.S. Classes</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 tracking-tight leading-tight">
                Our Educational <br /><span className="text-brand-purple">Philosophy.</span>
              </h2>
              <div className="h-1 w-[40px] bg-brand-purple rounded-full mb-6"></div>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                We believe that education goes beyond memorization. Our teaching approach focuses on building strong concepts, analytical thinking, and problem-solving skills through personalized guidance, structured study material, and regular assessments.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Every student learns differently, which is why we maintain small batch sizes. This allows our faculty to provide personalized attention, resolve doubts effectively, and help students improve their academic performance.
              </p>
              <Link to="/about" className="px-8 py-3.5 bg-brand-yellow hover:bg-[#E0B000] text-[#1F2937] font-bold rounded-lg shadow-md transition-all text-xs uppercase tracking-wider">
                Learn More About Us
              </Link>
            </div>
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

          {/* Testimonial Carousel */}
          <div className="overflow-hidden w-full px-1 py-4" data-aos="fade-up">
            <div
              className="flex transition-transform duration-500 ease-in-out -mx-4"
              style={{
                transform: `translateX(-${currentTestimonialIndex * (isMobile ? 100 : 33.3333)}%)`
              }}
            >
              {testimonials.map((test) => (
                <div
                  key={test.id}
                  className="w-full md:w-1/3 flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-xl p-8 shadow-md flex flex-col justify-between border border-brand-navy/5 h-full min-h-[300px]">
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
                        {test.photo ? (
                          <img
                            alt={test.name}
                            className="w-10 h-10 rounded-full object-cover border border-brand-purple/10"
                            src={test.photo}
                          />
                        ) : (
                          <span className="material-symbols-outlined text-brand-purple/60 text-4xl">account_circle</span>
                        )}
                        <div>
                          <h5 className="font-bold text-brand-purple text-sm">{test.name}</h5>
                          <p className="text-gray-400 text-[11px]">{test.detail}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: isMobile ? testimonials.length : Math.max(1, testimonials.length - 2) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonialIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentTestimonialIndex === idx ? 'bg-brand-purple w-6' : 'bg-brand-purple/20'
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>
      {/* SECTION 8 — FAQ */}
      <section className="py-stack_xl bg-white border-t border-brand-navy/5">
        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter">
          <div className="FAQ-box">

            <div className="FAQHEADINGBOX">
              <h2 className="FAQheading">Frequently Asked Questions</h2>
              <p className="FAQmorequestions">
                For more questions please<br />
                contact our official gmail <a href="mailto:ENGINEERIFY@gmail.com">vibrantacademy@gmail.com</a>
              </p>
            </div>
            <div className="FAQQUESTIONSBOX">
              {faqs.map((faq, index) => {
                const isActive = activeFAQIndex === index;
                return (
                  <div key={faq.id} className="faq-questions-list" onClick={() => toggleFAQ(index)}>
                    <div className="list-elements">
                      <div className="question-element-box">
                        <h3 className="question">
                          <span className="number">{String(faq.id).padStart(2, '0')}</span>
                          {faq.question}
                        </h3>
                        <h3 className={`icon ${isActive ? 'active' : ''}`}>+</h3>
                      </div>
                      <p className={`Answer ${isActive ? 'active' : ''}`}>{faq.answer}</p>
                      {index < faqs.length - 1 && (
                        <span className={`line ${isActive ? 'active' : ''}`}></span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Translucent Loader overlay while submitting */}
      {(isSubmitting || isContactSubmitting) && <Loader translucent={true} />}

      {/* Thank You Popup Modal */}
      <ThankYouModal
        isOpen={showThankYou}
        onClose={() => setShowThankYou(false)}
        studentName={submittedInfo.name}
        phoneNumber={submittedInfo.phone}
      />

    </div>
  );
}

export default Home;
