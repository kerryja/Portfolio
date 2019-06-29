import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import Home from "./components/Home";
import About from "./components/About";
//import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="">
            <nav>
              <Navbar />
            </nav>
          </header>
          <main>
            <Route exact path="/" component={Home} />
          </main>
        </div>
      </Router>
    );
  }
}
// routes go in app and link in navbar - link will replace a tags
export default App;
