


// class Die {
  
//   constructor(sides) {
//     this.sides = sides;
//   }
  
//   roll () {
//     var result;
//     result = Math.floor(Math.random() * this.sides + 1);
//     return result;
//   }
// }

// 3D Modeling //
// class Geometry {
//   constructor(geometry, material = "new THREE.MeshPhongMaterial({ color: 0xffffff, shininess: 100, shading: THREE.SmoothShading })") {
//     this.geometry = geometry;
//     this.material = material;
//   }

//   renderGeometry () {
//     var scene = new THREE.Scene();
//     var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 100);
//     var width = window.innerWidth,
//         height = window.innerHeight;
    
//     var renderer = new THREE.WebGLRenderer({antialias:true});
//     renderer.setSize(width / 4, height / 4);
//     document.getElementById('canvases').appendChild(renderer.domElement);
//     var light = new THREE.AmbientLight(0xf7f500, 0.4);
//     scene.add(light);
//     var directionalLight = new THREE.DirectionalLight(0xfffefe, 1);
//     scene.add(directionalLight);
//     var model = new THREE.Mesh(this.geometry, this.material);
//     scene.add(model);
//     camera.position.set(0, 0, 8);
//     scene.add(camera);

//     function animate () {
//       requestAnimationFrame( animate );
//       renderer.render( scene, camera );
//       // model.rotation.x += 0.01;
//       // model.rotation.y += 0.01;
//     } animate();
//   }

  


// }
// =============================================== //

// create 4 Sided Die
function createTetrahedron () {
    var tetrahedron = "new THREE.TetrahedronGeometry ( 4, 0 )";
    var geometry = "new THREE.TetrahedronGeometry ( 4, 0 )";
    var material = "new THREE.MeshPhongMaterial({ color: 0xffffff, shininess: 100, shading: THREE.SmoothShading";
    var model = new THREE.Mesh(this.geometry, this.material);
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 100);
    var renderer = new THREE.WebGLRenderer({ antialias: true });
    var light = new THREE.AmbientLight(0xf7f500, 0.4);
    scene.add(light);
    var directionalLight = new THREE.DirectionalLight(0xfffefe, 1);
    scene.add(directionalLight);
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width / 4, height / 4);
    document.getElementById('canvases').appendChild(renderer.domElement);
    scene.add(model);
    camera.position.set(0, 0, 8);
    scene.add(camera);

    function render () {
        requestAnimationFrame( render );
        renderer.render( scene, camera );
        // model.rotation.x += 0.01;
        // model.rotation.y += 0.01;
    } render();    
}

// create 6 Sided Die
function createCube () {
  return new Geometry(
    {
      geometry: "new THREE.BoxGeometry ( 3, 3, 3 )"
    });
}

// create 8 Sided Die
function createOctahedron () {
  return new Geometry(
    {
      geometry: "new THREE.OctahedronGeometry ( 4, 0 )"
    });
}

// create 10 Sided Die
// polyhedron function here

// create 12 Sided Die
function createDodecahedron () {
  return new Geometry(
    {
      geometry: "new THREE.DodecahedronGeometry ( 4, 0 )"
    });
}

// create 20 Sided Die
function createIcosahedron () {
  return new Geometry(
    {
      geometry: "new THREE.IcosahedronGeometry ( 4, 0 )"
    });
}

