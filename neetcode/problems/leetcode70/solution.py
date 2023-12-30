class SolutionRec:
    def climbStairs(self, n: int) -> int:
        cache = {}

        def climb(n: int) -> int:
            if n <= 3:
                return n

            if n not in cache:
                cache[n] = climb(n - 1) + climb(n - 2)

            return cache[n]

        return climb(n)


class Solution:
    def climbStairs(self, n: int) -> int:
        if n <= 3:
            return n

        a = 1
        b = 2
        c = 3

        for _ in range(3, n):
            a = b
            b = c
            c = a + b

        return c


class Solution:
    def climbStairs(self, n: int) -> int:
        if n <= 3:
            return n

        a, b = 1, 2

        for _ in range(3, n + 1):
            a, b = b, a + b

        return b
