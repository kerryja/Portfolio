import React, { Component } from "react";
import styled from "styled-components";

const AboutWrapper = styled.div`
  margin-right: 5vw;
  margin-left: 5vw;
  padding-top: 10vh;

  h1 {
    font-size: 2em;
    margin-bottom: 20px;
    background: linear-gradient(
      45deg,
      rgba(56, 133, 222, 0.79) 0%,
      rgba(82, 153, 235, 0.74) 27%,
      rgba(123, 137, 209, 0.69) 54%,
      rgba(128, 196, 242, 0.75) 81%,
      rgba(87, 181, 201, 0.78) 93%,
      rgba(211, 247, 255, 0.8) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: left;
    font-weight: bold;
  }

  #profile-pic {
    max-width: 370px;
  }

  @media screen and (max-width: 992px) {
    #profile-pic {
      max-width: 275px;
      margin-top: 10px;
    }
  }

  #work {
    margin-top: 10vh;
  }

  @media screen and (max-width: 992px) {
    #work {
      margin-top: 3vh;
    }
  }

  a {
    color: #82b3ef;
  }

  a:hover {
    text-decoration: none;
    color: #a4aee0;
  }
`;

const Description = styled.div`
  font-family: "Karla", sans-serif;
  color: #333;
  text-align: left;

  #about-summary {
    font-size: clamp(1rem, 2vw, 1.5rem);
    text-justify: inter-word;
  }

  @media screen and (max-width: 992px) {
    margin-right: 0;
    margin-left: 0;
  }

  h1 {
    font-size: 2.5rem;
  }
`;

const Skills = styled.div`
  font-family: "Karla", sans-serif;
  text-align: center;
  color: #333;

  h1 {
    line-height: 100%;
    font-weight: bold;
  }

  h2 {
    font-size: 1.75em;
  }

  p {
    line-height: 100%;
    font-size: 1.5em;
  }

  @media screen and (max-width: 992px) {
    h1 {
      text-align: center;
    }
  }

  .icon {
    font-size: 40px;
    color: #a4aee0;
  }
`;

const Projects = styled.div`
  margin-top: 7vh;
  font-family: "Karla", sans-serif;
  text-align: center;
  color: #333;

  h1 {
    line-height: 100%;
    font-weight: bold;
  }

  h2 {
    font-size: 1.75em;
  }

  p {
    line-height: 100%;
    font-size: 1.5em;
  }

  @media screen and (max-width: 992px) {
    h1 {
      text-align: center;
    }
  }
`;

class About extends Component {
  render() {
    return (
      <AboutWrapper>
        <div className="row mt-20">
          <div className="col-lg-5" align="center">
            <img id="profile-pic" src="meandchin.gif" alt="Kerry Jackson" />
          </div>
          <div className="col-lg-7" align="center">
            <Description>
              <h1>Hi!</h1>
              <div id="about-summary">
                <p>
                  My name is Kerry Jackson and and I am so glad you found your
                  way here. I am a full-stack web developer living just outside
                  of Boston, MA. I am currently seeking a full-stack position
                  with a focus on frontend development and database design. From
                  Nov 2019 to Jan 2021 I worked as a web developer for{" "}
                  <a href="http://www.skylla.tech/" target="_blank">
                    Skylla Technologies
                  </a>{" "}
                  where I helped build browser-based human machine interfaces
                  focused in robotics.
                </p>
                <p>
                  I use a wide variety of tools, languages and frameworks. For
                  the frontend, my focus is React and JavaScript and I have
                  experience with the Tailwind, Bulma and Bootstrap CSS
                  frameworks. On the backend side, I have worked with Elixir and
                  its ecosystem (Phoenix, Ecto, ExUnit, Live View). I have also
                  done extensive database work with PostgreSQL.
                </p>
                <p>
                  In my spare time, I enjoy refinishing old furniture, baking,
                  and playing with my adorable chinchillas.
                </p>
                <p>
                  Please feel free to check out my{" "}
                  <a
                    href="/Kerry_Jackson_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    resume
                  </a>
                  !
                </p>
              </div>
            </Description>
          </div>
          <div className="container" id="work">
            <Skills>
              <div className="row">
                <div className="col align-self-center">
                  <h1>Skillsets</h1>
                </div>
                <div className="col">
                  <i className="icon fab fa-react" />
                  <h2>Frontend</h2>
                  <p>React, Redux, JS</p>
                </div>
                <div className="col">
                  <i className="icon fas fa-database" />
                  <h2>Databases</h2>
                  <p>PostgreSQL, MongoDB</p>
                </div>
                <div className="col">
                  <i className="icon fas fa-server" />
                  <h2>Server Side</h2>
                  <p>Phoenix, Express</p>
                </div>
              </div>
            </Skills>
            <Projects>
              <div className="row">
                <div className="col">
                  <h1>Current work</h1>
                </div>
                <div className="col">
                  <h2>
                    Leveling up on{" "}
                    <a
                      href="https://www.codewars.com/users/kerryja"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Codewars!
                    </a>
                  </h2>
                  <p>
                    <img
                      src="https://www.codewars.com/users/kerryja/badges/micro"
                      alt="codewars badge"
                    />
                  </p>
                </div>
                <div className="col">
                  <h2>Mini Projects</h2>
                  <p>
                    <a
                      href="https://codesandbox.io/dashboard/all/Projects?workspace=3e7841c3-514c-4e5e-945c-5d537fa68c2c"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Kerry's Code Sandbox
                    </a>
                  </p>
                </div>
                <div className="col">
                  <h2>Ongoing Project</h2>
                  <p>
                    <a
                      href="/weather"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Weather App
                    </a>
                  </p>
                </div>
              </div>
            </Projects>
          </div>
        </div>
      </AboutWrapper>
    );
  }
}

export default About;
