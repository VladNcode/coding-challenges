class Solution {
	quickSort(pairs, start = 0, end = pairs.length - 1) {
		if (end - start + 1 <= 1) return pairs;

		const pivot = pairs[end];
		let left = start;

		for (let i = start; i < end; i++) {
			if (pairs[i].key < pivot.key) {
				const temp = pairs[left];
				pairs[left] = pairs[i];
				pairs[i] = temp;
				left++;
			}
		}

		pairs[end] = pairs[left];
		pairs[left] = pivot;

		this.quickSort(pairs, start, left - 1);
		this.quickSort(pairs, left + 1, end);

		return pairs;
	}
}
