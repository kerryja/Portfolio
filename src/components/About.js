import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="about-me">
        <div className="row">
          <div className="col-lg-5" align="center">
            <img id="profile-pic" src="kerry_windsor.png" alt="Kerry Jackson" />
          </div>
          <div className="col-lg-7" align="center">
            <div className="about-me-description">
              <h1>Hi!</h1>
              <p>
                My name is Kerry Jackson and and I am so glad you found your way
                here. I am a full-stack web developer in the lovely city of
                Boston. I am currently a student at{" "}
                <a
                  href="https://www.bloc.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Bloc
                </a>{" "}
                where I'm on track to complete their web development boot camp
                by the end of September.
              </p>
              <p>
                I was introduced to programming via friends working in tech.
                This led me to start coding myself and I have never looked back
                since! Before that, I had been working for 10 years in
                customer-facing positions that range from office manager of a
                waste-to-energy power plant to corporate HR Generalist. Through
                those experiences, I developed a strong sense of empathy for
                others and learned what it takes to work productively as a team.
                I am excited to bring my skills to the tech world and I can't
                wait to start a new career as a web developer!
              </p>

              <p>
                If you would like to hear more of my story, please visit my{" "}
                <a
                  href="https://kerry.dev/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  blog
                </a>{" "}
                or check out my{" "}
                <a
                  href="https://kerry.dev/Kerry_Jackson_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  resume
                </a>
                !
              </p>
            </div>

            <div className="skills">
              <h1>What I Can Do</h1>
              <div className="skills-info">
                <div className="row">
                  <div className="col-sm-6 col-md-3">
                    <i className="icon fab fa-react" />
                    <h3>Frontend</h3>
                    <p>HTML, CSS, React, Bootstrap</p>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <i className="icon fas fa-code-branch" />
                    <h3>Version Control</h3>
                    <p>Git, GitHub</p>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <i className="icon fas fa-database" />
                    <h3>Databases</h3>
                    <p>Firebase, PostgreSQL</p>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <i className="icon fab fa-node-js" />
                    <h3>Server Side</h3>
                    <p>Node.js, Express, Sequelize</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
