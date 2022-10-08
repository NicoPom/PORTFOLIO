import React from "react";

export default function Contact() {
  return (
    <div className="container contact--container">
      <header>
        <h2 className="contact--title">Contact</h2>
        <a href="/" className="home--link">
          <img src="img/profile_picture.png" className="home--link--picture" />
        </a>
      </header>
      <div className="contact--links--container">
        <a
          className="contact--link external--link"
          href="mailto: nicolaspomaresdev@gmail.com"
        >
          nicolaspomaresdev@gmail.com ↗
        </a>

        <a
          className="contact--link external--link"
          href="https://github.com/NicoPom"
        >
          GitHub ↗
        </a>

        <a
          className="contact--link external--link"
          href="https://www.linkedin.com/in/nicolas-pomares-4a8535197/"
        >
          LinkedIn ↗
        </a>
      </div>
    </div>
  );
}
