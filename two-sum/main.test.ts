import { assertEquals } from "jsr:@std/assert"
import { twoSum } from "./main.ts"

Deno.test("basic two sum", () => {
  assertEquals(twoSum([2, 7, 11, 15], 9), [0, 1])
  assertEquals(twoSum([3, 2, 4], 6), [1, 2])
  assertEquals(twoSum([3, 3], 6), [0, 1])
})

Deno.test("empty case", () => {
  assertEquals(twoSum([], 9), [])
})

Deno.test("no pair found", () => {
  assertEquals(twoSum([1, 5, 9], 3), [])
})
