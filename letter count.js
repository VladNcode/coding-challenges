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

  console.log(fin);
};

console.log(count(str));
