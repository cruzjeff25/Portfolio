import React, {useRef, useEffect} from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import gmail from '../img/gmail.png'
import messenger from '../img/messenger.png'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
gsap.registerPlugin(ScrollTrigger)


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

  const opac = useRef(null);
  useEffect(() => {
    const el = opac.current;
    gsap.fromTo(el, {opacity:.02}, {opacity: 1, duration: 2, delay:.2, scrollTrigger: {trigger: el, toggleActions: "restart none none none"}})
  },[])


  return (
    <section id='contact'>
      <div className='container'>
        <form ref={opac} onSubmit={sendEmail}>
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
          <a href='mailto: cruzjeffrey25@gmail.com' >
            <img src={gmail} alt='gmail' width='40px'/>
          </a>

          <a href='https://m.me/Cruz.Jepp' target='_blank' rel="noreferrer">
            <img src={messenger} alt='facebook' width='40px'/>
          </a>

        </div>
      </div>



    </section>

    
)
}


export default Contact