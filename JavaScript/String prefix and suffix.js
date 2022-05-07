// In this Kata, you will be given a string and your task will be to return the length of the longest prefix that is also a suffix. A prefix is the start of a string while the suffix is the end of a string. For instance, the prefixes of the string "abcd" are ["a","ab","abc"]. The suffixes are ["bcd", "cd", "d"]. You should not overlap the prefix and suffix.

// for example:
// solve("abcd") = 0, because no prefix == suffix.
// solve("abcda") = 1, because the longest prefix which == suffix is "a".
// solve("abcdabc") = 3. Longest prefix which == suffix is "abc".
// solve("aaaa") = 2. Longest prefix which == suffix is "aa". You should not overlap the prefix and suffix
// solve("aa") = 1. You should not overlap the prefix and suffix.
// solve("a") = 0. You should not overlap the prefix and suffix.

function solve(s) {
	let max = 0;
	let subStr = '';

	for (let i = 0, j = s.length - 1; i < j; i++, j--) {
		subStr += s[i];
		if (s.endsWith(subStr)) max = Math.max(max, subStr.length);
	}

	return max;
}

console.log(solve('abcabca'));
