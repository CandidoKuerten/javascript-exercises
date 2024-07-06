const convertToCelsius = function(temp) {
  let graus = (temp - 32) * 5 / 9;
  if (Number.isInteger(graus)) {
    return graus;
  } else {
    return Number(graus.toFixed(1));
  }
};

const convertToFahrenheit = function(temp) {
  let graus = (temp * 9 / 5) + 32;
  if (Number.isInteger(graus)) {
    return graus;
  } else {
    return Number(graus.toFixed(1));
  }
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
