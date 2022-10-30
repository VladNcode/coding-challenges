function solution(s, t) {
	const defaultSpeed = s;
	let sprint = true;
	let part = 0;
	let max = 0;
	let last = 0;

	while (t > 0) {
		part = defaultSpeed * t;
		last = Math.max(last, max + part);

		if (sprint) max += s * 2;
		else max += --s;

		if (last > max + part) return last;

		sprint = !sprint;
		t--;
	}

	return Math.max(last, max);
}

console.log(solution(829, 135));
