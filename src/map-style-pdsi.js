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
        [1, "#FF5B33"],
        [2, "#FF6B33"],
        [3, "#FF7733"],
        [4, "#FF8333"],
        [5, "#FF9633"],
        [6, "#FFA533"],
        [7, "#FFAC33"],
        [8, "#FFB533"],
        [9, "#FFC133"],
        [10, "#FFCE33"],
        [11, "#FFD733"],
        [12, "#FFDD33"],
        [13, "#FFE933"],
        [14, "#FFF633"],
        [15, "#FFFF33"],
        [16, "#ECFF33"],
        [17, "#E0FF33"],
        [18, "#CEFF33"],
        [19, "#BBFF33"],
        [20, "#9FFF33"]
      ]
    },
    "fill-opacity": 0.6
  }
});

export const defaultMapStyle = fromJS(MAP_STYLE);
