import React from "react";
import { projects } from "../projectsData";

export default function Projects() {
  function handleMouseOver(e) {
    e.target.play();
  }

  function handleMouseOut(e) {
    e.target.pause();

    // This is to reset the video to the beginning
    e.target.currentTime = 0;
    e.target.load();
  }

  const projectElements = projects.map((project) => (
    <div className="project" key={projects.indexOf(project)}>
      <h3>{project.title}</h3>
      <a href={project.liveSite}>
        <video
          className="project--video"
          poster="img/profile_picture.png"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          muted
        >
          <source src={project.videoURL} type="video/mp4" />
        </video>
      </a>

      <div className="project--links">
        <a href={project.liveSite} rel="noopener noreferrer">
          Live Site ↗
        </a>
        <a href={project.github} rel="noopener noreferrer">
          GitHub ↗
        </a>
      </div>
    </div>
  ));

  return (
    <div className="projects container">
      <h2>Projects</h2>
      {projectElements}
    </div>
  );
}
