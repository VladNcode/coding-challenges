const reverseList = head => {
	let curr = null;
	let next = head;

	while (next) {
		const temp = next.next;
		next.next = curr;
		curr = next;
		next = temp;
	}

	head.next = curr;
	newTail.next = null;

	return curr;
};

const reverseList2 = head => {
	let curr = null;
	let next = head;

	while (next) {
		const temp = next.next;
		next.next = curr;
		curr = next;
		next = temp;
	}

	return curr;
};

const reverseListRecursive = (head, newHead = null) => {
	if (!head) return;

	if (head.next) {
		newHead = reverseListRecursive(head.next);
		head.next.next = head;
	}

	head.next = null;

	return newHead;
};
