'use strict';

class Die {
  
  constructor(sides) {
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
  constructor(geometry, material) {
    this.geometry = geometry;
    this.material = material;
  }

  renderGeometry() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 100);
    camera.position.set(0, 0, 8);
    scene.add(camera);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth / 4, window.innerHeight / 4);
    document.getElementById('canvases').appendChild(renderer.domElement);
    var light = new THREE.AmbientLight(0xf7f500, 0.4);
    scene.add(light);
    var directionalLight = new THREE.DirectionalLight(0xfffefe, 0.5);
    scene.add(directionalLight);
    var geometry = this.geometry;
    var material = this.material;
    var model = new THREE.Mesh(geometry, material);
    scene.add(model);
    

    function render() {
      requestAnimationFrame(render);
      renderer.render(scene, camera);
      model.rotation.x += 0.01;
      model.rotation.y += 0.01;
    }
    render();
  }

}

// create 6 Sided Die
function createCube() {
    return new Geometry({
        geometry: "new THREE.BoxGeometry ( 3, 3, 3 )",
        material: "new THREE.MeshPhongMaterial({ color: 0xffffff, shininess: 100, shading: THREE.SmoothShading })"
    });
}