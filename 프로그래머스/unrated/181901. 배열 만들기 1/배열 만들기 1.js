function solution(n, k) {
    let answer = [];
    let sum = k;
    for (let i = sum; i <= n; i += sum) {
        answer.push(i)
    }
    return answer;
}