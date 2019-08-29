import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

class App extends Component {
	render() {
		return (
			<div className="App">
				<nav>
					<Navbar />
				</nav>
				<main>
					<Home />
				</main>
			</div>
		);
	}
}

export default App;
