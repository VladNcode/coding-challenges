import math
from typing import List


class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        return self.mergeSort(nums, 0, len(nums) - 1)

    def mergeSort(self, nums: List[int], start: int, end: int):
        if start == end:
            return nums
        mid = math.floor((start + end) / 2)

        self.mergeSort(nums, start, mid)
        self.mergeSort(nums, mid + 1, end)

        return self.merge(nums, start, mid, end)

    def merge(self, nums: List[int], start: int, mid: int, end: int):
        left = nums[start : mid + 1]
        right = nums[mid + 1 : end + 1]

        left_index = 0
        right_index = 0
        index = start

        while left_index < len(left) and right_index < len(right):
            if left[left_index] <= right[right_index]:
                nums[index] = left[left_index]
                left_index += 1
            else:
                nums[index] = right[right_index]
                right_index += 1
            index += 1

        while left_index < len(left):
            nums[index] = left[left_index]
            left_index += 1
            index += 1

        while right_index < len(right):
            nums[index] = right[right_index]
            right_index += 1
            index += 1

        return nums
