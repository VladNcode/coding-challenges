class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = new Node(-1);
		this.tail = this.head;
	}

	insertHead(val) {
		const newNode = new Node(val);
		newNode.next = this.head.next;
		this.head.next = newNode;

		if (this.head === this.tail) this.tail = this.head.next;
	}

	insertTail(val) {
		this.tail.next = new Node(val);
		this.tail = this.tail.next;
	}

	get(index) {
		let i = 0;
		let currNode = this.head.next;

		while (i < index && currNode) {
			i++;
			currNode = currNode.next;
		}

		return !currNode ? -1 : currNode.value;
	}

	remove(index) {
		let i = 0;
		let curr = this.head;

		while (i < index && curr) {
			i++;
			curr = curr.next;
		}

		if (curr && curr.next) {
			if (curr.next === this.tail) this.tail = curr;
			curr.next = curr.next.next;

			return true;
		}

		return false;
	}

	getValues() {
		const res = [];
		let currNode = this.head.next;

		while (currNode) {
			res.push(currNode.value);
			currNode = currNode.next;
		}

		return res;
	}
}
