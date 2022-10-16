import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  //orbit controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  //loader
  const loader = new THREE.TextureLoader();


  const globe = new THREE.SphereGeometry(1, 32, 32);
  const globeMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  globeMaterial.map = loader.load('./textures/grass2.jpg');
  const cube = new THREE.Mesh( globe, globeMaterial );
  scene.add( cube );

  camera.position.z = 5;


  function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
  };
  
  animate();
