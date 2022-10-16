import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  //orbit controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  //add sphere
  const sphereGeometry = new THREE.SphereGeometry(100, 32, 32);
  const sphereMaterial = new THREE.MeshStandardMaterial({color: 0xffffff});
  //materiaal aan binnekant van bol weergeven zodat je precies in een wereld zit (geen zwarte achtergrond)
  sphereMaterial.side = THREE.BackSide;
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  scene.add(sphere);


  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  camera.position.z = 5;


  renderer.render( scene, camera );
