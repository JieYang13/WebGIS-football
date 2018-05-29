var container;
var camera, scene, renderer;

function init() {
    container = document.createElement( 'div' );
    document.body.appendChild( container );
    // scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xcce0ff );
    scene.fog = new THREE.Fog( 0xcce0ff, 50, 1000 );
    // camera
    camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.set( 100, 50, 150 );
    camera.lookAt({
        x : 0,
        y : 0,
        z : 0
    });
    camera.up.z=1;
    camera.up.x=0;
    camera.up.y=0;
    // lights
    var light, materials;
    scene.add( new THREE.AmbientLight( 0x666666 ) );
    light = new THREE.DirectionalLight( 0xdfebff, 1 );
    light.position.set( 50, 200, 100 );
    light.position.multiplyScalar( 1.3 );
    light.castShadow = true;
    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;
    var d = 300;
    light.shadow.camera.left = - d;
    light.shadow.camera.right = d;
    light.shadow.camera.top = d;
    light.shadow.camera.bottom = - d;
    light.shadow.camera.far = 1000;
    scene.add( light );

    // renderer
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );
    renderer.gammaInput = true;
    renderer.gammaOutput = true;
    renderer.shadowMap.enabled = true;
    // controls
    var controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.center.set(0,0,0);


    window.addEventListener( 'resize', onWindowResize, false );
    // sphere.visible = ! true;
}
//
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {
    requestAnimationFrame( animate );
    render();
}
function render() {
    renderer.render( scene, camera );
}