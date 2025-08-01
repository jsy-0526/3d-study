import * as THREE from 'three';

const geometry = new THREE.BoxGeometry(100, 100, 100);
const material = new THREE.MeshBasicMaterial(({
  color: new THREE.Color('orange'),
  wireframe: true,
  side: THREE.DoubleSide
}));
const mesh = new THREE.Mesh(geometry, material);

console.log(mesh);

export default mesh;
