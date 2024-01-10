from typing import List


class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        min_number = float("inf")
        max_number = float("-inf")

        for num in nums:
            min_number = min(min_number, num)
            max_number = max(max_number, num)

        count = [0] * (max_number - min_number + 1)

        for num in nums:
            count[num - min_number] += 1

        remain = k
        for i in range(len(count) - 1, -1, -1):
            remain -= count[i]
            if remain <= 0:
                return i + min_number

        return -1
