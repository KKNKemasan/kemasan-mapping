// src/components/Loading.jsx
import React from 'react';
import { Html } from '@react-three/drei';

const Loading = () => {
  return (
    <Html center>
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Load Map...</p>
      </div>
    </Html>
  );
};

export default Loading;