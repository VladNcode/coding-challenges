const isPalindrome = s => {
	if (s.length < 2) return true;
	s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

	let i;
	let j;

	if (s.length % 2 === 0) {
		i = Math.floor(s.length / 2);
		j = i - 1;
	} else {
		i = j = Math.floor(s.length / 2);
	}

	while (i !== -1 && j !== s.length) {
		if (s[i] !== s[j]) return false;
		i--;
		j++;
	}
	return true;
};
