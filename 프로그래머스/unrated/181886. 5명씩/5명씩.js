function solution(names) {
    let answer = [];
    for (let i = 0; i < names.length; i++) {
        if (names.length < 5) {
            answer.push[0];
        }
        if (i % 5 === 0) {
            answer.push(names[i]);
        }
    }
    return answer;
}