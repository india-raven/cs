
const axios = require('axios');
const token = 'rZZdxIGIuVugHhNdABUrvgmqThhfOAls';
const chalk = require('chalk');
const _cliProgress = require('cli-progress');
const fs = require('fs');

let STATE = 'FIPS:36'
//FOR NY STATE ONLY
const getStations =
  `https://www.ncdc.noaa.gov/cdo-web/api/v2/stations?locationid=${STATE}&limit=500`
  // const getStations =
  // `https://www.ncdc.noaa.gov/cdo-web/api/v2/stations?locationid${STATE}&limit=500&sortfield=mindate`;
// const bar1 = new _cliProgress.Bar({}, _cliProgress.Presets.shades_classic);
// bar1.start(300, 0);
const getDataSets = (element) => {
  return new Promise((resolve, reject) => {

    axios.get(`https://www.ncdc.noaa.gov/cdo-web/api/v2/datasets?stationid=${element.id}`, {
      // timeout: 180000,
      headers: {
        token: token,
      },
    })
    .then(datasets => {
      // return setTimeout(() => resolve(datasets), 1000000);
        return resolve(datasets)
    }).catch(err=> {
      return reject(chalk.red(err.message))
    })
  })
}

axios
  .get(getStations, {
    headers: {
      token: token,
    },
  })
  .then(response => {
    console.log(chalk.bgYellowBright.magenta(`Getting station in ${STATE}`));
    // console.log(response.data.results);

    // console.log('go next ');

    const array = response.data.results.filter(element => parseInt(element.mindate.slice(0, 4)) <= 1994)
    // // console.log(array)
    const array2 = array.filter(element => parseInt(element.maxdate.slice(0, 4)) >= 2015)
    //   //element => ( (parseInt(element.mindate.slice(0, 4)) <= 1995 && parseInt(element.maxdate.slice(0, 4)) >= 1994)) && (parseInt(element.mindate.slice(0, 4)) <= 2005 && parseInt(element.maxdate.slice(0, 4)) >= 2004)
    console.log(chalk.bgYellowBright.magenta(`The amount of stations in the current state that satisfy the conditions is ${array2.length}`));
    console.log(array2[0]);

    console.log('Requesting each of station about GSOY ');
    const needs = [];


    array2.forEach((element, index) => {
      // axios.get(`https://www.ncdc.noaa.gov/cdo-web/api/v2/datasets?stationid=${element.id}`, {
      //   // timeout: 180000,
      //   headers: {
      //     token: token,
      //   },
      // })
      // .then(datasets => {
      //   // done = true
      //   console.log('here', '5 seconds');
      //   if (Object.keys(datasets.data).length === 0) {
      //     console.log('empty');
      //     setInterval(() => (console.log('timeout empty')), 5000)
      //   } else {
      //     console.log('not empty');
      //     // console.log(datasets.data);
      //     // setInterval(() => (console.log('timeout')), 5000)
      //   }
      //   // throw new Error("Something went badly wrong!");
      //   // done = true
      // }).catch(err=>console.error(err))
      getDataSets(element).then((dataset) => {
        console.log(dataset.data);
      })
    })

    throw new Error("Something went badly wrong!");
    axios.get(`https://www.ncdc.noaa.gov/cdo-web/api/v2/datasets?stationid=${array2[idx].id}`, {
      // timeout: 180000,
      headers: {
        token: token,
      },
    })
    .then(datasets => {
      done = true
      console.log('here', '5 seconds');
      if (Object.keys(datasets.data).length === 0) {
        console.log('empty');
        // setInterval(() => (console.log('timeout empty')), 5000)
      } else {
        console.log('not empty');
        // console.log(datasets.data);
        // setInterval(() => (console.log('timeout')), 5000)
      }
      // throw new Error("Something went badly wrong!");
      done = true
    }).catch(err=>console.error(err))
      // })

      //   const url = `https://www.ncdc.noaa.gov/cdo-web/api/v2/data?stationid=${element.id}&datasetid=GSOY&limit=1000&startdate=2005-01-01&enddate=2015-01-01`;
      //   console.log(url);



    // )
    // const id = array2[0].id;
    // const id = response.data.results[0].id;
    // console.log(id);
    // debugger;

    // return id;

  })
  .then(id => {
    // bar1.update(150);
    // console.log(id)

    const url = `https://www.ncdc.noaa.gov/cdo-web/api/v2/data?stationid=${id}&datasetid=GSOY&limit=1000&startdate=2005-01-01&enddate=2015-01-01`;
    console.log(url);

    axios
      .get(url, {
        headers: {
          token: token,
        },
      })
      .then( response => {
        // console.log(chalk.yellow(`INFORMATION FROM STATION ${id}`));
        // console.log(response);

        const array = response.data.results;
        const results = array.filter(element => element.datatype === 'TAVG');
        // bar1.stop();
        // console.log(results);

        results.forEach(element => {
          // console.log(element);
          // const JSONObject = JSON.stringify(element);
          // console.log(JSONObject);
          // fs.writeFile('secret.json', JSONObject, 'utf8', (err) => {
          //   if (err) console.error(err);
          //   return err
          // })
          // console.log(`"${element.date.slice(0, 4)}": ${element.value}, `);
        });
      });
  })
  .catch(err => {
    console.error(chalk.red(err));
  });

