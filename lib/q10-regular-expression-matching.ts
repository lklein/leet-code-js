function isMatchFromIndex(s: string, p: string, sIndex: number, pIndex: number): boolean {
    if (p.length === pIndex) { return s.length === sIndex; }
    if (p.length - pIndex === 1 || p[pIndex + 1] !== '*') {
        // next char is not '*'
        if (p[pIndex] === s[sIndex] || (p[pIndex] === '.' && s.length !== sIndex)) {
            return isMatchFromIndex(s, p, sIndex + 1, pIndex + 1);
        }
        return false;
    } else {
        // next char is '*'
        while(p[pIndex] === s[sIndex] || (p[pIndex] === '.' && s.length !== sIndex)) {
            if (isMatchFromIndex(s, p, sIndex, pIndex + 2)) { return true; }
            sIndex++;
        }
        return isMatchFromIndex(s, p, sIndex, pIndex + 2);
    }
}

export default function isMatch(s: string, p: string): boolean {
    return isMatchFromIndex(s, p, 0, 0);
}
