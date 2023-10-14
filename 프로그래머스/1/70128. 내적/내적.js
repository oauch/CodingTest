function solution(a, b) {
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        ab = a[i] * b[i];
        result += ab;
    }
    return result;
}
