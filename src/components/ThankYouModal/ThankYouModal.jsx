import React from 'react';

function ThankYouModal({ isOpen, onClose, studentName, phoneNumber }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Card */}
      <div className="relative bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl border border-brand-purple/10 text-center animate-fade-in z-10" style={{ animation: 'fadeIn 0.3s ease-out forwards' }}>
        {/* Check Icon */}
        <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center text-brand-teal mx-auto mb-6">
          <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
        </div>
        
        <h3 className="text-2xl font-extrabold text-brand-navy mb-2">Thank You, {studentName}!</h3>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          Your enquiry has been successfully submitted. We will contact you at <span className="font-bold text-brand-purple">{phoneNumber}</span> shortly.
        </p>
        
        <button
          onClick={onClose}
          className="w-full py-3 bg-brand-yellow hover:bg-[#E0B000] text-brand-navy font-bold rounded-lg transition-all text-sm uppercase tracking-wider shadow-md shadow-brand-yellow/20"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ThankYouModal;
