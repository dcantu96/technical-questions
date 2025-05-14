import { assertEquals } from "jsr:@std/assert"
import { addTwoNumbers, ListNode } from "./main.ts"

function arrayToList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null

  const head = new ListNode(arr[0])
  let current = head

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i])
    current = current.next
  }

  return head
}

Deno.test("simple adding works correctly", () => {
  assertEquals(
    addTwoNumbers(arrayToList([1, 2, 3]), arrayToList([1, 2, 3])),
    arrayToList([2, 4, 6]),
  )
})

Deno.test("carry value is handled as expected", () => {
  assertEquals(
    addTwoNumbers(arrayToList([9, 7, 3]), arrayToList([6, 1, 0])),
    arrayToList([5, 9, 3]),
  )
  assertEquals(
    addTwoNumbers(arrayToList([9, 7, 8]), arrayToList([6, 1, 8])),
    arrayToList([5, 9, 6, 1]),
  )
})
