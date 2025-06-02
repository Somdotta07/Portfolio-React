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
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>
                Expertise in MERN stack (MongoDB, Express.js, React.js, Node.js)
                for robust and scalable web applications.
              </p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>
                Development of E-commerce platforms, ensuring seamless shopping
                experiences.
              </p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>
                Quality Assurance & Testing to deliver reliable and
                high-performance applications.
              </p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>
                Integration with third-party APIs, databases, and cloud services
                based on project requirements.
              </p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service_head">
            <h3>Front-end & Mobile Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>
                Designing and developing high-performance front-end
                applications, primarily using React.js.
              </p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>
                Developing mobile applications using React Native, with secure
                JWT authentication.
              </p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>
                Optimizing applications for maximum speed, responsiveness, and
                SEO.
              </p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>
                Seamless collaboration with back-end developers and UI/UX
                designers to enhance usability and efficiency.
              </p>
            </li>
          </ul>
        </article>

        <article className="services">
          <div className="service_head">
            <h3>UI/UX Design & Optimization</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>
                Improving user interaction for intuitive and engaging
                experiences.
              </p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>
                Boosting business growth by refining design, accessibility, and
                application speed.
              </p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>
                Tailoring solutions based on user research, ensuring customer
                satisfaction and retention.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
