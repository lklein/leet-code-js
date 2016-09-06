function longestPalindromeCandidate(s: string): string {
    // Using a two-dimension to store the following value: [start, end] means if corresponding
    // string is a palindrome string
    let length = s.length;
    let flags = new Array(length);

    for(let index = 0; index < length; index++) {
        flags[index] = new Array(length);
    }
    let returnLength = 1, returnStart = 0;
    for(let end = 0; end < length; end++) {
        flags[end][end] = true;
        for(let start = 0; start < end; start++) {
            flags[start][end] = (s[start] === s[end] && (end - start < 2 || flags[start + 1][end - 1]));
            if (flags[start][end] && returnLength < (end - start + 1)) {
                returnLength = end - start + 1;
                returnStart = start;
            }
        }
    }
    return s.substr(returnStart, returnLength);
}

function longestPalindromeCandidate2(s: string): string {
    // Manacher's algorithm
    let length = s.length;
    let newStrParts = ['$#'];
    for(let index = 0; index < length; index++) {
        newStrParts.push(s[index]);
        newStrParts.push('#');
    }
    let newStr = newStrParts.join('');
    let newStrLength = newStr.length;
    let radiusCache: number[] = [1];
    let right = 0, center = 0, returnLength = 0, returnCenter = 0;
    for(let index = 1; index < newStrLength; index++) {
        // Make radius as much as possible
        let currentRadius = right > index ? Math.min(radiusCache[2 * center - index], right - index) : 1;
        while(newStr[index + currentRadius] === newStr[index - currentRadius]) currentRadius++;
        if (right < index + currentRadius) {
            right = index + currentRadius;
            center = index;
        }
        if (returnLength < currentRadius) {
            returnLength = currentRadius;
            returnCenter = index;
        }
        radiusCache.push(currentRadius);
    }
    return s.substr((returnCenter - returnLength) / 2, returnLength - 1);
}

export default function longestPalindrome(s: string): string {
    let length = s.length;
    // Go to each character and expand there to see return radius
    let newStrParts = ['$#'];
    for(let index = 0; index < length; index++) {
        newStrParts.push(s[index]);
        newStrParts.push('#');
    }
    let newStr = newStrParts.join('');
    let newStrLength = newStr.length;
    let radiusCache: number[] = [1];
    let right = 0, center = 0, returnLength = 0, returnCenter = 0;
    for(let index = 1; index < newStrLength; index++) {
        // Make radius as much as possible
        let currentRadius = 1;
        while(newStr[index + currentRadius] === newStr[index - currentRadius]) currentRadius++;
        if (right < index + currentRadius) {
            right = index + currentRadius;
            center = index;
        }
        if (returnLength < currentRadius) {
            returnLength = currentRadius;
            returnCenter = index;
        }
        radiusCache.push(currentRadius);
    }
    return s.substr((returnCenter - returnLength) / 2, returnLength - 1);
}
