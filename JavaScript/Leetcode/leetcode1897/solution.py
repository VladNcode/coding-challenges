from collections import defaultdict
from typing import List


class Solution:
    def makeEqual(self, words: List[str]) -> bool:
        map = defaultdict(int)

        for word in words:
            for letter in word:
                map[letter] += 1

        size = len(words)
        for val in map.values():
            if val % size != 0:
                return False

        return True
