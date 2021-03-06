import { useRef } from 'react'
import { useFrame } from "react-three-fiber";

const GROUND_HEIGHT = -50; // A Constant to store the ground height of the game.

// A Ground plane that moves relative to the player. The player stays at 0,0
export default function Terrain() {
  const terrain = useRef();

  useFrame(() => {
    terrain.current.position.z += 0.4;
  });
  
  return (
    <mesh
      visible
      position={[0, GROUND_HEIGHT, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      ref={terrain}
    >
      <planeBufferGeometry attach="geometry" args={[800, 100000, 128, 128]} />
      <meshStandardMaterial
        attach="material"
        color="green"
        roughness={1}
        metalness={10}
        wireframe
      />
    </mesh>
  );
}