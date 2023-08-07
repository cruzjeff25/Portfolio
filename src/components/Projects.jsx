import React from "react";
import vcgec from '../img/vcgec.jpg';
import github from '../img/github.png'
import web from '../img/web.png'
import contact from '../img/contact.jpg'
import letspark from '../img/letspark.jpg'
import portfolio from '../img/portfolio.jpg'


const Projects = () => {


  return (
    <section id='projects'>
      <div className='container'>
        <h1>Projects</h1> 

        <div className="top">
        {/* -----box 1------ */}
          <div className="box">
            <div className="box-con">
              <img src={vcgec} alt="vcgec" width={'200'}/>
            </div>
            <div className="box-con2">
              <h4>VCGEC Website</h4>
              <p>A website for Valenzuela Government Employees Cooperative using ReactJs</p>
              <a href="https://github.com/cruzjeff25/VCGEC" target='blank'>
                <img src={github} alt="vcgec" width={'25px'} />
                Github
              </a>
              <a href="https://vcgec.vercel.app" target='blank'>
                <img src={web} alt="vcgec" width={'25px'}/>
                Visit site
              </a>
            </div>
          </div >

          {/* -----box 2------ */}
          <div className="box">
            <div className="box-con">
              <img src={contact} alt="vcgec" width={'200'}/>
            </div>
            <div className="box-con2">
              <h4>Contacts</h4>
              <p>A simple Create, Read, Update, and Delete System using PHP and MySQL</p>
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


        <div className="bottom">
          {/* ------box 3----- */}
          <div className="box">
           <div className="box-con">
              <img src={letspark} alt="vcgec" width={'200'}/>
            </div>
            <div className="box-con2">
              <h4>Let's Park!</h4>
              <p>A landing and admin website for Let's Park! mobile app using ReactJs and Firebase</p>
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
        {/* ------box 4------- */}
          <div className="box">
            <div className="box-con">
              <img src={portfolio} alt="vcgec" width={'200'}/>
            </div>
            <div className="box-con2">
              <h4>Portfolio</h4>
              <p>This website, using ReactJs and ThreeJs</p>
              <a href="https://github.com/cruzjeff25/VCGEC" target='blank'>
                <img src={github} alt="vcgec" width={'25px'} />
                Github
              </a>
            </div>
          </div>
        </div>

      </div>

    </section>

  )
}

export default Projects