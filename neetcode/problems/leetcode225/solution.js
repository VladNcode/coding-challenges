class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
	}
}

class LinkedQueue {
	constructor() {
		this.head = new Node(-1);
		this.tail = this.head;
		this.length = 0;
	}

	enqueue(val) {
		this.tail.next = new Node(val);
		this.tail = this.tail.next;
		this.length++;
	}

	dequeue() {
		if (!this.head.next) return null;

		let val = this.head.next.value;
		this.head.next = this.head.next.next;
		if (!this.head.next) {
			this.tail = this.head;
		}
		this.length--;

		return val;
	}
}

class MyStack {
	constructor() {
		this.queue = new LinkedQueue();
	}

	push(val) {
		this.queue.enqueue(val);
	}

	pop() {
		for (let i = 0; i < this.queue.length - 1; i++) {
			this.queue.enqueue(this.queue.dequeue());
		}

		return this.queue.dequeue();
	}

	top() {
		const val = this.pop();
		this.queue.enqueue(val);

		return val;
	}

	empty() {
		return this.queue.length == 0;
	}
}
