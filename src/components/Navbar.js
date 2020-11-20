import React, { Component } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    function handleBurgerClick(e) {
      const ClassSwitch = "expanded";

      e.preventDefault();
      let links = document.getElementById("nav-links");
      if (links.classList.contains(ClassSwitch))
        links.classList.remove(ClassSwitch);
      else links.classList.add(ClassSwitch);
      let burger = document.getElementById("nav-burger");
      if (burger.classList.contains(ClassSwitch)) {
        burger.classList.remove(ClassSwitch);
        burger.classList.replace("fa-times", "fa-hamburger");
      } else {
        burger.classList.add(ClassSwitch);
        burger.classList.replace("fa-hamburger", "fa-times");
      }
      let nav = document.getElementById("nav");
      if (nav.classList.contains(ClassSwitch)) {
        nav.classList.remove(ClassSwitch);
      } else {
        nav.classList.add(ClassSwitch);
      }
    }

    window.onscroll = () => {
      let burger = document.getElementById("nav-burger");
      let nav = document.getElementById("nav-links");
      let firstPanel = document.getElementById("home");
      let threshold1 = firstPanel.clientHeight - burger.clientHeight;
      if (window.scrollY > threshold1) {
        if (!burger.classList.contains("scroll")) {
          burger.classList.add("scroll");
          nav.classList.add("scroll");
        }
      } else if (
        window.scrollY < threshold1 &&
        burger.classList.contains("scroll")
      ) {
        burger.classList.remove("scroll");
        nav.classList.remove("scroll");
      }

      if (window.scrollY > threshold1 && window.scrollY < threshold1) {
        if (burger.classList.contains("scroll")) {
          burger.classList.add("scroll-remove");
          nav.classList.remove("scroll");
        }
      } else if (
        (window.scrollY < threshold1 &&
          burger.classList.contains("scroll-remove")) ||
        (window.scrollY > threshold1 &&
          burger.classList.contains("scroll-remove"))
      ) {
        burger.classList.remove("scroll-remove");
        burger.classList.add("scroll");
        nav.classList.add("scroll");
      }
    };

    return (
      <div className="nav" id="nav">
        <a
          id="nav-burger"
          className="burger-icon fas fa-hamburger"
          onClick={handleBurgerClick}
        />
        <ul id="nav-links">
          <li>
            <Link to="about" className="menu-item">
              About
            </Link>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://kerry.dev/blog"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://kerry.dev/Kerry_Jackson_Resume.pdf"
            >
              Resume
            </a>
          </li>
          <li>
            <Link to="contact" className="menu-item">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
