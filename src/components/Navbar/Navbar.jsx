import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Results', path: '/results' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`navbar fixed top-0 w-full h-[70px] bg-white z-[100] border-b border-brand-navy/5 shadow-sm transition-all duration-300 ${scrolled ? 'scrolled shadow-md' : ''}`} style={{ boxShadow: 'rgba(0, 0, 0, 0.08) 0px 2px 20px' }}>
        <div className="flex justify-between items-center h-full px-margin_mobile md:px-gutter max-w-container_max_width mx-auto">

          <Link to="/" className="h-10 md:h-[48px] flex items-center gap-0">
            <img src="/logo_mark.jpg" alt="V Logo Mark" className="h-full object-contain rounded" />
            <img src="/logo_vibrant.jpg" alt="Vibrant" className="h-[75%] md:h-[80%] object-contain" />
            <img src="/logo_academy.jpg" alt="Academy" className="h-full object-contain translate-y-[5px] md:translate-y-[7px]" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-semibold transition-all ${location.pathname === link.path
                  ? 'text-brand-purple border-b-2 border-brand-purple pb-1'
                  : 'text-brand-navy/70 hover:text-brand-purple'
                  }`}
              >
                {link.name}
              </Link>
            ))}

          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-brand-purple p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>

        </div>
      </nav>

      {/* Mobile Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-brand-purple z-[200] flex flex-col justify-between p-6 transition-all duration-300 transform ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex justify-between items-center w-full">
          <div className="bg-white px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-0 h-10">
            <img src="/logo_mark.jpg" alt="V Logo Mark" className="h-full object-contain rounded" />
            <img src="/logo_vibrant.jpg" alt="Vibrant" className="h-[75%] object-contain" />
            <img src="/logo_academy.jpg" alt="Academy" className="h-full object-contain translate-y-[4px]" />
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white p-1"
          >
            <FaTimes size={32} />
          </button>
        </div>

        <div className="flex flex-col items-center gap-8 my-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`text-2xl font-semibold tracking-wide hover:text-brand-yellow transition-all ${location.pathname === link.path ? 'text-brand-yellow underline underline-offset-8' : 'text-white'
                }`}
            >
              {link.name === 'Results' ? 'Success Results' : link.name}
            </Link>
          ))}
        </div>

        <div className="text-center pb-4 pt-4 border-t border-white/10 w-full">
          <p className="text-base font-medium text-white/90 tracking-wide">
            Vibrant <span className="text-brand-yellow font-bold">है तो</span> Vibe <span className="text-brand-yellow font-bold">है</span>
          </p>
        </div>

      </div>
    </>
  );
}

export default Navbar;
