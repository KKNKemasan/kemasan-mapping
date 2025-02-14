// src/components/Building.jsx
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Building = ({ modelPath, position }) => {
  const { scene } = useGLTF(modelPath);
  const ref = useRef();

  return (
    <primitive
      object={scene}
      position={position}
      ref={ref}
    />
  );
};

export default Building;