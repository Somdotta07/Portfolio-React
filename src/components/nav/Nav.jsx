/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./nav.css";
import { FaHome, FaUser, FaBook, FaProjectDiagram } from "react-icons/fa";
import { MdContactMail } from 'react-icons/md'
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUser /></a>
      <a href="#experience"  onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBook /></a>
      <a href="#project"  onClick={() => setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}><FaProjectDiagram /></a>
      <a href="#contact"  onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContactMail /></a>
    </nav>
  );
};

export default Nav;
