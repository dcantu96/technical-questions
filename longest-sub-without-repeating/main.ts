export function solution(
  s: string,
): number {
  const chars = new Set<string>()
  let longestSub: number = 0
  let left = 0
  let right = 0

  while (right < s.length) {
    while (chars.has(s[right])) {
      chars.delete(s[left])
      left++
    }
    chars.add(s[right])
    right++
    longestSub = Math.max(longestSub, right - left)
  }

  return longestSub
}
