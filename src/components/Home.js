import React, { Component } from "react";
import { Link, Element } from "react-scroll";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

class Home extends Component {
  render() {
    return (
      <div>
        <Element name="home" id="home" className="header">
          <h1 className="box">
            kerry <br />
            jackson
          </h1>
          <div id="intro">
            <p>Developer / Traveler / Crafter</p>
            <div className="social">
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
            </div>
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
          </div>
        </Element>
        <Element name="about" className="element">
          <About />
        </Element>
        <Element name="projects" className="element">
          <Projects />
        </Element>
        <Element name="contact" className="element">
          <Contact />
        </Element>
      </div>
    );
  }
}

export default Home;
