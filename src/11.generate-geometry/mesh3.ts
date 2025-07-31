import * as THREE from 'three';

const pointsArr = [
    new THREE.Vector2(100, 0),
    new THREE.Vector2(50, 20),
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 50),
    new THREE.Vector2(50, 100)
];

const shape = new THREE.Shape(pointsArr);

const path = new THREE.Path();
path.arc(50, 50, 10);
shape.holes.push(path);

// const geometry = new THREE.ShapeGeometry(shape);
const geometry = new THREE.ExtrudeGeometry(shape, {
  depth: 100
});

const material = new THREE.MeshLambertMaterial({
    color: new THREE.Color('lightgreen')
});

const mesh = new THREE.Mesh(geometry, material);




export default mesh;
