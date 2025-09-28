import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUI } from '../context/UIContext';
import placeholderImg from '/placeholder.png';; 

export const MobileNav = () => {
  const navigate = useNavigate();
  const { setActiveTab } = useUI();

  const items = [
    { to: '/', label: 'Inicio', icon: '🏠' },
    { to: '/cronograma', label: 'Cronograma', icon: '🗓️' },
    { to: '/conocenos', label: 'Conócenos', icon: '👥' },
    { to: '/portafolio', label: 'Portafolio', icon: '📁' }
  ];

  return (
    <nav className="bg-orange-200 bottom-4 mx-auto max-w-2xl px-14 flex items-center h-36">
      <img className='logo' src={placeholderImg} alt="Logo" />
      <div className="flex justify-between items-center ">
        {items.map((it) => (
          <button
            key={it.to}
            onClick={() => { setActiveTab(it.label.toLowerCase()); navigate(it.to); }}
            className="flex flex-col items-center px-4 text-xs text-gray-600"
          >
            <div className="w-9 h-9 rounded-lg bg-purplebrand-50 flex items-center justify-center mb-1">
              <span className="text-base">{it.icon}</span>
            </div>
            <span>{it.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};
