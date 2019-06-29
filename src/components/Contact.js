import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
				<h1>Contact Me</h1>
        <p className="icon">☕</p>
        <p>Feel free to reach me at <a href="mailto:me@kerry.dev">me@kerry.dev</a></p>
        <p>I'm also available on:</p>
        <ul>
          <li><i className="fab fa-linkedin-in"></i><a href="https://www.linkedin.com/in/kerryjackson2/">   LinkedIn</a></li>
          <li><i className="fab fa-dev"></i><a href="https://dev.to/kerryja">   Devto</a></li>
          <li><i className="fab fa-github"></i><a href="https://github.com/kerryja">   GitHub</a></li>
					<li><i className="fab fa-twitter"></i><a href="https://twitter.com/kerryjac1">   Twitter</a></li>
        </ul>
      </div>
    );
  }
}

export default Contact;
