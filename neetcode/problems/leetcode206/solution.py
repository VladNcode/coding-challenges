from typing import Optional, ListNode


class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return None

        curr = head
        next = head.next
        new_tail = head

        while next:
            temp = curr
            curr = next
            next = next.next
            curr.next = temp

        head = curr
        new_tail.next = None

        return curr


class Solution2:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return None

        new_head = head

        if head.next:
            new_head = self.reverseList(head.next)
            head.next.next = head
        head.next = None

        return new_head
