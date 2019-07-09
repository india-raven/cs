import React, { Component } from "react";

export default class AboutUs extends Component {
	render() {
		return (
			<div>
				<h1>VisualClimate</h1>
				<p>
					Welcome! Our team believes that the visualization of climate change is
					a pivotal tool in spreading awareness and the need to act.
				</p>
				<p>
					VisualClimate demonstrates changes on a map for temperature, CO2, and
					drought levels throughout a century’s worth of US climate change data.
					Along with chart visualization, this application also allows the user
					to seek nearby jobs opportunities that are related to climate change.
				</p>
				<h2>Technologies</h2>
				<ul>
					<li>
						The backbone of this application uses React Mapbox GL and React to
						track temperature changes over time in color.
					</li>
					<li>
						D3 supports the map with traditional chart visualization. Our
						climate data is pulled from the National Centers for Environmental
						Protection and National Oceanic and Atmospheric Administration.
					</li>
					<li>
						We use Firebase to store our job data, which is received from the
						Indeed Jobs API.
					</li>
					<li>
						Create React App serves as the scaffold for our entire application
						and Material UI is used for styling.
					</li>
				</ul>
				<h2>The Future</h2>
				<p>
					We believe in this application and aim to continue iterating towards
					its full potential. Here are some ideas we'd like to create:
				</p>
				<ul>
					<li>Machine Learning future temperature projections</li>
					<li>Volunteer Opportunities</li>
					<li>Donation Feature for Climate Change Initiatives</li>
					<li>Blog</li>
				</ul>
			</div>
		);
	}
}
