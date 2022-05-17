import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaMediumM } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
      <div className='header_socials'>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://medium.com" target="_blank" rel="noreferrer"><FaMediumM /></a>
    </div>
  )
}

export default HeaderSocials