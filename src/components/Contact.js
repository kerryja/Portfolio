import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h1>Let's get in touch!</h1>
        <span role="img" className="icon" alt="coffee">
          ☕
        </span>
        <p>
          Feel free to reach me at{" "}
          <a href="mailto:me@kerry.dev">me@kerry.dev</a>
        </p>
        <p>I'm also available on:</p>
        <ul>
          <li>
            <i className="fab fa-linkedin-in" />
            <a
              href="https://www.linkedin.com/in/kerryjackson2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              LinkedIn
            </a>
          </li>
          <li>
            <i className="fab fa-dev" />
            <a
              href="https://dev.to/kerryja"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Devto
            </a>
          </li>
          <li>
            <i className="fab fa-github" />
            <a
              href="https://github.com/kerryja"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              GitHub
            </a>
          </li>
          <li>
            <i className="fab fa-twitter" />
            <a
              href="https://twitter.com/kerryjac1"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Twitter
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Contact;
