import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import Index from './Test/Index';
import './styles/index.css';

function AppTest() {
  return (
    <Canvas
      dpr={Math.max(window.devicePixelRatio, 2)}
      camera={{ position: [0, 3, 10], fov: 15 }}
      id='canvas'
      style={{ position: 'fixed' }}
    >
      <Index />
      <axesHelper args={[1]} />
      <OrbitControls />
    </Canvas>
  );
}

export default AppTest;
