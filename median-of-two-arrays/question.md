# Median of Two Sorted Arrays

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the
median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

### Example 1:

```
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
```

### Example 2:

```
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3)/2 = 2.5.
```

Constraints:

- nums1.length == m
- nums2.length == n
- 0 <= m <= 1000
- 0 <= n <= 1000
- -10^6 <= nums1[i], nums2[i] <= 10^6
- nums1 and nums2 are sorted in ascending order.

### Analysis

The median of two sorted arrays can be found using binary search. The idea is to
partition the two arrays into two halves such that all elements in the left half
are less than or equal to all elements in the right half. The median can then be
calculated based on the maximum of the left half and the minimum of the right
half.

### Approach

1. Find the median of the two arrays using binary search.
2. If the total number of elements is even, return the average of the two middle
   elements.
3. If the total number of elements is odd, return the middle element.

### Complexity Analysis

- Time Complexity: O(log(min(m, n))) where m and n are the lengths of the two
  arrays.
- Space Complexity: O(1) since we are using constant space.

### Conclusion

The median of two sorted arrays can be efficiently found using binary search.
The time complexity is O(log(min(m, n))) and the space complexity is O(1). This
approach is optimal for finding the median in sorted arrays.

### Test Cases

```typescript
console.log(findMedianSortedArrays([1, 3], [2])) // Output: 2.00000
console.log(findMedianSortedArrays([1, 2], [3, 4])) // Output: 2.50000
console.log(findMedianSortedArrays([0, 0], [0, 0])) // Output: 0.00000
console.log(findMedianSortedArrays([], [1])) // Output: 1.00000
console.log(findMedianSortedArrays([2], [])) // Output: 2.00000
console.log(findMedianSortedArrays([1, 2], [3])) // Output: 2.00000
console.log(findMedianSortedArrays([1, 3], [2, 4])) // Output: 2.50000
console.log(findMedianSortedArrays([1, 2, 3], [4, 5])) // Output: 3.00000
console.log(findMedianSortedArrays([1, 2, 3], [4, 5, 6])) // Output: 3.50000
console.log(findMedianSortedArrays([1, 2, 3], [4, 5, 6, 7])) // Output: 4.00000
```
