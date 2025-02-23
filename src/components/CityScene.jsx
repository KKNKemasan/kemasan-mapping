// src/components/CityScene.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Sky } from '@react-three/drei';
import Building from './Building';
import PinMap from './PinMap';
import objectsData from '../data/data';
import pinData from '../data/pin';
import Loading from './Loading';

const CityScene = ({ onObjectClick }) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={<Loading />}>
      <Sky sunPosition={[100, 20, 100]} />
        {pinData.map((object) => (
          <PinMap
            key={object.id}
            position={object.position}
            modelPath={object.modelPath}
            onClick={() => onObjectClick({ 
              name: object.name,
              description: object.description,
              youtube: object.youtube,
              whatsapp: object.whatsapp,
              facebook: object.facebook,
              instagram: object.instagram,
            })}
          />
        ))}

        {objectsData.map((object) => (
          <Building
            key={object.id}
            position={object.position}
            modelPath={object.modelPath}
          />
        ))}
      </Suspense>
      <OrbitControls
        enablePan={true} // Memungkinkan menggeser kamera
        enableZoom={true} // Memungkinkan zoom
        enableRotate={true} // Memungkinkan memutar kamera
        minDistance={-100} // Jarak zoom minimum
        maxDistance={1000} // Jarak zoom maksimum
      />
      <Environment preset="sunset" />
    </Canvas>
  );
};

export default CityScene;