import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<main>
					<Home />
				</main>
			</div>
		);
	}
}

export default App;
