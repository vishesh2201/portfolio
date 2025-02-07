import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export function UnsolvedCube(props) {
  const { nodes, materials } = useGLTF('/models//unsolved.glb')
  const groupRef = useRef(); // Reference for rotation
  
    // Rotate the cube on the Y-axis every frame
    useFrame(() => {
      if (groupRef.current) {
        groupRef.current.rotation.y += 0.005; // Adjust speed if needed
      }
    });

  return (
    <group ref={groupRef} {...props} position={[0, -3, 0]} dispose={null}>
      <group scale={40}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_020_1.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_020_2.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_020_3.geometry}
          material={materials.Blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_020_4.geometry}
          material={materials.Green}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_020_5.geometry}
          material={materials.Orange}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_020_6.geometry}
          material={materials.Yellow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_020_7.geometry}
          material={materials.Red}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/unsolved.glb')
