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

Deno.test("Longest Substring Without Repeating Characters - edge cases", () => {
  // Empty string
  assertEquals(solution(""), 0)

  // Single character
  assertEquals(solution("a"), 1)

  // All unique characters
  assertEquals(solution("abcdef"), 6)

  // Two characters
  assertEquals(solution("ab"), 2)
  assertEquals(solution("aa"), 1)
})
