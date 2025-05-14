import { assertEquals } from "jsr:@std/assert"
import { findEvenNumbers } from "./main.ts"

Deno.test("basic three digit examples", () => {
  assertEquals(findEvenNumbers([2, 1, 3, 0]), [
    102,
    120,
    130,
    132,
    210,
    230,
    302,
    310,
    312,
    320,
  ])
  assertEquals(findEvenNumbers([2, 2, 8, 8, 2]), [
    222,
    228,
    282,
    288,
    822,
    828,
    882,
  ])
  assertEquals(findEvenNumbers([3, 7, 5]), [])
})
