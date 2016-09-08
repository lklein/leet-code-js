/// <reference path='../jasmine.d.ts' />
import reverse from "./q7-reverse-integer";

describe('Reverse integer solution', () => {
    it('should be able to find right answser', () => {
        let x= 123;
        let expectedResult = 321;
        let actualResult = reverse(x);
        expect(actualResult).toEqual(expectedResult);
        x= -123;
        expectedResult = -321;
        actualResult = reverse(x);
        expect(actualResult).toEqual(expectedResult);
    });
});
