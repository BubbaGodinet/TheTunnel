import React, {useRef, useContext} from 'react'
import { Canvas, useFrame, useThree } from 'react-three-fiber'
import { Stars, PerspectiveCamera, OrthographicCamera, CubeCamera } from '@react-three/drei'
import {Physics} from '@react-three/cannon'
import { Suspense } from 'react'
import Terrain from './Terrain'
import Model from './Model';
import Enemies from './Enemies';
import Tunnel from './Tunnel'
import {MeshWobbleMaterial} from '@react-three/drei'
import {useGLTF} from '@react-three/drei'
import {ScoreContext} from './context/scoreState'
import {UserScoresContext} from './context/userscoreState'
import { useNavigate } from "react-router-dom";
// import {HitContext} from './context/hitState'
// import HitPopover from './HitPopover'
// import {Box} from 'drei'

export default function GamePage({user}) {
  const {userScores, setUserScores} = useContext(UserScoresContext)
  const {score, setScore} = useContext(ScoreContext)
  let navigate = useNavigate();
  // const {hit, setHit} = useContext(HitContext)

  const Ship = () => {
    const { viewport } = useThree()
    const group = useRef()
    // const [ref] = useBox(() => ({mass:10}))
    const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-spaceship/model.gltf')
    useFrame(({ mouse }) => {
      const x = (mouse.x * viewport.width) / 2
      const y = (mouse.y * viewport.height) / 2
      group.current.position.set(x, y, 0)
      let xp
      let yp
      let zp
      
      // const contacted = cubeField.map(cube =>{ if(Math.sqrt(Math.pow(cube.props.position[0] - group.current.position.x, 2) + Math.pow(cube.props.position[1] - group.current.position.y, 2) + Math.pow(cube.props.position[2] - group.current.position.z,2)) < 5) {console.log('hit')}})
      // if (contacted < 10000){console.log('hit')}
      // console.log(group.current.position.x)
      // group.current.rotation.set(-y, x, 0)
    })
    
    // if( Math.sqrt(Math.pow(cube.props.position[0] - group.current.position.x, 2) + Math.pow(cube.props.position[1] - group.current.position.y, 2) + Math.pow(cube.props.position[2] - group.current.position.z +=0.4,2)) < 5) {console.log('hit')}
    return (
      <group rotation={[0,9.45,0]} ref={group} dispose={null}>
         <mesh geometry={nodes.Cube005.geometry} material={materials.Mat0} />
         <mesh geometry={nodes.Cube005_1.geometry} material={materials.Mat1} />
         <mesh geometry={nodes.Cube005_2.geometry} material={materials.Mat2} />
         <mesh geometry={nodes.Cube005_3.geometry} material={materials.Window_Frame} />
         <mesh geometry={nodes.Cube005_4.geometry} material={materials.Mat4} />
         <mesh geometry={nodes.Cube005_5.geometry} material={materials.Mat3} />
         <mesh geometry={nodes.Cube005_6.geometry} material={materials.Window} />
      </group>
    )
  }

  const SpinningMesh = ({position, rotation, scale, args, color}) => {
    // const [ref] = useBox(() => ({mass:10, position, args}))
    const mesh = useRef(null)
    let scores = 0
    
      useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.2))
      useFrame(() => {mesh.current.position.z += 0.9 });
      useFrame(() => scores += 1)
    //   useFrame(() => 
    //   if( mesh.current.position.x > window.innerWidth && mesh.current.position.x < 0 && mesh.current.position.y > window.innerHeight && mesh.current.position.y < 0 mesh.current.position.z > window.innerHeight && mesh.current.position.z < 0 ) {

    // })
    // let hits = 0;
      return (
      <mesh onPointerOver={(event) => {if (mesh.current.position.z <= 3 && mesh.current.position.z >= -10) {
      console.log('hit')
      // hits += 1
      // console.log(hits)
      // if (hits === 3) {  
      // navigate('/gameover', {replace: true})
      // setScore(scores)
      
      // fetch('/scores', {
      //   method: 'Post',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({score: scores, user_id: user.id})
      // })
    
      // .then((r) => r.json())
      // .then((newScore) => setUserScores([...userScores, newScore]))
      }}} castShadow position={position} rotation={rotation} scale={scale} ref={mesh} >
            <boxBufferGeometry args={args} attach='geometry' />
            <MeshWobbleMaterial attach='material' color={color} />
     </mesh>
      )
    }
  
  useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-spaceship/model.gltf')

    
    let cubes =[]
    for (let i = 0; i < 1700; i++) {
      cubes.push(i)
    }
    
    const cubeField = cubes.map(cube => <SpinningMesh color={Math.random() * 0xffffff} position={[Math.random() * 50 - 25, Math.random() * 50 - 25, Math.random() * 1000 - 600]} rotation={[ Math.random() * 2 * Math.PI, Math.random() * 2 * Math.PI, Math.random() * 2 * Math.PI]} scale={[ Math.random() + 1,  Math.random() + 1,  Math.random() + 1]}/>)
   
  
  return (
    <>
    <Canvas style={{ background: "black" }}
    shadowMap
    colorManagement 
    camera={{position: [0,4,10], fov: 100}}
    >
      {/* <perspectiveCamera makeDefault/> */}
      <ambientLight intensity={0.3} />
      <directionalLight 
      castShadow
      position={[0,10,0]} 
      intensity={1.5} 
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      shadow-camera-far={50}
      shadow-camera-left={-10}
      shadow-camera-right={10}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}
      />
      <pointLight position={[-10,0,-20]} intensity={0.5}/>
      <pointLight position={[0,-10,0]} intensity={1.5}/>
      <Terrain/>
      <Stars/>
      {/* <HitPopover setHit={setHit} hit={hit}/> */}
      <group>
        <mesh 
        receiveShadow
        rotation={[-Math.PI / 2,0,0]} position={[0,-3,0]}>
          <planeBufferGeometry attach='geometry' args={[100,100]}/>
          <shadowMaterial attach='material' opacity={0.3}/>
        </mesh>
        <Suspense fallback={null}>
          <Tunnel/>
          <Ship/>
          {cubeField}
        </Suspense>
      </group>
    </Canvas>
    </>
  );
}