import { assertEquals } from "jsr:@std/assert"
import { solution } from "./main.ts"

Deno.test("Search 2D Matrix - target exists in matrix", () => {
  const matrix = [
    [1, 2, 4, 8],
    [10, 11, 12, 13],
    [14, 20, 30, 40],
  ]
  assertEquals(solution(matrix, 10), true)
  assertEquals(solution(matrix, 1), true)
  assertEquals(solution(matrix, 40), true)
  assertEquals(solution(matrix, 12), true)
})

Deno.test("Search 2D Matrix - target does not exist in matrix", () => {
  const matrix = [
    [1, 2, 4, 8],
    [10, 11, 12, 13],
    [14, 20, 30, 40],
  ]
  assertEquals(solution(matrix, 15), false)
  assertEquals(solution(matrix, 0), false)
  assertEquals(solution(matrix, 50), false)
  assertEquals(solution(matrix, 9), false)
})

Deno.test("Search 2D Matrix - single element matrix", () => {
  const matrix = [[5]]
  assertEquals(solution(matrix, 5), true)
  assertEquals(solution(matrix, 3), false)
})

Deno.test("Search 2D Matrix - single row matrix", () => {
  const matrix = [[1, 3, 5, 7, 9]]
  assertEquals(solution(matrix, 5), true)
  assertEquals(solution(matrix, 1), true)
  assertEquals(solution(matrix, 9), true)
  assertEquals(solution(matrix, 4), false)
  assertEquals(solution(matrix, 0), false)
  assertEquals(solution(matrix, 10), false)
})

Deno.test("Search 2D Matrix - single column matrix", () => {
  const matrix = [[1], [3], [5], [7], [9]]
  assertEquals(solution(matrix, 5), true)
  assertEquals(solution(matrix, 1), true)
  assertEquals(solution(matrix, 9), true)
  assertEquals(solution(matrix, 4), false)
  assertEquals(solution(matrix, 0), false)
  assertEquals(solution(matrix, 10), false)
})

Deno.test("Search 2D Matrix - larger matrix", () => {
  const matrix = [
    [1, 4, 7, 11, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35],
  ]
  assertEquals(solution(matrix, 4), true)
  assertEquals(solution(matrix, 19), true)
  assertEquals(solution(matrix, 1), true)
  assertEquals(solution(matrix, 35), true)
  assertEquals(solution(matrix, 14), false)
  assertEquals(solution(matrix, 36), false)
})

Deno.test("Search 2D Matrix - negative numbers", () => {
  const matrix = [
    [-10, -5, -1, 0],
    [2, 3, 5, 8],
    [10, 12, 15, 20],
  ]
  assertEquals(solution(matrix, -5), true)
  assertEquals(solution(matrix, 0), true)
  assertEquals(solution(matrix, 15), true)
  assertEquals(solution(matrix, -3), false)
  assertEquals(solution(matrix, 4), false)
  assertEquals(solution(matrix, 25), false)
})
