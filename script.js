// HAMBURGER MENU FUNCTIONALITY
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// DYNAMIC TEXT FUNCTIONALITY
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


// THREE.JS 3D RUBIK'S CUBE FUNCTIONALITY
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

let scene, camera, renderer, cube;

function init3D() {
  const canvasContainer = document.querySelector('.section__pic-container');

  // Scene
  scene = new THREE.Scene();

  // Camera
  camera = new THREE.PerspectiveCamera(75, canvasContainer.clientWidth / canvasContainer.clientHeight, 0.1, 1000);
  camera.position.set(0, 1.5, 2.5); // Adjust camera position as needed

  // Renderer
  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
  canvasContainer.appendChild(renderer.domElement);

  // Lighting
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 10, 7.5);
  scene.add(light);

  // GLTF Loader to load the Rubik's cube model
  const loader = new GLTFLoader();
  loader.load('./assets/solved_cube', function (gltf) {
    cube = gltf.scene;
    cube.scale.set(1.5, 1.5, 1.5); // Adjust cube size
    cube.rotation.set(0.5, 0.5, 0); // Adjust initial rotation
    scene.add(cube);
    animate();
  }, undefined, function (error) {
    console.error('An error occurred while loading the 3D model:', error);
  });
}

// Animation Loop for Rotation
function animate() {
  requestAnimationFrame(animate);

  if (cube) {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  }

  renderer.render(scene, camera);
}

// Handle Window Resize
window.addEventListener('resize', () => {
  const canvasContainer = document.querySelector('.section__pic-container');
  camera.aspect = canvasContainer.clientWidth / canvasContainer.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
});

// Initialize Three.js 3D cube when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", init3D);
