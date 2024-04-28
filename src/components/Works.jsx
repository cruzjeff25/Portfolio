
import React, {  useEffect, useRef } from 'react';
import vcgec from '../img/vcgec.jpg';
import github from '../img/github.png'
import web from '../img/web.png'
import contact from '../img/contact.jpg'
import letspark from '../img/letspark.jpg'
import portfolio from '../img/portfolio.jpg'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
gsap.registerPlugin(ScrollTrigger)


const Works = () => {
  
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);

  const design1 = useRef(null);
  const design2 = useRef(null);
  const design3 = useRef(null);
  const design4 = useRef(null);

  useEffect(() => {
    const el = box1.current;
    gsap.fromTo(el, {opacity:0, x:-45}, {opacity: 1, x:0, duration: 1, delay: 0, scrollTrigger: {trigger: el, toggleActions: "restart none none none"}})
  },[])
  useEffect(() => {
    const el = box2.current;
    gsap.fromTo(el, {opacity:0, x:45}, {opacity: 1, x:0, duration: 1, delay: 0, scrollTrigger: {trigger: el, toggleActions: "restart none none none"}})
  },[])
  useEffect(() => {
    const el = box3.current;
    gsap.fromTo(el, {opacity:0, x:-45}, {opacity: 1, x:0, duration: 1, delay: 0, scrollTrigger: {trigger: el, toggleActions: "restart none none none"}})
  },[])
  useEffect(() => {
    const el = box4.current;
    gsap.fromTo(el, {opacity:0, x:45}, {opacity: 1, x:0, duration: 1, delay: 0, scrollTrigger: {trigger: el, toggleActions: "restart none none none"}})
  },[])

  useEffect(() => {
    const el = design1.current;
    gsap.fromTo(el, {opacity:0, x:-45}, {opacity: 1, x:0, duration: 1, delay: 0, scrollTrigger: {trigger: el, toggleActions: "restart none none none"}})
  },[])
  useEffect(() => {
    const el = design2.current;
    gsap.fromTo(el, {opacity:0, x:45}, {opacity: 1, x:0, duration: 1, delay: 0, scrollTrigger: {trigger: el, toggleActions: "restart none none none"}})
  },[])
  useEffect(() => {
    const el = design3.current;
    gsap.fromTo(el, {opacity:0, x:-45}, {opacity: 1, x:0, duration: 1, delay: 0, scrollTrigger: {trigger: el, toggleActions: "restart none none none"}})
  },[])
  useEffect(() => {
    const el = design4.current;
    gsap.fromTo(el, {opacity:0, x:45}, {opacity: 1, x:0, duration: 1, delay: 0, scrollTrigger: {trigger: el, toggleActions: "restart none none none"}})
  },[])

  return (
    <section id='projects'>
      <div id='works' className='container'>
        <h1>Works</h1> 
        <h3 className='subtitle' >Web Development</h3>
        <div className="top">
        {/* -----box 1------ */}
          <div ref={box1} className="box">
            <div className="box-con">
              <img src={vcgec} alt="vcgec" width={'200'}/>
            </div>
            <div className="box-con2">
              <h4>VCGEC Website</h4>
              <p>A website for Valenzuela Government Employees Cooperative using ReactJs</p>
              <div className='icon'>
                <a href="https://github.com/cruzjeff25/VCGEC" target='blank'>
                  <img src={github} alt="vcgec" width={'25px'} />
                  Github
                </a>
                <a href="https://vcgec.vercel.app" target='blank'>
                  <img src={web} alt="vcgec" width={'25px'}/>
                  Visit site
                </a>
              </div>
            </div>
          </div >

          {/* -----box 2------ */}
          <div ref={box2} className="box">
            <div className="box-con">
              <img src={contact} alt="vcgec" width={'200'}/>
            </div>
            <div className="box-con2">
              <h4>Contacts</h4>
              <p>A simple Create, Read, Update, and Delete System using PHP and MySQL</p>
              <div className="icon">
                <a href="https://github.com/cruzjeff25/Contacts" target='blank'>
                  <img src={github} alt="vcgec" width={'25px'} />
                  Github
                </a>
                <a href="https://contactscrud.000webhostapp.com/" target='blank'>
                  <img src={web} alt="vcgec" width={'25px'}/>
                  Visit site
                </a>
              </div>
            </div>
          </div>

        </div>


        <div className="bottom">
          {/* ------box 3----- */}
          <div ref={box3} className="box">
           <div className="box-con">
              <img src={letspark} alt="vcgec" width={'200'}/>
            </div>
            <div className="box-con2">
              <h4>Let's Park!</h4>
              <p>A landing and admin website for Let's Park! mobile app using ReactJs and Firebase</p>
              <div className="icon">
                <a href="https://github.com/cruzjeff25/LetsPark" target='blank'>
                  <img src={github} alt="vcgec" width={'25px'} />
                  Github
                </a>
                <a href="https://letspark.vercel.app/" target='blank'>
                  <img src={web} alt="vcgec" width={'25px'}/>
                  Visit site
                </a>
              </div>
            </div>
          </div>
        {/* ------box 4------- */}
          <div ref={box4}  className="box">
            <div className="box-con">
              <img src={portfolio} alt="vcgec" width={'200'}/>
            </div>
            <div className="box-con2">
              <h4>Portfolio</h4>
              <p>This portfolio website, using ReactJs and ThreeJs</p>
              <div className="icon">
              
              <a href="https://github.com/cruzjeff25/VCGEC" target='blank'>
                <img src={github} alt="vcgec" width={'25px'} />
                Github
              </a>
              </div>
            </div>
          </div>
        </div>

        <h3 className='subtitle' >Graphic Design</h3>

        <div className='designs'>
        <p >View More:<a className='link' href="https://www.behance.net/cruzjeffrey" target='_blank'  rel="noreferrer">@behance.net/cruzjeffrey</a></p>

          <div className='design-con'>
            <iframe ref={design1} className='iframe' src="https://www.behance.net/embed/project/194968487?ilo0=1" height="265" width="360" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>

            <iframe ref={design2} className='iframe' src="https://www.behance.net/embed/project/194965943?ilo0=1" height="265" width="360" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
          </div>
          <div className='design-con'>
            <iframe ref={design3} className='iframe' src="https://www.behance.net/embed/project/194653385?ilo0=1" height="265" width="360" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>

            <iframe ref={design4} className='iframe' src="https://www.behance.net/embed/project/194967985?ilo0=1" height="265" width="360" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
          </div>

        </div>



      </div>

    </section>

  )
}

export default Works