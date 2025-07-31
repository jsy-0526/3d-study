import * as THREE from 'three';
import img1 from './diqiu.jpg';

const loader = new THREE.TextureLoader();
const texture = loader.load(img1);

const geometry = new THREE.SphereGeometry(100);

const material = new THREE.MeshBasicMaterial({
    map: texture
});

const mesh = new THREE.Mesh(geometry, material);

export default mesh;
