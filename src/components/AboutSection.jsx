import React from 'react';

export default function AboutSection() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="text-center mb-5">About Me</h2>
        <div className="row">
          <div className="col-md-6">
            <h4 className="text-muted text-center mb-3">Passionate Web Developer & Tech Creator</h4>
            <p className="text-center lh-lg">
              Currently, I am pursuing a Bachelor degree in Information and Communication Technology at Rangsit University, building on my foundation from a diploma at PSB Academy.
            </p>
            <p className="text-center lh-lg">
              Alongside my technical expertise, I bring experience in digital, event, and growth marketing. I am deeply passionate about coding, DevOps, and continuous personal development. I also have strong creative skills with tools such as Photoshop, Illustrator, Blender, and Figma, and enjoy exploring interests including graphic design, dancing, and personal investing.
            </p>
            <div className="text-center mb-4">
              <a href="/image/MyoMyatThu_CV.pdf" download><button className="btn btn-danger rounded-pill shadow-sm mx-2">Download CV Form</button></a>
              <a href="/image/Frontend%20And%20Graphic%20Desinger(Myo%20Myat%20Thu).pdf" download><button className="btn btn-danger rounded-pill shadow-sm">Download Portoflio</button></a>
              <a href="https://www.linkedin.com/in/myo-myat-thu-59a9061b3/"><i className="fa-brands fa-linkedin fs-3 mx-3 text-muted" /></a>
              <a href="https://github.com/myommtbebe1"><i className="fa-brands fa-github fs-3 me-3 text-muted" /></a>
              <a href="https://www.behance.net/myomyatthu1"><i className="fa-brands fa-square-behance fs-3 me-3 text-muted" /></a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="col px-4">
              <div className="row">
                <div className="card border-danger mb-3" style={{ maxWidth: '30rem' }}>
                  <div className="d-flex justify-content-start gap-4">
                    <div className="p-4 rounded-circle"><i className="fa-solid fa-code" /></div>
                    <div className="card-body">
                      <h5 className="card-title">Web Development</h5>
                      <p className="card-text">Creating responsive websites and web applications with modern frameworks.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="card border-danger mb-3" style={{ maxWidth: '30rem' }}>
                  <div className="d-flex justify-content-start gap-4">
                    <div className="p-4 rounded-circle"><i className="fa-solid fa-user" /></div>
                    <div className="card-body">
                      <h5 className="card-title">UI/UX Design</h5>
                      <p className="card-text">Designing intuitive user interfaces and seamless user experiences.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="card border-danger mb-3" style={{ maxWidth: '30rem' }}>
                  <div className="d-flex justify-content-start gap-4">
                    <div className="p-4 rounded-circle"><i className="fa-solid fa-pen-nib" /></div>
                    <div className="card-body">
                      <h5 className="card-title">Graphic Design</h5>
                      <p className="card-text">Designing creative visuals with Photoshop, Illustrator, and Blender - from photo editing and illustration to 3D design.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
