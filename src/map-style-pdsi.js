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
        [0, "#9FFF33"],
        [1, "#BBFF33"],
        [2, "#CEFF33"],
        [3, "#E0FF33"],
        [4, "#ECFF33"],
        [5, "#FFFF33"],
        [6, "#FFF633"],
        [7, "#FFE933"],
        [8, "#FFDD33"],
        [9, "#FFD733"],
        [10, "#FFCE33"],
        [11, "#FFC133"],
        [12, "#FFB533"],
        [13, "#FFAC33"],
        [14, "#FFA533"],
        [15, "#FF9633"],
        [16, "#FF8333"],
        [17, "#FF7733"],
        [18, "#FF6B33"],
        [19, "#FF5B33"],
        [20, "#FF4633"]
      ]
    },
    "fill-opacity": 0.6
  }
});

export const defaultMapStyle = fromJS(MAP_STYLE);
