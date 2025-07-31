import * as THREE from 'three';
import img1 from './qiang.jpg';

const loader = new THREE.TextureLoader();
const texture = loader.load(img1);

const geometry = new THREE.PlaneGeometry(1000, 1000);

const material = new THREE.MeshBasicMaterial({
    map: texture
});

const mesh = new THREE.Mesh(geometry, material);

export default mesh;
