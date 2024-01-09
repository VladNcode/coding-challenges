/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
	/**
	 * @param {Pair[]} pairs
	 * @returns {Pair[]}
	 */
	mergeSort(pairs, start = 0, end = pairs.length) {
		if (start === end) return pairs;

		const mid = Math.floor((start + end) / 2);

		this.mergeSort(pairs, start, mid);
		this.mergeSort(pairs, mid + 1, end);

		return this.merge(pairs, start, mid, end);
	}

	merge(pairs, start, mid, end) {
		const left = pairs.slice(start, mid + 1);
		const right = pairs.slice(mid + 1, end + 1);

		let li = 0;
		let ri = 0;
		let idx = start;

		while (li < left.length && ri < right.length) {
			if (left[li].key <= right[ri].key) {
				pairs[idx] = left[li];
				li++;
			} else {
				pairs[idx] = right[ri];
				ri++;
			}
			idx++;
		}

		while (li < left.length) {
			pairs[idx] = left[li];
			li++;
			idx++;
		}

		while (ri < right.length) {
			pairs[idx] = right[ri];
			ri++;
			idx++;
		}

		return pairs;
	}
}
