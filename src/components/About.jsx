import { Canvas } from '@react-three/fiber'
import React from 'react'
import AboutModel from './AboutModel'
import { OrbitControls} from '@react-three/drei'

const About = () => {
  return (
    <section id='about'>
      <div className='container'>
      <div className='obj-con'>
        <Canvas className='model' camera={{  position: [0, 8, 80], fov: 45}} >
          <fog attach="fog" args={['#20293c', 72, 120]} />
          <ambientLight args={['#fff', .6]}/>
          <directionalLight position={[1,3,1] } />

          <group position-y={-18}>
            <AboutModel />
          </group>

        <OrbitControls
          enableZoom={false}   
          minAzimuthAngle={-Math.PI / 3}
          maxAzimuthAngle={Math.PI / 3}
          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI - Math.PI / 1}
        />
        </Canvas>

      </div>
      <div className='text-con'>
       <h1>About Me</h1>
       <p>
       I am 22 years old, currently residing in Valenzuela City, and I am a graduate of Bachelor of Science in Information Technology at Pamantasan ng Lungsod ng Valenzuela. Besides coding, I also love to workout at the gym, playing games, and being around my dogs.
       </p>
      </div>

      </div>
    </section>



  )
}

export default About