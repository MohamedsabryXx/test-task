import React from 'react';

function Index() {
  return (
    <group>
      <mesh position={[-1, 0, -5]} rotation={[0, 0, 0]}>
        <boxGeometry />
        <meshBasicMaterial color={'red'} wireframe />
      </mesh>
    </group>
  );
}

export default Index;
