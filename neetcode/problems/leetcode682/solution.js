const calPoints = operations => {
	const stack = [];

	operations.forEach(o => {
		if (o === 'D') stack.push(stack.at(-1) * 2);
		else if (o === 'C') stack.pop();
		else if (o === '+') stack.push(stack.at(-1) + stack.at(-2));
		else stack.push(Number(o));
	});

	return stack.reduce((acc, el) => acc + el, 0);
};
