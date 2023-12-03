from typing import List


class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        new_arr = [0] * len(nums) * 2
        for i in range(len(nums)):
            new_arr[i] = nums[i]
            new_arr[len(nums) + i] = nums[i]

        return new_arr
