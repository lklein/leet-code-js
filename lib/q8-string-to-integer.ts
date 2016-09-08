export default function myAtoi(str: string): number {
    let sign = true;
    let toReturn = 0;
    let length = str.length;

    let started = false;
    let zero = '0'.charCodeAt(0), nine = '9'.charCodeAt(0),
        plus = '+'.charCodeAt(0), minus = '-'.charCodeAt(0), space = ' '.charCodeAt(0);
    for(let index = 0; index < length; index++) {
        let char = str.charCodeAt(index);
        if (char >= zero && char <= nine) {
            // Get a number, start parsing if not and add number
            if (!started) started = true;
            toReturn = toReturn * 10 + char - zero;
        } else if (started) { break; }  // End parsing if see other char after started
        else if (char === plus || char === minus) {
            started = true;
            sign = char === plus;
        } else if (char === space) {
            continue;
        } else { return 0; } // Error when seeing other char before started
    }
    let max32bit = Math.pow(2, 31);
    if (sign && toReturn > max32bit - 1) { return max32bit - 1; }
    else if (!sign && toReturn > max32bit) { return -max32bit; }
    return sign ? toReturn : -toReturn;
}
