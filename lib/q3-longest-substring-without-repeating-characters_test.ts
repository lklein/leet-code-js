/// <reference path='../jasmine.d.ts' />
import lengthOfLongestSubstring from "./q3-longest-substring-without-repeating-characters";

describe('Longest substring without repeating characters solution', () => {
    it('should be able to find right answser', () => {
        let s = 'abcabcbb';
        let expectedResult = 3;
        let actualResult = lengthOfLongestSubstring(s);
        expect(actualResult).toEqual(expectedResult);
        s = 'bbbbb';
        expectedResult = 1;
        actualResult = lengthOfLongestSubstring(s);
        expect(actualResult).toEqual(expectedResult);
        s = 'pwwkew';
        expectedResult = 3;
        actualResult = lengthOfLongestSubstring(s);
        expect(actualResult).toEqual(expectedResult);
        s = 'abcabcbb';
        expectedResult = 3;
        actualResult = lengthOfLongestSubstring(s);
        expect(actualResult).toEqual(expectedResult);
    });
});
