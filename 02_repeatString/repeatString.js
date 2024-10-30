const repeatString = function(string, n) {
  
  if (n < 0) {
    return "ERROR"
  }

  let stringOutputed = "";
  for (let i = 0; i < n; i++) {
    stringOutputed += string;
  }

  return stringOutputed;
};

// Do not edit below this line
module.exports = repeatString;
