import React, { Fragment } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  return (
    <Fragment>
      <nav class="navbar navbar-white fixed-top light-blue lighten-4">
        <button
          class="menu navbar-toggler toggler-example"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="dark-blue-text">
            <i class="fa fa-bars fa-1x"></i>
          </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent1">
          <div class="nav-section">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="about">
                  About <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="/blog"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/Kerry_Jackson_Resume.pdf"
                >
                  Resume
                </a>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="contact">
                  Contact <span class="sr-only">(current)</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
