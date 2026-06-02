import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Layout Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import InstagramButton from './components/InstagramButton/InstagramButton';
import Loader from './components/Loader/Loader';

// Import Page Components
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Results from './pages/Results/Results';
import Contact from './pages/Contact/Contact';

import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/results" element={<Results />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <InstagramButton />
    </BrowserRouter>
  );
}

export default App;
