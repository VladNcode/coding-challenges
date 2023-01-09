const getCode = str => str.length.toString(2).padStart(8, '0');

const shiftCharCode = (letter, shift) => {
	const code = letter.charCodeAt(0);
	const shifted = String.fromCharCode(code + shift);

	return shifted;
};

const encode = (strs, res = []) => {
	for (const str of strs) {
		const code = getCode(str);
		let encodedStr = '';
		for (let letter of str) encodedStr += shiftCharCode(letter, 3);

		res.push(`${code}${encodedStr}`);
	}

	return res.join('');
};

const decode = (str, res = []) => {
	for (let left = 0, right = left + 8, length = 0; left < str.length; left = right + length, right = left + 8) {
		const countString = str.slice(left, right);
		length = parseInt(countString, 2);
		const decoding = str.slice(right, right + length);

		let decodedStr = '';
		for (const letter of decoding) decodedStr += shiftCharCode(letter, -3);

		res.push(decodedStr);
	}

	return res;
};

const input = ['hello', 'there', 'fellow', 'programmers'];

const enc = encode(input);
console.log(enc);
const dec = decode(enc);
console.log(dec);
