// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

// 2332
// 110011
// 54322345

// For this kata, single digit numbers will not be considered numerical palindromes.

// For a given number num, write a function to test if the number contains a numerical palindrome or not and return a boolean (true if it does and false if does not). Return "Not valid" if the input is not an integer or is less than 0.

// Note: Palindromes should be found without permutating num.

// palindrome(5) => false
// palindrome(1221) => true
// palindrome(141221001) => true
// palindrome(1215) => true
// palindrome(1294) => false
// palindrome("109982") => "Not valid"

function palindrome(num) {
  const str = String(num);

  if (typeof num !== 'number' || /[^0-9]/.test(str)) return 'Not valid';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1] || str[i] === str[i + 2]) return true;
  }

  return false;
}
