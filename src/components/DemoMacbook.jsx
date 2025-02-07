import { useRef, useEffect } from 'react';
import { useGLTF, useAnimations, useVideoTexture } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const DemoMacbook = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/macbook-pro.glb');

  // Load video texture for the MacBook screen
  const txt = useVideoTexture(props.texture ? props.texture : '/textures/project/project1.mp4');

  useEffect(() => {
    if (txt) {
      txt.flipY = false; // Ensures correct orientation of the video texture
    }
  }, [txt]);

  // Animate MacBook appearing
  useGSAP(() => {
    gsap.from(group.current.rotation, {
      y: Math.PI / 2,
      duration: 1,
      ease: 'power3.out',
    });
  }, [txt]);

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="Frame"
        castShadow
        receiveShadow
        geometry={nodes.Frame.geometry}
        material={materials.Frame}
        position={[0, -0.62, 0.047]}>
        
        {/* Dark Grey Frame */}
        <meshStandardMaterial color={'#333333'} />

        {/* Grouping Keyboard, Body, and Touchbar Together */}
        <group position={[0, 0.61, -0.05]}>
            <mesh castShadow receiveShadow geometry={nodes.Keyboard.geometry}>
            <meshStandardMaterial color={'#333333'} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.Body.geometry}>
            <meshStandardMaterial color={'#333333'} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.Touchbar.geometry}>
            <meshStandardMaterial color={'#333333'} />
            </mesh>
        </group>
        
        {/* MacBook Logo */}
        <mesh
          name="Logo"
          castShadow
          receiveShadow
          geometry={nodes.Logo.geometry}
          material={materials.Logo}
          position={[0, 1.2, -0.106]}
        />

        {/* MacBook Screen with Video Texture */}
        <mesh
          name="Screen"
          castShadow
          receiveShadow
          geometry={nodes.Screen.geometry}
          material={materials.Screen}
          position={[0, 1.2, -0.106]}>
          <meshBasicMaterial map={txt} toneMapped={false} />
        </mesh>
      </mesh>
    </group>
  );
};

// Preload the new model
useGLTF.preload('/models/macbook-pro.glb');

export default DemoMacbook;
