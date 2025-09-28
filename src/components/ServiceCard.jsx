import React from 'react';

const ServiceCard = ({ title, description, imageUrl, imageAlt }) => {
  return (
    <div className="service-card">
      <div className="card-image-container">
        {/* Aquí va la imagen */}
        <img src={imageUrl} alt={imageAlt} className="card-image" />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;