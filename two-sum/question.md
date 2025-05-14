1. Two Sum

Given an array of integers nums and an integer target, return indices of the two
numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not
use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9 Output: [0,1] Explanation: Because
nums[0] + nums[1] == 9, we return [0, 1]. Example 2:

Input: nums = [3,2,4], target = 6 Output: [1,2] Example 3:

Input: nums = [3,3], target = 6 Output: [0,1]

Constraints:

2 <= nums.length <= 104 -109 <= nums[i] <= 109 -109 <= target <= 109 Only one
valid answer exists.

Follow-up: Can you come up with an algorithm that is less than O(n2) time
complexity?

### Analysis

The problem is asking to find two numbers in the given list that add up to the
target number. The problem is a classic problem in computer science and is often
used to test the ability to solve problems using algorithms and data structures.
The problem can be solved using a brute force approach, which involves checking
all possible pairs of numbers in the list to see if they add up to the target
number. This approach has a time complexity of O(n^2), which is not efficient
for large lists. However, there are more efficient algorithms that can solve the
problem in O(n) time complexity. One such algorithm is to use a hash table to
store the numbers and their indices as we iterate through the list. This allows
us to check if the complement of the current number (i.e., target - current
number) exists in the hash table. If it does, we can return the indices of the
two numbers. This approach has a time complexity of O(n) and a space complexity
of O(n) as well. The algorithm is efficient and can handle large lists without
any issues. The problem is a good example of how to use data structures to solve
problems efficiently. It also highlights the importance of understanding the
time and space complexity of algorithms when solving problems. Overall, the
problem is a good example of how to use algorithms and data structures to solve
problems efficiently and effectively.

### Pseudocode

1. Create a hash table to store the numbers and their indices
2. Iterate through the list of numbers
3. For each number, calculate its complement (i.e., target - current number)
4. Check if the complement exists in the hash table
5. If it does, return the indices of the two numbers
6. If it doesn't, add the current number and its index to the hash table
7. If no pairs are found, return an empty list
8. End
