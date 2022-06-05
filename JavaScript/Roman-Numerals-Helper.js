class RomanNumerals {
	static romans = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1,
	};

	static toRoman(num) {
		let res = '';

		for (const roman in this.romans) {
			const multiplier = Math.floor(num / this.romans[roman]);
			num -= multiplier * this.romans[roman];
			res += roman.repeat(multiplier);
		}

		return res;
	}

	static fromRoman = str =>
		str.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((acc, num) => acc + this.romans[num], 0);
}

console.log(RomanNumerals.toRoman(2008));
console.log(RomanNumerals.fromRoman('MDCLXVI'));
