import React from "react";
import "./project.css";
import IMG1 from "../../assets/novel_admin.png";
import IMG2 from "../../assets/novel.png";
import IMG3 from "../../assets/streamfog.png";
import IMG4 from "../../assets/admin.png";
import IMG5 from "../../assets/alluvie.png";
import IMG6 from "../../assets/elcami.png"
import IMG7 from "../../assets/mobile_app.gif";
import IMG8 from "../../assets/vista.png";
import IMG9 from "../../assets/malta-weather.png";



const projects = [
  {
    id: 1,
    image: IMG8,
    title: "Vistacloud",
    demo: "https://vistacloud.in/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Novel",
    demo: "https://novelaquatech.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Streamfog",
    demo: "https://streamfog.com/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Locate user",
    demo: "https://novelaquatech.com/logistics/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Alluie",
    demo: "https://alluvie.com/"
  },

  {
    id: 6,
    image: IMG6,
    title: "Elcami",   
    demo: "https://elcamidelasolidaritat.org/",
  },
    {
    id: 7,
    image: IMG7,
    title: "Mobile App",   
    demo: "",
  },
  {
    id: 8,
    image: IMG9,
    title: "Malta Weather App",   
    demo: "",
  }
      {
    id: 9,
    image: IMG1,
    title: "Admin Panel",   
    demo: "https://orange-glacier-056ab3a00.6.azurestaticapps.net/organizations",
  },
      ,


];
const Projects = () => {
  return (
    <section id="project">
      <h5>My Recent</h5>
      <h2>Projects</h2>
      <div className="container project_container">
        {projects.map(({ id, image, title, demo }) => {
          return (
            <article key={id} className="project_item">
              <div className="project_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="project-item-cta">
                
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
