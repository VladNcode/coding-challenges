// Description

// Imagine a city where the streets are perfectly laid out to form an infinite square grid. In this city finding the shortest path between two given points (an origin and a destination) is much easier than in other more complex cities. Your task is to create an algorithm that does the following calculation.

// alt text

// Given user's departure and destination coordinates, each of them located on some street, find the length of the shortest route between them assuming that cars can only move along the streets. Each street can be represented as a straight line defined by the x = n or y = n formula, where n is an integer.

// Example

// For departure = [0.4, 1] and destination = [0.9, 3], the output should be perfectCity(departure, destination) = 2.7.

// 0.6 + 2 + 0.1 = 2.7, which is the answer.

// Guaranties

// An array [x, y] of x and y coordinates. It is guaranteed that at least one coordinate is integer.

// 0.0 ≤ departure[i] ≤ 10.0.

// 0.0 ≤ destination[i] ≤ 10.0.

// Result shoud be in format xx.x(0.0, 2.3, 4.5, 6.0, 23.0)

function perfectCity(departure, destination) {
	const [x1, x2] = departure;
	const [y1, y2] = destination;

	const x = Math.max(x1, y1) - Math.min(x1, y1);
	const y = Math.max(x2, y2) - Math.min(x2, y2);
	if (x === y) return (x + y).toFixed(1) + '';

	const whereToGo = (dir, one, two) => {
		const leftOrRight = one + two;
		let lor = leftOrRight > 1 ? 2 - leftOrRight : leftOrRight;
		return (dir + (lor < 0 ? -lor : lor)).toFixed(1);
	};

	return x < y ? whereToGo(y, x1, y1) : whereToGo(x, x2, y2);
}
