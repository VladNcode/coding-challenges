// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

const inc = function (str) {
  const zeroes = str.replace(/[^0]/g, '').length;
  const zeroesAndNines = str.replace(/[^09+$]/g, '').length;

  if (!str.match(/[0-9]/)) {
    return `${str}1`;
  }

  if (!str.match(/[1-9]/) && str.match(/0$/)) {
    return str.replace(/0$/, '1');
  }

  if (str.match(/0[1-8]$/)) {
    return str.replace(/[1-8]/, val => +val + 1);
  }

  if (zeroes > 1 && zeroesAndNines > zeroes) {
    return str.replace(/09+$/, val => +val + 1);
  }

  return str.replace(/\d+/, val => +val + 1);
};

console.log(inc('foo'));
console.log(inc('foo000'));
console.log(inc('foobar001'));
console.log(inc('foo099'));
console.log(inc('foo10299'));
console.log(inc('foobar00999'));

const incrementString = strng => strng.replace(/[0-8]?9*$/, val => ++val);
