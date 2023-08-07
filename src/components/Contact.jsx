import React from 'react';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Fb from './Fb';
import Gmail from './Gmail';

export const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_22658b9', e.target, 'd5HchJJpT_1d4uFTi')
      .then((result) => {
          console.log(result.text);
          toast('🚀 Email Sent!');
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


  return (
    <section id='contact'>
      <div className='container'>
        <div className='bg-obj'>
          <Canvas className='bg'>
            <ambientLight args={['#fff', .5]}/>
            <directionalLight position={[0, -4, 1.65] }/>
            <Sphere args={[1, 250, 100]} scale={2.2} position-y={-.08}>
              <MeshDistortMaterial
                color='#20293c'
                attach='material'
                distort={.3}
                speed={1.25}
                />
            </Sphere>

          </Canvas>
        </div>
        
        <form  onSubmit={sendEmail}>
          <h1> Contact Me </h1>
          <input type='text' id='name' name="name" placeholder='Name' />
          <input type='text' id='email' name="email" placeholder='Email' required/>
          <textarea type='text' id='message' name="message" placeholder='Your Message' required/>
          <input type="submit" value='Submit'/>
          <ToastContainer 
            position="bottom-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            theme="colored"
          />
        </form>


        <div className='icons'>
          <a href='https://www.facebook.com/Cruz.Jepp/'>
            <Canvas className='fb'  camera={{  position: [0, 0, 6]}}>
              <ambientLight args={['#fff', .5]}/>
              <directionalLight position={[1, 2, 4] }/>
              <group  position={[0, -2.5, 0]} >
                <Fb />
              </group>
            </Canvas>
          </a>

          <a href='mailto: cruzjeffrey25@gmail.com'>
            <Canvas className='gmail' camera={{  position: [0, 0, 6]}}>
              <ambientLight args={['#fff', .5]}/>
              <directionalLight position={[1, 2, 4] }/>
              <group position={[4, -2.5, 0]}>
                <Gmail/>
              </group>
            </Canvas>
          </a>

        </div>
      </div>



    </section>

    
)
}


export default Contact