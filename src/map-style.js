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
        [0, "#0064FF"], 
        [1, "#00C4FF"],
        [2, "#00FFD0"],
        [3, "#00ff10"],
        [4, "#b0FF00"], 
        [5, "#FFF000"],
        [6, "#FFC800"],
        [7, "#FFA000"],
        [8, "#FF7800"],
        [9, "#FF2800"] 
      ]
    },
    "fill-opacity": 0.6
  }
});

export const defaultMapStyle = fromJS(MAP_STYLE);
