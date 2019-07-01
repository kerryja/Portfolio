import React, { Component } from "react";
//import { Route, Link } from "react-router-dom";
import { Link } from 'react-scroll'

class Navbar extends Component {
	render() {
		function handleBurgerClick (e) {
			const ClassSwitch = "expanded";

			e.preventDefault ();
			let links = document.getElementById ("nav-links");
			if (links.classList.contains (ClassSwitch))
				links.classList.remove (ClassSwitch);
			else
				links.classList.add (ClassSwitch);
			let burger = document.getElementById ("nav-burger");
			if (burger.classList.contains (ClassSwitch)) {
				burger.classList.remove (ClassSwitch);
				burger.classList.replace ("fa-times", "fa-hamburger");
			} else {
				burger.classList.add (ClassSwitch);
				burger.classList.replace ("fa-hamburger", "fa-times");
			}
		}

		return (
			<div className="nav">
				<a id="nav-burger" className="burger-icon fas fa-hamburger" onClick={handleBurgerClick}></a>
				<ul id="nav-links">
					<li><Link to="home" className="menu-item">Home</Link></li>
					<li><Link to="about" className="menu-item">About</Link></li>
					<li><Link to="resume" className="menu-item">Resume</Link></li>
					<li><a target="_blank" href="https://kerry.dev/blog">Blog</a></li>
					<li><Link to="projects" className="menu-item">Projects</Link></li>
					<li><Link to="contact" className="menu-item">Contact</Link></li>
				</ul>
			</div>

		);
	}
}

export default Navbar;
