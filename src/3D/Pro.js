import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { GUI } from 'dat.gui';

export function Pro(props) {
  const { nodes, materials } = useGLTF('/Pro.glb');
  const lightsRef = useRef();
  const macRef = useRef();
  const gui = new GUI();
  useThree(({ camera }) => {
    if (lightsRef.current && macRef.current) {
      lightsRef.current.position.copy(camera.position);
      lightsRef.current.position.y = 28;
      lightsRef.current.position.z = -22;
    }
  });

  useEffect(() => {
    const lights = gui.addFolder('Lights');
    lights.add(lightsRef.current.position, 'x', -30, 30).step(2);
    lights.add(lightsRef.current.position, 'y', -30, 30).step(2);
    lights.add(lightsRef.current.position, 'z', -30, 30).step(2);
  }, [lightsRef]);

  return (
    <group {...props} dispose={null}>
      <group ref={macRef}>
        <group position={[0, 0.15, -0.6]} rotation={[-1.41, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane022.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane022_1.geometry}
            material={materials['Glossy Black']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane022_2.geometry}
            material={materials.Grey}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane022_3.geometry}
            material={materials['Camera 1']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane022_4.geometry}
            material={materials['Camera 2']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane022_5.geometry}
            material={materials.Wallpaper}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials.Metal}
          position={[-1.32, 0.13, -0.56]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006.geometry}
          material={materials.Black}
          position={[0, 0.13, -0.57]}
          scale={[1, 1, 0.04]}
        />
        <group position={[0, 0.01, 0.79]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle009.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle009_1.geometry}
            material={materials.Black}
          />
        </group>
        <group position={[0.03, 0.17, 0.26]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane005_1.geometry}
            material={materials['Keyboard layout']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane005_2.geometry}
            material={materials.Black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane005_3.geometry}
            material={materials['Glossy Black']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane005_4.geometry}
            material={materials.Emission}
          />
        </group>
        <group position={[0, 0.17, 0.3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane028.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane028_1.geometry}
            material={materials.Black}
          />
        </group>
        <group
          position={[-1.82, 0.13, -0.01]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={1.38}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane011.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane011_1.geometry}
            material={materials.Black}
          />
        </group>
        <group
          position={[-1.82, 0.13, 0.13]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={1.38}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane023.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane023_1.geometry}
            material={materials.Black}
          />
        </group>
        <group
          position={[1.82, 0.13, -0.01]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={1.44}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane026.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane026_1.geometry}
            material={materials.Black}
          />
        </group>
        <group
          position={[-1.83, 0.13, -0.18]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[1.11, 1.11, 1.26]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle003.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle003_1.geometry}
            material={materials.Black}
          />
        </group>
        <group
          position={[1.82, 0.12, -0.21]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[1.07, 0.98, 1.07]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_1.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_2.geometry}
            material={materials.Black}
          />
        </group>
        <group
          position={[1.82, 0.13, 0.24]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={1.44}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane029.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane029_1.geometry}
            material={materials.Black}
          />
        </group>
        <group
          position={[-1.82, 0.13, 0.26]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.02}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_1.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_2.geometry}
            material={materials.Black}
          />
        </group>
      </group>
      <group ref={lightsRef}>
        <ambientLight intensity={0.5} color={0xffff} />
        <spotLight color={0xffff} intensity={1} />
        <directionalLight color={0xff0000} intensity={1} />
      </group>
    </group>
  );
}

useGLTF.preload('/Pro.glb');
