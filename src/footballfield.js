function footballfield(){
    var loader = new THREE.TextureLoader();
    // ground
    var groundTexture = loader.load( 'docs/texture/field.jpg' );
    groundTexture.anisotropy = 16;
    groundTexture.side = THREE.DoubleSide;
    var groundMaterial = new THREE.MeshLambertMaterial( { map: groundTexture } );
    var mesh = new THREE.Mesh( new THREE.PlaneBufferGeometry( 120.1, 78.2 ), groundMaterial );
    mesh.receiveShadow = true;
    scene.add( mesh );
    footballdoor();
}

function footballdoor(){

    var  poles = new THREE.Object3D();

    // poles
    var poleGeo = new THREE.BoxBufferGeometry( 0.2, 0.2,2.44 );
    var poleMat = new THREE.MeshLambertMaterial();
    var mesh = new THREE.Mesh( poleGeo, poleMat );
    mesh.position.x = - 52;
    mesh.position.y = -3;
    mesh.position.z = 1.22;
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    poles.add(mesh);
    //	scene.add( mesh );
    var mesh = new THREE.Mesh( poleGeo, poleMat );
    mesh.position.x = -52;
    mesh.position.y =  3;
    mesh.position.z = 1.22;
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    poles.add(mesh);
    var mesh = new THREE.Mesh( poleGeo, poleMat );
    mesh.position.x = 52.5;
    mesh.position.y =  -3;
    mesh.position.z = 1.22;
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    poles.add(mesh);
    var mesh = new THREE.Mesh( poleGeo, poleMat );
    mesh.position.x = 52.5;
    mesh.position.y =  3;
    mesh.position.z = 1.22;
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    poles.add(mesh);
    //scene.add( mesh );
    var mesh = new THREE.Mesh( new THREE.BoxBufferGeometry( 6.1, 0.2, 0.2 ), poleMat );
    mesh.position.x = -52;
    mesh.position.y = 0;
    mesh.position.z = 2.44;
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    mesh.rotation.x = Math.PI;
    mesh.rotation.y = Math.PI/2;
    mesh.rotation.z = Math.PI/2;
    poles.add(mesh);
    var mesh = new THREE.Mesh( new THREE.BoxBufferGeometry( 6.1, 0.2, 0.2 ), poleMat );
    mesh.position.x = 52.5;
    mesh.position.y = 0;
    mesh.position.z = 2.44;
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    mesh.rotation.x = Math.PI;
    mesh.rotation.y = Math.PI/2;
    mesh.rotation.z = Math.PI/2;
    poles.add(mesh);

    //后面四根柱子
    var mesh = new THREE.Mesh( poleGeo, poleMat );
    mesh.position.x = - 55;
    mesh.position.y = -3;
    mesh.position.z = 1.22;
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    poles.add(mesh);
    //	scene.add( mesh );
    var mesh = new THREE.Mesh( poleGeo, poleMat );
    mesh.position.x = -55;
    mesh.position.y =  3;
    mesh.position.z = 1.22;
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    poles.add(mesh);
    var mesh = new THREE.Mesh( poleGeo, poleMat );
    mesh.position.x = 55.4;
    mesh.position.y =  -3;
    mesh.position.z = 1.22;
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    poles.add(mesh);
    var mesh = new THREE.Mesh( poleGeo, poleMat );
    mesh.position.x = 55.4;
    mesh.position.y =  3;
    mesh.position.z = 1.22;
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    poles.add(mesh);
    var mesh = new THREE.Mesh( new THREE.BoxBufferGeometry( 6.1, 0.2, 0.2 ), poleMat );
    mesh.position.x = -55;
    mesh.position.y = 0;
    mesh.position.z = 2.44;
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    mesh.rotation.x = Math.PI;
    mesh.rotation.y = Math.PI/2;
    mesh.rotation.z = Math.PI/2;
    poles.add(mesh);
    var mesh = new THREE.Mesh( new THREE.BoxBufferGeometry( 6.1, 0.2, 0.2 ), poleMat );
    mesh.position.x = 55.4;
    mesh.position.y = 0;
    mesh.position.z = 2.44;
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    mesh.rotation.x = Math.PI;
    mesh.rotation.y = Math.PI/2;
    mesh.rotation.z = Math.PI/2;
    poles.add(mesh);

    //
    var mesh = new THREE.Mesh( new THREE.BoxBufferGeometry( 0.2, 3.1, 0.2 ), poleMat );
    mesh.position.x = 54;
    mesh.position.y = 3;
    mesh.position.z = 2.44;
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    mesh.rotation.x = Math.PI/2;
    mesh.rotation.z = Math.PI/2;
    poles.add(mesh);
    var mesh = new THREE.Mesh( new THREE.BoxBufferGeometry( 0.2, 3.1, 0.2 ), poleMat );
    mesh.position.x = 54;
    mesh.position.y = -3;
    mesh.position.z = 2.44;
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    mesh.rotation.x = Math.PI/2;
    mesh.rotation.z = Math.PI/2;
    poles.add(mesh);
    var mesh = new THREE.Mesh( new THREE.BoxBufferGeometry( 0.2, 2.8, 0.2 ), poleMat );
    mesh.position.x = -53.5;
    mesh.position.y = 3;
    mesh.position.z = 2.44;
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    mesh.rotation.x = Math.PI/2;
    mesh.rotation.z = Math.PI/2;
    poles.add(mesh);
    var mesh = new THREE.Mesh( new THREE.BoxBufferGeometry( 0.2, 2.8, 0.2 ), poleMat );
    mesh.position.x = -53.5;
    mesh.position.y = -3;
    mesh.position.z = 2.44;
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    mesh.rotation.x = Math.PI/2;
    mesh.rotation.z = Math.PI/2;
    poles.add(mesh);

    // cloth material
    var loader = new THREE.TextureLoader();
     var clothTexture = loader.load( 'docs/texture/circuit_pattern.png' );
    //var clothTexture = loader.load( 'docs/texture/door.png' );
    clothTexture.anisotropy = 16;
    var clothMaterial = new THREE.MeshLambertMaterial( {
        map: clothTexture,
        side: THREE.DoubleSide,
        alphaTest: 0.5,
        transparent: true,
        opacite:0.5
    } );
    // cloth mesh
    var object = new THREE.Mesh( new THREE.PlaneBufferGeometry( 6, 3 ), clothMaterial );
    object.position.set( 53.8, 0, 2.44 );
    object.castShadow = true;
    object.rotation.z = Math.PI/2;
    poles.add(object);
    var object = new THREE.Mesh( new THREE.PlaneBufferGeometry( 6, 3 ), clothMaterial );
    object.position.set( -53.7, 0, 2.44 );
    object.castShadow = true;
    object.rotation.z = Math.PI/2;
    poles.add(object);

    var object = new THREE.Mesh( new THREE.PlaneBufferGeometry( 6, 2.6 ), clothMaterial );
    object.position.set( -55.3, 0, 1.22 );
    object.castShadow = true;
    //object.rotation.z = Math.PI/2;
    object.rotation.x = Math.PI/2;
    object.rotation.y = Math.PI/2;
    poles.add(object);
    var object = new THREE.Mesh( new THREE.PlaneBufferGeometry( 6, 2.6 ), clothMaterial );
    object.position.set( 55.3, 0, 1.22 );
    object.castShadow = true;
    //object.rotation.z = Math.PI/2;
    object.rotation.x = Math.PI/2;
    object.rotation.y = Math.PI/2;
    poles.add(object);

    var object = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2.8, 2.6 ), clothMaterial );
    object.position.set( 54, 3, 1.22 );
    object.castShadow = true;
    object.rotation.z = Math.PI/2;
    object.rotation.x = Math.PI/2;
    //object.rotation.y = Math.PI/2;
    poles.add(object);

    var object = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2.8, 2.6 ), clothMaterial );
    object.position.set( 54, -3, 1.22 );
    object.castShadow = true;
    object.rotation.z = Math.PI/2;
    object.rotation.x = Math.PI/2;
    //object.rotation.y = Math.PI/2;
    poles.add(object);

    var object = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2.8, 2.6 ), clothMaterial );
    object.position.set( -53.5, 3, 1.22 );
    object.castShadow = true;
    object.rotation.z = Math.PI/2;
    object.rotation.x = Math.PI/2;
    //object.rotation.y = Math.PI/2;
    poles.add(object);

    var object = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2.8, 2.6 ), clothMaterial );
    object.position.set( -53.5, -3, 1.22 );
    object.castShadow = true;
    object.rotation.z = Math.PI/2;
    object.rotation.x = Math.PI/2;
    //object.rotation.y = Math.PI/2;
    poles.add(object);

    //scene.add( object );
    object.customDepthMaterial = new THREE.MeshDepthMaterial( {
        depthPacking: THREE.RGBADepthPacking,
        map: clothTexture,
        alphaTest: 0.5
    } );
    scene.add(poles);
}