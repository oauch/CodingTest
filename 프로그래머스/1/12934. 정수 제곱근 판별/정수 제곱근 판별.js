function solution(n) {
    let result = 0;
    let a = 0;
    result = Math.sqrt(n)
    result % 1 === 0 ?  a = Math.pow(result + 1, 2) : a = -1;
    return a;
}
