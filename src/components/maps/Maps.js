import React from 'react';
import './Maps.css';

const Maps = () => {
  return (
    <div className="map-wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.2868604084513!2d-70.62540812396604!3d-33.428832497223566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI1JzQzLjgiUyA3MMKwMzcnMjUuMiJX!5e0!3m2!1ses!2sar!4v1627309846055!5m2!1ses!2sar"
        width="100%"
        height="400"
        style={{ border: 0, borderRadius: "15px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación de Duo Mecánico"
      ></iframe>
    </div>
  );
};

export default Maps; 