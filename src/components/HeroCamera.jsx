import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';

const HeroCamera = ({ children }) => {
  const group = useRef();

  return (
    <group ref={group}>
      {children}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.7}
        dampingFactor={0.07}
        minPolarAngle={Math.PI / 3} // Prevents extreme up/down rotation
        maxPolarAngle={Math.PI / 1.5} // Keeps rotation within a natural range
      />

    </group>
  );
};

export default HeroCamera;
