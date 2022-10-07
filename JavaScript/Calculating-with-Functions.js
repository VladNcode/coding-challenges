// const fn = num => calc => calc ? calc(num) : num;

// const zero = fn(0);
// const one = fn(1);
// const two = fn(2);
// const three = fn(3);
// const four = fn(4);
// const five = fn(5);
// const six = fn(6);
// const seven = fn(7);
// const eight = fn(8);
// const nine = fn(9);

// const plus = first => second => Math.floor(second + first);
// const minus = first => second => Math.floor(second - first);
// const times = first => second => Math.floor(second * first);
// const dividedBy = first => second => Math.floor(second / first);

// const [zero, one, two, three, four, five, six, seven, eight, nine] = [...Array(10)].map((_, i) => f => f ? f(i) : i);

['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'].forEach(function (name, i) {
	return (this[name] = fn => (fn ? fn(i) : i));
});

const plus = n => a => a + n;
const minus = n => a => a - n;
const times = n => a => a * n;
const dividedBy = n => a => Math.floor(a / n);

console.log(six(dividedBy(two())));
