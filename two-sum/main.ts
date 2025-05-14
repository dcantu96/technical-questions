export function twoSum(nums: number[], target: number): number[] {
  const hashTable = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (hashTable.has(complement)) {
      return [hashTable.get(complement)!, i]
    } else {
      hashTable.set(nums[i], i)
    }
  }
  return []
}
