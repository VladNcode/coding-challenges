class Node:
    def __init__(self, val: int):
        self.value = val
        self.next = None
        self.prev = None


class MyLinkedList:
    def __init__(self):
        self.length = 0
        self.head = Node(-1)
        self.tail = Node(-1)
        self.head.next = self.tail
        self.tail.prev = self.head

    def get(self, index: int) -> int:
        node = self.getNode(index)
        return node.value if type(node) != int else node

    def getNode(self, index: int) -> int:
        i = 0
        curr = self.head.next

        while i < index:
            i += 1
            curr = curr.next

        return curr if curr else -1

    def addAtHead(self, val: int) -> None:
        new_node = Node(val)
        new_node.prev = self.head
        new_node.next = self.head.next
        self.head.next.prev = new_node
        self.head.next = new_node
        self.length += 1

    def addAtTail(self, val: int) -> None:
        new_node = Node(val)
        new_node.next = self.tail
        new_node.prev = self.tail.prev
        self.tail.prev.next = new_node
        self.tail.prev = new_node
        self.length += 1

    def addAtIndex(self, index: int, val: int) -> None:
        if index > self.length or index < 0:
            return None
        elif index == self.length:
            self.addAtTail(val)
        elif index == 0:
            self.addAtHead(val)
        else:
            node = self.getNode(index)

            new_node = Node(val)
            new_node.prev = node.prev
            new_node.next = node
            node.prev.next = new_node
            node.prev = new_node
            self.length += 1

    def deleteAtIndex(self, index: int) -> None:
        if index > self.length - 1 or index < 0:
            return None

        node = self.getNode(index)
        node.prev.next = node.next
        node.next.prev = node.prev
        self.length -= 1
