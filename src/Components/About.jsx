import React from "react";

export default function About() {
  return (
    <div className="container">
      <h2>About</h2>
      <img
        className="profile--picture"
        src="img/profile_picture.png"
        alt="profile_picture"
      />
      <p>Self taught Frontend Developer loving to learn and solve problems.</p>
      <p>
        My stack of choice is React.js, but I am always looking to learn new
        technologies and improve my skills.
      </p>
      <div className="logo--container">
        <img src="img/react.svg" alt="react logo" />
        <img src="img/js.svg" alt="js logo" />
        <img src="img/html.svg" alt="html logo" />
        <img src="img/css.svg" alt="css logo" />
        <img src="img/git.svg" alt="git logo" />
        <img src="img/github.svg" alt="github logo" />
      </div>
    </div>
  );
}
