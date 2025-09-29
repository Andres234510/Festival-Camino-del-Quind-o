// VideoCard.jsx

import React from 'react';

const VideoCard = ({ title, description, videoEmbedUrl }) => {
  return (
    <div className="service-card video-card"> 
      <div className="card-image-container video-container">
        {/* Usamos un iframe para incrustar el video (ej. YouTube) */}
        <iframe
          width="100%"
          height="100%"
          src={videoEmbedUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="card-video"
        ></iframe>
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;