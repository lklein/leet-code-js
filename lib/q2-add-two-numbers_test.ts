/// <reference path='../jasmine.d.ts' />
import {arrayToLinkedList, nonCircularLinkedListToArray} from "./test-util";
import addTwoNumbers from "./q2-add-two-numbers";

describe('Add two numbers solution', () => {
    it('should be able to find right answser', () => {
        let num1 = arrayToLinkedList([2, 4, 3]);
        let num2 = arrayToLinkedList([5, 6, 4]);
        let expectedResult = [7, 0, 8];
        let actualResult = nonCircularLinkedListToArray(addTwoNumbers(num1, num2));
        expect(actualResult).toEqual(expectedResult);
    });
});
