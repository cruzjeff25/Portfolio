import React from 'react'
import { Sphere, MeshDistortMaterial, Detailed, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';





const DistortBG = () => {
  return (
    <div className='bg-obj'>
    <Canvas className='bg' >
      <ambientLight args={['#fff', .5]}/>
      <directionalLight position={[1, -2, -2] } />
      <pointLight position={[10, 10, 10]} />
      <mesh scale={2.8}>
        <sphereGeometry/>
        <meshStandardMaterial color="#20293c" />
      </mesh>
      <OrbitControls enableZoom={false}  autoRotate={true} enablePan={false} enableRotate={false}/>
    </Canvas>
  </div>
  )
}

export default DistortBG