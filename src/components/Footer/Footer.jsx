import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import './Footer.css';

function Footer() {

  return (
    <>
      <footer className="footer bg-brand-navy text-white pt-20 pb-24 md:pb-10 border-t-4 border-brand-yellow relative z-30">
        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
            {/* Column 1 — Brand Info */}
            <div className="space-y-6">
              <div className="bg-white px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-0 w-fit h-12">
                <img src="/logo_mark.jpg" alt="V Logo Mark" className="h-full object-contain rounded" />
                <img src="/logo_vibrant.jpg" alt="Vibrant" className="h-[75%] object-contain" />
                <img src="/logo_academy.jpg" alt="Academy" className="h-full object-contain translate-y-[5px]" />
              </div>
              <p className="text-gray-400 font-dancing text-xl text-white/70 cursive">Believe in Excellence...</p>
              <p className="text-white/60 text-sm leading-relaxed">
                A boutique educational institution dedicated to crafting academic success stories through personalized mentorship and modern teaching methodologies.
              </p>
              <div className="flex gap-4">
                <a className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-all" href="https://wa.me/919137964830" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                  <FaWhatsapp size={18} />
                </a>
                <a className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#F77737] transition-all" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <FaInstagram size={18} />
                </a>
                <a className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#EA4335] transition-all" href="mailto:info@vibrantacademy.com" aria-label="Gmail">
                  <SiGmail size={18} />
                </a>
              </div>
            </div>

            {/* Column 2 — Quick Links */}
            <div>
              <h4 className="text-brand-yellow font-bold uppercase tracking-widest text-xs mb-4">Quick Links</h4>
              <div className="h-[2px] w-8 bg-brand-yellow mb-6"></div>
              <ul className="space-y-4 text-sm font-medium text-white/60">
                <li><Link className="hover:text-brand-yellow transition-colors" to="/">Home</Link></li>
                <li><Link className="hover:text-brand-yellow transition-colors" to="/about">About Academy</Link></li>
                <li><Link className="hover:text-brand-yellow transition-colors" to="/results">Success Results</Link></li>
                <li><Link className="hover:text-brand-yellow transition-colors" to="/contact">Contact Support</Link></li>
              </ul>
            </div>

            {/* Column 3 — Our Programs */}
            <div>
              <h4 className="text-brand-yellow font-bold uppercase tracking-widest text-xs mb-4">Our Programs</h4>
              <div className="h-[2px] w-8 bg-brand-yellow mb-6"></div>
              <ul className="space-y-4 text-sm font-medium text-white/60">
                <li><a className="hover:text-brand-yellow transition-colors" href="#programs">Foundation Classes (7-10)</a></li>
                <li><a className="hover:text-brand-yellow transition-colors" href="#programs">Higher Secondary (11-12)</a></li>
                <li><a className="hover:text-brand-yellow transition-colors" href="#programs">Board Exam Prep</a></li>
                <li><a className="hover:text-brand-yellow transition-colors" href="#programs">Competitive Coaching</a></li>
                <li><a className="hover:text-brand-yellow transition-colors" href="#programs">Doubt Sessions</a></li>
              </ul>
            </div>

            {/* Column 4 — Get in Touch */}
            <div>
              <h4 class="text-brand-yellow font-bold uppercase tracking-widest text-xs mb-4">Get in Touch</h4>
              <div class="h-[2px] w-8 bg-brand-yellow mb-6"></div>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-brand-teal text-lg flex-shrink-0 mt-1" />
                  <span className="text-white/60 leading-relaxed text-xs">Shop No. 7, RMMS CHSL,<br/>Bldg. A1/A2, C.S. Road,<br/>Dahisar (East), Mumbai</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaPhone className="text-brand-teal text-lg" />
                  <a href="tel:+919137964830" className="text-white/60 hover:text-white transition-colors">+91 91379 64830</a>
                </li>
                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-brand-teal text-lg" />
                  <a href="mailto:info@vibrantacademy.com" className="text-white/60 hover:text-white transition-colors">info@vibrantacademy.com</a>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-white/40">
            <p>© 2024 Vibrant Academy. All rights reserved.</p>
            <div className="flex gap-8">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="hover:text-white" href="#">Terms</a>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="hover:text-white" href="#">Privacy</a>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="hover:text-white" href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
