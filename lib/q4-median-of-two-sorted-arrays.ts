// findIndex is 1-based
// startIndex1 and startIndex2 references to the start of search area
// If startIndex is equals to length, it means all values have been searched
function findNumber(nums1: number[], nums2: number[],
                    startIndex1: number, startIndex2: number, findIndex: number): number {
    // The first array is always shorter than the second array
    if (nums1.length - startIndex1 > nums2.length - startIndex2) {
        return findNumber(nums2, nums1, startIndex2, startIndex1, findIndex);
    }
    if (nums1.length === startIndex1) {
        // Use the value in second array if all values in the first array have been used
        return nums2[startIndex2 + findIndex - 1];
    }
    if (findIndex === 1) {
        // If the first
        return Math.min(nums1[startIndex1], nums2[startIndex2]);
    }

    let step1 = Math.min(Math.floor(findIndex / 2), nums1.length - startIndex1);
    let step2 = findIndex - step1;
    let candidate1 = nums1[startIndex1 + step1 - 1];
    let candidate2 = nums2[startIndex2 + step2 - 1];
    if (candidate1 < candidate2) {
        return findNumber(nums1, nums2, startIndex1 + step1, startIndex2, findIndex - step1);
    } else if (candidate1 > candidate2) {
        return findNumber(nums1, nums2, startIndex1, startIndex2 + step2, findIndex - step2);
    } else {
        return candidate1;
    }
}

export default function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let total = nums1.length + nums2.length;
    if (total % 2) {
        return findNumber(nums1, nums2, 0, 0, (total + 1)/ 2);
    } else {
        return (findNumber(nums1, nums2, 0, 0, total / 2) + findNumber(nums1, nums2, 0, 0, total / 2 + 1)) / 2;
    }
}
