const sumAll = function(n1, n2) {
  if(
    !Number.isInteger(n1) || 
    !Number.isInteger(n2) ||
    n1 < 0 ||
    n2 < 0
  ) {
    return "ERROR"
  }

  let sum = 0;
  let i = (n1 > n2) ? n2 : n1;
  let range = Math.abs(n1 - n2) + 1;

  do {
    sum += i;
    i++;
  } while (i <= range)

  return sum;
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
