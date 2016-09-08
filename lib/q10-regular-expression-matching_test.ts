/// <reference path='../jasmine.d.ts' />
import isMatch from "./q10-regular-expression-matching";

describe('Palindrome number solution', () => {
    it('should be able to find right answser', () => {
        let s = 'aa';
        let p = 'a';
        let actualResult = isMatch(s, p);
        expect(actualResult).toBeFalsy();
        s = 'aa';
        p = 'aa';
        actualResult = isMatch(s, p);
        expect(actualResult).toBeTruthy();
        s = 'aaa';
        p = 'aa';
        actualResult = isMatch(s, p);
        expect(actualResult).toBeFalsy();
        s = 'aa';
        p = 'a*';
        actualResult = isMatch(s, p);
        expect(actualResult).toBeTruthy();
        s = 'aa';
        p = '.*';
        actualResult = isMatch(s, p);
        expect(actualResult).toBeTruthy();
        s = 'ab';
        p = '.*';
        actualResult = isMatch(s, p);
        expect(actualResult).toBeTruthy();
        s = 'aab';
        p = 'c*a*b';
        actualResult = isMatch(s, p);
        expect(actualResult).toBeTruthy();
        s = 'ab';
        p = '.*c';
        actualResult = isMatch(s, p);
        expect(actualResult).toBeFalsy();
        s = 'cacbbacabacacaba';
        p = 'b*c*.*.*.*c*c*c*ac';
        actualResult = isMatch(s, p);
        expect(actualResult).toBeFalsy();
    });
});
