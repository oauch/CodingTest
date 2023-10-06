function solution(a, b) {
    var answer = 0;
    ab = String(a) + String(b);
    ba = String(b) + String(a);
    if (Number(ab) > Number(ba)) {
        answer += Number(ab);
    } else {
        answer += Number(ba);
    }
    return answer;
}