class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows < 2 or numRows > len(s):
            return s

        word = ""
        increment = (numRows - 1) * 2

        for i in range(numRows):
            for j in range(i, len(s), increment):
                word += s[j]
                if i != 0 and i != numRows - 1 and j + increment - 2 * i < len(s):
                    word += s[j + increment - 2 * i]

        return word
