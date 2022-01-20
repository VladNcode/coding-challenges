// assdssddffffrrreeeweggggg // => 'as2ds2d2f4r3e3weg5'

const str = 'assdssddffffrrreeeweggggg';

const count = function (str) {
  let fin = '';

  for (let i = 0, j = 1; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      j++;
    } else {
      fin += j > 1 ? `${str[i]}${j}` : str[i];
      j = 1;
    }
  }

  return fin;
};

const countObj = function (str) {
  let fin = '';
  let obj = {};

  for (let i = 0, j = 1; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      obj[str[i]] = ++obj[str[i]] || 2;
    } else {
      fin += obj[str[i]] === undefined ? str[i] : str[i] + obj[str[i]];
      obj = {};
    }
  }

  return fin;
};

console.log(count(str));
console.log(countObj(str));
