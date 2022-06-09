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
            <h3>Front-end Creation</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Help to build responsive front-end portion of websites and web applications </p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Optimize applications for maximum speed.</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Collaborate with back-end developers and web designers to improve usability. </p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Rails or Ruby on Rails: Ruby, PostgreSQL, Ruby on Rails</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Ecommerce Applications </p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>QA and Testing</p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Improve user interaction  and customer satisfaction</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Help to boost growth of the business</p>
            </li>
          </ul>
        </article>       
      </div>
    </section>
  );
};

export default Services;
