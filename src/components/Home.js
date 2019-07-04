import React, { Component } from "react";
import * as Scroll from 'react-scroll';
import { Link, Element, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
//import { Route, Link } from "react-router-dom";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";

class Home extends Component {
  render() {
    return (
      <div>
        <Element name="home" id="home" className="App-header">
          <h1 className="box">
            kerry <br />
            jackson
          </h1>
          <div>
          
            <div className="social">
						<a href="https://www.linkedin.com/in/kerryjackson2/" target="_blank"><i className="icon fab fa-linkedin-in"></i></a>	
						<a href="https://dev.to/kerryja" target="_blank"><i className="icon fab fa-dev"></i></a>
						<a href="https://github.com/kerryja" target="_blank"><i className="icon fab fa-github"></i></a>
						<a href="https://twitter.com/kerryjac1" target="_blank"><i className="icon fab fa-twitter"></i></a>
						<a href="https://twitter.com/kerryjac1" target="_blank"><i className="icon fas fa-paper-plane"></i></a>
						</div>
              <Link to="about" activeClass="active" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
              <i className="arrow fas fa-angle-double-down"></i>
              </Link>
            </div>
        </Element>
        <Element name="about" className="element">
          <About />
        </Element>
        <Element name="resume" className="element">
          <Resume />
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
