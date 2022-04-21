function turn(c, t) {
  const arr = ['N', 'E', 'S', 'W'];
  const ind = arr.indexOf(t) - arr.indexOf(c);
  return ind === -1 || ind === 3 ? 'left' : 'right';
}

// function turn(current, target) {
//   return "NESWN".includes(current+target) ? 'right' : 'left';
// }

console.log(turn('W', 'N'));
