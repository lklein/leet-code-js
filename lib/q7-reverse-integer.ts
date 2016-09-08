export default function reverse(x: number): number {
    let sign = x > 0;
    if (!sign) x = -x;

    let toReturn = 0;
    while (x) {
        toReturn = toReturn * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    let max32bit = Math.pow(2, 31);
    if (sign ? toReturn > max32bit - 1 : toReturn > max32bit) { return 0; }
    return sign ? toReturn : -toReturn;
}
