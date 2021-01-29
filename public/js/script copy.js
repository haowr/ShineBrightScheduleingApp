var container, stats, controls, mixer, clock, currentlyAnimating, raycaster;
var camera, scene, renderer;

init();
animate();

function init() {
	const backgroundColor = 0xf1f1f1;


	container = document.createElement( 'div' );

	document.body.appendChild( container );

	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 20 );

	camera.position.set( - 1.8, 0.9, 2.7 );

	scene = new THREE.Scene();

	scene.fog = new THREE.Fog(backgroundColor, 60, 100);

	clock = new THREE.Clock();
	currentlyAnimating = false;
	raycaster = new THREE.Raycaster()

	var ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
	scene.add( ambientLight );

	var pointLight = new THREE.PointLight( 0xffffff, 0.8 );
	camera.add( pointLight );
	scene.add( camera );

	var loader = new THREE.GLTFLoader().setPath( 'little_girl/' );
	loader.load( 'scene.gltf', function ( gltf ) {

        gltf.scene.scale.set(.3,.3,.3)
		mixer = new THREE.AnimationMixer( gltf.scene );
		var action = mixer.clipAction( gltf.animations[ 0 ] );
		action.play();
	  gltf.scene.position.set(0,-1,0)
	  console.log(gltf.scene)

        scene.add( gltf.scene );


	} );

	renderer = new THREE.WebGLRenderer( { antialias: true, alpha:true } );
	renderer.shadowMap.enabled = true;

	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.gammaOutput = true;
	container.appendChild( renderer.domElement );

	controls = new THREE.OrbitControls( camera, renderer.domElement );
	controls.target.set( 0, - 0.2, - 0.2 );
	controls.maxPolarAngle = Math.PI / 2;
	controls.minPolarAngle = Math.PI / 3;
	controls.enablePan = false;
	controls.noPan = true;


	controls.update();

	window.addEventListener( 'resize', onWindowResize, false );

 console.log(renderer.domElement)

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

//

function animate() {

	requestAnimationFrame( animate );

	var delta = clock.getDelta();

	if ( mixer ) mixer.update( delta );

	renderer.render( scene, camera );

	//stats.update();

}