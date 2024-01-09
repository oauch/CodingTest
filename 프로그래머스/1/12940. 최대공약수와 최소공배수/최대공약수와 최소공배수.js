function solution(n, m) {
    const result = [];
    const gcd = (a, b) => {
        if (b === 0) return a;
        return gcd(b, a % b);
    };
    const lcm = (a, b) => (a * b) / gcd(a, b);
    result.push(gcd(n, m));
    result.push(lcm(n, m));
    return result;
}