import React, { Component } from "react";
import ReactMapGL, {
  LinearInterpolator,
  FlyToInterpolator
} from "react-map-gl";
import firebase from "firebase";

import ControlPanel from "./control-panel";
import { defaultMapStyle, dataLayer } from "./map-style.js";
import { dataLayerPDSI } from "./map-style-pdsi.js";
import { updatePercentiles } from "./utils";
import { fromJS } from "immutable";
import { json as requestJson } from "d3-request";
import Button from "./component/totalInfo/button.js";
import ControlInfo from "./control-info";

import JobBoard from "./component/JobBoard";
import StateInfo from "./component/StateInfo";
// import SearchAppBar from "./component/searchappbar";
import Navbar from "./component/Navbar";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

class Map extends Component {
  state = {
    mapStyle: defaultMapStyle,
    year: 2018,
    data: null,
    selectedData: "Temperature",
    hoveredFeature: null,
    viewport: {
      width: "100vw",
      height: "100vh",
      latitude: 39.82,
      longitude: -98.5795,
      zoom: 4.5,
      captureScroll: false
    },
    name: "",
    show: false,
    showUSAInfo: false,
    stateData: {
      temperature: "",
      pdsi: ""
    }
  };
  //setIn(original, ['x', 'y', 'z'], 456) // { x: { y: { z: 456 }}}
  loadData = data => {
    const selectedData = this.state.selectedData;
    if (selectedData === "Temperature") {
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
        .set("layers", defaultMapStyle.get("layers").push(dataLayerPDSI));

      this.setState({ data, mapStyle });
    }
  };

  updateSettings = (name, value) => {
    if (name === "year") {
      this.setState({ year: value });

      const { data, mapStyle } = this.state;
      if (data) {
        if (this.state.selectedData === "Temperature") {
          updatePercentiles(data, f => {
            return f.properties.temperature[value];
          });
          const newMapStyle = mapStyle.setIn(
            ["sources", "temperatureByState"],
            fromJS({ type: "geojson", data })
          );
          this.setState({ mapStyle: newMapStyle });
        } else {
          updatePercentiles(data, f => f.properties.pdsi[value]);
          const newMapStyle = mapStyle.setIn(
            ["sources", "pdsiByState"],
            fromJS({ type: "geojson", data })
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
    firebase
      .database()
      .ref("/")
      .once("value")
      .then(snapshot => {
        console.log(snapshot.val());
        this.loadData(snapshot.val());
      });

    // requestJson("data/us-temp.geojson", (error, response) => {
    //   //WE USE CONVENIENT D3 LIBRARY TO REQUEST JSON
    //   if (!error) {
    //     console.log(response);
    //     this.loadData(response); //IF THERE IS NO ERROR => INVOKE _LOADDATA AND PASS RESPONSE THERE
    //   } else {
    //     console.log("----------------------------------------");
    //     console.error(error);
    //     console.log("----------------------------------------");
    //   }
    // });
  }
  onViewportChange = viewport =>
    this.setState({ viewport: { ...this.state.viewport, ...viewport } });

  goToViewport = (longitude, latitude) => {
    this.onViewportChange({
      captureScroll: false,
      longitude,
      latitude,
      zoom: 4.7,
      transitionInterpolator: new FlyToInterpolator(),
      transitionDuration: 1500
    });
  };

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
      this.goToViewport(event.lngLat[0], event.lngLat[1]);
      //POTENTIONAL PROBLEM HERE
      this.setState({
        name: features[0].properties.name,
        //   viewport: {
        //     width: '100vw',
        //     height: '100vh',
        //     longitude: event.lngLat[0],
        //     latitude: event.lngLat[1],
        //     zoom: 5,
        //     captureScroll: false,
        //   },
        stateData: features[0].properties
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
            Average Annual {this.state.selectedData}:{" "}
            {hoveredFeature.properties.value}
          </div>
          {/* <div>Percentile: {(hoveredFeature.properties.percentile / 8) * 100}</div> */}
        </div>
      )
    );
  }

  showModal = event => {
    this.setState({ show: true });
    this.onClick(event);
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  showUSA = () => {
    this.setState({ showUSAInfo: true });
    console.log("setting showUSAInfo");
    // this.onClick(event);
  };

  hideUSA = () => {
    this.setState({ showUSAInfo: false });
    console.log("closing showUSAInfo");
    // this.onClick(event);
  };

  handleSubmit = event => {
    this.setState(() => ({
      toPage: true
    }));
    this.onClick(event);
  };

  render() {
    const { viewport, mapStyle } = this.state;
    return (
      <div style={{ height: "100%" }}>
        <ReactMapGL
          {...this.state.viewport}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          mapStyle={mapStyle}
          onViewportChange={this.onViewportChange}
          onHover={this.onHover}
          // onStateClick={this.onViewportChange}
          onClick={this.showModal}
        >
          {this.renderTooltip()}
        </ReactMapGL>
        <Navbar />

        <ControlPanel
          containerComponent={this.props.containerComponent}
          settings={this.state}
          onChange={this.updateSettings}
          selectedData={this.state.selectedData}
          updateSelectedData={this.updateSelectedData}
          mapNewData={this.loadData}
        />

        <StateInfo
          name={this.state.name}
          show={this.state.show}
          handleClose={this.hideModal}
          onClick={this.hideModal}
          stateData={this.state.stateData}
        />

        <Button onClick={this.showUSA} />

        <ControlInfo
          show={this.state.showUSAInfo}
          handleClose={this.hideModal}
          onClick={this.hideUSA}
        />
      </div>
    );
  }
}

export default Map;
