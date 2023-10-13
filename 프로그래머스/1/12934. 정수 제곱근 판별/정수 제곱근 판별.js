function solution(n) {
    let result = 0;
    result = Math.sqrt(n)
    if (result % 1 === 0) {
        return Math.pow(result + 1, 2);
    } else {
        return -1;
    }
}








         