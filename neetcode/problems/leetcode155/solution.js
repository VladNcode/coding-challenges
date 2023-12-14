class MinStack {
	constructor() {
		this.stack = [];
		this.min = Infinity;
	}

	push(val) {
		this.stack.push([val, this.min]);
		this.min = Math.min(this.min, val);
	}

	pop() {
		const [val] = this.stack.pop();
		if (this.min === val) this.min = min;
	}

	top() {
		return this.stack.at(-1)[0];
	}

	getMin() {
		return this.min;
	}
}
