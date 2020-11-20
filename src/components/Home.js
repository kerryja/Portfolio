import React, { Component } from "react";
import { Link, Element } from "react-scroll";
import About from "./About";
import Contact from "./Contact";
import styled from "styled-components";

const HomeWrapper = styled.div`
  .arrow {
    color: white;
    margin-top: 45px;
    font-size: 40px;
    cursor: pointer;
  }

  .arrow:hover {
    color: #aedff7;
  }

  @media screen and (max-width: 680px) {
    .arrow {
      font-size: 40px;
    }
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
    font-size: 30px;
  }

  .icon:hover {
    color: #aedff7;
  }

  @media screen and (max-width: 680px) {
    .icon {
      font-size: 25px;
    }
  }
`;

const Description = styled.p`
  margin-top: 30px;
  margin-bottom: 35px;
  font-size: 25px;
  font-family: "Karla", sans-serif;

  @media screen and (max-width: 680px) {
    font-size: 20px;
  }
`;

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <Element name="home" id="home" className="header">
          <h1 className="box">
            kerry <br />
            jackson
          </h1>
          <Description>
            <p>Developer / Traveler / Crafter</p>
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
              href="https://dev.to/kerryja"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon fab fa-dev" />
            </a>
            <a
              href="https://github.com/kerryja"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon fab fa-github" />
            </a>
            <a
              href="https://twitter.com/kerryjac1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon fab fa-twitter" />
            </a>
            <a href="mailto:me@kerry.dev">
              <i className="icon fas fa-paper-plane" />
            </a>
          </Social>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            <i className="arrow" className="arrow fas fa-angle-double-down" />
          </Link>
        </Element>
        <Element name="about" className="element">
          <About />
        </Element>
        <Element name="contact" className="element">
          <Contact />
        </Element>
      </HomeWrapper>
    );
  }
}

export default Home;
