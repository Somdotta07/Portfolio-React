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
            <a href="#project" className="btn btn-primary" rel="noreferrer">
              {" "}
              Check projects
            </a>
            <a
              href="https://docs.google.com/document/d/1z9cwJHtqo-43KB1XMU1_Y1u00XP_P3t7S6W4_iRTamo/edit?usp=sharing"
              className="btn btn-primary"
              rel="noreferrer"
              target="_blank"
            >
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
              <small>4+ Years </small>
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
            I am a Full-Stack Engineer and Technical Mentor specializing in
            high-scale web automation and AI-driven solutions. With a decade of
            experience spanning development and education, I bridge the gap
            between complex system architecture and intuitive user experiences.{" "}
            <br />
            <br />
            Currently, I am architecting an AI-powered automation engine capable
            of generating thousands of unique web assets in a single pipeline,
            leveraging Python and Cloud Infrastructure (Azure/AWS). My expertise
            lies in building high-performance applications using React,
            TypeScript, and Node.js, while maintaining a rigorous commitment to
            clean code through Test-Driven Development (TDD). <br />
            <br /> Beyond code, I have mentored hundreds of developers,
            fostering Agile collaboration and technical excellence in remote,
            international teams. Whether I'm building scalable SaaS platforms or
            integrating LLMs into modern workflows, I focus on delivering
            measurable business impact. <br />
            <br /> If my work resonates with you and you have a project that
            needs expert coding, don’t hesitate to reach out!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
