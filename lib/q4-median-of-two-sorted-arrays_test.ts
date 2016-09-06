/// <reference path='../jasmine.d.ts' />
import findMedianSortedArrays from "./q4-median-of-two-sorted-arrays";

describe('Median of two sorted arrays solution', () => {
    it('should be able to find right answser', () => {
        let nums1 = [1, 3], nums2 = [2]
        let expectedResult = 2;
        let actualResult = findMedianSortedArrays(nums1, nums2);
        expect(actualResult).toEqual(expectedResult);
        nums1 = [1, 2], nums2 = [3, 4]
        expectedResult = 2.5;
        actualResult = findMedianSortedArrays(nums1, nums2);
        expect(actualResult).toEqual(expectedResult);
    });
});
