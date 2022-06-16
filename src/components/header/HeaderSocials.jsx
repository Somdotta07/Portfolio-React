import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaMediumM } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
      <div className='header_socials'>
          <a href="https://www.linkedin.com/in/somdottasarkar/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/Somdotta07" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://twitter.com/somdotta_sarkar" target="_blank" rel="noreferrer"><FaTwitter /></a>
           <a href="https://medium.com/@jhilick.s" target="_blank" rel="noreferrer"><FaMediumM /></a>
    </div>
  )
}

export default HeaderSocials