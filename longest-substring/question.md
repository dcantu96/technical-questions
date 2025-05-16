3. Longest Substring Without Repeating Characters

Given a string `s`, find the length of the longest substring without duplicate
characters.

Example 1: Input: s = "abcabcbb" Output: 3 Explanation: The answer is "abc",
with the length of 3.

Example 2: Input: s = "bbbbb" Output: 1 Explanation: The answer is "b", with the
length of 1.

Example 3: Input: s = "pwwkew" Output: 3 Explanation: The answer is "wke", with
the length of 3.

Notice that the answer must be a substring, "pwke" is a subsequence and not a
substring.

Constraints:

0 <= s.length <= 5 * 104 s consists of English letters, digits, symbols and
spaces.

Analysis The problem is to find the length of the longest substring without
repeating characters. We can use a sliding window approach to solve this
problem. We will maintain a window that contains all unique characters. We will
use two pointers, `left` and `right`, to represent the current window. The
`right` pointer will expand the window by moving to the right, while the `left`
pointer will shrink the window when we encounter a duplicate character.

We will also use a set to keep track of the characters in the current window. If
we encounter a duplicate character, we will move the `left` pointer to the right
until the duplicate character is removed from the window. We will keep track of
the maximum length of the window during this process.

The time complexity of this algorithm is O(n), where n is the length of the
string. This is because we are using a sliding window approach, and each
character is processed at most twice (once by the `right` pointer and once by
the `left` pointer). The space complexity is O(min(n, m)), where n is the length
of the string and m is the size of the character set (e.g., 26 for lowercase
letters).
