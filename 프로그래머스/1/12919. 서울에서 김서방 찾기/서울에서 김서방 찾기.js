function solution(seoul) {
    var answer = '';
    for (let i of seoul) {
        if (i === "Kim") {
            answer = `김서방은 ${seoul.indexOf(i)}에 있다`;
        }
    }
    return answer;
}