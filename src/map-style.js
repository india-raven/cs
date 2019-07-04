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
        [0, "blue"], // dark blue
        [1, "royalblue"],
        [2, "cyan"],
        [3, "green"],
        [4, "lime"],
        [5, "yellow"],
        [6, "orange"],
        [7, "pink"],
        [8, "red"] // red
      ]
      // stops: [
      //   [0, "rgb(49,49,100)"], // dark blue
      //   [1, "rgb(40,40,82)"],
      //   [2, "rgb(30,30,62)"],
      //   [3, "rgb(25,25,52)"],
      //   [4, "rgb(20,20,42)"],
      //   [5, "rgb(15,15,32)"],
      //   [6, "rgb(10,10,22)"],
      //   [7, "rgb(6,7,15)"],
      //   [8, "rgb(0,0,2)"] // red
      // ]
    },
    "fill-opacity": 0.6
  }
});

export const defaultMapStyle = fromJS(MAP_STYLE);
