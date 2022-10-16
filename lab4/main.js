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

  //globe with grass texture
  /*
  const globe = new THREE.SphereGeometry(1, 32, 32);
  const globeMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  globeMaterial.map = loader.load('./textures/grass2.jpg');
  const cube = new THREE.Mesh( globe, globeMaterial );
  scene.add( cube );
  */

  //house 
  const wallsGeometry = new THREE.BoxGeometry(1, 1, 1);
  const wallsMaterial = new THREE.MeshBasicMaterial( { color: 0xFFF000 } );
  wallsMaterial.map = loader.load('./textures/brick.avif');
  const walls = new THREE.Mesh( wallsGeometry, wallsMaterial );
  scene.add( walls );

  const roofGeometry = new THREE.ConeGeometry(0.75, 0.75, 4);
  const roofMaterial = new THREE.MeshBasicMaterial( { color: 'grey' } );
  roofMaterial.map = loader.load('./textures/roof.avif');
  const roof = new THREE.Mesh( roofGeometry, roofMaterial );
  roof.position.y = 0.85;
  roof.position.z = 0;
  roof.rotateY( Math.PI * 0.25 )
  scene.add( roof );

  const doorGeometry = new THREE.BoxGeometry(0.2, 0.4, 0.05);
  const doorMaterial = new THREE.MeshBasicMaterial( { color: 'blue' } );
  const door = new THREE.Mesh( doorGeometry, doorMaterial );
  door.position.y = -0.3;
  door.position.z = 0.5;
  scene.add( door );


  camera.position.z = 5;


  function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
  };
  
  animate();
