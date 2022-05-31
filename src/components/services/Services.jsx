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
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service_head">
            <h3>Front-end Creation</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
