import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';

class Map extends Component {

  state = {
    viewport: {
      width: '100vw',
      height: '100vh',
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8,
      captureScroll: false
      // textAlign: 'none'
    }
  };

  render() {
    return (
        <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA'}
        onViewportChange={(viewport) => this.setState({viewport}) }
      />
    );
  }
}

export default Map;
