### Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a
single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the
number 0 itself.

Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4] Output: [7,0,8] Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0] Output: [0] Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9] Output: [8,9,9,9,0,0,0,1]

### Constraints:

The number of nodes in each linked list is in the range [1, 100]. 0 <= Node.val
<= 9 It is guaranteed that the list represents a number that does not have
leading zeros.

### Analysis

The problem is to add two numbers represented by linked lists. The digits are
stored in reverse order, so we need to traverse the linked lists from the head
to the tail. We can use a carry variable to keep track of the carry from the
previous digit addition. We will create a new linked list to store the result.
We will iterate through both linked lists, adding the corresponding digits and
the carry. If the sum is greater than 9, we will set the carry to 1 and subtract
10 from the sum. If one of the linked lists is shorter, we will treat the
missing digits as 0. Finally, if there is still a carry after the last digit
addition, we will add a new node with the value of the carry to the end of the
result linked list.

The time complexity of this algorithm is O(max(m, n)), where m and n are the
lengths of the two linked lists. This is because we need to iterate through both
linked lists once. The space complexity is O(max(m, n)), as we need to create a
new linked list to store the result.
