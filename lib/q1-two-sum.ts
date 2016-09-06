export default function findTwoSum(nums: number[], target: number): number[] {
    // 1. Store the number in hash table with number as key and index as value
    // 2. For each number, check if the corresponding one in hash table
    // Time complexity is O(n). Space complexity is O(n)
    let numberHash: { [key: number]: number; } = {};
    nums.forEach((num, index) => numberHash[num] = index);
    for(let index = 0; index < nums.length; index++) {
        let num = nums[index];
        let anotherIndex = numberHash[target - num];
        if (anotherIndex != null && anotherIndex !== index) {
            return [index, anotherIndex];
        }
    }
}
