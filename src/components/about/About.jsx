import React from "react";
import "./about.css";
import Me from "../../assets/Somdotta.jpg";
import { FaAward, FaCertificate, FaFolder} from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="About me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about_card">
              <FaCertificate className="about_icon" />
              <h5>Certificates</h5>
              <small>7+</small>
            </article>
            <article className="about_card">
              <FaFolder className="about_icon" />
              <h5>Projects</h5>
              <small>40+ projects completed</small>
            </article>
          </div>
          <p>I’m a certified full-stack developer, who enjoys building interactive  interfaces with JavaScript, React and Ruby On Rails.
            <br />
            <br />
            I'm also a Mentor, Project Reviewer at Microverse.
            <br />
            <br />
            I'm open to front-end (remote) opportunities.
            If you like what you see and have a project you need coded, 
            don’t hestiate to contact me.
          </p>
          <a href="#contact" className="btn btn-primary"> Let's talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
