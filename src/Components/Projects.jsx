import React from "react";
import { projects } from "../projectsData";

export default function Projects() {
  const isMobile = "ontouchstart" in document.documentElement; // check if device is mobile

  function handleMouseOver(e) {
    e.target.style = "opacity: 1";
    setTimeout(() => {
      e.target.play();
    }, 150); // delay to prevent error
  }

  function handleMouseOut(e) {
    e.target.style = "opacity: 0";
    // rewind to the beginning
    e.target.currentTime = 0;
    e.target.pause();
  }

  const projectElements = projects.map((project) => (
    <li className="project--item" key={project.id}>
      <h3 className="project--title">{project.title}</h3>
      <p className="project--description">{project.description}</p>
      <div
        className="project--card"
        style={{ backgroundImage: `url(${project.thumbnail})` }}
      >
        <a href={project.liveSite}>
          <video
            className="project--video"
            src={project.videoURL}
            preload="auto"
            autoPlay={isMobile} // autoplay on mobile
            onMouseOver={isMobile ? null : handleMouseOver}
            onMouseOut={isMobile ? null : handleMouseOut}
            style={{ opacity: isMobile ? 1 : 0 }}
            muted
            loop
          ></video>
        </a>
      </div>

      <div className="project--links">
        <a href={project.liveSite} className="project--link external--link">
          Live Site ↗
        </a>
        <a href={project.github} className="project--link external--link">
          Github ↗
        </a>
      </div>
    </li>
  ));

  return (
    <div className="container">
      <h2>Projects</h2>
      <ul className="projects--list">{projectElements}</ul>
    </div>
  );
}
