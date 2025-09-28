import React from 'react';
import ServiceCard from './ServiceCard';

// Usaremos placeholders de imágenes. Reemplaza estas URLs con tus propias imágenes.
const demoImageUrl = 'https://via.placeholder.com/280x180/2ECC71/FFFFFF?text=Tu+Imagen';
const anotherImageUrl = 'https://via.placeholder.com/280x180/E67E22/FFFFFF?text=Servicio+Clave';

const ServicesSection = () => {
  return (
    <div className="services-section-container">
      <h2>Nuestros Principales Servicios</h2>
      <div className="card-grid">
        <ServiceCard
          title="Desarrollo Web Ágil"
          description="Creamos soluciones web rápidas y escalables con las últimas tecnologías."
          imageUrl={demoImageUrl}
          imageAlt="Icono de desarrollo web"
        />
        <ServiceCard
          title="Diseño UX/UI Centrado"
          description="Diseños intuitivos que priorizan la experiencia del usuario y la conversión."
          imageUrl={anotherImageUrl}
          imageAlt="Icono de diseño UX"
        />
        <ServiceCard
          title="Consultoría Tecnológica"
          description="Asesoramiento experto para optimizar tu infraestructura y estrategia digital."
          imageUrl={demoImageUrl}
          imageAlt="Icono de consultoría"
        />
        <ServiceCard
          title="Marketing Digital Integral"
          description="Estrategias de SEO, SEM y redes sociales para maximizar tu alcance."
          imageUrl={anotherImageUrl}
          imageAlt="Icono de marketing digital"
        />
      </div>
    </div>
  );
};

export default ServicesSection;