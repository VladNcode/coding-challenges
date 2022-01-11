/*
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays
If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.

Remarks
a or b might be [] or {} (all languages except R, Shell).
a or b might be nil or null or None or nothing (except in C++, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

Note for C
The two arrays have the same size (> 0) given as parameter in function comp.
*/

function comp(a1, a2) {
  if (a1 === null && a2 !== null) return false;
  if (a2 === null && a1 !== null) return false;

  const obj = {};
  const obj2 = {};

  a1 = a1.map((el, i) => {
    el *= el;
    obj[el] = ++obj[el] || 1;
    obj2[a2[i]] = ++obj2[a2[i]] || 1;
  });

  for (v in obj) {
    if (obj[v] !== obj2[v]) return false;
  }

  return true;
}

// function comp(a1, a2) {
//   if (a1 === null && a2 !== null) return false;
//   if (a2 === null && a1 !== null) return false;

//   a1 = a1.map(el => el * el).sort((a, b) => a - b);
//   a2.sort((a, b) => a - b);

//   return a1.every((el, i) => el === a2[i]);
// }
