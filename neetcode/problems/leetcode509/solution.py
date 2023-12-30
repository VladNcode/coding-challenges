class SolutionRec:
    def fib(self, n: int) -> int:
        if n <= 1:
            return n
        return self.fib(n - 1) + self.fib(n - 2)


class Solution:
    def fib(self, n: int) -> int:
        if n <= 1:
            return n
        a = 0
        b = 1
        c = 1

        for i in range(3, n + 1):
            a = b
            b = c
            c = a + b

        return c
