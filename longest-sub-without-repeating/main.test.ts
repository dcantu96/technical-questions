import { assertEquals } from "jsr:@std/assert"
import { solution } from "./main.ts"

Deno.test("Longest Substring Without Repeating Characters - basic examples", () => {
  // Example 1 from question
  assertEquals(solution("zxyzxyz"), 3) // "xyz"

  // Example 2 from question
  assertEquals(solution("xxxx"), 1) // "x"

  // Classic examples
  assertEquals(solution("abcabcbb"), 3) // "abc"
  assertEquals(solution("bbbbb"), 1) // "b"
  assertEquals(solution("pwwkew"), 3) // "wke"
})
