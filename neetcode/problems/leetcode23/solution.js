const mergeTwoLists = (list1, list2) => {
	if (!list1) return list2;
	if (!list2) return list1;

	let head = new ListNode(-1);
	let curr = head;

	while (list1 && list2) {
		if (list1.val <= list2.val) {
			curr.next = list1;
			list1 = list1.next;
		} else {
			curr.next = list2;
			list2 = list2.next;
		}

		curr = curr.next;
	}

	if (!list1) {
		curr.next = list2;
	} else if (!list2) {
		curr.next = list1;
	}

	return head.next;
};

const mergeKLists = lists => {
	let finalList = lists[0] || null;

	for (let i = 1; i < lists.length; i++) {
		finalList = mergeTwoLists(finalList, lists[i]);
	}

	return finalList;
};
