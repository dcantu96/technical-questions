import { assertEquals } from "jsr:@std/assert"
import { missingInteger } from "./main.ts"

Deno.test("check if basic cases are valid", () => {
  assertEquals(missingInteger([1, 2, 3]), 4)
  assertEquals(missingInteger([1, 2, 3, 4]), 5)
  assertEquals(missingInteger([2, 3, 5]), 1)
})

Deno.test("check if edge cases are valid", () => {
  assertEquals(missingInteger([1, 2, 3, 4, 5]), 6)
  assertEquals(missingInteger([1, 2, 3, 4, 5, 6]), 7)
  assertEquals(missingInteger([1]), 2)
})

Deno.test("check if negative cases are valid", () => {
  assertEquals(missingInteger([-2, -1, 5, 2, 1, 3, 7, 4]), 6)
  assertEquals(missingInteger([-1, -2, -3]), 1)
})

Deno.test("check duplicate cases", () => {
  assertEquals(missingInteger([3, 2, 3, 1, 3]), 4)
})
