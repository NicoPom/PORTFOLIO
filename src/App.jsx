import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

export default function App() {
  return (
    <div className="app">
      <nav>
        <Link className="link" to="/" aria-label="Home">
          <img className="navbar--icon" src="img/home.svg" alt="home_icon" />
          Home
        </Link>
        <Link className="link" to="about" aria-label="About">
          <img className="navbar--icon" src="img/about.svg" alt="about_icon" />
          About
        </Link>
        <Link className="link" to="projects" aria-label="Projects">
          <img
            className="navbar--icon"
            src="img/projects.svg"
            alt="projects_icon"
          />
          Projects
        </Link>
        <Link className="link" to="contact" aria-label="Contact">
          <img
            className="navbar--icon"
            src="img/contact.svg"
            alt="contact_icon"
          />
          Contact
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
