
function renderScene() {
  var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 100);
    camera.position.set(0,0,8);
    scene.add(camera);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth / 4, window.innerHeight / 4);
    document.getElementById('canvases').appendChild(renderer.domElement);
    var light = new THREE.AmbientLight( 0xf7f500, 0.4 );
    scene.add( light );
    var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
    scene.add(directionalLight);
  
    function render() {
        requestAnimationFrame( render );
        renderer.render( scene, camera );
        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;
        // camera.rotation.z += 0.1;
    } render();
}

class Die {
  constructor (sides) {
    this.sides = sides;
  }
  
  roll () {
    var result;
    result = Math.floor(Math.random() * this.sides + 1);
    return result;
  }
}

// 3D Modeling //
class Geometry { 
  constructor(geometry = {}) {
    this.geometry = geometry;
    this.material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      shininess: 100,
      shading: THREE.SmoothShading
    });
  }

  render(geometry, material) { 
    renderScene()
    var dieInstance = new THREE.Mesh(geometry, material);
    scene.add(dieInstance);
  }
}

// create 4 Sided Die
function createTetrahedron() { 
 
  
}

// create 6 Sided Die
function createCube() {
  var model = new Geometry({
    geometry: "new THREE.BoxGeometry ( 3, 3, 3 )"
  })
  return model;
}

// create 8 Sided Die
function createOctahedron() { 
  
}

// create 10 Sided Die
function createTetrahedron() { 
  
}

// create 12 Sided Die
function createDodecahedron() { 
  
}

// create 20 Sided Die
function createIcosahedron() { 
  
}


