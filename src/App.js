import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
			<div className="App">
				<header className="">
					<nav>
						<Navbar />
					</nav>
				</header>
				<main>
					<Home />
				</main>
			</div>
    );
  }
}
// routes go in app and link in navbar - link will replace a tags
export default App;
