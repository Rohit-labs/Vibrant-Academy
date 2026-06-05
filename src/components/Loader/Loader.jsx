import React, { useEffect } from 'react';

function Loader({ translucent = false }) {
  useEffect(() => {
    const LOOP = 4600;
    const interval = setInterval(() => {
      ['lp', 'rp', 'bn', 'tg'].forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        const clone = el.cloneNode(true);
        el.parentNode.replaceChild(clone, el);
      });
    }, LOOP);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex flex-col items-center justify-center fixed inset-0 z-[9999] ${
      translucent ? 'bg-white/85 backdrop-blur-md' : 'bg-white'
    }`}>

      {/* V Logo SVG */}
      <svg
        style={{ width: '200px', height: '175px' }}
        viewBox="0 0 160 140"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="lp"
          d="M14,12 L58,122 L82,68"
          fill="none"
          stroke="#0891B2"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 210,
            strokeDashoffset: 210,
            animation: `drawL 1.6s cubic-bezier(0.4,0,0.2,1) 
                        forwards 0.2s,
                        eraseL 0.8s ease forwards 3.6s`
          }}
        />
        <path
          id="rp"
          d="M150,12 L82,68 L58,122"
          fill="none"
          stroke="#7B2D8B"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 230,
            strokeDashoffset: 230,
            animation: `drawR 1.6s cubic-bezier(0.4,0,0.2,1) 
                        forwards 1.4s,
                        eraseR 0.8s ease forwards 3.6s`
          }}
        />
      </svg>

      {/* Brand Name */}
      <p
        id="bn"
        className="font-bold text-3xl mt-2 opacity-0"
        style={{
          fontFamily: "'Poppins', sans-serif",
          animation: `fadeIn 0.8s ease forwards 2.9s,
                      fadeOut 0.7s ease forwards 3.4s`
        }}
      >
        <span style={{ color: '#0891B2' }}>Vibrant </span>
        <span style={{ color: '#7B2D8B' }}>Academy</span>
      </p>

      {/* Tagline */}
      <p
        id="tg"
        className="text-xl mt-1 mb-5 opacity-0"
        style={{
          fontFamily: "'Dancing Script', cursive",
          color: '#1E2D6B',
          animation: `fadeIn 0.8s ease forwards 3.2s,
                      fadeOut 0.7s ease forwards 3.5s`
        }}
      >
        Believe in Excellence...
      </p>

      {/* Bouncing Dots */}
      <div className="flex gap-2 mt-1">
        <div
          className="w-2.5 h-2.5 rounded-full"
          style={{
            background: '#0891B2',
            animation: 'bounce 1.6s ease-in-out infinite 0s'
          }}
        />
        <div
          className="w-2.5 h-2.5 rounded-full"
          style={{
            background: '#7B2D8B',
            animation: 'bounce 1.6s ease-in-out infinite 0.25s'
          }}
        />
        <div
          className="w-2.5 h-2.5 rounded-full"
          style={{
            background: '#F5C518',
            animation: 'bounce 1.6s ease-in-out infinite 0.5s'
          }}
        />
      </div>

    </div>
  );
}

export default Loader;
