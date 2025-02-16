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
          {selectedObject.youtube?.link && (
            <a href={selectedObject.youtube.link} target="_blank" rel="noopener noreferrer">
              <img className="yt" src={selectedObject.youtube.image} alt="Youtube" />
            </a>
          )}
          {selectedObject.whatsapp?.link && (
            <a href={selectedObject.whatsapp.link} target="_blank" rel="noopener noreferrer">
              <img className="wa" src={selectedObject.whatsapp.image} alt="Whatsapp" />
            </a>
          )}
          {selectedObject.facebook?.link && (
            <a href={selectedObject.facebook.link} target="_blank" rel="noopener noreferrer">
              <img className="fb" src={selectedObject.facebook.image} alt="Facebook" />
            </a>
          )}
          {selectedObject.instagram?.link && (
            <a href={selectedObject.instagram.link} target="_blank" rel="noopener noreferrer">
              <img className="ig" src={selectedObject.instagram.image} alt="Instagram" />
            </a>
          )}
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
