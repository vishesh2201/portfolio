import { useState, useEffect } from 'react';
import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import Button from '../components/Button.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import { UnsolvedCube } from '../components/UnsolvedCube.jsx';
import { SolvedCube } from '../components/SolvedCube.jsx';

const Hero = () => {
  // State to toggle between cubes
  const [showSolved, setShowSolved] = useState(false);

  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  const roles = ["Android Developer", "UI/UX Designer", "Frontend Developer", "3D Artist", "Problem Solver"];
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 50; // Typing speed
    const deletingSpeed = 25; // Deleting speed
    const delayBetweenRoles = 1500; // Delay before switching roles

    const currentRole = roles[roleIndex];

    if (!isDeleting && charIndex < currentRole.length) {
      // Typing effect
      setTimeout(() => {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      // Deleting effect
      setTimeout(() => {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (!isDeleting && charIndex === currentRole.length) {
      // Wait before deleting
      setTimeout(() => setIsDeleting(true), delayBetweenRoles);
    } else if (isDeleting && charIndex === 0) {
      // Move to next role
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="min-h-[90dvh] w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-30 mt-20 c-space gap-1">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          <span className="waving-hand">👋</span>{' '}Hey, I am 
        </p>
        <p className="hero_tag text-gray_gradient">{text}</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[30, 20, 40]} />

            <HeroCamera isMobile={isMobile}>
              {showSolved ? (
                <SolvedCube 
                  scale={sizes.cubeScale} 
                  position={sizes.cubePosition} 
                  rotation={[0, -Math.PI / 1.5, 0]} 
                />
              ) : (
                <UnsolvedCube 
                  scale={sizes.cubeScale} 
                  position={sizes.cubePosition} 
                  rotation={[0, -Math.PI / 1.5, 0]} 
                />
              )}
            </HeroCamera>

            <ambientLight intensity={3} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <directionalLight position={[-10, 10, 10]} intensity={1} />
            <directionalLight position={[-10, -10, 10]} intensity={1} />
            <directionalLight position={[-10, -10, -10]} intensity={1} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space flex justify-center">
        <button 
          onClick={() => setShowSolved((prev) => !prev)} 
          className="w-fit"
        >
          <Button 
            name={showSolved ? "Back to the challenge!" : "I'm a problem solver."} 
            isBeam 
            containerClass="sm:w-fit w-full sm:min-w-70" 
          />
        </button>
      </div>
    </section>
  );
};

export default Hero;