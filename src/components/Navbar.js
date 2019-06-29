import React, { Component } from "react";
//import { Route, Link } from "react-router-dom";
import { Link } from 'react-scroll'

class Navbar extends Component {
	render() {
		return (
			<div className="nav">
				<i className="burger-icon fas fa-hamburger"></i>
				<ul>
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
