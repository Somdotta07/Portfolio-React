import React from "react";
import "./project.css";
import IMG1 from '../../assets/somarven.png';


const projects = [{
  id: 1,
  image: IMG1,
  title: 'Somarven full-stack project',
  github: 'https://github.com/Somdotta07/Somarven-Arenas-frontend',
  demo:'https://somarven.netlify.app/'
},
 {
  id: 2,
  image: IMG1,
  title: 'Somarven full-stack project',
  github: 'https://github.com/Somdotta07/Somarven-Arenas-frontend',
  demo:'https://somarven.netlify.app/'
  }, 
 {
  id: 3,
  image: IMG1,
  title: 'Somarven full-stack project',
  github: 'https://github.com/Somdotta07/Somarven-Arenas-frontend',
  demo:'https://somarven.netlify.app/'
  },
 {
  id: 4,
  image: IMG1,
  title: 'Somarven full-stack project',
  github: 'https://github.com/Somdotta07/Somarven-Arenas-frontend',
  demo:'https://somarven.netlify.app/'
  },
 {
  id: 5,
  image: IMG1,
  title: 'Somarven full-stack project',
  github: 'https://github.com/Somdotta07/Somarven-Arenas-frontend',
  demo:'https://somarven.netlify.app/'
  },
 {
  id: 6,
  image: IMG1,
  title: 'Somarven full-stack project',
  github: 'https://github.com/Somdotta07/Somarven-Arenas-frontend',
  demo:'https://somarven.netlify.app/'
},
]
const Projects = () => {
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container project_container">
        {projects.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="project_item">
          <div className="project_item-image">
          <img src={image} alt={title} />
          </div>
              <h3>{title}</h3>
          <div className="project-item-cta">
                     <a
            href={github}
            className="btn"
          >
            Github
          </a>
          <a href={demo} className="btn btn-primary" target='_blank' rel="noreferrer">
            Live Demo
          </a>
          </div> 
        </article>
          )
        })}               
      </div>
    </section>
  );
};

export default Projects;
