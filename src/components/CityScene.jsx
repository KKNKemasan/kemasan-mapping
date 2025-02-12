// src/components/CityScene.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Sky } from '@react-three/drei';
import Building from './Building';
import PinMap from './PinMap';

const CityScene = ({ onObjectClick }) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 200], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
      <Sky sunPosition={[100, 20, 100]} />
        {/* kelurahan */}
        {/* <Building 
          position={[0, 0, 0]} 
          modelPath="/assets/models/kemasan-objects/kelurahan.glb"
        /> */}
        {/* Jalan */}
        <Building 
          position={[0, 0, 0]} 
          modelPath="/assets/models/kemasan-objects/road-kemasan.glb"
        />

        {/* Punden */}
        {/* <Building 
          position={[0, 0, 0]} 
          modelPath="/assets/models/kemasan-objects/punden.glb"
        /> */}

        {/* Ikan Cupang */}
        <PinMap 
          position={[0, 10, 0]} 
          modelPath="/assets/models/pin-ikan.glb"
          onClick={() => onObjectClick({ name: 'Pecut Samandiman ', description: 'Pecut Samandiman adalah salah satu UMKM yang berada di kelurahan Kemasan Kota Kediri yang menjual berbagai model pecut mulai ukuran 3 meter dan seterusnya. Pecut ini sangat direkomendasikan untuk kesenian tradisional jaranan.' })}
        />
        <Building 
          position={[0, 0, 0]} 
          modelPath="/assets/models/kemasan-objects/ikan.glb"
        />

        {/* rumah singgah */}
        {/* <Building 
          position={[0, 0, 0]} 
          modelPath="/assets/models/kemasan-objects/rumah-singgah.glb"
        /> */}
      </Suspense>
      <OrbitControls
        enablePan={true} // Memungkinkan menggeser kamera
        enableZoom={true} // Memungkinkan zoom
        enableRotate={true} // Memungkinkan memutar kamera
        minDistance={-100} // Jarak zoom minimum
        maxDistance={1000} // Jarak zoom maksimum
      />
      <Environment preset="city" />
    </Canvas>
  );
};

export default CityScene;