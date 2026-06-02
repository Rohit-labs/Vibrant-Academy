import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import './InstagramButton.css';

function InstagramButton() {
  return (
    <a
      href="https://www.instagram.com/vibrant_academy12?igsh=MW9mMzdveXMxN2s3ZQ%3D%3D&utm_source=qr"
      target="_blank"
      rel="noreferrer"
      className="instagram-float fixed bottom-[152px] right-6 md:bottom-[96px] md:right-8 w-14 h-14 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white rounded-full flex items-center justify-center shadow-2xl z-[9999] hover:scale-110 transition-all duration-300 instagram-pulse"
      aria-label="Follow us on Instagram"
    >
      <FaInstagram size={30} />
    </a>
  );
}

export default InstagramButton;
