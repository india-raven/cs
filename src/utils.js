import { range } from 'd3-array';
import { scaleLinear } from 'd3-scale';

export function updatePercentiles(featureCollection, accessor) {
  const { features } = featureCollection;
  const scale = scaleLinear()
    .domain(features.map(accessor))
    .range(range(21));
  features.forEach(f => {
    const value = accessor(f);
    f.properties.value = value;
    f.properties.percentile = scale(value);
  });
}
