/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Floor(props) {
  const { nodes, materials } = useGLTF('/newfloor.glb');
  return (
    <group
      {...props}
      dispose={null}
      position={[0, 0, 0]}
      scale={[10, 5, 40]}
      ref={(e) => {
        e.children.forEach((element) => {
          element.geometry.center();
        });
      }}
    >
      <mesh geometry={nodes.Cube.geometry} material={nodes.Cube.material} />
    </group>
  );
}

useGLTF.preload('/newfloor.glb');
