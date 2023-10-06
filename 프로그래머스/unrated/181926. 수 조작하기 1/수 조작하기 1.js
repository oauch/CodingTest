function solution(n, control) {
    var answer = 0;
    for (let i of control) {
        if (i === 'w') {
            n += 1;
        } else if (i === 's') {
            n -= 1;
        } else if (i === 'd') {
            n += 10;
        } else {
            n -= 10;
        }
    }
    answer += n;
    return answer;
}