import React, { Component } from "react";

class About extends Component {
	render() {
		return (
			<div class="about-me">
				<div class="container-fluid">
					<div class="row">
						<div class="col-lg-5">
							<img id="profile-pic"
								src="meandchin.gif"
								alt="picture of Kerry and chinchilla"
							/>
						</div>
						<div class="col-lg-7">
							<div class="about-me-description">
								<h1>Hi!</h1>
								<p>
									My name is Kerry Jackson and and I am so glad you found your way here. I am a full-stack developer 
									in the lovely city of Boston. I am currently a student at <a href="https://www.bloc.io" target="blank"> Bloc</a> where 
									I'm on track to complete their web development boot camp by the end of the summer.
									</p> 
									<p>
									I was introduced to programming via friends working in tech. This led me to start coding myself
									and I have never looked back since! Before that, I had been working for 10 years in customer-facing 
									positions that ranged from office manager of a waste-to-energy power plant to corporate
									HR Generalist. Through those experiences, I developed a strong sense of empathy for others
									and learned what it takes to be a part of a team. I am excited to bring my skills to the tech world and I can't
									wait to start a new career as a web developer!
								</p>

								<p>If you would like to hear more of my story, please visit my <a target="_blank" href="https://kerry.dev/blog">blog</a>!</p>
							</div>

							<div class="skills">
								<h1>Skills</h1>
								<div class="skills-info">
									<div class="row">
										<div class="col-sm-6 col-md-3">
											<i class="icon fab fa-react"></i>
											<h3>Frontend</h3>
											<p>HTML, CSS, React, Bootstrap</p>
										</div>
										<div class="col-sm-6 col-md-3">
											<i class="icon fas fa-code-branch"></i>
											<h3>Version Control</h3>
											<p>Git, GitHub</p>
										</div>
										<div class="col-sm-6 col-md-3">
											<i class="icon fas fa-database"></i>
											<h3>Databases</h3>
											<p>Firebase, PostgresSQL</p>
										</div>
										<div class="col-sm-6 col-md-3">
											<i class="icon fab fa-node-js"></i>
											<h3>Server Side</h3>
											<p>Node.JS, Express, Sequelize</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>



			</div>
		);
	}
}

export default About;
