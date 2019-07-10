import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
// import Image from './climate.jpg'
// import Another_Page from '../charts/anotherPage.js'
import ChartLine from '../charts/ChartLine';
import Box from '@material-ui/core/Box';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chart from '../charts/Chart.js';
import GraphLine from '../charts/GraphLine';

export default class NewPage extends React.Component {
  render() {
    return (
      <div>
        <h3 style={{paddingLeft: '30px', margin: '20px', color: 'white', fontSize: '20px'}}>
          Click below for more data about climate change across the United
          States Of America{' '}
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
                  The Causes of Climate Change{' '}
                  <Typography variant="body2" color="textSecondary">
                    {' '}
                    Gases that contribute to the greenhouse effect include:
                    Water vapor, Carbon dioxide (CO2), Methane
                  </Typography>{' '}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography variant="h6">
                  <div className="pie">
                    <ChartLine
                      padding={'10px'}
                      data={[
                        { couse: 'H2O 36-70%', value: 12 },
                        { couse: 'CO2 9-26%', value: 6 },
                        { couse: 'CH4 4-9%', value: 5 },
                        { couse: 'O3 3-7%', value: 4 },
                      ]}
                    />
                  </div>
                  <Typography>
                    <div align="left">
                    <strong>We are. </strong>
                      {
                        'While a wide range of natural phenomena can radically affect the climate, publishing climate scientists overwhelmingly agree that global warming and resultant climate effects that we\'re witnessing are the result of human activity. Life on Earth is dependent on an atmospheric "greenhouse" – a layer of gasses, primarily water vapour, in the lower atmosphere that trap heat from the sun as it\'s reflected back from the Earth, radiating it back and keeping our planet at a temperature capable of supporting life. Human activity is currently generating an excess of long-lived greenhouse gasses that – unlike water vapour – don\'t dissipate in response to temperature increases, resulting in a continuing buildup of heat. '
                      }
                      <a href='https://www.wired.co.uk/article/what-is-climate-change-definition-causes-effects' style={{textDecoration: 'none', color: 'grey'}}>Source</a>
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
                  Anomalies vs. Temperature{' '}
                  <Typography variant="body2" color="textSecondary">
                    In climate change studies, temperature anomalies are more
                    important than absolute temperature.
                  </Typography>{' '}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails style={{display: 'block'}}>
              <div className="chart">
                <Chart />
              </div>

                <Typography>
                  <div  align="left">
                    {
                      'A temperature anomaly is the difference from an average, or baseline, temperature. The baseline temperature is typically computed by averaging 30 or more years of temperature data. A positive anomaly indicates the observed temperature was warmer than the baseline, while a negative anomaly indicates the observed temperature was cooler than the baseline. When calculating an average of absolute temperatures, things like station location or elevation will have an effect on the data (ex. higher elevations tend to be cooler than lower elevations and urban areas tend to be warmer than rural areas). However, when looking at anomalies, those factors are less critical. For example, a summer month over an area may be cooler than average, both at a mountain top and in a nearby valley, but the absolute temperatures will be quite different at the two locations. '
                    }

                    <a href='https://www.ncdc.noaa.gov/monitoring-references/dyk/anomalies-vs-temperature' style={{textDecoration: 'none', color: 'grey'}}>Source</a>
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
                  CO2
                  <Typography variant="body2" color="textSecondary">
                    Carbon Dioxide
                  </Typography>
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <GraphLine />
                  <div>
                    {' '}
                    {
                      'Carbon dioxide (CO2) is an important heat-trapping (greenhouse) gas, which is released through human activities such as deforestation and burning fossil fuels, as well as natural processes such as respiration and volcanic eruptions. On Earth, human activities are changing the natural greenhouse. Over the last century the burning of fossil fuels like coal and oil has increased the concentration of atmospheric carbon dioxide (CO2). This happens because the coal or oil burning process combines carbon with oxygen in the air to make CO2. To a lesser extent, the clearing of land for agriculture, industry, and other human activities has increased concentrations of greenhouse gases. '
                    }
                    <a href='https://climate.nasa.gov/vital-signs/carbon-dioxide/' style={{textDecoration: 'none', color: 'grey'}}>Source</a>
                  </div>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </Box>
      </div>
    );
  }
}
