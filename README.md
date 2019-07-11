# VisualClimate

We believe in visualizing climate and its usefulness in helping to spread awareness and the need to act.

Utilizing maps and charts, VisualClimate illustrates changes for temperature, CO2, and drought levels by using a century’s worth of US climate change data. We also wanted to bring climate change job opportunities to you! Select a state and see related jobs in your area.

## Technologies

* The backbone of this application uses React Mapbox GL and React to track temperature changes over time in color.
* D3 supports the map with traditional chart visualization. 
* Our climate data is pulled from the National Centers for Environmental Protection and National Oceanic and Atmospheric Administration.
* We use Firebase to store the data for our map (temperature, PDSI, and map coordinates). 
* [Create React App](https://github.com/facebook/create-react-app) serves as the scaffold for our entire application and Material UI is used for styling.

## The Future

We aim to continue building toward VisualClimate's complete potential. Here are some ideas we'd like to develop:

* Machine Learning future temperature projections
* Volunteer Opportunities
* Donation Feature for Climate Change Initiatives
* Blog

## Application Setup and Available Scripts

You must install the required dependencies for the application to run correctly:

### `npm install`

In order for Firebase to load correctly, please create a .env file in the root folder. We included a template called .env.example in the root folder. You will need to rename it to .env, fill it with your firebase credentials, and then add .env to your .gitignore file.

**Notes:**
* For the .env file to work with the create-react-app, notice that your variables require a REACT_APP prefix.

* Remember to include your .env file in the .gitignore file

* Firebase is loading geoJson data that renders state shapes and is an essential piece of the application. You can find our template here: [geoJson](https://storage.cloud.google.com/visualclimategeojson/us-temp.geojson)

Once your setup is complete, you can run the following script in the project directory:

### `npm start`

This script runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

## Deployment

We have a deploy bash script for Heroku located in our script folder. It is designed to clone your development branch, clone it into a deploy branch, and launches it into Heroku's master branch.

Instead of development, you can choose to use your master branch in the bash script.

Please note that you will need to first configure a new application with Heroku if you would like to launch a clone of this repository.