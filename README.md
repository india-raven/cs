##INTRO: 

Welcome! VisualClimate demonstrates changes on a map for temperature, CO2, and drought levels throughout a century’s worth of US climate change data. 

We believe that visualization of a complex topic like climate change is key to spreading its importance.

-Along with chart visualization, this application also allows the user to seek nearby jobs opportunities that are related to climate change.
-The backbone of this application uses React Mapbox GL and React to track temperature changes over time in color.
-D3 supports the map with traditional chart visualization. Our climate data is pulled from the National Centers for Environmental Protection and National Oceanic and Atmospheric Administration.
-We use Firebase to store our job data, which is received from the Indeed Jobs API. 
-“Create React App” (https://github.com/facebook/create-react-app) serves as the scaffold for our entire application and Material UI is used for styling.

## Available Scripts

For the application to run correctly, you must first:

### `npm install`

-In order for Firebase and the application to load correctly, please create your .env.local file in the root folder. We included a template in the root folder that you will need to rename, add to your gitignore file, and then fill in with your secret api credentials.

**For the .env file to work with the create-react-app, notice that your variables have a REACT_APP prefix.

**Remember to include your .env.local file in the .gitignore file

Once your setup is complete, you can run the following script in the project directory:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Learn More

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment
