import * as THREE from 'three';

const arc = new THREE.EllipseCurve(0, 0, 100, 50);

const pointsList = arc.getPoints(20);

const geometry = new THREE.BufferGeometry();

geometry.setFromPoints(pointsList);

// const material = new THREE.PointsMaterial({
//     color: new THREE.Color('orange'),
//     size: 10
// });

const material = new THREE.LineBasicMaterial({
  color: new THREE.Color('orange')
});

const line = new THREE.Line(geometry, material);

console.log(line);

export default line;
