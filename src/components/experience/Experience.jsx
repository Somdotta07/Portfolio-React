import React from "react";
import "./experience.css";
import css3 from "../../assets/css3.png";
import html from "../../assets/html-5.png";
import js from "../../assets/javascript.png";
import react from "../../assets/react.png";
import wp from "../../assets/wp.png";
import three from "../../assets/threejs.png";
import node from "../../assets/node.jpg";
import postgr from "../../assets/postgresql.png";
import python from "../../assets/python.png";
import rails from "../../assets/rails.png";
import ruby from "../../assets/ruby.png";
import shopify from "../../assets/shopify.png";
import mongo from "../../assets/mongo.webp";
import figma from "../../assets/figma.jfif";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <img src={html} className="experience_details-icon" alt="html" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={css3} className="experience_details-icon" alt="css" />
              <div>
                <h4>CSS3</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={js} className="experience_details-icon" alt="js" />
              <div>
                <h4>JAVASCRIPT Libraries</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                src={react}
                className="experience_details-icon"
                alt="react"
              />
              <div>
                <h4>REACT, React Native & REDUX</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                src={figma}
                className="experience_details-icon"
                alt="figma"
              />
              <div>
                <h4>Figma</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={wp} className="experience_details-icon" alt="wp" />
              <div>
                <h4>Wordpress</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                src={shopify}
                className="experience_details-icon"
                alt="shopify"
              />
              <div>
                <h4>Shopify</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                src={three}
                className="experience_details-icon"
                alt="threejs"
              />
              <div>
                <h4>Three.js</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development & AI</h3>
          <div className="experience_content">
            <article className="experience_details">
              <img src={node} className="experience_details-icon" alt="node" />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                src={mongo}
                className="experience_details-icon"
                alt="mongo"
              />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                src={postgr}
                className="experience_details-icon"
                alt="postgresql"
              />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={ruby} className="experience_details-icon" alt="ruby" />
              <div>
                <h4>Ruby</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                src={rails}
                className="experience_details-icon"
                alt="rails"
              />
              <div>
                <h4>Ruby on Rails</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                src={python}
                className="experience_details-icon"
                alt="python"
              />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_cloud">
          <h3> Cloud & Platforms</h3>
          <div className="experience_content">
            <article className="experience_details">
              <div>
                <h4>AWS</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <h4>Microsoft Azure</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <h4>GIT & GitHub</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <h4>Docker</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <h4>Vercel</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <h4>Netlify</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <h4>Heroku</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
          </div>
        </div>
        <div className="Professional">
          <h3> Professional</h3>
          <div className="experience_content">
            <article className="experience_details">
              <div>
                <h4>Agile Development</h4>
                <small className="text-light">Expert in Scrum/Kanban workflows, Sprint planning, and cross-functional team collaboration via Jira.</small>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <h4> Remote Collaboration</h4>
                <small className="text-light">Proven track record in international, distributed teams using Git/GitHub, Slack, and Zoom.</small>
              </div>
            </article>
             <article className="experience_details">
              <div>
                <h4>Technical Mentorship</h4>
                <small className="text-light">8+ years of experience teaching, conducting code reviews, and guiding developers through complex debugging.</small>
              </div>
            </article>
             <article className="experience_details">
              <div>
                <h4>Strategic Planning</h4>
                <small className="text-light">Requirements gathering, system architecture design, and SEO/Performance optimization.</small>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <h4>English</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <h4>German</h4>
                <small className="text-light">A1</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
