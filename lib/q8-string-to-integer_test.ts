/// <reference path='../jasmine.d.ts' />
import myAtoi from "./q8-string-to-integer";

describe('String to integer solution', () => {
    it('should be able to find right answser', () => {
        let str = '321';
        let expectedResult = 321;
        let actualResult = myAtoi(str);
        expect(actualResult).toEqual(expectedResult);
    });
});
