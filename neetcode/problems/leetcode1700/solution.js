class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
	}
}

class QueueList {
	constructor(queue) {
		this.length = 1;
		this.head = new Node(queue[0]);
		this.tail = this.head;

		for (let i = 1; i < queue.length; i++) {
			this.enqueue(queue[i]);
		}
	}

	peek() {
		return this.head.value;
	}

	enqueue(value) {
		this.tail.next = new Node(value);
		this.tail = this.tail.next;
		this.length++;
	}

	dequeue() {
		const { value } = this.head;
		this.head = this.head.next;
		this.length--;

		return value;
	}
}

const countStudents = (students, sandwiches) => {
	const studentsQueue = new QueueList(students);
	const sandwitchesQueue = new QueueList(sandwiches);

	let count = 0;

	while (count !== sandwitchesQueue.length) {
		if (studentsQueue.peek() === sandwitchesQueue.peek()) {
			studentsQueue.dequeue();
			sandwitchesQueue.dequeue();
			count = 0;
		} else {
			studentsQueue.enqueue(studentsQueue.dequeue());
			count++;
		}
	}

	return count;
};
