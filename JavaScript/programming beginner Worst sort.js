/*
When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process --myjinxin2015 said

Description:
John is a programming beginner. He wrote a sort function. The purpose of the function is to put the character "J","o","h","n" on the right and the other characters on the left. finally, a space will added between left side and right side. For example:

"John say hello"  sorted to " say ell Johnho"
There is John's funtion:

function sortByJohn(str){
  var result=[];                             
  for(var i=0;i<=str.length;i++){          //Traversal string
    var char=String(str[i]);               //Get current char
    if(char=="J") result.push(char);       //If char is
    if(char=="o") result.push(char);       // J o h n       
    if(char=="h") result.push(char);       //Puts char to the right side
    if(char=="n") result.push(char);
    result.unshift(char);                  //Else, puts char to the left side
  }
  return result.join(" ");                 //Join the result with a space and return
}
The result of the function is very strange:

sortByJohn("John say hello") return:

"undefined o l l e h  y a s   n h o J J o h n h o"
Can you help John to correct the result?

Task
Complete function correctResult. Function accept an argument resultOfJohn. It's the result of John's function. You need to correct the result and return it.

Some examples:
 resultOfJohn=sortByJohn("John say hello")
 correctResult(resultOfJohn) === " say ell Johnho"
 
 resultOfJohn=sortByJohn("Anne and John are good friends")
 correctResult(resultOfJohn) === "Ae ad  are gd frieds nnnJohnoon"
Note: Inputs always be a string that contains letters and spaces(or be a empty string).
*/

function correctResult(resultOfJohn) {
  const john = 'John';
  let res = resultOfJohn
    .replace(/undefined/g, '')
    .split('')
    .reverse();
  let johnLetters = [];
  let restOfLetters = '';
  let count = 0;

  for (let i = 0; i < res.length; i++) {
    if (john.includes(res[i])) {
      count++;
      johnLetters.push(res.splice(i, 1));
    } else {
      restOfLetters += res[i];
    }
  }

  return `${restOfLetters
    .split('  ')
    .map(el => el.replace(/ /g, ''))
    .join(' ')} ${johnLetters.slice(count / 2).join('')}`.replace(/ $/, '');
}

// function correctResult(resultOfJohn) {
//   const john = 'John';
//   let res = resultOfJohn
//     .replace(/undefined/g, '')
//     .split('')
//     .reverse();

//   let count = 0;
//   let fin = [];

//   for (let i = 0; i < res.length; i++) {
//     if (john.includes(res[i])) {
//       count++;
//     }
//   }

//   res = res
//     .slice(count)
//     .join('')
//     .split('  ')
//     .map(el => el.replace(/ /g, ''))
//     .join(' ')
//     .split('');

//   for (let i = 0; res[i]; i++) {
//     if (john.includes(res[i])) {
//       fin.push(res.splice(i, 1)[0]);
//       i--;
//     }
//   }

//   return `${res.join('')} ${fin.join('')}`.replace(/ $/g, '');
// }

function sortByJohn(str) {
  var result = [];
  for (var i = 0; i <= str.length; i++) {
    //Traversal string
    var char = String(str[i]); //Get current char
    if (char == 'J') result.push(char); //If char is
    if (char == 'o') result.push(char); // J o h n
    if (char == 'h') result.push(char); //Puts char to the right side
    if (char == 'n') result.push(char);
    result.unshift(char); //Else, puts char to the left side
  }
  return result.join(' '); //Join the result with a space and return
}

// console.log(sortByJohn('Anne and John are good friends'));

// console.log(correctResult('undefined o l l e h   y a s   n h o J J o h n h o'));
console.log(
  correctResult(
    'undefined s d n e i r f   d o o g   e r a   n h o J   d n a   e n n A n n n J o h n o o n'
  )
);

('Ae ad are gd frieds nnnJohnoon');
('Ae ad  are gd frieds nnnJohnoon');

('tba   PiHHrO Fe  q mf H Ok p  ');
('tba   PiHHrO Fe  q mf H Ok p ');
