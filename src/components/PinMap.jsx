// src/components/Building.jsx
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const PinMap = ({ modelPath, position, onClick }) => {
  const { scene } = useGLTF(modelPath);
  const ref = useRef();

  // Animasi floating (naik turun)
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 5;
      ref.current.rotation.y += delta * 0.5; 
    }
  });

  return (
    <primitive
      object={scene}
      position={position}
      ref={ref}
      onClick={(e) => {
        e.stopPropagation(); // Menghentikan event bubbling
        if (onClick) onClick();
      }}
    />
  );
};

export default PinMap;