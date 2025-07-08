export function solution(matrix: number[][], target: number): boolean {
  function traverseX(row: number, start: number, end: number) {
    if (end - start === 0) {
      return matrix[row][start] === target
    }

    const mid = parseInt(`${(start + end) / 2}`)

    if (target > matrix[row][mid]) {
      return traverseX(row, mid + 1, end)
    } else if (target < matrix[row][mid]) {
      return traverseX(row, start, mid === start ? start : mid - 1)
    } else {
      return true
    }
  }

  function traverseY(start: number, end: number) {
    if (end - start === 0) {
      return traverseX(start, 0, matrix[start].length - 1)
    }

    const mid = parseInt(`${(start + end) / 2}`)
    if (target > matrix[mid][matrix[mid].length - 1]) {
      return traverseY(mid + 1, end)
    } else if (target < matrix[mid][0]) {
      return traverseY(start, mid === start ? start : mid - 1)
    } else {
      return traverseX(mid, 0, matrix[mid].length - 1)
    }
  }

  return traverseY(0, matrix.length - 1)
}
