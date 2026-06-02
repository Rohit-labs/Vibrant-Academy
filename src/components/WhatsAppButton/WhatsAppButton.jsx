import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919137964830"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float fixed bottom-24 right-6 md:bottom-8 md:right-8 w-14 h-14 bg-brand-whatsapp text-white rounded-full flex items-center justify-center shadow-2xl z-[9999] hover:scale-110 transition-all duration-300 whatsapp-pulse"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}

export default WhatsAppButton;
