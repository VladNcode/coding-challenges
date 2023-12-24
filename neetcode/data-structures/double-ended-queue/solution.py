class NodeLinkedList:
    def __init__(self, val):
        self.value = val
        self.next = None


class DequeLinkedList:
    def __init__(self):
        self.head = NodeLinkedList(-1)
        self.tail = self.head

    def isEmpty(self) -> bool:
        if self.tail == self.head:
            return True
        return not bool(self.head.next)

    def append(self, value: int) -> None:
        self.tail.next = NodeLinkedList(value)
        self.tail = self.tail.next

    def appendleft(self, value: int) -> None:
        new_node = NodeLinkedList(value)
        new_node.next = self.head.next
        self.head.next = new_node

        if self.tail == self.head:
            self.tail = self.head.next

    def pop(self) -> int:
        if self.isEmpty():
            return -1
        curr = self.head

        while curr and curr.next != self.tail:
            curr = curr.next

        if curr and curr.next:
            if self.tail == curr.next:
                self.tail = curr
            val = curr.next.value
            curr.next = curr.next.next
            return val

    def popleft(self) -> int:
        if self.isEmpty():
            return -1
        val = self.head.next.value
        if self.head.next == self.tail:
            self.tail = self.head
        self.head.next = self.head.next.next
        return val


class NodeDoublyLinkedList:
    def __init__(self, val):
        self.value = val
        self.next = None
        self.prev = None


class DequeDoublyLinkedList:
    def __init__(self):
        self.head = NodeDoublyLinkedList(-1)
        self.tail = NodeDoublyLinkedList(-1)
        self.head.next = self.tail
        self.tail.prev = self.head

    def isEmpty(self) -> bool:
        return self.head.next == self.tail

    def append(self, value: int) -> None:
        new_node = NodeDoublyLinkedList(value)
        new_node.prev = self.tail.prev
        new_node.next = self.tail
        self.tail.prev.next = new_node
        self.tail.prev = new_node

    def appendleft(self, value: int) -> None:
        new_node = NodeDoublyLinkedList(value)
        new_node.prev = self.head
        new_node.next = self.head.next
        self.head.next.prev = new_node
        self.head.next = new_node

    def pop(self) -> int:
        if self.isEmpty():
            return -1
        value = self.tail.prev.value
        self.tail.prev.prev.next = self.tail
        self.tail.prev = self.tail.prev.prev
        return value

    def popleft(self) -> int:
        if self.isEmpty():
            return -1
        value = self.head.next.value
        self.head.next.next.prev = self.head
        self.head.next = self.head.next.next
        return value
