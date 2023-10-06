function solution(str1, str2) {
    var answer = '';
    for (let i = 0; i < str1.length; i++) {
        result = str1[i] + str2[i];
        answer += result;
    }
    return answer;
}