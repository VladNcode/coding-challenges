class DynamicArray {
	/**
	 * @constructor
	 * @param {number} capacity
	 */
	constructor(capacity) {
		this.array = Array.from({ length: capacity }, _ => 0);
		this.capacity = capacity;
		this.size = 0;
		this.lastElementIndex = -1;
	}

	/**
	 * @param {number} i
	 * @returns {number}
	 */
	get(i) {
		return this.array[i];
	}

	/**
	 * @param {number} i
	 * @param {number} n
	 * @returns {void}
	 */
	set(i, n) {
		if (!this.array[i]) return;

		this.array[i] = n;

		if (i > this.lastElementIndex) {
			this.size++;
			this.lastElementIndex = i;
		}
	}

	/**
	 * @param {number} n
	 * @returns {void}
	 */
	pushback(n) {
		if (this.size === this.capacity) {
			this.resize();
		}

		this.array[this.size] = n;
		this.lastElementIndex = this.size;
		this.size++;
	}

	/**
	 * @returns {number}
	 */
	popback() {
		const lastElement = this.array[this.lastElementIndex];

		if (lastElement) {
			this.lastElementIndex--;
			this.size--;

			return lastElement;
		}
	}

	/**
	 * @returns {void}
	 */
	resize() {
		this.capacity *= 2;

		const newArray = Array.from({ length: this.capacity }, _ => 0);

		for (let i = 0; i < this.size; i++) {
			newArray[i] = this.array[i];
		}

		this.array = newArray;
	}

	/**
	 * @returns {number}
	 */
	getSize() {
		return this.size;
	}

	/**
	 * @returns {number}
	 */
	getCapacity() {
		return this.capacity;
	}
}
