import React from 'react';

export const Hero = () => {
  // SVG hero embebido para no depender de assets externos
  const HeroSVG = () => (
    <svg viewBox="0 0 800 300" className="max-w-2xl h-44 object-cover" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0" stopColor="#f6f2ff" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)" />
      <g transform="translate(40,40)">
        <rect x="0" y="0" width="720" height="220" rx="18" fill="#fff" stroke="#eee"/>
        <text x="50" y="100" fill="#5b21b6" fontSize="28" fontFamily="Arial">Prototipo - Vista móvil</text>
      </g>
    </svg>
  );

  return (
    <div className="rounded-2xl overflow-hidden shadow-md-purple card-shadow">
      <HeroSVG />
      <div className="p-4 bg-white">
        <h2 className="text-lg font-bold text-gray-800">Bienvenido</h2>
        <p className="text-sm text-gray-600 mt-1">Interfaz basada en los prototipos entregados.</p>
      </div>
    </div>
  );
};
