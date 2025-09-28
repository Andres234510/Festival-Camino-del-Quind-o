import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  return (
    <div className="services-section-container">
      <h2>Nuestro Portafolio</h2>
      <div className="card-grid">
        <ServiceCard
          title="Desarrollado por:"
          description="..."
          imageUrl="public/images/IMG_6442.JPG"
          imageAlt="Icono de desarrollo web"
        />
        <ServiceCard
          title="Desarrollado por:"
          description="..."
          imageUrl="public/images/IMG_6467.JPG"
          imageAlt="Icono de diseño UX"
        />
        <ServiceCard
          title="Desarrollado por:"
          description="..."
          imageUrl="public/images/IMG_6495.JPG"
          imageAlt="Icono de consultoría"
        />
        <ServiceCard
          title="Desarrollado por:"
          description="..."
          imageUrl="public/images/IMG_6504.JPG"
          imageAlt="Icono de marketing digital"
        />
        <ServiceCard
          title="Desarrollado por:"
          description="..."
          imageUrl="public/images/IMG_6596.JPG"
          imageAlt="Icono de marketing digital"
        />
      </div>
    </div>
  );
};

export default ServicesSection;