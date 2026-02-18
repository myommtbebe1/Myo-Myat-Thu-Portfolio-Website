import React from 'react';

export default function HomeSection() {
  return (
    <section id="home">
      <div className="container">
        <div className="row vh-100 align-items-center align-content-center px-5">
          <div className="col-md-6 text-center" style={{ marginTop: '-200px' }}>
            <img
              src="/image/myphoto.png"
              className="rounded rounded-circle"
              alt="Myo Myat Thu"
              width="100%"
              height="100%"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-6 order-md-first mt-4 home-intro-up">
            <p className="text-muted">Hello I am</p>
            <h1 className="text-danger text-uppercase fw-bold">Frontend Developer and Graphic Desinger</h1>
            <h2 className="text-secondary">Myo Myat Thu</h2>
            <p className="text-muted">
              I am a Frontend Developer skilled in Html, Css, JavaScript, React, and Vue.js with additional
              expertise in creative tools such as Figma, Photoshop, Illustrator, and Blender.
            </p>
            <a href="#projects"><button className="btn btn-danger text-white rounded shadow-sm">My Work</button></a>
          </div>
        </div>
      </div>
    </section>
  );
}
