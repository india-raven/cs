const data = [];

const yearAverage = months => {
  let newObj = {};
  months.forEach(month => {
    let temp = month["TAVG"];
    const year = String(month.YearMonth).slice(0, 4);
    if (typeof temp !== "number") {
      // console.log("WHAT IS THIS", temp);
      if (temp.includes("-.")) {
        temp = temp.split("");
        temp.shift();
        temp.unshift("0");
        temp = temp.join("");
        temp = temp * -1;
        console.log("this is temp", temp, "typeof", typeof temp);
        // console.log("TRANSFORMED", temp, "TYPEOF", typeof temp);
      } else if (temp[0] === ".") {
        parseFloat(temp);
      }
    }
    if (!newObj[year]) newObj[year] = parseFloat(temp);
    else newObj[year] = newObj[year] + parseFloat(temp);
  });
  // console.log(newObj)
  for (let year in newObj) {
    newObj[year] = (newObj[year] / 12).toFixed(2);
  }
  return newObj;
};

console.log(yearAverage(data));
