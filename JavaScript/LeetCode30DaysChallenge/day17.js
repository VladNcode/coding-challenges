const areDeeplyEqual = (o1, o2) => {
	// Types doesn't match, values are not equal
	if (typeof o1 !== typeof o2) return false;

	// All equal values and same objects are eliminated
	if (o1 === o2) return true;

	// If o1 !== o2 mean we either have object || array || values of the same type that are not equal
	// Check if they are objects or arrays, if its not the case than we have non equal values
	if (typeof o1 !== 'object' || typeof o2 !== 'object') return false;
	if (Array.isArray(o1) !== Array.isArray(o2)) return false;

	// Both should have same amount of keys, in case of indexes this will return indexes
	if (Object.keys(o1).length != Object.keys(o2).length) return false;

	// Check if all values against keys of o1 and o2 are deeply equal
	for (const key in o1) {
		if (!areDeeplyEqual(o1[key], o2[key])) return false;
	}

	// All checks passed
	return true;
};
