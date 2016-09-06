import { ListNode } from "./common";

export default function addTwoNumbers(num1: ListNode<number>, num2: ListNode<number>): ListNode<number> {
    let toReturn: ListNode<number> = new ListNode(0);
    let current = toReturn;
    let carry = 0;
    while(num1 || num2) {
        let value1 = num1 && num1.val || 0;
        let value2 = num2 && num2.val || 0;
        let sum = value1 + value2 + carry;
        carry = sum >= 10 ? 1 : 0;
        sum = sum % 10;
        current.next = new ListNode(sum);
        current = current.next;
        num1 = num1 && num1.next;
        num2 = num2 && num2.next;
    }
    if (carry) {
        current.next = new ListNode(carry);
    }
    return toReturn.next;
}
