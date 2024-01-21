from typing import List


class Solution:
    def sortColors(self, nums: List[int]) -> None:
        bucket = [0, 0, 0]
        idx = 0

        for num in nums:
            bucket[num] += 1

        for i in range(3):
            for j in range(bucket[i]):
                nums[idx] = i
                idx += 1
