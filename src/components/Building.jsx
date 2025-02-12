// src/components/Building.jsx
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Building = ({ modelPath, position, onClick }) => {
  const { scene } = useGLTF(modelPath);
  const ref = useRef();

  return (
    <primitive
      object={scene}
      position={position}
      ref={ref}
      onClick={(e) => {
        e.stopPropagation(); // Menghentikan event bubbling
        onClick();
      }}
    />
  );
};

export default Building;