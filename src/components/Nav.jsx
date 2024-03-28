import React, {useState} from 'react'
import resume from '../Resume.pdf'

const Nav = () => {
  const [active, setActive] = useState(false);
  const toggleNavbar = () => {
    setActive(!active)
  }

  return (
    <nav className={active ? "nav_active" : "nav"}>
        <ul onClick={toggleNavbar}>
            <li className='link'> <a href='#about'>ABOUT</a></li>
            <li className='link'> <a href='#projects'>WORKS</a></li>
            <li className='link'> <a href='#contact'>CONTACT</a></li>
            <li className='resume'><a href={resume} target="_blank" rel='noreferrer' download>RESUME</a></li>


        </ul>
        <div className='burger' onClick={toggleNavbar} >
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>

        <div className='close' onClick={toggleNavbar} >
          <span className='barClose'></span>
          <span className='barClose'></span>
        </div>
    </nav>

  )
}

export default Nav