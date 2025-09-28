import React from 'react';
import { useUI } from '../context/UIContext';
import { PortfolioGrid } from '../components/PortfolioGrid';

const Portafolio = () => {
  const { setActiveTab } = useUI();
  React.useEffect(() => setActiveTab('portafolio'), [setActiveTab]);

  const projects = [
    { title: 'Proyecto A', desc: 'App móvil X' },
    { title: 'Proyecto B', desc: 'Landing Y' },
    { title: 'Proyecto C', desc: 'Dashboard Z' },
    { title: 'Proyecto D', desc: 'E-commerce' }
  ];

  return (
    <div className="pt-4 pb-32 max-w-2xl mx-auto px-4 bg-amber-100">
      <h2 className="text-lg font-semibold mb-3">Portafolio</h2>
      <PortfolioGrid projects={projects} />
    </div>
  );
};

export default Portafolio;
