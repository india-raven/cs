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
						Click below to learn more about our application and who we are as developers!{" "}
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
										VisualClimate{" "}
										<Typography variant="h5" color="textSecondary">
											{" "}
											Learn more about our mission!
										</Typography>{" "}
									</Typography>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails>
									<Typography variant="h6">
										<Typography>
											<div align="left">
												<h1>Our Mission</h1>
												<p>
													Welcome! Our team believes that the visualization of
													climate change is a pivotal tool in spreading
													awareness and the need to act.
												</p>
												<p>
													VisualClimate demonstrates changes on a map for
													temperature, CO2, and drought levels throughout a
													century’s worth of US climate change data. Along with
													chart visualization, this application also allows the
													user to seek nearby jobs opportunities that are
													related to climate change.
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
										Technologies{" "}
										<Typography variant="h5" color="textSecondary">
											{" "}
											Marvel at the stack of technologies we used to create VisualClimate.
										</Typography>{" "}
									</Typography>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails style={{ display: "block" }}>
									<Typography>
										<div align="left">
											<h2>Fullstack technologies that were used</h2>
											<ul>
												<li>
													The backbone of this application uses React Mapbox GL
													and React to track temperature changes over time in
													color.
												</li>
												<li>
													D3 supports the map with traditional chart
													visualization. Our climate data is pulled from the
													National Centers for Environmental Protection and
													National Oceanic and Atmospheric Administration.
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
										The Future{" "}
										<Typography variant="h5" color="textSecondary">
											{" "}
											What do we have planned for the future?
										</Typography>{" "}
									</Typography>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails>
									<Typography>
										<div>
											{" "}
											<h2>What we have in store for this application</h2>
											<p>
												We believe in this application and aim to continue
												iterating towards its full potential. Here are some
												ideas we'd like to create:
											</p>
											<ul>
												<li>Machine Learning future temperature projections</li>
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
										Team{" "}
										<Typography variant="h5" color="textSecondary">
											{" "}
											See the developers who brought this application to life!
										</Typography>{" "}
									</Typography>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails>
									<Typography>
										<div>
											{" "}
											<h2>What we have in store for this application</h2>
											<p>
												We believe in this application and aim to continue
												iterating towards its full potential. Here are some
												ideas we'd like to create:
											</p>
											<ul>
												<li>Machine Learning future temperature projections</li>
												<li>Volunteer Opportunities</li>
												<li>Donation Feature for Climate Change Initiatives</li>
												<li>Blog</li>
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
