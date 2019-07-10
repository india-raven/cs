import React, { Component } from "react";

export default class Legend extends Component {
  render() {
    const selectedData = this.props.selectedData;
    return selectedData === "Temperature" ? (
      <div id="state-legend" class="legend">
        <div>
          <h3>Hot</h3>
        </div>
        <div>
          <span style={{ background: "#FF2800" }} />
        </div>
        <div>
          <span style={{ background: "#FF7800" }} />
        </div>
        <div>
          <span style={{ background: "#FFA000" }} />
        </div>
        <div>
          <span style={{ background: "#FFC800" }} />
        </div>
        <div>
          <span style={{ background: "#FFF000" }} />
        </div>
        <div>
          <span style={{ background: "#b0FF00" }} />
        </div>
        <div>
          <span style={{ background: "#00ff10" }} />
        </div>
        <div>
          <span style={{ background: "#00FFD0" }} />
        </div>
        <div>
          <span style={{ background: "#00C4FF" }} />
        </div>
        <div>
          <span style={{ background: "#0064FF" }} />
        </div>
        <div>
          <h3>Cold</h3>
        </div>
      </div>
    ) : (
      <div id="state-legend" class="legend">
        <div>
          <h3>Dry</h3>
        </div>
        <div>
          <span style={{ background: "#FF4633" }} />
        </div>
        <div>
          <span style={{ background: "#FF8333" }} />
        </div>
        <div>
          <span style={{ background: "#FFA533" }} />
        </div>
        <div>
          <span style={{ background: "#FFB533" }} />
        </div>
        <div>
          <span style={{ background: "#FFB533" }} />
        </div>
        <div>
          <span style={{ background: "#FFDD33" }} />
        </div>
        <div>
          <span style={{ background: "#FFF633" }} />
        </div>
        <div>
          <span style={{ background: "#ECFF33" }} />
        </div>
        <div>
          <span style={{ background: "#CEFF33" }} />
        </div>
        <div>
          <span style={{ background: "#9FFF33" }} />
        </div>
        <div>
          <h3>Wet</h3>
        </div>
      </div>
    );
  }
}
