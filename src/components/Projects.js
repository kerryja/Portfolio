import React, { Component, Fragment } from "react";

class Projects extends Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		const videos = document.querySelectorAll("video");
		const overlay = document.querySelectorAll(".card-img-overlay");
		const text = document.getElementById("text");


		videos.forEach((video, index) => {
			overlay[index].addEventListener("mouseenter", () => {
				video.play();
				text.visibility = "block";

			})

			overlay[index].addEventListener("mouseleave", () => {
				video.pause();

			})

			overlay[index].addEventListener("touchstart", () => {
				video.play();
			})

			overlay[index].addEventListener("touchend", () => {
				video.pause();
			})
		})
	}

	render() {
		return (
			<React.Fragment>
				<section className="projects">

					<h1 class="projects-heading">My Work</h1>
					<div class="row">
						<div class="col-md-6 col-lg-4">
							<div class="card">
								<video src="clock.mp4" width="507.66" loop={true} alt="video of clock project" />
								<div class="card-img-overlay">
									<a class="btn btn-md" href="https://www.kerry.dev/clock" target="blank">View Live</a>
									<a class="btn btn-md" href="https://github.com/kerryja/JS30/tree/master/2%20-%20CSS%20Clock" target="blank">GitHub</a>
									<p id="text" style={{ display: "none" }}>some text here</p>
								</div>
							</div>
						</div>
						<div class="col-md-6 col-lg-4">
							<div class="card">
								<video src="draw.mp4" width="507.66" loop={true} alt="video of drawing project" />
								<div class="card-img-overlay">
									<a class="btn btn-md" href="https://kerry.dev/draw/" target="blank">View Live</a>
									<a class="btn btn-md" href="https://github.com/kerryja/JS30/tree/master/7%20-%20HTML%20Canvas" target="blank">GitHub</a>
									<p id="text" style={{ visibility: "hidden" }}>some text here</p>
								</div>
							</div>
						</div>
						<div class="col-md-6 col-lg-4">
							<div class="card">
								<video src="circles.mp4" width="507.66" loop={true} alt="video of circles project" />
								<div class="card-img-overlay">
									<a class="btn btn-md" href="https://kerry.dev/circles/" target="blank">View Live</a>
									<a class="btn btn-md" href="https://github.com/kerryja/Circles" target="blank">GitHub</a>
									<p class="text">some text here</p>
								</div>
							</div>
						</div>
						<div class="col-md-6 col-lg-4">
							<div class="card">
								<img src="jamout.jpg" width="507.66" alt="video of circles project" />
								<div class="card-img-overlay">
									<a class="btn btn-md" href="https://kerry.dev/jamout/" target="blank">View Live</a>
									<a class="btn btn-md" href="https://github.com/kerryja/bloc-jams-react" target="blank">GitHub</a>
									<p class="text">some text here</p>
								</div>
							</div>
						</div>
					</div>




				</section>


			</React.Fragment>
		);
	}
};


export default Projects;



























































