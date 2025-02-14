// src/components/CustomCameraControls.js
import React, { useRef, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

const CustomCameraControls = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef({
    isDragging: false,
    startX: 0,
    startY: 0,
    startCameraPosition: new Vector3(),
  });

  const [zoomLevel, setZoomLevel] = useState(1);

  // Handle mouse down (start dragging)
  const handleMouseDown = (event) => {
    controlsRef.current.isDragging = true;
    controlsRef.current.startX = event.clientX;
    controlsRef.current.startY = event.clientY;
    controlsRef.current.startCameraPosition.copy(camera.position);
  };

  // Handle mouse up (stop dragging)
  const handleMouseUp = () => {
    controlsRef.current.isDragging = false;
  };

  // Handle mouse move (dragging)
  const handleMouseMove = (event) => {
    if (controlsRef.current.isDragging) {
      const deltaX = event.clientX - controlsRef.current.startX;
      const deltaY = event.clientY - controlsRef.current.startY;

      // Geser kamera berdasarkan pergerakan mouse
      camera.position.x = controlsRef.current.startCameraPosition.x - deltaX * 0.1;
      camera.position.y = controlsRef.current.startCameraPosition.y + deltaY * 0.1;
    }
  };

  // Handle mouse wheel (zoom)
  const handleWheel = (event) => {
    const delta = event.deltaY * 0.01;
    const newZoomLevel = Math.min(Math.max(zoomLevel + delta, 0.5), 2); // Batasi zoom level

    setZoomLevel(newZoomLevel);

    // Atur posisi kamera berdasarkan zoom level
    if (newZoomLevel > 1) {
      // Zoom in: kamera bergerak dari samping
      camera.position.set(100 * newZoomLevel, 50 * newZoomLevel, 100 * newZoomLevel);
    } else {
      // Zoom out: kamera bergerak ke atas (top-down view)
      camera.position.set(0, 200 * (2 - newZoomLevel), 0);
    }
  };

  // Attach event listeners
  React.useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('wheel', handleWheel);

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('wheel', handleWheel);
    };
  }, [gl, zoomLevel]);

  return null;
};

export default CustomCameraControls;