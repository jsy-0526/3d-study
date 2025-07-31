import * as THREE from 'three';
import bg from './bg.png'

const geometry = new THREE.PlaneGeometry(200, 100);

const loader = new THREE.TextureLoader();
const texture = loader.load(bg);
texture.colorSpace = THREE.SRGBColorSpace;

const material = new THREE.MeshBasicMaterial(({
    map: texture
}));

const mesh = new THREE.Mesh(geometry, material);

console.log(mesh);

export default mesh;
