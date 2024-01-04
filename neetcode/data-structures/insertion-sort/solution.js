/**
 * Pair class to store key-value pairs
 */
// class Pair {
//     /**
//      * @param {number} key The key to be stored in the pair
//      * @param {string} value The value to be stored in the pair
//      */
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//     }
// }
class Solution {
	/**
	 * @param {Pair[]} pairs
	 * @returns {Pair[][]}
	 */
	insertionSort(pairs) {
		if (!pairs.length) return [];

		const steps = [[...pairs]];

		for (let i = 1; i < pairs.length; i++) {
			let j = i - 1;

			while (j >= 0 && pairs[j].key > pairs[j + 1].key) {
				[pairs[j + 1], pairs[j]] = [pairs[j], pairs[j + 1]];
				j--;
			}

			steps.push([...pairs]);
		}

		return steps;
	}
}
