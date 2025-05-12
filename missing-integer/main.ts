export function missingInteger(A: number[]): number {
  // iterate the array A, swap the array elements to their correct position
  for (let i = 0; i < A.length; i++) {
    // expected index for A[i] is eq to its value minus one
    // ex: [3,1,2]: for 3, expected index is 2 since thats where it should go
    while (A[i] > 0 && A[i] <= A.length && A[A[i] - 1] !== A[i]) {
      // we swap the values of the expected index and the actual index
      const temp = A[A[i] - 1]
      A[A[i] - 1] = A[i]
      A[i] = temp
    }
  }

  for (let i = 0; i < A.length; i++) {
    // ex [1,2,5]: 5 should be 3 so you return 3
    if (A[i] !== i + 1) {
      return i + 1
    }
  }

  // if no gaps exist then return A.length + 1
  return A.length + 1
}
