import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

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

// Set up Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("canvas-container").appendChild(renderer.domElement);

// Load the 3D model
const loader = new GLTFLoader();
loader.load('./assets/models/solved_cube.glb', function(gltf) {
  const model = gltf.scene;
  model.scale.set(1.5, 1.5, 1.5); // Adjust the scale as needed
  scene.add(model);
  
  // Position the model
  model.position.set(0, 0, 0); // Adjust position as needed

  animate();
}, undefined, function(error) {
  console.error(error);
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  if (scene.children.length > 0) {
    const model = scene.children[0]; // Assuming the model is the first child
    model.rotation.y += 0.01; // Rotate the model
  }
  renderer.render(scene, camera);
}

// Handle window resizing
window.addEventListener('resize', function() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start typing animation
document.addEventListener("DOMContentLoaded", () => setTimeout(type, typingSpeed));
