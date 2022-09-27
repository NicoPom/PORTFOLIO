import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  const navClassName = props.isNavBarOpen
    ? "navbar--visible"
    : "navbar--hidden";
  const linkClassName = props.isNavBarOpen ? "link--visible" : "link--hidden";
  return (
    <nav className={navClassName}>
      <NavLink
        className={"navlink" + " " + linkClassName}
        to="/"
        aria-label="Home"
        end
      >
        <img className="navbar--icon" src="img/home.svg" alt="home_icon" />
        Home
      </NavLink>
      <NavLink
        className={"navlink" + " " + linkClassName}
        to="about"
        aria-label="About"
      >
        <img className="navbar--icon" src="img/about.svg" alt="about_icon" />
        About
      </NavLink>
      <NavLink
        className={"navlink" + " " + linkClassName}
        to="projects"
        aria-label="Projects"
      >
        <img
          className="navbar--icon"
          src="img/projects.svg"
          alt="projects_icon"
        />
        Projects
      </NavLink>
      <NavLink
        className={"navlink" + " " + linkClassName}
        to="contact"
        aria-label="Contact"
      >
        <img
          className="navbar--icon"
          src="img/contact.svg"
          alt="contact_icon"
        />
        Contact
      </NavLink>
    </nav>
  );
}
