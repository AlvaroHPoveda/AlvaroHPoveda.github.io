import React from 'react';
import projects from "../projects.json"

const Projects = () => {
    return (
        <article>
            <div className='contentproject'>
                <h1>
                    Projects
                </h1>
            </div>
            <aside className='asideprojects'>
                <ul className='content-Projects'>
                    {
                        projects.map(project => (

                            <li className='cardProjects'>                               
                                <div className='side forehead'>
                                    <img className='imgforehead'  src={project.image} alt="" />
                                </div>
                                <div className='side behind'>
                                    <div className='diviconCard'>
                                        <a className='iconCard' href={project.page}><i class="fas fa-link"></i></a>
                                        <a className='iconCard'href={project.github}><i class="fab fa-github"></i></a>
                                    </div>
                                </div>                                                            
                            </li> 
                            
                        ))
                    }                                                                        
                </ul> 
            </aside>           
        </article>
    );
};

export default Projects;