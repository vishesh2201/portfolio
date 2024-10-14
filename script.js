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

document.addEventListener("DOMContentLoaded", () => setTimeout(type, typingSpeed));

// Three.js Setup for 3D Rubik's Cube
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

let scene, camera, renderer, cube;

function init() {
  // Create the scene
  scene = new THREE.Scene();
  
  // Create a camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // Create a renderer
  renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('rubiks-cube-canvas') });
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  // Add ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  
  // Add directional light
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  scene.add(directionalLight);

  // Load the Rubik's cube model
  const loader = new GLTFLoader();
  loader.load('./assets/solved_cube.glb', (gltf) => {
    cube = gltf.scene;
    scene.add(cube);
  });

  // Handle window resize
  window.addEventListener('resize', onWindowResize);
  
  // Start the animation loop
  animate();
}

function animate() {
  requestAnimationFrame(animate);
  
  // Rotate the cube for interaction
  if (cube) {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  }
  
  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// Initialize the Three.js scene
init();
