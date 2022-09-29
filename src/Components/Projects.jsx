import React from "react";
import { projects } from "../projectsData";

export default function Projects() {
  function handleMouseOver(e) {
    e.target.style = "opacity: 1";
    setTimeout(() => {
      e.target.play();
    }, 100); // delay to prevent error
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
      <div
        className="project--card"
        style={{ backgroundImage: `url(${project.thumbnail})` }}
      >
        <a href={project.liveSite}>
          <video
            className="project--video"
            src={project.videoURL}
            preload="auto"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            muted
            loop
          ></video>
        </a>
      </div>
      <p className="project--description">{project.description}</p>
      <div className="project--links">
        <a href={project.liveSite} className="project--link">
          Live Site ↗
        </a>
        <a href={project.github} className="project--link">
          Github ↗
        </a>
      </div>
    </li>
  ));

  return (
    <div className="container">
      <h2>Projects</h2>
      <ul className="project--list">{projectElements}</ul>
    </div>
  );
}
