from ast import List


class Node:
    def __init__(self, val) -> None:
        self.value = val
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = Node(-1)
        self.tail = self.head

    def insertHead(self, val: int) -> None:
        new_node = Node(val)
        new_node.next = self.head.next
        self.head.next = new_node

        if self.head == self.tail:
            self.tail = self.head.next

    def insertTail(self, val: int) -> None:
        self.tail.next = Node(val)
        self.tail = self.tail.next

    def get(self, index: int) -> int:
        i = 0
        curr_node = self.head.next

        while i < index and curr_node:
            curr_node = curr_node.next
            i += 1

        if curr_node:
            return curr_node.value
        return -1

    def remove(self, index: int) -> bool:
        i = 0
        curr_node = self.head

        while i < index and curr_node:
            curr_node = curr_node.next
            i += 1

        if curr_node and curr_node.next:
            if self.tail == curr_node.next:
                self.tail = curr_node
            curr_node.next = curr_node.next.next
            return True

        return False

    def getValues(self) -> List[int]:
        res = []
        curr_node = self.head.next

        while curr_node:
            res.append(curr_node.value)
            curr_node = curr_node.next

        return res
