import React from "react";
import "./project.css";
import IMG1 from '../../assets/streamfog.png';
import IMG2 from '../../assets/alluvie.png';
import IMG3 from '../../assets/somarven.png';
import IMG4 from '../../assets/Space Travel.PNG';
import IMG5 from '../../assets/awesomebooks.png';
import IMG6 from '../../assets/Covid.png';


const projects = [
  {
    id: 1,
    image: IMG1,
    title: 'Streamfog',
    github: '',
    demo:'https://streamfog.com/'
  },{
  id: 2,
  image: IMG2,
  title: 'Alluvie',
  github: '',
  demo:'https://alluvie.com/'
},

  
 {
  id: 3,
  image: IMG3,
  title: 'Somarven- Full-stack Group project',
  github: 'https://github.com/Somdotta07/Somarven-Arenas-frontend',
   demo: 'https://somarven.netlify.app/'
  },
 
 {
  id: 4,
  image: IMG4,
  title: 'Space Travelers Hub- React-Redux Group project',
  github: 'https://github.com/Somdotta07/space-travelers-hub',
  demo:'https://cranky-cray-0feacf.netlify.app/'
  },
 {
  id: 5,
  image: IMG6,
  title: 'Awesome Books - displays, add books',
  github: 'https://github.com/Somdotta07/Awesome_Books',
  demo:'https://somdotta07.github.io/Awesome_Books/'
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
