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
        [1, "#0094FF"],
        [2, "#00C4FF"],
        [3, "#00E4FF"],
        [4, "#00FFD0"],
        [5, "#00FF83"],
        [6, "#00FF10"],
        [7, "#65FF00"],
        [8, "#B0FF00"],
        [9, "#FDFF00"], 
        [10, "#FFF000"],
        [11, "#FFDC00"],
        [12, "#FFC800"],
        [13, "#FFB400"],
        [14, "#FFA000"],
        [15, "#FF8C00"],
        [16, "#FF7800"],
        [17, "#FF6400"],
        [18, "#FF5000"],
        [19, "#FF3C00"],
        [20, "#FF2800"] 
      ]
    },
    "fill-opacity": 0.6
  }
});

export const defaultMapStyle = fromJS(MAP_STYLE);
