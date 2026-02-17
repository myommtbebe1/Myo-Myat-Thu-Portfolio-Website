import React from 'react';
import { skillColumns } from '../data/content';

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold" style={{ margin: '150px 0px' }}>My Skills</h2>
        <div className="row">
          {skillColumns.map((column, colIndex) => (
            <div className="col-md-6" key={colIndex}>
              {column.map((skill) => (
                <div className="row justify-content-around" key={skill.name}>
                  <div className="card border-danger mb-3" style={{ maxWidth: '30rem', height: '5rem' }}>
                    <div className="d-flex justify-content-start gap-4">
                      <div className="card-body">
                        <h5 className="text-start">{skill.name}</h5>
                        <div className="progress" style={{ height: '10px' }}>
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: skill.width, color: 'black' }}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            {skill.label}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
