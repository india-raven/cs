import React, { Component } from "react";
import ReactMapGL, {
  LinearInterpolator,
  FlyToInterpolator
} from "react-map-gl";

import ControlPanel from "./control-panel";
import { defaultMapStyle, dataLayer } from "./map-style.js";
import { dataLayerPDSI } from "./map-style-pdsi.js";
import { updatePercentiles } from "./utils";
import { fromJS } from "immutable";
import { json as requestJson } from "d3-request";

import JobBoard from "./component/JobBoard";
import StateInfo from "./component/StateInfo";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

class Map extends Component {
  state = {
    mapStyle: defaultMapStyle,
    year: 2018,
    data: null,
    selectedData: "temp",
    hoveredFeature: null,
    viewport: {
      width: "100vw",
      height: "100vh",
      latitude: 39.82,
      longitude: -98.5795,
      zoom: 4,
      captureScroll: false
    },
    name: "",
    show: false
  };
  //setIn(original, ['x', 'y', 'z'], 456) // { x: { y: { z: 456 }}}
  loadData = data => {
    const selectedData = this.state.selectedData;
    if (selectedData === "temp") {
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
    } else {
      updatePercentiles(data, f => f.properties.pdsi[this.state.year]);
      const mapStyle = defaultMapStyle
        // Add geojson source to map
        .setIn(["sources", "pdsiByState"], fromJS({ type: "geojson", data }))
        // Add point layer to map
        .set("layers", defaultMapStyle.get("layers").push(dataLayer));

      this.setState({ data, mapStyle });
    }
  };

  updateSettings = (name, value) => {
    if (name === "year") {
      this.setState({ year: value });

      const { data, mapStyle } = this.state;
      if (data) {
        if (this.state.selectedData === "temp") {
          updatePercentiles(data, f => {
            return f.properties.temperature[value];
          });
          const newMapStyle = mapStyle.setIn(
            ["sources", "temperatureByState", "data"],
            fromJS(data)
          );
          this.setState({ mapStyle: newMapStyle });
        } else {
          updatePercentiles(data, f => f.properties.pdsi[value]);
          const newMapStyle = mapStyle.setIn(
            ["sources", "temperatureByState", "data"],
            fromJS(data)
          );
          this.setState({ mapStyle: newMapStyle });
        }
      }
    }
  };

  updateSelectedData = data => {
    this.setState({
      selectedData: data
    });
  };

  componentDidMount() {
    //COMPONENT DID MOUNT IS USED TO REQUEST GEOJSON FILE WITH TEMP INFORMATION RIGHT AFTER COMPONENT IS MOUNTED
    requestJson("data/us-temp.geojson", (error, response) => {
      //WE USE CONVENIENT D3 LIBRARY TO REQUEST JSON
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
    console.log("COORDS:", event.lngLat);
    if (features[0]) {
      this.setState({
        name: features[0].properties.name,
        viewport: {
          width: "100vw",
          height: "100vh",
          longitude: event.lngLat[0],
          latitude: event.lngLat[1],
          zoom: 5,
          captureScroll: false
        }
      });
    } else {
      this.setState({ name: "" });
      this.hideModal();
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

  showModal = event => {
    this.setState({ show: true });
    console.log("inside");
    console.log(this.state);
    this.onClick(event);
  };

  hideModal = () => {
    console.log("close");

    this.setState({ show: false });
  };

  render() {
    console.log(this.state);
    const { viewport, mapStyle } = this.state;
    return (
      <div style={{ height: "100%" }}>
        <ReactMapGL
          {...this.state.viewport}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          mapStyle={mapStyle}
          onViewportChange={this.onViewportChange}
          onHover={this.onHover}
          // onClick={this.onClick}
          onClick={this.showModal}
        >
          {this.renderTooltip()}
        </ReactMapGL>

        <ControlPanel
          containerComponent={this.props.containerComponent}
          settings={this.state}
          onChange={this.updateSettings}
          selectedData={this.state.selectedData}
          updateSelectedData={this.updateSelectedData}
        />

        {/* <JobBoard /> */}

        <StateInfo
          name={this.state.name}
          show={this.state.show}
          handleClose={this.hideModal}
          onClick={this.hideModal}
        />
      </div>
    );
  }
}

export default Map;
