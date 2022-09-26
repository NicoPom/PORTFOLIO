import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";

import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

export default function App() {
  const [isNavBarOpen, setIsNavBarOpen] = React.useState(false);

  const styles = {
    active: {
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

  function toggleNavBar() {
    setIsNavBarOpen(!isNavBarOpen);
  }

  // close navbar when scrolling but not when automatic scrolling to anchor
  React.useEffect(() => {
    function handleScroll() {
      setIsNavBarOpen(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <OutsideClickHandler onOutsideClick={() => setIsNavBarOpen(false)}>
        <button onClick={toggleNavBar}>Button</button>
        <nav style={isNavBarOpen ? styles.active : styles.hidden}>
          <NavLink className="link" to="/" aria-label="Home" end>
            <img className="navbar--icon" src="img/home.svg" alt="home_icon" />
            Home
          </NavLink>
          <NavLink className="link" to="about" aria-label="About">
            <img
              className="navbar--icon"
              src="img/about.svg"
              alt="about_icon"
            />
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
      </OutsideClickHandler>
      <Routes>
        <Route path="/" element={<Home onClick />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
