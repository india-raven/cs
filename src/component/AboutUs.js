import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Background = require('../../src/background.jpg')

// const sectionStyle = {
// 	width: "100%",
// 	height: "100%",
// 	backgroundImage: `url(${Background})`

// }
export default class AboutUs extends Component {
	render() {
		return (
			<div 
			// style={ sectionStyle}
			>
				<div>
					<h3
						style={{
							paddingLeft: "30px",
							margin: "20px",
							color: "white",
							fontSize: "20px"
						}}
					>
						Click below to learn more about our application and who we are as
						developers!{" "}
					</h3>
					<Box width="95%" justifyContent="center" margin={6} boxShadow={3}>
						<div>
							<ExpansionPanel width={4}>
								<ExpansionPanelSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel1a-content"
									id="panel1a-header"
								>
									<Typography variant="h4" gutterBottom>
										Welcome to VisualClimate{" "}
										<Typography variant="h5" color="textSecondary">
											{" "}
											Learn more about our mission!
										</Typography>
									</Typography>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails>
									<Typography variant="h6">
										<Typography>
											<div className="aboutSizing" align="left">
												<p>
													We believe in visualizing climate and its usefulness
													in helping to spread awareness and
													the need to act.
												</p>
												<p>
													Utilizing maps and charts, VisualClimate illustrates
													changes for temperature, CO2, and drought levels by using a century’s worth of US climate change
													data. We also wanted to bring climate change job
													opportunities to you! Select a state and see related
													jobs in your area.
												</p>
											</div>
										</Typography>
									</Typography>
								</ExpansionPanelDetails>
							</ExpansionPanel>
							<ExpansionPanel>
								<ExpansionPanelSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel2a-content"
									id="panel2a-header"
								>
									<Typography variant="h4" gutterBottom>
										Fullstack Technologies{" "}
										<Typography variant="h5" color="textSecondary">
											{" "}
											Marvel at what we used to create VisualClimate.
										</Typography>
									</Typography>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails style={{ display: "block" }}>
									<Typography>
										<div className="aboutSizing" align="left">
										<p><strong>Take a deeper look into our project repository:</strong> https://github.com/india-raven/cs</p>
											<ul>
												<li>
													The backbone of this application uses React Mapbox GL
													and React to track temperature changes over time in
													color.
												</li>
												<li>
													D3 supports the map with traditional chart
													visualization.
												</li>
												<li>
													Our climate data is pulled from the National Centers
													for Environmental Protection and National Oceanic and
													Atmospheric Administration.
												</li>
												<li>
													We use Firebase to store the data for our map (temperature, PDSI, and map coordinates).
												</li>
												<li>
													Create React App serves as the scaffold for our entire
													application and Material UI is used for styling.
												</li>
											</ul>
										</div>
									</Typography>
								</ExpansionPanelDetails>
							</ExpansionPanel>
							<ExpansionPanel>
								<ExpansionPanelSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel3a-content"
									id="panel3a-header"
								>
									<Typography variant="h4" gutterBottom>
										Looking Forward{" "}
										<Typography variant="h5" color="textSecondary">
											{" "}
											What do we have planned for the future?
										</Typography>
									</Typography>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails>
									<Typography>
										<div className="aboutSizing">
											<p>
												We aim to continue building toward VisualClimate's
												complete potential. Here are some ideas we'd like to
												develop:
											</p>
											<ul>
												<li>Machine Learning to project future temperatures</li>
												<li>Volunteer Opportunities</li>
												<li>Donation Feature for Climate Change Initiatives</li>
												<li>Blog</li>
											</ul>
										</div>
									</Typography>
								</ExpansionPanelDetails>
							</ExpansionPanel>
							<ExpansionPanel>
								<ExpansionPanelSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel3a-content"
									id="panel3a-header"
								>
									<Typography variant="h4" gutterBottom>
										Our Team{" "}
										<Typography variant="h5" color="textSecondary">
											{" "}
											Connect with the developers who brought this application
											to life!
										</Typography>
									</Typography>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails>
									<Typography>
										<div id="team" className="aboutSizing">
											<div>
												<h2>RUSLAN ZYABBAROV</h2>
												<a target="_blank" href="https://github.com/zyabb">
													<img
														alt="Ruslan"
														src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Rabbit-128.png"
													/>
												</a>
												<p><strong>Bio:</strong> I love building things and working on a team to accomplish great things.</p>
												<p><strong>Github Profile:</strong> github.com/zyabb</p>
												<p><strong>LinkedIn Profile:</strong> linkedin.com/in/ruslan-zyabbarov</p>
											</div>
											<div>
												<h2>ALYONA RODINA</h2>
												<a target="_blank" href="https://github.com/TalRodin">
													<img
														alt="Alyona"
														src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Panda-128.png"
													/>
												</a>
												<p><strong>Bio:</strong> I excel in using my expertise in data science and mathematics to help the world make more informed decisions. </p>
												<p><strong>Github Profile:</strong> github.com/TalRodin</p>
												<p><strong>LinkedIn Profile:</strong> linkedin.com/in/alyonarodin</p>
											</div>
											<div>
												<h2>DAN TRACY</h2>
												<a target="_blank" href="https://github.com/dbtracy">
													<img
														alt="Dan"
														src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Penguin-128.png"
													/>
												</a>
												<p><strong>Bio:</strong> Musician- and actor-turned-coder. I'm interested in working as part of a team to help build ideas, especially those that can turn our good planet into a great one. </p>
												<p><strong>Github Profile:</strong> github.com/dbtracy</p>
												<p><strong>LinkedIn Profile:</strong> linkedin.com/in/dan-tracy</p>
											</div>
											<div>
												<h2>XAVIER OLIVARES</h2>
												<a
													target="_blank"
													href="https://github.com/xavierolivares"
												>
													<img
														alt="Xavier"
														src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Frog-128.png"
													/>
												</a>
												<p><strong>Bio:</strong> After immersing myself in the world of eCommerce, I wanted to go from selling online to building the software that makes it all work. My dive into the technical end has been great and I'm enjoying the process.</p>
												<p><strong>Github Profile:</strong> github.com/xavierolivares</p>
												<p><strong>LinkedIn Profile:</strong> linkedin.com/in/xavierolivaresb</p>
											</div>
										</div>
									</Typography>
								</ExpansionPanelDetails>
							</ExpansionPanel>
						</div>
					</Box>
				</div>
			</div>
		);
	}
}
