import React from "react";
import { projectsCSS } from "../styles";
import projects from "../utils/projects.json";

const Projects = () => {
  return (
    <article>
      <div className="contentproject">
        <h1>Projects</h1>
      </div>
      <aside className="asideprojects">
        <ul className="content-Projects">
          {projects.map((project) => (
            <li className="cardProjects" key={project.page}>
              <div className="side forehead">
                <img className="imgforehead" src={project.image} alt="" />
              </div>
              <div className="side behind">
                <div className="diviconCard">
                  <a className="iconCard" href={project.page}>
                    <i className="fas fa-link"></i>
                  </a>
                  <a className="iconCard" href={project.github}>
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </aside>
    </article>
  );
};

export default Projects;
