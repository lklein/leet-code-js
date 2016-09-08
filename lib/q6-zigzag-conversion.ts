export default function convert(s: string, numRows: number): string {
    if (numRows === 1) return s;
    // Each zig-zag's length is 2 * numRows - 2
    // For line l, l and 2 * numRows - 2 - l should be added
    let zigZagLength = 2 * numRows - 2;
    let length = s.length;
    let toReturn: string[] = [];
    for(let line = 0; line < numRows; line++) {
        let start = line, next = zigZagLength - start;
        while(start < length) {
            toReturn.push(s[start]);
            if (line !== 0 && start !== next && next < length) {
                toReturn.push(s[next]);
            }
            start += zigZagLength;
            next += zigZagLength;
        }
    }
    return toReturn.join('');
}
