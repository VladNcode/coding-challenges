// You'll implement once, a function that takes another function as an argument, and returns a new version of that function that can only be called once.

// Subsequent calls to the resulting function should have no effect (and should return undefined).

// For example:

// logOnce = once(console.log)
// logOnce("foo") // -> "foo"
// logOnce("bar") // -> no effect


// function once(fn) {
// 	let counter = 0;

// 	return function () {
// 		if (counter > 0) return;

// 		counter++;
// 		return fn.apply(null, arguments);
// 	};
// }

const once = (fn, counter = 0) => (...args) => counter++ ? void 0 : fn(...args)
