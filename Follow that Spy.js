// We are tracking down our rogue agent Matthew Knight also known as Roy Miller. He travels from places to places to avoid being tracked. Each of his travels are based on a list of itineraries in an unusual or incorrect order. The task is to determine the routes he will take in his every journey.
//   Task
//
// You are given an array of routes of his itineraries. List down the only places where he will go in correct order based on his itineraries.
//   Example
//
// Given the following routes:
//
//   [ [USA, BRA], [JPN, PHL], [BRA, UAE], [UAE, JPN] ]
//
// The result will be:
//
//   "USA, BRA, UAE, JPN, PHL"
//
// Note:
//
//   It is safe to assume that there will be no repeating place with a different route.
//   There are no empty routes.
//   There will be at least one (1) route (from one waypoint to another).
//

const a = [
  ['MNL', 'TAG'],
  ['CEB', 'TAC'],
  ['TAG', 'CEB'],
  ['TAC', 'BOR'],
];

function findRoutes(r) {
  const findingStart = [];
  const findingFinish = [];
  let start = '';
  let finish = '';
  let path = '';

  for (let route of r) {
    findingStart.push(route[1]);
    findingFinish.push(route[0]);
  }

  for (let route of r) {
    if (!findingStart.includes(route[0])) {
      start = route[0];
    }

    if (!findingFinish.includes(route[1])) {
      finish = route[1];
    }
  }

  let cur = start;

  while (cur !== finish) {
    for (let route of r) {
      if (route[0] === cur) {
        path += route[0] === start ? '' : route[0] + ', ';
        cur = route[1];
      }
    }
  }

  return `${start}, ${path}${finish}`;
}
