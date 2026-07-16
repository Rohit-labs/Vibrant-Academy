import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import Loader from '../../components/Loader/Loader';
import ThankYouModal from '../../components/ThankYouModal/ThankYouModal';
import './Contact.css';

function Contact() {
  useEffect(() => {
    AOS.refresh();
  }, []);

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

  const [isSubmitting, setIsSubmitting] = useState(false);
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
        const isCAorCMA = ['Chartered Accountant Foundation(CA)', 'Cost and Management Accountant (CMA)'].includes(value);
        
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const data = new FormData();
      data.append('access_key', '646459c4-28e2-4768-a836-2d456dbd13e0');
      Object.entries(formData).forEach(([k, v]) => data.append(k, v));
      await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      setSubmittedInfo({ name: formData.name, phone: formData.phone });
      setFormData({ name: '', parentName: '', phone: '', gender: '', standard: '', examination: 'Plain Boards', stream: '', board: '', message: '' });
      setIsSubmitting(false);
      setShowThankYou(true);
    } catch {
      setIsSubmitting(false);
    }
  };

  const showExamAndStream = ['Class 11', 'Class 12'].includes(formData.standard);
  const showBoard = !['B.Pharm', 'D.Pharm', 'Chartered Accountant Foundation(CA)', 'Cost and Management Accountant (CMA)'].includes(formData.standard);

  return (
    <div className="contact-page bg-gray-50 min-h-screen">
      
      {/* Centered Page Header (No Hero) */}
      <div className="pt-[100px] pb-6 text-center bg-white border-b border-brand-navy/5 shadow-sm">
        <h1 className="text-2xl md:text-4xl font-black text-brand-navy uppercase tracking-wider">
          Contact Us
        </h1>
        <div className="h-1 w-12 bg-brand-purple rounded-full mx-auto mt-2"></div>
      </div>

      {/* Main Section */}
      <section className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* Left Column: Find Us & Map */}
          <div className="space-y-6" data-aos="fade-right">
            <div>
              <p className="text-brand-teal font-extrabold uppercase tracking-widest text-[10px] mb-0.5">Find Us</p>
              <h2 className="text-xl md:text-2xl font-black text-brand-navy uppercase tracking-tight">
                Get In Touch
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
                    <a href="mailto:vibrantacademy@gmail.com" className="text-[11px] font-semibold text-brand-navy hover:text-brand-purple transition-colors truncate block">
                      vibrantacademy@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Container */}
            <div className="h-[280px] md:h-[340px] rounded-xl overflow-hidden shadow-sm border border-brand-navy/5">
              <iframe 
                title="Vibrant Academy Location"
                allowFullScreen="" 
                height="100%" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                src="https://maps.google.com/maps?q=RMMS%20CHSL%2C%20C.S.%20Road%2C%20Dahisar%20East%20Mumbai&t=&z=17&ie=UTF8&iwloc=&output=embed" 
                style={{ border: 0, filter: 'contrast(1.05) brightness(1.02)' }} 
                width="100%"
              ></iframe>
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
                    inputMode="numeric"
                    pattern="[0-9]*"
                    onKeyDown={(e) => { if (!/[0-9]|Backspace|Delete|Tab|ArrowLeft|ArrowRight/.test(e.key)) e.preventDefault(); }}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-brand-navy/80 ml-0.5">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-55 focus:bg-white focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all outline-none text-xs font-semibold"
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
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-55 focus:bg-white focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all outline-none text-xs font-semibold"
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
                    <option value="Chartered Accountant (CA)">Chartered Accountant Foundation(CA)</option>
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
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-55 focus:bg-white focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all outline-none text-xs font-semibold"
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
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-55 focus:bg-white focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all outline-none text-xs font-semibold"
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
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-55 focus:bg-white focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all outline-none text-xs font-semibold"
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
                disabled={isSubmitting}
                className="w-full py-3 bg-brand-navy text-white font-extrabold rounded-lg hover:bg-brand-purple active:scale-[0.98] transition-all text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
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

      {/* Translucent Loader overlay while submitting */}
      {isSubmitting && <Loader translucent={true} />}

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

export default Contact;
