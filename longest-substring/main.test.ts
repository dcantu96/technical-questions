import { assertEquals } from "jsr:@std/assert"
import { lengthOfLongestSubstring } from "./mains.ts"

Deno.test("simple examples", () => {
  assertEquals(
    lengthOfLongestSubstring("abcabcbb"),
    3,
  )
  assertEquals(
    lengthOfLongestSubstring("bbbbb"),
    1,
  )
  assertEquals(
    lengthOfLongestSubstring("pwwkew"),
    3,
  )
})
