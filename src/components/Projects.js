import React, { Component } from "react";
import "./Projects.css";

class Projects extends Component {
  componentDidMount() {
    const videos = document.querySelectorAll("video");
    const overlay = document.querySelectorAll(".card-img-overlay");

    videos.forEach((video, index) => {
      overlay[index].addEventListener("mouseenter", () => {
        video.play();
      });

      overlay[index].addEventListener("mouseleave", () => {
        video.pause();
      });

      overlay[index].addEventListener("touchstart", () => {
        video.play();
      });

      overlay[index].addEventListener("touchend", () => {
        video.pause();
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <section className="projects" id="projects">
          <h1 className="projects-heading">My Latest Work</h1>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <video
                  src="aloha-chat.mp4"
                  loop={true}
                  alt="video of aloha chat project"
                />
                <div className="card-img-overlay">
                  <a
                    className="btn btn-sm"
                    href="https://kerry.dev/aloha-chat/"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    View Live
                  </a>
                  <a
                    className="btn btn-sm"
                    href="https://github.com/kerryja/aloha-chat"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <div className="text">
                    Aloha Chat: Real-time chat application built with React and
                    Firebase
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <video
                  src="jamout.mp4"
                  loop={true}
                  alt="video of jamout music player project"
                />
                <div className="card-img-overlay">
                  <a
                    className="btn btn-sm"
                    href="https://kerry.dev/jamout/"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    View Live
                  </a>
                  <a
                    className="btn btn-sm"
                    href="https://github.com/kerryja/jamout-react"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <div className="text">
                    Jamout: Streaming music player built with React
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <video
                  src="bloccit.mp4"
                  loop={true}
                  alt="video of clock project"
                  rel="noopener noreferrer"
                />
                <div className="card-img-overlay">
                  <a
                    className="btn btn-sm"
                    href="https://bloccit.kerry.dev/"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    View Live
                  </a>
                  <a
                    className="btn btn-sm"
                    href="https://github.com/kerryja/bloccit"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <div className="text">
                    Bloccit: Reddit-like clone built with Node/Express and
                    PostgreSQL
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <video
                  src="clock.mp4"
                  loop={true}
                  alt="video of clock project"
                  rel="noopener noreferrer"
                />
                <div className="card-img-overlay">
                  <a
                    className="btn btn-sm"
                    href="https://kerry.dev/clock"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    View Live
                  </a>
                  <a
                    className="btn btn-sm"
                    href="https://github.com/kerryja/JS30/tree/master/2%20-%20CSS%20Clock"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <div className="text">
                    Clock built entirely with CSS and JS
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <video
                  src="draw.mp4"
                  loop={true}
                  alt="video of drawing project"
                />
                <div className="card-img-overlay">
                  <a
                    className="btn btn-sm"
                    href="https://kerry.dev/draw/"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    View Live
                  </a>
                  <a
                    className="btn btn-sm"
                    href="https://github.com/kerryja/JS30/tree/master/7%20-%20HTML%20Canvas"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <div className="text">
                    Drawing app built with HTML Canvas and JS
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <video
                  src="circles.mp4"
                  loop={true}
                  alt="video of circles project"
                />
                <div className="card-img-overlay">
                  <a
                    className="btn btn-sm"
                    href="https://kerry.dev/circles/"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    View Live
                  </a>
                  <a
                    className="btn btn-sm"
                    href="https://github.com/kerryja/Circles"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <div className="text">
                    Circles animation built with PaperJS and HowlerJS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Projects;
