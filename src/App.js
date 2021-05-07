import React, { useState, useRef } from "react";
import { useOnClickOutside } from "./hooks";
import "./App.css";
import Home from "./components/Home";
import Burger from "./components/Burger/Burger";
import Menu from "./components/Menu/Menu";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setMenuOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <main>
          <div ref={node}>
            <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </div>
          <Home />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
