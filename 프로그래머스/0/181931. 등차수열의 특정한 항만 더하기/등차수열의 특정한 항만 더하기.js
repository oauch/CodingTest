function solution(a, d, included) {
    let result = 0;
    for (i of included) {
        if (i === true) result += a;
        a += d;
    }
    return result;
}
