import { fromJS } from "immutable";
import MAP_STYLE from "./map-style-basic-v8.json";

// For more information on data-driven styles, see https://www.mapbox.com/help/gl-dds-ref/
export const dataLayer = fromJS({
  id: "data",
  source: "temperatureByState",
  type: "fill",
  interactive: true,
  paint: {
    "fill-color": {
      property: "percentile",
      stops: [
        [0, "#0000ff"], // dark blue
        [1, "#0080ff"],
        [2, "#00ffff"],
        [3, "#bfff00"],
        [4, "#ffff00"],
        [5, "#ffbf00"],
        [6, "#ff8000"],
        [7, "#ff4000"],
        [8, "#ff0000"] // red
      ]
    },
    "fill-opacity": 0.6
  }
});

export const defaultMapStyle = fromJS(MAP_STYLE);
