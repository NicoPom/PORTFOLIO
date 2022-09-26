import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  const styles = {
    visible: {
      visibility: "visible",
      transition: "all 0.5s",
      transform: "translateX(0vw)",
    },
    hidden: {
      visibility: "hidden",
      transition: "all 0.5s",
      transform: "translateX(+100vw)",
    },
  };
  return (
    <nav style={props.isNavBarOpen ? styles.visible : styles.hidden}>
      <NavLink className="link" to="/" aria-label="Home" end>
        <img className="navbar--icon" src="img/home.svg" alt="home_icon" />
        Home
      </NavLink>
      <NavLink className="link" to="about" aria-label="About">
        <img className="navbar--icon" src="img/about.svg" alt="about_icon" />
        About
      </NavLink>
      <NavLink className="link" to="projects" aria-label="Projects">
        <img
          className="navbar--icon"
          src="img/projects.svg"
          alt="projects_icon"
        />
        Projects
      </NavLink>
      <NavLink className="link" to="contact" aria-label="Contact">
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
