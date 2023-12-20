class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
		this.prev = null;
	}
}

class MyLinkedList {
	constructor() {
		this.head = new Node(-1);
		this.tail = new Node(-1);
		this.head.next = this.tail;
		this.tail.prev = this.head;
		this.length = 0;
	}

	getNode(index) {
		let i = 0;
		let node = this.head.next;

		while (i < index) {
			i++;
			node = node.next;
		}

		return node || -1;
	}

	get(index) {
		const node = this.getNode(index);
		return typeof node === 'number' ? node : node.value;
	}

	addAtHead(val) {
		const newNode = new Node(val);
		newNode.prev = this.head;
		newNode.next = this.head.next;
		this.head.next.prev = newNode;
		this.head.next = newNode;
		this.length++;
	}

	addAtTail(val) {
		const newNode = new Node(val);
		newNode.next = this.tail;
		newNode.prev = this.tail.prev;
		this.tail.prev.next = newNode;
		this.tail.prev = newNode;
		this.length++;
	}

	addAtIndex(index, val) {
		if (index < 0 || index > this.length) return null;
		else if (index === 0) this.addAtHead(val);
		else if (index === this.length) this.addAtTail(val);
		else {
			const newNode = new Node(val);
			const node = this.getNode(index);
			newNode.prev = node.prev;
			newNode.next = node;
			node.prev.next = newNode;
			node.prev = newNode;
			this.length++;
		}
	}

	deleteAtIndex(index) {
		if (index < 0 || index > this.length - 1) return null;
		const node = this.getNode(index);
		node.prev.next = node.next;
		node.next.prev = node.prev;
		this.length--;
	}
}
