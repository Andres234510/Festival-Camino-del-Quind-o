import React from 'react';
import { useUI } from '../context/UIContext';
import ServicesSection from '../components/ServicesSection';

const Portafolio = () => {
  const { setActiveTab } = useUI();
  React.useEffect(() => setActiveTab('portafolio'), [setActiveTab]);

  return (
    <div className="pt-4 pb-32 max-w-2xl mx-auto px-4 bg-amber-100">
      <ServicesSection />
    </div>
  );
};

export default Portafolio;
