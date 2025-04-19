import React, { useEffect, useRef, useState } from 'react';
import ps from '../img/ps.png';
import vcgec from '../img/vcgec.jpg';
import github from '../img/github.png';
import behance from '../img/behance.png';
import web from '../img/web.png';
import ceo from '../img/ceo.png';
import letspark from '../img/letspark.jpg';
import portfolio from '../img/portfolio.jpg';
import lpo from '../img/lpo.png';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const [selected, setSelected] = useState('graphic');

  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const design1 = useRef(null);
  const design2 = useRef(null);
  const design3 = useRef(null);
  const design4 = useRef(null);

  const gsapAnim = (el, xDir) => {
    gsap.fromTo(
      el,
      { opacity: 0, x: xDir },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0,
        scrollTrigger: {
          trigger: el,
          toggleActions: 'restart none none none',
        },
      }
    );
  };

  useEffect(() => {
    [box1, box2, box3, box4].forEach((ref, idx) => {
      if (ref.current) gsapAnim(ref.current, idx % 2 === 0 ? -45 : 45);
    });

    [design1, design2, design3, design4].forEach((ref, idx) => {
      if (ref.current) gsapAnim(ref.current, idx % 2 === 0 ? -45 : 45);
    });
  }, []);

  return (
    <section id='projects'>
      <div id='works' className='container'>
        {/* <h1>Works</h1> */}

        <div className='tab-selector'>
          <h3
            className={`subtitle tab ${selected === 'graphic' ? 'active-tab' : ''}`}
            onClick={() => setSelected('graphic')}
          >
            Graphic Design
          </h3>
          <h3
            className={`subtitle tab ${selected === 'web' ? 'active-tab' : ''}`}
            onClick={() => setSelected('web')}
          >
            Web Dev/Design
          </h3>
        </div>


        {/* GRAPHIC DESIGN SECTION */}
        {selected === 'graphic' && (

          <div className='designs'>
            
            {/* <div className="softwares">
            <img src={ps} alt='photoshop' width={'45'} />
            <img src={ps} alt='vcgec' width={'45'} />
            <img src={ps} alt='vcgec' width={'45'} />
            </div> */}

            <p>
              View more graphic designs:
              <a className='link' href='https://www.behance.net/cruzjeffrey' target='_blank' rel='noreferrer'>
                @behance.net/cruzjeffrey
              </a>
            </p>
            <div className='design-con'>
            <iframe ref={design1} className='iframe' src="https://www.behance.net/embed/project/223863233?ilo0=1" height="200" width="350" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
            <iframe ref={design2} className='iframe' src="https://www.behance.net/embed/project/223862017?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
            </div>
            <div className='design-con'>
              <iframe ref={design3} className='iframe' src='https://www.behance.net/embed/project/194653385?ilo0=1' height='265' width='360' allowFullScreen loading='lazy' frameBorder='0' allow='clipboard-write' referrerPolicy='strict-origin-when-cross-origin'></iframe>
              <iframe ref={design4} className='iframe' src="https://www.behance.net/embed/project/203205159?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
              
            </div>

          </div>
        )}
        

        {/* WEB DEV/DESIGN SECTION */}
        {selected === 'web' && (
          <>
            <div className='top'>
              <div ref={box1} className='box'>
                <div className='box-con'>
                  <img src={lpo} alt='vcgec' width={'200'} />
                </div>
                <div className='box-con2'>
                  <h4>LPO Website</h4>
                  <p>A website for LPO Company created using shopify</p>
                  <div className='icon'>
                    <a href='https://www.behance.net/gallery/223863233/LPO-Website-Design-and-Development' target='blank'>
                      <img src={behance} alt='github' width={'20px'} />
                      Behance
                    </a>
                    <a href='https://laptoppcoutlet.com' target='blank'>
                      <img src={web} alt='web' width={'20px'} />
                      Visit site
                    </a>
                  </div>
                </div>
              </div>

              <div ref={box2} className='box'>
                <div className='box-con'>
                  <img src={ceo} alt='ceo' width={'200'} />
                </div>
                <div className='box-con2'>
                  <h4>CEO Build</h4>
                  <p>A Static website for CEO Build Brand</p>
                  <div className='icon'>
                    <a href='https://github.com/cruzjeff25/CEO-Build-Website' target='blank'>
                      <img src={github} alt='github' width={'25px'} />
                      Github
                    </a>
                    <a href='https://ceobuildcomputers.com/' target='blank'>
                      <img src={web} alt='web' width={'25px'} />
                      Visit site
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='bottom'>
              <div ref={box3} className='box'>
                <div className='box-con'>
                  <img src={letspark} alt='letspark' width={'200'} />
                </div>
                <div className='box-con2'>
                  <h4>Let's Park!</h4>
                  <p>A landing and admin website for Let's Park! mobile app using ReactJs and Firebase</p>
                  <div className='icon'>
                    <a href='https://github.com/cruzjeff25/LetsPark' target='blank'>
                      <img src={github} alt='github' width={'25px'} />
                      Github
                    </a>
                    <a href='https://letspark.vercel.app/' target='blank'>
                      <img src={web} alt='web' width={'25px'} />
                      Visit site
                    </a>
                  </div>
                </div>
              </div>


              <div ref={box4} className='box'>
                <div className='box-con'>
                  <img src={vcgec} alt='vcgec' width={'200'} />
                </div>
                <div className='box-con2'>
                  <h4>VCGEC Website</h4>
                  <p>A website for VCGEC created using ReactJs</p>
                  <div className='icon'>
                    <a href='https://github.com/cruzjeff25/VCGEC' target='blank'>
                      <img src={github} alt='github' width={'25px'} />
                      Github
                    </a>
                    <a href='https://vcgec.vercel.app' target='blank'>
                      <img src={web} alt='web' width={'25px'} />
                      Visit site
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Works;