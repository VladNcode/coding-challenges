class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
		this.prev = null;
	}
}

class Deque {
	constructor() {
		this.head = new Node(-1);
		this.tail = new Node(-1);
		this.head.next = this.tail;
		this.tail.prev = this.head;
	}

	isEmpty() {
		return this.head.next === this.tail;
	}

	append(value) {
		const newNode = new Node(value);
		newNode.prev = this.tail.prev;
		newNode.next = this.tail;
		this.tail.prev.next = newNode;
		this.tail.prev = newNode;
	}

	appendleft(value) {
		const newNode = new Node(value);
		newNode.next = this.head.next;
		newNode.prev = this.head;
		this.head.next.prev = newNode;
		this.head.next = newNode;
	}

	pop() {
		if (this.isEmpty()) return -1;

		const { value } = this.tail.prev;
		this.tail.prev.prev.next = this.tail;
		this.tail.prev = this.tail.prev.prev;

		return value;
	}

	popleft() {
		if (this.isEmpty()) return -1;

		const { value } = this.head.next;
		this.head.next.next.prev = this.head;
		this.head.next = this.head.next.next;

		return value;
	}
}
