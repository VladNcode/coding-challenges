// function lostSheep(friday, saturday, total) {
//   const retTotal = [...friday, ...saturday];
//   return retTotal.length > 0 ? total - retTotal.reduce((acc, el) => acc + el) : total;
// }

const lostSheep = (friday, saturday, total) =>
  [...friday, ...saturday].reduce((acc, el) => acc - el, total);

console.log(lostSheep([], [], 15));
