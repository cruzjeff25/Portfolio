import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import Char from './Char';


const Home = () => {
  return (
    <section id='home'>
      <div className='container'>
        <div className='text-con'>
          <h1>Jeffrey Cruz</h1>
          <h2>Web Developer </h2>
          &nbsp;
          &nbsp;
          &nbsp;
          <p>Hi! I'm thrilled to introduce myself as a passionate developer with a strong foundation in HTML, CSS, and JavaScript. I specialize in creating a functional, visually appealing, interactive, and user-friendly website.</p>  
        </div>


        <div className='bg-obj'>
          <Canvas className='bg'>
            <ambientLight args={['#1bf2f4', .25]}/>
            <directionalLight position={[0, -2, 1.5] }/>
            <Sphere args={[1, 250, 100]} scale={3.2}>
              <MeshDistortMaterial
                color='#20293c'
                attach='material'
                distort={.3}
                speed={.6}
                />
            </Sphere>
          </Canvas>
        </div>

          

        <div className='obj-con-bottom'>
          <Canvas className='model' camera={{ position: [0, 8, 22], fov: 45 }} > 
            <ambientLight args={['#fff', .5]}/>
            <directionalLight position={[1,2,1] }/>

            {/* <Stage> */}
            <group position-y={-8}>
              <Char/>

            </group>
            {/* </Stage> */}

            <OrbitControls
              enableZoom={false}   
              minAzimuthAngle={-Math.PI / 3}
              maxAzimuthAngle={Math.PI / 3}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI - Math.PI / 2}
             />
          </Canvas>
        </div>
      </div>


    </section>
  )
}

export default Home