/// <reference path='../jasmine.d.ts' />
import findTwoSum from "./q1-two-sum";

describe('Two sum solution', () => {
    it('should be able to find right answser', () => {
        let nums = [2, 7, 11, 15], target = 9;
        let expectedResult = [0, 1];
        let actualResult = findTwoSum(nums, target).sort();
        expect(actualResult).toEqual(expectedResult);
        nums = [3, 2, 4];
        target = 6;
        expectedResult = [1, 2];
        actualResult = findTwoSum(nums, target).sort();
        expect(actualResult).toEqual(expectedResult);
    });
});
