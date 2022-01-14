import { useState } from "react";
import * as THREE from "three";
import { useLoader } from "react-three-fiber";

export default function Tunnel() {
  // Create a curve based on the points
  const [curve] = useState(() => {
    // Create an empty array to stores the points
    let points = []
    // Define points along Z axis
    for (let i = 0; i < 50; i += 1)
      points.push(new THREE.Vector3(0, -3, 40 * (i / 4)))
    return new THREE.CatmullRomCurve3(points)
  })
  const texture = useLoader(THREE.TextureLoader, "/Stylized_Crystal.jpg")
          
  return (
    <mesh >
      <tubeGeometry args={[curve, 70, 10, 500, false]} />
      <meshStandardMaterial color={0xd2452b} side={THREE.DoubleSide} map={texture} metalness={0.4} />
    </mesh>
  )
}