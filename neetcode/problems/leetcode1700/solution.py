from typing import List


class Node:
    def __init__(self, val: int):
        self.value = val
        self.next = None


class LinkedQueue:
    def __init__(self, queue: List[int]):
        self.length = 1
        self.head = Node(queue[0])
        self.tail = self.head

        for i in range(1, len(queue)):
            self.enqueue(queue[i])

    def enqueue(self, val: int):
        self.tail.next = Node(val)
        self.tail = self.tail.next
        self.length += 1

    def dequeue(self):
        val = self.head.value
        self.head = self.head.next
        self.length -= 1
        return val

    def peek(self):
        return self.head.value


class Solution:
    def countStudents(self, students: List[int], sandwiches: List[int]) -> int:
        studentsQueue = LinkedQueue(students)
        sandwichesQueue = LinkedQueue(sandwiches)
        count = 0

        while count != sandwichesQueue.length:
            if studentsQueue.peek() == sandwichesQueue.peek():
                studentsQueue.dequeue()
                sandwichesQueue.dequeue()
                count = 0
            else:
                studentsQueue.enqueue(studentsQueue.dequeue())
                count += 1

        return count
