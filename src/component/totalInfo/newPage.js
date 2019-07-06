import React from "react";
// import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";
// import Paper from "@material-ui/core/Paper";
// import Image from "./climate.jpg";
// import Another_Page from "./anotherPage.js";
import ChartLine from "../charts/ChartLine";
import Box from "@material-ui/core/Box";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chart from "../charts/Chart";

export default class NewPage extends React.Component {
  render() {
    return (
      <Box width="90%" margin={6}>
        <div>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h4" gutterBottom>
                The Causes of Climate Change
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              {/* <Typography > */}
              <div align="left">
                <ChartLine
                  padding={"10px"}
                  data={[
                    { couse: "H2O 36-70%", value: 12 },
                    { couse: "CO2 9-26%", value: 6 },
                    { couse: "CH4 4-9%", value: 5 },
                    { couse: "O3 3-7%", value: 4 }
                  ]}
                />{" "}
              </div>
              <div padding-top="100px">
                {
                  "Greenhouse gases are components of the atmosphere that contribute to the greenhouse effect. Some greenhouse gases occur naturally in the atmosphere, while others result from human activities such as burning of fossil fuels such as coal. Greenhouse gases include water vapor, carbon dioxide, methane, nitrous oxide, and ozone. The major greenhouse gases are water vapor, which causes about 36-70% of the greenhouse effect on Earth (not including clouds); carbon dioxide, which causes 9-26%; methane, which causes 4-9%, and ozone, which causes 3-7%. It is not possible to state that a certain gas causes a certain percentage of the greenhouse effect, because the influences of the various gases are not additive. (The higher ends of the ranges quoted are for the gas alone; the lower ends, for the gas counting overlaps.) Other greenhouse gases include, but are not limited to, nitrous oxide, sulfur hexafluoride, hydrofluorocarbons, perfluorocarbons and chlorofluorocarbons."
                }
              </div>
              {/* </Typography> */}
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="h4" gutterBottom>
                Anomalies vs. Temperature
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <Chart />
                <div align="buttom">
                  {" "}
                  {
                    "What is a temperature anomaly? The term temperature anomaly means a departure from a reference value or long-term average. A positive anomaly indicates that the observed temperature was warmer than the reference value, while a negative anomaly indicates that the observed temperature was cooler than the reference value. What can the mean global temperature anomaly be used for? This product is a global-scale climate diagnostic tool and provides a big picture overview of average global temperatures compared to a reference value."
                  }
                </div>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel disabled>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Disabled Expansion Panel</Typography>
            </ExpansionPanelSummary>
          </ExpansionPanel>
        </div>
      </Box>
    );
  }
}
