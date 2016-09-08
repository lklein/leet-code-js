/// <reference path='../jasmine.d.ts' />
import convert from "./q6-zigzag-conversion";

describe('Zigzag conversion solution', () => {
    it('should be able to find right answser', () => {
        let s= 'PAYPALISHIRING';
        let numRows = 3;
        let expectedResult = 'PAHNAPLSIIGYIR';
        let actualResult = convert(s, numRows);
        expect(actualResult).toEqual(expectedResult);
        s= 'A';
        numRows = 1;
        expectedResult = 'A';
        actualResult = convert(s, numRows);
        expect(actualResult).toEqual(expectedResult);
    });
});
