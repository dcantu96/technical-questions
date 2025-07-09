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

Deno.test("Longest Substring Without Repeating Characters - various patterns", () => {
  // Longest substring at the beginning
  assertEquals(solution("abcdefabc"), 6) // "abcdef"

  // Longest substring at the end
  assertEquals(solution("abcabcdef"), 6) // "abcdef"

  // Longest substring in the middle
  assertEquals(solution("abcdefabcd"), 6) // "cdefab" or "defabc"

  // Repeating pattern
  assertEquals(solution("abcabcabcabc"), 3) // "abc"
})

Deno.test("Longest Substring Without Repeating Characters - special characters", () => {
  // With numbers
  assertEquals(solution("123321"), 3) // "123" or "321"

  // With special characters
  assertEquals(solution("a!@#$%a"), 6) // "a!@#$%" or "!@#$%a"

  // Mixed characters, numbers, and symbols
  assertEquals(solution("a1b2c3!@#"), 9) // entire string

  // With spaces
  assertEquals(solution("a b c a"), 3) // "a b" or "b c" or " c a"

  // Punctuation
  assertEquals(solution("hello,world!"), 7) // ",world!"
})

Deno.test("Longest Substring Without Repeating Characters - longer strings", () => {
  // Full alphabet
  assertEquals(solution("abcdefghijklmnopqrstuvwxyz"), 26)

  // Pattern with long unique sequence
  assertEquals(solution("aabcdefghijklmnopqrstuvwxyzaa"), 26)

  // Complex case
  assertEquals(solution("abcdefghabcdefgh"), 8) // "abcdefgh"
})
