import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top shadow">
      <div className="container">
        <a className="navbar-brand text-danger" href="#">Portfolio</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-4">
            <li className="nav-item"><a className="nav-link active text-danger" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link text-danger" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link text-danger" href="#skills">Skill</a></li>
            <li className="nav-item"><a className="nav-link text-danger" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link text-danger" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
