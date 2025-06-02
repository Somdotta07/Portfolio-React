import React from "react";
import "./about.css";
import Me from "../../assets/me-2.png";
import { FaAward, FaCertificate, FaFolder } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Hello I'm</h5>
      <h2>Somdotta Sarkar</h2>
           <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="About me" />
          </div>
          <div className="about_me-buttons">
            <a href="#project" className="btn btn-primary" target="_blank" rel="noreferrer">
              {" "}
              Check my projects
            </a>
            <a href="https://docs.google.com/document/d/1z9cwJHtqo-43KB1XMU1_Y1u00XP_P3t7S6W4_iRTamo/edit?usp=sharing" className="btn btn-primary" rel="noreferrer"  target="_blank">
              {" "}
              Downlod Resume
            </a>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years </small>
            </article>
            <article className="about_card">
              <FaCertificate className="about_icon" />
              <h5>Certificates</h5>
              <small>7+</small>
            </article>
            <article className="about_card">
              <FaFolder className="about_icon" />
              <h5>Projects</h5>
              <small>45+ projects</small>
            </article>
          </div>
          <p>
            I’m a certified full-stack developer with a passion for building
            interactive and dynamic interfaces using JavaScript, React, and
            Node.js. <br />
            <br />I specialize in full-stack web and mobile development,
            crafting high-performance applications with React.js for the web and
            React Native for mobile. <br />
            <br /> I'm open to full-stack opportunities—whether remote or
            onsite—with a strong emphasis on front-end development.Additionally,
            I enjoy freelancing, collaborating on diverse projects, and bringing
            ideas to life with clean, efficient code. <br />
            <br /> If my work resonates with you and you have a project that
            needs expert coding, don’t hesitate to reach out!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
