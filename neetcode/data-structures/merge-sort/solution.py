from typing import List


# Definition for a pair.
class Pair:
    def __init__(self, key: int, value: str):
        self.key = key
        self.value = value


class Solution:
    def mergeSort(self, pairs: List[Pair], start=0, end=None) -> List[Pair]:
        end = end if end is not None else len(pairs)
        if start == end:
            return pairs

        mid = (start + end) // 2

        self.mergeSort(pairs, start, mid)
        self.mergeSort(pairs, mid + 1, end)

        return self.merge(pairs, start, mid, end)

    def merge(self, pairs: List[Pair], start: int, mid: int, end: int):
        left = pairs[start : mid + 1]
        right = pairs[mid + 1 : end + 1]

        li = 0
        ri = 0
        idx = start

        while li < len(left) and ri < len(right):
            if left[li].key <= right[ri].key:
                pairs[idx] = left[li]
                li += 1
            else:
                pairs[idx] = right[ri]
                ri += 1
            idx += 1

        while li < len(left):
            pairs[idx] = left[li]
            li += 1
            idx += 1

        while ri < len(right):
            pairs[idx] = right[ri]
            ri += 1
            idx += 1

        return pairs
