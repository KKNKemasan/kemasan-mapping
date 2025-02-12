// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CityScene from './components/CityScene';
import Popup from './components/PopUp';

function App() {
  const [selectedObject, setSelectedObject] = useState(null);

  const handleObjectClick = (object) => {
    setSelectedObject(object);
  };

  const handleClosePopup = () => {
    setSelectedObject(null);
  };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Navbar />
      <CityScene onObjectClick={handleObjectClick} />
      {selectedObject && (
        <Popup selectedObject={selectedObject} onClose={handleClosePopup} />
      )}
    </div>
  );
}

export default App;