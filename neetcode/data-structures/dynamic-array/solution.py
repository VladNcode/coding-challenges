class DynamicArray:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.length = 0
        self.last_element_index = -1
        self.array = [0] * self.capacity

    def get(self, i: int) -> int:
        return self.array[i]

    def set(self, i: int, n: int) -> None:
        self.array[i] = n

        if i > self.last_element_index:
            self.length += 1
            self.last_element_index += 1

    def pushback(self, n: int) -> None:
        if self.length == self.capacity:
            self.resize()

        self.array[self.length] = n
        self.last_element_index = self.length
        self.length += 1

    def popback(self) -> int:
        last_element = self.array[self.last_element_index]

        if last_element:
            self.last_element_index -= 1
            self.length -= 1

            return last_element

    def resize(self) -> None:
        self.capacity *= 2
        new_array = [0] * self.capacity

        for i in range(self.length):
            new_array[i] = self.array[i]

        self.array = new_array

    def getSize(self) -> int:
        return self.length

    def getCapacity(self) -> int:
        return self.capacity
