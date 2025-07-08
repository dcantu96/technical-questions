export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[],
): number {
  // Ensure nums1 is the shorter array
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1)
  }

  const m = nums1.length
  const n = nums2.length
  const half = Math.floor((m + n + 1) / 2)

  let low = 0
  let high = m

  while (low <= high) {
    const cut1 = Math.floor((low + high) / 2)
    const cut2 = half - cut1

    const left1 = cut1 > 0 ? nums1[cut1 - 1] : -Infinity
    const right1 = cut1 < m ? nums1[cut1] : Infinity

    const left2 = cut2 > 0 ? nums2[cut2 - 1] : -Infinity
    const right2 = cut2 < n ? nums2[cut2] : Infinity

    // Valid partition
    if (left1 <= right2 && left2 <= right1) {
      if ((m + n) % 2 === 0) {
        return (Math.max(left1, left2) + Math.min(right1, right2)) / 2
      } else {
        return Math.max(left1, left2)
      }
    }

    // Too far right in nums1, move left
    if (left1 > right2) {
      high = cut1 - 1
    } else {
      // Too far left in nums1, move right
      low = cut1 + 1
    }
  }

  throw new Error("Input arrays are not sorted or invalid")
}
