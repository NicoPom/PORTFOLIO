import React from "react";

export default function Projects() {
  // render the projects with a video and a link to the github repo
  const videos = [
    {
      title: "Tic Tac Toe",
      url: "video/scrim.mp4",
      liveSite: "https://nicopom.github.io/Rock-Paper-Scissors/",
      github: "https://github.com/NicoPom/Rock-Paper-Scissors",
    },
  ];

  function handleMouseOver(e) {
    e.target.play();
  }

  function handleMouseOut(e) {
    e.target.pause();
    e.target.currentTime = 0;
    // display poster image
    e.target.load();
  }

  const videoElements = videos.map((video) => (
    <div className="project" key={video.title}>
      <h3>{video.title}</h3>
      <video
        className="project--video"
        width="90%"
        poster="img/profile_picture.png"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        muted
      >
        <source src={video.url} type="video/mp4" />
      </video>
      <div className="project--links">
        <a href={video.liveSite} target="_blank" rel="noopener noreferrer">
          Live Site ↗
        </a>
        <a href={video.github} target="_blank" rel="noopener noreferrer">
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
