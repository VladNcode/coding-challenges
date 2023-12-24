class Node:
    def __init__(self, val: int):
        self.value = val
        self.next = None


class LinkedQueue:
    def __init__(self):
        self.head = Node(-1)
        self.tail = self.head
        self.length = 0

    def enqueue(self, val: int):
        self.tail.next = Node(val)
        self.tail = self.tail.next
        self.length += 1

    def dequeue(self):
        if not self.head.next:
            return None

        val = self.head.next.value
        self.head.next = self.head.next.next
        if not self.head.next:
            self.tail = self.head
        self.length -= 1

        return val


class MyStack:
    def __init__(self):
        self.queue = LinkedQueue()

    def push(self, x: int) -> None:
        self.queue.enqueue(x)

    def pop(self) -> int:
        for i in range(self.queue.length - 1):
            self.queue.enqueue(self.queue.dequeue())

        return self.queue.dequeue()

    def top(self) -> int:
        val = self.pop()
        self.queue.enqueue(val)
        return val

    def empty(self) -> bool:
        return self.queue.length == 0
