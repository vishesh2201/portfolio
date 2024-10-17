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

// Load the GLB model
const loader = new GLTFLoader();
loader.load('unsolved_cube.glb', (gltf) => {
  const model = gltf.scene;
  model.scale.set(1, 1, 1);
  model.position.set(0, 0, 0);
  scene.add(model);

  // Animation loop to rotate the cube
  function animate() {
    resizeRendererToDisplaySize(); // Resize the renderer and update camera aspect ratio on each frame
    model.rotation.y += 0.001;
    model.rotation.x += 0.001;
    controls.update(); // Required for damping effect on controls
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  animate();
}, undefined, function (error) {
  console.error('An error occurred loading the model: ', error);
});

// Resize event listener to handle resizing when window size changes
window.addEventListener('resize', () => {
  resizeRendererToDisplaySize(); // Call resize function on window resize
});
