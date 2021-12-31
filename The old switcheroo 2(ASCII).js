// function encode(str) {
//   return str
//     .split('')
//     .map(el =>
//       el.match(/[a-z]/) ? el.charCodeAt(0) - 96 : el.match(/[A-Z]/) ? el.charCodeAt(0) - 64 : el
//     )
//     .join('');
// }

// const encode = str =>
//   str
//     .split('')
//     .map(el =>
//       /[a-z]/.test(el) ? el.charCodeAt(0) - 96 : /[A-Z]/.test(el) ? el.charCodeAt(0) - 64 : el
//     )
//     .join('');

// const encode = str => str.replace(/[a-z]/gi, l => l.charCodeAt() - (l.charCodeAt() > 96 ? 96 : 64));
const encode = str => str.replace(/[a-z]/gi, l => l.charCodeAt() - (l < 'a' ? 64 : 96));

// 'B'.charCodeAt();
// console.log('B'.charCodeAt());

console.log(encode('aBc-#@5'));

// lowercase letter to ASCII
// console.log('b'.charCodeAt(0) - 96);
// uppercase letter to lowercase letter ASCII (-32)
// console.log('B'.charCodeAt(0) - 64);

console.log('a' > 'B');
