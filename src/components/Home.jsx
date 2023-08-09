import { OrbitControls} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useRef } from 'react';
import Char from './Char';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
gsap.registerPlugin(ScrollTrigger)



const Home  = () => {
  const zoom = useRef(null);
  useEffect(() => {
    const el = zoom.current;
    gsap.fromTo(el, {opacity:0}, {opacity: 1, duration: 1.5, delay: .2, scrollTrigger: {trigger: el, toggleActions: "restart reset restart reset"}})
  },[])

  return (
    <section id='home'>
      <div className='container'>
        
        <div className='text-con'>
          <h1 >Jeffrey Cruz</h1>
          <h2 ref={zoom}>Web Developer </h2>
          &nbsp;
          &nbsp;
          &nbsp;
          <p >Hi! I'm thrilled to introduce myself as a passionate developer with a strong foundation in HTML, CSS, and JavaScript. I specialize in creating a functional, visually appealing, interactive, and user-friendly website.</p>  
        </div>

        <div className='obj-con-bottom'>
          <Canvas className='model' camera={{ position: [0, 8, 22], fov: 45 } } > 
          <fog attach="fog" args={['#20293c', 19, 38] } />
            <ambientLight args={['#fff', .5]}/>
            <directionalLight position={[1,2,1] }/>

            {/* <Stage> */}
            <group position-y={-8}>
              <Suspense fallback={null}>

               <Char/> 
              </Suspense>

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