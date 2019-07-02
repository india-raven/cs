const data = [];

const yearAverage = months => {
  let newObj = {};
  months.forEach(month => {
    const year = String(month.YearMonth).slice(0, 4);
    if (!newObj[year]) newObj[year] = month["TAVG"];
    else newObj[year] = newObj[year] + month["TAVG"];
  });

  for (let year in newObj) {
    newObj[year] = (newObj[year] / 12).toFixed(2);
  }
  return newObj;
};

console.log(yearAverage(data));
