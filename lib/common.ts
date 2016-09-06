// Common data structure for problems
export class ListNode<T> {
    public val: T;
    public next: ListNode<T>;
    constructor(val: T) {
        this.val = val;
    }
}
