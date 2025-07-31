import * as THREE from 'three';
import img1 from './muxing.png';

const loader = new THREE.TextureLoader();
const texture = loader.load(img1);

texture.colorSpace = THREE.SRGBColorSpace;
texture.wrapT = THREE.RepeatWrapping;

const geometry = new THREE.SphereGeometry(50);

const material = new THREE.MeshBasicMaterial({
    map: texture
});

const mesh = new THREE.Mesh(geometry, material);

export default mesh;
