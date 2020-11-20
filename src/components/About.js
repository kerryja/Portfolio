import React, { Component } from "react";
import styled from "styled-components";

const AboutWrapper = styled.div`
  min-height: 100vh;
  margin-right: 150px;
  margin-left: 150px;

  @media screen and (max-width: 1340px) {
    margin-right: 25px;
    margin-left: 25px;
  }

  #profile-pic {
    max-width: 370px;
    margin-top: 100px;
  }

  @media screen and (max-width: 992px) {
    #profile-pic {
      max-width: 275px;
      margin-top: 20px;
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
  font-size: 118%;
  font-family: "Karla", sans-serif;
  color: #333;
  margin-top: 25px;
  text-align: justify;

  @media screen and (max-width: 992px) {
    margin-right: 0;
    margin-left: 0;
  }
  h1 {
    margin-bottom: 20px;
    background: linear-gradient(
      45deg,
      rgba(56, 133, 222, 0.79) 0%,
      rgba(82, 153, 235, 0.74) 27%,
      rgba(123, 137, 209, 0.69) 54%,
      rgba(128, 196, 242, 0.75) 81%,
      rgba(175, 234, 247, 0.78) 93%,
      rgba(175, 234, 247, 0.8) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: left;
    font-size: 35px;
    font-weight: bold;
  }
`;

const Skills = styled.div`
  margin-top: 40px;
  font-family: "Karla", sans-serif;

  h1 {
    margin-bottom: 20px;
    background: linear-gradient(
      45deg,
      rgba(56, 133, 222, 0.79) 0%,
      rgba(82, 153, 235, 0.74) 27%,
      rgba(123, 137, 209, 0.69) 54%,
      rgba(128, 196, 242, 0.75) 81%,
      rgba(175, 234, 247, 0.78) 93%,
      rgba(175, 234, 247, 0.8) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: left;
    font-weight: bold;
    font-size: 35px;
  }

  @media screen and (max-width: 992px) {
    h1 {
      text-align: center;
    }
  }

  .technologies {
    text-align: center;
    color: #333;
  }

  .technologies p {
    line-height: 100%;
    font-size: 23px;
  }

  .technologies .icon {
    font-size: 40px;
    color: #a4aee0;
  }

  .techologies h3 {
    font-size: 25px;
    font-weight: bold;
  }
`;

class About extends Component {
  render() {
    return (
      <AboutWrapper>
        <div className="row">
          <div className="col-lg-5" align="center">
            <img id="profile-pic" src="meandchin.gif" alt="Kerry Jackson" />
          </div>
          <div className="col-lg-7" align="center">
            <Description>
              <h1>Hi!</h1>
              <p>
                My name is Kerry Jackson and and I am so glad you found your way
                here. I am a full-stack web developer in the lovely city of
                Boston, having just recently graduated from
                <a
                  href="https://www.bloc.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Bloc
                </a>
                's web development bootcamp at the beginning of October.
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
            </Description>

            <Skills>
              <h1>What I Can Do</h1>
              <div className="technologies">
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
            </Skills>
          </div>
        </div>
      </AboutWrapper>
    );
  }
}

export default About;
