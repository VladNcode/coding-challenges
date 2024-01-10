from typing import List


class Pair:
    def __init__(self, key: int, value: str):
        self.key = key
        self.value = value


class Solution:
    def quickSort(self, pairs: List[Pair], start=0, end=None) -> List[Pair]:
        if end is None:
            end = len(pairs) - 1
        if end - start + 1 <= 1:
            return pairs

        pivot = pairs[end]
        left = start
        for i in range(start, end):
            if pairs[i].key < pivot.key:
                temp = pairs[left]
                pairs[left] = pairs[i]
                pairs[i] = temp
                left += 1

        pairs[end] = pairs[left]
        pairs[left] = pivot

        self.quickSort(pairs, start, left - 1)
        self.quickSort(pairs, left + 1, end)

        return pairs
