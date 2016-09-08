export default function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    let divisor = 1;
    while (x / divisor >= 10) { divisor *= 10; }
    while (x > 0) {
        let quotient = Math.floor(x / divisor);
        let remainder = x % 10;
        if (quotient !== remainder) { return false; }
        x = Math.floor(x % divisor / 10);
        divisor /= 100;
    }
    return true;
}
