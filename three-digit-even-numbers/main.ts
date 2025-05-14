export function findEvenNumbers(d: number[]): number[] {
  const m = new Uint8Array(10) // frequency map for digits 0-9

  // Count digit frequencies
  for (let i = 0; i < d.length; i++) {
    const digit = d[i]
    m[digit] += 1
  }

  const result: number[] = []

  // i = hundreds digit (must not be zero)
  for (let i = 1; i < 10; ++i) {
    if (m[i] === 0) continue

    // j = tens digit
    for (let j = 0; j < 10; ++j) {
      if (i === j && m[j] < 2) continue
      if (i !== j && m[j] < 1) continue

      // k = units digit (must be even)
      for (let k = 0; k < 10; k += 2) {
        let usedCount = 0
        if (k === i) usedCount++
        if (k === j) usedCount++
        if (m[k] <= usedCount) continue

        result.push(100 * i + 10 * j + k)
      }
    }
  }

  return result
}
