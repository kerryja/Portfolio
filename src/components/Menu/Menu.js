import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ menuOpen }) =>
    menuOpen ? "translateX(0)" : "translateX(-100%)"};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  .nav-link {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;

const Menu = ({ menuOpen }) => {
  return (
    <StyledMenu menuOpen={menuOpen}>
      <Link
        to="about"
        className="nav-link"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        href="#"
      >
        About <span className="sr-only">(current)</span>
      </Link>
      <a
        href="/blog"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link"
      >
        Blog
      </a>
      <a
        className="nav-link"
        href="/Kerry_Jackson_Resume.pdf"
        target="blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
      <Link
        to="contact"
        className="nav-link"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        href="#"
      >
        Contact <span class="sr-only">(current)</span>
      </Link>
    </StyledMenu>
  );
};
export default Menu;
