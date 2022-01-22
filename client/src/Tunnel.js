import { useState, useRef } from "react";
import * as THREE from "three";
import { useLoader } from "react-three-fiber";
import { useFrame } from "react-three-fiber";

export default function Tunnel() {
  const tunnel = useRef()
  useFrame(() => {
    tunnel.current.position.z += 0.8;
  });
  
  // Create a curve based on the points
  const [curve] = useState(() => {
    // Create an empty array to stores the points
    let points = []
    // Define points along Z axis
    for (let i = -50; i < 50; i += 1)
      points.push(new THREE.Vector3(0, -3, 10000 * (i / 4)))
    return new THREE.CatmullRomCurve3(points)
  })
  const texture = useLoader(THREE.TextureLoader, "./Stylized_Crystal.jpg")
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2000, 5);
  texture.anisotropy = 16;

  return (
    <mesh ref={tunnel}>
      <tubeGeometry args={[curve, 500, 30, 1000, true]} />
      <meshStandardMaterial side={THREE.BackSide} map={texture} metalness={1}  />
    </mesh>
  )
}