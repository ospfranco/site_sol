// import './style.css';
import * as THREE from '/three.module.js';
// import \* as THREE from './vendor/three/build/three.module.js';
// import { OrbitControls } from '/three/examples/jsm/controls/OrbitControls';
// Scene = container
console.log("Lodaded!");
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  alpha: true
});
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(50);

renderer.render( scene, camera );

// ------ adding elements ------
const geometry = new THREE.SphereGeometry( 10, 32, 16 );
const material = new THREE.MeshBasicMaterial( { color: 0xa3a3a3, wireframe: true } );
const torus = new THREE.Mesh (geometry, material);

// scene.add(torus);

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5,5,5)

const ambientLight = new THREE.AmbientLight(0xa3a3a3);
scene.add(pointLight, ambientLight)

// const lightHelper = new THREE.PointLightHelper(pointLight);
// scene.add(lightHelper);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 12, 12);
  const material = new THREE.MeshStandardMaterial({ color: 0xa3a3a3 });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}
torus.position.z = 30;
Array(250).fill().forEach(addStar);

function moveCamera() {
  const t = document.body.getBoundingClientRect().top; 
  camera.position.z = t * 0.005;
  // camera.position.x = t * -0.002;
  // camera.rotation.y = t * -0.002;
}
document.body.onscroll = moveCamera;
moveCamera();
const rotSpeed = 0.001;
// const controls = new OrbitControls(camera, renderer.domElement);
// Animation
function animate() {
  // Rotate and change saturation lightness of each star
  // for (let k = 0; k < stars.length; k++) {
  //   let star = stars[k];
  //   star.rotation.x += 0.01;
  //   star.rotation.y += 0.01;
  //   lightness > 100 ? lightness = 0 : lightness++;
  //   star.material.color = new THREE.Color("hsl(255, 100%, " + lightness + "%)");
  // }

  // Rotation
  // let x = camera.position.x;
  // let z = camera.position.z;
  // camera.position.x = x * Math.cos(rotSpeed) + z * Math.sin(rotSpeed);
  // camera.position.z = z * Math.cos(rotSpeed) - x * Math.sin(rotSpeed);
  // camera.lookAt(scene.position);

  requestAnimationFrame( animate );
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;
  renderer.render( scene, camera );
}

animate();