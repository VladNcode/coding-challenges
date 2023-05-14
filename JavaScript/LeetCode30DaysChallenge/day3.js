class Counter {
	constructor(initValue) {
		this.initValue = initValue;
		this.value = initValue;
	}

	increment() {
		++this.value;
		return this.value;
	}

	decrement() {
		--this.value;
		return this.value;
	}

	reset() {
		this.value = this.initValue;
		return this.value;
	}
}

const createCounter = init => new Counter(init);

// const startingValue = init
// return {
// 	increment: () => ++init,
// 	decrement: () => --init,
// 	reset: () => {
// 		init = startingValue;
// 		return startingValue;
// 	},
// };
