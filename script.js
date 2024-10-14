function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const dynamicText = document.getElementById("dynamic-text");
const roles = ["Android Developer", "UI/UX Designer", "Frontend Developer", "Video Editor"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 50;
const deletingSpeed = 25;
const delayBetweenRoles = 1000;

function type() {
  const currentRole = roles[roleIndex];

  // Update the text content and wrap the caret with a span for blinking
  if (isDeleting) {
    dynamicText.innerHTML = currentRole.substring(0, charIndex - 1) + '<span class="blinking-caret">|</span>';
    charIndex--;
  } else {
    dynamicText.innerHTML = currentRole.substring(0, charIndex + 1) + '<span class="blinking-caret">|</span>';
    charIndex++;
  }

  // When the role is fully typed and waiting to be deleted
  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    setTimeout(type, delayBetweenRoles);
  }
  // When the role is fully deleted and moving to the next
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
  }
}

import * as THREE from '/node_modules/three/build/three.module.js';
import { GLTFLoader } from '/node_modules/three/examples/jsm/loaders/GLTFLoader.js';

const canvas = document.getElementById('canvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load the 3D model
const loader = new GLTFLoader();
loader.load('./assets/solved_cube.glb', (gltf) => {
    scene.add(gltf.scene);
    // Optional: Set the initial position and scale of the model
    gltf.scene.position.set(0, 0, 0); // Adjust the position as needed
    gltf.scene.scale.set(1, 1, 1); // Adjust the scale as needed
}, undefined, (error) => {
    console.error(error);
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

