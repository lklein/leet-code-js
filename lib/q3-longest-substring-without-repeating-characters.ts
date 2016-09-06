export default function lengthOfLongestSubstring(s: string): number {
    // Having a sliding window [start, end] to present current substring without repeating characters.
    // Having a hash table to store the start index of substring without repeating characters if repeating
    // character is found (typically the index + 1 of the character).
    // Actually we only need to update start when a repeating character is found.
    // Time complexity is O(n). Space complexity is O(min(m, n)) m is the size of the charset
    let length = s.length, toReturn = 0;
    let indexHash: { [ch: string]: number; } = {};
    let start = 0;
    for(let end = 0; end < length; end++) {
        let ch = s[end];
        let existingIndex = indexHash[ch];
        if (existingIndex != null) {
            // A repeating character is found
            start = Math.max(existingIndex, start);
        }
        toReturn = Math.max(toReturn, end - start + 1);
        indexHash[ch] = end + 1;
    }
    return toReturn;
}
