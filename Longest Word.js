// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"

function LongestWord(sen) {
  let lng = '';
  const arr = sen.replace(/[^\w\s]/g, '').split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > lng.length) {
      lng = arr[i];
    }
  }
  return lng;
}

console.log(LongestWord('fun&!! time'));
