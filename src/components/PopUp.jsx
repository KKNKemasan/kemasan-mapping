// src/components/Popup.jsx
import React from 'react';
import '../style.css';

const Popup = ({ selectedObject, onClose }) => {
  if (!selectedObject) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>{selectedObject.name}</h2>
        <p>{selectedObject.description}</p>

        <div className="sosmed">
          <a href={selectedObject.youtube.link}>
            <img className="yt" src={selectedObject.youtube.image} alt="Youtube" />
          </a>
          <a href={selectedObject.whatsapp.link}>
            <img className="wa" src={selectedObject.whatsapp.image} alt="Whatsapp" />
          </a>
          <a href={selectedObject.facebook.link}>
            <img className="fb" src={selectedObject.facebook.image} alt="Facebook" />
          </a>
          <a href={selectedObject.instagram.link}>
            <img className="ig" src={selectedObject.instagram.image} alt="Instagram" />
          </a>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;