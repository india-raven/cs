const convertObjToArr = obj => {
  if (obj) {
    let objKeys = Object.keys(obj);
    return objKeys.map(key => {
      let newObj = {};
      newObj.date = key;
      newObj.y = JSON.stringify(obj[key]);
      return newObj;
    });
  }
};

console.log(
  convertObjToArr({
    "1995": 12.93,
    "1996": 12.05,
    "1997": 12.38,
    "1998": 13.96,
    "1999": 13.59,
    "2000": 12.11,
    "2001": 13.44,
    "2002": 13.56,
    "2003": 11.88,
    "2004": 12.49,
    "2005": 13.18,
    "2006": 13.77,
    "2007": 12.78,
    "2008": 12.97,
    "2009": 12.23,
    "2010": 13.72,
    "2011": 13.56,
    "2012": 14.06,
    "2013": 12.96,
    "2014": 12.45,
    "2015": -0.88
  })
);
