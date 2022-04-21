// Array.prototype.length will give you the number of top-level elements in an array.
//
//   Your task is to create a function deepCount that returns the number of ALL elements within an array, including any within inner-level arrays.
//
//   For example:
//
//   deepCount([1, 2, 3]);
// //>>>>> 3
// deepCount(["x", "y", ["z"]]);
// //>>>>> 4
// deepCount([1, 2, [3, 4, [5]]]);
// //>>>>> 7
//
// The input will always be an array.

function deepCount(a) {
  if (a.length === 0) {
    return 0;
  }

  if (Array.isArray(a[0])) {
    return 1 + deepCount([...a[0], ...a.slice(1)]);
  } else {
    return 1 + deepCount(a.slice(1));
  }
}

// function deepCount(arr) {
//   const stack = [...arr]
//   let size = 0
//
//   while (stack.length) {
//     const next = stack.pop()
//     size += 1
//
//     if (Array.isArray(next)) {
//       stack.push(...next)
//     }
//   }
//
//   return size
// }
