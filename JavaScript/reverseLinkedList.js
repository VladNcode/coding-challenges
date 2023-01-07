const nums = [1, 2, 3, 4, 5];

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	head = null;
	tail = null;

	constructor(nums) {
		nums.forEach(num => {
			const node = new Node(num);

			if (!this.head) {
				this.head = node;
				this.tail = this.head;
			} else {
				this.tail.next = node;
				this.tail = node;
			}
		});
	}

	reverse() {
		this.tail = this.head;
		let first = this.head;
		let second = this.head.next;

		while (second) {
			const temp = second.next;
			second.next = first;
			first = second;
			second = temp;
		}

		this.head.next = null;
		this.head = first;

		return this;
	}
}

const LL = new LinkedList(nums);
LL.reverse();

console.log(JSON.stringify(LL));
// https://www.autodraw.com/share/D9MDAKA9FD12
