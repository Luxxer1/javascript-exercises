const convertToCelsius = function(f) {
  let formula = (f - 32) * (5/9);
  return +formula.toFixed(1);
};

const convertToFahrenheit = function(c) {
  let formula = (c * (9/5)) + 32;
  return +formula.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
