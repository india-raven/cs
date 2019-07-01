import React, { Component } from "react";
import ReactMapGL, {
  LinearInterpolator,
  FlyToInterpolator
} from "react-map-gl";

import ControlPanel from "./control-panel";
import { defaultMapStyle, dataLayer } from "./map-style.js";
import { updatePercentiles } from "./utils";
import { fromJS } from "immutable";
import { json as requestJson } from "d3-request";

import { StateInfo } from "./component/StateInfo";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

class Map extends Component {
  state = {
    mapStyle: defaultMapStyle,
    year: 2015,
    data: null,
    hoveredFeature: null,
    viewport: {
      width: "100vw",
      height: "100vh",
      latitude: 0,
      longitude: 0,
      zoom: 0,
      captureScroll: false
    },
    name: ""
  };
  //setIn(original, ['x', 'y', 'z'], 456) // { x: { y: { z: 456 }}}
  loadData = data => {
    updatePercentiles(data, f => f.properties.temperature[this.state.year]);
    const mapStyle = defaultMapStyle
      // Add geojson source to map
      .setIn(
        ["sources", "temperatureByState"],
        fromJS({ type: "geojson", data })
      )
      // Add point layer to map
      .set("layers", defaultMapStyle.get("layers").push(dataLayer));

    this.setState({ data, mapStyle });
  };

  updateSettings = (name, value) => {
    if (name === "year") {
      this.setState({ year: value });

      const { data, mapStyle } = this.state;
      if (data) {
        updatePercentiles(data, f => f.properties.temperature[value]);
        const newMapStyle = mapStyle.setIn(
          ["sources", "temperatureByState", "data"],
          fromJS(data)
        );
        this.setState({ mapStyle: newMapStyle });
      }
    }
  };

  componentDidMount() {
    //COMPONENT DID MOUNT IS USED TO REQUEST GEOJSON FILE WITH TEMP INFORMATION RIGHT AFTER COMPONENT IS MOUNTED
    requestJson("data/us-temp.geojson", (error, response) => {
      //WE USE CONVINIENT D3 LIBRARY TO REQUEST JSON
      if (!error) {
        this.loadData(response); //IF THERE IS NO ERROR => INVOKE _LOADDATA AND PASS RESPONSE THERE
      } else {
        console.log("----------------------------------------");
        console.error(error);
        console.log("----------------------------------------");
      }
    });
  }
  onViewportChange = viewport => this.setState({ viewport });

  onHover = event => {
    const {
      features,
      srcEvent: { offsetX, offsetY }
    } = event;
    const hoveredFeature =
      features && features.find(f => f.layer.id === "data");
    this.setState({ hoveredFeature, x: offsetX, y: offsetY });
  };

  onClick = event => {
    const {
      features,
      srcEvent: { offsetX, offsetY }
    } = event;
    if (features[0]) {
      this.setState({ name: features[0].properties.name });
    } else {
      this.setState({ name: "" });
    }
  };

  renderTooltip() {
    const { hoveredFeature, x, y } = this.state;
    return (
      hoveredFeature && (
        <div className="tooltip" style={{ left: x, top: y }}>
          <div>State: {hoveredFeature.properties.name}</div>
          <div>
            Average Annual Temperature: {hoveredFeature.properties.value}
          </div>
          {/* <div>Percentile: {(hoveredFeature.properties.percentile / 8) * 100}</div> */}
        </div>
      )
    );
  }

  render() {
    const { viewport, mapStyle } = this.state;
    console.log(this);
    return (
      <div style={{ height: "100%" }}>
        <ReactMapGL
          {...this.state.viewport}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          mapStyle={mapStyle}
          onViewportChange={this.onViewportChange}
          // onHover={this.onHover}
          onClick={this.onClick}
        >
          {this.renderTooltip()}
        </ReactMapGL>

        <ControlPanel
          containerComponent={this.props.containerComponent}
          settings={this.state}
          onChange={this.updateSettings}
        />
        <StateInfo name={this.state.name} />
      </div>
    );
  }
}

export default Map;
