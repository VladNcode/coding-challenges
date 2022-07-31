Function.prototype.bind = function () {
	return (...args) => this.call(...arguments, ...args);
};

const wiz = {
	name: 'Merlin',
	health: 100,
	restoreHealth() {
		this.health = 100;
		return `${this.name} now has: ${this.health} HP`;
	},
};

const barb = {
	name: 'Barbie',
	health: 30,
};

console.log(wiz.restoreHealth.bind(barb)());

const calc = (multiplier, divider, num) => `Your result is: ${(multiplier * num) / divider}`;

const mult5Div2 = calc.bind(null, 5, 2);

console.log(mult5Div2(10));
