const reverseList = head => {
	let curr = null;
	let following = head;

	while (following) {
		const temp = following.next;
		following.next = curr;
		curr = following;
		following = temp;
	}

	return curr;
};
const reverseList2 = head => {
	let [curr, following] = [null, head];

	while (following) {
		[following.next, curr, following] = [curr, following, following.next];
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

const reverseListRecursive2 = head => {
	// Base case
	if (!head || !head.next) return head;
	// Following node
	const newHead = reverseListRecursive2(head.next);
	// Set following node pointer to current node
	head.next.next = head;
	// Set current node next to be null
	head.next = null;
	// Return following node
	return newHead;
};
