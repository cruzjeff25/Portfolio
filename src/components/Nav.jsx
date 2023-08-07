import React from 'react'
import resume from '../Resume.pdf'

const Nav = () => {
  return (
    <nav>
        <ul>
            <li className='link'> <a href='#about'>ABOUT</a></li>
            <li className='link'> <a href='#projects'>PROJECTS</a></li>
            <li className='link'> <a href='#contact'>CONTACT</a></li>
            <li className='resume'><a href={resume} target="_blank" rel='noreferrer' download>RESUME</a></li>
        </ul>
    </nav>

  )
}

export default Nav