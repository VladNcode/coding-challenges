// Can Santa save Christmas?
// Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.

// But he has only 24 hours left. Can he do it?

// Your Task:
// You will get an array as input with time durations as string in the following format: HH:MM:SS. Each duration represents the time taken by Santa to deliver a present. Determine whether he can do it in 24 hours or not. In case the time required to deliver all of the presents is exactly 24 hours, Santa can complete the delivery ;-) .

// new Date('Jan 1, 1970' + el + 'Z').getTime() / 1000
// getTime() returns time in milliseconds since Jan 1, 1970, 00:00:00.000 GMT

let arr = ['06:00:00', '12:00:00', '06:30:00'];

const determineTime = arr =>
  arr.reduce((acc, time) => acc + new Date(`Jan 1, 1970 ${time}Z`).getTime() / 1000, 0) <= 86400;

console.log(determineTime(arr));
