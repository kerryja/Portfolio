import React, { Component } from "react";
import { Link, Element } from "react-scroll";
import About from "./About";
import Contact from "./Contact";
import styled from "styled-components";

const HomeWrapper = styled.div`
  #homepage {
    min-height: 100vh;
    font-size: calc(10px + 2vmin);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      45deg,
      rgba(56, 133, 222, 0.79) 0%,
      rgba(82, 153, 235, 0.74) 27%,
      rgba(123, 137, 209, 0.69) 54%,
      rgba(128, 196, 242, 0.75) 81%,
      rgba(175, 234, 247, 0.78) 93%,
      rgba(175, 234, 247, 0.8) 100%
    );
  }

  #arrow {
    color: white;
    margin-top: 6vh;
    font-size: clamp(100%, 1rem + 2vw, 24px);
    cursor: pointer;
  }

  #arrow:hover {
    color: #aedff7;
  }

  .box {
    border: 5px solid;
    font-size: 400%;
    font-family: "Montserrat", sans-serif;
    color: white;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 60px;
    padding-bottom: 60px;
    margin-top: 40px;
    text-align: center;
  }
`;

const Social = styled.div`
  .icon {
    color: white;
    padding-right: 10px;
    padding-left: 10px;
    font-size: clamp(100%, 1rem + 2vw, 24px);
  }

  .icon:hover {
    color: #aedff7;
  }
`;

const Description = styled.p`
  margin-top: 5vh;
  margin-bottom: 4vh;
  font-size: clamp(100%, 1rem + 2vw, 24px);
  font-family: "Karla", sans-serif;
`;

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <div name="home" id="homepage">
          <h1 className="box">
            kerry <br />
            jackson
          </h1>
          <Description>
            <p>Developer / Traveler / DIYer</p>
          </Description>
          <Social>
            <a
              href="https://www.linkedin.com/in/kerryjackson2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon fab fa-linkedin-in" />
            </a>
            <a
              href="https://github.com/kerryja"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon fa fa-github" />
            </a>
            <a href="mailto:me@kerry.dev">
              <i className="icon far fa-envelope" />
            </a>
          </Social>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <i id="arrow" className="arrow fas fa-angle-double-down" />
          </Link>
        </div>
        <Element name="about" className="element">
          <About />
        </Element>
        <Element name="contact" className="element">
          <Contact />
        </Element>
        <footer className="text-center mb-2">© 2021 Kerry Jackson</footer>
      </HomeWrapper>
    );
  }
}

export default Home;
