/// <reference path='../jasmine.d.ts' />
import { ListNode } from "./common";

export function arrayToLinkedList<T>(values: T[]): ListNode<T> {
    let toReturn: ListNode<T> = null;
    let current: ListNode<T> = null;
    values.forEach(value => {
        if (!current) {
            toReturn = current = new ListNode(value);
        } else {
            current.next = new ListNode(value);
            current = current.next;
        }
    });
    return toReturn;
}

export function nonCircularLinkedListToArray<T>(list: ListNode<T>): T[] {
    let toReturn: T[] = [];
    while(list) {
        toReturn.push(list.val);
        list = list.next;
    }
    return toReturn;
}
