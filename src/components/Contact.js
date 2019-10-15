import React, { Component } from "react";
import styled from "styled-components";

const ContactWrapper = styled.div`
  font-family: "Karla", sans-serif;
  font-size: 130%;
  color: #2f3133;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h1 {
    margin-top: 30px;
    margin-bottom: 40px;
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
    font-weight: bold;
    font-size: 2.5em;
    text-align: center;
  }

  @media screen and (max-width: 992px) {
    h1 {
      margin-bottom: 20px;
    }
  }

  ul {
    padding-inline-start: 0;
  }

  li {
    list-style-type: none;
    padding: 10px;
  }

  i {
    color: #a0afe2;
  }

  .icon {
    font-size: 80px;
  }

  a {
    color: #82b3ef;
  }

  a:hover {
    text-decoration: none;
    color: #a4aee0;
  }
`;

class Contact extends Component {
  render() {
    return (
      <ContactWrapper>
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
      </ContactWrapper>
    );
  }
}

export default Contact;
