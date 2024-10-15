import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; // Import OrbitControls

// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff); // Set background to white

// Camera setup: Simulate a 100mm lens with FOV ~ 20 degrees
const fov = 20; // FOV for a 100mm lens on a full-frame sensor
const aspectRatio = window.innerWidth/2 / window.innerHeight;
const camera = new THREE.PerspectiveCamera(fov, aspectRatio, 0.1, 1000);
camera.position.set(0, 0, 15); // Camera positioned slightly further back

// Renderer setup
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('cube-canvas'), antialias: true });
renderer.setSize(window.innerWidth / 4, window.innerHeight/2);
renderer.setPixelRatio(window.devicePixelRatio);

// Add lights for even illumination
const ambientLight = new THREE.AmbientLight(0xffffff, 5); // Soft light across the scene
scene.add(ambientLight);

// Use a Directional Light for better highlights
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
directionalLight.position.set(5, 10, 7).normalize(); // Position the light
scene.add(directionalLight);

// Additional Point Light for more depth
const pointLight = new THREE.PointLight(0xffffff, 0.5); // Additional light to enhance depth
pointLight.position.set(-10, -10, 10);
scene.add(pointLight);

// OrbitControls to allow user interaction
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Smooth rotation for controls
controls.dampingFactor = 0.05;
controls.enableZoom = false;
controls.minDistance = 5; // Minimum zoom distance
controls.maxDistance = 50; // Maximum zoom distance

// Load the GLB model
const loader = new GLTFLoader();
loader.load('/src/assets/unsolved_cube.glb', (gltf) => {
  const model = gltf.scene;
  model.scale.set(1, 1, 1); // Set scale to 1
  model.position.set(0, 0, 0); // Set initial position
  scene.add(model);

  // Animation loop to rotate the cube
  function animate() {
    requestAnimationFrame(animate);
    model.rotation.y += 0.001; // Rotate horizontally
    model.rotation.x += 0.001; // Rotate vertically
    controls.update(); // Required for damping effect on controls
    renderer.render(scene, camera);
  }

  animate();
}, undefined, function (error) {
  console.error('An error occurred loading the model: ', error);
});

window.addEventListener('resize', () => {
  // Get the canvas element
  const canvasContainer = document.querySelector('#cube-canvas');
  
  // Get new dimensions based on the container
  const width = canvasContainer.clientWidth;
  const height = canvasContainer.clientHeight;

  // Update renderer size to fit the canvas container
  renderer.setSize(width, height);
  
  // Adjust camera aspect ratio and update projection matrix
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});
