const multiply20 = price => price * 20;
const divide100 = price => price / 100;
const normalizedPrice = price => price.toFixed(2);

// const compose =
// 	(...funcs) =>
// 	x => {
// 		let res = 0;
// 		for (let i = 0; i < funcs.length; i++) {
// 			if (i === 0) res = funcs[i](x);
// 			else res = funcs[i](res);
// 		}

// 		return res;
// 	};

const compose =
	(...funcs) =>
	x =>
		funcs.reduceRight((arg, fn) => fn(arg), x);

const pipe =
	(...fns) =>
	x =>
		fns.reduce((acc, fn) => fn(acc), x);

console.log(compose(multiply20, divide100, normalizedPrice)(200));

const add1 = a => a + 1;
const add3 = (a, b, c) => a + b + c;

const composeWithArgs = (...fns) =>
	fns.reduceRight(
		(arg, fn) =>
			(...args) =>
				fn(arg(...args)),
	);

console.log(composeWithArgs(add1, add3)(1, 2, 3));
