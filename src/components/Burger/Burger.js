import React from "react";
import styled from "styled-components";

const StyledBurger = styled.button`
  position: absolute;
  top: 3%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, menuOpen }) =>
      menuOpen ? theme.primaryDark : theme.primaryLight};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ menuOpen }) =>
        menuOpen ? "rotate(45deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${({ menuOpen }) => (menuOpen ? "0" : "1")};
      transform: ${({ menuOpen }) =>
        menuOpen ? "translateX(20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ menuOpen }) =>
        menuOpen ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`;

const Burger = ({ menuOpen, setMenuOpen }) => {
  return (
    <StyledBurger menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
