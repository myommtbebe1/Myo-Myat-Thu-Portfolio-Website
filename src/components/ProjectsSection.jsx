import React from 'react';
import VercelIcon from './VercelIcon';
import { projects } from '../data/content';

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="text-center mb-5" style={{ margin: '150px 0px' }}>Featured Projects</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 mx-4">
          {projects.map((project) => (
            <div className="col d-flex" key={project.title}>
              <div className="card h-100 w-100">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.text}</p>
                  <div className="mt-auto">
                    {project.repo && (
                      <a href={project.repo}><i className="fa-brands fa-github fs-3 me-3 text-muted" /></a>
                    )}
                    {project.demo && (
                      <a href={project.demo}><VercelIcon /></a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
