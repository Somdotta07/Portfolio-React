import React from "react";
import "./services.css";
import { FaCheckSquare } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="services">
          <div className="service_head">
            <h3>Full-Stack & Product Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>
                Building scalable web applications using MERN / PERN stacks
                (React, Node.js, PostgreSQL, MongoDB).
              </p>
            </li>

            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>
                Developing mobile applications using React Native with secure
                authentication and backend integration.
              </p>
            </li>

            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>
                Designing and integrating RESTful APIs and third-party services
                for full product functionality.
              </p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>
                Optimizing applications for maximum speed, responsiveness, and SEO.
              </p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service_head">
            <h3>AI & Automation Engineering</h3>
          </div>
        <ul className="service_list">
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>
                Building AI-powered workflows using OpenAI APIs for content,
                automation, and intelligent features.
              </p>
            </li>

            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>
                Integrating AI into products for content generation, analytics,
                and decision support systems.
              </p>
            </li>

            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>
                Creating Python-based automation tools that combine data,
                APIs, and LLMs.
              </p>
            </li>
          </ul>
        </article>

        <article className="services">
          <div className="service_head">
            <h3>Product Design & Optimization</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>
                  Designing responsive and intuitive user interfaces focused on
                usability and conversion.
              </p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>
                Improving application performance, SEO, and overall user
                experience.
              </p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>
                Refining products based on user behavior and feedback to improve
                retention.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
