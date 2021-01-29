var container, stats, controls, mixer, mixer2, clock,clock2,action, currentlyAnimating, raycaster, action2;
var camera, scene, renderer;

init();
animate2();
//animate()

function init() {
	const backgroundColor = 0xf1f1f1;


	container = document.createElement( 'div' );

	document.body.appendChild( container );

	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 20 );

	camera.position.set( - 1.8, 0.9, 2.7 );

	scene = new THREE.Scene();

	scene.fog = new THREE.Fog(backgroundColor, 60, 100);

	clock = new THREE.Clock();
	clock2 = new THREE.Clock();

	currentlyAnimating = false;
	raycaster = new THREE.Raycaster()

	var ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
	scene.add( ambientLight );

	var pointLight = new THREE.PointLight( 0xffffff, 0.8 );
	camera.add( pointLight );
	scene.add( camera );

	
	var loader = new THREE.GLTFLoader().setPath( 'little_girl/' );

	loader.load( 'scene.gltf', function ( gltf ) {

		model = gltf.scene
		let fileAnimations = gltf.animations;
		model.traverse(o => {

			if (o.isMesh) {
			  o.castShadow = true;
			  o.receiveShadow = true;
			}
			// Reference the neck and waist bones
			if (o.isBone && o.name === 'Head_Chica') { 
			  neck = o;
			}
			if (o.isBone && o.name === 'HairR002_Chica') { 
			  waist = o;
			}
		  });

        gltf.scene.scale.set(.3,.3,.3)
		mixer = new THREE.AnimationMixer( gltf.scene );
		action = mixer.clipAction( gltf.animations[ 0 ] );
		action.setLoop( THREE.LoopOnce );

		action.play();
		gltf.scene.position.set(0,-1,0)
		gltf.scene.rotation.y = Math.PI / 0.56;

	  	console.log(gltf.scene)
        scene.add( gltf.scene );

	} );

	/*
	var loader2 = new THREE.GLTFLoader().setPath( 'little_girl/' );
	loader2.load( 'modifiedgirl.gltf', function ( gltf ) {
		model = gltf.scene
		let fileAnimations = gltf.animations;
		model.traverse(o => {

			if (o.isMesh) {
			  o.castShadow = true;
			  o.receiveShadow = true;
			}
			// Reference the neck and waist bones
			if (o.isBone && o.name === 'Head_Chica') { 
			  neck = o;
			}
			if (o.isBone && o.name === 'HairR002_Chica') { 
			  waist = o;
			}
		  });
        gltf.scene.scale.set(.3,.3,.3)
		mixer2 = new THREE.AnimationMixer( gltf.scene );
		action2 = mixer2.clipAction( gltf.animations[ 0 ] );
		action2.setLoop( THREE.LoopOnce );

		action2.play();
	  gltf.scene.position.set(0,-1,0)
	  gltf.scene.rotation.y = Math.PI / 0.56;

	  console.log(gltf.scene)

        scene.add( gltf.scene );


	} );
	*/

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

function animate() {

	requestAnimationFrame( animate );
	renderer.render( scene, camera );

	var delta = clock.getDelta();

	if ( mixer2 ) mixer2.update( delta );


}
function animate2() {

	requestAnimationFrame( animate2 );
	renderer.render( scene, camera );


	var delta2 = clock2.getDelta();

	if ( mixer ) mixer.update( delta2 );

}
document.addEventListener('mousemove', function(e){

	var mousecoords = getMousePos(e);
	//console.log(mousecoords)
	if(mousecoords.y < 900){

		if(neck && waist ){
			moveJoint(mousecoords,neck,50)
			moveJoint(mousecoords,waist,30)
		}

	}else{

		if(neck && waist ){
			moveJoint(mousecoords,neck,20)
			moveJoint(mousecoords,waist,30)
		}

	}


}


)
document.addEventListener('mousedown', function(e){

	animate2()

	if ( action !== null ) {

		action.stop();
		action.play();
		
	  }

})

function getMousePos(e){
	return { x: e.clientX, y: e.clientY }
}

function moveJoint(mouse,joint,degreeLimit){
	let degrees = getMouseDegrees(mouse.x,mouse.y,degreeLimit)
	joint.rotation.y = THREE.Math.degToRad(degrees.x)
	joint.rotation.x = THREE.Math.degToRad(degrees.y)
}
function getMouseDegrees(x, y, degreeLimit) {
    let dx = 0,
        dy = 0,
        xdiff,
        xPercentage,
        ydiff,
        yPercentage;

    let w = { x: window.innerWidth, y: window.innerHeight };

    // Left (Rotates neck left between 0 and -degreeLimit)
     // 1. If cursor is in the left half of screen
    if (x <= w.x / 2) {
     // 2. Get the difference between middle of screen and cursor position
      xdiff = w.x / 2 - x; 
      // 3. Find the percentage of that difference (percentage toward edge of screen)
      xPercentage = (xdiff / (w.x / 2)) * 100; 
      // 4. Convert that to a percentage of the maximum rotation we allow for the neck
      dx = ((degreeLimit * xPercentage) / 100) * -1; 
    }
    
    // Right (Rotates neck right between 0 and degreeLimit)
    if (x >= w.x / 2) {
      xdiff = x - w.x / 2;
      xPercentage = (xdiff / (w.x / 2)) * 100;
      dx = (degreeLimit * xPercentage) / 100;
    }
    // Up (Rotates neck up between 0 and -degreeLimit)
    if (y <= w.y / 2) {
      ydiff = w.y / 2 - y;
      yPercentage = (ydiff / (w.y / 2)) * 100;
      // Note that I cut degreeLimit in half when she looks up
      dy = (((degreeLimit * 0.5) * yPercentage) / 100) * -1;
    }
    // Down (Rotates neck down between 0 and degreeLimit)
    if (y >= w.y / 2) {
      ydiff = y - w.y / 2;
      yPercentage = (ydiff / (w.y / 2)) * 100;
      dy = (degreeLimit * yPercentage) / 100;
    }
    return { x: dx, y: dy };
  }
  