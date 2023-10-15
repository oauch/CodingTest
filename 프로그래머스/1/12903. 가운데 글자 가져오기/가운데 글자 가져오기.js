function solution(s) {
    var answer = '';
    middle = Math.round(s.length / 2);
    if (s.length % 2 === 0) {
        answer += s[middle - 1];
        answer += s[middle];
    } else {
        answer += s[middle - 1];
    }
    return answer;
}