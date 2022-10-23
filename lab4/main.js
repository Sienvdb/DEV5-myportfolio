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

  //ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  //directional light
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(0, 1, 0);
  scene.add(directionalLight);

  //loader
  const loader = new THREE.TextureLoader();

  //globe sky
  const skyGeometry = new THREE.SphereGeometry(500, 32, 32);
  const skyMaterial = new THREE.MeshBasicMaterial({
    map: loader.load('./textures/sky.jpg'),
    side: THREE.BackSide
  });
  const sky = new THREE.Mesh(skyGeometry, skyMaterial);
  scene.add(sky);

  //globe with grass texture
  const globe = new THREE.SphereGeometry(20, 32, 32);
  const globeMaterial = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
  globeMaterial.map = loader.load('./textures/grass3.jpg');
  const cube = new THREE.Mesh( globe, globeMaterial );
  cube.position.y = -20.5;
  cube.rotateZ( Math.PI * 0.5 )
  scene.add( cube );

  //house 
  const wallsGeometry = new THREE.BoxGeometry(1, 1, 1);
  const wallsMaterial = new THREE.MeshLambertMaterial( { color: 'white' } );
  wallsMaterial.map = loader.load('./textures/brick.avif');
  const walls = new THREE.Mesh( wallsGeometry, wallsMaterial );
  scene.add( walls );

  const wallsInsideGeometry = new THREE.BoxGeometry(1, 1, 1);
  const wallsInsideMaterial = new THREE.MeshLambertMaterial( { color: 'white' } );
  wallsInsideMaterial.map = loader.load('./textures/brick.avif');
  wallsInsideMaterial.side = THREE.BackSide;
  const wallsInside = new THREE.Mesh( wallsInsideGeometry, wallsInsideMaterial );
  scene.add( wallsInside );

  const roofGeometry = new THREE.ConeGeometry(0.75, 0.75, 4);
  const roofMaterial = new THREE.MeshLambertMaterial( { color: 'white' } );
  roofMaterial.map = loader.load('./textures/roof.avif');
  const roof = new THREE.Mesh( roofGeometry, roofMaterial );
  roof.position.y = 0.85;
  roof.position.z = 0;
  roof.rotateY( Math.PI * 0.25 )
  scene.add( roof );

  const doorGeometry = new THREE.BoxGeometry(0.2, 0.4, 0.05);
  const doorMaterial = new THREE.MeshLambertMaterial( { color: 'blue' } );
  const door = new THREE.Mesh( doorGeometry, doorMaterial );
  door.position.y = -0.3;
  door.position.z = 0.5;
  door.position.x = 0.3;
  scene.add( door );

  const _windowGeometry = new THREE.BoxGeometry(0.5, 0.3, 0.05);
  const _windowMaterial = new THREE.MeshLambertMaterial( { color: '#0077C3' } );
  const _window = new THREE.Mesh( _windowGeometry, _windowMaterial );
  _window.position.y = 0.2;
  _window.position.z = 0.5;
  _window.position.x = -0.1;
  scene.add( _window );

  const mailboxGeometry = new THREE.BoxGeometry(0.15, 0.05, 0.05);
  const mailboxMaterial = new THREE.MeshLambertMaterial( { color: 'white' } );
  mailboxMaterial.map = loader.load('./photos/name.png');
  const mailbox = new THREE.Mesh( mailboxGeometry, mailboxMaterial );
  mailbox.position.y = -0.35;
  mailbox.position.z = 0.5;
  mailbox.position.x = 0.3;
  scene.add( mailbox );

  //load GLTF (butterfly)
  let butterfly;
  const gltfLoader = new GLTFLoader();
  gltfLoader.load('./models/scene.gltf', (gltf) => {
    console.log(gltf);
    gltf.scene.scale.set(0.001, 0.001, 0.001); 
    butterfly = gltf.scene;
    scene.add(gltf.scene);
  });
  camera.position.z = 5;


  function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
  };
  
  animate();
