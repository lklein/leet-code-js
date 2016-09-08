/// <reference path='../jasmine.d.ts' />
import isPalindrome from "./q9-palindrome-number";

describe('Palindrome number solution', () => {
    it('should be able to find right answser', () => {
        let x = 121;
        let actualResult = isPalindrome(x);
        expect(actualResult).toBeTruthy();
        x = 1000021;
        actualResult = isPalindrome(x);
        expect(actualResult).toBeFalsy();
    });
});
