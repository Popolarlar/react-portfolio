
import React from 'react';
import Project from './Project'

function ProjectList() {
  return (
    <React.Fragment>
    <section id="projects">
    <div className="container">
      <div className="project-wrapper">
        <h2 className="section-title dark-blue-text">
          Projects
        </h2>
        <Project/>
        <Project/>
        <Project/>
        
        </div>
      </div>
    </section>
    </React.Fragment>
  );
}
export default ProjectList;