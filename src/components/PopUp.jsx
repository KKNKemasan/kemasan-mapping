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
          <a href="">
            <img class="wa" src="/wa-icon.png" alt="" />
          </a>
          <a href="">
            <img class="fb" src="/fb-icon.png" alt="" />
          </a>
          <a href="">
            <img class="ig" src="/ig-icon.png" alt="" />
          </a>
          <a href="https://www.youtube.com/@bolangchannel_/videos">
            <img class="yt" src="/yt-icon.png" alt="" />
          </a>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;