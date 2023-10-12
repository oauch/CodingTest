function solution(n) {
    let answer = [];
    for (let i of String(n)) {
        answer.push(Number(i));
    }
    answer.reverse();
    return answer;
}