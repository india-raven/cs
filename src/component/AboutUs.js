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

export default class AboutUs extends Component {
	render() {
		return (
			<div>
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
													Our team believes that the visualization of climate
													change is a pivotal tool in spreading awareness and
													the need to act.
												</p>
												<p>
													Using maps and charts, VisualClimate illustrates
													changes for temperature, CO2, and drought levels.
													We're using a century’s worth of US climate change
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
													We use Firebase to store our job data, which is
													received from the Indeed Jobs API.
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
											See the developers who brought this application to life!
										</Typography>
									</Typography>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails>
									<Typography>
										<div className="aboutSizing">
											<a target="_blank" href="https://github.com/zyabb">
												<img
													alt="Ruslan"
													src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Frog-128.png"
												/>
											</a>
											<a target="_blank" href="https://github.com/TalRodin">
												<img
													alt="Alyona"
													src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Panda-128.png"
												/>
											</a>
											<a target="_blank" href="https://github.com/dbtracy">
												<img
													alt="Dan"
													src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Penguin-128.png"
												/>
											</a>
											<a target="_blank" href="https://github.com/xavierolivares">
												<img
													alt="Xavier"
													src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Rabbit-128.png"
												/>
											</a>
											<ul>
												<li>Ruslan</li>
												<li>Alyona</li>
												<li>Dan</li>
												<li>Xavier</li>
											</ul>
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
