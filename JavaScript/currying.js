// const a =
// 	(...args) =>
// 	(...bargs) =>
// 		bargs.length ? a(...args, ...bargs) : args.reduce((acc, num) => acc + (typeof num === 'number' ? num : 0), 0)

let counter = 0;
const a = (...args) => {
	counter++;
	return (...bargs) =>
		bargs.length ? a.bind(...args, ...bargs) : args.reduce((acc, num) => acc + (typeof num === 'number' ? num : 0), 0);
};

console.log(a(1, 2, -3)(4)(2)(9, -9)(1, 1, 1, 1)(5, 'hello')(0)());
console.log('counter :>> ', counter);

// bind === 4, invoke === 7
