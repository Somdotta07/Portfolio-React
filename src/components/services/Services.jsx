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
              <p>I build front-end websites and mobile applications </p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>I optimize applications for maximum speed.</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>I collaborate with back-end developers and web designers to improve usability. </p>
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
              <p>I build web apps using React, Rails or Ruby on Rails and PostgreSQL</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>I create Ecommerce Applications </p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>QA and Tests</p>
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
              <p> I improve user interaction  and customer satisfaction</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>I help to boost business growth by improving application runtime speed</p>
            </li>
          </ul>
        </article>       
      </div>
    </section>
  );
};

export default Services;
