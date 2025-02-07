import { useRef, useEffect } from 'react';
import { useGLTF, useVideoTexture } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const DemoIphone = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/iphone-11.glb');

  // Load video texture for the iPhone screen
  const txt = useVideoTexture(props.texture ? props.texture : '/textures/project/project1.mp4');

  useEffect(() => {
    if (txt) {
      txt.flipY = false; // Ensures correct orientation of the video texture
    }
  }, [txt]);

  // Animate iPhone appearing
  useGSAP(() => {
    gsap.from(group.current.rotation, {
      y: Math.PI / 2,
      duration: 1,
      ease: 'power3.out',
    });
  }, [txt]);

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Dark Grey Frame */}
      <mesh
        name="Frame"
        castShadow
        receiveShadow
        geometry={nodes.Frame.geometry}
        position={[0, -0.3, 0]}
        rotation={[0, -Math.PI / 2, 0]}>
        <meshStandardMaterial color={'#333333'} />
      </mesh>

      {/* iPhone Logo */}
      <mesh castShadow receiveShadow geometry={nodes.Logo.geometry} material={materials.Logo} />

      {/* iPhone Screen with Video Texture */}
      <mesh
        name="Screen"
        castShadow
        receiveShadow
        geometry={nodes.Screen.geometry}
        position={[0, -0.3, 0]}
        rotation={[0, -Math.PI / 2, 0]}>
        <meshBasicMaterial map={txt} toneMapped={false} />
      </mesh>
    </group>
  );
};

// Preload the model
useGLTF.preload('/models/iphone-11.glb');

export default DemoIphone;
