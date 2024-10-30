const leapYears = function(year) {
  const isYearDivisibleByFour = year % 4 === 0;
  const isCentury = year % 100 === 0;
  const isYearDivisibleByFourHundred = year % 400 === 0;

  if (
    isYearDivisibleByFour &&
    (!isCentury || isYearDivisibleByFourHundred)
  ) {
    return true;
  } else {
    return false;
  }

  // return !(year % 100) ? !(year % 400) : !(year % 4);
};

// Do not edit below this line
module.exports = leapYears;
