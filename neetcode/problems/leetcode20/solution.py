class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) % 2 != 0:
            return False

        complements = {")": "(", "}": "{", "]": "["}
        stack = []

        for p in s:
            if p in complements:
                if stack and stack[-1] == complements[p]:
                    stack.pop()
                else:
                    return False

            else:
                stack.append(p)

        return False if stack else True
