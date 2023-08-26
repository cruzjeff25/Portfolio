import { OrbitControls} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useRef } from 'react';
import Char from './Char';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
gsap.registerPlugin(ScrollTrigger)



const Home  = () => {
  const opac = useRef(null);
  useEffect(() => {
    const el = opac.current;
    gsap.fromTo(el, {opacity: 0 , display: "none"}, {opacity: 1, display: "block", duration: 2.5, delay: 0, scrollTrigger: {trigger: el, toggleActions: "play reset play reset "}})
  },[])

  return (
    <section id='home'>
      <div className='container'>
        
        <div className='text-con'>
          <h1 >Jeffrey Cruz</h1>
          <h3 >Web Developer/Designer</h3>
          &nbsp;
          &nbsp;
          &nbsp;
          <p >I enjoy creating functional, visually appealing, and user-friendly websites.</p>  
        </div>

        <div className='obj-con-bottom'>
          <Canvas ref={opac} className='model' camera={{ position: [0, 8, 22], fov: 45 } } > 
          <fog attach="fog" args={['#20293c', 19, 38] } />
            <ambientLight args={['#ffe7d9', .5]}/>
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