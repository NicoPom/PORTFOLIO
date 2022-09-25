import React from "react";
import { Link, Route, Routes } from "react-router-dom";
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

  // when scrolling, close the navbar
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      isNavBarOpen ? toggleNavBar() : null;
    });
    //cleanup function
    return () => {
      window.removeEventListener("scroll", () => {
        isNavBarOpen ? toggleNavBar() : null;
      });
    };
  }, [isNavBarOpen]);

  return (
    <div className="app">
      <OutsideClickHandler onOutsideClick={() => setIsNavBarOpen(false)}>
        <button onClick={toggleNavBar}>Button</button>
        <nav style={isNavBarOpen ? styles.active : styles.hidden}>
          <Link className="link" to="/" aria-label="Home">
            <img className="navbar--icon" src="img/home.svg" alt="home_icon" />
            Home
          </Link>
          <Link className="link" to="about" aria-label="About">
            <img
              className="navbar--icon"
              src="img/about.svg"
              alt="about_icon"
            />
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
