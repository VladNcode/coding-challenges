// Observe the process with the array given below and the tracking of the sums of each corresponding array.

// [5, 3, 6, 10, 5, 2, 2, 1] (34) ----> [5, 3, 6, 10, 2, 1] ----> (27) ------> [10, 6, 5, 3, 2, 1]  ----> [4, 1, 2, 1, 1] (9) -----> [4, 1, 2] (7)

// The tracked sums are : [34, 27, 9, 7]. We do not register one of the sums. It is not difficult to see why.

// We need the function track_sum ( or trackSum ) that receives an array ( or list ) and outputs a tuple ( or array ) with the following results in the order given below:

//     array with the tracked sums obtained in the process
//     final array

// So for our example given above, the result will be:

// trackSum([5, 3, 6, 10, 5, 2, 2, 1]) == [[34, 27, 9, 7], [4, 1, 2]]

// You will find more cases in the Example Tests.

// Have a good time!

function trackSum(arr) {
	const countSum = x => x.reduce((acc, el) => acc + el);
	const removeDupl = x => [...new Set(x)];

	let copy = [...arr];
	const history = [];

	history.push(countSum(copy));

	copy = removeDupl(copy);
	history.push(countSum(copy));

	copy = copy.sort((a, b) => b - a).map((curr, i, array) => curr - array[i + 1]).slice(0, -1);
	history.push(countSum(copy));

	copy = removeDupl(copy);
	history.push(countSum(removeDupl(copy)));

	return [history, copy];
}


function trackSumLuls(arr) {
	const history = [
		[...arr],
		[...new Set(arr)],
		[...new Set(arr)]
			.sort((a, b) => b - a)
			.map((curr, i, array) => curr - array[i + 1])
			.slice(0, -1),
	];

	history.push([...new Set(history[2])]);

	return [history.map(x => x.reduce((acc, el) => acc + el)), history.pop()];
}
