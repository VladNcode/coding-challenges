// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// Notes

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word) {
  const dupl = {};
  let enc = '';

  word = word.toLowerCase();

  for (let i = 0; i < word.length; i++) {
    dupl[word[i]] = ++dupl[word[i]] || 1;
  }

  for (let i = 0; i < word.length; i++) {
    enc += dupl[word[i]] > 1 ? ')' : '(';
  }

  return enc;
}

const duplicate = word =>
  word
    .toLowerCase()
    .split('')
    .map(el => (el = new RegExp(`(${el}).*\\1`).test(word) ? ')' : '('))
    .join('');

// function duplicateEncode(word) {
//   return word
//     .toLowerCase()
//     .split('')
//     .map(function (a, i, w) {
//       return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')';
//     })
//     .join('');
// }

console.log(duplicateEncode('recede'));
