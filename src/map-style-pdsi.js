import { fromJS } from "immutable";
import MAP_STYLE from "./map-style-basic-v8.json";

// For more information on data-driven styles, see https://www.mapbox.com/help/gl-dds-ref/
export const dataLayerPDSI = fromJS({
  id: "data",
  source: "pdsiByState",
  type: "fill",
  interactive: true,
  paint: {
    "fill-color": {
      property: "percentile",
      stops: [
        [0, "#FF4633"],
        [1, "#FF8333"],
        [2, "#FFA533"],
        [3, "#FFB533"],
        [4, "#FFCE33"],
        [5, "#FFDD33"],
        [6, "#FFF633"],
        [7, "#ECFF33"],
        [8, "#CEFF33"],
        [9, "#9FFF33"]
      ]
    },
    "fill-opacity": 0.6
  }
});

export const defaultMapStyle = fromJS(MAP_STYLE);
