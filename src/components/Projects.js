import React, { Component } from "react";
import styled from "styled-components";

const ProjectWrapper = styled.div`
  min-height: 100vh;
  font-family: "Karla", sans-serif;
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin-bottom: 20px;
    background: linear-gradient(
      90deg,
      rgba(56, 133, 222, 0.79) 0%,
      rgba(82, 153, 235, 0.74) 27%,
      rgba(123, 137, 209, 0.69) 54%,
      rgba(128, 196, 242, 0.75) 81%,
      rgba(175, 234, 247, 0.78) 93%,
      rgba(175, 234, 247, 0.8) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    text-align: left;
    font-size: 35px;
    font-family: "Karla", sans-serif;
  }

  @media screen and (max-width: 768px) {
    h1 {
      text-align: center;
      margin-bottom: 30px;
    }
  }

  video {
    max-height: 100%;
    max-width: 100%;
  }

  .card {
    display: grid;
    place-items: center;
    margin-bottom: 15px;
    position: relative;
    width: 100%;
  }

  .card-img-overlay {
    display: flex;
    align-content: flex-end;
    justify-content: center;
    flex-wrap: wrap;
    position: absolute;
    padding: 0;
  }

  .btn.btn-sm {
    font-size: 20px;
    background-color: rgba(101, 161, 230, 0.8);
    box-shadow: none;
    border-radius: 10px;
    color: white;
    margin-bottom: 5px;
    margin-right: 10px;
  }

  .btn.btn-sm:hover {
    background-color: #a4aee0;
  }

  .card .text {
    background: black;
    color: white;
    width: 100%;
    text-align: center;
  }
`;

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
      <ProjectWrapper>
        <React.Fragment>
          <section className="projects" id="projects">
            <h1 className="projects-heading">Select Projects</h1>{" "}
            <div className="row">
              <div className="col-md-6 col-lg-6 col-xl-4">
                <div className="card">
                  <video
                    src="adopted.mp4"
                    loop={true}
                    alt="video of Adopted website"
                  />
                  <div className="card-img-overlay">
                    <a
                      className="btn btn-sm"
                      href="https://adopted-pets.herokuapp.com/"
                      target="blank"
                      rel="noopener noreferrer"
                    >
                      View Live
                    </a>
                    <a
                      className="btn btn-sm"
                      href="https://github.com/kerryja/animal-shelter"
                      target="blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <div className="text">
                      Adopted: Currently revamping a local animal shelter's
                      website
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-6 col-xl-4">
                <div className="card">
                  <video
                    src="stockup.mp4"
                    loop={true}
                    alt="video of StockUp app"
                  />
                  <div className="card-img-overlay">
                    <a
                      className="btn btn-sm"
                      href="https://kerryja-stockup.herokuapp.com/"
                      target="blank"
                      rel="noopener noreferrer"
                    >
                      View Live
                    </a>
                    <a
                      className="btn btn-sm"
                      href="https://github.com/kerryja/grocery-list-app"
                      target="blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <div className="text">
                      StockUp: Real-time grocery list app built with Next.js,
                      Socket.io and MongoDB
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-4">
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
                      Aloha Chat: Real-time chat application built with React
                      and Firebase
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-6 col-xl-4">
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

              <div className="col-md-6 col-lg-6 col-xl-4">
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
              <div className="col-md-6 col-lg-6 col-xl-4">
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
      </ProjectWrapper>
    );
  }
}

export default Projects;
