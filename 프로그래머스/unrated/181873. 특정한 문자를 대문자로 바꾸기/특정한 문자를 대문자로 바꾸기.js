function solution(my_string, alp) {
    let answer = '';
    for (let string of my_string) {
        if (string === alp) {
            answer += string.toUpperCase();
        } else {
            answer += string;
        }
    }
    return answer;
}