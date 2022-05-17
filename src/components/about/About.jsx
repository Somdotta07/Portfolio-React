import React from "react";
import "./about.css";
import Me from "../../assets/me.jpg";
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
              <small>5+</small>
            </article>
            <article className="about_card">
              <FaFolder className="about_icon" />
              <h5>Projects</h5>
              <small>40+ projects completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non ante lectus.
            Ut nec malesuada ipsum. Vestibulum tempus eleifend ante, a dictum purus faucibus nec.
            Curabitur vel libero vel est pretium venenatis vel vitae mi.
            Donec sed elementum massa, ac hendrerit neque. In aliquam convallis velit et fermentum.
          </p>
          <a href="#contact" className="btn btn-primary"> Let's talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
