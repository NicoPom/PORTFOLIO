import React from "react";
import { videos } from "../videoData";

export default function Projects() {
  // render the projects with a video and a link to the github repo

  function handleMouseOver(e) {
    e.target.play();
    // cursor pointer
    e.target.style.cursor = "pointer";
  }

  function handleMouseOut(e) {
    e.target.pause();
    e.target.currentTime = 0;
    e.target.load();
  }

  const videoElements = videos.map((video) => (
    <div className="project" key={video.title}>
      <h3>{video.title}</h3>
      <a href="https://nicopom.github.io/Rock-Paper-Scissors/">
        <video
          className="project--video"
          width="200px"
          height="200px"
          poster="img/profile_picture.png"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          muted
        >
          <source src={video.url} type="video/mp4" />
        </video>
      </a>
      <div className="project--links">
        <a href={video.liveSite} rel="noopener noreferrer">
          Live Site ↗
        </a>
        <a href={video.github} rel="noopener noreferrer">
          GitHub ↗
        </a>
      </div>
    </div>
  ));

  return (
    <div className="projects container">
      <h2>Projects</h2>
      {videoElements}
    </div>
  );
}
