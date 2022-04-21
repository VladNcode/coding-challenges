const input = {
  ' ': [5],
  d: [10],
  e: [1],
  '!': [11],
  H: [0],
  l: [2, 3, 9],
  o: [4, 7],
  r: [8],
  w: [6],
};

const makeWord = function (input) {
  const result = [];

  for (letter in input) {
    // for (let i = 0; i < input[letter].length; i++) {
    //   result[input[letter][i]] = letter;
    // }

    input[letter].forEach(pos => {
      result[pos] = letter;
    });
  }

  return result.join('');
};

console.log(makeWord(input));
