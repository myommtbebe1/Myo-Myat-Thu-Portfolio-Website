import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="text-center mb-5 text-danger" style={{ margin: '150px 0px' }}>Get in Touch</h2>
        <p className="text-center mb-5">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
        <div className="row">
          <div className="col-12 col-md-5">
            <h4 className="text-center text-muted">Contact Information</h4>
            <div className="col px-4">
              <div className="row">
                <div className="d-flex p-4 rounded circle">
                  <i className="fa-solid fa-envelope fa-xl" style={{ paddingTop: '21px' }} />
                  <div className="d-flex flex-column" style={{ paddingLeft: '30px' }}>
                    <div className="p-1"><h4>Email</h4></div>
                    <div className="p-1"><p>myomyatthu6666@gmail.com</p></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="d-flex p-4 rounded circle">
                  <i className="fa-solid fa-phone fa-xl" style={{ paddingTop: '21px' }} />
                  <div className="d-flex flex-column" style={{ paddingLeft: '30px' }}>
                    <div className="p-1"><h4>Phone</h4></div>
                    <div className="p-1"><p>+66 80-110-8569</p></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="d-flex p-4 rounded circle">
                  <i className="fa-solid fa-location-dot fa-xl" style={{ paddingTop: '21px' }} />
                  <div className="d-flex flex-column" style={{ paddingLeft: '30px' }}>
                    <div className="p-1"><h4>Location</h4></div>
                    <div className="p-1"><p>52, 347 ถนน พหลโยธิน, Lak Hok, Mueang Pathum Thani District, Pathum Thani 12000</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-7">
            <form action="https://formsubmit.co/myomyatthu6666@gmail.com" method="POST">
              <label htmlFor="email" className="form-label">Email address:</label>
              <div className="input-group mb-4">
                <input name="email" type="email" id="email" className="form-control" placeholder="Enter Your Email...." required />
              </div>

              <label htmlFor="name" className="form-label">Name:</label>
              <div className="mb-4 input-group">
                <input name="name" type="text" id="name" className="form-control" placeholder="Enter Your Name" required />
              </div>

              <div className="mb-4 mt-5 form-floating">
                <textarea name="message" className="form-control" id="query" style={{ height: '140px' }} placeholder="query" />
                <label htmlFor="query">Your query...</label>
              </div>

              <div className="mb-4 text-center">
                <button type="submit" className="btn btn-danger rounded shadow-sm p-2">
                  <i className="fa-solid fa-paper-plane mx-2" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
