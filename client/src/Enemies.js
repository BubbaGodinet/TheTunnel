import * as THREE from 'three'
import { useRef } from 'react'
import {MeshWobbleMaterial} from '@react-three/drei'
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {Physics, useBox} from '@react-three/cannon'


export default function Enemies() {
   const SpinningMesh = ({position, rotation, scale, args, color}) => {
      const mesh = useRef(null)
        useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.2))
        useFrame(() => {mesh.current.position.z += 0.4 });
        return (
        <mesh castShadow position={position} rotation={rotation} scale={scale} ref={mesh} >
              <boxBufferGeometry args={args} attach='geometry' />
              <MeshWobbleMaterial attach='material' color={color} />
       </mesh>
        )
      }
      
      let cubes =[]
      for (let i = 0; i < 1000; i++) {
        cubes.push(i)
      }
      
      const cubeField = cubes.map(cube => <SpinningMesh color={Math.random() * 0xffffff} position={[Math.random() * 50 - 25, Math.random() * 50 - 25, Math.random() * 1000 - 600]} rotation={[ Math.random() * 2 * Math.PI, Math.random() * 2 * Math.PI, Math.random() * 2 * Math.PI]} scale={[ Math.random() + 1,  Math.random() + 1,  Math.random() + 1]}/>)
      const contacted = cubeField.map(cube => console.log(cube.props.position))

 return (
    <>
    <Physics>
    {cubeField}
    {contacted}
    </Physics>
    </>
 )
}