function solution(n) {
    let result = 0;
    let fb0 = 0;
    let fb1 = 1;
    
    for (let i = 2; i <= n; i++) {
        result = (fb0 + fb1) % 1234567;
        fb0 = fb1;
        fb1 = result
    }
    return result;
}
