import * as THREE from "../node_modules/three/build/three.module.js";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; // Import OrbitControls

// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff); // Set background to white

// Camera setup: Simulate a 100mm lens with FOV ~ 20 degrees
const fov = 20; // FOV for a 100mm lens on a full-frame sensor
const aspectRatio = window.innerWidth / window.innerHeight; // Initial aspect ratio based on window
const camera = new THREE.PerspectiveCamera(fov, aspectRatio, 0.1, 1000);
camera.position.set(0, 0, 15); // Camera positioned slightly further back

// Canvas and Renderer setup
const canvas = document.getElementById('cube-canvas');
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);

// Adjust renderer size and camera aspect ratio dynamically
function resizeRendererToDisplaySize() {
  const canvasContainer = document.querySelector('#cube-canvas');
  const width = canvasContainer.clientWidth;
  const height = canvasContainer.clientHeight;

  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
}

// Add lights for even illumination
const ambientLight = new THREE.AmbientLight(0xffffff, 5); // Soft light across the scene
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
directionalLight.position.set(5, 10, 7).normalize();
scene.add(directionalLight);

const pointLight = new THREE.PointLight(0xffffff, 0.5);
pointLight.position.set(-10, -10, 10);
scene.add(pointLight);

// OrbitControls to allow user interaction
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Smooth rotation for controls
controls.dampingFactor = 0.05;
controls.enableZoom = false;
controls.minDistance = 5;
controls.maxDistance = 50;

// Variable to keep track of the current model
let currentModel;
const loader = new GLTFLoader();

// Function to load and animate models
function loadModel(url, animate = true) {
  loader.load(url, (gltf) => {
    if (currentModel) {
      if (animate) {
        // Animate the old model out (scale down and fade out)
        animateOut(currentModel, () => {
          scene.remove(currentModel); // Remove after animation
          addModel(gltf.scene); // Add the new model after the old one is gone
        });
      } else {
        scene.remove(currentModel); // Just remove without animation
        addModel(gltf.scene); // Add the new model immediately
      }
    } else {
      addModel(gltf.scene);
    }
  }, undefined, function (error) {
    console.error('An error occurred loading the model: ', error);
  });
}

// Add the model to the scene and animate it in
function addModel(model) {
  currentModel = model;
  currentModel.scale.set(0, 0, 0); // Start small for animation
  currentModel.position.set(0, 0, 0);
  scene.add(currentModel);

  // Animate the new model in (scale up and rotate)
  animateIn(currentModel);
}

// Animation for scaling the new model in (faster version)
function animateIn(model) {
  const duration = 1000; // Faster animation: 250ms duration
  const targetScale = { x: 1, y: 1, z: 1 };

  let startTime = Date.now();
  function animate() {
    let elapsedTime = Date.now() - startTime;
    let progress = Math.min(elapsedTime / duration, 1);

    // Scale and rotation based on progress
    model.scale.set(progress, progress, progress);
    model.rotation.y += 0.1; // Faster rotation while scaling in

    if (progress < 1) {
      requestAnimationFrame(animate); // Continue animation until finished
    }
  }
  animate();
}

// Animation for scaling the old model out (faster version)
function animateOut(model, onComplete) {
  const duration = 1000; // Faster animation: 250ms duration
  let startTime = Date.now();

  function animate() {
    let elapsedTime = Date.now() - startTime;
    let progress = Math.min(elapsedTime / duration, 1);

    // Scale down
    let scale = 1 - progress;
    model.scale.set(scale, scale, scale);
    model.rotation.y += 0.1; // Faster rotation while scaling down

    if (progress < 1) {
      requestAnimationFrame(animate); // Continue animation
    } else if (onComplete) {
      onComplete(); // Call callback once animation finishes
    }
  }
  animate();
}

// Initial load of the unsolved cube
loadModel('unsolved_cube.glb', false); // No animation on first load

// Animation loop
function animate() {
  resizeRendererToDisplaySize(); // Resize the renderer and update camera aspect ratio on each frame
  if (currentModel) {
    currentModel.rotation.y += 0.002; // Faster rotation for the model
    currentModel.rotation.x += 0.002;
  }
  controls.update(); // Required for damping effect on controls
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();

// Event listener for the "solve the cube" button
document.getElementById('solve-button').addEventListener('click', () => {
  loadModel('solved_cube.glb'); // Load solved cube with animation
});

// Resize event listener to handle resizing when window size changes
window.addEventListener('resize', () => {
  resizeRendererToDisplaySize(); // Call resize function on window resize
});
