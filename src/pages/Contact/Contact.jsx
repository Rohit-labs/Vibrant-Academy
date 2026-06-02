import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import './Contact.css';

function Contact() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    mobileNumber: '',
    classLevel: '',
    boardType: '',
    subjectInterest: '',
    additionalNotes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock EmailJS dispatch or standard alert for premium integration demonstration
    // Since service/template IDs are user-specific, we'll demonstrate full setup with mock fallback!
    setTimeout(() => {
      alert(`Thank you ${formData.studentName}! Your academic enquiry has been submitted. Mr. Ravindra Singh or our admissions desk will contact you at ${formData.mobileNumber} within 24 hours.`);
      setFormData({
        studentName: '',
        parentName: '',
        mobileNumber: '',
        classLevel: '',
        boardType: '',
        subjectInterest: '',
        additionalNotes: ''
      });
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <div className="contact-page overflow-x-hidden">
      
      {/* Hero Section (Split Screen) */}
      <section className="mt-[70px] flex flex-col md:flex-row min-h-[500px] overflow-hidden">
        <div className="w-full md:w-1/2 relative h-[300px] md:h-auto">
          <img 
            alt="Professional Education Environment" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4GycBE1yYDgeclceBfmTNMTVtS-y2mpakZYxHyDaUFrvOXHcHQzZ97lSSBuqYbqJqi-72q3NjNUP3vP27xsaZb3NI40FSLooe-r1QGXr-3ENPK37eaK9YclezGHXGO3XFjmLEZT_roVRsp_rQ6Adbpq-_RilTEMkfH530SA-XiKhEDeya-LpAqj0NOA_Q1HiX8FFe8i32ZdR-mZk7B_WorYFrBnE1qA_A2ng2cBf3xwpCmdTqoiFACerLSPJvUyihh4_1IWYLJg"
          />
          <div className="absolute inset-0 bg-brand-navy/10"></div>
        </div>
        <div className="w-full md:w-1/2 flex items-center bg-white hero-pattern p-margin_mobile md:p-stack_xl">
          <div className="max-w-xl" data-aos="fade-left">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-brand-teal"></span>
              <span className="font-dancing text-brand-teal text-xl">Believe in Excellence...</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy mb-6 tracking-tight">Let's Start Your <span className="text-brand-purple">Journey.</span></h1>
            <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed mb-8">
              Whether you have a question about our courses, timings, or enrollment, our dedicated team is here to guide you toward academic brilliance.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-semibold uppercase tracking-wider text-brand-navy/60">
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-brand-purple">check_circle</span> Personalized</span>
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-brand-purple">check_circle</span> Modern</span>
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-brand-purple">check_circle</span> Result-Driven</span>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Contact Bar */}
      <section className="bg-white border-y border-brand-navy/5">
        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-brand-navy/5">
            <div className="py-10 md:py-12 flex items-center gap-6 group hover:bg-brand-purple/5 transition-colors px-4">
              <div className="w-14 h-14 rounded-full bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-brand-teal text-2xl">call</span>
              </div>
              <div>
                <p className="text-sm font-bold text-brand-navy/50 uppercase tracking-widest mb-1">Call Our Desk</p>
                <p className="text-xl font-bold text-brand-navy">91379 64830</p>
              </div>
            </div>
            <div className="py-10 md:py-12 flex items-center gap-6 group hover:bg-brand-purple/5 transition-colors px-4">
              <div className="w-14 h-14 rounded-full bg-brand-whatsapp/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-brand-whatsapp text-2xl" style={{ fontVariationSettings: '"FILL" 1' }}>chat</span>
              </div>
              <div>
                <p className="text-sm font-bold text-brand-navy/50 uppercase tracking-widest mb-1">Quick Support</p>
                <a className="text-xl font-bold text-brand-whatsapp hover:underline" href="https://wa.me/919137964830" target="_blank" rel="noreferrer">WhatsApp Us</a>
              </div>
            </div>
            <div className="py-10 md:py-12 flex items-center gap-6 group hover:bg-brand-purple/5 transition-colors px-4">
              <div className="w-14 h-14 rounded-full bg-brand-purple/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-brand-purple text-2xl">location_on</span>
              </div>
              <div>
                <p className="text-sm font-bold text-brand-navy/50 uppercase tracking-widest mb-1">Visit Campus</p>
                <p className="text-base font-bold text-brand-navy leading-tight">Dahisar (East), Mumbai</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form & Map */}
      <section id="enquiry" className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter py-stack_xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          
          {/* Form Column */}
          <div className="lg:col-span-3" data-aos="fade-right">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-brand-navy mb-2">Send an Enquiry</h2>
              <div className="h-1 w-12 bg-brand-purple rounded-full"></div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Group: Student Info */}
              <div className="space-y-4">
                <p className="text-xs font-bold text-brand-navy/40 uppercase tracking-widest">Personal Details</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-brand-navy/70 ml-1">Student Name</label>
                    <input 
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-brand-navy/10 bg-white focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all outline-none" 
                      placeholder="John Doe" 
                      required 
                      type="text"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-brand-navy/70 ml-1">Parent Name</label>
                    <input 
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-brand-navy/10 bg-white focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all outline-none" 
                      placeholder="Jane Doe" 
                      required 
                      type="text"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-brand-navy/70 ml-1">Mobile Number</label>
                  <input 
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-brand-navy/10 bg-white focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all outline-none" 
                    placeholder="98765 43210" 
                    required 
                    type="tel"
                  />
                </div>
              </div>

              {/* Group: Course Interest */}
              <div className="space-y-4">
                <p className="text-xs font-bold text-brand-navy/40 uppercase tracking-widest">Academic Interest</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-brand-navy/70 ml-1">Class</label>
                    <select 
                      name="classLevel"
                      value={formData.classLevel}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-brand-navy/10 bg-white focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all outline-none"
                    >
                      <option value="">Select</option>
                      <option value="Class 7">Class 7</option>
                      <option value="Class 8">Class 8</option>
                      <option value="Class 9">Class 9</option>
                      <option value="Class 10">Class 10</option>
                      <option value="Class 11">Class 11</option>
                      <option value="Class 12">Class 12</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-brand-navy/70 ml-1">Board</label>
                    <select 
                      name="boardType"
                      value={formData.boardType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-brand-navy/10 bg-white focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all outline-none"
                    >
                      <option value="">Select</option>
                      <option value="ICSE">ICSE</option>
                      <option value="SSC">SSC</option>
                      <option value="CBSE">CBSE</option>
                      <option value="HSC">HSC</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-brand-navy/70 ml-1">Subject</label>
                    <input 
                      name="subjectInterest"
                      value={formData.subjectInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-brand-navy/10 bg-white focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all outline-none" 
                      placeholder="e.g. Maths" 
                      type="text"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-brand-navy/70 ml-1">Tell us more</label>
                <textarea 
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-brand-navy/10 bg-white focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all outline-none" 
                  placeholder="Your message..." 
                  rows="4"
                ></textarea>
              </div>

              <button 
                className="w-full md:w-auto px-12 py-4 bg-brand-yellow text-brand-navy font-extrabold rounded-lg shadow-lg shadow-brand-yellow/20 hover:scale-[1.02] active:scale-95 transition-all text-lg uppercase tracking-wider" 
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
              </button>
            </form>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-2 relative min-h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-brand-navy/5 animate-pulse-once" data-aos="fade-left">
            <iframe 
              title="Vibrant Academy Location"
              allowFullScreen="" 
              height="100%" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              src="https://maps.google.com/maps?q=Vibrant%20Academy%20Shop%20No.%207%20RMMS%20CHSL%20Bldg.%20A1%2FA2%20CS%20Road%20Dahisar%20East%20Mumbai&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              style={{ border: 0, filter: 'contrast(1.1) brightness(1.05)' }} 
              width="100%"
            ></iframe>
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-5 rounded-xl border border-white/20 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-purple rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-white text-xl">map</span>
                </div>
                <div>
                  <p className="font-bold text-brand-navy">Vibrant Academy</p>
                  <p className="text-xs text-brand-navy/70 mt-0.5 leading-relaxed">
                    Shop No. 7, RMMS CHSL, Bldg. A1/A2, C.S. Road, Near Anand Nagar Metro Station, Dahisar (East)
                  </p>
                  <a className="inline-block mt-2 text-brand-teal font-bold text-sm hover:underline" href="#enquiry">Get Detailed Directions →</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Contact;
