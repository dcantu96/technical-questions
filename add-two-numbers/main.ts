export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const head = new ListNode(0)
  let current = head
  let carry = 0
  let p1 = l1
  let p2 = l2

  while (p1 !== null || p2 !== null) {
    const x = (p1 !== null) ? p1.val : 0
    const y = (p2 !== null) ? p2.val : 0
    const sum = carry + x + y
    carry = Math.floor(sum / 10)
    current.next = new ListNode(sum % 10)
    current = current.next
    if (p1 !== null) p1 = p1.next
    if (p2 !== null) p2 = p2.next
  }
  if (carry > 0) {
    current.next = new ListNode(carry)
  }
  return head.next
}
