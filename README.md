# VisualClimate:

Welcome! We believe that visualization of a complex topic like climate change is helps with spreading its importance.

Our application demonstrates changes on a map for temperature, CO2, and drought levels throughout a century’s worth of US climate change data. Along with chart visualization, this application also allows the user to seek nearby jobs opportunities that are related to climate change.

## Technologies

* The backbone of this application uses React Mapbox GL and React to track temperature changes over time in color.
* D3 supports the map with traditional chart visualization. Our climate data is pulled from the National Centers for Environmental Protection and National Oceanic and Atmospheric Administration.
* We use Firebase to store our job data, which is received from the Indeed Jobs API. 
* [Create React App](https://github.com/facebook/create-react-app) serves as the scaffold for our entire application and Material UI is used for styling.

### Available Scripts

You must install the required dependencies for the application to run correctly:

### `npm install`

In order for Firebase to load correctly, please create a .env.local file in the root folder. We included a template called .env.example in the root folder. You will need to rename it to .env.local, fill it with your firebase credentials, and then add .env.local to your .gitignore file.

Notes:
1. For the .env.local file to work with the create-react-app, notice that your variables require a REACT_APP prefix.

2. Remember to include your .env.local file in the .gitignore file

3. Firebase is loading geoJson data that renders state shapes and is a pivotal piece the application. You can find our template here: [geoJson](https://storage.cloud.google.com/visualclimategeojson/us-temp.geojson)

Once your setup is complete, you can run the following script in the project directory:

### `npm start`

This script runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Deployment

We have a deploy bash script for Heroku located in our script folder. It is designed to take your deployment branch and launch that into Heroku's master branch.

However, if you would like to launch your own clone, you will need to configure a new application with Heroku.

## The Future

We believe in this application and aim to continue iterating towards its full potential. Here are some ideas we'd like to create:

* Machine Learning future temperature projections
* Volunteer Opportunities
* Donation Feature for Climate Change Initiatives
* Blog