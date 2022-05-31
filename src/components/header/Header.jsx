import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>
          Hello I'm
        </h5>
        <h1>Somdotta Sarkar</h1>
        <h5 className="text-light"> Full-stack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={Me} alt="" />
        </div>
        <a href="#contact" className="scroll_down">Scroll Down</a>
     </div>
    </header>
  )
}

export default Header