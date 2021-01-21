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
  font-family: "Karla", sans-serif;
  color: #333;
  margin-top: 25px;
  text-align: justify;

  @media screen and (max-width: 992px) {
    margin-right: 0;
    margin-left: 0;
  }
  h1 {
    font-size: 2em;
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
  }

  h2 {
    font-size: 1.75em;
  }
`;

const Skills = styled.div`
  margin-top: 40px;
  font-family: "Karla", sans-serif;

  h1 {
    font-size: 2em;
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
  }

  h2 {
    font-size: 1.75em;
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
    font-size: 1.5em;
  }

  .technologies .icon {
    font-size: 40px;
    color: #a4aee0;
  }

  .techologies h2 {
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
                here. I am a full-stack web developer living just outside of
                Boston, MA. Since November 2019 I have been working as a web
                developer for{" "}
                <a href="http://www.skylla.tech/" target="_blank">
                  Skylla Technologies
                </a>{" "}
                where we build browser-based human machine interfaces focused in
                robotics.
              </p>
              <p>
                I use a wide variety of tools, languages and frameworks. For the
                frontend, my focus is React and JavaScript and I have experience
                with the Tailwind, Bulma and Bootstrap CSS frameworks. On the
                backend side, I have most recently been working with Elixir and
                its ecosystem (Phoenix, Ecto, ExUnit, Live View). I have also
                done extensive database work with PostgreSQL.
              </p>
              <p>
                In my spare time, I enjoy refinishing old furniture, baking, and
                playing with my adorable chinchillas.
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
            </Description>

            <Skills>
              <div className="technologies">
                <h1>Skillsets</h1>
                <div className="row">
                  <div className="col">
                    <i className="icon fab fa-react" />
                    <h2>Frontend</h2>
                    <p>React, Redux, JS</p>
                  </div>
                  <div className="col">
                    <i className="icon fas fa-database" />
                    <h2>Databases</h2>
                    <p>PostgreSQL, Ecto</p>
                  </div>
                  <div className="col">
                    <i className="icon fas fa-server" />
                    <h3>Server Side</h3>
                    <p>Phoenix, Express</p>
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
